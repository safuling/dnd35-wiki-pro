#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给法术添加 conflicts 字段（逐行处理版，最可靠）

import json, re

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 冲突数据（同一份）
conflicts_db = {
    "identify": [
        {"point": "鉴定术的材料成分与施法时间",
         "phbRule": "PHB规定需要100gp宝石粉尘+1小时施法。",
         "controversy": "许多DM简化为标准动作免费鉴定，忽略了PHB原文的平衡设计。",
         "suggestion": "建议DM在游戏前明确使用哪套规则并达成共识。",
         "source": "PHB p.242 / SRD"},
        {"point": "鉴定术是否需要奥术检定",
         "phbRule": "PHB原文未要求奥术检定，只需施法并消耗材料。",
         "controversy": "常见house rule要求DC=物品CL的奥术检定，但非PHB原文。",
         "suggestion": "如DM拟加入检定，建议DC=15，并在游戏前说明。",
         "source": "社区House Rule"}
    ],
    "invisibility": [
        {"point": "施法是否打破隐形",
         "phbRule": "PHB：施展法术会打破隐形，除非法术范围限制为'只有自己'且非攻击性。",
         "controversy": "玩家常争议对自己施展增益法术是否打破隐形。Strictly yes但许多DM允许。",
         "suggestion": "建议house rule：对自己施展的非攻击性法术不打破隐形。",
         "source": "PHB p.296 / 社区共识"},
        {"point": "隐形的精确感知DC",
         "phbRule": "精确感知隐形生物需要Spot DC=20+SL。",
         "controversy": "'可以被听见'但未明确听见的DC，部分DM用Spot DC=0。",
         "suggestion": "建议：精确位置Spot DC=20；感知方向只要有声音即可。",
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
         "suggestion": "建议：只改变物理形态，不改变类型相关免疫/易伤。",
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
         "controversy": "玩家常试图用许愿术获得超出规则的好处。需要在游戏前明确限制。",
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
         "suggestion": "建议：免疫和抗力不叠加，使用更高优先级（免疫）。",
         "source": "PHB p.266 / 3.5e FAQ"}
    ],
    "greater_invisibility": [
        {"point": "高等隐形攻击后保持隐形",
         "phbRule": "攻击后保持隐形（普通隐形攻击后失效）。",
         "controversy": "'攻击'是否包括攻击性法术？高等隐形是否更难被侦察？",
         "suggestion": "与普通隐形相同规则，但攻击后不打破。侦察DC不变。",
         "source": "PHB p.283 / SRD"}
    ],
    "baleful_polymorph": [
        {"point": "恶毒变化术的永久性与解除方式",
         "phbRule": "未通过Fort豁免则变为小动物，变化是永久的（除非解除魔法）。",
         "controversy": "变化后HD是否变为小动物HD？'永久'能否被有限愿望解除？",
         "suggestion": "变化后HD变为小动物HD。可被9环许愿/奇迹解除。",
         "source": "Spell Compendium p.149 / 社区共识"}
    ],
    "antimagic_field": [
        {"point": "反魔法力场对魔法物品的影响",
         "phbRule": "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
         "controversy": "魔法武器在力场内是变'普通武器'还是完全消失？",
         "suggestion": "严格PHB规则：魔法武器变普通武器（失去增强加值）。",
         "source": "PHB / SRD / 3.5e FAQ v2.0"}
    ],
    "silence": [
        {"point": "沉默术对施法的影响",
         "phbRule": "创造半径为20尺的球形区域，其中所有噪音被抑制。",
         "controversy": "沉默区域内能否施展需要言语成分（V）的法术？",
         "suggestion": "建议：沉默区域内不能施展需要V成分的法术。",
         "source": "PHB p.279 / SRD / 社区共识"}
    ],
    "animate_dead": [
        {"point": "操控亡灵的HD上限与控制",
         "phbRule": "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
         "controversy": "亡灵是否有自己的意志？是否需要'邪恶'属性？",
         "suggestion": "建议：亡灵完全服从（无意志）。善良角色施展可能违反职业守则。",
         "source": "PHB p.199 / DMG / 社区共识"}
    ]
}

def build_conflicts_block(arr):
    """构建 conflicts 字段的文本块（不含缩进，调用者负责缩进）"""
    lines_out = []
    lines_out.append("    conflicts: [")
    for i, c in enumerate(arr):
        lines_out.append("      {")
        lines_out.append(f'        point: {json.dumps(c["point"], ensure_ascii=False)},')
        if c.get("phbRule"):
            lines_out.append(f'        phbRule: {json.dumps(c["phbRule"], ensure_ascii=False)},')
        if c.get("controversy"):
            lines_out.append(f'        controversy: {json.dumps(c["controversy"], ensure_ascii=False)},')
        if c.get("suggestion"):
            lines_out.append(f'        suggestion: {json.dumps(c["suggestion"], ensure_ascii=False)},')
        if c.get("source"):
            lines_out.append(f'        source: {json.dumps(c["source"], ensure_ascii=False)}')
        # 去掉最后一行的逗号（如果不是最后一个元素）
        # 上面都加了逗号，现在去掉最后一行的逗号
        last_line = lines_out[-1]
        if last_line.rstrip().endswith(','):
            lines_out[-1] = last_line.rstrip()[:-1]
        lines_out.append("      }")
        if i < len(arr) - 1:
            lines_out.append("      },}")
        else:
            lines_out.append("      }")
    lines_out.append("    ]")
    return "\n".join(lines_out)

# 逐行扫描，找到目标法术后插入 conflicts
new_lines = []
i = 0
modified = []
skip_until = -1

while i < len(lines):
    line = lines[i]
    
    # 检查是否是我们想修改的法术的开始行
    m = re.match(r'\s*\{\s*id:"(\w+)"', line)
    if m and skip_until == -1:
        spell_id = m.group(1)
        if spell_id in conflicts_db and spell_id not in modified:
            # 找到这个法术对象的结束行
            depth = 0
            j = i
            # 先在这个行里计算大括号
            for ch in line:
                if ch == '{':
                    depth += 1
                elif ch == '}':
                    depth -= 1
            # 继续扫描后续行
            while j < len(lines) and depth > 0:
                j += 1
                if j >= len(lines):
                    break
                for ch in lines[j]:
                    if ch == '{':
                        depth += 1
                    elif ch == '}':
                        depth -= 1
            # j 现在是结束行（包含 } 的行）
            end_line_idx = j
            
            # 检查是否已有 conflicts 字段
            obj_lines = lines[i:end_line_idx+1]
            obj_text = ''.join(obj_lines)
            if 'conflicts:' in obj_text:
                print(f"法术 {spell_id} 已有 conflicts，跳过")
                new_lines.extend(lines[i:end_line_idx+1])
                i = end_line_idx + 1
                continue
            
            # 把开始行到结束行（不含结束行）加入 new_lines
            new_lines.extend(lines[i:end_line_idx])
            
            # 在结束行之前插入 conflicts 字段
            # 结束行是类似 "    classes:{...} },\n" 或 "    classes:{...} }\n"
            # 我们需要在结束行（即包含 } 的行）之前插入
            
            # 先处理结束行：去掉结尾的 } 和可能的逗号，然后加逗号，然后加 conflicts，然后加 } 和逗号
            end_line = lines[end_line_idx]
            # end_line 类似 "    classes:{wizard:1, sorcerer:1, cleric:1} },\n"
            # 我们需要找到 } 的位置（对象的结束）
            # 由于这一行可能有多个 }（如 classes:{...} 中的 }），我们需要找到最外层的
            
            # 简单方法：直接把结束行替换为：
            # 原结束行（去掉结尾的 } 和逗号） + ",\n" + conflicts_block + "\n  },\n"
            # 但这很复杂
            
            # 更简单：在结束行之前插入新行
            # 结束行是 "  }," 或 "  }"
            # 我们直接在 end_line_idx 位置插入新行
            
            conflicts_block = build_conflicts_block(conflicts_db[spell_id])
            
            # 插入新行到 new_lines（因为 new_lines 目前包含 i 到 end_line_idx-1 的内容）
            # 我们需要在 new_lines 末尾加上 conflicts_block，然后加上结束行
            
            # 先确保前一行以逗号结尾（如果不是的话加上逗号）
            if new_lines and not new_lines[-1].rstrip().endswith(','):
                new_lines[-1] = new_lines[-1].rstrip() + ',\n'
            
            # 添加 conflicts 块
            for cl in conflicts_block.split('\n'):
                new_lines.append(cl + '\n')
            
            # 添加结束行
            new_lines.append(end_line)
            
            modified.append(spell_id)
            print(f"已添加 conflicts → {spell_id}")
            
            i = end_line_idx + 1
            continue
    
    new_lines.append(line)
    i += 1

# 写回
with open(FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"\n完成！共修改 {len(modified)} 个法术：{modified}")
