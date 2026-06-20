#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第12批法术追加 - 完成8环 + 9环 + 重要神术
目标：达到280+法术，基本实现"完整"
"""

spells_to_add = [
    # 8环神术剩余
    {
        "id": "cure_critical_wounds_mass",
        "nameEn": "Mass Cure Critical Wounds",
        "nameZh": "群体治疗极重创",
        "level": 8,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "你所选的最多每等级1个接触的生物，彼此相距不超过30尺",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "如治疗极重创，但可影响多个目标。每个受术者恢复4d8+1/级HP（最大+20）。该法术可以治疗不死生物造成的伤害。",
        "divine": {"cleric": 8, "druid": 8},
        "arcane": None,
        "classes": {"cleric": 8, "druid": 8}
    },
    {
        "id": "earthquake",
        "nameEn": "Earthquake",
        "nameZh": "地震术",
        "level": 8,
        "school": "evocation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你为中心，40尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "见描述",
        "spellResist": "否",
        "desc": "你引发地震。效果：坍塌（反射DC=法术DC，失败则倒地并受到1d6点伤害）、裂缝（强韧DC=法术DC，失败则落入裂缝受到1d6点伤害）、倾倒（反射DC=法术DC，失败则物品倾倒）等。",
        "divine": {"cleric": 8, "druid": 8},
        "arcane": None,
        "classes": {"cleric": 8, "druid": 8}
    },
    {
        "id": "holy_aura",
        "nameEn": "Holy Aura",
        "nameZh": "神圣灵光",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你为中心，20尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "见描述",
        "spellResist": "可",
        "desc": "你散发神圣灵光。效果：所有邪恶生物受到光亮伤害（每轮1d6点）；所有善良生物获得+4神圣加值AC和豁免；所有位面旅行法术被阻止。邪恶外位面生物震慑1d4轮（意志过则无效）。",
        "divine": {"cleric": 8},
        "arcane": None,
        "classes": {"cleric": 8}
    },
    {
        "id": "planar_ally_elder",
        "nameEn": "Planar Ally, Elder",
        "nameZh": "高阶位面盟友",
        "level": 8,
        "school": "conjuration",
        "subSchool": "calling",
        "components": "V, S, M, DF",
        "castingTime": "10分钟",
        "range": "近距",
        "effect": "召唤一个高阶外层位面生物",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "如位面盟友，但可以召唤更强大的生物（20HD或更少）。你必须提供价值至少5000金币的祭品。召唤的生物服务时间：每1000金币价值1轮。",
        "material": "价值至少5000金币的祭品",
        "divine": {"cleric": 8},
        "arcane": None,
        "classes": {"cleric": 8}
    },
    {
        "id": "sunburst",
        "nameEn": "Sunburst",
        "nameZh": "阳光爆发",
        "level": 8,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "长距",
        "area": "以你选择的点为中心，80尺半径扩散",
        "duration": "即时",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你释放出一道强烈的阳光爆发。区域内所有生物受到1d6点光耀伤害/级（最大20d6）。反射检定成功则伤害减半。不死生物和黑暗生物受到双倍伤害，并且目盲1d4轮。",
        "material": "一块太阳石水晶",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"druid": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "druid": 8}
    },
    {
        "id": "unholy_aura",
        "nameEn": "Unholy Aura",
        "nameZh": "邪恶心光",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你为中心，20尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "见描述",
        "spellResist": "可",
        "desc": "你散发邪恶意光。效果：所有善良生物受到黑暗伤害（每轮1d6点）；所有邪恶生物获得+4阴影加值AC和豁免；所有位面旅行法术被阻止。善良外位面生物震慑1d4轮（意志过则无效）。",
        "divine": {"cleric": 8},
        "arcane": None,
        "classes": {"cleric": 8}
    },
    {
        "id": "whirlwind",
        "nameEn": "Whirlwind",
        "nameZh": "旋风术",
        "level": 8,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个旋风（高度至少10尺，直径最多10尺+5尺/级）",
        "duration": "1轮/级",
        "savingThrow": "反射过则半数",
        "spellResist": "否",
        "desc": "你创造一个旋风。旋风可以移动（每轮60尺），吸入并抛掷生物和物体。被吸入的生物受到2d6点钝击伤害/轮，并被抛掷30尺。",
        "material": "一小片旋风图样",
        "arcane": None,
        "divine": {"druid": 8},
        "classes": {"druid": 8}
    },
    # 9环神术核心
    {
        "id": "elemental_swarm",
        "nameEn": "Elemental Swarm",
        "nameZh": "元素群",
        "level": 9,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个或多个元素",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你召唤一个元素群（每等级1HD的元素，最多20HD）。你可以召唤：火元素、水元素、土元素、气元素。召唤的元素服从你的命令。",
        "material": "一小块对应元素的样本（如火盐、水瓶等）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9, "druid": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9, "druid": 9}
    },
    {
        "id": "energy_drain",
        "nameEn": "Energy Drain",
        "nameZh": "能量吸取（9环）",
        "level": 9,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "永久",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你吸取目标的所有生命能量。目标必须成功强韧检定，否则获得2d4个负向等级。每1d4分钟，目标必须再次进行强韧检定，否则负向等级变为永久。",
        "material": "一撮骨粉",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "gate",
        "nameEn": "Gate",
        "nameZh": "门术",
        "level": 9,
        "school": "conjuration",
        "subSchool": "calling",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个异界传送门",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你打开一个通往其他位面的门。门可以宽达20尺。你可以通过门召唤一个生物（如同召唤怪物法术），或者亲自穿越到另一个位面。门可以任意时间关闭。",
        "material": "价值至少10000金币的宝石",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "heal",
        "nameEn": "Heal",
        "nameZh": "治疗术（完全）",
        "level": 9,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "你完全治愈目标。该法术可以：恢复所有HP；治疗所有属性伤害；移除所有负向等级；治愈所有疾病、中毒、 blindness、deafness、mania等。该法术对不死生物造成伤害（每等级1d6点）。",
        "divine": {"cleric": 9, "druid": 9},
        "arcane": None,
        "classes": {"cleric": 9, "druid": 9}
    },
    {
        "id": "implosion",
        "nameEn": "Implosion",
        "nameZh": "内爆术（9环）",
        "level": 9,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则部分生效",
        "spellResist": "可",
        "desc": "你使目标的内部产生爆发。目标受到1d6点伤害/级（最大25d6）。通过的强韧检定将伤害减半。如果伤害将目标降至0HP或以下，目标被压缩为一个小肉球。",
        "material": "一小块海绵",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "mass_heal",
        "nameEn": "Mass Heal",
        "nameZh": "群体治疗术（完全）",
        "level": 9,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "如治疗术（完全），但可影响多个目标。每个受术者完全治愈（如同治疗术）。该法术可以治疗多个生物，非常有用于战后恢复。",
        "divine": {"cleric": 9},
        "arcane": None,
        "classes": {"cleric": 9}
    },
    {
        "id": "overland_flight",
        "nameEn": "Overland Flight",
        "nameZh": "长途飞行",
        "level": 9,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你和其他自愿接触的生物（最多每等级1个）",
        "duration": "1小时/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你获得飞行速度40尺（完美机动性）。该法术可以持续长途旅行（每小时xx尺）。你可以在飞行中战斗（但不如地面战斗有效）。",
        "material": "一根羽毛",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "power_word_heal",
        "nameEn": "Power Word Heal",
        "nameZh": "力量言语：治疗",
        "level": 9,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "你说出一个魔法字，治疗目标。效果取决于目标的缺失HP：缺失150HP或更少：完全治愈；缺失151-300：恢复150HP；缺失301+：无效。该法术也可以移除所有属性伤害和负向等级。",
        "arcane": {"wizard": 9, "sorcerer": 9, "bard": 7},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9, "bard": 7}
    },
    {
        "id": "prismatic_sphere",
        "nameEn": "Prismatic Sphere",
        "nameZh": "虹光球（ Revised）",
        "level": 9,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个围绕你的彩色球（半径10尺）",
        "duration": "1轮/级",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "你创造一个彩虹色的球包围你。球有七层颜色，每层有不同的效果（如同虹光墙）。任何人试图穿过球会受到所有七层的效果。球对内的生物提供完全防护。",
        "material": "一块棱镜",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "refuge",
        "nameEn": "Refuge",
        "nameZh": "避难所",
        "level": 9,
        "school": "conjuration",
        "subSchool": "teleportation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "见描述",
        "target": "一个生物",
        "duration": "永久或直到触发",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你标记一个生物。当该生物说出你的名字并请求帮助时，它们立即被传送到你的位置（无论多远）。该法术只能使用一次。",
        "material": "一个价值至少10000金币的宝石",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "resurrection",
        "nameEn": "Resurrection",
        "nameZh": "复活术",
        "level": 9,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S, M, DF",
        "castingTime": "10分钟",
        "range": "近距",
        "target": "一个已死不超过10年的生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你复活一个已死的生物。目标恢复生命（HP=当前HP），所有属性伤害恢复，所有负向等级移除。该法术不需要身体完整（但必须有至少一部分）。施法者承受1d4点体质伤害。",
        "material": "价值至少10000金币的宝石粉末",
        "divine": {"cleric": 9, "druid": 9},
        "arcane": None,
        "classes": {"cleric": 9, "druid": 9}
    },
    {
        "id": "shield_of_law",
        "nameEn": "Shield of Law",
        "nameZh": "守序之盾",
        "level": 9,
        "school": "abjuration",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你为中心，20尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "见描述",
        "spellResist": "可",
        "desc": "你创造一个守序灵光。效果：所有混乱生物受到1d6点伤害/轮；所有守序生物获得+4守序加值AC和豁免；所有混乱法术被阻止或驱散。",
        "divine": {"cleric": 9},
        "arcane": None,
        "classes": {"cleric": 9}
    },
    {
        "id": "summon_natures_ally_9",
        "nameEn": "Summon Nature's Ally IX",
        "nameZh": "召唤自然盟友九",
        "level": 9,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个自然生物",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "召唤以下自然生物之一：1) 1个上古元素（20HD）；2) 1个巨龙（Wyrm级别）；3) 1d4+1个罗刹（Rakshasa）；4) 2d6个狂战者（ Barbarian 15级）。",
        "divine": {"druid": 9, "ranger": 9},
        "arcane": None,
        "classes": {"druid": 9, "ranger": 9}
    },
    {
        "id": "time_stasis",
        "nameEn": "Time Stasis",
        "nameZh": "时间凝滞",
        "level": 9,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "永久",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "目标陷入时间凝滞状态。目标处于无敌状态（免疫一切），但无法行动、感知或互动。时间凝滞状态可以被解咒法术（有限祈愿术或神迹术）解除。",
        "material": "一块钻石（价值至少5000金币）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "weird",
        "nameEn": "Weird",
        "nameZh": "怪影术",
        "level": 9,
        "school": "illusory",
        "subSchool": "phantasm",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "以你选择的点为中心，30尺半径扩散",
        "duration": "即时",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你创造出目标最恐惧的幻象。每个目标必须成功意志检定，否则受到1d6点体质伤害/级（最大15d6）并恐慌1d4轮。通过意志检定的目标只受到一半伤害。",
        "material": "一小块镜子和一块黑曜石",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "wish_limited",
        "nameEn": "Limited Wish",
        "nameZh": "有限祈愿术",
        "level": 7,
        "school": "universal",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "见描述",
        "target": "见描述",
        "duration": "见描述",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "如祈愿术，但效果有限。你可以：复制一个6环或以下的法术（不需要材料成分）；治愈属性伤害；恢复HP（每等级1d6+7点）；移除负向等级（最多每等级1个）。没有祈愿术的风险。",
        "material": "价值至少5000金币的珠宝",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7}
    }
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
    if "xpCost" in spell:
        lines.append(f'    "xpCost": "{spell["xpCost"]}",')
    
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
new_content = content[:end_pos] + ',\n  // ===== Batch 12: Completing 8th & 9th level =====\n' + spells_js + '\n' + content[end_pos:]

# 写回文件
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Added {len(spells_to_add)} spells successfully")

# 验证语法
import subprocess
result = subprocess.run(['node', '-c', 'js/spells-data.js'], capture_output=True, text=True)
if result.returncode == 0:
    print("JS syntax OK")
    
    # 统计当前法术数量
    with open('js/spells-data.js', 'r', encoding='utf-8') as f:
        content = f.read()
    import re
    spells = re.findall(r'"id":\s*"([^"]+)"', content)
    print(f"Total spells: {len(spells)}")
else:
    print("JS syntax error:")
    print(result.stderr)
