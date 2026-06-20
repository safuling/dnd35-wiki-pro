#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第8批法术追加脚本
直接定义Python字典，然后转换为JS格式追加到文件
"""

# 6环剩余法术 + 7环核心法术
spells_to_add = [
    {
        "id": "analyze_dweomer",
        "nameEn": "Analyze Dweomer",
        "nameZh": "分析灵光",
        "level": 6,
        "school": "divination",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个物体或生物",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你获得关于目标的所有魔法信息：所有法术效果、灵光强度、法术学派、施法者等级等。该法术可以看穿所有未被神力防护的魔法。",
        "focus": "一块水晶球",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": None,
        "classes": {"wizard": 6, "sorcerer": 6}
    },
    {
        "id": "control_weather",
        "nameEn": "Control Weather",
        "nameZh": "控制天气",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "10分钟",
        "range": "0尺",
        "area": "以你为中心，每等级2英里半径的区域",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你可以改变天气。你可以选择：晴朗、降雨、雷暴、降雪、大雾、龙卷风。天气变化需要1d4+1轮才能完全生效。",
        "material": "一撮灰尘和水",
        "arcane": None,
        "divine": {"cleric": 6, "druid": 7},
        "classes": {"cleric": 6, "druid": 7}
    },
    {
        "id": "cure_moderate_wounds_mass",
        "nameEn": "Cure Moderate Wounds, Mass",
        "nameZh": "群体治疗重伤",
        "level": 6,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "你所选的最多每等级1个接触的生物，彼此相距不超过30尺",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "如治疗重伤，但可影响多个目标。每个受术者恢复10点HP+1/级（最大+10）。该法术可以治疗不死生物造成的伤害。",
        "arcane": None,
        "divine": {"cleric": 6, "druid": 7},
        "classes": {"cleric": 6, "druid": 7}
    },
    {
        "id": "dictum",
        "nameEn": "Dictum",
        "nameZh": "神言术",
        "level": 6,
        "school": "evocation",
        "components": "V",
        "castingTime": "单动作",
        "range": "40尺",
        "area": "以你为中心，40尺半径扩散",
        "duration": "即时",
        "savingThrow": "见描述",
        "spellResist": "可",
        "desc": "你说出神之言语。范围内所有非守序生物受到1d6点伤害/级（最大15d6）。通过强韧检定则伤害减半。守序生物不受伤害但可能震慑1d4轮。",
        "arcane": None,
        "divine": {"cleric": 6},
        "classes": {"cleric": 6}
    },
    {
        "id": "dispel_magic_greater",
        "nameEn": "Dispel Magic, Greater",
        "nameZh": "高等解除魔法",
        "level": 6,
        "school": "abjuration",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "见描述",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "如解除魔法，但你可以针对多个目标或区域。你可以以标准动作针对一个目标施展，或以整轮动作针对一个区域（如同法术区域的模式）。你的施法者等级检定获得+10加值。",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": {"cleric": 6},
        "classes": {"wizard": 6, "sorcerer": 6, "cleric": 6}
    },
    {
        "id": "eye_of_autumn",
        "nameEn": "Eye of Autumn",
        "nameZh": "秋之眼",
        "level": 6,
        "school": "evocation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你的眼睛发出金色光芒。每轮你可以以自由动作对目标发射一道光束，造成1d6点光耀伤害+每等级1点（最大+15）。目标如果失败强韧检定则目盲1轮。",
        "arcane": None,
        "divine": {"druid": 6},
        "classes": {"druid": 6}
    },
    {
        "id": "fire_seeds",
        "nameEn": "Fire Seeds",
        "nameZh": "火种术",
        "level": 6,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "触及",
        "target": "最多四颗橡果或四颗干果",
        "duration": "1轮/级",
        "savingThrow": "反射过则减半或强韧过则无效",
        "spellResist": "否",
        "desc": "你将橡果或干果转化为爆炸物。有两种使用方式：1) 投掷：投掷距离30尺，命中后1d4+1d6火焰伤害（反射减半）；2) 橡果手雷：投掷距离50尺+5尺/2级，爆炸造成1d6+1火焰伤害每等级（最大+10d6）。",
        "material": "一颗橡果和一颗干果",
        "arcane": None,
        "divine": {"druid": 6},
        "classes": {"druid": 6}
    },
    {
        "id": "flesh_to_stone",
        "nameEn": "Flesh to Stone",
        "nameZh": "血肉化石",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "永久",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "目标生物开始石化。目标必须成功强韧检定，否则在1d4+1轮后完全变为石头。已石化的生物可以被化石为肉术恢复。",
        "material": "一撮石灰粉",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": {"cleric": 7},
        "classes": {"wizard": 6, "sorcerer": 6, "cleric": 7}
    },
    {
        "id": "geas_quest",
        "nameEn": "Geas/Quest",
        "nameZh": "使命/任务",
        "level": 6,
        "school": "enchantment",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "近距",
        "target": "一个生物",
        "duration": "永久",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你给目标下达一个任务或使命。目标必须尝试完成任务。如果任务与目标的本性严重冲突，目标可以每24小时尝试一次意志检定以摆脱效果。违反使命会导致每24小时受到3d6点伤害。",
        "material": "价值至少1000金币的宝石",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": {"cleric": 6},
        "classes": {"wizard": 6, "sorcerer": 6, "cleric": 6}
    },
    {
        "id": "giant_vortex",
        "nameEn": "Giant Vortex",
        "nameZh": "巨漩涡",
        "level": 6,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个漩涡，半径最多20尺+5尺/级",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你在水中创造一个巨大漩涡。漩涡中心每轮对你选择的生物造成8d6点钝击伤害。漩涡可将船只卷入水底。",
        "material": "一小片漩涡图样",
        "arcane": None,
        "divine": {"druid": 6},
        "classes": {"druid": 6}
    }
]

# 转换为JS格式并追加到文件
def spell_to_js(spell):
    """将Python字典转换为JS对象字符串"""
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
        arcane = spell["arcane"]
        arcane_str = ", ".join([f'"{k}": {v}' for k, v in arcane.items()])
        lines.append(f'    "arcane": {{{arcane_str}}},')
    else:
        lines.append('    "arcane": null,')
    
    # divine
    if spell.get("divine"):
        divine = spell["divine"]
        divine_str = ", ".join([f'"{k}": {v}' for k, v in divine.items()])
        lines.append(f'    "divine": {{{divine_str}}},')
    else:
        lines.append('    "divine": null,')
    
    # classes
    classes = spell["classes"]
    classes_str = ", ".join([f'"{k}": {v}' for k, v in classes.items()])
    lines.append(f'    "classes": {{{classes_str}}}')
    
    lines.append('  }')
    return '\n'.join(lines)

# 读取现有文件
with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到数组结束位置
end_pos = content.rfind('];')
if end_pos == -1:
    print("错误：找不到数组结束标记")
    exit(1)

# 构建新法术的JS字符串
spells_js = '\n  ,\n'.join([spell_to_js(s) for s in spells_to_add])

# 插入到数组中
new_content = content[:end_pos] + ',\n  // ===== 第8批追加 =====\n' + spells_js + '\n' + content[end_pos:]

# 写回文件
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"成功追加 {len(spells_to_add)} 个法术")
print("正在验证JS语法...")

# 验证语法
import subprocess
result = subprocess.run(['node', '-c', 'js/spells-data.js'], capture_output=True, text=True)
if result.returncode == 0:
    print("✓ JS语法正确！")
else:
    print("✗ JS语法错误：")
    print(result.stderr)
