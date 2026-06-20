#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第10批法术追加 - 7环剩余 + 8环核心 + 9环核心
目标：将法术数量提升至250+
"""

spells_to_add = [
    # 7环剩余
    {
        "id": "flamestrike",
        "nameEn": "Flame Strike",
        "nameZh": "烈焰连击",
        "level": 7,
        "school": "evocation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你选择的点为中心，10尺半径扩散",
        "duration": "即时",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "一道从天而降的火焰柱击中区域内的所有生物，造成1d6点神圣伤害+每等级1点（最大+15d6）。反射检定成功则伤害减半。邪恶界外生物受到双倍伤害。",
        "divine": {"cleric": 7},
        "arcane": None,
        "classes": {"cleric": 7}
    },
    {
        "id": "greater_scrying",
        "nameEn": "Greater Scrying",
        "nameZh": "高等窥视",
        "level": 7,
        "school": "divination",
        "components": "V, S, M, F",
        "castingTime": "1轮",
        "range": "见描述",
        "effect": "一个魔法感应器",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效",
        "spellResist": "否",
        "desc": "如窥视法术，但距离无限且你可以看到、听到、闻到的。你还可以使用法术通过感应器（如同你自己在该位置）。该法术可以穿透大部分防护法术。",
        "material": "一个价值至少1000金币的水晶球",
        "focus": "一个水晶球",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7}
    },
    {
        "id": "mass_invisibility",
        "nameEn": "Mass Invisibility",
        "nameZh": "群体隐身术",
        "level": 7,
        "school": "illusion",
        "subSchool": "glamer",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
        "duration": "1轮/级（见描述）",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "如隐身术，但可影响多个目标。隐身状态持续到主动攻击或施展法术。受到伤害不会解除隐身。",
        "material": "一根睫毛",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "phase_door",
        "nameEn": "Phase Door",
        "nameZh": "相位门",
        "level": 7,
        "school": "conjuration",
        "subSchool": "creation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个相位通道（5尺深）",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你在固体物体（墙、门、地面等）中创造一个相位通道。通道连接物体的一面和另一面的异次元空间。你可以穿过通道，其他人也可以（但每次只能一个人）。",
        "material": "一小块大理石",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "power_word_blind",
        "nameEn": "Power Word Blind",
        "nameZh": "力量言语：目盲",
        "level": 7,
        "school": "enchantment",
        "components": "V",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你说出一个魔法字，使目标目盲。效果取决于目标的HP：HP50或以下：永久目盲；HP51-100：目盲1d4+1轮；HP101-200：目盲1轮。HP201+：无效。",
        "arcane": {"wizard": 7, "sorcerer": 7, "bard": 6},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7, "bard": 6}
    },
    {
        "id": "prismatic_spray",
        "nameEn": "Prismatic Spray",
        "nameZh": "虹光喷射",
        "level": 7,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "锥状扩散（60尺）",
        "duration": "即时",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "你喷射出一道彩虹般的光芒。每个在区域内的生物随机受到以下一种效果：红（1d6火伤害+目盲）、橙（2d6酸伤害+目眩）、黄（3d6电伤害+震慑）、绿（4d6毒伤害+强韧过则死）、蓝（5d6即死豁免）、紫（放逐至异界）。",
        "material": "一块棱镜",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "reverse_gravity",
        "nameEn": "Reverse Gravity",
        "nameZh": "反向重力",
        "level": 7,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你为中心，每等级10尺半径的区域",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "区域内所有物体和生物受到反向重力影响（向上坠落）。所有生物和物体飞向天花板（速度60尺/轮）。如果撞击天花板，受到1d6点伤害/10尺坠落距离。",
        "material": "一块磁石",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7, "druid": 8},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7, "druid": 8}
    },
    {
        "id": "sequester",
        "nameEn": "Sequester",
        "nameZh": "隐匿术",
        "level": 7,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "接触",
        "target": "一个生物或物体",
        "duration": "1天/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "目标变得不可见、无法被检测到、无法被定位。目标处于停滞状态（不老化、不需要食物/水/空气）。任何人如果特意搜索目标位置，可以进行意志检定以发现目标。",
        "material": "一小块钻石（价值5000金币）",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "simulacrum_lesser",
        "nameEn": "Simulacrum, Lesser",
        "nameZh": "次等拟像",
        "level": 7,
        "school": "illusion",
        "subSchool": "figment",
        "components": "V, S, M",
        "castingTime": "12小时",
        "range": "近距",
        "target": "一个生物（拟像）",
        "duration": "永久",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你创造一个生物的冰雪拟像。拟像拥有原生物所有能力和记忆的副本，但HP减半。拟像服从你的命令。你可以创造HD不超过你施法者等级一半的拟像。",
        "material": "冰雪（价值至少1000金币）",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "spell_turning_greater",
        "nameEn": "Spell Turning, Greater",
        "nameZh": "高等法术反转",
        "level": 7,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级或直到耗尽",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "如法术反转，但你可以反转最多8个法术等级（例如两个4环法术，或八个1环法术）。被反转的法术会影响原施法者。",
        "material": "一面小镜子",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "statue",
        "nameEn": "Statue",
        "nameZh": "雕像术",
        "level": 7,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将自己变为一尊石像。在石像形态下，你是虚体，免疫所有伤害和效果。你不能移动或行动，但可以感知周围环境。你可以随时结束法术恢复正常。",
        "material": "一撮石灰粉",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    # 8环法术
    {
        "id": "antipathy",
        "nameEn": "Antipathy",
        "nameZh": "厌恶术",
        "level": 8,
        "school": "enchantment",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "近距",
        "area": "放射范围（30尺）",
        "duration": "1天/级（见描述）",
        "savingThrow": "意志过则无效（见描述）",
        "spellResist": "可（见描述）",
        "desc": "你使一个区域或物体对某类生物产生厌恶。该类生物必须成功意志检定，否则会尽可能远离该区域。如果被迫进入区域，会受到恶心效果。该法术与同情术互斥。",
        "material": "一块磁铁和一根铁针",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8, "druid": 9},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8, "druid": 9}
    },
]

# 转换函数
def spell_to_js(spell):
    lines = []
    lines.append('  {')
    lines.append(f'    "id": "{spell["id"]}",')
    lines.append(f'    "nameEn": "{spell["nameEn"]}",')
    lines.append(f'    "nameZh": "{spell["nameZh"]}",')
    lines.append(f'    "level": {spell["level"]},')
    lines.append(f'    "school": "{spell["school"]}",')
    
    if "subSchool" in spell:
        lines.append(f'    "subSchool": "{spell["subSchool"]}",')
    
    lines.append(f'    "components": "{spell["components"]}",')
    lines.append(f'    "castingTime": "{spell["castingTime"]}",')
    lines.append(f'    "range": "{spell["range"]}",')
    
    if "target" in spell:
        lines.append(f'    "target": "{spell["target"]}",')
    if "area" in spell:
        lines.append(f'    "area": "{spell["area"]}",')
    if "effect" in spell:
        lines.append(f'    "effect": "{spell["effect"]}",')
    
    lines.append(f'    "duration": "{spell["duration"]}",')
    lines.append(f'    "savingThrow": "{spell["savingThrow"]}",')
    lines.append(f'    "spellResist": "{spell["spellResist"]}",')
    lines.append(f'    "desc": "{spell["desc"]}",')
    
    if "material" in spell:
        lines.append(f'    "material": "{spell["material"]}",')
    if "focus" in spell:
        lines.append(f'    "focus": "{spell["focus"]}",')
    
    # arcane
    if spell.get("arcane"):
        parts = [f'"{k}": {v}' for k, v in spell["arcane"].items()]
        lines.append(f'    "arcane": {{{", ".join(parts)}}},')
    else:
        lines.append('    "arcane": null,')
    
    # divine
    if spell.get("divine"):
        parts = [f'"{k}": {v}' for k, v in spell["divine"].items()]
        lines.append(f'    "divine": {{{", ".join(parts)}}},')
    else:
        lines.append('    "divine": null,')
    
    # classes
    parts = [f'"{k}": {v}' for k, v in spell["classes"].items()]
    lines.append(f'    "classes": {{{", ".join(parts)}}}')
    
    lines.append('  }')
    return '\n'.join(lines)

# 构建JS字符串
spells_js = ',\n  ,\n'.join([spell_to_js(s) for s in spells_to_add])

# 读取现有文件
with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到数组结束位置
end_pos = content.rfind('];')
if end_pos == -1:
    print("Error: cannot find array end")
    exit(1)

# 插入新法术
new_content = content[:end_pos] + ',\n  // ===== Batch 10 =====\n' + spells_js + '\n' + content[end_pos:]

# 写回文件
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Added {len(spells_to_add)} spells successfully")

# 验证语法
import subprocess
result = subprocess.run(['node', '-c', 'js/spells-data.js'], capture_output=True, text=True)
if result.returncode == 0:
    print("JS syntax OK")
else:
    print("JS syntax error:")
    print(result.stderr)
