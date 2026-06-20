#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给法术添加 conflicts 字段（精确行处理版）

import json, re

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

conflicts_db = {
    "invisibility": [
        {"point": "施法是否打破隐形",
         "phbRule": "PHB：施展法术会打破隐形，除非法术范围限制为'只有自己'且非攻击性。",
         "controversy": "玩家常争议对自己施展增益法术是否打破隐形。Strictly yes但许多DM允许。",
         "suggestion": "建议house rule：对自己施展的非攻击性法术不打破隐形。",
         "source": "PHB p.296"},
        {"point": "隐形的精确感知DC",
         "phbRule": "精确感知隐形生物需要Spot DC=20+SL。",
         "controversy": "PHB说'可以被听见'但未明确听见的DC。",
         "suggestion": "精确位置Spot DC=20；感知方向只要有声音即可。",
         "source": "PHB p.296 / SRD"}
    ],
    "dispel_magic": [
        {"point": "解除魔法的施法者等级检定方式",
         "phbRule": "需对每个被解除的法术独立进行1d20+CL vs 10+原CL的检定。",
         "controversy": "许多DM只投一次检定用于所有法术，简化但非PHB原文。",
         "suggestion": "建议每个法术独立检定；物品用法术创建者CL。",
         "source": "PHB p.223 / SRD"}
    ],
    "haste": [
        {"point": "加速术的额外攻击（3.0 vs 3.5e）",
         "phbRule": "3.5e加速术只给予'+1次攻击'，而非3.0的整轮额外攻击。",
         "controversy": "许多玩家仍沿用3.0规则。额外攻击能否用副手？PHB未明确。",
         "suggestion": "严格使用3.5e规则：+1次攻击，可用任何已持武器。",
         "source": "PHB p.283 / 3.5e FAQ v2.0"}
    ],
    "polymorph": [
        {"point": "变化术的属性替换范围（最具争议）",
         "phbRule": "获得目标生物的所有生理属性和特殊攻击/品质，但保留自己心智属性/HP/豁免/BAB。",
         "controversy": "D&D 3.5e最争议规则。'特殊攻击/品质'是否包括Ex能力？PHB表述模糊。",
         "suggestion": "建议采用Rules Compendium 2006澄清：只给予形态相关能力。",
         "source": "PHB p.263 / Rules Compendium 2006 p.121-126"},
        {"point": "变化术与类型改变",
         "phbRule": "改变生物类型为'变化形态'，保留原亚型。对不死/构装体/元素无效。",
         "controversy": "变化后是否获得新类型的免疫/易伤？部分DM认为给予类型特质。",
         "suggestion": "只改变物理形态，不改变类型相关免疫/易伤。",
         "source": "PHB p.263 / Rules Compendium p.122"}
    ],
    "teleport": [
        {"point": "传送术的偏差距离计算",
         "phbRule": "偏差=两个d10相乘（范围0-100尺），取决于熟悉程度。",
         "controversy": "'1d10×1d10'的解释，部分线上资料库解释错误。",
         "suggestion": "严格按PHB：两个d10相乘。",
         "source": "PHB p.292 / SRD"},
        {"point": "传送失败与固体障碍",
         "phbRule": "目标区域被固体占据则传送失败，每个参与者受1d10伤害。",
         "controversy": "'固体物质'是否包括水/泥？传送到敌人内部是否自动失败？",
         "suggestion": "目标必须是空旷区域（至少5尺立方）。",
         "source": "PHB p.292 / DMG p.149"}
    ],
    "shapechange": [
        {"point": "变身术获得的能力类型（Su/Sp/Ex）",
         "phbRule": "获得目标生物的所有特殊攻击、特殊品质、和超自然能力（Su）。",
         "controversy": "是否包括Ex能力？类法术能力（Sp）是否被包括？Errata明确包括Sp和Su。",
         "suggestion": "采用3.5e EraErrata：给予Su和Sp能力，但不包括Ex能力。",
         "source": "PHB p.277 / 3.5e EraErrata"}
    ],
    "wish": [
        {"point": "许愿术的DM裁量权与限制",
         "phbRule": "可实现几乎任何愿望，但DM可以限制或扭曲。",
         "controversy": "玩家常试图用许愿术获得超出规则的好处。",
         "suggestion": "游戏前明确限制清单。不能复制9环法术，不能直接杀boss。",
         "source": "PHB p.302 / DMG p.201"},
        {"point": "许愿术复制法术时的XP代价",
         "phbRule": "PHB未明确复制需要XP的法术时是否仍需支付XP。",
         "controversy": "部分DM认为许愿术豁免所有代价，部分认为XP代价不豁免。",
         "suggestion": "建议：许愿术豁免材料/专注，但不豁免XP代价。",
         "source": "社区House Rule / 3.5e FAQ"}
    ],
    "protection_from_energy": [
        {"point": "防护自能量与抵抗能量是否叠加",
         "phbRule": "防护自能量=免疫（12点/轮）。抵抗能量=抗力（10点/轮）。",
         "controversy": "免疫和抗力是否算同类效果？PHB说同类法术效果不叠加。",
         "suggestion": "免疫和抗力不叠加，使用更高优先级（免疫）。",
         "source": "PHB p.266 / 3.5e FAQ"}
    ],
    "greater_invisibility": [
        {"point": "高等隐形攻击后保持隐形",
         "phbRule": "攻击后保持隐形（普通隐形攻击后失效）。",
         "controversy": "'攻击'是否包括攻击性法术？",
         "suggestion": "与普通隐形相同规则，但攻击后不打破。",
         "source": "PHB p.283 / SRD"}
    ],
    "baleful_polymorph": [
        {"point": "恶毒变化术的永久性与解除方式",
         "phbRule": "未通过Fort豁免则变为小动物，变化是永久的（除非解除魔法）。",
         "controversy": "变化后HD是否变为小动物HD？'永久'能否被有限愿望解除？",
         "suggestion": "变化后HD变为小动物HD。可被9环许愿/奇迹解除。",
         "source": "Spell Compendium p.149"}
    ],
    "antimagic_field": [
        {"point": "反魔法力场对魔法物品的影响",
         "phbRule": "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
         "controversy": "魔法武器在力场内是变'普通武器'还是完全消失？",
         "suggestion": "魔法武器变普通武器（失去增强加值）。神术被抑制。",
         "source": "PHB / SRD / 3.5e FAQ v2.0"}
    ],
    "silence": [
        {"point": "沉默术对施法的影响",
         "phbRule": "创造半径为20尺的球形区域，其中所有噪音被抑制。",
         "controversy": "沉默区域内能否施展需要言语成分（V）的法术？",
         "suggestion": "沉默区域内不能施展需要V成分的法术。",
         "source": "PHB p.279 / 社区共识"}
    ],
    "animate_dead": [
        {"point": "操控亡灵的HD上限与控制",
         "phbRule": "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
         "controversy": "亡灵是否有自己的意志？是否需要'邪恶'属性？",
         "suggestion": "亡灵完全服从（无意志）。善良角色施展可能违反职业守则。",
         "source": "PHB p.199 / DMG"}
    ]
}

# 先找到各法术在文件中的行号
# 每个法术对象：起始行 = 有 id:"xxx" 的行，结束行 = 起始行之后第一个以 "  }," 或 "  }" 结尾的行
# 但注意：最后一个字段和 } 在同一行，如 "    classes:{...} },"

# 方案：找到 id 所在行，然后向下找到第一个以 "  }" 开头的行（即对象结束）
# 在那个行之前插入 conflicts（并把那一行的 "  }," 变成 "  }," 但加在 conflicts 之后）

# 实际上更简单：找到 id 行之后，最后一个字段的行（不含 { 或 } 的行中的最后一个）
# 然后在那一行加逗号，在下一行（即 } 行）之前插入 conflicts

# 但最可靠的方法：用大括号计数
def find_spell_lines(lines, spell_id):
    """返回 (start_idx, end_idx) 或 None"""
    for i in range(len(lines)):
        if f'id:"{spell_id}"' in lines[i]:
            # 从这一行开始计数大括号
            depth = 0
            j = i
            # 先算这一行的大括号
            in_str = False
            for ch in lines[j]:
                if ch == '"' and not in_str:
                    in_str = True
                elif ch == '"' and in_str:
                    in_str = False
                elif not in_str:
                    if ch == '{':
                        depth += 1
                    elif ch == '}':
                        depth -= 1
            j += 1
            while j < len(lines) and depth > 0:
                in_str = False
                for ch in lines[j]:
                    if ch == '"' and not in_str:
                        in_str = True
                    elif ch == '"' and in_str:
                        in_str = False
                    elif not in_str:
                        if ch == '{':
                            depth += 1
                        elif ch == '}':
                            depth -= 1
                j += 1
            # j 现在是结束行的下一行（因为循环结束后 j 多算了1）
            end_idx = j - 1
            return (i, end_idx)
    return None

def conflicts_js(arr):
    """把冲突列表转为JS字符串（不含末尾的 }）"""
    result = "    conflicts: [\n"
    for k, c in enumerate(arr):
        result += "      {\n"
        result += f'        point: {json.dumps(c["point"], ensure_ascii=False)},\n'
        if c.get("phbRule"):
            result += f'        phbRule: {json.dumps(c["phbRule"], ensure_ascii=False)},\n'
        if c.get("controversy"):
            result += f'        controversy: {json.dumps(c["controversy"], ensure_ascii=False)},\n'
        if c.get("suggestion"):
            result += f'        suggestion: {json.dumps(c["suggestion"], ensure_ascii=False)},\n'
        if c.get("source"):
            result += f'        source: {json.dumps(c["source"], ensure_ascii=False)}\n'
        # 去掉最后一个逗号（如果有）
        # 上面都加了逗号，现在去掉最后一行的逗号
        # 找到最后一个 \n，如果前面有逗号就去掉
        last_nl = result.rfind('\n', 0, len(result)-1)
        if last_nl >= 0 and result[last_nl-1] == ',':
            result = result[:last_nl-1] + result[last_nl:]
        result += "\n      }"
        if k < len(arr) - 1:
            result += ","
        result += "\n"
    result += "    ]"
    return result

# 处理每个法术
new_lines = []
i = 0
modified = set()

while i < len(lines):
    line = lines[i]
    # 检查是否是我们想修改的法术
    m = re.search(r'id:"(\w+)"', line)
    if m:
        spell_id = m.group(1)
        if spell_id in conflicts_db and spell_id not in modified:
            pos = find_spell_lines(lines, spell_id)
            if pos:
                start_idx, end_idx = pos
                # 把 start_idx 到 end_idx-1 的行加入 new_lines
                # 然后插入 conflicts
                # 然后加入 end_idx 行
                # 但注意：end_idx 行的格式是 "    classes:{...} }," 
                # 我们需要把 end_idx 行拆分为：字段部分 + "  }," 
                # 实际上，我们直接在 end_idx 行之前插入 conflicts，并修改 end_idx 行
                
                # 把 start_idx 到 end_idx 的行都加入 new_lines（暂时）
                # 然后修改 new_lines 的最后一个元素（即 end_idx 行）
                for k in range(start_idx, end_idx + 1):
                    new_lines.append(lines[k])
                
                # 现在 new_lines 的最后一行是 end_idx 行
                # 格式类似： "    classes:{wizard:1, sorcerer:1, cleric:1} },\n"
                # 我们需要把它变成：
                # "    classes:{wizard:1, sorcerer:1, cleric:1},\n"
                # 然后加 conflicts
                # 然后加 "  },\n"
                
                end_line = new_lines[-1]
                # 去掉结尾的空白
                end_line_stripped = end_line.rstrip()
                
                # end_line_stripped 类似 "    classes:{...} }," 或 "    classes:{...} }"
                # 找到最后一个 " }" 的位置
                # 实际上，我们需要把 "  }" 或 "  }," 从这一行去掉
                # 然后在 new_lines 中替换最后一行为修改后的版本
                
                # 找到 " }" 的位置（在行末）
                # 假设格式是 "... }," 或 "... }"
                if end_line_stripped.endswith('},{'):
                    # 不太可能
                    pass
                elif end_line_stripped.endswith('}'):
                    # 去掉末尾的 " }"
                    base = end_line_stripped[:-2]  # 去掉 " }"
                    comma_suffix = ""
                elif end_line_stripped.endswith('},'):
                    base = end_line_stripped[:-2]  # 去掉 "},"
                    comma_suffix = ","
                else:
                    # 不知名格式，跳过
                    print(f"未知结束行格式: {end_line_stripped}")
                    i = end_idx + 1
                    continue
                
                # 替换 new_lines 的最后一行
                new_lines[-1] = base + ',\n'
                
                # 插入 conflicts
                conflicts_text = conflicts_js(conflicts_db[spell_id])
                for cl in conflicts_text.split('\n'):
                    new_lines.append(cl + '\n')
                
                # 加结束行
                if comma_suffix:
                    new_lines.append('  },\n')
                else:
                    new_lines.append('  },\n')
                
                modified.add(spell_id)
                print(f"已添加 conflicts → {spell_id}")
                
                i = end_idx + 1
                continue
    
    new_lines.append(line)
    i += 1

# 写回
with open(FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"\n完成！共修改 {len(modified)} 个法术：{modified}")
