#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给关键争议法术添加 conflicts 字段（精确字符串替换版）

import re, json

filepath = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 冲突数据
conflicts_db = {
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
         "controversy": "PHB说'可以被听见'，但未明确听见的DC。",
         "suggestion": "建议：精确位置Spot DC=20；感知方向只要有声音即可（不需要检定）。",
         "source": "PHB p.296 / SRD"}
    ],
    "dispel_magic": [
        {"point": "解除魔法的施法者等级检定方式",
         "phbRule": "需对每个被解除的法术独立进行1d20+CL vs 10+原CL的检定。",
         "controversy": "许多DM只投一次检定用于所有法术，简化但非PHB原文。'原CL'定义不明确。",
         "suggestion": "建议每个法术独立检定；物品用法术创建者CL。",
         "source": "PHB p.223 / SRD / 社区FAQ"}
    ],
    "haste": [
        {"point": "加速术的额外攻击（3.0 vs 3.5e）",
         "phbRule": "3.5e加速术只给予'+1次攻击'，而非3.0的整轮额外攻击。",
         "controversy": "许多玩家仍沿用3.0规则。加速术额外攻击能否用副手？PHB未明确。",
         "suggestion": "严格使用3.5e规则：+1次攻击，可用任何已持武器（包括副手，如已有双重挥击）。",
         "source": "PHB p.283 / SRD / 3.5e FAQ v2.0"}
    ],
    "polymorph": [
        {"point": "变化术的属性替换范围（最具争议）",
         "phbRule": "获得目标生物的所有生理属性和特殊攻击/品质，但保留自己心智属性/HP/豁免/BAB。",
         "controversy": "D&D 3.5e最争议规则。'特殊攻击/品质'是否包括Ex能力？PHB表述模糊，Polymorph Subschool有大量errata。",
         "suggestion": "建议采用Rules Compendium 2006澄清：只给予形态相关能力，不给予RHD的BAB/豁免，不给予后天能力。",
         "source": "PHB p.263 / Rules Compendium 2006 p.121-126 / 3.5e FAQ"},
        {"point": "变化术与类型改变",
         "phbRule": "改变生物类型为'变化形态'，保留原亚型。对不死/构装体/元素无效。",
         "controversy": "变化后是否获得新类型的免疫/易伤？部分DM认为给予类型特质，部分认为只改形态。",
         "suggestion": "建议：只改变物理形态，不改变类型相关免疫/易伤。获得类型特质需用变身术。",
         "source": "PHB p.263 / Rules Compendium p.122"}
    ],
    "teleport": [
        {"point": "传送术的偏差距离计算",
         "phbRule": "偏差=两个d10相乘（范围0-100尺），取决于熟悉程度。",
         "controversy": "'1d10×1d10'是先投两个d10再相乘，还是1d10×10尺？部分线上资料库解释错误。",
         "suggestion": "严格按PHB：两个d10相乘。",
         "source": "PHB p.292 / SRD"},
        {"point": "传送失败与固体障碍",
         "phbRule": "目标区域被固体占据则传送失败，每个参与者受1d10伤害。",
         "controversy": "'固体物质'是否包括水/泥？传送到敌人内部是否自动失败？",
         "suggestion": "目标必须是空旷区域（至少5尺立方）。水/泥视为可通行但可能窒息。",
         "source": "PHB p.292 / DMG p.149"}
    ],
    "shapechange": [
        {"point": "变身术获得的能力类型（Su/Sp/Ex）",
         "phbRule": "获得目标生物的所有特殊攻击、特殊品质、和超自然能力（Su）。",
         "controversy": "'特殊攻击/品质'是否包括Ex能力？类法术能力（Sp）是否被包括？Errata明确包括Sp和Su。",
         "suggestion": "采用3.5e EraErrata：变身术给予Su和Sp能力，但不包括Ex能力（除非特殊攻击核心部分）。",
         "source": "PHB p.277 / 3.5e EraErrata / Rules Compendium p.126"}
    ],
    "wish": [
        {"point": "许愿术的DM裁量权与限制",
         "phbRule": "可实现几乎任何愿望，但DM可以限制或扭曲。标准用法：复制≤8环法术，治疗，复活等。",
         "controversy": "玩家常试图用许愿术获得超出规则的好处。'复制法术'是否包括神术？",
         "suggestion": "游戏前明确许愿术限制清单。不能复制9环法术，不能直接杀boss。'复制法术'包括奥术和神术。",
         "source": "PHB p.302 / DMG p.201 / 社区共识"},
        {"point": "许愿术复制法术时的XP代价",
         "phbRule": "PHB未明确复制需要XP的法术时是否仍需支付XP。",
         "controversy": "部分DM认为许愿术豁免所有代价，部分认为XP代价不豁免。",
         "suggestion": "建议house rule：许愿术豁免材料/专注，但不豁免XP代价。",
         "source": "社区House Rule / 3.5e FAQ"}
    ],
    "protection_from_energy": [
        {"point": "防护自能量与抵抗能量是否叠加",
         "phbRule": "防护自能量=免疫（12点/轮）。抵抗能量=抗力（10点/轮）。",
         "controversy": "'免疫'和'抗力'是否算同类效果？PHB说同类法术效果不叠加。",
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
         "suggestion": "变化后HD变为小动物HD。可被9环许愿/奇迹解除，也可用解除魔法（需成功检定）。",
         "source": "Spell Compendium p.149 / 社区共识"}
    ],
    "antimagic_field": [
        {"point": "反魔法力场对魔法物品的影响",
         "phbRule": "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
         "controversy": "魔法武器在力场内是变'普通武器'还是完全消失？神术是否被抑制？",
         "suggestion": "严格PHB规则：魔法武器变普通武器（失去增强加值）。神术被抑制。",
         "source": "PHB / SRD / 3.5e FAQ v2.0"}
    ],
    "silence": [
        {"point": "沉默术对施法的影响",
         "phbRule": "创造半径为20尺的球形区域，其中所有噪音被抑制。",
         "controversy": "沉默区域内能否施展需要言语成分（V）的法术？部分DM认为V成分不需要'听见自己说话'。",
         "suggestion": "建议：沉默区域内不能施展需要V成分的法术（因为无法发出有效言语）。",
         "source": "PHB p.279 / SRD / 社区共识"}
    ],
    "animate_dead": [
        {"point": "操控亡灵的HD上限与控制",
         "phbRule": "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
         "controversy": "亡灵是否有自己的意志？操控亡灵是否需要'邪恶'属性？",
         "suggestion": "建议：亡灵完全服从（无意志）。施法者不需邪恶属性，但善良角色施展可能违反职业守则。",
         "source": "PHB p.199 / DMG / 社区共识"}
    ]
}

def make_conflicts_js(arr):
    """把冲突列表转为JS数组字符串（缩进2空格）"""
    parts = ["["]
    for i, c in enumerate(arr):
        block = "  {\n"
        block += f'    point: {json.dumps(c["point"], ensure_ascii=False)},\n'
        if c.get("phbRule"):
            block += f'    phbRule: {json.dumps(c["phbRule"], ensure_ascii=False)},\n'
        if c.get("controversy"):
            block += f'    controversy: {json.dumps(c["controversy"], ensure_ascii=False)},\n'
        if c.get("suggestion"):
            block += f'    suggestion: {json.dumps(c["suggestion"], ensure_ascii=False)},\n'
        if c.get("source"):
            block += f'    source: {json.dumps(c["source"], ensure_ascii=False)}\n'
        block += "  }"
        if i < len(arr) - 1:
            block += ","
        parts.append(block)
    parts.append("]")
    return "\n".join(parts)

# 用大括号计数法找到每个法术对象的完整文本并替换
modified = []

for spell_id, conflicts_arr in conflicts_db.items():
    # 找法术起始位置
    pattern = re.escape('{ id:"' + spell_id + '"')
    m = re.search(pattern, content)
    if not m:
        print(f"未找到法术: {spell_id}")
        continue
    
    start = m.start()
    # 从 start 开始找匹配的大括号
    pos = start
    depth = 0
    in_string = False
    escape_next = False
    while pos < len(content):
        ch = content[pos]
        if escape_next:
            escape_next = False
            pos += 1
            continue
        if ch == '\\':
            escape_next = True
            pos += 1
            continue
        if ch == '"' and not in_string:
            in_string = True
            pos += 1
            continue
        if in_string:
            if ch == '"':
                in_string = False
            pos += 1
            continue
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                end = pos  # 指向结束的 }
                break
        pos += 1
    else:
        print(f"找不到法术 {spell_id} 的结束括号")
        continue
    
    # obj_text = content[start:end+1]
    # 检查是否已有 conflicts 字段
    obj_slice = content[start:end+1]
    if 'conflicts:' in obj_slice:
        print(f"法术 {spell_id} 已有 conflicts 字段，跳过")
        continue
    
    # 在结束的 } 之前插入 conflicts 字段
    # 先回溯到前一个非空白字符位置
    insert_at = end  # 在 } 之前插入
    # 但我们需要在 } 前加逗号给前一字段，然后加 conflicts
    # 更简单：把 `\n  }` 替换为 `,\n    conflicts: ...\n  }`
    before_end = content[start:end+1]
    # 找到对象里最后一个字段的行
    # 直接在结束 } 前插入
    conflicts_js = make_conflicts_js(conflicts_arr)
    # 缩进
    indented = "\n".join(["    " + line if i > 0 else "    conflicts: " + line for i, line in enumerate(conflicts_js.split("\n"))])
    
    replacement = before_end.rstrip() + ",\n" + indented + "\n  }"
    content = content[:start] + replacement + content[end+1:]
    modified.append(spell_id)
    print(f"已添加 conflicts → {spell_id}")

# 写回
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n完成！共修改 {len(modified)} 个法术：{modified}")
