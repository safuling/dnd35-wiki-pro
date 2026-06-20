# 第8批法术追加 - 6环剩余 + 7环核心法术
# 直接构建JS字符串并追加

new_spells_js = """

  // ===== 第8批追加：6环剩余 + 7环核心 =====
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
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得关于目标的所有魔法信息：所有法术效果、灵光强度、法术学派、施法者等级等。该法术可以看穿所有未被神力防护的魔法。持续时间：1轮/级。",
    "focus": "一块水晶球",
    "arcane": {"wizard": 6, "sorcerer": 6},
    "divine": null,
    "classes": {"wizard": 6, "sorcerer": 6}
  },
  {
    "id": "circle_of_death",
    "nameEn": "Circle of Death",
    "nameZh": "死亡环",
    "level": 6,
    "school": "necromancy",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "area": "以你选择的点为中心，40尺半径扩散",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你释放出负能量冲击波。范围内所有生物的HP减少1d4点/级（最大10d4）。通过强韧检定的生物只受到一半伤害。不死生物和异界生物不受该法术影响。",
    "material": "一撮骨粉",
    "arcane": {"wizard": 6, "sorcerer": 6},
    "divine": null,
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
    "desc": "你可以改变天气。你可以选择： clear、rain、thunderstorm、snow、fog、tornado（DMG中有详细表格）。天气变化需要1d4+1轮才能完全生效。",
    "material": "一撮灰尘和水",
    "arcane": null,
    "divine": {"cleric": 6, "druid": 7},
    "classes": {"cleric": 6, "druid": 7}
  },
  {
    "id": "create_greater_undead",
    "nameEn": "Create Greater Undead",
    "nameZh": "创造高等不死生物",
    "level": 6,
    "school": "necromancy",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一具尸体",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如创造不死生物，但可创造更强大的不死生物：怨魂（施法者等级10+）、死灵骑士（施法者等级12+）、巫妖（施法者等级15+）。创造的不死生物在你的控制下。",
    "material": "价值500金币的红宝石粉末",
    "arcane": {"wizard": 8},
    "divine": {"cleric": 8},
    "classes": {"wizard": 8, "cleric": 8}
  },
  {
    "id": "eyebite",
    "nameEn": "Eyebite",
    "nameZh": "邪眼术（重复，跳过）",
    "level": 6,
    "school": "necromancy",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "跳过（已存在）",
    "arcane": {"wizard": 6, "sorcerer": 6},
    "divine": null,
    "classes": {"wizard": 6, "sorcerer": 6}
  }
"""

# 实际上，让我重新写一个更干净的版本
# 上面的内容只是示例，我需要写完整的法术数据

print(" This is a placeholder. Need to write actual spell data.")
