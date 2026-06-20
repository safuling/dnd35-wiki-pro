#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给法术添加 conflicts 字段（生成完整替换文本，一次到位）

import json, re

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

# 冲突数据
conflicts_db = {
    "identify": [
        {"point": "鉴定术的材料成分与施法时间",
         "phbRule": "PHB规定需要100gp宝石粉尘+1小时施法。SRD同。",
         "controversy": "许多DM简化为标准动作免费鉴定，忽略了PHB原文的平衡设计。",
         "suggestion": "建议DM明确规则并在游戏前达成共识。",
         "source": "PHB p.242 / SRD"},
        {"point": "鉴定术是否需要奥术检定",
         "phbRule": "PHB原文未要求奥术检定，只需施法并消耗材料。",
         "controversy": "常见house rule要求DC=物品CL的奥术检定，但非PHB原文。",
         "suggestion": "如DM拟加入检定，建议DC=15并在游戏前说明。",
         "source": "社区House Rule"}
    ],
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
    ]
}

def make_conflicts_text(arr):
    """生成格式完美的 conflicts JS 文本块（含缩进）"""
    lines = []
    lines.append("    conflicts: [")
    for i, c in enumerate(arr):
        lines.append("      {")
        # 所有字段都加逗号，最后一行除外
        fields = []
        fields.append(("point", c["point"]))
        if c.get("phbRule"):
            fields.append(("phbRule", c["phbRule"]))
        if c.get("controversy"):
            fields.append(("controversy", c["controversy"]))
        if c.get("suggestion"):
            fields.append(("suggestion", c["suggestion"]))
        if c.get("source"):
            fields.append(("source", c["source"]))
        for j, (k, v) in enumerate(fields):
            comma = "," if j < len(fields) - 1 else ""
            lines.append(f"        {k}: {json.dumps(v, ensure_ascii=False)}{comma}")
        lines.append("      }")
        if i < len(arr) - 1:
            lines[-1] += ","
    lines.append("    ]")
    return "\n".join(lines)

def find_obj_end(content, start_pos):
    """从 start_pos 开始，找到匹配的大括号结束位置，返回结束位置（指向 }）"""
    pos = start_pos
    depth = 0
    in_str = False
    escape = False
    while pos < len(content):
        ch = content[pos]
        if escape:
            escape = False
            pos += 1
            continue
        if ch == '\\' and in_str:
            escape = True
            pos += 1
            continue
        if ch == '"' and not in_str:
            in_str = True
            pos += 1
            continue
        if ch == '"' and in_str:
            in_str = False
            pos += 1
            continue
        if not in_str:
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return pos
        pos += 1
    return -1

# 主逻辑：读取文件，逐个替换法术对象
with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

modified = []

for spell_id, conflicts_arr in conflicts_db.items():
    # 找法术起始位置
    pattern = '{ id:"' + spell_id + '"'
    idx = content.find(pattern)
    if idx < 0:
        print(f"未找到: {spell_id}")
        continue
    
    # 找到对象结束位置
    end_pos = find_obj_end(content, idx)
    if end_pos < 0:
        print(f"找不到结束位置: {spell_id}")
        continue
    
    # 检查是否已有 conflicts
    obj_text = content[idx:end_pos+1]
    if 'conflicts:' in obj_text:
        print(f"已有conflicts，跳过: {spell_id}")
        continue
    
    # 在结束的 } 之前插入 conflicts 字段
    # 结束位置是 end_pos（指向 }）
    # 我们需要在 end_pos 之前插入（即在 } 之前）
    # 但需要在前一个非空白字符后加逗号
    
    # 找到 } 之前的最后一个非空白字符
    insert_pos = end_pos
    while insert_pos > idx and content[insert_pos-1] in ' \t\n':
        insert_pos -= 1
    
    # 在前一个字符后加逗号（如果没有）
    if content[insert_pos-1] not in ',':
        # 在 insert_pos 位置前插入逗号
        content = content[:insert_pos] + ',\n' + content[insert_pos:]
        end_pos += 2  # 更新 end_pos（因为加了 \n 两个字符... 实际上可能不止）
        # 重新计算
        # 实际上加了 ",\n" = 2个字符
        end_pos += 2
    
    # 现在在 end_pos 位置是 }（或者原来的 } 向后移了）
    # 重新找 end_pos
    end_pos = find_obj_end(content, idx)
    
    # 构建替换文本：在 end_pos 之前插入 conflicts
    conflicts_text = make_conflicts_text(conflicts_arr)
    indented = "\n".join(["    " + l.lstrip() if i > 0 else l for i, l in enumerate(conflicts_text.split("\n"))])
    
    # 在 end_pos 之前插入
    # end_pos 指向 }，我们在它之前插入
    insert_at = end_pos
    while insert_at > idx and content[insert_at-1] in ' \t\n':
        insert_at -= 1
    
    content = content[:insert_at] + "\n" + indented + "\n  " + content[insert_at:]
    
    modified.append(spell_id)
    print(f"已添加: {spell_id}")

# 写回
with open(FILE, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n完成！修改了 {len(modified)} 个法术")
print("修改列表：", modified)
