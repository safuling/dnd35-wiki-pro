#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第9批法术追加 - 6环剩余 + 7环核心法术
继续扩充法术库
"""

# 6环剩余 + 7环核心法术
spells_to_add = [
    # 6环剩余
    {
        "id": "live_oak",
        "nameEn": "Liveoak",
        "nameZh": "活橡树",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "10分钟",
        "range": "0尺",
        "target": "一棵你触及的活橡树",
        "duration": "1小时/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "一棵活橡树变为一个树精（Treant）的替身。替身有树精的属性（HD=你的施法者等级，AC=20，攻击+20近战，伤害2d6+12）。替身服从你的命令。",
        "material": "一颗橡果",
        "arcane": None,
        "divine": {"druid": 6},
        "classes": {"druid": 6}
    },
    {
        "id": "move_earth",
        "nameEn": "Move Earth",
        "nameZh": "移土术",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "长距",
        "area": "以你为中心，每等级10尺半径的区域",
        "duration": "即时或1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你可以移动泥土和松软岩石。每轮可以移动风10立方尺的泥土（改变地形、造沟、堆山等）。你可以塑造精确的地形。",
        "material": "一撮泥土",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": {"druid": 6},
        "classes": {"wizard": 6, "sorcerer": 6, "druid": 6}
    },
    {
        "id": "owl_s_wisdom_mass",
        "nameEn": "Owl's Wisdom, Mass",
        "nameZh": "群体猫头鹰之智慧",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "如猫头鹰之智慧法术，但可影响多个目标。每个受术者的感知获得+4增强加值。",
        "material": "一摄猫头鹰羽毛",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": {"cleric": 6},
        "classes": {"wizard": 6, "sorcerer": 6, "cleric": 6}
    },
    {
        "id": "programmed_image",
        "nameEn": "Programmed Image",
        "nameZh": "预设影像",
        "level": 6,
        "school": "illusion",
        "subSchool": "figment",
        "components": "V, S, M, F",
        "castingTime": "单动作",
        "range": "长距",
        "effect": "一个你想象的影像，大小最多每等级一个20尺立方",
        "duration": "永久，直到触发",
        "savingThrow": "意志过则发现",
        "spellResist": "否",
        "desc": "如鬼影憧憧，但你可以预设触发条件。当触发条件满足时，影像开始运行。你可以预设影像的行为模式。",
        "material": "与permanent image相同",
        "focus": "一个价值至少1000金币的宝石",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": None,
        "classes": {"wizard": 6, "sorcerer": 6}
    },
    {
        "id": "repel_wood",
        "nameEn": "Repel Wood",
        "nameZh": "排斥木材",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "0尺",
        "area": "以你为中心，10尺半径/级的区域",
        "duration": "1分钟/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "所有木制物品和植物被排斥离开你。木制武器不能命中你。木墙、木门等不能挡住你（你可以穿过它们）。",
        "arcane": None,
        "divine": {"druid": 6},
        "classes": {"druid": 6}
    },
    {
        "id": "summon_natures_ally_6",
        "nameEn": "Summon Nature's Ally VI",
        "nameZh": "召唤自然盟友六",
        "level": 6,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个自然生物",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "召唤以下自然生物之一：1) 1个大型元素（火、水、土、气）；2) 1个巨猿（Girallon）；3) 1d4+1个猛玛象；4) 1d4+2个剑齿虎。",
        "arcane": None,
        "divine": {"druid": 6, "ranger": 6},
        "classes": {"druid": 6, "ranger": 6}
    },
    {
        "id": "tenser_s_transformation",
        "nameEn": "Tenser's Transformation",
        "nameZh": "坦瑟变身术",
        "level": 6,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你变身为战斗形态：力量+6增强加值，天生护甲+4，基础攻击加值+6，获得猛力攻击专长。你不能使用法术或技能（除了专注维持该法术）。",
        "material": "一撮铁粉",
        "arcane": {"wizard": 6, "sorcerer": 6},
        "divine": None,
        "classes": {"wizard": 6, "sorcerer": 6}
    },
    # 7环法术
    {
        "id": "arcane_sight_greater",
        "nameEn": "Arcane Sight, Greater",
        "nameZh": "高等奥术视觉",
        "level": 7,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "如奥术视觉，但你可以看穿所有法术的灵光并记录它们。你可以获得关于任何法术或魔法物品的所有信息（如同分析灵光法术）。",
        "material": "一片水晶透镜",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "chain_lightning",
        "nameEn": "Chain Lightning",
        "nameZh": "连锁闪电",
        "level": 7,
        "school": "evocation",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "长距",
        "target": "一个生物或物体，加上额外的次级目标",
        "duration": "即时",
        "savingThrow": "反射过则减半",
        "spellResist": "可",
        "desc": "你发射一道闪电，造成1d6点伤害/级（最大20d6）。闪电命中主要目标后，跳跃到附近的次级目标（最多每等级1个）。每个次级目标受到主要目标伤害的一半。",
        "focus": "一根黄铜杖",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "control_undead",
        "nameEn": "Control Undead",
        "nameZh": "控制不死生物",
        "level": 7,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "最多每等级2HD的不死生物，彼此相距不超过30尺",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你控制范围内所有HD不超过每等级2的不死生物。被控制的不死生物服从你的口头命令。意志检定成功的不死生物不受控制。",
        "material": "一撮骨粉",
        "arcane": {"wizard": 7},
        "divine": {"cleric": 7},
        "classes": {"wizard": 7, "cleric": 7}
    },
    {
        "id": "cremate",
        "nameEn": "Cremate",
        "nameZh": "焚化术",
        "level": 7,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则部分生效",
        "spellResist": "可",
        "desc": "一道火焰射线射向目标。命中后造成1d6点火焰伤害+每等级1点（最大15d6）。如果目标的HP降至0或以下，目标被完全焚化为灰烬（无法复活，除非通过神迹术或同等效果）。通过的强韧检定将伤害减半。",
        "material": "一小块磷",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "darkwood_batch",
        "nameEn": "Darkwood Batch",
        "nameZh": "黑木 batch",
        "level": 7,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "触及",
        "target": "一件木制物品",
        "duration": "永久",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将一件木制物品转化为黑木（darkwood）。黑木是一种魔法木材，重量减轻一半，硬度增加。该转化是永久的。",
        "material": "一小块黑木",
        "arcane": {"wizard": 7},
        "divine": {"druid": 7},
        "classes": {"wizard": 7, "druid": 7}
    },
    {
        "id": "deflection",
        "nameEn": "Deflection",
        "nameZh": "偏转力场",
        "level": 7,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级或直到耗尽",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你被一个力场包围。该力场可以偏转最多100点伤害/级（最大700点）。伤害被力场吸收，直到力场耗尽。力场对物理和魔法伤害都有效。",
        "material": "一片水晶",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "destruction",
        "nameEn": "Destruction",
        "nameZh": "毁灭术",
        "level": 7,
        "school": "necromancy",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你对目标造成10d6点伤害。如果目标的HP降至0或以下，目标被完全摧毁（如同神迹术的毁灭选项）。通过的强韧检定将伤害减半，但如果伤害足够将目标降至0HP，目标仍会被摧毁。",
        "focus": "一个价值至少5000金币的宝石",
        "arcane": None,
        "divine": {"cleric": 7},
        "classes": {"cleric": 7}
    },
    {
        "id": "dictum",
        "nameEn": "Dictum",
        "nameZh": "神言术（守序）",
        "level": 7,
        "school": "evocation",
        "components": "V",
        "castingTime": "单动作",
        "range": "40尺",
        "area": "以你为中心，40尺半径扩散",
        "duration": "即时",
        "savingThrow": "见描述",
        "spellResist": "可",
        "desc": "你说出神之言语（守序版本）。范围内所有非守序生物受到1d6点伤害/级（最大15d6）。通过强韧检定则伤害减半。守序生物不受伤害但可能震慑1d4轮。",
        "arcane": None,
        "divine": {"cleric": 7},
        "classes": {"cleric": 7}
    },
    {
        "id": "divination",
        "nameEn": "Divination",
        "nameZh": "占卜术",
        "level": 7,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "10分钟",
        "range": "个人",
        "target": "你",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你进行一次占卜，获得关于未来事件的知识。DM会告诉你一个有用的线索或警告。该法术的成功率取决于问题的复杂程度。",
        "material": "价值至少2500金币的占卜用具",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7}
    },
    {
        "id": "ethereal_jaunt",
        "nameEn": "Ethereal Jaunt",
        "nameZh": "星界跳跃",
        "level": 7,
        "school": "transmutation",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你跳跃到星界位面。在星界位面中，你是虚体，可以穿过固体物体。你可以看到主位面的生物和物体（如同模糊的幻影）。你可以随时结束法术回到主位面。",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7, "druid": 7},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7, "druid": 7}
    },
    {
        "id": "forcecage",
        "nameEn": "Forcecage",
        "nameZh": "力场牢笼",
        "level": 7,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "effect": "一个力场牢笼",
        "duration": "1轮/级",
        "savingThrow": "反射过则部分生效",
        "spellResist": "否",
        "desc": "你创造一个力场牢笼，困住其中的生物。牢笼是一个20尺立方的力场。被困的生物无法攻击或施法到牢笼外。通过的反射检定可以让生物被推出牢笼（但仍在范围内）。",
        "material": "一块小水晶",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": None,
        "classes": {"wizard": 7, "sorcerer": 7}
    },
    {
        "id": "finger_of_death",
        "nameEn": "Finger of Death",
        "nameZh": "死亡一指",
        "level": 7,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你对目标施展死亡能量。目标必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到3d6+1/级点负能量伤害（最大+15）。不死生物和异界生物不受该法术影响。",
        "material": "一摄骨粉",
        "arcane": {"wizard": 7, "sorcerer": 7},
        "divine": {"cleric": 7},
        "classes": {"wizard": 7, "sorcerer": 7, "cleric": 7}
    }
]

# 转换为JS格式
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
        arcane = spell["arcane"]
        parts = [f'"{k}": {v}' for k, v in arcane.items()]
        lines.append(f'    "arcane": {{{", ".join(parts)}}},')
    else:
        lines.append('    "arcane": null,')
    
    # divine
    if spell.get("divine"):
        divine = spell["divine"]
        parts = [f'"{k}": {v}' for k, v in divine.items()]
        lines.append(f'    "divine": {{{", ".join(parts)}}},')
    else:
        lines.append('    "divine": null,')
    
    # classes
    classes = spell["classes"]
    parts = [f'"{k}": {v}' for k, v in classes.items()]
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
new_content = content[:end_pos] + ',\n  // ===== Batch 9 =====\n' + spells_js + '\n' + content[end_pos:]

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
