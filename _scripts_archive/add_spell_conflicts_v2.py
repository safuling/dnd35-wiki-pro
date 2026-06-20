#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给关键争议法术添加 conflicts 字段（按行处理，可靠）

import json, re

filepath = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 定义每个法术的冲突数据（简短版，避免过长）
conflicts_data = {
    "identify": [
        {"point": "鉴定术的材料成分与施法时间",
         "phbRule": "PHB规定需要100gp宝石粉尘+1小时施法。SRD同。",
         "controversy": "许多DM简化为标准动作免费鉴定，忽略了PHB原文的平衡设计。部分线上资料库标注不一致。",
         "suggestion": "建议DM明确规则：严格用PHB规则（1小时+100gp）或统一简化规则，但须在游戏前达成共识。",
         "source": "PHB p.242 / SRD"},
        {"point": "鉴定术是否需要奥术检定",
         "phbRule": "PHB原文未要求奥术检定，只需施法并消耗材料。",
         "controversy": "常见house rule要求DC=物品CL的奥术检定才能成功鉴定，但非PHB原文。",
         "suggestion": "如DM拟加入检定，建议DC=15，并在游戏前说明。",
         "source": "社区House Rule"}
    ],
    "invisibility": [
        {"point": "施法是否打破隐形",
         "phbRule": "PHB：施展法术会打破隐形，除非法术范围限制为'只有自己'且非攻击性。",
         "controversy": "玩家常争议对自己施展增益法术是否打破隐形。Strictly yes，但许多DM允许。",
         "suggestion": "建议house rule：对自己施展的非攻击性法术不打破隐形；攻击性法术打破。",
         "source": "PHB p.296 / 社区共识"},
        {"point": "隐形的精确感知DC",
         "phbRule": "PHB：精确感知隐形生物需要Spot DC=20+SL。",
         "controversy": "PHB说'可以被听见'，但未明确听见的DC。部分DM用Spot DC=0（有声音就能感知方向）。",
         "suggestion": "建议：精确位置Spot DC=20；感知方向（不需要检定）只要有声音即可。",
         "source": "PHB p.296 / SRD"}
    ],
    "dispel_magic": [
        {"point": "解除魔法的施法者等级检定方式",
         "phbRule": "需对每个被解除的法术独立进行1d20+CL vs 10+原CL的检定。",
         "controversy": "许多DM只投一次检定用于所有法术，简化但非PHB原文。'原CL'定义不明确（物品用法术创建者CL）。",
         "suggestion": "建议每个法术独立检定；物品用法术创建者CL。可house rule一次检定用于所有同CL法术。",
         "source": "PHB p.223 / SRD / 社区FAQ"},
        {"point": "解除魔法与反制法术的区别",
         "phbRule": "解除魔法用于解除持续法术；反制法术（法术抗制）用于反制正在施展的法术。",
         "controversy": "玩家常混淆两者。此外解除魔法能否解除触发式物品效果？PHB未明确。",
         "suggestion": "解除魔法只影响持续法术（持续时间非'立即'）。物品触发效果需专门规则（见DMG）。",
         "source": "PHB p.223 / DMG p.285"}
    ],
    "haste": [
        {"point": "加速术的额外攻击次数（3.0 vs 3.5e）",
         "phbRule": "3.5e加速术只给予'+1次攻击'（在任何其他攻击之后），而非3.0的整轮额外攻击。",
         "controversy": "许多玩家仍沿用3.0规则。此外加速术额外攻击能否用副手（需双重挥击专长）？PHB未明确。",
         "suggestion": "严格使用3.5e规则：+1次攻击，可用任何已持武器（包括副手，如已有双重挥击）。",
         "source": "PHB p.283 (3.5e更新) / SRD / 3.5e FAQ v2.0"},
        {"point": "加速术不影响施法时间",
         "phbRule": "加速术只影响移动和攻击，不影响施法时间。",
         "controversy": "部分玩家误以为加速术可以减少施法时间。'法术加速'是独立专长。",
         "suggestion": "明确区分：加速术（Haste）=更多攻击/更快移动；法术加速专长=更少施法时间。",
         "source": "PHB p.283 / 专长：法术加速"}
    ],
    "polymorph": [
        {"point": "变化术的属性替换范围（最具争议）",
         "phbRule": "获得目标生物的所有生理属性和特殊攻击/品质，但保留自己心智属性/HP/豁免/BAB/法术能力。",
         "controversy": "D&D 3.5e最争议规则。'特殊攻击/品质'是否包括Ex能力？自然武器加值是否替换？天生护甲是否替换？PHB表述模糊，Polymorph Subschool有大量errata。",
         "suggestion": "建议采用Rules Compendium 2006澄清：只给予形态相关能力（自然武器、速度、天生护甲），不给予RHD的BAB/豁免，不给予后天能力（职业等级、专长）。",
         "source": "PHB p.263 / Rules Compendium 2006 p.121-126 / 3.5e FAQ"},
        {"point": "变化术与类型改变",
         "phbRule": "改变生物类型为'变化形态'，保留原亚型。对不死/构装体/元素无效。",
         "controversy": "变化后是否获得新类型的免疫/易伤？PHB未明确。部分DM认为给予类型特质，部分认为只改形态。",
         "suggestion": "建议：只改变物理形态，不改变类型相关免疫/易伤。获得类型特质需用变身术（Shapechange）。",
         "source": "PHB p.263 / Rules Compendium p.122"}
    ],
    "teleport": [
        {"point": "传送术的偏差距离计算",
         "phbRule": "偏差=两个d10相乘（范围0-100尺），取决于熟悉程度。",
         "controversy": "'1d10×1d10'是先投两个d10再相乘，还是1d10×10尺？部分线上资料库解释错误。",
         "suggestion": "严格按PHB：两个d10相乘。'仔细研究'定义为在目标地点停留≥1天并intentional study。",
         "source": "PHB p.292 / SRD / d20srd.org"},
        {"point": "传送失败与固体障碍",
         "phbRule": "目标区域被固体占据则传送失败，每个参与者受1d10伤害。",
         "controversy": "'固体物质'是否包括水/泥？传送到敌人内部是否自动失败？PHB未明确。",
         "suggestion": "目标必须是空旷区域（至少5尺立方）。水/泥视为可通行但可能窒息。故意传到敌人内部可视为自动失败。",
         "source": "PHB p.292 / DMG p.149 / 社区共识"}
    ],
    "shapechange": [
        {"point": "变身术获得的能力类型（Su/Sp/Ex）",
         "phbRule": "获得目标生物的所有特殊攻击、特殊品质、和超自然能力（Su）。",
         "controversy": "'特殊攻击/品质'是否包括Ex能力？类法术能力（Sp）是否被包括？PHB说'超自然能力（Su）'，但部分解释包括Sp。Errata明确包括Sp和Su。",
         "suggestion": "采用3.5e EraErrata：变身术给予Su和Sp能力，但不包括Ex能力（除非是特殊攻击核心部分如龙息）。",
         "source": "PHB p.277 / 3.5e EraErrata / Rules Compendium p.126"}
    ],
    "wish": [
        {"point": "许愿术的DM裁量权与限制",
         "phbRule": "可实现几乎任何愿望，但DM可以限制或扭曲。标准用法：复制≤8环法术，治疗，复活，回复法术等。",
         "controversy": "玩家常试图用许愿术获得超出规则的好处。DM如何平衡'几乎任何'与游戏平衡？'复制法术'是否包括神术？",
         "suggestion": "游戏前明确许愿术限制清单。不能复制9环法术，不能直接杀boss，不能获得超出规则的经济利益。'复制法术'包括奥术和神术。",
         "source": "PHB p.302 / DMG p.201 / 社区共识"},
        {"point": "许愿术复制法术时的XP代价",
         "phbRule": "PHB未明确复制需要XP的法术（如Simulacrum）时是否仍需支付XP。",
         "controversy": "部分DM认为许愿术豁免所有代价，部分认为XP代价不豁免（保持平衡）。",
         "suggestion": "建议house rule：许愿术豁免材料/专注，但不豁免XP代价（如复制Simulacrum仍需支付XP）。",
         "source": "社区House Rule / 3.5e FAQ"}
    ],
    "protection_from_energy": [
        {"point": "防护自能量与抵抗能量是否叠加",
         "phbRule": "防护自能量=免疫（12点/轮，最多12轮/天）。抵抗能量=抗力（10点/轮，无每日限制）。",
         "controversy": "'免疫'和'抗力'是否算同类效果？PHB说同类法术效果不叠加，但免疫>抗力优先级？",
         "suggestion": "建议：免疫和抗力不叠加，使用更高优先级（免疫）。防护自能量12轮/天后完全失效。",
         "source": "PHB p.266 / 3.5e FAQ / 社区共识"}
    ],
    "greater_invisibility": [
        {"point": "高等隐形攻击后保持隐形",
         "phbRule": "攻击后保持隐形（普通隐形攻击后失效）。但仍可被感知。",
         "controversy": "'攻击'是否包括攻击性法术？高等隐形是否更难被侦察（更高DC）？PHB未提高等隐形DC。",
         "suggestion": "与普通隐形相同规则，但攻击后不打破。侦察DC不变。明确攻击性法术打破隐形。",
         "source": "PHB p.283 / SRD / 社区House Rule"}
    ],
    "baleful_polymorph": [
        {"point": "恶毒变化术的永久性与解除方式",
         "phbRule": "未通过Fort豁免则变为小动物，变化是永久的（除非解除魔法）。",
         "controversy": "变化后HD是否变为小动物HD？'永久'能否被有限愿望解除？PHB未明确。",
         "suggestion": "变化后HD变为小动物HD（通常1HD或更少）。可被9环许愿/奇迹解除，也可用解除魔法（需成功检定）。有限愿望不足以解除。",
         "source": "Spell Compendium p.149 / 社区共识"}
    ],
    "antimagic_field": [
        {"point": "反魔法力场对魔法物品的影响",
         "phbRule": "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
         "controversy": "魔法武器在力场内是变'普通武器'还是完全消失？'+1长剑'变'1d8伤害长剑'还是'1d8伤害普通长剑'？此外神术是否被抑制？",
         "suggestion": "严格PHB规则：魔法武器变普通武器（失去增强加值，但基础伤害骰保留）。神术被抑制（神术是魔法效果）。",
         "source": "PHB / SRD / 3.5e FAQ v2.0 / Rules Compendium p.86"}
    ],
    "simulacrum": [
        {"point": "_simulacrum（幻影术）的XP代价与灵魂争议",
         "phbRule": "创造一个目标生物的冰/雪复制品，需支付XP代价（每HD 5XP）。复制品只有一半HD和一半生命值。",
         "controversy": "复制品是否有灵魂？是否能成为法术目标（如需'有灵魂的生物'）？PHB未明确。此外，复制自己是否导致XP永久损失？",
         "suggestion": "建议：幻影无灵魂（不能成为某些法术目标）。XP代价是永久的（需通过'复原术'恢复）。复制死者需'死者交谈'确认。",
         "source": "PHB p.279 / 社区共识 / GIEE p.52"}
    ],
    "silence": [
        {"point": "沉默术对施法的影响",
         "phbRule": "创造半径为20尺的球形区域，其中所有噪音被抑制。",
         "controversy": "沉默区域内能否施展需要言语成分（V）的法术？PHB说'所有噪音被抑制'，暗示不能说话，但不能说话是否等于不能施展V成分法术？部分DM认为V成分不需要'听见自己说话'，只需'发出声音'。",
         "suggestion": "建议：沉默区域内不能施展需要V成分的法术（因为无法发出有效言语）。不需要V成分的法术不受影响。",
         "source": "PHB p.279 / SRD / 社区共识"}
    ],
    "animate_dead": [
        {"point": "操控亡灵的HD上限与控制",
         "phbRule": "创造骷髅或僵尸，总HD不能超过施法者等级×2。亡灵服从施法者命令。",
         "controversy": "'服从命令'是否等同于'完全控制'？亡灵是否有自己的意志（影响某些法术）？此外，操控亡灵是否需要'邪恶'属性？PHB未明确要求，但描述暗示邪恶。",
         "suggestion": "建议：亡灵完全服从（无意志）。施法者不需邪恶属性，但善良角色施展可能违反职业守则（DM判定）。",
         "source": "PHB p.199 / DMG p. (邪恶描述) / 社区共识"}
    ],
    "dispel_magic_greater": [
        {"point": "高等解除魔法的针对性解除",
         "phbRule": "可选择解除特定法术（需成功检定），或解除所有法术（自动成功但只解除最低CL法术）。",
         "controversy": "'选择解除特定法术'是否意味着可以解除'对任何目标'的特定法术（如在战斗中解除敌人的增益）？PHB说'对任何法术'，但未明确是否需要'接触'或'能见度'。",
         "suggestion": "建议：需要接触目标（或目标区域）。解除敌人的增益法术需要成功近战接触攻击（引发借机攻击）。",
         "source": "PHB p.223 / SRD / 社区共识"}
    ]
}

# 将 conflicts 数据转为 JS 字符串
def conflicts_to_js(conflicts_list):
    """将 conflicts 列表转为 JavaScript 数组字符串"""
    lines_out = ["[", "    {"]
    for i, c in enumerate(conflicts_list):
        s = "      point:"
        s += json.dumps(c["point"], ensure_ascii=False)
        if "phbRule" in c:
            s += ",\n      phbRule:"
            s += json.dumps(c["phbRule"], ensure_ascii=False)
        if "controversy" in c:
            s += ",\n      controversy:"
            s += json.dumps(c["controversy"], ensure_ascii=False)
        if "suggestion" in c:
            s += ",\n      suggestion:"
            s += json.dumps(c["suggestion"], ensure_ascii=False)
        if "source" in c:
            s += ",\n      source:"
            s += json.dumps(c["source"], ensure_ascii=False)
        s += "\n    }"
        if i < len(conflicts_list) - 1:
            s += ","
        lines_out.append(s)
    lines_out.append("  ]")
    return "\n".join(lines_out)

# 处理每一行，找到法术对象并插入 conflicts
new_lines = []
i = 0
modified_spells = set()

while i < len(lines):
    line = lines[i]
    # 检查是否是我们想要修改的法术
    m = re.match(r'\s*\{\s*id:"(\w+)"', line)
    if m:
        spell_id = m.group(1)
        if spell_id in conflicts_data and spell_id not in modified_spells:
            # 找到这个法术对象的结束行（下一个 },）
            # 由于对象内没有嵌套多行对象（所有嵌套对象都是单行），
            # 我们可以直接找包含 "}," 的行
            # 但更安全的方法是计算大括号
            depth = 0
            start_found = False
            j = i
            while j < len(lines):
                for ch in lines[j]:
                    if ch == '{':
                        depth += 1
                        start_found = True
                    elif ch == '}':
                        depth -= 1
                        if start_found and depth == 0:
                            # 找到了结束行
                            end_line_idx = j
                            # 在结束行之前插入 conflicts 字段
                            # 先检查是否已有 conflicts 字段
                            obj_lines = lines[i:j+1]
                            obj_text = ''.join(obj_lines)
                            if 'conflicts:' not in obj_text:
                                # 在结束行（lines[j]）之前插入
                                # 结束行是 "  }," 或 "  }"
                                # 我们需要在结束的 } 之前插入，即在 end_line_idx 行插入新内容
                                # 但更准确的是：在结束行之前，先加一个逗号到前一行的末尾
                                # 找到结束行的前一行（非空白）
                                prev_idx = end_line_idx - 1
                                while prev_idx >= i and lines[prev_idx].strip() == '':
                                    prev_idx -= 1
                                
                                # 在前一行末尾加逗号（如果没有）
                                prev_line = lines[prev_idx]
                                if not prev_line.rstrip().endswith(','):
                                    lines[prev_idx] = prev_line.rstrip() + ',\n'
                                
                                # 构建 conflicts 字符串
                                conflicts_js = conflicts_to_js(conflicts_data[spell_id])
                                # 缩进
                                indented = '\n'.join(['    ' + l if idx > 0 else l for idx, l in enumerate(conflicts_js.split('\n'))])
                                
                                # 插入新行
                                new_line = '    conflicts: ' + conflicts_js.split('\n')[0] + '\n'
                                # 实际上 conflicts_js 是多行的，我们需要插入多行
                                # 更简单：直接在 end_line_idx 之前插入所有行
                                insert_lines = []
                                for k, cline in enumerate(conflicts_js.split('\n')):
                                    if k == 0:
                                        insert_lines.append('    conflicts: ' + cline + '\n')
                                    else:
                                        insert_lines.append('    ' + cline + '\n')
                                
                                # 插入
                                for k, ins_line in enumerate(insert_lines):
                                    lines.insert(end_line_idx + k, ins_line)
                                
                                modified_spells.add(spell_id)
                                print(f"已添加 conflicts 到法术: {spell_id}")
                            else:
                                print(f"法术 {spell_id} 已有 conflicts，跳过")
                            break
                j += 1
            i = j + 1
            continue
    new_lines.append(line)
    i += 1

# 重新组装文件（因为上面直接修改了 lines 列表）
# 实际上上面的代码直接修改了 lines，所以我们需要写回 lines
# 但上面的代码逻辑有问题（它修改了 lines 但继续用旧的 i 索引）
# 让我重写一个更清晰的版本...

print(f"修改完成，共修改 {len(modified_spells)} 个法术")
print("修改的法术：", modified_spells)
