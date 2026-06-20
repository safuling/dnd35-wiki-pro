import json

# 读取JSON文件，找到并修复问题
with open('new_spells_7.json', 'r', encoding='utf-8') as f:
    content = f.read()

# 问题是：JSON字符串内部的双引号没有转义
# 我们需要手动修复或者直接重新生成正确的JSON

# 更简单的方法：重新生成一个正确的JSON文件
# 让我们直接重新写一个新的、正确的JSON文件

spells = [
  {
    "id": "acid_fog_6",
    "nameEn": "Acid Fog",
    "nameZh": "酸雾",
    "level": 6,
    "school": "conjuration",
    "subSchool": "creation",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "area": "雾气扩散范围（20尺半径，20尺高）",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一片浓密的黄绿色雾气，雾气对视线造成完全遮蔽（掩蔽+2）。雾气中的生物每轮受到1d6点强酸伤害，金属物品每轮受到2d6点伤害（无豁免）。雾气中心区域可被风吹散。",
    "material": "一小瓶酸液",
    "arcane": {"wizard": 6, "sorcerer": 6},
    "divine": None,
    "classes": {"wizard": 6, "sorcerer": 6}
  }
]

# 实际上，让我直接用Python字典定义所有法术，然后输出为JSON
# 这样更安全

spells_correct = []

# 酸雾
spells_correct.append({
    "id": "acid_fog_6",
    "nameEn": "Acid Fog",
    "nameZh": "酸雾",
    "level": 6,
    "school": "conjuration",
    "subSchool": "creation",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "area": "雾气扩散范围（20尺半径，20尺高）",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一片浓密的黄绿色雾气，雾气对视线造成完全遮蔽（掩蔽+2）。雾气中的生物每轮受到1d6点强酸伤害，金属物品每轮受到2d6点伤害（无豁免）。雾气中心区域可被风吹散。",
    "material": "一小瓶酸液",
    "arcane": {"wizard": 6, "sorcerer": 6},
    "divine": None,
    "classes": {"wizard": 6, "sorcerer": 6}
})

# 群体熊之耐力
spells_correct.append({
    "id": "bear_s_endurance_mass",
    "nameEn": "Bear's Endurance, Mass",
    "nameZh": "群体熊之耐力",
    "level": 6,
    "school": "transmutation",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如熊之耐力法术，但可影响多个目标。每个受术者的体质获得+4增强加值。",
    "material": "一滴甘草汁",
    "arcane": None,
    "divine": {"cleric": 6, "druid": 6},
    "classes": {"cleric": 6, "druid": 6}
})

# 继续添加其他法术...
# 由于数量较多，让我直接写一个更简洁的版本

print(f"准备了 {len(spells_correct)} 个法术（示例）")
print("需要继续添加其他法术...")

# 实际上，让我换个思路：直接修复原JSON文件中的引号问题
# 然后用json.dump输出正确的JSON
