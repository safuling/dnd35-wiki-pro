const SPELLS = [
  {
    "id": "acid_splash",
    "nameEn": "Acid Splash",
    "nameZh": "酸液飞溅",
    "level": 0,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个生物或一件物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一个飞溅的强酸球射向目标。你必须进行远程接触攻击来命中目标。命中则造成1d3点强酸伤害。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    }
  },
  {
    "id": "arcane_mark",
    "nameEn": "Arcane Mark",
    "nameZh": "奥术标记",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "一个物体或生物",
    "duration": "永久",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你在目标上留下一个微小（不超过2平方寸）的奥术标记、符号或图案。标记对普通人不可见（需要侦测魔法或类似效果才能看见）。你可以随时看到你自己做的奥术标记。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    }
  },
  {
    "id": "create_water",
    "nameEn": "Create Water",
    "nameZh": "造水术",
    "level": 0,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "无或10尺散布",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你制造出最多2加仑的水（每施法者等级增加2加仑）。水是无害的纯净水。水会立即出现在你指定的位置（可以是空中的容器，也可以是地面上）。",
    "material": "一个水滴",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0,
      "圣武士": 1
    }
  },
  {
    "id": "cure_minor_wounds",
    "nameEn": "Cure Minor Wounds",
    "nameZh": "微伤治疗",
    "level": 0,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的1点伤害。对亡灵造成伤害。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "dancing_lights",
    "nameEn": "Dancing Lights",
    "nameZh": "舞光术",
    "level": 0,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "见描述",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出至多四团小火光（类似火把之光）。你可以将它们如同火炬一般挥舞，或者赋予它们简单的动作。每团光的可视半径20尺。你可以让这些光在施法距离内移动。",
    "source": "3R",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "daze",
    "nameEn": "Daze",
    "nameZh": "震慑",
    "level": 0,
    "school": "惑控系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个生物",
    "duration": "1轮",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "该法术可以使一个HD4或更少的生物震慑一轮。受术者在下轮中不能行动。",
    "material": "一小撮湿泥",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "detect_magic",
    "nameEn": "Detect Magic",
    "nameZh": "侦测魔法",
    "level": 0,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形区域或你本人",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你感知到60尺内的魔法物品、法术正在运作的区域、或魔法生物。你需要将注意力集中至少1轮才能确定某物是否带有魔法。第二轮可以辨识出魔法的大致类型和强度。第三轮可以精确辨识。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "detect_poison",
    "nameEn": "Detect Poison",
    "nameZh": "侦测毒素",
    "level": 0,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "你自己",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你侦测到开放或容器中的毒素，以及生物或物品上的毒素。你需要将注意力集中至少1轮才能确定某物是否带有毒素。第二轮可以辨识出毒素的类型和强度。第三轮可以精确辨识。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "ranger": 1,
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0,
      "圣武士": 1,
      "巡林客": 1
    }
  },
  {
    "id": "disrupt_undead",
    "nameEn": "Disrupt Undead",
    "nameZh": "击退亡灵",
    "level": 0,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个亡灵生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你对一个亡灵生物发射一道负能量波。对HD5或更少的亡灵造成1d6点伤害。对HD5以上的亡灵无效。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    }
  },
  {
    "id": "flare",
    "nameEn": "Flare",
    "nameZh": "闪光术",
    "level": 0,
    "school": "塑能系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "否",
    "desc": "你向目标抛掷一小撮闪光粉尘。目标受到1点伤害且目盲一轮（通过意志检定则不受影响）。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "druid": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "德鲁伊": 0
    }
  },
  {
    "id": "ghost_sound",
    "nameEn": "Ghost Sound",
    "nameZh": "幽幻之声",
    "level": 0,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "无或10尺散布",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以制造任意音量的人声、动物叫声或环境声响（如雷声、蹄声等）。听者需要成功的意志检定才能识破幻术。法术强度（用于穿透法术抗力等）等于你的施法者等级+10。",
    "source": "3R",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "guidance",
    "nameEn": "Guidance",
    "nameZh": "指引术",
    "level": 0,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟或直到触发",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者在一次攻击检定、技能检定或属性检定中获得+1直觉加值。受术者可以在法术持续期间的任意时刻使用这个加值。一旦使用，法术即终止。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "inflict_minor_wounds",
    "nameEn": "Inflict Minor Wounds",
    "nameZh": "微伤造成",
    "level": 0,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你造成1点伤害。对不死生物施放则治愈1点伤害。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0
    },
    "divine": {
      "牧师": 0
    }
  },
  {
    "id": "know_direction",
    "nameEn": "Know Direction",
    "nameZh": "辨识方向",
    "level": 0,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "你自己",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以立即感知当前所在位置的北方方向。该法术让你在任何环境下都能准确辨别方向。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "druid": 0
    },
    "arcane": {
      "吟游诗人": 0
    },
    "divine": {
      "德鲁伊": 0
    }
  },
  {
    "id": "light",
    "nameEn": "Light",
    "nameZh": "光亮术",
    "level": 0,
    "school": "塑能系",
    "components": "V,M/DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰到的物体",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "使目标物体发出亮光，发光半径20尺（如同火把）。你可以将光亮术施展在投掷物上，但只有钝击伤害。你也可以在法术持续期间以一个免费动作使光亮变暗或变亮。如果你将法术施展到一个已经被其他光亮术影响的物体上，则新法术覆盖旧法术。",
    "material": "一节萤火虫或一团磷光苔藓",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "lullaby",
    "nameEn": "Lullaby",
    "nameZh": "催眠曲",
    "level": 0,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "10尺半径爆发内的活物",
    "duration": "专注 + 1轮/级（可解消）",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "影响区域内的活物若意志豁免失败，会变得昏沉迟钝；其聆听和侦察检定承受-5减值，并在对抗睡眠术的意志豁免上承受-2减值。",
    "source": "PHB",
    "classLevels": {
      "bard": 0
    },
    "arcane": {
      "吟游诗人": 0
    }
  },
  {
    "id": "mage_hand",
    "nameEn": "Mage Hand",
    "nameZh": "法师之手",
    "level": 0,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一件物品（最高5磅）",
    "duration": "专注",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你以意念remote控制一件物品（最高5磅）。你可以移动、拉开、推挤该物品，但无法让它进行攻击。法师之手无法携带物品。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "mending",
    "nameEn": "Mending",
    "nameZh": "修理术",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "一件破损物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以修复一件破损的非魔法物品（破损程度不超过1平方尺）。修理术无法修复魔法物品或已解体的物品。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "message",
    "nameEn": "Message",
    "nameZh": "传讯术",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "一个生物",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你和受术者可以互相进行低语交谈（只有你们两人能听到），即使你有病原体或处于水下。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "open_close",
    "nameEn": "Open/Close",
    "nameZh": "开关术",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一件门、窗户、匣子或相同体积的物品",
    "duration": "立即",
    "savingThrow": "无；见描述",
    "spellResist": "否；见描述",
    "desc": "你可以远程打开或关闭物品（门、窗户、匣子等）。如果你试图关闭物品对抗某人的意愿（如关闭某人的盾牌），则目标可以进行强韧检定以抵抗。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "prestidigitation",
    "nameEn": "Prestidigitation",
    "nameZh": "戏法",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "见描述",
    "duration": "1小时",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你可以执行简单的戏法效果：制造轻微的香味或恶臭、清洁或弄脏小物品、染色或褪色小物品、制造小火花或小闪光、温暖或冷却小物品等。戏法不产生实质性伤害，也无法杀死或复活生物。它的效果类似0环法师戏法。",
    "source": "3R",
    "classLevels": {
      "bard": 0,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    }
  },
  {
    "id": "purify_food_drink",
    "nameEn": "Purify Food and Drink",
    "nameZh": "净化饮食",
    "level": 0,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "1磅/环的食物或1加仑/环的饮料",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你使食物和饮料变得纯净、适合食用。该法术可以中和普通毒素和腐败。它无法中和魔法毒素（如妖怪毒素）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0
    }
  },
  {
    "id": "ray_of_frost",
    "nameEn": "Ray of Frost",
    "nameZh": "霜射线",
    "level": 0,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一道射线",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你发射一道冰冷的射线。需要进行远程接触攻击。命中则造成1d3点寒冷伤害。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    }
  },
  {
    "id": "read_magic",
    "nameEn": "Read Magic",
    "nameZh": "阅读魔法",
    "level": 0,
    "school": "预言系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以阅读魔法卷轴、法术书、或任何书写的魔法文字（包括符文、咒文等）。每个阅读魔法法术让你解读一段魔法文字。",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "ranger": 1,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0,
      "圣武士": 1,
      "巡林客": 1
    }
  },
  {
    "id": "resistance",
    "nameEn": "Resistance",
    "nameZh": "抗力术",
    "level": 0,
    "school": "防护系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得+1抗力加值对付所有豁免检定。",
    "material": "一块石英晶体",
    "source": "PHB",
    "classLevels": {
      "bard": 0,
      "cleric": 0,
      "druid": 0,
      "paladin": 1,
      "sorcererWizard": 0
    },
    "arcane": {
      "吟游诗人": 0,
      "术士/法师": 0
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0,
      "圣武士": 1
    }
  },
  {
    "id": "summon_instrument",
    "nameEn": "Summon Instrument",
    "nameZh": "召唤乐器",
    "level": 0,
    "school": "咒法系",
    "descriptor": "召唤",
    "components": "V, S",
    "castingTime": "1轮",
    "range": "0尺",
    "target": "一件可手持乐器",
    "duration": "1分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "你召来一件普通、可手持的乐器，出现在手中或脚边。每次施法只召来一件，且只能由你演奏；过大的乐器不能被召唤。",
    "source": "PHB",
    "classLevels": {
      "bard": 0
    },
    "arcane": {
      "吟游诗人": 0
    }
  },
  {
    "id": "touch_of_fatigue",
    "nameEn": "Touch of Fatigue",
    "nameZh": "触碰疲劳",
    "level": 0,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个生物",
    "duration": "1轮/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要成功近战接触攻击。命中则目标受到-2体质惩罚（强韧过则无效）。如果法术持续到下一轮，目标在轮末再做一次强韧检定以解除。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 0
    },
    "arcane": {
      "术士/法师": 0
    }
  },
  {
    "id": "virtue",
    "nameEn": "Virtue",
    "nameZh": "美德术",
    "level": 0,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得1点临时的生命值（HP），持续1分钟。",
    "source": "PHB",
    "classLevels": {
      "cleric": 0,
      "druid": 0,
      "paladin": 1
    },
    "divine": {
      "牧师": 0,
      "德鲁伊": 0,
      "圣武士": 1
    }
  },
  {
    "id": "alarm",
    "nameEn": "Alarm",
    "nameZh": "警铃术",
    "level": 1,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1标准动作或1轮（见描述）",
    "range": "近距 (25尺+5尺/2环)",
    "target": "5尺/环的散布",
    "duration": "2小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在区域内设置了一个魔法警报。当任何体型细小的生物或更大的生物穿过区域时，你会听到一声响亮的铃声（普通听觉距离60尺）。你可以选择将警报设为「心灵感应」模式（只有你能听到）或「声响」模式（任何人都能听到）。你可以施展为即时动作（1轮施法时间）来设定警报区域为触碰范围。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "ranger": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    },
    "divine": {
      "巡林客": 1
    }
  },
  {
    "id": "animate_ropes",
    "nameEn": "Animate Rope",
    "nameZh": "活化绳索",
    "level": 1,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "一根绳索或类似物",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你赋予一根绳索或类似物简单的活动能力。它可以按照你的指令缠绕、打结、移动或执行其他简单动作。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "bane",
    "nameEn": "Bane",
    "nameZh": "灾祸",
    "level": 1,
    "school": "惑控系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "50英尺",
    "target": "所有在范围内的敌人",
    "duration": "1分钟/等级",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "你诅咒敌人，降低他们的战斗能力。所有受影响的敌人攻击骰和伤害骰-1。",
    "source": "3R",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "bless",
    "nameEn": "Bless",
    "nameZh": "祝福术",
    "level": 1,
    "school": "惑控系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "50尺",
    "target": "你以及最多每施法者等级一个盟友（所有目标都在范围内）",
    "duration": "1分钟",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "受术者近战攻击检定和豁免检定获得+1士气加值。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "bless_water",
    "nameEn": "Bless Water",
    "nameZh": "祝福圣水",
    "level": 1,
    "school": "变化系",
    "descriptor": "善良",
    "components": "V, S, M",
    "castingTime": "1分钟",
    "range": "接触",
    "target": "接触的一小瓶水",
    "duration": "立即",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "可（物品）",
    "desc": "把一品脱水转化为圣水，使其充满正能量。",
    "material": "价值25金币的5磅银粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "burning_hands",
    "nameEn": "Burning Hands",
    "nameZh": "燃烧之手",
    "level": 1,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "你自己（扇状区域）",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你双手掌心射出圆锥形的火焰（扇状，锥底15尺，锥高15尺）。锥内所有生物受到1d4点火焰伤害每施法者等级（最高5d4）。通过反射检定则伤害减半。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "calm_animals",
    "nameEn": "Calm Animals",
    "nameZh": "安抚动物",
    "level": 1,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "2d4+每等级1个动物(HD总和)",
    "duration": "1分钟/等级",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "使动物平静下来，不再具有攻击性。受影响的动物不会攻击任何生物，但如果被攻击则此法术结束。你可以影响HD总和等于2d4+你的施法者等级的动物。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "cause_fear",
    "nameEn": "Cause Fear",
    "nameZh": "造成恐惧",
    "level": 1,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个HD5或更少的生物",
    "duration": "1d4轮",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标如果失败意志检定，会恐慌逃窜（如同恐慌状态）。HD6+的生物不受该法术影响。",
    "material": "一撮兔毛",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "charm_animal",
    "nameEn": "Charm Animal",
    "nameZh": "魅惑动物",
    "level": 1,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一只动物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "使一只动物视你为值得信赖的伙伴（不会执行明显有害行动）。通过意志检定则无效。伤害可解除魅惑。",
    "source": "3R",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "charm_person",
    "nameEn": "Charm Person",
    "nameZh": "魅惑人类",
    "level": 1,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个人形生物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你使一个人类、半人类或半兽人觉得你是他值得信赖的朋友（不过被魅惑的生物不会做明显有害的事情）。通过意志检定则法术无效。如果你或你的盟友对受术者造成伤害，法术终止。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "chill_touch",
    "nameEn": "Chill Touch",
    "nameZh": "寒冷之触",
    "level": 1,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/级（见描述）",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你的徒手攻击造成1d6点寒冷伤害+1点/级（最大+5）。命中的生物如果失败强韧检定，会受到1点力量伤害。你可以以自由动作在每个回合进行一次冷冻之触攻击。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "color_spray",
    "nameEn": "Color Spray",
    "nameZh": "彩光喷射",
    "level": 1,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "锥状区域（扇状，锥底15尺，锥高15尺）",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "否",
    "desc": "你喷射出一道炫目的彩色光芒。锥内HD最多的生物首先受影响，若有并列则随机决定。受影响生物被目盲1d4轮（通过意志检定则不受影响）。如果锥内HD总数超过你的施法者等级，超出部分的生物不受影响。",
    "material": "一小袋精细彩色粉末或沙子",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "command",
    "nameEn": "Command",
    "nameZh": "指令术",
    "level": 1,
    "school": "惑控系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "1轮",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "你发出一个单词语指令（如\"撤退\"、\"倒下\"、\"停止\"、\"投降\"），目标必须通过意志检定来执行该指令。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "comprehend_languages",
    "nameEn": "Comprehend Languages",
    "nameZh": "理解语言",
    "level": 1,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以阅读和理解任何书面语言（不需要做技能检定）。你也可以听懂任何口头语言。理解语言无法让你与不会说通用语的生物交谈。",
    "material": "一小撮泥土和几根稻草",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "lesser_confusion",
    "nameEn": "Confusion, Lesser",
    "nameZh": "次级困惑术",
    "level": 1,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个活物",
    "duration": "1轮",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标若豁免失败，会在1轮内陷入困惑状态，按困惑术的随机行动规则处理。",
    "source": "PHB",
    "classLevels": {
      "bard": 1
    },
    "arcane": {
      "吟游诗人": 1
    }
  },
  {
    "id": "cure_light_wounds",
    "nameEn": "Cure Light Wounds",
    "nameZh": "治疗轻伤",
    "level": 1,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的1d8点伤害+每施法者等级1点（最高+5）。对亡灵造成伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 1,
      "druid": 1,
      "paladin": 1,
      "ranger": 2
    },
    "arcane": {
      "吟游诗人": 1
    },
    "divine": {
      "牧师": 1,
      "德鲁伊": 1,
      "圣武士": 1,
      "巡林客": 2
    }
  },
  {
    "id": "curse_water",
    "nameEn": "Curse Water",
    "nameZh": "诅咒邪水",
    "level": 1,
    "school": "死灵系",
    "descriptor": "邪恶",
    "components": "V, S, M",
    "castingTime": "1分钟",
    "range": "接触",
    "target": "接触的一小瓶水",
    "duration": "立即",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "可（物品）",
    "desc": "把一品脱水注入负能量并转化为邪水。邪水对善良异界生物的伤害方式类似圣水对不死生物和邪恶异界生物的伤害。",
    "material": "价值25金币的5磅银粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "deathwatch",
    "nameEn": "Deathwatch",
    "nameZh": "观命术",
    "level": 1,
    "school": "死灵系",
    "descriptor": "邪恶",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "30尺",
    "target": "锥形弥漫",
    "duration": "10分钟/级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "辨明范围内生物的生命状态，包括死亡、濒死、仍有较多生命值、不死生物或非生命体；也能看穿假死类效果。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "detect_animals_or_plants",
    "nameEn": "Detect Animals or Plants",
    "nameZh": "侦测动植物",
    "level": 1,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "锥形区域",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以侦测到一个锥形区域内的动物或植物（你选择侦测其中一种）。第一轮可以感知有无存在，第二轮可以感知数量和位置，第三轮可以了解具体种类。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "detect_chaos",
    "nameEn": "Detect Chaos",
    "nameZh": "侦测混乱",
    "level": 1,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形弥漫",
    "duration": "专注，最多10分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "source": "PHB",
    "desc": "如侦测邪恶，但侦测混乱生物、混乱神祇牧师、混乱法术和混乱魔法物品的灵光；守序施法者可能被极强混乱灵光震慑。",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "detect_evil_cleric",
    "nameEn": "Detect Evil",
    "nameZh": "侦测邪恶",
    "level": 1,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形弥漫",
    "duration": "专注，最多10分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "source": "PHB",
    "desc": "侦测锥形范围内的邪恶灵光。连续专注可得知是否存在、数量与最强灵光、各灵光强度和位置；强烈对立灵光可能震慑善良施法者。",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "detect_good",
    "nameEn": "Detect Good",
    "nameZh": "侦测善良",
    "level": 1,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形弥漫",
    "duration": "专注，最多10分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "source": "PHB",
    "desc": "如侦测邪恶，但侦测善良生物、善良神祇牧师或圣武士、善良法术和善良魔法物品的灵光；邪恶施法者可能被极强善良灵光震慑。",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "detect_law",
    "nameEn": "Detect Law",
    "nameZh": "侦测守序",
    "level": 1,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形弥漫",
    "duration": "专注，最多10分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "source": "PHB",
    "desc": "如侦测邪恶，但侦测守序生物、守序神祇牧师、守序法术和守序魔法物品的灵光；混乱施法者可能被极强守序灵光震慑。",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "detect_secret_doors",
    "nameEn": "Detect Secret Doors",
    "nameZh": "侦测秘门",
    "level": 1,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形区域或你本人",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你感知到60尺内的隐藏门、暗门和入口。你需要将注意力集中至少1轮才能确定某个门是否隐藏。第二轮可以精确辨识隐藏门的位置。第三轮可以辨识隐藏门的开启方式。",
    "source": "3R",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "detect_snares_and_pits",
    "nameEn": "Detect Snares and Pits",
    "nameZh": "侦测坑阱",
    "level": 1,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形区域",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以侦测到区域内的天然或人工陷阱（如坑洞、圈套、捕兽夹等）。第一轮感知有无存在，第二轮了解陷阱数量，第三轮可以确定每个陷阱的位置和类型。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "detect_undead",
    "nameEn": "Detect Undead",
    "nameZh": "侦测亡灵",
    "level": 1,
    "school": "预言系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形区域或你本人",
    "duration": "专注，最长1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "感知60尺内的亡灵生物。首轮感知是否存在，次轮感知数量，第三轮感知类型（僵尸/骷髅/吸血鬼等）。",
    "source": "3R",
    "classLevels": {
      "cleric": 1,
      "paladin": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "disguise_self",
    "nameEn": "Disguise Self",
    "nameZh": "伪装术",
    "level": 1,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你",
    "duration": "10分钟/等级(D)",
    "savingThrow": "意志过则不信(若互动)",
    "spellResist": "否",
    "desc": "改变你的外表，包括服装、武器和装备。你可以让自己看起来身高变化不超过1尺，体型改变不超过原来的一半。此法术不能改变你的声音或气味。该幻术是视觉性质的，不能经得起触碰检验。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "divine_favor",
    "nameEn": "Divine Favor",
    "nameZh": "神恩术",
    "level": 1,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟或直到使用",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在一次攻击检定或伤害检定中获得+1幸运加值每3施法者等级（最高+3）。你可以选择在法术持续期间的任意时刻使用这个加值。一旦使用，法术即终止。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "doom",
    "nameEn": "Doom",
    "nameZh": "丧志术",
    "level": 1,
    "school": "死灵系",
    "descriptor": "恐惧，影响心灵",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "一个活物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "让目标充满绝望和恐惧，进入战栗状态。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "endure",
    "nameEn": "Endure",
    "nameZh": "忍受术",
    "level": 1,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得+2耐力加值在所有强韧豁免上，以及+2偏斜加值AC（对抗恐惧效果）。",
    "source": "3R"
  },
  {
    "id": "endure_elements",
    "nameEn": "Endure Elements",
    "nameZh": "耐受元素",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "24小时",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者忍受极热或极寒（环境温度最高140°F或最低-40°F）而不受伤害。该法术让你的身体适应极端温度。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "druid": 1,
      "paladin": 1,
      "ranger": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "德鲁伊": 1,
      "圣武士": 1,
      "巡林客": 1
    }
  },
  {
    "id": "enlarge_person",
    "nameEn": "Enlarge Person",
    "nameZh": "人类变大",
    "level": 1,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个人类生物",
    "duration": "1分钟/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "目标体型增大一级（如中型→大型），获得+2体质（HP增加）、-2敏捷（AC-2）、近战武器伤害+2。",
    "material": "一小撮铁粉",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "entangle",
    "nameEn": "Entangle",
    "nameZh": "纠缠术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "1分钟/等级",
    "savingThrow": "反射过",
    "spellResist": "否",
    "desc": "区域内的植物迅速生长并纠缠所有生物。被纠缠的生物移动速度减半，且可能被困住。",
    "source": "3R",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "entropic_shield",
    "nameEn": "Entropic Shield",
    "nameZh": "熵光护盾",
    "level": 1,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "你周围出现混乱闪烁的力场。以你为目标的远程攻击有20%失手机率，类似隐蔽；并非以你为目标的远处效果不受影响。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "erase",
    "nameEn": "Erase",
    "nameZh": "抹消术",
    "level": 1,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个卷轴或两页文字",
    "duration": "立即",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你可以消除一个卷轴上的魔法文字或两页普通文字。对于魔法文字（如法术卷轴），你需要进行施法者等级检定（DC=15）来移除。普通文字会自动被消除。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "expeditious_retreat",
    "nameEn": "Expeditious Retreat",
    "nameZh": "加速术",
    "level": 1,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "你自己",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的基础陆地速度增加30尺。该法术不影响其他移动方式（如飞行、游泳等），但在追逐和逃跑时非常有用。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "faerie_fire",
    "nameEn": "Faerie Fire",
    "nameZh": "妖火",
    "level": 1,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "20尺爆发范围内的生物和物体",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "区域内的生物和物体被一层淡蓝色、绿色或紫罗兰色的光晕包围。被照亮的生物隐形和移位效果失效，且攻击者对其攻击检定获得+2加值。",
    "source": "PHB",
    "classLevels": {
      "druid": 1
    },
    "divine": {
      "德鲁伊": 1
    }
  },
  {
    "id": "feather_fall",
    "nameEn": "Feather Fall",
    "nameZh": "羽落术",
    "level": 1,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "见描述",
    "range": "近距",
    "target": "你以及最多每施法者等级一个盟友（都在范围内）",
    "duration": "1轮/等级",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者缓慢坠落（60尺/轮），不会受坠落伤害。施法时间为即时动作（反应施法）。法术持续1轮/等级。",
    "material": "一小撮鹅毛或一根羽毛",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "goodberry",
    "nameEn": "Goodberry",
    "nameZh": "神莓",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "最多2d4颗刚摘下的浆果",
    "duration": "1天/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你将2d4颗新鲜浆果变为魔法浆果。每颗神莓可以恢复1点生命值，并且在24小时内提供一天的食物营养。每人每天最多从神莓中恢复8点生命。",
    "source": "PHB",
    "classLevels": {
      "druid": 1
    },
    "divine": {
      "德鲁伊": 1
    }
  },
  {
    "id": "grease",
    "nameEn": "Grease",
    "nameZh": "油腻术",
    "level": 1,
    "school": "咒法系",
    "descriptor": "创造",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个物体或10尺方形区域",
    "duration": "1轮/级（可解消）",
    "savingThrow": "见说明",
    "spellResist": "不可",
    "desc": "在地面或物品上覆以滑腻油脂。区域内或进入区域的生物可能滑倒；被影响的持用物可能脱手，穿着被覆油脂的装备时脱逃相关检定获得环境加值。",
    "material": "一小块猪皮或黄油",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "hide_from_animals",
    "nameEn": "Hide from Animals",
    "nameZh": "动物无视",
    "level": 1,
    "school": "防护系",
    "components": "S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物（最多每环一个）",
    "duration": "10分钟/环",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "动物无法看到受术者。普通动物会完全忽略受术者，即使受术者靠近或触碰它们。拥有灵敏嗅觉的动物也不会通过气味追踪受术者。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "hide_from_undead",
    "nameEn": "Hide from Undead",
    "nameZh": "亡灵无视术",
    "level": 1,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "每级一个接触生物",
    "duration": "10分钟/级（可解消）",
    "savingThrow": "意志过则无效（无害）；见说明",
    "spellResist": "可",
    "desc": "不死生物无法以视觉、听觉、嗅觉或特殊感官发现受术者。非智能不死生物自动受影响；智能不死生物可豁免。受术者攻击、触碰不死生物或驱散/命令不死生物会结束效果。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "hideous_laughter",
    "nameEn": "Hideous Laughter",
    "nameZh": "狂笑术",
    "level": 1,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标若受影响，会倒地大笑并无法行动，但不视为无助。智力2或更低的生物不受影响；与施法者生物类型不同的目标豁免有+4加值。",
    "material": "一块小甜点和一根羽毛",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 2
    }
  },
  {
    "id": "hold_portal",
    "nameEn": "Hold Portal",
    "nameZh": "封存门户",
    "level": 1,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "One portal, up to 20 sq. ft./level",
    "duration": "1 min./level",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "这个法术将一道门、窗或其他开口封住。任何生物要想打开被封住的门户必须通过一次力量检定（DC = 该法术的豁免DC）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "hypnotism",
    "nameEn": "Hypnotism",
    "nameZh": "催眠术",
    "level": 1,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "2d4HD的生物，彼此之间不超过30尺",
    "duration": "2d4轮",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你的手势和低声吟唱让附近的生物进入催眠般的恍惚状态。受术者被迷魂，在法术持续期间无法行动。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "identify",
    "nameEn": "Identify",
    "nameZh": "鉴定术",
    "level": 1,
    "school": "预言系",
    "components": "V,S,M, F",
    "castingTime": "1小时",
    "range": "触碰",
    "target": "触碰的物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以鉴定一个魔法物品的全部属性和功能。你需要有一小时的安静时间来施展该法术。在施展过程中，你不能被打断。如果你被打断，材料成分被消耗但法术失败。你也可以通过法术仪式（持续8小时，需要100gp的宝石粉末）来鉴定多个物品。",
    "material": "一颗价值100gp的珍珠",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "inflict_light_wounds",
    "nameEn": "Inflict Light Wounds",
    "nameZh": "造成轻伤",
    "level": 1,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "你 touch a creature, inflicting 1d8 points of damage +1/level (max +5). If used on an undead, it heals 1d8 hit points +1/level.",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "invisibility_mundane",
    "nameEn": "Invisibility, Mundane",
    "nameZh": "凡物隐形",
    "level": 1,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物或物体（总重不超过100磅/等级）",
    "duration": "1分钟/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者变得完全不可见，如同施用隐形术。但只对普通视觉有效，无法隐藏魔法灵光或热辐射。",
    "material": "一小片丝绸",
    "source": "3R"
  },
  {
    "id": "jump",
    "nameEn": "Jump",
    "nameZh": "跳跃术",
    "level": 1,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者跳跃距离翻倍（长按跳跃距离×3）。受术者在跳跃检定上获得+10加值。",
    "material": "蚱蜢腿",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "longstrider",
    "nameEn": "Longstrider",
    "nameZh": "长步术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1小时/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者的地面移动速度增加10英尺。",
    "source": "3R",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "mage_armor",
    "nameEn": "Mage Armor",
    "nameZh": "法师护甲",
    "level": 1,
    "school": "防护系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "否",
    "desc": "受术者获得+4护甲加值（无敏捷上限，无防具训练需求）。如果受术者已有护甲，则取较高者。法师护甲和护甲术不叠加。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "magic_aura",
    "nameEn": "Magic Aura",
    "nameZh": "魔法灵光",
    "level": 1,
    "school": "幻术系",
    "components": "V, S, F",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "One creature or object touched",
    "duration": "1 min./level",
    "savingThrow": "None (see text)",
    "spellResist": "No",
    "desc": "你在目标身上或内部（最多一件持握物）创造一个魔法灵光。你可以指定这个灵光是变化、咒法、预言、塑能、召唤、防护、死灵或幻术系法术的灵光。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "magic_fang",
    "nameEn": "Magic Fang",
    "nameZh": "魔牙术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的活物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者的一个天生武器（如爪击、啮咬等）变为魔法武器，在攻击检定和伤害检定上获得+1增强加值。该法术对人造武器无效。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "magic_missile",
    "nameEn": "Magic Missile",
    "nameZh": "魔法飞弹",
    "level": 1,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "最多数发飞弹，每发一个目标",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你发射出光弹攻击目标。你发射1发飞弹+每额外2施法者等级增加1发（最高5发）。每发飞弹造成1d4+1点伤害。飞弹会自动命中目标（不需要攻击检定）。如果受术者有护盾术或其他力场防护，飞弹需要先穿透防护。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "magic_mouth",
    "nameEn": "Magic Mouth",
    "nameZh": "魔嘴",
    "level": 1,
    "school": "幻术系",
    "descriptor": "五官幻觉",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个生物或物体",
    "duration": "永久，直到触发",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "可（物品）",
    "desc": "在目标上设置一张会说话的魔法嘴。满足施法时指定的视觉或听觉条件后，它会出现并传达预设讯息；它不能施法、发出魔法命令或启动魔法物品。",
    "material": "蜂窝小片和价值10金币的翡翠粉",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 2
    }
  },
  {
    "id": "magic_stone",
    "nameEn": "Magic Stone",
    "nameZh": "魔石术",
    "level": 1,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "最多3颗接触的小石头",
    "duration": "30分钟或直至耗尽",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你使最多3颗小石头获得魔法。这些石头可以作为投石索弹药使用，获得+1增强加值攻击和伤害（1d6+1伤害），也可以用手投掷（远程接触攻击，射程20尺，1d6+1伤害）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "druid": 1
    },
    "divine": {
      "牧师": 1,
      "德鲁伊": 1
    }
  },
  {
    "id": "mount_spell",
    "nameEn": "Mount",
    "nameZh": "召唤坐骑",
    "level": 1,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一只坐骑（如马、狼等）",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤一只温和的坐骑为你服务。坐骑出现在你附近。你可以指定坐骑种类（马、驹、狼等）。",
    "material": "一小撮燕麦",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "obscure",
    "nameEn": "Obscure",
    "nameZh": "遮蔽术",
    "level": 1,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一片模糊的雾气，遮挡视线。在雾气中的生物获得隐蔽加值。",
    "source": "3R"
  },
  {
    "id": "obscure_object",
    "nameEn": "Obscure Object",
    "nameZh": "遮蔽物品",
    "level": 1,
    "school": "防护系",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触的一件物品，重量至多100磅/级",
    "duration": "8小时（可解消）",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "可（物品）",
    "desc": "让目标物品避开预言系探知。直接定位该物品的探知尝试会失败；针对附近地点、人物或其他物品的探知也不会显示该物品。",
    "material": "一块变色龙皮",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "obscuring_mist",
    "nameEn": "Obscuring Mist",
    "nameZh": "云雾术",
    "level": 1,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "20尺半径扩散，20尺高",
    "duration": "1分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一团乳白色的迷雾笼罩区域。雾中所有生物获得半隐蔽（20%失手率）。超出5尺距离的生物获得全隐蔽（50%失手率且无法精确定位）。强风（11mph以上）在4轮内驱散雾气，烈风（21mph以上）在1轮内驱散。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "druid": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "德鲁伊": 1
    }
  },
  {
    "id": "pass_without_trace",
    "nameEn": "Pass without Trace",
    "nameZh": "无踪术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物（最多每环一个）",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者不会留下足迹或其他痕迹，无法被追踪。生存技能检定来追踪受术者的DC增加20。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "produce_flame",
    "nameEn": "Produce Flame",
    "nameZh": "燃火术",
    "level": 1,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你",
    "duration": "1分钟/等级或直至耗尽",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你手掌上产生一团火焰，照亮周围。你可以将火焰投掷出去进行远程接触攻击（射程120尺），命中造成1d6+每施法者等级1点火焰伤害（最多+5）。每次投掷消耗一团火焰，直到所有火焰耗尽法术结束。",
    "source": "PHB",
    "classLevels": {
      "druid": 1
    },
    "divine": {
      "德鲁伊": 1
    }
  },
  {
    "id": "protection_from_alignment",
    "nameEn": "Protection from Alignment",
    "nameZh": "防护自阵营",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得对特定阵营生物的防御：+2偏转加值对抗该法术针对的阵营生物、无法被该法术针对的阵营生物处理为佳、该法术针对的阵营生物无法触碰或攻击受术者（需要通过施法者等级检定）。有五个版本：防护自混乱、防护自邪恶、防护自善良、防护自守序。",
    "source": "3R"
  },
  {
    "id": "protection_from_chaos",
    "nameEn": "Protection from Chaos",
    "nameZh": "防护混乱",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/等级(D)",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得：对混乱生物+2偏斜AC加值和+2抗力豁免加值；免疫混乱生物的精神控制；阻止混乱阵营的召唤生物靠近（需通过法术抗力检定）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "protection_from_evil",
    "nameEn": "Protection from Evil",
    "nameZh": "防护自邪恶",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得：+2偏斜AC对抗指定阵营生物；无法被该阵营生物自然恐吓；该阵营生物无法用触碰攻击命中你（需通过施法者等级检定）；受术者对精神影响的豁免+2对抗该阵营生物。有五个版本：防护自（混乱/邪恶/善良/守序/反制）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "protection_from_good",
    "nameEn": "Protection from Good",
    "nameZh": "防护善良",
    "descriptor": "邪恶",
    "level": 1,
    "school": "防护系",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触的一个生物",
    "duration": "1分钟/级（可解消）",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "不可；见说明",
    "source": "PHB",
    "desc": "如防护邪恶，但防护对象为善良生物的攻击和控制影响，并阻止善良召唤生物接触受术者。",
    "classLevels": {
      "cleric": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "protection_from_law",
    "nameEn": "Protection from Law",
    "nameZh": "防护守序",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/等级(D)",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得：对守序生物+2偏斜AC加值和+2抗力豁免加值；免疫守序生物的精神控制；阻止守序阵营的召唤生物靠近（需通过法术抗力检定）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "ray_of_enfeeblement",
    "nameEn": "Ray of Enfeeblement",
    "nameZh": "衰弱射线",
    "level": 1,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一道射线",
    "duration": "1小时/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "需要进行远程接触攻击。命中则目标受到-1d6力量惩罚（强韧过则无效）。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "remove_fear",
    "nameEn": "Remove Fear",
    "nameZh": "移除恐惧",
    "level": 1,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个生物，每4级再加一个；任意两目标相距不超过30尺",
    "duration": "10分钟；见说明",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "目标在对抗恐惧效果时获得+4士气加值。若目标已受恐惧影响，该效果在本法术持续期间被压制；本法术也可反制并解除造成恐慌的相关法术。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 1
    },
    "arcane": {
      "吟游诗人": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "sanctuary",
    "nameEn": "Sanctuary",
    "nameZh": "圣所术",
    "level": 1,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过",
    "spellResist": "否",
    "desc": "受术者被圣所保护。任何试图攻击受术者的生物必须通过意志检定，否则无法攻击。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "serendipity",
    "nameEn": "Serendipity",
    "nameZh": "机缘巧合",
    "level": 1,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "在法术持续时间内，每天一次，你可以重骰一次失败的攻击骰、豁免骰或技能检定。",
    "source": "3R"
  },
  {
    "id": "shield",
    "nameEn": "Shield",
    "nameZh": "护盾术",
    "level": 1,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你被一个隐形力场护盾包围，获得+4偏斜加值对抗远程攻击，+4偏斜加值对抗魔法飞弹。护盾术无法穿透护盾其他力场防护。护盾术和护甲术不叠加。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "shield_of_faith",
    "nameEn": "Shield of Faith",
    "nameZh": "信仰之盾",
    "level": 1,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得+2偏斜加值对抗近战攻击和远程攻击。在大型户外战斗中，偏转加值降为+1。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "shillelagh",
    "nameEn": "Shillelagh",
    "nameZh": "神棍术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的一根木棒或木棍",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你的一根橡木棒或木棍变为+1魔法武器（攻击和伤害获得+1增强加值），并且在伤害骰上视为比实际体型大一级的武器。",
    "source": "PHB",
    "classLevels": {
      "druid": 1
    },
    "divine": {
      "德鲁伊": 1
    }
  },
  {
    "id": "shocking_grasp",
    "nameEn": "Shocking Grasp",
    "nameZh": "电击爪",
    "level": 1,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一道近战接触攻击",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "需要进行近战接触攻击。命中则造成1d6点电击伤害+每施法者等级1点（最高+5）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "silent_image",
    "nameEn": "Silent Image",
    "nameZh": "无声幻影",
    "level": 1,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "一个幻象（5立方尺/环）",
    "duration": "专注",
    "savingThrow": "意志过则识破",
    "spellResist": "否",
    "desc": "创造一个无声音的五官幻象。幻象可以移动（以一个标准动作）。观察者需要意志检定来识破。",
    "material": "一小块羊毛",
    "source": "3R",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "sleep",
    "nameEn": "Sleep",
    "nameZh": "睡眠术",
    "level": 1,
    "school": "惑控系",
    "components": "V,S,M",
    "castingTime": "1整轮",
    "range": "中距 (100尺+10尺/环)",
    "target": "最多4HD的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你使目标入睡。目标HD总值最多4HD。受影响生物陷入昏迷（通过意志检定则不受影响）。昏迷的生物受到任何伤害或受到强力摇晃会醒来。睡眠术对不死生物、构装生物和已昏迷的生物无效。",
    "material": "一把细沙、一朵雏菊或一块生肉",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "speak_with_animals",
    "nameEn": "Speak with Animals",
    "nameZh": "动物交谈",
    "level": 1,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以与动物进行有限的交谈。动物对你的态度如同对待一个聪明的同类。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "druid": 1,
      "ranger": 1
    },
    "arcane": {
      "吟游诗人": 3
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "stone_fist",
    "nameEn": "Stone Fist",
    "nameZh": "石拳",
    "level": 1,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的拳头变得如石头般坚硬。你的徒手攻击造成1d6点钝击伤害，并忽略2点伤害减免。",
    "source": "3R"
  },
  {
    "id": "summon_monster_1",
    "nameEn": "Summon Monster I",
    "nameZh": "召唤怪物Ⅰ",
    "level": 1,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个生物为你作战。你可以召唤以下生物之一：1个豺狼人、1个地精、1个猪头怪、1个变异蝙蝠、1个火焰张三、或其他CR1或更低的生物。生物出现后会攻击你的敌人。如果你在法术持续期间失去意识或死亡，召唤物消失。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "cleric": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1
    }
  },
  {
    "id": "summon_natures_ally_i",
    "nameEn": "Summon Nature's Ally I",
    "nameZh": "召唤自然盟友I",
    "level": 1,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个自然生物来为你战斗。可以召唤1个1级自然生物（如鹰、犬、蛇等）。召唤的生物出现在你指定的位置并立即行动。",
    "source": "PHB",
    "classLevels": {
      "druid": 1,
      "ranger": 1
    },
    "divine": {
      "德鲁伊": 1,
      "巡林客": 1
    }
  },
  {
    "id": "true_strike",
    "nameEn": "True Strike",
    "nameZh": "克敌机先",
    "level": 1,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的下一次攻击检定获得+20洞察加值。加值在你攻击后或轮末消失。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "unseen_servant",
    "nameEn": "Unseen Servant",
    "nameZh": "隐形仆役",
    "level": 1,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个无形侍者",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "创造一个无形的、漂浮的力场侍者。侍者可以执行简单的体力任务（搬运、开门、清洁等），但无法攻击或施法。侍者力量10，移动速度15尺。",
    "material": "一根线和一块木屑",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "ventriloquism",
    "nameEn": "Ventriloquism",
    "nameZh": "腹语术",
    "level": 1,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1分钟/环",
    "savingThrow": "意志过则识破（如有互动）",
    "spellResist": "否",
    "desc": "你可以让自己的声音似乎从施法距离内的任何位置发出。你可以用任何你会说的语言说话，声音听起来像是从你选定的位置传来的。",
    "source": "PHB",
    "classLevels": {
      "bard": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "吟游诗人": 1,
      "术士/法师": 1
    }
  },
  {
    "id": "acid_arrow",
    "nameEn": "Acid Arrow",
    "nameZh": "酸液箭",
    "level": 2,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一道射线",
    "duration": "1轮/3等级",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你发射一道强酸射线。需要进行远程接触攻击。命中则造成2d4点强酸伤害立即，之后每轮造成2d4点伤害直到法术结束或通过强韧检定解除。",
    "material": "一小瓶强酸",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "aid",
    "nameEn": "Aid",
    "nameZh": "援助术",
    "level": 2,
    "school": "惑控系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者获得：+1士气加值攻击和豁免，+1d8临时HP（每等级1d8，最大+10d8）。该临时HP在法术结束后消失。",
    "source": "3R",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "align_weapon",
    "nameEn": "Align Weapon",
    "nameZh": "阵营武器",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "接触",
    "target": "一件武器",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将一件武器转化为特定阵营（守序、混乱、善良、邪恶）。该武器对具有相反阵营的生物造成额外伤害（如同魔法武器）。",
    "source": "3R",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "alter_self",
    "nameEn": "Alter Self",
    "nameZh": "变化自我",
    "level": 2,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你变化为自己的体型同类生物（如人类变人类，精灵变精灵）。你获得新形态的基本物理属性（性别、年龄、种族特征），但保留自己的属性值、技能、豁免等。无法获得特殊攻击或能力。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "animal_messenger",
    "nameEn": "Animal Messenger",
    "nameZh": "动物信使",
    "level": 2,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个微型动物",
    "duration": "1天/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你迫使一个微型动物前往你指定的地点，并携带一个简短的书面信息。动物会尽力完成任务并在法术结束前返回。",
    "material": "一小块食物",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "druid": 2,
      "ranger": 1
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 1
    }
  },
  {
    "id": "animal_trance",
    "nameEn": "Animal Trance",
    "nameZh": "迷惑动物",
    "level": 2,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵，音波",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "动物，或智力1-2的魔法兽",
    "duration": "专注",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "以动作和音乐吸引动物或低智力魔法兽，使其只注视你而不采取其他行动。最多影响2d6 HD，通常先影响最近目标；训练用于攻击或守卫的动物、凶暴动物和魔法兽可豁免。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "druid": 2
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "arcane_lock",
    "nameEn": "Arcane Lock",
    "nameZh": "奥术锁",
    "level": 2,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个门、窗户或物品",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "目标被魔法锁住。需要DC30的开启检定或法术辨识DC（11+施法者等级）才能解除。敲击法术可以暂时解锁2d6轮。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "augury",
    "nameEn": "Augury",
    "nameZh": "卜筮",
    "level": 2,
    "school": "预言系",
    "components": "V, S, M, F",
    "castingTime": "1分钟",
    "range": "你自己",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你向更高力量询问关于某个特定行动的结果。结果可能是：吉兆（好结果）、凶兆（坏结果）、吉兆且凶兆（两者兼有）、或无（行动没有特别的后果）。成功率70%+1%/施法者等级。",
    "material": "熏香",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "barkskin",
    "nameEn": "Barkskin",
    "nameZh": "树肤术",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的活物",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "受术者的皮肤变得如树皮般坚韧，获得+2天生护甲加值（每3个施法者等级再+1，最高+5）。该加值与天生护甲叠加，但不与其他护甲加值叠加。",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "ranger": 2
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 2
    }
  },
  {
    "id": "bear_s_endurance",
    "nameEn": "Bear's Endurance",
    "nameZh": "熊之耐力",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的体质获得+4增强加值。体质提升会增加HP（每等级1点）。",
    "material": "一滴甘草汁",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "druid": 2,
      "ranger": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "巡林客": 2
    }
  },
  {
    "id": "blindness_deafness",
    "nameEn": "Blindness/Deafness",
    "nameZh": "目盲/耳聋",
    "level": 2,
    "school": "死灵系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你使目标目盲或耳聋（施法时选择）。通过强韧检定则不受影响。目盲的生物视觉为0，免疫视觉依赖的效果，AC失去偏斜加值（除非有盲区视觉）。耳聋的生物免疫听觉依赖的效果，施法时进行听觉成分需要DC10的强韧检定。移除目盲/耳聋可以解除该法术。",
    "source": "3R",
    "classLevels": {
      "bard": 2,
      "cleric": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "blur",
    "nameEn": "Blur",
    "nameZh": "模糊术",
    "level": 2,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的身体变得模糊不清，攻击者对你攻击时视为有隐蔽（20%失手几率）。真知术可以看穿模糊术。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "bull_s_strength",
    "nameEn": "Bull's Strength",
    "nameZh": "公牛之力",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的力量获得+4增强加值。力量提升会增加近战攻击和伤害。",
    "material": "一摄公牛毛",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "圣武士": 2
    }
  },
  {
    "id": "calm_emotions",
    "nameEn": "Calm Emotions",
    "nameZh": "安抚情绪",
    "level": 2,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "All creatures within a 20-ft.-radius burst",
    "duration": "Concentration, up to 1 round/level",
    "savingThrow": "Will negates",
    "spellResist": "Yes",
    "desc": "该法术平息受影响生物的情绪。受影响生物无法进行激烈的行动，如奔跑、冲锋、攻击或施展攻击性法术。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "cat_s_grace",
    "nameEn": "Cat's Grace",
    "nameZh": "猫之优雅",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的敏捷获得+4增强加值。敏捷提升会增加AC、反射豁免和远程攻击。",
    "material": "一摄猫毛",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "druid": 2,
      "ranger": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 2
    }
  },
  {
    "id": "chill_metal",
    "nameEn": "Chill Metal",
    "nameZh": "冻寒金属",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "每环一个生物穿戴的金属物品；或所有金属物品在30尺爆发范围内",
    "duration": "7轮",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "是（物品）",
    "desc": "金属物品迅速变冷，对穿戴或持有者造成伤害。第一轮使生物无法移动（除非放弃金属），第二轮造成1d4点寒冷伤害，第三轮造成2d4点，如此类推直到第七轮造成4d4点。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "consecrate",
    "nameEn": "Consecrate",
    "nameZh": "祝圣",
    "level": 2,
    "school": "塑能系",
    "components": "V, S, M (a vial of holy water and 25 gp worth of silver dust)",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "target": "One location (up to 20-ft. cube/level)",
    "duration": "2 hours/level",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你将一片区域祝圣给善良或邪恶阵营（由你选择）。祝圣区域内的邪恶或善良生物在攻击骰和伤害骰上承受-1惩罚。在祝圣区域内召唤或创造的不死生物获得+1生命值加值。",
    "material": "a vial of holy water and 25 gp worth of silver dust",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "cure_moderate_wounds",
    "nameEn": "Cure Moderate Wounds",
    "nameZh": "治疗中度伤",
    "level": 2,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的2d8点伤害+每施法者等级1点（最高+10）。对亡灵造成伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "druid": 3,
      "paladin": 3,
      "ranger": 3
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 3,
      "圣武士": 3,
      "巡林客": 3
    }
  },
  {
    "id": "darkness",
    "nameEn": "Darkness",
    "nameZh": "黑暗术",
    "level": 2,
    "school": "咒法系",
    "components": "V,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的物品（最多3立方尺）或生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效；见描述",
    "spellResist": "否",
    "desc": "目标物品或被生物携带的物品（或生物本身）周围20尺半径范围内充满魔法黑暗。黑暗术无法穿透亮度术或昼明术（互相抵消）。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "darkvision_spell",
    "nameEn": "Darkvision",
    "nameZh": "黑暗视觉",
    "level": 2,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得60尺黑暗视觉（可以看穿黑暗和魔法黑暗）。",
    "material": "一小块干鲨鱼肝",
    "source": "PHB",
    "classLevels": {
      "ranger": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "巡林客": 3
    }
  },
  {
    "id": "daze_monster",
    "nameEn": "Daze Monster",
    "nameZh": "怪物晕眩术",
    "level": 2,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "一个生命骰6或更低的活物",
    "duration": "1轮",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如晕眩术，但可影响任意类型的活物；生命骰7或更高的目标不受影响。",
    "material": "一小撮湿泥",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "death_knell",
    "nameEn": "Death Knell",
    "nameZh": "死亡丧钟",
    "level": 2,
    "school": "死灵系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个HD不超过3的生物",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如果目标死亡，你获得1d8点临时生命值，力量+1d4，法术抗力+1。如果目标未死亡，无效果。",
    "source": "3R",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "delay_poison",
    "nameEn": "Delay Poison",
    "nameZh": "延缓毒素",
    "level": 2,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1小时/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者对毒素免疫。中毒效果被延缓直到法术结束。法术结束后，中毒效果正常发作。该法术不会治愈已经生效的毒素伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 1
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "圣武士": 2,
      "巡林客": 1
    }
  },
  {
    "id": "desecrate",
    "nameEn": "Desecrate",
    "nameZh": "亵渎术",
    "level": 2,
    "school": "死灵系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "20尺半径扩散",
    "duration": "2小时/等级",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "此法术使一个区域充满邪恶力量。该区域内的不死生物在攻击、伤害和豁免上获得+1亵渎加值，每次HD检定也获得+1加值。该区域内创造的亡灵HP获得+1/HD的亵渎加值。区域内若有祭坛或神殿，效果翻倍（+2）。善良神殿被压制。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "detect_thoughts",
    "nameEn": "Detect Thoughts",
    "nameZh": "侦测思想",
    "level": 2,
    "school": "预言系",
    "components": "V, S, F",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "专注，最长1轮/等级",
    "savingThrow": "意志过",
    "spellResist": "否",
    "desc": "你可以侦测到生物的思想。你可以察觉到表面的情绪和想法。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "eagle_s_splendor",
    "nameEn": "Eagle's Splendor",
    "nameZh": "雄鹰之辉",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的魅力获得+4增强加值。魅力提升会增加交会技能和其他基于魅力的技能。",
    "material": "一摄雄鹰羽毛",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "paladin": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2,
      "圣武士": 2
    }
  },
  {
    "id": "enthrall",
    "nameEn": "Enthrall",
    "nameZh": "注目术",
    "level": 2,
    "school": "惑控系",
    "descriptor": "魅惑，基于语言，影响心灵，音波",
    "components": "V, S",
    "castingTime": "1轮",
    "range": "中距 (100尺+10尺/级)",
    "target": "任意数量的生物",
    "duration": "至多1小时",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "以演说或表演吸引听众，使失败者专注于你并暂时忽略周遭。敌意、明显冒犯或外部打断可能提前结束效果；部分较强或警觉目标仍能察觉环境变化。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "false_life",
    "nameEn": "False Life",
    "nameZh": "虚假生命",
    "level": 2,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得1d10点临时生命值（临时HP）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "find_traps",
    "nameEn": "Find Traps",
    "nameZh": "寻找陷阱",
    "level": 2,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "你自己",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得如同拥有搜索陷阱专长的能力来发现魔法陷阱。你可以在搜索检定中使用你的施法者等级代替搜索技能等级。该法术不会告诉你陷阱的具体类型，只会告知其存在和位置。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "find_vehicle",
    "nameEn": "Find Vehicle",
    "nameZh": "寻车术",
    "level": 2,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "1英里/等级",
    "target": "一辆合适的载具",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你找到一辆适合你需求的载具。载具会出现在你附近，并在法术持续时间内处于完美工作状态。",
    "source": "3R"
  },
  {
    "id": "flame_arrow",
    "nameEn": "Flame Arrow",
    "nameZh": "火箭术",
    "level": 2,
    "school": "塑能系",
    "components": "V, S, M (a drop of oil and a small piece of flint)",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Weapons or ammunition touched (up to 50 arrows or bolts)",
    "duration": "10 min./level",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你为箭矢或弩箭附魔火焰。被附魔的弹药在命中时造成额外的 1d6 点火系伤害。",
    "material": "a drop of oil and a small piece of flint",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "flame_blade",
    "nameEn": "Flame Blade",
    "nameZh": "火刃术",
    "level": 2,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "一把火焰弯刀",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你手中出现一把燃烧的弯刀形火焰。你可以用它进行近战接触攻击，造成1d8+每两个施法者等级1点火焰伤害（最高+10）。对不死生物造成额外伤害。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "flaming_sphere",
    "nameEn": "Flaming Sphere",
    "nameZh": "烈焰之球",
    "level": 2,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个5尺直径火焰球",
    "duration": "1分钟/环",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你创造一个浮空的火焰球。每轮你可以以一个标准动作将火球移动到30尺内一个新的位置。火球对10尺内的生物造成2d6点火焰伤害（反射过则减半）。你也可以让火球撞击一个生物（需要进行远程接触攻击），造成2d6点伤害。",
    "material": "一小块青苔和一小块兽脂",
    "source": "3R",
    "classLevels": {
      "druid": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "fox_s_cunning",
    "nameEn": "Fox's Cunning",
    "nameZh": "狐狸之智",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的智力获得+4增强加值。智力提升会增加技能点数和知识技能。",
    "material": "一摄狐狸毛",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "gentle_repose",
    "nameEn": "Gentle Repose",
    "nameZh": "遗体防腐",
    "level": 2,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一具尸体",
    "duration": "1天/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你保存一具尸体，防止其腐烂。这使得复活死者变得更加容易（不会因为死亡时间过长而受到惩罚）。法术还可以延缓尸体变成不死生物的过程。",
    "material": "一撮盐和一枚铜币",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "ghoul_touch",
    "nameEn": "Ghoul Touch",
    "nameZh": "食尸鬼之触",
    "level": 2,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个生物",
    "duration": "1d6+2轮",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "需要进行近战接触攻击。命中则目标瘫痪（强韧过则无效）。瘫痪生物每轮结束时可以做强韧检定以恢复。周围10尺内的生物（不包括你）如果看到该目标会感到恶心（恶心效果）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "glitterdust",
    "nameEn": "Glitterdust",
    "nameZh": "闪光尘",
    "level": 2,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "10尺散布",
    "duration": "1分钟/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "否",
    "desc": "你喷射出一片闪光尘埃。区域内的生物受到目盲（通过强韧检定则不受影响）。此外，区域内的所有隐形生物和物品会变得闪闪发光（无法隐形）。闪光尘会附着在生物上1分钟/环。",
    "material": "一撮金粉",
    "source": "3R",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "gust_of_wind",
    "nameEn": "Gust of Wind",
    "nameZh": "阵风",
    "level": 2,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "60英尺",
    "target": "锥形爆发",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一阵强烈的阵风，能够吹灭蜡烛、火把和露营篝火，并能够分散瓦斯、蒸汽和腐臭云。",
    "source": "3R",
    "classLevels": {
      "druid": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "heat_metal",
    "nameEn": "Heat Metal",
    "nameZh": "加热金属",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "target": "Metal equipment of one creature",
    "duration": "7 rounds",
    "savingThrow": "Fortitude negates (object)",
    "spellResist": "No",
    "desc": "该法术使目标的金属装备（如盔甲、盾牌、武器）变得灼热。穿着受热金属的生物每轮承受 2d6 点伤害。如果生物脱掉受热的金属装备，伤害停止。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "hold_animal",
    "nameEn": "Hold Animal",
    "nameZh": "动物定身术",
    "level": 2,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "一个动物",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效；见描述",
    "spellResist": "是",
    "desc": "目标动物被定身（如同人类定身术的效果）。被定身的动物无法移动、说话或进行任何动作，但每轮可以尝试一次新的豁免检定来解除效果。",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "ranger": 2
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 2
    }
  },
  {
    "id": "hypnotic_pattern",
    "nameEn": "Hypnotic Pattern",
    "nameZh": "催眠图纹",
    "level": 2,
    "school": "幻术系",
    "descriptor": "心灵幻觉，影响心灵",
    "components": "V, S, M；吟游诗人需言语成分",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "半径10尺内的图纹",
    "duration": "专注 + 2轮",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "生成不断变化的彩色图纹，使范围内若干生命骰的生物着迷。按生命骰从低到高、距离从近到远分配影响；目盲生物不受影响。",
    "material": "点燃的熏香或含磷光材料的小水晶棒",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "inflict_moderate_wounds",
    "nameEn": "Inflict Moderate Wounds",
    "nameZh": "造成中度伤",
    "level": 2,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同造成轻伤，但造成2d8点伤害+1/等级（最大+10）。",
    "source": "3R",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "invisibility",
    "nameEn": "Invisibility",
    "nameZh": "隐形术",
    "level": 2,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物或物品",
    "duration": "1分钟/环或直到发动攻击",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标变得完全隐形（无法被看见，但可以被听到、闻到等）。如果目标发动攻击，法术终止。真知术可以看穿隐形术。",
    "material": "一根睫毛粘在麦秆上",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "knock",
    "nameEn": "Knock",
    "nameZh": "开锁术",
    "level": 2,
    "school": "咒法系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个门、箱子或锁",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "自动打开一个被锁住或关上的门/箱子。可以解除奥术锁（需要进行施法者等级检定对抗DC）。也可以解除非魔法锁（如普通挂锁）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "levitate",
    "nameEn": "Levitate",
    "nameZh": "漂浮术",
    "level": 2,
    "school": "变化系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "你或最多每施法者等级100磅的物品",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你（或目标物品）缓慢上升或下降（最高20尺/轮）。你可以水平移动（伴随风力，最高20尺/轮）。如果你漂浮时受到攻击，你无法并行攻击。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "lions_charge",
    "nameEn": "Lion's Charge",
    "nameZh": "雄狮冲锋",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者在持续时间内可以在同一次移动动作中进行一次冲锋并施展一次猛力攻击，且不会受到攻击加值减值。",
    "source": "3R"
  },
  {
    "id": "locate_object",
    "nameEn": "Locate Object",
    "nameZh": "定位物品",
    "level": 2,
    "school": "预言系",
    "components": "V,S,F/DF",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "见描述",
    "duration": "1分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你感知指定物品的方向。你可以搜寻一个特定物品（必须曾经亲眼见过）或一类物品（如钥匙、金币等）。此法术被铅板或某些魔法效果所阻挡。你每轮可转向一个新的方向。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "logic_lapse",
    "nameEn": "Logic Lapse",
    "nameZh": "逻辑崩溃",
    "level": 2,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "目标生物的逻辑思维暂时崩溃，无法进行复杂推理。目标在法术持续时间内无法施展需要智力属性的法术。",
    "source": "3R"
  },
  {
    "id": "make_whole",
    "nameEn": "Make Whole",
    "nameZh": "修复术",
    "level": 2,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个物体，最大体积10立方英尺/环",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是（物品）",
    "desc": "你修复一个损坏的物体，恢复其原来的完整状态。可以修复断裂的剑、破碎的瓶子、撕裂的卷轴等。该法术可以修复被魔法破坏的物品（如果物品的施法者等级不超过你的等级）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "minor_image",
    "nameEn": "Minor Image",
    "nameZh": "小幅幻象",
    "level": 2,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距",
    "target": "一个幻象（5立方尺/环）",
    "duration": "专注",
    "savingThrow": "意志过则识破",
    "spellResist": "否",
    "desc": "创造一幅有声、有气味、有温度的幻象。观察者需要意志检定来识破。你可以使幻象移动（以一个标准动作）。小幅幻象不需要持续专注（但移动需要专注）。",
    "material": "一小块羊毛",
    "source": "3R",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "mirror_image",
    "nameEn": "Mirror Image",
    "nameZh": "镜影术",
    "level": 2,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出1d4个镜像（最低1个）。镜像和你完全相同，攻击者随机选择攻击目标（你或某个镜像）。如果镜像被「命中」，它消失。如果你受到区域效果攻击（如火焰球），每个镜像有50%几率代替你承受效果。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "misdirection",
    "nameEn": "Misdirection",
    "nameZh": "误导术",
    "level": 2,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Creature or object touched",
    "duration": "1 hour/level",
    "savingThrow": "Will negates",
    "spellResist": "Yes",
    "desc": "目标获得误导保护。任何试图侦测、定位或接触目标的生物或法术，会被误导到另一个生物或物体上。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "owl_s_wisdom",
    "nameEn": "Owl's Wisdom",
    "nameZh": "猫头鹰之智慧",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者的感知获得+4增强加值。感知提升会增加意志豁免和医疗技能。",
    "material": "一摄猫头鹰羽毛",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "圣武士": 2,
      "巡林客": 2
    }
  },
  {
    "id": "protection_from_arrows",
    "nameEn": "Protection from Arrows",
    "nameZh": "防箭护盾",
    "level": 2,
    "school": "防护系",
    "components": "V, S, M (a piece of parchment with a bit of down or feather)",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Creature touched",
    "duration": "1 hour/level",
    "savingThrow": "Will negates (harmless)",
    "spellResist": "No",
    "desc": "受术者对远程武器攻击（弓箭、弩箭、投掷武器等）获得伤害减免 10/挥砍、穿刺、钝击。该法术不防魔法远程攻击（如法术【魔法飞弹】）。",
    "material": "a piece of parchment with a bit of down or feather",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "pyrotechnics",
    "nameEn": "Pyrotechnics",
    "nameZh": "烟火术",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/级)",
    "target": "一个火源，最大20尺立方",
    "duration": "1d4+1轮，或见说明",
    "savingThrow": "意志或强韧过则无效；见说明",
    "spellResist": "可或不可；见说明",
    "desc": "将火源转为炫目焰火或浓密烟云。焰火可使可见范围内目标目盲；烟云阻挡视觉，并可能让其中生物力量和敏捷受减值。被用作目标的普通火源会熄灭。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "reduce_animal",
    "nameEn": "Reduce Animal",
    "nameZh": "动物缩小术",
    "level": 2,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个自愿的动物",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "目标动物的体型缩小一半（两个体型等级），力量获得-2体型罚值，敏捷获得+2体型加值。该法术对魔法生物或不愿意的动物无效。",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 3
    }
  },
  {
    "id": "remove_paralysis",
    "nameEn": "Remove Paralysis",
    "nameZh": "移除麻痹",
    "level": 2,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Will negates (harmless)",
    "spellResist": "Yes (harmless)",
    "desc": "触摸一个受影响于麻痹或类似效果（如法术【定身术】）的生物。该法术移除麻痹状态和任何类似的临时束缚效果。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "paladin": 2
    },
    "divine": {
      "牧师": 2,
      "圣武士": 2
    }
  },
  {
    "id": "resist_energy",
    "nameEn": "Resist Energy",
    "nameZh": "抵抗能量",
    "level": 2,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "10分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得对一种能量类型（强酸/寒冷/电击/火焰/音波）的抵抗力10点/环（最高30点）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "druid": 2,
      "paladin": 2,
      "ranger": 1,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "圣武士": 2,
      "巡林客": 1
    }
  },
  {
    "id": "rope_trick",
    "nameEn": "Rope Trick",
    "nameZh": "绳索戏法",
    "level": 2,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一条绳索（最高60尺）",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你使一条绳索竖立并向其顶端打开一个异次元入口。最多可以躲藏8个中型生物。入口从外面看不见。你可以拉绳索使入口关闭（之后再拉重新打开）。法术终止时，入口内的所有生物被弹出。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "scare",
    "nameEn": "Scare",
    "nameZh": "惊恐术",
    "level": 2,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "6HD或以下的生物，彼此之间不超过30尺",
    "duration": "1d6+6轮",
    "savingThrow": "意志过则部分生效",
    "spellResist": "是",
    "desc": "区域内的生物被恐惧笼罩并颤抖不止。失败的生物恐慌并逃跑，成功的生物只是颤抖（攻击检定-2）。HD超过6的生物不受影响。",
    "material": "一块骨头碎片",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "see_invisibility",
    "nameEn": "See Invisibility",
    "nameZh": "识破隐形",
    "level": 2,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以看穿隐形和移位术。可以看到60尺内的隐形生物（如同正常视觉）。识破隐形不会让你看穿幻术或黑暗。",
    "material": "一撮龙谭粉或许愿尘",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 2
    }
  },
  {
    "id": "shatter",
    "nameEn": "Shatter",
    "nameZh": "粉碎",
    "level": 2,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个石制或晶体制品",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "否",
    "desc": "你发出一声刺耳的尖啸，震碎石制或晶体制品。此法术可以对非魔法石制物品造成4d6点伤害。",
    "material": "一撮尘土",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "shield_other",
    "nameEn": "Shield Other",
    "nameZh": "保护他人",
    "level": 2,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1小时/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "你分担受术者受到的伤害。受术者受到的所有伤害减半，你受到另一半伤害。",
    "source": "3R",
    "classLevels": {
      "cleric": 2,
      "paladin": 2
    },
    "divine": {
      "牧师": 2,
      "圣武士": 2
    }
  },
  {
    "id": "silence",
    "nameEn": "Silence",
    "nameZh": "沉默术",
    "level": 2,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "target": "One creature or object",
    "duration": "1 min./level",
    "savingThrow": "Will negates (object)",
    "spellResist": "No",
    "desc": "该法术创造一个半径为 20 英尺的沉默区域。区域内所有生物无法发出声音，无法施展带有言语成分的法术。该法术可以移动（由你决定）。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "sound_burst",
    "nameEn": "Sound Burst",
    "nameZh": "音鸣爆",
    "level": 2,
    "school": "塑能系",
    "descriptor": "音波",
    "components": "V, S, F/DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "半径10尺扩散",
    "duration": "立即",
    "savingThrow": "强韧过则部分有效",
    "spellResist": "可",
    "desc": "以剧烈声响冲击区域内生物，造成1d8点音波伤害；强韧豁免失败者还会震慑1轮。没有听觉的生物不会被震慑，但仍会受伤害。",
    "focus": "一件乐器",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2
    },
    "arcane": {
      "吟游诗人": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "spectral_hand",
    "nameEn": "Spectral Hand",
    "nameZh": "幽灵之手",
    "level": 2,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一只幽灵手",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一只幽灵手。你可以通过这只手施展需要接触的法术（远程接触攻击，距离同法术射程）。幽灵手有50%失手几率（失手则法术浪费）。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "spider_climb",
    "nameEn": "Spider Climb",
    "nameZh": "蜘蛛攀爬",
    "level": 2,
    "school": "变化系",
    "components": "V, S, M (a live spider)",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Creature touched",
    "duration": "10 min./level",
    "savingThrow": "Will negates (harmless)",
    "spellResist": "Yes (harmless)",
    "desc": "受术者获得蜘蛛般的攀爬能力，可以在墙壁和天花板上自由移动，不会坠落。攀爬速度等于受术者的地面移动速度。",
    "material": "a live spider",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "spiritual_weapon",
    "nameEn": "Spiritual Weapon",
    "nameZh": "灵能武器",
    "level": 2,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一把魔法飞剑攻击敌人。飞剑使用你的基础攻击加值+魅力调整值进行攻击，造成1d8+魅力调整值点伤害。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "status",
    "nameEn": "Status",
    "nameZh": "状态术",
    "level": 2,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物（最多每环一个）",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "你可以感知受术者的当前状态，包括生命值、属性值、是否有负面状态效果等信息。无论距离多远，只要在同一个位面内，你都能持续获知受术者的状况。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "stone_call",
    "nameEn": "Stone Call",
    "nameZh": "石召",
    "level": 2,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "1轮/等级",
    "savingThrow": "反射过",
    "spellResist": "否",
    "desc": "你从地面召唤出尖锐的石柱。所有在区域内的生物受到2d6点穿刺伤害，速度减半。",
    "source": "3R"
  },
  {
    "id": "summon_monster_2",
    "nameEn": "Summon Monster II",
    "nameZh": "召唤怪物Ⅱ",
    "level": 2,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个CR2或更低的生物为你作战。常见选择：1个豺狼人队长、1个大地元素、1个中型土怪等。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "summon_natures_ally_ii",
    "nameEn": "Summon Nature's Ally II",
    "nameZh": "召唤自然盟友II",
    "level": 2,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤更强大的自然生物来为你战斗。可以召唤1个2级自然生物或1d3个1级自然生物。召唤列表包括熊、狼群等更强的生物。",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "ranger": 2
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 2
    }
  },
  {
    "id": "summon_swarm",
    "nameEn": "Summon Swarm",
    "nameZh": "召唤虫群",
    "level": 2,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个虫群",
    "duration": "专注+2轮",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一群蝙蝠、蜘蛛或老鼠。虫群出现后攻击区域内所有生物（无需攻击检定，自动造成伤害）。虫群会持续存在直到你停止专注再加2轮。",
    "material": "一块红色布片",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "druid": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "touch_of_idiocy",
    "nameEn": "Touch of Idiocy",
    "nameZh": "愚者之触",
    "level": 2,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的活物",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你触碰目标使其智力、感知和魅力各受1d6点伤害。这可能导致目标无法施展需要这些属性的法术，或使其变得愚蠢迟钝。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "tree_shape",
    "nameEn": "Tree Shape",
    "nameZh": "化树术",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你变成一棵活树的形状。你无法移动或攻击，但可以获得树的AC和生命值。",
    "source": "3R",
    "classLevels": {
      "druid": 2,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 2,
      "巡林客": 3
    }
  },
  {
    "id": "unholy_blade",
    "nameEn": "Unholy Blight",
    "nameZh": "邪暗之刃",
    "level": 2,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你创造一把邪恶的黑色利刃，对目标造成1d8点伤害（每2个施法者等级+1，最多+5）。此武器视为魔法武器和邪恶武器，对善良生物造成额外1d6点伤害。",
    "source": "PHB"
  },
  {
    "id": "warp_wood",
    "nameEn": "Warp Wood",
    "nameZh": "曲木术",
    "level": 2,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "最多每两个环一个木制物体",
    "duration": "立即",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "是（物品）",
    "desc": "你使木制物品弯曲变形。木门被弯曲卡住无法打开，木制武器变形导致攻击检定-4。小型或更小的物品每个算一个，中型物品算两个，大型物品算四个。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "web",
    "nameEn": "Web",
    "nameZh": "蛛网术",
    "level": 2,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "20尺散布",
    "duration": "1分钟/环",
    "savingThrow": "反射过则无效",
    "spellResist": "否",
    "desc": "你制造出浓密的蛛网。网内生物移动速度降为5尺。生物可以以一次DC20的脱逃检定或DC25的力量检定来挣脱。蛛网可以被火焰点燃（需要成功DC12的反射检定来点燃，燃烧4d6点火焰伤害）。",
    "material": "一小团蜘蛛丝",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "whispering_wind",
    "nameEn": "Whispering Wind",
    "nameZh": "低语之风",
    "level": 2,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "1 mile",
    "target": "One creature designated by you",
    "duration": "No more than 1 hour",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你召唤一阵低语之风，它可以找到指定的目标并传达一段简短的信息（最多25个字）。风的移动速度为每小时1英里。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 2
    }
  },
  {
    "id": "wood_shape",
    "nameEn": "Wood Shape",
    "nameZh": "塑木术",
    "level": 2,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的木制物体",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你可以将一件木制物品塑造成你想要的形状。你可以制作一扇木门、一把粗糙的木制家具或简单的木制工具。最大体积为10立方英尺/环。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "zone_of_truth",
    "nameEn": "Zone of Truth",
    "nameZh": "诚实之域",
    "level": 2,
    "school": "惑控系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "20尺半径爆发",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "区域内的生物无法故意说谎。受术者可以选择不回答或含糊回答，但不能说出明知是虚假的话。通过豁免检定的生物不受影响。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "paladin": 2
    },
    "divine": {
      "牧师": 2,
      "圣武士": 2
    }
  },
  {
    "id": "arcane_sight",
    "nameEn": "Arcane Sight",
    "nameZh": "奥术视觉",
    "level": 3,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "获得60尺黑暗视觉和奥术视觉。奥术视觉让你看到所有魔法灵光（如同侦测魔法），并可以辨识法术（需要施法者等级+1d20对抗DC15+法术等级）。",
    "material": "两块云石（价值50gp）",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "beast_shape_i",
    "nameEn": "Beast Shape I",
    "nameZh": "野兽形态I",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以将自己变成一只小型或中型动物的形状。你可以获得该动物的自然攻击和移动方式。",
    "source": "3R"
  },
  {
    "id": "blink",
    "nameEn": "Blink",
    "nameZh": "闪烁术",
    "level": 3,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "你自己（半径5尺）",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在物质位面和以太位面之间快速闪烁。每次攻击你时，攻击者有50%失手率。你自己攻击时也有20%失手率。你可以通过固体物体移动（每轮5尺）。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "bolts_of_bedevilment",
    "nameEn": "Bolts of Bedevilment",
    "nameZh": "折磨之箭",
    "level": 3,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "远距（400英尺+40英尺/等级）",
    "duration": "1轮/等级",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "你发射多道善良能量的射线。每道射线可以使一个邪恶生物困惑1轮。",
    "source": "3R"
  },
  {
    "id": "call_lightning",
    "nameEn": "Call Lightning",
    "nameZh": "召唤闪电",
    "level": 3,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "1 round",
    "range": "Long (400 ft. + 40 ft./level)",
    "target": "One or more 30-ft.-radius bursts",
    "duration": "1 min./level",
    "savingThrow": "Reflex half",
    "spellResist": "No",
    "desc": "你在指定区域召唤一道闪电风暴。每轮你可以在区域内召唤一道闪电，造成 3d6 点电系伤害。",
    "source": "PHB",
    "classLevels": {
      "druid": 3
    },
    "divine": {
      "德鲁伊": 3
    }
  },
  {
    "id": "caster_level",
    "nameEn": "Caster Level",
    "nameZh": "施法者等级",
    "level": 3,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的有效施法者等级提升+1d4+1（最高不超过你的HD）。对奥术和神术都有效。",
    "source": "3R"
  },
  {
    "id": "clairaudience_clairvoyance",
    "nameEn": "Clairaudience/Clairvoyance",
    "nameZh": "远聆/远视",
    "level": 3,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距",
    "target": "一个感官灵光（60尺散布）",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "创造一个隐形感官灵光（看到或听到）。你可以切换视觉/听觉。灵光有10HP，被攻击则消失。灵光可以被真知术看穿。",
    "material": "一撮云母",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "continual_flame",
    "nameEn": "Continual Flame",
    "nameZh": "恒久明焰",
    "level": 3,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的物体",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在物体上创造一个永久的魔法火焰。火焰散发普通火把的光芒，但不产生热、不消耗氧气、不会被水浇灭。",
    "material": "价值50金币的宝石",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "cure_serious_wounds",
    "nameEn": "Cure Serious Wounds",
    "nameZh": "治疗重伤",
    "level": 3,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的3d8点伤害+每施法者等级1点（最高+15）。对亡灵造成伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 3,
      "druid": 4,
      "paladin": 4
    },
    "arcane": {
      "吟游诗人": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 4,
      "圣武士": 4
    }
  },
  {
    "id": "daylight",
    "nameEn": "Daylight",
    "nameZh": "昼明术",
    "level": 3,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的物品（最多3立方尺）或生物",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "目标物品或被生物携带的物品（或生物本身）周围60尺半径范围内充满明亮光线（如同日光）。昼明术可以抵消黑暗术和深化黑暗术。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 3,
      "druid": 3,
      "paladin": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3,
      "圣武士": 3
    }
  },
  {
    "id": "deep_slumber",
    "nameEn": "Deep Slumber",
    "nameZh": "深眠术",
    "level": 3,
    "school": "惑控系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "最多10HD的生物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "如同睡眠术，但影响HD更高的生物（最多10HD总值）。受影响生物陷入昏迷。通过意志检定则不受影响。",
    "material": "一小撮沙子、一朵雏菊和一块生肉",
    "source": "3R",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "diminish_plants",
    "nameEn": "Diminish Plants",
    "nameZh": "植物凋零",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "见描述",
    "target": "100尺半径内或150尺半径内的植物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以使一个区域内的普通植物缩小到正常大小的三分之一，或者使更大区域内的植物枯萎。该法术对植物生物或使用植物形态的生物无效。",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 3
    }
  },
  {
    "id": "dispel_magic",
    "nameEn": "Dispel Magic",
    "nameZh": "解除魔法",
    "level": 3,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物、物品或法术效果",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你尝试解除一个生物、物品或区域上的法术效果。你需要进行一个施法者等级检定（d20+施法者等级）对抗DC11+施法者等级。如果你成功，该法术效果终止。你也可以在区域内尝试解除所有法术（成功几率独立计算）。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 3,
      "druid": 4,
      "paladin": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 4,
      "圣武士": 3
    }
  },
  {
    "id": "dispel_magic_divine",
    "nameEn": "Dispel Magic (Divine)",
    "nameZh": "解除魔法（神术）",
    "level": 3,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物、物品或法术效果",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "同奥术版解除魔法。",
    "source": "3R"
  },
  {
    "id": "displacement",
    "nameEn": "Displacement",
    "nameZh": "移位术",
    "level": 3,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1轮/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标看起来像是位移了（攻击失手几率50%）。真知术可以看穿移位术。",
    "material": "一小片水晶",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "dominate_animal",
    "nameEn": "Dominate Animal",
    "nameZh": "控制动物",
    "level": 3,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个动物",
    "duration": "1轮/等级",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你可以控制一个动物的行动，通过精神链接与它建立心灵感应。你不需要控制它的感官，但可以通过它的眼睛看。动物会执行你命令的任何动作，即使超出它的正常能力（但不会自杀）。",
    "source": "PHB",
    "classLevels": {
      "druid": 3
    },
    "divine": {
      "德鲁伊": 3
    }
  },
  {
    "id": "esp",
    "nameEn": "ESP",
    "nameZh": "心灵感应",
    "level": 3,
    "school": "预言系",
    "components": "V, S, F",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "1分钟/等级",
    "savingThrow": "意志过",
    "spellResist": "否",
    "desc": "你可以读取生物表面的思想。你可以理解任何语言的思想。",
    "source": "3R"
  },
  {
    "id": "explosive_runes",
    "nameEn": "Explosive Runes",
    "nameZh": "爆裂符文",
    "level": 3,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个接触的表面",
    "duration": "1天/环 或 直到触发",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "在表面绘制爆裂符文。触发时造成1d6点火焰和强酸伤害每施法者等级（最高10d6）。触发条件由你设定（如「陌生人触碰」）。反射过则减半。",
    "material": "火药、硫磺和强酸（价值50gp）",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "fireball",
    "nameEn": "Fireball",
    "nameZh": "火球术",
    "level": 3,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "半径20尺散布",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你发射一颗豌豆大小的火球，并在指定位置爆炸。爆炸范围内所有生物受到1d6点火焰伤害每施法者等级（最高10d6）。火球可以点燃可燃物并熔化低熔点金属（铅、金、铜、银、青铜）。如果火球遇到障碍物，它可能提前爆炸。",
    "material": "一小团蝙蝠粪便和硫磺",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "fly",
    "nameEn": "Fly",
    "nameZh": "飞行术",
    "level": 3,
    "school": "变化系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得飞行速度60尺（良好机动性）。受术者可以进行冲刺和俯冲。如果法术终止时受术者在空中，他会缓慢坠落（见羽落术）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "gaseous_form",
    "nameEn": "Gaseous Form",
    "nameZh": "气化形体",
    "level": 3,
    "school": "变化系",
    "components": "S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你变成气体状态。你可以飞行（速度10尺，不良机动性），穿过裂缝和缝隙。你在气化状态下无法攻击或施法（除了一直持续的法术）。风吹可以移动你。",
    "material": "一小块纱布和一根稻草",
    "source": "3R",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "lesser_geas",
    "nameEn": "Geas, Lesser",
    "nameZh": "次级指使术",
    "level": 3,
    "school": "惑控系",
    "descriptor": "胁迫，基于语言，影响心灵",
    "components": "V",
    "castingTime": "1轮",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个生命骰7或更低、能理解你的活物",
    "duration": "1天/级，或直到完成（可解消）",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "给目标下达一项服务、禁令或行动要求。命令不能直接要求自杀或必然死亡；若目标长期违抗，会逐日承受属性减值，直到重新遵从一段时间或被特定强力法术解除。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    }
  },
  {
    "id": "glibness",
    "nameEn": "Glibness",
    "nameZh": "花言巧语",
    "level": 3,
    "school": "变化系",
    "components": "S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "10分钟/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "你的言辞变得异常圆滑。用于让他人相信你话语真实性的唬骗检定获得+30加值；侦测谎言或强迫吐真效果需要通过施法者等级检定才能识破或压制你的谎言。",
    "source": "PHB",
    "classLevels": {
      "bard": 3
    },
    "arcane": {
      "吟游诗人": 3
    }
  },
  {
    "id": "good_hope",
    "nameEn": "Good Hope",
    "nameZh": "强大希望",
    "level": 3,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "每级一个活物，任意两者相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者获得强烈鼓舞，在豁免、攻击、属性检定、技能检定和武器伤害上获得+2士气加值。本法术可反制并解除粉碎绝望。",
    "source": "PHB",
    "classLevels": {
      "bard": 3
    },
    "arcane": {
      "吟游诗人": 3
    }
  },
  {
    "id": "greater_magic_fang",
    "nameEn": "Greater Magic Fang",
    "nameZh": "高等魔牙术",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个活物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者的所有天生武器获得+1增强加值（每4个施法者等级再+1，最高+5）。或者，你可以让一个天生武器获得更高的加值（+1/每3个施法者等级，最高+5）。",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 3
    }
  },
  {
    "id": "halt_undead",
    "nameEn": "Halt Undead",
    "nameZh": "亡灵定身术",
    "level": 3,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "最多三个不死生物，彼此之间不超过30尺",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效（有智力的不死生物）",
    "spellResist": "是",
    "desc": "最多三个不死生物被定身。无智力的不死生物无法豁免，有智力的不死生物可以通过意志检定来抵抗。被定身的不死生物无法移动或行动。",
    "material": "一撮硫磺和大蒜粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "haste",
    "nameEn": "Haste",
    "nameZh": "加速术",
    "level": 3,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物以及每施法者等级一个盟友（所有目标都在范围内）",
    "duration": "1轮/级",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得速度增强：全力攻击时以最高基本攻击加值获得一次额外攻击，攻击检定+1、AC和反射豁免获得+1闪避加值，所有移动模式速度增加（最高为原速度两倍）。",
    "material": "一小撮切下的肉桂皮",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "heroism",
    "nameEn": "Heroism",
    "nameZh": "英雄术",
    "level": 3,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "10分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得+2士气加值对抗恐惧效果、+2士气加值所有攻击检定和技能检定。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 3
    }
  },
  {
    "id": "hold_person",
    "nameEn": "Hold Person",
    "nameZh": "定身人类",
    "level": 3,
    "school": "惑控系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个人形生物",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "目标被定身（无法行动，但可以进行豁免检定每轮）。目标生命值降到0以下则法术终止。如果目标受到30点以上伤害，法术终止。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 3
    },
    "divine": {
      "牧师": 2
    }
  },
  {
    "id": "illusory_script",
    "nameEn": "Illusory Script",
    "nameZh": "迷幻手稿",
    "level": 3,
    "school": "幻术系",
    "descriptor": "魅影幻觉，影响心灵",
    "components": "V, S, M",
    "castingTime": "至少1分钟；见说明",
    "range": "接触",
    "target": "一个重量不超过10磅、可书写的物品",
    "duration": "1天/级（可解消）",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "把文字伪装成只有指定读者能理解的神秘手稿。未被指定者试图阅读时可能触发预设暗示；若法术被解除，隐藏讯息也会消失。",
    "material": "价值至少50金币的铅基墨水",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "invisibility_sphere",
    "nameEn": "Invisibility Sphere",
    "nameZh": "隐形之球",
    "level": 3,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "10尺半径散布，以你为中心",
    "duration": "1分钟/环或直到发动攻击",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你和10尺内的所有盟友变得隐形。如果任何受术者发动攻击，只有该受术者失去隐形。真知术可以看穿。",
    "material": "一根睫毛粘在麦秆上",
    "source": "3R",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "keen_edge",
    "nameEn": "Keen Edge",
    "nameZh": "锋锐之锋",
    "level": 3,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一把挥击或射弹武器",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标武器获得「锋锐」特性（重击威胁范围翻倍）。如果是魔法武器，锋锐效果与之叠加。",
    "material": "两块磨刀石",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "lightning_bolt",
    "nameEn": "Lightning Bolt",
    "nameZh": "闪电箭",
    "level": 3,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "一道闪电（最长100尺+10尺/环）",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你发射一道闪电。闪电对路径上所有生物造成1d6点电击伤害每施法者等级（最高10d6）。如果你在室内或狭窄区域施放，闪电会反射（造成额外50%伤害）。通过反射检定则伤害减半。金属护甲不会给予对闪电的额外防护。",
    "material": "一小块琥珀、水晶或玻璃法器",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "mage_hand_mass",
    "nameEn": "Mage Hand, Mass",
    "nameZh": "法师之手（群体）",
    "level": 3,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "专注，最长1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如同法师之手，但你可以同时移动多个物体，总重量不超过10磅/等级。",
    "source": "3R"
  },
  {
    "id": "magic_circle_against_alignment",
    "nameEn": "Magic Circle against Alignment",
    "nameZh": "魔法圆环（阵营防护）",
    "level": 3,
    "school": "防护系",
    "components": "V,S,M/DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物 或 10尺散布",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "否",
    "desc": "以目标为中心创造10尺半径的魔法屏障。屏障内生物：对抗指定阵营的生物获得+2偏斜AC和+2抗性豁免；指定阵营的生物无法进入屏障（需通过施法者等级检定）。有五个版本。",
    "material": "半磅薰香（价值20gp）",
    "source": "3R"
  },
  {
    "id": "magic_circle_law",
    "nameEn": "Magic Circle against Chaos",
    "nameZh": "抗混乱法阵",
    "level": 3,
    "school": "防护系",
    "components": "V, S, M, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "duration": "1分钟/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "否",
    "desc": "创造一个对抗混乱生物的防护法阵。混乱生物无法进入法阵，法阵内的生物获得+2抗混乱豁免加值。",
    "material": "价值至少100金币的银质法器",
    "source": "3R",
    "classLevels": {
      "cleric": 3,
      "paladin": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "圣武士": 3
    }
  },
  {
    "id": "magic_circle_against_chaos",
    "nameEn": "Magic Circle against Chaos",
    "nameZh": "反混乱法阵",
    "level": 3,
    "school": "防护系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "10尺半径内的一个生物/10尺半径 emanation",
    "duration": "10分钟/等级",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术的功能如同防护混乱，但范围更大且持续时间更长。区域内所有生物获得防护混乱的好处。此外，此法术阻止混乱阵营的召唤生物进入区域（需通过法术抗力检定），并且可以用来困住一个非邪恶生物（反方向施法）。",
    "source": "PHB"
  },
  {
    "id": "magic_circle_against_evil",
    "nameEn": "Magic Circle against Evil",
    "nameZh": "反邪恶法阵",
    "level": 3,
    "school": "防护系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "10尺半径内的一个生物/10尺半径 emanation",
    "duration": "10分钟/等级",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术的功能如同防护自邪恶，但范围更大且持续时间更长。区域内所有生物获得防护自邪恶的好处。此外，此法术阻止邪恶阵营的召唤生物进入区域（需通过法术抗力检定），并且可以用来困住一个非邪恶生物（反方向施法）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "paladin": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "圣武士": 3
    }
  },
  {
    "id": "magic_circle_against_good",
    "nameEn": "Magic Circle against Good",
    "nameZh": "反善良法阵",
    "level": 3,
    "school": "防护系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "10尺半径内的一个生物/10尺半径 emanation",
    "duration": "10分钟/等级",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术的功能如同防护自善良，但范围更大且持续时间更长。区域内所有生物获得防护自善良的好处。此外，此法术阻止善良阵营的召唤生物进入区域（需通过法术抗力检定），并且可以用来困住一个非善良生物（反方向施法）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "magic_circle_against_law",
    "nameEn": "Magic Circle against Law",
    "nameZh": "反守序法阵",
    "level": 3,
    "school": "防护系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "10尺半径内的一个生物/10尺半径 emanation",
    "duration": "10分钟/等级",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术的功能如同防护守序，但范围更大且持续时间更长。区域内所有生物获得防护守序的好处。此外，此法术阻止守序阵营的召唤生物进入区域（需通过法术抗力检定），并且可以用来困住一个非守序生物（反方向施法）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "magic_vestment",
    "nameEn": "Magic Vestment",
    "nameZh": "魔法武备",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的护甲或盾牌",
    "duration": "1小时/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "你将护甲或盾牌赋予+1增强加值（每4等级+1，最大+5）。这可以叠加于现有增强加值。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "magic_weapon",
    "nameEn": "Magic Weapon",
    "nameZh": "魔法武器",
    "level": 3,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "每施法者等级一把武器（最多+5把）",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标武器获得+1增强加值。每3环额外+1加值（6环+2，9环+3）。魔法武器可以伤害伤害减免需要魔法武器的生物。",
    "source": "PHB",
    "classLevels": {
      "cleric": 1,
      "paladin": 1,
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    },
    "divine": {
      "牧师": 1,
      "圣武士": 1
    }
  },
  {
    "id": "major_image",
    "nameEn": "Major Image",
    "nameZh": "强效幻影",
    "level": 3,
    "school": "幻术系",
    "descriptor": "虚假幻觉",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/级)",
    "target": "视觉幻象，最大四个10尺立方 + 每级一个10尺立方",
    "duration": "专注 + 3轮",
    "savingThrow": "意志识破（若互动）",
    "spellResist": "不可",
    "desc": "如无声幻影，但幻象还可包含声音、气味和温度。维持专注时你可以在距离内移动幻象；若幻象被攻击且无法作出合理反应，它会消失。",
    "focus": "一小块羊毛",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "meld_into_stone",
    "nameEn": "Meld into Stone",
    "nameZh": "融入石头",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你融入一块石墙、地板或天花板的内部。你可以听到石外的声音，并在法术持续时间结束时重新出现。",
    "source": "3R",
    "classLevels": {
      "cleric": 3,
      "druid": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3
    }
  },
  {
    "id": "neutralize_poison",
    "nameEn": "Neutralize Poison",
    "nameZh": "中和毒性",
    "level": 3,
    "school": "咒法系",
    "descriptor": "医疗",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "一个生物，或至多1立方尺/级的物品",
    "duration": "10分钟/级",
    "savingThrow": "意志过则无效（无害，物品）",
    "spellResist": "可（无害，物品）",
    "desc": "中和目标身上的毒素，并在持续时间内让目标对毒免疫。它能结束毒素的持续影响，但不能恢复已经造成且不会自行恢复的伤害或效果。",
    "material": "一块木炭",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 4,
      "druid": 3,
      "paladin": 4,
      "ranger": 3
    },
    "arcane": {
      "吟游诗人": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 3,
      "圣武士": 4,
      "巡林客": 3
    }
  },
  {
    "id": "nondetection",
    "nameEn": "Nondetection",
    "nameZh": "反侦测",
    "level": 3,
    "school": "防护系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物或物品",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标不会被侦测魔法、法术侦测、定位物体等法术侦测到。施法者等级用于对抗侦测法术的施法者等级检定。",
    "source": "3R",
    "classLevels": {
      "ranger": 4,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "巡林客": 4
    }
  },
  {
    "id": "sacred_nondetection",
    "nameEn": "Nondetection (Divine)",
    "nameZh": "神圣反侦测",
    "level": 3,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物或物品",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "同奥术版反侦测，但为神术版。",
    "source": "3R"
  },
  {
    "id": "obscure_magic",
    "nameEn": "Obscure Magic",
    "nameZh": "遮蔽魔法",
    "level": 3,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个生物或物品",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标对抗侦测魔法的DC增加15。",
    "source": "3R"
  },
  {
    "id": "phantasmal_terror",
    "nameEn": "Phantasmal Terror",
    "nameZh": "幻象恐怖",
    "level": 3,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "创造一个目标最恐惧的事物的幻象。目标需要通过意志检定否则受到2d6点感知伤害，并陷入恐慌1d4轮。如果目标通过检定，则毫发无损。",
    "source": "3R"
  },
  {
    "id": "phantom_steed",
    "nameEn": "Phantom Steed",
    "nameZh": "魅影驹",
    "level": 3,
    "school": "咒法系",
    "descriptor": "创造",
    "components": "V, S",
    "castingTime": "10分钟",
    "range": "0尺",
    "target": "一匹半真实马形坐骑",
    "duration": "1小时/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造一匹只有你或指定骑手能骑乘的半真实坐骑。它不攻击，具有固定防御和生命值，速度随施法者等级提高，并在更高等级获得穿越泥沼、水面行走、短暂凌空和飞行等能力。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "plant_growth",
    "nameEn": "Plant Growth",
    "nameZh": "植物生长",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你加速植物的生长。被影响的植物生长得异常茂盛，使移动变得困难（视为困难地形）。",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 3
    }
  },
  {
    "id": "poison",
    "nameEn": "Poison",
    "nameZh": "毒击",
    "level": 3,
    "school": "死灵系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "瞬时",
    "savingThrow": "强韧过",
    "spellResist": "是",
    "desc": "你对接触到的生物造成毒性伤害。目标受到1d10点初始伤害和1d10点后续伤害。",
    "source": "3R",
    "classLevels": {
      "cleric": 4,
      "druid": 3
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 3
    }
  },
  {
    "id": "prayer",
    "nameEn": "Prayer",
    "nameZh": "祈祷术",
    "level": 3,
    "school": "惑控系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "40尺",
    "target": "你以及最多每施法者等级一个盟友（所有目标都在范围内）",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "受术者所有攻击检定、伤害检定、技能检定、豁免检定获得+1士气加值。敌人的对应检定受到-1士气罚值。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "paladin": 3
    },
    "divine": {
      "牧师": 3,
      "圣武士": 3
    }
  },
  {
    "id": "protection_from_energy",
    "nameEn": "Protection from Energy",
    "nameZh": "防护能量",
    "level": 3,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "10分钟/环或直到能量吸收总量达到12点/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得对一种能量类型（强酸/寒冷/电击/火焰/音波）的防护。受术者免疫该类型能量造成的伤害，直至吸收总量达到12点伤害每施法者等级（最高60点）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "ranger": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3,
      "巡林客": 2
    }
  },
  {
    "id": "quench",
    "nameEn": "Quench",
    "nameZh": "熄灭术",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "一个20立方英尺的区域",
    "duration": "立即",
    "savingThrow": "无或意志过则无效（物品）；见描述",
    "spellResist": "否或可（物品）；见描述",
    "desc": "你可以熄灭区域内所有非魔法火焰。对于魔法火焰（如火球术效果），你的施法者等级与魔法火焰的施法者等级对抗来决定是否熄灭。该法术也可以对付火元素（造成每施法者等级1d6点伤害，最高15d6）。",
    "source": "PHB",
    "classLevels": {
      "druid": 3
    },
    "divine": {
      "德鲁伊": 3
    }
  },
  {
    "id": "rage",
    "nameEn": "Rage",
    "nameZh": "狂暴术",
    "level": 3,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标进入狂暴状态：力量+4，体质+4，意志豁免-2，获得根据这些调整值的临时HP。狂暴持续时间内，目标不能执行精细操作（如解谜、开锁等）。",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 3
    }
  },
  {
    "id": "ray_of_exhaustion",
    "nameEn": "Ray of Exhaustion",
    "nameZh": "力竭射线",
    "level": 3,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "射线",
    "duration": "1分钟/环",
    "savingThrow": "强韧过则部分生效",
    "spellResist": "是",
    "desc": "你射出一道黑色射线使目标力竭。失败的生物变为力竭状态（速度和力量减半，-6属性惩罚）。通过豁免的生物只是疲乏。",
    "material": "一滴汗水",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "remove_blindness_deafness",
    "nameEn": "Remove Blindness/Deafness",
    "nameZh": "移除盲聋",
    "level": 3,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Creature touched",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude negates (harmless)",
    "spellResist": "Yes (harmless)",
    "desc": "该法术治愈目标的盲或聋状态。你可以选择治愈盲或聋，或者同时治愈两者。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "paladin": 3
    },
    "divine": {
      "牧师": 3,
      "圣武士": 3
    }
  },
  {
    "id": "remove_curse",
    "nameEn": "Remove Curse",
    "nameZh": "移除诅咒",
    "level": 3,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物或物体",
    "duration": "即时",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "移除目标上的诅咒。职业环级：吟游诗人3、牧师3、圣武士3、术士/法师4。该法术不会移除被诅咒盾牌、武器或护甲本身的诅咒，但通常允许持有者摆脱或丢弃它。",
    "material": "一块未切割的宝石",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 3,
      "paladin": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    },
    "divine": {
      "牧师": 3,
      "圣武士": 3
    }
  },
  {
    "id": "remove_disease",
    "nameEn": "Remove Disease",
    "nameZh": "移除疾病",
    "level": 3,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者身上的所有疾病。该法术可以中和所有已知的疾病，但不能防止受术者在未来再次感染。施法者等级检定决定是否能成功治愈每种疾病。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "ranger": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3,
      "巡林客": 3
    }
  },
  {
    "id": "sculpt_sound",
    "nameEn": "Sculpt Sound",
    "nameZh": "塑声术",
    "level": 3,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "每级一个生物或物品，任意两者相距不超过30尺",
    "duration": "1小时/级（可解消）",
    "savingThrow": "意志过则无效（物品）",
    "spellResist": "可（物品）",
    "desc": "改变、阻断或替换目标发出的声音。所有目标必须以同一种方式改变；变化确定后不能再调整。声音被显著改动的施法者不能施展含言语成分的法术。",
    "source": "PHB",
    "classLevels": {
      "bard": 3
    },
    "arcane": {
      "吟游诗人": 3
    }
  },
  {
    "id": "searing_light",
    "nameEn": "Searing Light",
    "nameZh": "灼热光辉",
    "level": 3,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一道射线",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你发射一道灼热的光射线。需要进行远程接触攻击。命中则造成1d8点伤害每施法者等级（最高15d8）。对不死生物和阴影生物造成最大伤害（1d8点每施法者等级，无上限）。对善良阵营的不死生物造成双倍伤害。",
    "source": "3R",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "secret_page",
    "nameEn": "Secret Page",
    "nameZh": "密页术",
    "level": 3,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "触碰",
    "target": "触碰的一页或一本书",
    "duration": "永久直到消耗",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以改变一页的内容，使其看起来像完全不同的文字。真正的信息只有施法者或施展真知术的人才能阅读。你也可以在页面上附加一个爆炸陷阱。",
    "material": "一小块粉笔和粉末",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "seonalight",
    "nameEn": "Seonalight",
    "nameZh": "间歇光线",
    "level": 3,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "扇状区域（锥底60尺，锥高60尺）",
    "duration": "1轮/等级",
    "savingThrow": "反射过则减半",
    "spellResist": "否",
    "desc": "你喷射出一道间歇光线。锥内所有生物受到1d8点伤害每施法者等级（最高10d8）。反射过则减半。可以在法术持续期间以一个标准动作再喷射一次。",
    "material": "一块向日葵花瓣",
    "source": "3R"
  },
  {
    "id": "sepia_snake_sigil",
    "nameEn": "Sepia Snake Sigil",
    "nameZh": "蛇纹法印",
    "level": 3,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "触碰",
    "target": "一本书或一卷卷轴",
    "duration": "永久或直到消耗；然后1d4天+1/环",
    "savingThrow": "反射过则无效",
    "spellResist": "否",
    "desc": "你在文字中隐藏一条发光的蛇形符文。阅读该文字的生物会被蛇形力量困住，进入停滞状态（类似时间停止）。通过豁免的生物则不受影响。被困住的生物不会衰老，也不需要食物和水。",
    "material": "500gp的琥珀粉末和蛇鳞",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "shrink_item",
    "nameEn": "Shrink Item",
    "nameZh": "缩物术",
    "level": 3,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个物体，最大2立方英尺/环",
    "duration": "1天/环；见描述",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你将一个物体缩小到原来尺寸的十二分之一（大约一个布料的大小）。被缩小的物体可以恢复原状（通过口令或丢到坚实表面上）。你也可以将缩小效果变为永久（通过施法者等级检定）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "slow",
    "nameEn": "Slow",
    "nameZh": "缓慢术",
    "level": 3,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "每级一个生物，任意两者相距不超过30尺",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "受术者行动迟缓，每轮只能进行一个标准动作或移动动作，不能进行整轮动作；同时攻击、AC和反射豁免-1，速度减半。本法术可反制并解除加速术。",
    "material": "一滴糖浆",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "snare",
    "nameEn": "Snare",
    "nameZh": "陷阱术",
    "level": 3,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "3轮",
    "range": "触碰",
    "target": "地面上的一个位置",
    "duration": "1天/环 或 直到触发",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "制造一个魔法绳索陷阱。触发时，目标的腿被绳索捆住（需要通过脱逃检定DC20或力量检定DC25才能挣脱）。触发者如果成功通过反射检定DC20则不受陷阱影响。",
    "material": "一根绳索（价值30gp）",
    "source": "3R",
    "classLevels": {
      "druid": 3,
      "ranger": 2
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 2
    }
  },
  {
    "id": "speak_with_plants",
    "nameEn": "Speak with Plants",
    "nameZh": "植物交谈",
    "level": 3,
    "school": "预言系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以和植物交谈（植物有智商0，但可以提供简单信息）。植物可以告诉你最近（1天/环）看到或听到的事情。",
    "source": "3R",
    "classLevels": {
      "bard": 4,
      "druid": 3,
      "ranger": 2
    },
    "arcane": {
      "吟游诗人": 4
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 2
    }
  },
  {
    "id": "spike_growth",
    "nameEn": "Spike Growth",
    "nameZh": "荆棘丛生",
    "level": 3,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "每环一个20尺平方",
    "duration": "1小时/环",
    "savingThrow": "反射过则部分生效",
    "spellResist": "是",
    "desc": "区域内的植物变为尖刺状，每移动5尺造成1d4点穿刺伤害。通过反射检定的生物只受到一半伤害。该法术需要区域内有植物才能生效。",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "ranger": 2
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 2
    }
  },
  {
    "id": "stone_shape",
    "nameEn": "Stone Shape",
    "nameZh": "化石为泥",
    "level": 3,
    "school": "变化系",
    "components": "V, S, M (soft clay)",
    "castingTime": "1 standard action",
    "range": "Touch",
    "target": "Stone object touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你改变接触到的石制物品的形状。你可以创造门口、窗户、通道或其他形状。最大体积为每施法者等级 5 立方英尺。",
    "material": "soft clay",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3
    }
  },
  {
    "id": "suggestion",
    "nameEn": "Suggestion",
    "nameZh": "暗示术",
    "level": 3,
    "school": "惑控系",
    "components": "V,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1小时/环或直到完成任务",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你向目标提出一个合理的建议（不超过1轮可以说完的句子）。目标会尝试完成你建议的行动（如果建议明显有害，目标可以获得新的豁免检定）。暗示术无法强迫目标执行明显有害的行动。",
    "material": "一小块蛇舌草和一块蜂窝",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 3
    }
  },
  {
    "id": "summon_monster_3_full",
    "nameEn": "Summon Monster III",
    "nameZh": "召唤怪物Ⅲ",
    "level": 3,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤一个CR3或更低的生物为你作战。常见选择：1个大地元素、1个中型火焰元素、1个电子版皮克精等。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "summon_natures_ally_iii",
    "nameEn": "Summon Nature's Ally III",
    "nameZh": "召唤自然盟友III",
    "level": 3,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤强大的自然生物来为你战斗。可以召唤1个3级自然生物、1d3个2级生物或1d4+1个1级生物。召唤列表包括大型动物和精类生物。",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 3,
      "巡林客": 3
    }
  },
  {
    "id": "tiny_hut",
    "nameEn": "Tiny Hut",
    "nameZh": "避难小屋",
    "level": 3,
    "school": "塑能系",
    "descriptor": "力场",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "20尺",
    "target": "以你为中心、半径20尺的半球形力场",
    "duration": "2小时/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造固定的半球形力场 shelter，最多容纳你和九个中型生物。内部可见外部，外部看不见内部；它调节温度、挡住普通恶劣天气，但武器和多数法术仍可穿过。",
    "material": "一颗小水晶珠",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 3
    }
  },
  {
    "id": "tongues",
    "nameEn": "Tongues",
    "nameZh": "巧言术",
    "level": 3,
    "school": "预言系",
    "components": "V,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标可以理解任何口头语言（不需要理解语言法术），并以任何语言回答（听者可以理解，不需要懂该语言）。巧言术影响读写和听说。",
    "material": "一小撮蜂蜜和一滴橄榄油",
    "source": "PHB",
    "classLevels": {
      "bard": 2,
      "cleric": 4,
      "sorcererWizard": 3
    },
    "arcane": {
      "吟游诗人": 2,
      "术士/法师": 3
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "water_breathing",
    "nameEn": "Water Breathing",
    "nameZh": "水下呼吸",
    "level": 3,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物（最多每施法者等级一个）",
    "duration": "2小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者可以在水下呼吸（如同在空气里一样）。如果法术终止时受术者在水下，他会开始溺水。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3
    }
  },
  {
    "id": "water_walk",
    "nameEn": "Water Walk",
    "nameZh": "水上行走",
    "level": 3,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "你以及最多每施法者等级一个盟友",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者可以在水面、酸液、熔岩上行走（如同在平地一样）。如果法术终止时受术者在水面上，则沉入水中（但不会受到伤害）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "ranger": 3
    },
    "divine": {
      "牧师": 3,
      "巡林客": 3
    }
  },
  {
    "id": "wind_wall",
    "nameEn": "Wind Wall",
    "nameZh": "风墙术",
    "level": 3,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一道风墙（最长10尺+10尺/环，高10尺）",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一道强劲的风墙。风墙可以偏转远程攻击（弓箭、弩箭等）和气体/呼吸法术（如云击、毒云）。风吹向你的选择方向（可以每轮以一个标准动作改变方向）。",
    "material": "一把扇子或风车玩具",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "ranger": 2,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3,
      "巡林客": 2
    }
  },
  {
    "id": "air_walk",
    "nameEn": "Air Walk",
    "nameZh": "空中行走",
    "level": 4,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "10分钟/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者可以在空中行走，如同在坚实的地面上行走一样。受术者可以爬升、下降或水平移动，速度与普通行走相同。",
    "source": "3R",
    "classLevels": {
      "cleric": 4,
      "druid": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 4
    }
  },
  {
    "id": "animate_dead",
    "nameEn": "Animate Dead",
    "nameZh": "操纵死尸",
    "level": 4,
    "school": "死灵系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "最多2HD/环的不死生物",
    "duration": "瞬间 或 1分钟/环（见描述）",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你使尸体或骸骨复活为僵尸或骷髅为你服务。你可以控制的不死生物HD总值最多2HD/环。牧师可以控制任意数量的不死生物（无HD上限）。通过魅惑不死生物法术可以增强控制。⚠️ 邪恶法术。",
    "material": "一撮骨灰（价值25gp）",
    "source": "3R",
    "classLevels": {
      "cleric": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "antiplant_shell",
    "nameEn": "Antiplant Shell",
    "nameZh": "防植物护罩",
    "level": 4,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "以你为中心、10尺半径发散",
    "duration": "10分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "一个看不见的屏障将你与所有植物生物和动画植物隔离。它们无法进入护罩区域，也不能对你进行近战攻击。如果你将护罩推向植物，植物会被推开。",
    "source": "PHB",
    "classLevels": {
      "druid": 4
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "antisigil",
    "nameEn": "Antisigil",
    "nameZh": "反印记",
    "level": 4,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1天/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一个反法术印记，使得追踪法术无法定位你。任何尝试定位你的法术或能力都会失败。",
    "source": "3R"
  },
  {
    "id": "arcane_eye",
    "nameEn": "Arcane Eye",
    "nameZh": "奥术之眼",
    "level": 4,
    "school": "预言系",
    "components": "V, S, M (a bit of bat fur)",
    "castingTime": "1 standard action",
    "range": "Unlimited",
    "target": "Magical eye",
    "duration": "1 min./level",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你创造一个无形的魔法眼睛，可以在任何地方悬浮。你通过眼睛看，可以飞行（速度 30 英尺）。眼睛不会被侦测。",
    "material": "a bit of bat fur",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "beast_shape_ii",
    "nameEn": "Beast Shape II",
    "nameZh": "野兽形态II",
    "level": 4,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以将自己变成一只小型、中型或大型动物的形状。你可以获得该动物的自然攻击、移动方式和特殊能力。",
    "source": "3R"
  },
  {
    "id": "blight",
    "nameEn": "Blight",
    "nameZh": "枯萎术",
    "level": 4,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的一个植物生物或一片植物区域",
    "duration": "立即",
    "savingThrow": "强韧过则减半；见描述",
    "spellResist": "是",
    "desc": "该法术使一个植物生物枯萎凋零，造成每施法者等级1d6点伤害（最高15d6）。对普通植物区域使用时，一片40平方英尺的植物被杀死并枯萎。",
    "source": "PHB",
    "classLevels": {
      "druid": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "chaos_hammer",
    "nameEn": "Chaos Hammer",
    "nameZh": "混乱之锤",
    "level": 4,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "瞬时",
    "savingThrow": "反射过半数伤害",
    "spellResist": "是",
    "desc": "你创造出一道混乱能量的冲击波，对守序生物造成伤害。守序生物还会被震懵1轮。",
    "source": "3R"
  },
  {
    "id": "charm_monster",
    "nameEn": "Charm Monster",
    "nameZh": "魅惑怪物",
    "level": 4,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1天/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "如同魅惑人类，但可影响任何生物（无HD限制，但HD越高成功几率越低）。受术者觉得你是他值得信赖的朋友。",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    }
  },
  {
    "id": "command_plants",
    "nameEn": "Command Plants",
    "nameZh": "命令植物",
    "level": 4,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "植物生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过",
    "spellResist": "否",
    "desc": "你命令植物生物为你作战或执行任务。植物生物会听从你的命令，只要命令不违背其本性。",
    "source": "3R",
    "classLevels": {
      "druid": 4,
      "ranger": 3
    },
    "divine": {
      "德鲁伊": 4,
      "巡林客": 3
    }
  },
  {
    "id": "confusion",
    "nameEn": "Confusion",
    "nameZh": "困惑术",
    "level": 4,
    "school": "惑控系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "所有在范围内的生物（最多2HD/环）",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "范围内所有生物陷入困惑（每轮随机行动：01-10=攻击最近生物；11-20=失手；21-50=全轮防御；51-70=正常行动；71-100=错误行动）。通过意志检定则不受影响。",
    "material": "三块胡桃壳",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    }
  },
  {
    "id": "contagion",
    "nameEn": "Contagion",
    "nameZh": "传染术",
    "level": 4,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要进行远程接触攻击。命中则目标感染一种疾病（你选择）：腐热症、失水症、倦怠症、震颠症或红热症。疾病通常在1d4天后发作。",
    "source": "3R",
    "classLevels": {
      "cleric": 3,
      "druid": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "牧师": 3,
      "德鲁伊": 3
    }
  },
  {
    "id": "control_water",
    "nameEn": "Control Water",
    "nameZh": "控制水流",
    "level": 4,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "长距（400英尺+40英尺/等级）",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以改变水体的水位或水流方向。你可以降低或提高水位，或改变水流速度。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "druid": 4,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 4
    }
  },
  {
    "id": "crushing_despair",
    "nameEn": "Crushing Despair",
    "nameZh": "粉碎绝望",
    "level": 4,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "最多一个生物/环",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你需要成功吹奏音管（需通过演奏检定）。受术者陷入绝望，攻击检定-2、伤害-2、所有技能-2。通过意志检定则不受影响。",
    "source": "PHB"
  },
  {
    "id": "cure_critical_wounds",
    "nameEn": "Cure Critical Wounds",
    "nameZh": "治疗危重伤",
    "level": 4,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的4d8点伤害+每施法者等级1点（最高+20）。对亡灵造成伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 4,
      "druid": 5
    },
    "arcane": {
      "吟游诗人": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 5
    }
  },
  {
    "id": "death_ward",
    "nameEn": "Death Ward",
    "nameZh": "死亡守护",
    "level": 4,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者免疫所有死亡效果（如即死法术、死亡之触、生命吸取等）和负能量效果（如造成中度伤害、造成重伤等）。对不死生物的生命吸取也免疫。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "druid": 5,
      "paladin": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 5,
      "圣武士": 4
    }
  },
  {
    "id": "detect_scrying",
    "nameEn": "Detect Scrying",
    "nameZh": "侦测探知",
    "level": 4,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "40尺",
    "target": "以你为中心、半径40尺弥漫",
    "duration": "24小时",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "当你或法术区域被探知效果观察时，你会得知。若魔法传感器位于范围内，你能察觉其位置；通过施法者等级对抗还可反向看到探知者影像并知晓方向和距离。",
    "material": "一小片镜子和微型黄铜助听器",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "dimension_door",
    "nameEn": "Dimension Door",
    "nameZh": "任意门",
    "level": 4,
    "school": "咒法系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "你自己或最多50磅/环的物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你瞬间传送到你视线内或已知位置的任何地点（最远800尺+80尺/环）。你不需要看到目的地（如果你知道精确坐标）。你传送到目的地后，可能出现在空中（坠落伤害适用）。任意门无法被法术抗力影响。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "dimension_anchor",
    "nameEn": "Dimensional Anchor",
    "nameZh": "维度锚",
    "level": 4,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "One creature or object",
    "duration": "1 min./level",
    "savingThrow": "None (see text)",
    "spellResist": "No",
    "desc": "防止目标使用传送法术或异界旅行法术离开当前位面。该法术可以阻止敌人逃跑，也可以防止友军意外传送离开。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "dismissal",
    "nameEn": "Dismissal",
    "nameZh": "驱逐术",
    "level": 4,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个异界生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你强制将一个异界生物遣送回其原位面。目标可以通过意志检定来抵抗。HD超过你施法者等级+5的生物可以自动抵抗。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "divination",
    "nameEn": "Divination",
    "nameZh": "占卜术",
    "level": 4,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你询问一个关于未来事件的问题（只能回答「是」「否」或「不确定」）。DM根据问题给出一个诚实的答案。每天只能用一次。",
    "material": "价值25gp的贡品（如香、酒、罕见药材）",
    "source": "PHB",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "divination_animal",
    "nameEn": "Divination (Animal)",
    "nameZh": "预言术（动物）",
    "level": 4,
    "school": "预言系",
    "components": "V, S, M, DF",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "自己",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "通过此方法术，你可以向你的神祇提出一个问题，并获得一个有限的正确答案。你的神祇通过微妙的预兆或梦境回答。",
    "material": "熏香和圣水",
    "source": "3R"
  },
  {
    "id": "divination_arcane",
    "nameEn": "Divination (Arcane)",
    "nameZh": "占卜术（奥术）",
    "level": 4,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你询问一个关于未来事件的问题（只能回答「是」「否」或「不确定」）。DM根据问题给出一个诚实的答案。每天只能用一次。",
    "material": "价值25gp的贡品（如香、酒、罕见药材）",
    "source": "3R"
  },
  {
    "id": "divine_power",
    "nameEn": "Divine Power",
    "nameZh": "神力术",
    "level": 4,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得+6力量调整值，基础攻击加值等于你的HD（可以使用附加攻击），且获得临时生命值等于2倍你的施法者等级。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "dominate_person",
    "nameEn": "Dominate Person",
    "nameZh": "支配人类",
    "level": 4,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个类人生物",
    "duration": "1天/等级",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "你完全控制目标类人生物的心智。你可以使其执行任何行动，但它每天可以进行一次新的豁免检定。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 5
    }
  },
  {
    "id": "enervation",
    "nameEn": "Enervation",
    "nameZh": "负能量射线",
    "level": 4,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一道射线",
    "duration": "1小时/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要进行远程接触攻击。命中则目标受到1d4个负等级。目标每轮结束时可以通过强韧检定以移除一个负等级。如果法术持续，负等级成为永久。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "fear",
    "nameEn": "Fear",
    "nameZh": "恐惧术",
    "level": 4,
    "school": "惑控系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "所有在范围内的生物",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "范围内所有生物陷入恐慌（通过意志检定则不受影响）。恐慌的生物会全速逃离你，持续1轮/环。",
    "material": "一块白羽毛（在一小块铅中）",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    }
  },
  {
    "id": "fire_shield",
    "nameEn": "Fire Shield",
    "nameZh": "火焰护盾",
    "level": 4,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你被一层魔法火焰包围。两种版本可选：温暖护盾（蓝色火焰，抵御寒冷攻击，寒冷伤害对你造成半数）或寒冷护盾（红色火焰，抵御火焰攻击，火焰伤害对你造成半数）。任何成功用近战攻击命中你的生物受到1d8点火焰/寒冷伤害。",
    "material": "一小块磷光或硫磺",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "freedom_of_movement",
    "nameEn": "Freedom of Movement",
    "nameZh": "行动自如",
    "level": 4,
    "school": "防护系",
    "components": "V, S, M, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者免疫以下效果：束缚（麻痹、石化、定身）、困难地形、重力效果。受术者可以忽略重力和在水中正常行动。",
    "material": "一小片羽毛",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 4,
      "druid": 4,
      "ranger": 4
    },
    "arcane": {
      "吟游诗人": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 4,
      "巡林客": 4
    }
  },
  {
    "id": "giant_strength",
    "nameEn": "Giant Strength",
    "nameZh": "巨人力量",
    "level": 4,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者获得+8增强加值力量（如同巨人）。该法术比公牛之力更强大。",
    "material": "一摄巨人头发",
    "source": "3R"
  },
  {
    "id": "giant_vermin",
    "nameEn": "Giant Vermin",
    "nameZh": "巨型害虫",
    "level": 4,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "最多三个害虫，彼此之间不超过30尺",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你将最多三个普通害虫变为巨型版本。巨型害虫会服从你的简单命令并为你战斗。如果害虫是普通体型，变为巨型后获得相应的属性提升。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "druid": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 4
    }
  },
  {
    "id": "greater_invisibility",
    "nameEn": "Greater Invisibility",
    "nameZh": "高等隐形",
    "level": 4,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "如同隐形术，但受术者发动攻击后依然保持隐形。真知术可以看穿。",
    "material": "一根睫毛粘在麦秆上",
    "source": "3R",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "hallucinatory_terrain",
    "nameEn": "Hallucinatory Terrain",
    "nameZh": "幻景",
    "level": 4,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "远距 (400尺+40尺/环)",
    "target": "30立方英尺/环（可变）",
    "duration": "2小时/环",
    "savingThrow": "意志过则识破（如有互动）",
    "spellResist": "否",
    "desc": "你使一片自然地形看起来、听起来、闻起来完全不同。一片草地可以看起来像沼泽，一片丘陵可以看起来像峡谷。该法术不能创造、隐藏或改变生物。",
    "material": "一块石头、一根树枝和一片绿色植物",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "holy_smite",
    "nameEn": "Holy Smite",
    "nameZh": "圣击",
    "level": 4,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "瞬时",
    "savingThrow": "反射过半数伤害",
    "spellResist": "是",
    "desc": "你创造出一道神圣能量的冲击波，对邪恶生物造成伤害。邪恶生物还会被震懵1轮。",
    "source": "3R"
  },
  {
    "id": "ice_storm",
    "nameEn": "Ice Storm",
    "nameZh": "冰风暴",
    "level": 4,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "半径20尺散布",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你制造出一阵冰雹和碎冰。区域内所有生物受到5d6点钝击伤害和寒冷伤害（反射过则减半）。此外，地面被冰覆盖，移动困难（移动速度减半，平衡检定DC10）。冰风暴可以熄灭火焰。",
    "material": "一小撮尘土和几滴水",
    "source": "3R",
    "classLevels": {
      "druid": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "identify_monster",
    "nameEn": "Identify Monster",
    "nameZh": "辨识怪物",
    "level": 4,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "中距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你辨识一个生物：知道其属性、技能、特殊能力和弱点。如果你在之后再次遇到同一生物，你可以重新辨识（不需要再施法）。",
    "source": "3R"
  },
  {
    "id": "imbue_with_spell_ability",
    "nameEn": "Imbue with Spell Ability",
    "nameZh": "赋予法术能力",
    "level": 4,
    "school": "死灵系",
    "components": "V, S, DF",
    "castingTime": "1轮",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "直到被施展或1天/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "你赋予受术者施展某些法术的能力。受术者可以施展你的一些神术，使用你的施法者等级。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "inflict_critical_wounds",
    "nameEn": "Inflict Critical Wounds",
    "nameZh": "造成严重伤",
    "level": 4,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同造成轻伤，但造成4d8点伤害+1/等级（最大+20）。",
    "source": "3R",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "planar_ally_lesser",
    "nameEn": "Lesser Planar Ally",
    "nameZh": "次级异界盟友",
    "level": 4,
    "school": "咒法系",
    "components": "V, S, XP",
    "castingTime": "10分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个6HD或更少的元素或异界生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你请求你信仰的神灵派遣一个低等异界生物来帮助你。你需要支付报酬（每HD100gp，或完成任务作为交换）。神灵会根据你的请求派遣适当的生物。消耗100XP。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "lesser_planar_binding",
    "nameEn": "Lesser Planar Binding",
    "nameZh": "次级异界束缚",
    "level": 4,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一个异界生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个异界生物并试图与它谈判（需要魅力检定对抗DC=10+HD+异界生物魅力调整值）。成功则生物为你服务（最多1天/环）。失败则生物返回原位。消耗1000XP可以强制生物服务。",
    "material": "价值500gp的贡品（依异界生物喜好）",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "locate_creature",
    "nameEn": "Locate Creature",
    "nameZh": "定位生物",
    "level": 4,
    "school": "预言系",
    "components": "V, S, M (a bit of fur from the type of creature you seek)",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "target": "One creature",
    "duration": "10 min./level",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "该法术让你知道指定生物的方向和距离。你必须知道你要找的生物的姓名或描述。该法术可以穿透大多数障碍物。",
    "material": "a bit of fur from the type of creature you seek",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "minor_creation",
    "nameEn": "Minor Creation",
    "nameZh": "次等造物术",
    "level": 4,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "1分钟",
    "range": "0尺",
    "target": "无生命的植物材料，最大1立方英尺/环",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你从无到有创造出非魔法的、无生命的植物材料物品。你可以制作绳索、木桥、简单的木制工具等。创造的物品在法术结束后消失。材料成分是一小片与创造物相同材质的物质。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "modify_memory",
    "nameEn": "Modify Memory",
    "nameZh": "修改记忆",
    "level": 4,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S",
    "castingTime": "1轮；见说明",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个活物",
    "duration": "永久",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "改变目标不超过5分钟的记忆，可抹除、补全、改写或植入一段经历。若目标豁免失败，你还需花费同等时间塑造记忆；中断或离开距离会使法术失败。",
    "source": "PHB",
    "classLevels": {
      "bard": 4
    },
    "arcane": {
      "吟游诗人": 4
    }
  },
  {
    "id": "order_wrath",
    "nameEn": "Order's Wrath",
    "nameZh": "秩序之怒",
    "level": 4,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "瞬时",
    "savingThrow": "反射过半数伤害",
    "spellResist": "是",
    "desc": "你创造出一道秩序能量的冲击波，对混乱生物造成伤害。混乱生物还会被震懵1轮。",
    "source": "PHB"
  },
  {
    "id": "phantasmal_killer",
    "nameEn": "Phantasmal Killer",
    "nameZh": "幻影杀手",
    "level": 4,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "One living creature",
    "duration": "Instantaneous",
    "savingThrow": "Fortitude partial (see text)",
    "spellResist": "Yes",
    "desc": "目标的潜意识最深处的恐惧被具现化。目标必须通过对抗检定，否则受到 3d6 点体质伤害（若通过检定则受到一半伤害）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "polymorph",
    "nameEn": "Polymorph",
    "nameZh": "变化术",
    "level": 4,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "你将目标变化为一个小动物（体型比原生物小）、同类生物或比原生物HD低的生物。目标获得新形态的物理属性（力量、敏捷、体质），但保留自己的智力、感知、魅力、生命值、技能、豁免加值、攻击加值、施法能力等。⚠️ 争议：变化术是否授予非凡能力存在规则冲突（详见冲突页）。PHB说「不授予超自然或法术能力」，但并未明确说非凡能力。",
    "material": "一小撮蒲公英种子",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "rainbow_pattern",
    "nameEn": "Rainbow Pattern",
    "nameZh": "虹彩图纹",
    "level": 4,
    "school": "幻术系",
    "descriptor": "心灵幻觉，影响心灵",
    "components": "V, S, M, F；吟游诗人需言语成分",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "20尺半径扩散内的彩色光",
    "duration": "专注 + 1轮/级（可解消）",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "创造移动的彩虹图纹，最多使24 HD的生物着迷。你可用自由动作移动图纹，受影响者会试图跟随；若图纹将其引入危险处，目标可再豁免一次。",
    "material": "一块磷",
    "focus": "一块水晶棱镜",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "reincarnate",
    "nameEn": "Reincarnate",
    "nameZh": "转生术",
    "level": 4,
    "school": "变化系",
    "components": "V, S, M, DF",
    "castingTime": "10分钟",
    "range": "触碰",
    "target": "一个已死的生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你为最近死去的生物创造一个全新的年轻身体。灵魂会进入新身体中。新身体的种族随机决定（通过d%骰）。死者必须在1周内死去才能被转生。",
    "material": "价值1000gp的稀有油和软膏",
    "source": "PHB",
    "classLevels": {
      "druid": 4
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "repel_vermin",
    "nameEn": "Repel Vermin",
    "nameZh": "驱赶害虫",
    "level": 4,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "以你为中心、10尺半径发散",
    "duration": "10分钟/环",
    "savingThrow": "无或意志过则无效；见描述",
    "spellResist": "是",
    "desc": "一个不可见的屏障将害虫挡在区域外。普通害虫无法进入护罩区域。HD为3或更少的害虫会被屏障弹开。HD超过3的害虫可以进入但受到2d6点伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 4,
      "druid": 4,
      "ranger": 3
    },
    "arcane": {
      "吟游诗人": 4
    },
    "divine": {
      "牧师": 4,
      "德鲁伊": 4,
      "巡林客": 3
    }
  },
  {
    "id": "rusting_grasp",
    "nameEn": "Rusting Grasp",
    "nameZh": "锈蚀爪",
    "level": 4,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个铁质金属物体或铁质金属生物",
    "duration": "见描述",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你的触碰可以使铁质金属生锈腐蚀。对一个物品使用时，物品的每英寸厚度需要一次近战接触攻击。对铁质生物使用时，每次触碰造成3d6+每施法者等级1点伤害（最高+15）。",
    "source": "PHB",
    "classLevels": {
      "druid": 4
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "secure_shelter",
    "nameEn": "Secure Shelter",
    "nameZh": "庇护所",
    "level": 4,
    "school": "咒法系",
    "descriptor": "创造",
    "components": "V, S, M, F",
    "castingTime": "10分钟",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一座20尺方形建筑",
    "duration": "2小时/级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造一座坚固的小屋，带门窗、壁炉和基本家具。建筑如石制房屋般坚固，门窗与烟囱有防护，并可包含警报术和隐形仆役的辅助效果。",
    "material": "石片、石灰、沙、水和木片；若需要隐形仆役则加入其成分",
    "focus": "若需要警报术，使用银线和小铃铛",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "shadow_conjuration",
    "nameEn": "Shadow Conjuration",
    "nameZh": "幽影咒法",
    "level": 4,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "可变",
    "target": "见描述",
    "duration": "可变",
    "savingThrow": "意志过则识破（如有互动）；可变；见描述",
    "spellResist": "是",
    "desc": "你利用来自暗影位面的暗影物质创造出3级或更低的咒法系法术的半真实版本。识破幻术的生物只受到20%的效果。该法术可以模拟多种咒法系法术。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "shout",
    "nameEn": "Shout",
    "nameZh": "咆哮术",
    "level": 4,
    "school": "塑能系",
    "descriptor": "音波",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "30尺",
    "target": "锥状爆发",
    "duration": "立即",
    "savingThrow": "强韧过则部分有效；反射过则物品无效",
    "spellResist": "可（物品）",
    "desc": "发出强烈音波，锥形区域内生物受到5d6点音波伤害并耳聋2d6轮；豁免成功则伤害减半且不耳聋。易碎或晶质目标受到更高的等级相关伤害。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    }
  },
  {
    "id": "soften_earth_and_stone",
    "nameEn": "Soften Earth and Stone",
    "nameZh": "软化泥石",
    "level": 4,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "10尺见方/等级",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "此法术将天然泥土和石头软化为可塑的黏土状物质。泥土变为泥沼（需要力量检定或逃脱术检定才能移动），石头变为柔软的黏土。魔法的、附魔的或加工过的石头不受影响。",
    "source": "PHB",
    "classLevels": {
      "druid": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "solid_fog",
    "nameEn": "Solid Fog",
    "nameZh": "重雾术",
    "level": 4,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "20尺立方/环的云",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一团浓密的雾气。区域内视线被完全遮蔽。与普通云雾不同，重雾非常浓稠，移动速度减半，近战攻击-2，远程攻击-2，且无法进行5尺快步。",
    "material": "一撮豌豆粉末和马蹄粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "spell_immunity",
    "nameEn": "Spell Immunity",
    "nameZh": "法术免疫",
    "level": 4,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者对特定法术免疫。你可以指定每4等级一个法术（最大5个），受术者对这些法术完全免疫。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "spike_stones",
    "nameEn": "Spike Stones",
    "nameZh": "刺石术",
    "level": 4,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "每等级一个20尺见方区域",
    "duration": "1小时/等级(D)",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "岩石地面、泥土、石地板等变形为尖锐的刺状突起。进入区域的生物受到1d8点穿刺伤害，并且速度减半。成功的反射豁免可以避免伤害，但速度减半效果持续到离开区域。",
    "source": "PHB",
    "classLevels": {
      "druid": 4
    },
    "divine": {
      "德鲁伊": 4
    }
  },
  {
    "id": "stoneskin",
    "nameEn": "Stoneskin",
    "nameZh": "石肤术",
    "level": 4,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物或物体",
    "duration": "10分钟/等级或直到被击穿",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者的皮肤变得像石头一样坚硬，获得伤害减免10/挥砍、穿刺或钝击。",
    "material": "值为50金币的钻石粉末",
    "source": "3R",
    "classLevels": {
      "druid": 5,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "summon_monster_4",
    "nameEn": "Summon Monster IV",
    "nameZh": "召唤怪物Ⅳ",
    "level": 4,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个CR4或更低的生物为你作战。常见选择：1个石巨人、1个大型土元素、1个大型水元素、1个仲裁者、1个死灵虫等。召唤物出现后会攻击你的敌人。如果你在法术持续期间失去意识或死亡，召唤物消失。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 4
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "summon_natures_ally_iv",
    "nameEn": "Summon Nature's Ally IV",
    "nameZh": "召唤自然盟友四",
    "level": 4,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/等级(D)",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "此法术召唤一个自然生物来为你作战。你可以从召唤自然盟友IV列表中选择一个生物。生物出现在你指定的位置并立即行动。你可以召唤：1个中型元素、1d3个小型元素、1个大型动物、1d3个中型动物等。",
    "source": "PHB",
    "classLevels": {
      "druid": 4,
      "ranger": 4
    },
    "divine": {
      "德鲁伊": 4,
      "巡林客": 4
    }
  },
  {
    "id": "tree_stride",
    "nameEn": "Tree Stride",
    "nameZh": "树木传送",
    "level": 4,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "你自己",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以进入一棵树并通过同一类型的其他树木出现。每次传送可以从一棵树到另一棵树，距离取决于树木类型。橡树、梣树等可以传送3000尺，其他树木传送距离更短。",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "ranger": 4
    },
    "divine": {
      "德鲁伊": 5,
      "巡林客": 4
    }
  },
  {
    "id": "iversal_poison",
    "nameEn": "Universal Poison",
    "nameZh": "全能毒素",
    "level": 4,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "需要近战接触攻击。命中则目标感染你选择的疾病或毒素。通过强韧检定则不受影响。",
    "source": "3R"
  },
  {
    "id": "wall_of_fire",
    "nameEn": "Wall of Fire",
    "nameZh": "火焰墙",
    "level": 4,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一道火焰墙（最长20尺+10尺/环，高20尺）",
    "duration": "专注",
    "savingThrow": "无或反射过则减半；见描述",
    "spellResist": "是",
    "desc": "你创造一道垂直或环形的火焰墙。任何生物穿过墙受到2d6点火焰伤害每施法者等级（最高20d6）。墙的一侧（你选择）喷射出火焰（60尺锥状），每轮自动对锥内生物造成伤害。",
    "material": "一小块磷光或硫磺",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "wall_of_ice",
    "nameEn": "Wall of Ice",
    "nameZh": "冰墙术",
    "level": 4,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "反射过则半数",
    "spellResist": "可",
    "desc": "你创造一道冰墙。墙的硬度0，HP每寸5点。穿过墙的生物受到5d6点寒冷伤害。墙可以被物理攻击摧毁（每10点伤害摧毁1尺立方）。",
    "material": "一小块冰或雪",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "zone_of_silence",
    "nameEn": "Zone of Silence",
    "nameZh": "沉默结界",
    "level": 4,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1轮",
    "range": "你自己",
    "target": "以你为中心、5尺半径发散",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你周围形成一个阻止声音传播的结界。区域内的声音无法传出，区域外的声音也无法传入。这使得区域内的交谈完全私密，同时也阻止了依赖声音的法术。",
    "source": "PHB",
    "classLevels": {
      "bard": 4
    },
    "arcane": {
      "吟游诗人": 4
    }
  },
  {
    "id": "animal_growth",
    "nameEn": "Animal Growth",
    "nameZh": "动物成长",
    "level": 5,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "最多一个动物/每两个环",
    "duration": "1分钟/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "受术动物的体型增大一倍（两个体型等级），力量获得+8体型加值，体质获得+4体型加值（因此HP增加），敏捷受-2体型罚值。天生护甲获得+2体型加值。",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "ranger": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "德鲁伊": 5,
      "巡林客": 4
    }
  },
  {
    "id": "atonement",
    "nameEn": "Atonement",
    "nameZh": "赎罪术",
    "level": 5,
    "school": "防护系",
    "components": "V, S, M, F, XP",
    "castingTime": "1小时",
    "range": "触碰",
    "target": "触碰的活物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "该法术移除一个生物因为违反道德准则而受到的惩罚（如失去神术）。如果违反是无意的，不需要XP代价；如果是故意的，需要消耗500XP。该法术还可以逆转阵营改变。",
    "material": "祈祷用的念珠",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 5
    }
  },
  {
    "id": "awaken",
    "nameEn": "Awaken",
    "nameZh": "唤醒术",
    "level": 5,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "24小时",
    "range": "触碰",
    "target": "一棵树木或一只动物",
    "duration": "永久",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你唤醒一棵树木或一只动物，赋予其智力（INT=3d6）。被唤醒的生物获得语言能力和+3d6临时生命值。动物获得2HD，树木获得4HD。被唤醒的生物对你的态度为「友善」。",
    "source": "3R",
    "classLevels": {
      "druid": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "baleful_polymorph",
    "nameEn": "Baleful Polymorph",
    "nameZh": "恶毒变化术",
    "level": 5,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你将目标变化为一头无害的小动物（如一只老鼠、一只青蛙等）。目标失去所有特殊能力、超自然能力和法术能力，获得新形态的物理属性（力量、敏捷、体质），保留自己的智力、感知、魅力。通过强韧检定则不受影响。",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "beast_shape_iii",
    "nameEn": "Beast Shape III",
    "nameZh": "野兽形态III",
    "level": 5,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以将自己变成一只小型、中型、大型或超大型动物的形状。你可以获得该动物的自然攻击、移动方式、特殊能力和属性调整。",
    "source": "3R"
  },
  {
    "id": "break_enchantment",
    "nameEn": "Break Enchantment",
    "nameZh": "破除结界",
    "level": 5,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1分钟",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "尝试解除目标身上的所有惑控系法术。你需要对每个法术进行一次施法者等级检定（d20+施法者等级对抗DC11+法术等级）。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "cleric": 5,
      "paladin": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 5
    },
    "divine": {
      "牧师": 5,
      "圣武士": 4
    }
  },
  {
    "id": "call_lightning_storm",
    "nameEn": "Call Lightning Storm",
    "nameZh": "高等召雷术",
    "level": 5,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "长距 (400尺+40尺/环)",
    "target": "见描述",
    "duration": "1分钟/环",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "如同召雷术，但你可以每轮召唤一道闪电，造成5d6点电击伤害（施法者等级最高15）。在户外风暴天气时伤害增加。",
    "source": "PHB",
    "classLevels": {
      "druid": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "chaos_bolt",
    "nameEn": "Chaos Bolt",
    "nameZh": "混乱箭",
    "level": 5,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "远距（400英尺+40英尺/等级）",
    "duration": "瞬时",
    "savingThrow": "反射过",
    "spellResist": "是",
    "desc": "你发射一道混乱能量的射线。射线对目标造成1d8点伤害/等级（最大15d8），并有50%几率造成额外的中毒、混乱或恐惧效果。",
    "source": "3R"
  },
  {
    "id": "cloudkill",
    "nameEn": "Cloudkill",
    "nameZh": "死云术",
    "level": 5,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "20尺散布，以你选定点为起始",
    "duration": "1分钟/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "否",
    "desc": "你制造出一片剧毒云雾。云雾四处漂移（每轮移动10尺，方向由你选择）。云雾内生物每轮需要通过强韧检定否则死亡（HD4或更少则立即死亡；HD5-8则受到1d6点体质伤害；HD9+则不受影响）。云雾可以被除风术或类似效果驱散。",
    "material": "一小团蝙蝠粪便和一小撮干蛤蟆",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "command_greater",
    "nameEn": "Command, Greater",
    "nameZh": "高等指令术",
    "level": 5,
    "school": "惑控系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "见下文",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同指令术，但你可以使用更长的指令短语（最多10个词），且持续时间更长。",
    "source": "3R",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "commune",
    "nameEn": "Commune",
    "nameZh": "通神术",
    "level": 5,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你与你的神祇直接交谈并获得答案。你可以问最多1个问题每施法者等级。神祇回答「是」「否」或「不知」。每天只能施展一次。",
    "material": "价值1000gp的焚香和贡品",
    "source": "3R",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "commune_with_nature",
    "nameEn": "Commune with Nature",
    "nameZh": "与自然交谈",
    "level": 5,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你与大自然交谈并获得答案。你可以问最多1个问题每施法者等级。自然回答「是」「否」或「不知」。每天只能施展一次。",
    "source": "3R",
    "classLevels": {
      "druid": 5,
      "ranger": 4
    },
    "divine": {
      "德鲁伊": 5,
      "巡林客": 4
    }
  },
  {
    "id": "contact_other_plane",
    "nameEn": "Contact Other Plane",
    "nameZh": "异界探知",
    "level": 5,
    "school": "预言系",
    "components": "V",
    "castingTime": "10分钟",
    "range": "你自己",
    "target": "你自己",
    "duration": "专注",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你向其他位面的强大存在提问（每两个施法者等级可以问一个问题）。回答可能是简短的谜语或一句话。你可以选择询问的位面（越远的位面回答越准确，但智力损伤风险越大）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "contact_outer_plane",
    "nameEn": "Contact Outer Plane",
    "nameZh": "接触外位面",
    "level": 5,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你接触一个外位面存在并询问问题。你可以问最多一个问题每2施法者等级。存在会诚实回答（但可能简短或含糊）。有风险：可能陷入恍惚（1d6轮）或获得疯狂（1d6点临时属性伤害）。",
    "source": "3R"
  },
  {
    "id": "control_winds",
    "nameEn": "Control Winds",
    "nameZh": "控制风向",
    "level": 5,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "1英里",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以改变风向和风速。你可以让风平静下来，或创造出高达飓风级别的风（风速可达110英里/小时）。",
    "source": "3R",
    "classLevels": {
      "druid": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "cure_light_wounds_mass",
    "nameEn": "Cure Light Wounds, Mass",
    "nameZh": "治疗轻伤（群体）",
    "level": 5,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个或对于目标",
    "duration": "瞬时",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "如同治疗轻伤，但你可以影响多个目标。每个目标治疗1d8点伤害+1/等级（最大+15）。",
    "source": "3R",
    "classLevels": {
      "bard": 5,
      "cleric": 5,
      "druid": 5
    },
    "arcane": {
      "吟游诗人": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 5
    }
  },
  {
    "id": "dispel_chaos",
    "nameEn": "Dispel Chaos",
    "nameZh": "解除混乱",
    "level": 5,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "你或一个触碰的生物",
    "duration": "1轮/等级或直至耗尽",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术产生蓝色光芒。它有两种功能：防御性——你获得对混乱法术和混乱生物的+4偏斜AC加值；进攻性——触碰一个被混乱法术影响的生物自动解除该效果，或触碰一个混乱阵营的召唤生物将其驱逐（需通过法术抗力）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "paladin": 4
    },
    "divine": {
      "牧师": 5,
      "圣武士": 4
    }
  },
  {
    "id": "dispel_evil",
    "nameEn": "Dispel Evil",
    "nameZh": "解除邪恶",
    "level": 5,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "你或一个触碰的生物",
    "duration": "1轮/等级或直至耗尽",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术产生白色光芒。它有两种功能：防御性——你获得对邪恶法术和邪恶生物的+4偏斜AC加值；进攻性——触碰一个被邪恶法术影响的生物自动解除该效果，或触碰一个邪恶阵营的召唤生物将其驱逐（需通过法术抗力）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "paladin": 4
    },
    "divine": {
      "牧师": 5,
      "圣武士": 4
    }
  },
  {
    "id": "dispel_good",
    "nameEn": "Dispel Good",
    "nameZh": "解除善良",
    "level": 5,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "你或一个触碰的生物",
    "duration": "1轮/等级或直至耗尽",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "此法术产生黑色光芒。它有两种功能：防御性——你获得对善良法术和善良生物的+4偏斜AC加值；进攻性——触碰一个被善良法术影响的生物自动解除该效果，或触碰一个善良阵营的召唤生物将其驱逐（需通过法术抗力）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "dispel_law",
    "nameEn": "Dispel Law",
    "nameZh": "解除守序",
    "level": 5,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "如同解除魔法，但专门用于解除守序生物施放的法术。对守序生物造成1d6点伤害每施法者等级（最高10d6）。",
    "source": "3R",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "dream",
    "nameEn": "Dream",
    "nameZh": "梦境术",
    "level": 5,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1分钟",
    "range": "无限制",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你向远方一个熟睡的生物传递信息或形象。你可以让目标做特定的梦境。如果目标通过意志检定，则不受影响。你也可以利用梦境术询问信息（目标可以回答）。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "justice_eye",
    "nameEn": "Eye of Justice",
    "nameZh": "正义之眼",
    "level": 5,
    "school": "预言系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得60尺黑暗视觉、看穿幻术和隐形、对邪恶生物发现弱点（+2攻击和伤害）。",
    "source": "3R"
  },
  {
    "id": "fabricate",
    "nameEn": "Fabricate",
    "nameZh": "制造术",
    "level": 5,
    "school": "变化系",
    "components": "V, S, M (the original material)",
    "castingTime": "1 standard action",
    "range": "Close (25 ft. + 5 ft./2 levels)",
    "target": "Object touched",
    "duration": "Instantaneous",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "你将原材料转化为成品。每施法者等级可以转化 1 磅的材料。该法术可以在1轮内制造物品。",
    "material": "the original material",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "false_vision",
    "nameEn": "False Vision",
    "nameZh": "错误视觉",
    "level": 5,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个地点或生物",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "在目标区域创造视觉假象。任何使用预言系法术侦测目标区域的人会看到假象（通过意志检定则看穿）。",
    "material": "价值100gp的玉石粉末",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "feeblemind",
    "nameEn": "Feeblemind",
    "nameZh": "削弱心智",
    "level": 5,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "目标 intellect 降到1（如同失智）。受影响生物无法进行任何需要智力的行动。通过意志检定则不受影响。可以通过移除诅咒或有限祈愿解除。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "hallow",
    "nameEn": "Hallow",
    "nameZh": "圣居",
    "level": 5,
    "school": "塑能系",
    "components": "V, S, M, XP",
    "castingTime": "24小时",
    "range": "触碰",
    "target": "以触碰点为中心、40尺半径",
    "duration": "立即",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你将一个区域圣化。该区域内，驱散亡灵+4加值，盟友豁免+4加值，且可以附加一个额外法术效果。邪恶生物在此区域会受到惩罚。与邪术对立，两者不能在同一区域。",
    "material": "价值1000gp的香料和圣水",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 5
    }
  },
  {
    "id": "heroes_feast",
    "nameEn": "Heroes' Feast",
    "nameZh": "英雄宴",
    "level": 5,
    "school": "咒法系",
    "components": "V,S,DF",
    "castingTime": "1轮",
    "range": "触碰",
    "target": "一个生物以及每施法者等级一个盟友",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者治愈全部伤害并恢复健康值全满。此外，受术者在法术持续期间对恐惧免疫，并且在攻击和伤害上获得+2士气加值。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6
    },
    "arcane": {
      "吟游诗人": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "greater_heroism",
    "nameEn": "Heroism, Greater",
    "nameZh": "高等英雄气概",
    "level": 5,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触的一个生物",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如英雄气概，但目标在攻击、豁免和技能检定上获得+4士气加值，免疫恐惧，并获得最多20点、等同施法者等级的临时生命值。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 6
    }
  },
  {
    "id": "hold_monster",
    "nameEn": "Hold Monster",
    "nameZh": "定身怪物",
    "level": 5,
    "school": "惑控系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "如同定身人类，但可以影响任何生物。目标被定身（无法行动）。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 5
    }
  },
  {
    "id": "inflict_light_wounds_mass",
    "nameEn": "Inflict Light Wounds, Mass",
    "nameZh": "造成轻伤（群体）",
    "level": 5,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个或多个生物",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同造成轻伤，但你可以影响多个目标。每个目标受到1d8点伤害+1/等级（最大+15）。",
    "source": "3R",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "insect_plague",
    "nameEn": "Insect Plague",
    "nameZh": "虫群术",
    "level": 5,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/环)",
    "target": "蝗虫群（40尺×40尺）",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你召唤一大群蝗虫。虫群会遮蔽视线，对区域内的生物造成每轮1点伤害并驱赶HD3或以下的生物。HD4到5的生物如果失败意志检定也会逃跑。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 5
    }
  },
  {
    "id": "mark_of_justice",
    "nameEn": "Mark of Justice",
    "nameZh": "公正标记",
    "level": 5,
    "school": "惑控系",
    "components": "V, S, DF",
    "castingTime": "10分钟",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "永久；见描述",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你在目标生物身上刻下一个不可见的印记，指定一个不公正的行为。当目标执行该行为时，会受到诅咒效果（属性-4、攻击-4、豁免-4等）。印记可以被移除诅咒或有限许愿消除。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "paladin": 4
    },
    "divine": {
      "牧师": 5,
      "圣武士": 4
    }
  },
  {
    "id": "mind_blank",
    "nameEn": "Mind Blank",
    "nameZh": "心灵屏障",
    "level": 5,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1天/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者对心灵感应、附魔、幻术和任何形式的思想侦测免疫。受术者也不会留下灵光痕迹。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "mind_fog",
    "nameEn": "Mind Fog",
    "nameZh": "心灵迷雾",
    "level": 5,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "半径20尺散布",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "制造一片浓密的心灵迷雾。雾内所有生物受到-10警觉检定，潜行检定DC+10。法术侦测也受阻碍。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "mirage_arcana",
    "nameEn": "Mirage Arcana",
    "nameZh": "海市蜃楼",
    "level": 5,
    "school": "幻术系",
    "descriptor": "五官幻觉",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/级)",
    "target": "每级一个20尺立方区域（可变）",
    "duration": "专注 + 1小时/级（可解消）",
    "savingThrow": "意志识破（若互动）",
    "spellResist": "不可",
    "desc": "如幻景，但能更彻底改变地形与建筑外观，产生视觉、听觉、触觉和嗅觉幻象。它不能制造、隐藏或伪装生物。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "nightmare",
    "nameEn": "Nightmare",
    "nameZh": "梦魇术",
    "level": 5,
    "school": "幻术系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "无限制",
    "target": "一个熟睡的生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你向远方一个熟睡的生物发送梦魇。目标受到1d10点属性伤害（魅力），并且下一天疲惫（如同没睡）。如果目标通过意志检定，则不受影响。梦魇术可以杀死目标（属性降到0）。⚠️ 邪恶法术。",
    "source": "3R",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "overland_flight",
    "nameEn": "Overland Flight",
    "nameZh": "越野飞行",
    "level": 5,
    "school": "变化系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1小时/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得飞行速度80尺（不良机动性）。比飞行术更快，适合长距离旅行。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "permanency",
    "nameEn": "Permanency",
    "nameZh": "魔法恒定术",
    "level": 5,
    "school": "通用系",
    "components": "V,S,XP",
    "castingTime": "2轮",
    "range": "见描述",
    "target": "见描述",
    "duration": "永久(见描述)",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "此法术使某些其他法术的效果变为永久。根据法术的不同，需要消耗不同数量的经验值（500-2500XP）。可恒定的法术包括：奥术视觉、侦测魔法、阅读魔法、舌头、隐身（仅对物品）、法师之手等。被解除魔法击中时有5%概率被解除。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "persistent_image",
    "nameEn": "Persistent Image",
    "nameZh": "常驻幻影",
    "level": 5,
    "school": "幻术系",
    "descriptor": "虚假幻觉",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/级)",
    "target": "虚假幻象，最大四个10尺立方 + 每级一个10尺立方",
    "duration": "1分钟/级（可解消）",
    "savingThrow": "意志识破（若互动）",
    "spellResist": "不可",
    "desc": "如无声幻影，但包含视觉、听觉、嗅觉和温度，并会按你预设的行动流程运作；无需持续专注也能继续执行。",
    "material": "少量羊毛和几粒沙",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "power_word_faithful",
    "nameEn": "Power Word, Faithful",
    "nameZh": "律令：忠诚",
    "level": 5,
    "school": "惑控系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "1天/等级",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个充满力量的词汇，使目标对你绝对忠诚。目标会为你而战，不会背叛你。",
    "source": "3R"
  },
  {
    "id": "prying_eyes",
    "nameEn": "Prying Eyes",
    "nameZh": "窥视之眼",
    "level": 5,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "至多一打窥视之眼",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造至多12只魔法眼球。每只眼球有30尺黑暗视觉，可以看穿隐形。你可以通过眼球看（使用你的正常视觉）。眼球有10HP，AC 18。",
    "material": "一撮猫毛",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "raise_dead",
    "nameEn": "Raise Dead",
    "nameZh": "死者复活",
    "level": 5,
    "school": "死灵系",
    "components": "V,S,M,DF",
    "castingTime": "1分钟",
    "range": "触碰",
    "target": "一具尸体",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你使死者复活。死者复活时HD和生命值全满，但失去1点体质（若体质降到0则再次死亡）。死者复活后需要休息一天才能恢复。死者死亡时间不能超过1天/环。",
    "material": "一颗价值5000gp的钻石",
    "source": "PHB",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "ransack",
    "nameEn": "Ransack",
    "nameZh": "洗劫术",
    "level": 5,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个容器或房间",
    "duration": "1轮/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "否",
    "desc": "你制造一阵狂暴的力场冲击波，将目标区域内的所有物品和装备震飞。区域内所有生物还需要通过强韧检定否则耳聋1d6轮。",
    "source": "3R"
  },
  {
    "id": "righteous_might",
    "nameEn": "Righteous Might",
    "nameZh": "正义威仪",
    "level": 5,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你变得威武庄严。你的体型增大一档，获得+4力量、+4魅力、伤害减免5/邪恶，近战攻击和伤害+2d6。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "scrying",
    "nameEn": "Scrying",
    "nameZh": "远观术",
    "level": 5,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1小时",
    "range": "见描述",
    "target": "一个生物或地点",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你在远处观察一个生物或地点（如同你在现场一样）。目标可以通过意志检定摆脱观察。你需要有目标的身体部分（头发、血液等）才能施展。",
    "material": "价值1000gp的水晶球、银镜或圣水盆",
    "source": "PHB",
    "classLevels": {
      "bard": 3,
      "cleric": 5,
      "druid": 4,
      "sorcererWizard": 4
    },
    "arcane": {
      "吟游诗人": 3,
      "术士/法师": 4
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 4
    }
  },
  {
    "id": "seeming",
    "nameEn": "Seeming",
    "nameZh": "伪装术",
    "level": 5,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "每环一个生物，彼此之间不超过30尺",
    "duration": "12小时",
    "savingThrow": "意志过则无效或识破（如有互动）",
    "spellResist": "是",
    "desc": "你改变目标的外貌。你可以让目标看起来像另一个人、变高或变矮、变胖或变瘦、或看起来像不同性别。目标的体型改变不超过1英尺。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "sending",
    "nameEn": "Sending",
    "nameZh": "发送术",
    "level": 5,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "无限制",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你向远方一个生物发送一条简短信息（最多25字）。目标可以立即回复（同等长度）。信息可以穿越位面（但跨位面有50%失败几率）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "牧师": 4
    }
  },
  {
    "id": "shadow_evocation",
    "nameEn": "Shadow Evocation",
    "nameZh": "幽影塑能术",
    "level": 5,
    "school": "幻术系",
    "descriptor": "幽影幻觉",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "见说明",
    "target": "见说明",
    "duration": "见说明",
    "savingThrow": "意志识破（若互动）",
    "spellResist": "可",
    "desc": "以幽影能量模拟一个4级或更低的术士/法师塑能系法术。相信者承受正常效果；识破者只承受约五分之一的伤害或效果，且仍可使用被模拟法术本身允许的豁免或法术抗力。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    }
  },
  {
    "id": "slay_living",
    "nameEn": "Slay Living",
    "nameZh": "杀生术",
    "level": 5,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要成功近战接触攻击。命中则目标受到100点伤害立即（通过强韧检定则只受到3d6+1/级点伤害）。对不死生物施放则治愈100点伤害。",
    "source": "3R",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "song_of_discord",
    "nameEn": "Song of Discord",
    "nameZh": "挑拨曲",
    "level": 5,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵，音波",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/级)",
    "target": "20尺半径扩散",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "区域内失败的生物会被迫自相残杀。每轮开始时有一半概率攻击最近目标；否则正常行动。受影响者会用其可用的有效手段攻击，但不会攻击已失去意识的目标。",
    "source": "PHB",
    "classLevels": {
      "bard": 5
    },
    "arcane": {
      "吟游诗人": 5
    }
  },
  {
    "id": "spell_resistance",
    "nameEn": "Spell Resistance",
    "nameZh": "法术抗力",
    "level": 5,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1分钟/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者获得法术抗力等于12+你的魅力调整值（牧师）或智力调整值（法师）。",
    "material": "一小块琥珀",
    "source": "PHB",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "stone_skin_3r",
    "nameEn": "Stone Skin (3R)",
    "nameZh": "石肤术",
    "level": 5,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "10分钟/环 或 直到被穿透",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者的皮肤变得如石头一般坚硬。受术者获得伤害减免10/魔法（每次受到的物理伤害减少10点，最低1点）。法术持续直到吸收总量达到10点伤害每施法者等级（最高150点）。",
    "material": "一块花岗岩",
    "source": "3R"
  },
  {
    "id": "summon_monster_5_full",
    "nameEn": "Summon Monster V",
    "nameZh": "召唤怪物Ⅴ",
    "level": 5,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤一个CR5或更低的生物为你作战。常见选择：1个石元素、1个大型土元素、1个狂战幽灵等。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "cleric": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "summon_natures_ally_v",
    "nameEn": "Summon Nature's Ally V",
    "nameZh": "召唤自然盟友V",
    "level": 5,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤非常强大的自然生物来为你战斗。可以召唤1个5级自然生物、1d3个4级生物或1d4+1个3级或更低的生物。召唤列表包括树人、独角兽等。",
    "source": "PHB",
    "classLevels": {
      "druid": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "symbol_of_pain",
    "nameEn": "Symbol of Pain",
    "nameZh": "痛苦符记",
    "level": 5,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时对60尺内的所有生物造成极度痛苦。受影响的生物陷入痛苦状态（-4攻击检定、-4技能检定、AC-4），持续1小时。",
    "material": "价值1000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "symbol_of_sleep",
    "nameEn": "Symbol of Sleep",
    "nameZh": "沉睡符记",
    "level": 5,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时使60尺内HD10或以下的生物陷入魔法睡眠3d6×10分钟。睡眠者可以被正常唤醒（摇晃或伤害）。",
    "material": "价值1000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "telekinesis",
    "nameEn": "Telekinesis",
    "nameZh": "遥体术",
    "level": 5,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1 standard action",
    "range": "Long (400 ft. + 40 ft./level)",
    "target": "One object or creature",
    "duration": "Concentration, up to 1 round/level",
    "savingThrow": "Will negates (object)",
    "spellResist": "Yes",
    "desc": "你获得远程操纵物体的能力。可以举起、移动或投掷物体。重量上限为每施法者等级 25 磅。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "transmute_mud_to_rock",
    "nameEn": "Transmute Mud to Rock",
    "nameZh": "泥岩互变（泥→岩）",
    "level": 5,
    "school": "变化系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "两个10尺散布（任选）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "将泥沼变为岩石（泥→岩）。泥沼区域变为困难地形变为不可通行。岩→泥版本（岩石变泥沼）让区域变为困难地形。",
    "material": "泥土和一块花岗岩",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "transmute_mud_rock",
    "nameEn": "Transmute Mud to Rock / Rock to Mud",
    "nameZh": "泥岩互变",
    "level": 5,
    "school": "变化系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "两个10尺散布（任选）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "将两个区域互换：泥→岩（固化）或岩→泥（软化）。岩变泥可以让建筑物倒塌、地面变成困难地形。泥变岩可以固化泥沼。",
    "material": "泥土和一块花岗岩",
    "source": "3R"
  },
  {
    "id": "transmute_rock_to_mud",
    "nameEn": "Transmute Rock to Mud",
    "nameZh": "化为泥沼",
    "level": 5,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将坚固的岩石变成泥沼。此法术可以将岩石地面变成困难地形的泥沼。",
    "source": "PHB",
    "classLevels": {
      "druid": 5,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "unhallow",
    "nameEn": "Unhallow",
    "nameZh": "污秽之地",
    "level": 5,
    "school": "咒法系",
    "components": "V,S,M,DF",
    "castingTime": "24小时",
    "range": "触碰",
    "target": "以触碰点为中心，半径40尺散布",
    "duration": "永久",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你将一片区域变为污秽（邪恶能量充沛）。污秽之地内的邪恶生物获得+1偏斜AC和+1强韧豁免。在污秽之地上施展神术（邪恶属性）的施法者等级+1。⚠️ 邪恶法术。",
    "material": "价值1000gp的祭坛装饰",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 5
    }
  },
  {
    "id": "wall_of_force",
    "nameEn": "Wall of Force",
    "nameZh": "力墙术",
    "level": 5,
    "school": "塑能系",
    "components": "V, S, M (a pinch of powder made from a clear gem)",
    "castingTime": "1 standard action",
    "range": "Medium (100 ft. + 10 ft./level)",
    "target": "Wall up to 20 ft. long/level and 10 ft. high",
    "duration": "Permanent (D)",
    "savingThrow": "None",
    "spellResist": "No",
    "desc": "创造一道无形的力场墙。力墙是绝对坚固的（硬度 50，生命值 90），无法被常规手段破坏。魔法也无法穿透。",
    "material": "a pinch of powder made from a clear gem",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "wall_of_iron",
    "nameEn": "Wall of Iron",
    "nameZh": "铁墙术",
    "level": 5,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一道铁墙（最厚10尺+5尺/环，面积100平方尺/环）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一道铁墙。墙可以是垂直、水平或任何形状。墙的厚度由你决定（最厚10尺+5尺/环）。墙的硬度10，HP厚度每寸30点。",
    "material": "一小块铁片或铁钉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "wall_of_stone",
    "nameEn": "Wall of Stone",
    "nameZh": "石墙术",
    "level": 5,
    "school": "塑能系",
    "components": "V,S,M,DF",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一道石墙（最厚10尺+5尺/环，面积100平方尺/环）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一道石墙。墙可以是垂直、水平或任何形状。墙的厚度由你决定（最厚10尺+5尺/环）。墙的硬度14，HP厚度每寸10点。你可以用石墙术制造一个房间或通道。",
    "material": "一小块花岗岩",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 6,
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 6
    }
  },
  {
    "id": "wall_of_thorns",
    "nameEn": "Wall of Thorns",
    "nameZh": "荆棘墙",
    "level": 5,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "中距（100英尺+10英尺/等级）",
    "duration": "1分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一道由尖刺荆棘组成的墙。任何试图穿过墙的生物受到每轮1d8点穿刺伤害。",
    "source": "3R",
    "classLevels": {
      "druid": 5
    },
    "divine": {
      "德鲁伊": 5
    }
  },
  {
    "id": "acid_fog_6",
    "nameEn": "Acid Fog",
    "nameZh": "酸雾",
    "level": 6,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造出一片浓密的黄绿色雾气，雾气对视线造成完全遮蔽（掩蔽+2）。雾气中的生物每轮受到1d6点强酸伤害，金属物品每轮受到2d6点伤害（无豁免）。雾气中心区域可被风吹散。",
    "material": "一小瓶酸液",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "analyze_dweomer",
    "nameEn": "Analyze Dweomer",
    "nameZh": "分析灵光",
    "level": 6,
    "school": "预言系",
    "components": "V, S, F",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个物体或生物",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得关于目标的所有魔法信息：所有法术效果、灵光强度、法术学派、施法者等级等。该法术可以看穿所有未被神力防护的魔法。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "animate_objects",
    "nameEn": "Animate Objects",
    "nameZh": "活化物体",
    "level": 6,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "每环一个小型物体",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你赋予无生命物体活动能力和生命。被活化的物体会攻击你指定的目标。每个施法者等级可以活化一个小型物体（中型物体算两个，大型算四个，以此类推）。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6
    },
    "arcane": {
      "吟游诗人": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "antilife_shell",
    "nameEn": "Antilife Shell",
    "nameZh": "反生命护罩",
    "level": 6,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1轮",
    "range": "10尺",
    "target": "以你为中心的10尺半径 emanation",
    "duration": "10分钟/等级(D)",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你周围产生一个可移动的半球形力场，阻止所有活物进入。活物无法穿过此屏障，但法术、远程攻击和非活物（如不死生物和构装体）可以穿过。如果你强制将屏障推向生物则法术结束。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "druid": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "antimagic_field",
    "nameEn": "Antimagic Field",
    "nameZh": "反魔法场",
    "level": 6,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "以你为中心，半径10尺散布",
    "duration": "1轮/环",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "创造一片反魔法区域。区域内所有魔法效果和法术无效（包括你自己的法术）。魔法物品和法术抗力在区域内无效。你可以解除反魔法场（以一个标准动作）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "bear_s_endurance_mass",
    "nameEn": "Bear's Endurance, Mass",
    "nameZh": "群体熊之耐力",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如熊之耐力法术，但可影响多个目标。每个受术者的体质获得+4增强加值。",
    "material": "一滴甘草汁",
    "source": "3R",
    "classLevels": {
      "cleric": 6,
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "beast_shape_iv",
    "nameEn": "Beast Shape IV",
    "nameZh": "野兽形态IV",
    "level": 6,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以将自己变成任何体型动物的形状，包括魔法兽。你可以获得该生物的所有能力。",
    "source": "3R"
  },
  {
    "id": "blade_barrier",
    "nameEn": "Blade Barrier",
    "nameZh": "剑刃障壁",
    "level": 6,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "每等级20尺长或环形半径20尺，高20尺",
    "duration": "1分钟/等级(D)",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你创造一道由旋转飞刃组成的不可穿越的屏障。通过此屏障的生物受到1d6点伤害/等级（最多15d6）。成功的反射豁免减半伤害。屏障提供3/4掩蔽。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "bolt_of_glory",
    "nameEn": "Bolt of Glory",
    "nameZh": "荣耀之箭",
    "level": 6,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "远距（400英尺+40英尺/等级）",
    "duration": "瞬时",
    "savingThrow": "反射过",
    "spellResist": "是",
    "desc": "你发射一道神圣能量的射线。射线对邪恶生物造成1d8点伤害/等级（最大15d8），对邪恶外位面生物造成双倍伤害。",
    "source": "3R"
  },
  {
    "id": "bull_s_strength_mass",
    "nameEn": "Bull's Strength, Mass",
    "nameZh": "群体公牛之力",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如公牛之力法术，但可影响多个目标。每个受术者的力量获得+4增强加值。",
    "material": "一摄公牛毛",
    "source": "3R",
    "classLevels": {
      "cleric": 6,
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "cat_s_grace_mass",
    "nameEn": "Cat's Grace, Mass",
    "nameZh": "群体猫之优雅",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如猫之优雅法术，但可影响多个目标。每个受术者的敏捷获得+4增强加值。",
    "material": "一摄猫毛",
    "source": "3R",
    "classLevels": {
      "bard": 6,
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "chain_lightning",
    "nameEn": "Chain Lightning",
    "nameZh": "连锁闪电",
    "level": 6,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距",
    "target": "一道闪电（首个目标），然后跳跃到邻近目标",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你发射一道连锁闪电。首个目标受到1d6点电击伤害每施法者等级（最高20d6）。闪电然后跳跃到附近目标（最远30尺），每个后续目标受到比前一个少1d6的伤害（最低1d6）。连锁最多跳跃3个额外目标。通过反射检定则伤害减半。",
    "material": "一小块琥珀、水晶或玻璃法器",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "mass_charm_monster",
    "nameEn": "Charm Monster, Mass",
    "nameZh": "群体魅惑怪物",
    "level": 6,
    "school": "惑控系",
    "descriptor": "魅惑，影响心灵",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "一个或多个活物，任意两者相距不超过30尺",
    "duration": "1天/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如魅惑怪物，但可影响多个目标；总生命骰最多为施法者等级的两倍，或选择一个不受生命骰上限限制的目标。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 8
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 8
    }
  },
  {
    "id": "circle_of_death",
    "nameEn": "Circle of Death",
    "nameZh": "死亡之环",
    "level": 6,
    "school": "死灵系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "半径40尺散布",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你以自己为中心释放负能量波。范围内所有生物受到1d4点负等级每施法者等级（最高10d4）。通过强韧检定则不受影响。",
    "material": "价值500gp的黑玛瑙粉末",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "contingency",
    "nameEn": "Contingency",
    "nameZh": "触发术",
    "level": 6,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "个人",
    "target": "你自己",
    "duration": "1天/环 或 直到触发",
    "savingThrow": "见描述",
    "spellResist": "是（无害）",
    "desc": "你绑定一个法术，当特定条件满足时自动触发。被绑定的法术必须是个人范围或触碰范围。触发条件由你设定（如「我受到攻击时」「我生命值降到0时」）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "create_undead",
    "nameEn": "Create Undead",
    "nameZh": "创造亡灵",
    "level": 6,
    "school": "死灵系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "最多2HD/环的尸体",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将尸体转化为亡灵生物（僵尸、骷髅、食尸鬼、幽影等）。你可以控制的不死生物HD总值最多2HD/环。⚠️ 邪恶法术。",
    "material": "价值150gp的黑玛瑙（消耗）",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "cure_moderate_wounds_mass",
    "nameEn": "Cure Moderate Wounds, Mass",
    "nameZh": "群体治疗中度伤",
    "level": 6,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "你所选的最多每等级1个接触的生物，彼此相距不超过30尺",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "可（无害）",
    "desc": "如治疗重伤，但可影响多个目标。每个受术者恢复10点HP+1/级（最大+10）。该法术可以治疗不死生物造成的伤害。",
    "source": "3R",
    "classLevels": {
      "bard": 6,
      "cleric": 6,
      "druid": 7
    },
    "arcane": {
      "吟游诗人": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 7
    }
  },
  {
    "id": "dictum",
    "nameEn": "Dictum",
    "nameZh": "神言术",
    "level": 6,
    "school": "塑能系",
    "components": "V",
    "castingTime": "单动作",
    "range": "40尺",
    "target": "",
    "duration": "即时",
    "savingThrow": "见描述",
    "spellResist": "可",
    "desc": "你说出神之言语。范围内所有非守序生物受到1d6点伤害/级（最大15d6）。通过强韧检定则伤害减半。守序生物不受伤害但可能震慑1d4轮。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "disintegrate",
    "nameEn": "Disintegrate",
    "nameZh": "解离术",
    "level": 6,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一道射线或一个物品",
    "duration": "立即",
    "savingThrow": "强韧过则无效（见描述）",
    "spellResist": "是",
    "desc": "你需要进行远程接触攻击。命中则目标受到2d6点伤害每施法者等级（最高40d6）。如果目标的HP降到0以下，目标被彻底解离（只留下一堆灰烬，无法复活除非许愿术或同等效果）。对构装生物造成双倍伤害。对魔法物品需要通过DC23的强韧检定否则被解离。",
    "material": "一小撮硫磺粉和一撮蝙蝠粪便",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "dispel_magic_greater",
    "nameEn": "Dispel Magic, Greater",
    "nameZh": "高等解除魔法",
    "level": 6,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "见描述",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如解除魔法，但你可以针对多个目标或区域。你可以以标准动作针对一个目标施展，或以整轮动作针对一个区域（如同法术区域的模式）。你的施法者等级检定获得+10加值。",
    "source": "3R",
    "classLevels": {
      "bard": 5,
      "cleric": 6,
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "mass_eagles_splendor",
    "nameEn": "Eagle's Splendor, Mass",
    "nameZh": "群体鹰之威仪",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "每级一个生物，任意两者相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如鹰之威仪，但可同时影响多个目标，使其魅力获得增强加值。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "eye_of_autumn",
    "nameEn": "Eye of Autumn",
    "nameZh": "秋之眼",
    "level": 6,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "你的眼睛发出金色光芒。每轮你可以以自由动作对目标发射一道光束，造成1d6点光耀伤害+每等级1点（最大+15）。目标如果失败强韧检定则目盲1轮。",
    "source": "3R"
  },
  {
    "id": "eyebite",
    "nameEn": "Eyebite",
    "nameZh": "目咬术",
    "level": 6,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你对目标造成目盲（通过意志检定则不受影响）。目盲的生物受到-4攻击检定和技能检定。如果目标通过检定，则不受任何效果。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "find_the_path",
    "nameEn": "Find the Path",
    "nameZh": "寻路术",
    "level": 6,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "3轮",
    "range": "个人或近距（见描述）",
    "target": "你或一个人形生物",
    "duration": "1轮/级或直到到达目的地",
    "savingThrow": "无或意志过则无效（无害）（见描述）",
    "spellResist": "否或可（无害）",
    "desc": "受术者知道到达指定目的地的最直接和安全的路线。该法术可以穿透幻象和迷宫。如果受术者迷路，该法术会指出正确方向。",
    "material": "一套旅行者的衣服",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6,
      "druid": 6
    },
    "arcane": {
      "吟游诗人": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "fire_seeds",
    "nameEn": "Fire Seeds",
    "nameZh": "火种术",
    "level": 6,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "触及",
    "target": "最多四颗橡果或四颗干果",
    "duration": "1轮/级",
    "savingThrow": "反射过则减半或强韧过则无效",
    "spellResist": "否",
    "desc": "你将橡果或干果转化为爆炸物。有两种使用方式：1) 投掷：投掷距离30尺，命中后1d4+1d6火焰伤害（反射减半）；2) 橡果手雷：投掷距离50尺+5尺/2级，爆炸造成1d6+1火焰伤害每等级（最大+10d6）。",
    "material": "一颗橡果和一颗干果",
    "source": "3R",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "flesh_to_stone",
    "nameEn": "Flesh to Stone",
    "nameZh": "血肉化石",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "目标生物开始石化。目标必须成功强韧检定，否则在1d4+1轮后完全变为石头。已石化的生物可以被化石为肉术恢复。",
    "material": "一撮石灰粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "forbiddance",
    "nameEn": "Forbiddance",
    "nameZh": "禁制术",
    "level": 6,
    "school": "防护系",
    "components": "V, S, M, DF",
    "castingTime": "6轮",
    "range": "中距 (100尺+10尺/环)",
    "target": "60立方英尺/环（可变）",
    "duration": "永久",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你创造一个永久性魔法屏障，阻止所有传送和位面旅行进入该区域。不同阵营的生物进入时会受到伤害（与施法者阵营差异越大伤害越高）。需要密码才能安全通过。",
    "material": "圣水和价值1500gp的稀有香料",
    "source": "PHB",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "mass_foxs_cunning",
    "nameEn": "Fox's Cunning, Mass",
    "nameZh": "群体狐之狡黠",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2级)",
    "target": "每级一个生物，任意两者相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如狐之狡黠，但可同时影响多个目标，使其智力获得增强加值。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "freezing_sphere",
    "nameEn": "Freezing Sphere",
    "nameZh": "冰冻法球",
    "level": 6,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "长距（400英尺+40英尺/等级）",
    "duration": "瞬时",
    "savingThrow": "反射过半数伤害",
    "spellResist": "是",
    "desc": "你创造出一颗极冷的冰球，对爆发区域内的生物造成10d6点寒冷伤害（反射过则受到5d6点伤害）。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "geas_quest",
    "nameEn": "Geas/Quest",
    "nameZh": "指示术/探索任务",
    "level": 6,
    "school": "惑控系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你命令目标完成一个任务（不能明显有害）。目标必须通过意志检定否则被强迫完成任务。如果任务明显有害，目标获得新的豁免检定。目标的HD决定法术持续时间（HD12以下永久，HD12+ 1天/环）。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "giant_vortex",
    "nameEn": "Giant Vortex",
    "nameZh": "巨漩涡",
    "level": 6,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在水中创造一个巨大漩涡。漩涡中心每轮对你选择的生物造成8d6点钝击伤害。漩涡可将船只卷入水底。",
    "material": "一小片漩涡图样",
    "source": "3R"
  },
  {
    "id": "globe_of_invulnerability",
    "nameEn": "Globe of Invulnerability",
    "nameZh": "无敌法球",
    "level": 6,
    "school": "防护系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "以你为中心，半径10尺散布",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "见描述",
    "desc": "创造一片魔法屏障。所有法术等级低于法球施展者等级的法术无法穿透屏障（无论奥术或神术）。更高等级的法术可以穿透。",
    "material": "一颗价值1000gp的珍珠（消耗）",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "guards_and_wards",
    "nameEn": "Guards and Wards",
    "nameZh": "守卫与防护",
    "level": 6,
    "school": "防护系",
    "components": "V,S,M",
    "castingTime": "1轮",
    "range": "个人",
    "target": "以你为中心，半径200尺散布",
    "duration": "2小时/环",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "创造多重防护效果：1=酯术（防止侦测）；2=误途（误导方向）；3=幽灵守卫（吓退入侵者）；4=放逐仆从（驱散召唤生物）。",
    "material": "价值100gp的稀有药材",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "harm",
    "nameEn": "Harm",
    "nameZh": "伤害术",
    "level": 6,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则部分生效",
    "spellResist": "可",
    "desc": "你对目标造成10点伤害/级（最大150点）。如果目标有1d4负向等级或更低，伤害加倍。通过的强韧检定将伤害减半。该法术不能杀死目标，只能将目标降至1HP。",
    "source": "3R",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "heal",
    "nameEn": "Heal",
    "nameZh": "医疗术",
    "level": 6,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "你治愈受术者的全部伤害（恢复健康值全满）。你也可以解除以下负面状态：目盲、耳聋、特质伤害、属性伤害、属性吸取、毒素、疾病（但无法解除诅咒、解离或死亡）。对亡灵生物造成10d6点伤害。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "druid": 7
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 7
    }
  },
  {
    "id": "inflict_moderate_wounds_mass",
    "nameEn": "Inflict Moderate Wounds, Mass",
    "nameZh": "造成中度伤（群体）",
    "level": 6,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个或对于目标",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同造成中度伤，但你可以影响多个目标。每个目标受到2d8点伤害+1/等级（最大+20）。",
    "source": "3R",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "insanity",
    "nameEn": "Insanity",
    "nameZh": "疯狂术",
    "level": 6,
    "school": "惑控系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标陷入永久性疯狂。效果如同困惑法术，但永久持续。每24小时目标可以重新进行意志检定以摆脱效果（DC=法术DC）。神迹术、有限祈愿术或医疗术可以恢复正常。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "ironwood",
    "nameEn": "Ironwood",
    "nameZh": "铁木术",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "接触",
    "target": "接触到的活树",
    "duration": "1天/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将活树的木材变成如同铁一样坚硬。铁木可以建造船、建筑或其他结构。",
    "material": "一撮铁粉",
    "source": "3R",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "irresistible_dance",
    "nameEn": "Irresistible Dance",
    "nameZh": "迷舞",
    "level": 6,
    "school": "惑控系",
    "descriptor": "胁迫，影响心灵",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触的生物",
    "duration": "1d4+1轮",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "目标无法抗拒地起舞，除跳舞外不能行动。跳舞期间目标AC-4、反射豁免-10、失去盾牌AC，并在其回合引发借机攻击。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 8
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 8
    }
  },
  {
    "id": "legend_lore",
    "nameEn": "Legend Lore",
    "nameZh": "传奇知识",
    "level": 6,
    "school": "预言系",
    "components": "V,S",
    "castingTime": "见描述",
    "range": "个人",
    "target": "你自己",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获取关于传奇人物、地点或物品的知识。施展时间取决于你已知信息（已知名字→1轮；已知描述→10分钟；一无所知→1天）。DM告知你相关知识。",
    "source": "PHB",
    "classLevels": {
      "bard": 4,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 4,
      "术士/法师": 6
    }
  },
  {
    "id": "live_oak",
    "nameEn": "Liveoak",
    "nameZh": "活化橡树",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺",
    "target": "一棵你触及的活橡树",
    "duration": "1小时/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "一棵活橡树变为一个树精（Treant）的替身。替身有树精的属性（HD=你的施法者等级，AC=20，攻击+20近战，伤害2d6+12）。替身服从你的命令。",
    "material": "一颗橡果",
    "source": "3R",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "mass_cure_moderate_wounds",
    "nameEn": "Mass Cure Moderate Wounds",
    "nameZh": "群体次级治疗重伤",
    "level": 6,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "你所选的最多每等级1个接触的生物，彼此相距不超过30尺",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "可（无害）",
    "desc": "如次级治疗重伤，但可影响多个目标。每个受术者恢复2d8+1/级HP（最大+10）。该法术可以治疗不死生物造成的伤害。",
    "source": "3R"
  },
  {
    "id": "mislead",
    "nameEn": "Mislead",
    "nameZh": "假象术",
    "level": 6,
    "school": "幻术系",
    "components": "S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一个你的幻象分身（虚假图像），同时你的身体变为隐形。分身可以移动、说话、施法（假动作）。你可以通过分身看到和听到。任何生物攻击分身会使其消失（你显形）。",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 6
    }
  },
  {
    "id": "move_earth",
    "nameEn": "Move Earth",
    "nameZh": "移土术",
    "level": 6,
    "school": "变化系",
    "components": "V,S,M,DF",
    "castingTime": "10分钟",
    "range": "长距",
    "target": "一片区域（最大10尺+10尺/环边长）",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你缓慢移动大量泥土和石头（每小时10立方尺）。可以造山、挖沟、改道河流等。法术需要专注。",
    "material": "价值10gp的稀有土壤",
    "source": "PHB",
    "classLevels": {
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "owl_s_wisdom_mass",
    "nameEn": "Owl's Wisdom, Mass",
    "nameZh": "群体猫头鹰之智慧",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如猫头鹰之智慧法术，但可影响多个目标。每个受术者的感知获得+4增强加值。",
    "material": "一摄猫头鹰羽毛",
    "source": "3R",
    "classLevels": {
      "cleric": 6,
      "druid": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 6
    }
  },
  {
    "id": "permanent_image",
    "nameEn": "Permanent Image",
    "nameZh": "永久影像",
    "level": 6,
    "school": "幻术系",
    "components": "V, S, M, F",
    "castingTime": "单动作",
    "range": "长距",
    "target": "",
    "duration": "永久",
    "savingThrow": "意志过则发现（见描述）",
    "spellResist": "否",
    "desc": "如鬼影憧憧，但影像永久持续。影像可以移动和变化（如同 program image 法术）。你可以调整影像的声音、气味和温度。影像可以伪造一个生物或物体。任何与影像互动的人可以窥破幻象（意志检定）。",
    "material": "一小块玻璃和水晶",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "planar_ally",
    "nameEn": "Planar Ally",
    "nameZh": "位面盟友",
    "level": 6,
    "school": "咒法系",
    "components": "V, S, M, DF",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个外层位面的生物来协助你。你必须提供价值至少1000金币的祭品（黄金、宝石或魔法物品）。召唤的生物服务时间：每1000金币价值1轮。你可以要求生物执行任务，但如果任务与本性的阵营严重冲突，生物可以拒绝。",
    "material": "价值至少1000金币的祭品",
    "source": "PHB",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "planar_binding",
    "nameEn": "Planar Binding",
    "nameZh": "异界誓缚",
    "level": 6,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "10分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "最多三个异界生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "否",
    "desc": "你召唤一到三个异界生物并试图与之谈判。通过魅力对抗检定来让生物为你服务（最多1天/环）。你可以用魔法阵来困住生物。失败则生物返回原位。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "programmed_image",
    "nameEn": "Programmed Image",
    "nameZh": "预设影像",
    "level": 6,
    "school": "幻术系",
    "components": "V, S, M, F",
    "castingTime": "单动作",
    "range": "长距",
    "target": "",
    "duration": "永久，直到触发",
    "savingThrow": "意志过则发现",
    "spellResist": "否",
    "desc": "如鬼影憧憧，但你可以预设触发条件。当触发条件满足时，影像开始运行。你可以预设影像的行为模式。",
    "material": "与permanent image相同",
    "source": "3R",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "repel_wood",
    "nameEn": "Repel Wood",
    "nameZh": "排斥木材",
    "level": 6,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "0尺",
    "target": "",
    "duration": "1分钟/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "所有木制物品和植物被排斥离开你。木制武器不能命中你。木墙、木门等不能挡住你（你可以穿过它们）。",
    "source": "3R",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "shadow_walk",
    "nameEn": "Shadow Walk",
    "nameZh": "阴影行走",
    "level": 6,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你和其他自愿接触的生物（最多每等级1个）",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在阴影位面中旅行。在阴影位面中，你的移动速度是正常地面的3倍（每轮最多720尺）。当你离开阴影位面时，你出现在你选择的地点（必须能看到或知道位置）。如果你在阴影位面中被攻击，你会被弹回主位面。",
    "material": "一撮阴影粉尘",
    "source": "PHB",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 6
    }
  },
  {
    "id": "greater_shout",
    "nameEn": "Shout, Greater",
    "nameZh": "高等咆哮术",
    "level": 6,
    "school": "塑能系",
    "descriptor": "音波",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥状爆发",
    "duration": "立即",
    "savingThrow": "强韧过则部分有效；反射过则物品无效",
    "spellResist": "可（物品）",
    "desc": "如咆哮术，但造成10d6点音波伤害，并可震慑1轮、耳聋4d6轮；豁免成功则不震慑，伤害与耳聋时间减半。",
    "focus": "一支金属或象牙小号角",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 8
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 8
    }
  },
  {
    "id": "spellstaff",
    "nameEn": "Spellstaff",
    "nameZh": "法术杖",
    "level": 6,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一根木制法杖",
    "duration": "永久直到消耗",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "是（无害）",
    "desc": "你将一个法术储存在一根木制法杖中。法杖的持有者可以施放该法术（如同你施展的一样）。一根法杖同一时间只能储存一个法术。",
    "source": "PHB",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "stone_tell",
    "nameEn": "Stone Tell",
    "nameZh": "石言术",
    "level": 6,
    "school": "预言系",
    "components": "V, S, DF",
    "castingTime": "10分钟",
    "range": "你自己",
    "target": "你自己",
    "duration": "1分钟/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以与天然或加工过的石头交谈。石头可以告诉你谁曾经触碰过它、它看到或听到了什么（石头的感知很有限），以及其他关于周围环境的信息。",
    "source": "PHB",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "stone_to_flesh",
    "nameEn": "Stone to Flesh",
    "nameZh": "化石为肉",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个宠物或生物",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你将石化的生物恢复为血肉。如果目标是被血肉化石法术变成石头的，该法术可以恢复。如果目标是天然石头，该法术将其变为血肉（但需要每周施展一次以维持生命）。",
    "material": "一撮石灰粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "suggestion_mass",
    "nameEn": "Suggestion, Mass",
    "nameZh": "群体暗示术",
    "level": 6,
    "school": "惑控系",
    "components": "V, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1小时/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如暗示术，但可影响多个目标。你可以向所有目标提出相同的暗示，或分别提出不同的暗示。暗示必须听起来合理。",
    "material": "一条蛇舌或一块糖果",
    "source": "3R",
    "classLevels": {
      "bard": 5,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 5,
      "术士/法师": 6
    }
  },
  {
    "id": "summon_monster_6_full",
    "nameEn": "Summon Monster VI",
    "nameZh": "召唤怪物Ⅵ",
    "level": 6,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤一个CR6或更低的生物为你作战。常见选择：1个大型火元素、1个石巨像、1个狂战幽灵等。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "summon_natures_ally_6",
    "nameEn": "Summon Nature's Ally VI",
    "nameZh": "召唤自然盟友六",
    "level": 6,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤以下自然生物之一：1) 1个大型元素（火、水、土、气）；2) 1个巨猿（Girallon）；3) 1d4+1个猛玛象；4) 1d4+2个剑齿虎。",
    "source": "3R",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "summon_natures_ally_vi",
    "nameEn": "Summon Nature's Ally VI",
    "nameZh": "召唤自然盟友VI",
    "level": 6,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤极其强大的自然生物来为你战斗。可以召唤1个6级自然生物、1d3个5级生物或1d4+1个4级或更低的生物。召唤列表包括高等元素等。",
    "source": "PHB"
  },
  {
    "id": "symbol_of_fear",
    "nameEn": "Symbol of Fear",
    "nameZh": "恐惧符记",
    "level": 6,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时使60尺内的所有生物恐慌。恐慌的生物会以最快的速度逃离，持续1d4×10分钟。",
    "material": "价值1000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "sympathetic_vibration",
    "nameEn": "Sympathetic Vibration",
    "nameZh": "共振术",
    "level": 6,
    "school": "塑能系",
    "descriptor": "音波",
    "components": "V, S, F",
    "castingTime": "10分钟",
    "range": "接触",
    "target": "一个独立物体",
    "duration": "至多1轮/级",
    "savingThrow": "无；见说明",
    "spellResist": "可",
    "desc": "让一个独立物体产生破坏性共振，每轮受到2d10点伤害且硬度不减免。该法术不影响生物或非独立结构。",
    "focus": "一把音叉",
    "source": "PHB",
    "classLevels": {
      "bard": 6
    },
    "arcane": {
      "吟游诗人": 6
    }
  },
  {
    "id": "tenser_s_transformation",
    "nameEn": "Tenser's Transformation",
    "nameZh": "坦瑟变身术",
    "level": 6,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你变身为战斗形态：力量+6增强加值，天生护甲+4，基础攻击加值+6，获得猛力攻击专长。你不能使用法术或技能（除了专注维持该法术）。",
    "material": "一撮铁粉",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "transport_via_plants",
    "nameEn": "Transport via Plants",
    "nameZh": "植物传送",
    "level": 6,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "不限",
    "target": "你和触碰的装备",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以通过一棵足够大的活树传送到同一位面上的另一棵同种类的活树。你必须知道目的地树木的大致位置。你和最多每两个施法者等级一个生物可以一起传送。",
    "source": "PHB",
    "classLevels": {
      "druid": 6
    },
    "divine": {
      "德鲁伊": 6
    }
  },
  {
    "id": "true_seeing",
    "nameEn": "True Seeing",
    "nameZh": "真知术",
    "level": 6,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得真知视野：可以看穿幻术、隐形、变形、投影、模糊、移位术等视觉幻象和幻术效果。真知术无法看穿角士之影和类似的反预言效果。",
    "material": "一颗价值500gp的蓝宝石眼珠",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 7,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 7
    }
  },
  {
    "id": "undeath_to_death",
    "nameEn": "Undeath to Death",
    "nameZh": "不死归亡术",
    "level": 6,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你摧毁区域内所有HD12或以下的不死生物。HD13或以上的不死生物受到1d6点每等级伤害（最大20d6）。通过强韧检定的不死生物只受到一半伤害。该法术对尚死者（dhampir）无效。",
    "material": "一撮骨粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "undetectable_alignment",
    "nameEn": "Undetectable Alignment",
    "nameZh": "不可侦测阵营",
    "level": 6,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "24小时",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "目标无法被任何法术或能力侦测到阵营（包括侦测邪恶、知道阵营等）。",
    "source": "3R",
    "classLevels": {
      "bard": 1,
      "cleric": 2,
      "paladin": 2
    },
    "arcane": {
      "吟游诗人": 1
    },
    "divine": {
      "牧师": 2,
      "圣武士": 2
    }
  },
  {
    "id": "veil",
    "nameEn": "Veil",
    "nameZh": "面纱术",
    "level": 6,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "最多每等级1个生物或物体，彼此相距不超过30尺",
    "duration": "1轮/级",
    "savingThrow": "意志过则发现（见描述）",
    "spellResist": "否",
    "desc": "你改变目标的外观。你可以使目标看起来像任何其他生物或物体。改变包括视觉、触觉、嗅觉和声音。任何与目标互动的人可以进行意志检定以看穿面纱。你可以精确控制改变的程度。",
    "material": "一层薄纱",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 6
    }
  },
  {
    "id": "wind_walk",
    "nameEn": "Wind Walk",
    "nameZh": "御风而行",
    "level": 6,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "你和每两个环一个触碰的生物",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "你和盟友变为蒸汽状云朵，以惊人的速度飞行（600尺/飞行速度，完美机动性）。在此形态下，你只能进行风力推动的动作，无法攻击或施法。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "druid": 7
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 7
    }
  },
  {
    "id": "word_of_recall",
    "nameEn": "Word of Recall",
    "nameZh": "回返真言",
    "level": 6,
    "school": "咒法系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "你自己",
    "target": "你和触碰的装备或生物（最多每环一个）",
    "duration": "立即",
    "savingThrow": "无或意志过则无效（无害）",
    "spellResist": "否或可（无害）",
    "desc": "你立即传送回你事先指定的圣所。你必须提前在一个地方冥想2小时来建立连接。传送是单向的，且无视距离（但不能跨位面）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "druid": 8
    },
    "divine": {
      "牧师": 6,
      "德鲁伊": 8
    }
  },
  {
    "id": "animate_plants",
    "nameEn": "Animate Plants",
    "nameZh": "活化植物",
    "level": 7,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将植物变成活化植物为你作战。你可以活化最多每等级一个中型植物，或一个大型植物/每2等级。",
    "source": "3R",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "arcane_sight_greater",
    "nameEn": "Arcane Sight, Greater",
    "nameZh": "高等奥术视觉",
    "level": 7,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如奥术视觉，但你可以看穿所有法术的灵光并记录它们。你可以获得关于任何法术或魔法物品的所有信息（如同分析灵光法术）。",
    "material": "一片水晶透镜",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "banishment",
    "nameEn": "Banishment",
    "nameZh": "放逐术",
    "level": 7,
    "school": "防护系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "所有在范围内的异界生物",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你尝试放逐一群异界生物回其本有位面。受影响生物需要通过意志检定否则被放逐。如果目标的信念与你不同，法术对其造成1d6点伤害每施法者等级（最高15d6）。",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "blasphemy",
    "nameEn": "Blasphemy",
    "nameZh": "亵渎",
    "level": 7,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "0英尺",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出亵渎的话语，对善良生物造成以下效果之一（基于HD）：杀戮、石化、排斥或震懵。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "changestaff",
    "nameEn": "Changestaff",
    "nameZh": "变化魔杖",
    "level": 7,
    "school": "变化系",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "一根特制木杖",
    "duration": "1小时/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将一根特制的木杖变为一个巨型树人般的生物。木杖战士服从你的命令并为你战斗。它拥有巨型木魔像的属性，每3个施法者等级可以创造一个（最多4个）。",
    "source": "PHB",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "control_undead",
    "nameEn": "Control Undead",
    "nameZh": "控制不死生物",
    "level": 7,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "最多每等级2HD的不死生物，彼此相距不超过30尺",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "你控制范围内所有HD不超过每等级2的不死生物。被控制的不死生物服从你的口头命令。意志检定成功的不死生物不受控制。",
    "material": "一撮骨粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "control_weather",
    "nameEn": "Control Weather",
    "nameZh": "控制天气",
    "level": 7,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "10分钟",
    "range": "8英里",
    "target": "以你为中心，半径4英里散布",
    "duration": "4d12小时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以改变天气模式。你可以选择：大晴天、大风天、暴雨、暴风雪、浓雾等。天气变化在法术施展后1d4×10分钟后生效。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7,
      "druid": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7,
      "德鲁伊": 7
    }
  },
  {
    "id": "creeping_doom",
    "nameEn": "Creeping Doom",
    "nameZh": "爬行厄运",
    "level": 7,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1轮",
    "range": "近距",
    "target": "半径20尺散布",
    "duration": "1轮/环",
    "savingThrow": "反射过则减半",
    "spellResist": "否",
    "desc": "你召唤一片虫群（蟑螂、甲虫等）。虫群每轮对区域内所有生物造成2d6点伤害。虫群可以被火攻驱散。",
    "source": "3R",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "cremate",
    "nameEn": "Cremate",
    "nameZh": "焚化术",
    "level": 7,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则部分生效",
    "spellResist": "可",
    "desc": "一道火焰射线射向目标。命中后造成1d6点火焰伤害+每等级1点（最大15d6）。如果目标的HP降至0或以下，目标被完全焚化为灰烬（无法复活，除非通过神迹术或同等效果）。通过的强韧检定将伤害减半。",
    "material": "一小块磷",
    "source": "3R"
  },
  {
    "id": "darkwood_batch",
    "nameEn": "Darkwood Batch",
    "nameZh": "黑木转化",
    "level": 7,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "触及",
    "target": "一件木制物品",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将一件木制物品转化为黑木（darkwood）。黑木是一种魔法木材，重量减轻一半，硬度增加。该转化是永久的。",
    "material": "一小块黑木",
    "source": "3R"
  },
  {
    "id": "deflection",
    "nameEn": "Deflection",
    "nameZh": "偏转力场",
    "level": 7,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级或直到耗尽",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你被一个力场包围。该力场可以偏转最多100点伤害/级（最大700点）。伤害被力场吸收，直到力场耗尽。力场对物理和魔法伤害都有效。",
    "material": "一片水晶",
    "source": "3R"
  },
  {
    "id": "delayed_blast_fireball",
    "nameEn": "Delayed Blast Fireball",
    "nameZh": "延爆火球",
    "level": 7,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "长距",
    "target": "半径20尺散布（中心由你选定）",
    "duration": "5轮或直到引爆",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "如同火球术，但法术在你施放后5轮才爆炸（或者你可以以一个标准动作提前引爆）。伤害每轮延迟增加+1d6（最高20d6）。你可以移动法术Waiting zone的位置（以一个标准动作）。",
    "material": "一小团蝙蝠粪便和硫磺",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "destruction",
    "nameEn": "Destruction",
    "nameZh": "毁灭术",
    "level": 7,
    "school": "死灵系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要成功近战接触攻击。命中则目标受到10d6点伤害。如果目标HP降到0以下，则立即死亡（即死效果）。通过强韧检定则只受到5d6点伤害。⚠️ 邪恶法术。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "ethereal_jaunt",
    "nameEn": "Ethereal Jaunt",
    "nameZh": "以太跳跃",
    "level": 7,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你跳入以太位面1轮。之后你可以回到物质位面（以一个标准动作）。在以太位面时，你无法互动物质位面。",
    "source": "3R",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "finger_of_death",
    "nameEn": "Finger of Death",
    "nameZh": "死亡一指",
    "level": 7,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你对目标施展死亡能量。目标必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到3d6+1/级点负能量伤害（最大+15）。不死生物和异界生物不受该法术影响。",
    "material": "一摄骨粉",
    "source": "PHB",
    "classLevels": {
      "druid": 8,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "flame_strike",
    "nameEn": "Flame Strike",
    "nameZh": "烈焰连击",
    "level": 7,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "即时",
    "savingThrow": "反射过则半数",
    "spellResist": "可",
    "desc": "一道从天而降的火焰柱击中区域内的所有生物，造成1d6点神圣伤害+每等级1点（最大+15d6）。反射检定成功则伤害减半。邪恶界外生物受到双倍伤害。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "druid": 4
    },
    "divine": {
      "牧师": 5,
      "德鲁伊": 4
    }
  },
  {
    "id": "forcecage",
    "nameEn": "Forcecage",
    "nameZh": "力场牢笼",
    "level": 7,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "反射过则部分生效",
    "spellResist": "否",
    "desc": "你创造一个力场牢笼，困住其中的生物。牢笼是一个20尺立方的力场。被困的生物无法攻击或施法到牢笼外。通过的反射检定可以让生物被推出牢笼（但仍在范围内）。",
    "material": "一块小水晶",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "greater_restoration",
    "nameEn": "Greater Restoration",
    "nameZh": "高等复原",
    "level": 7,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "3轮",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你解除目标的所有负面等级、属性吸取、属性伤害、疯狂、目盲、耳聋等一切暂时或永久的负面效果。这是复原术的强化版。",
    "material": "价值5000gp的钻石粉尘",
    "source": "3R",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "greater_scrying",
    "nameEn": "Greater Scrying",
    "nameZh": "高等窥视",
    "level": 7,
    "school": "预言系",
    "components": "V, S, M, F",
    "castingTime": "1轮",
    "range": "见描述",
    "target": "",
    "duration": "1分钟/级",
    "savingThrow": "意志过则无效",
    "spellResist": "否",
    "desc": "如窥视法术，但距离无限且你可以看到、听到、闻到的。你还可以使用法术通过感应器（如同你自己在该位置）。该法术可以穿透大部分防护法术。",
    "material": "一个价值至少1000金币的水晶球",
    "source": "3R",
    "classLevels": {
      "bard": 6,
      "cleric": 7,
      "druid": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7,
      "德鲁伊": 7
    }
  },
  {
    "id": "greater_teleport",
    "nameEn": "Greater Teleport",
    "nameZh": "高等传送术",
    "level": 7,
    "school": "咒法系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "个人和近距",
    "target": "你自己和最多50磅/环的物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如同传送术，但你不需要熟悉目的地（「研究过」和「视野内」成功率提升）。你也不会错误传送（除非掷出天然1）。高等传送术是自发施法职业的最佳选择。",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "holy_word",
    "nameEn": "Holy Word",
    "nameZh": "圣言",
    "level": 7,
    "school": "塑能系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "0英尺",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个神圣的词汇，对邪恶生物造成以下效果之一（基于HD）：杀戮、石化、排斥或震懵。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "instant_summons",
    "nameEn": "Instant Summons",
    "nameZh": "瞬间召唤",
    "level": 7,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "见描述",
    "target": "一个物品",
    "duration": "永久，直到触发",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你对一个物品（重量不超过10磅/环）施展该法术，并保留一个小纸片（标记）。之后，无论物品在多远，你可以用一个标准动作（并销毁小纸片）将物品召唤到你手中（如同瞬间传送）。如果物品在异界或位面以外，法则无效。",
    "material": "价值1000gp的宝石（消耗）和一张小纸片",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "wish_limited",
    "nameEn": "Limited Wish",
    "nameZh": "有限祈愿术",
    "level": 7,
    "school": "通用系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "如祈愿术，但效果有限。你可以：复制一个6环或以下的法术（不需要材料成分）；治愈属性伤害；恢复HP（每等级1d6+7点）；移除负向等级（最多每等级1个）。没有祈愿术的风险。",
    "material": "价值至少5000金币的珠宝",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "mass_invisibility",
    "nameEn": "Mass Invisibility",
    "nameZh": "群体隐身术",
    "level": 7,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "1轮/级（见描述）",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如隐身术，但可影响多个目标。隐身状态持续到主动攻击或施展法术。受到伤害不会解除隐身。",
    "material": "一根睫毛",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "phase_door",
    "nameEn": "Phase Door",
    "nameZh": "相位门",
    "level": 7,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你在固体物体（墙、门、地面等）中创造一个相位通道。通道连接物体的一面和另一面的异次元空间。你可以穿过通道，其他人也可以（但每次只能一个人）。",
    "material": "一小块大理石",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "power_word_blind",
    "nameEn": "Power Word Blind",
    "nameZh": "律令目盲",
    "level": 7,
    "school": "惑控系",
    "components": "V",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "你说出一个魔法字，使目标目盲。效果取决于目标的HP：HP50或以下：永久目盲；HP51-100：目盲1d4+1轮；HP101-200：目盲1轮。HP201+：无效。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "power_word_true",
    "nameEn": "Power Word, True",
    "nameZh": "律令：真实",
    "level": 7,
    "school": "惑控系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个充满力量的词汇，使目标无法说谎。在法术持续时间内，目标只能说真话。",
    "source": "3R"
  },
  {
    "id": "prismatic_spray",
    "nameEn": "Prismatic Spray",
    "nameZh": "虹光喷射",
    "level": 7,
    "school": "塑能系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "0尺",
    "target": "锥状区域（扇状，锥底60尺，锥高60尺）",
    "duration": "见描述",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你喷射出一道七彩光芒。锥内每个生物受到一种随机效果（d8）：1=红（火灾20d6，反射过则减半）；2=橙（火灾10d6，反射过则减半）；3=黄（10d6电击，反射过则减半）；4=绿（毒，强韧过则死亡）；5=蓝（转为石头，强韧过则无效）；6=靛（疯狂，强韧过则无效）；7=紫（解离，强韧过则无效）；8=无效果。",
    "material": "一小袋彩虹色粉末",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "project_image",
    "nameEn": "Project Image",
    "nameZh": "投影术",
    "level": 7,
    "school": "幻术系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "一个幻象复制体",
    "duration": "1轮/等级(D)",
    "savingThrow": "意志过则不信(若互动)",
    "spellResist": "否",
    "desc": "你创造一个自己的半真实幻影。此幻影看起来完全像你，可以说话和做手势。你可以通过幻影的感官看和听。你可以从幻影的位置施放射程为触碰或更远的法术。幻影与本体之间不能超过中距范围。",
    "source": "PHB",
    "classLevels": {
      "bard": 6,
      "sorcererWizard": 7
    },
    "arcane": {
      "吟游诗人": 6,
      "术士/法师": 7
    }
  },
  {
    "id": "regenerate",
    "nameEn": "Regenerate",
    "nameZh": "再生术",
    "level": 7,
    "school": "死灵系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者失去的肢体立即再生。受术者以每轮1HP的速度恢复生命值（无上限）。再生术可以治愈致残效果。",
    "source": "3R",
    "classLevels": {
      "cleric": 7,
      "druid": 9
    },
    "divine": {
      "牧师": 7,
      "德鲁伊": 9
    }
  },
  {
    "id": "repulsion",
    "nameEn": "Repulsion",
    "nameZh": "排斥术",
    "level": 7,
    "school": "防护系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "以你为中心，半径10尺散布",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你排斥所有生物（你指定的阵营或生物类型）。被排斥的生物无法接近你（最低5尺）。通过意志检定则不受影响。",
    "material": "价值100gp的铅制护符",
    "source": "3R",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "resurrection",
    "nameEn": "Resurrection",
    "nameZh": "复活术",
    "level": 7,
    "school": "死灵系",
    "components": "V,S,M,DF",
    "castingTime": "1分钟",
    "range": "触碰",
    "target": "一具尸体或已死生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如同死者复活，但无体质惩罚，死亡时间无限制（除非灵魂已转生或拒绝返回）。受术者复活时HD和生命值全满，无体质损失。",
    "material": "一颗价值10000gp的钻石",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "reverse_gravity",
    "nameEn": "Reverse Gravity",
    "nameZh": "反向重力",
    "level": 7,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "区域内所有物体和生物受到反向重力影响（向上坠落）。所有生物和物体飞向天花板（速度60尺/轮）。如果撞击天花板，受到1d6点伤害/10尺坠落距离。",
    "material": "一块磁石",
    "source": "3R",
    "classLevels": {
      "druid": 8,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "sea_pain",
    "nameEn": "Sea Pain",
    "nameZh": "剧痛之海",
    "level": 7,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "1轮/环",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "目标受到剧痛（每轮1d6点体质伤害，通过强韧检定则只受到1d6点伤害）。如果目标失败两次，则陷入恐慌。",
    "source": "3R"
  },
  {
    "id": "sequester",
    "nameEn": "Sequester",
    "nameZh": "隐匿术",
    "level": 7,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "接触",
    "target": "一个生物或物体",
    "duration": "1天/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "目标变得不可见、无法被检测到、无法被定位。目标处于停滞状态（不老化、不需要食物/水/空气）。任何人如果特意搜索目标位置，可以进行意志检定以发现目标。",
    "material": "一小块钻石（价值5000金币）",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "simulacrum_lesser",
    "nameEn": "Simulacrum, Lesser",
    "nameZh": "次等拟像",
    "level": 7,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "12小时",
    "range": "近距",
    "target": "一个生物（拟像）",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一个生物的冰雪拟像。拟像拥有原生物所有能力和记忆的副本，但HP减半。拟像服从你的命令。你可以创造HD不超过你施法者等级一半的拟像。",
    "material": "冰雪（价值至少1000金币）",
    "source": "3R"
  },
  {
    "id": "spell_turning",
    "nameEn": "Spell Turning",
    "nameZh": "法术反转",
    "level": 7,
    "school": "防护系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "1轮/环 或 直到法术被触发",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者的法术抗力获得+8加值。并且，任何针对受术者的法术有总法术等级（向上取整）的几率反转到施法者身上。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "spell_turning_greater",
    "nameEn": "Spell Turning, Greater",
    "nameZh": "高等法术反转",
    "level": 7,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级或直到耗尽",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如法术反转，但你可以反转最多8个法术等级（例如两个4环法术，或八个1环法术）。被反转的法术会影响原施法者。",
    "material": "一面小镜子",
    "source": "3R"
  },
  {
    "id": "statue",
    "nameEn": "Statue",
    "nameZh": "雕像术",
    "level": 7,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将自己变为一尊石像。在石像形态下，你是虚体，免疫所有伤害和效果。你不能移动或行动，但可以感知周围环境。你可以随时结束法术恢复正常。",
    "material": "一撮石灰粉",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "summon_monster_7",
    "nameEn": "Summon Monster VII",
    "nameZh": "召唤怪物Ⅶ",
    "level": 7,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "召唤一个CR7或更低的生物为你作战。常见选择：1个冰元素（大型）、1个石巨人、1个成年铜龙等。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "summon_natures_ally_vii",
    "nameEn": "Summon Nature's Ally VII",
    "nameZh": "召唤自然盟友VII",
    "level": 7,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤非常强大的自然生物来为你战斗。可以召唤1个7级自然生物、1d3个6级生物或1d4+1个5级或更低的生物。",
    "source": "PHB",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "sunbeam",
    "nameEn": "Sunbeam",
    "nameZh": "阳光射线",
    "level": 7,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "60英尺",
    "duration": "1轮/等级",
    "savingThrow": "反射过",
    "spellResist": "是",
    "desc": "你创造出多道强烈的阳光射线。每轮你可以发射一道射线，对目标造成1d6点伤害/等级（最大15d6）。对不死生物和暗影生物造成双倍伤害。",
    "source": "3R",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "sunray",
    "nameEn": "Sunray",
    "nameZh": "阳炎射线",
    "level": 7,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "射线",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你发射一道强烈的阳光射线。射线对目标造成1d6点伤害/等级（最多25d6）。对不死生物造成双倍伤害。此外，所有在射线30尺内的生物如同受到目盲术效果（反射豁免避免），持续1d3轮。",
    "source": "PHB"
  },
  {
    "id": "symbol_of_stunning",
    "nameEn": "Symbol of Stunning",
    "nameZh": "震慑符记",
    "level": 7,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时震慑60尺内的所有生物1d6轮。被震慑的生物无法行动，AC受-2罚值，失去敏捷加值。",
    "material": "价值5000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "symbol_of_weakness",
    "nameEn": "Symbol of Weakness",
    "nameZh": "虚弱符记",
    "level": 7,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时使60尺内的所有生物虚弱（如同衰弱射线），力量受3d6点伤害。",
    "material": "价值5000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "teleport",
    "nameEn": "Teleport",
    "nameZh": "传送术",
    "level": 7,
    "school": "咒法系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "个人和近距",
    "target": "你自己和最多50磅/环的物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你瞬间传送到一个目的地。你需要有对目的地的「熟悉」程度：1=偶然见过（65%成功）；2=见过两次或以上（85%成功）；3=非常熟悉（95%成功）；4=研究过（99%成功）；5=视野内（100%成功）；6=与框架锁定（100%成功）。失败可能导致错误传送（d100：01-50=轻微偏差1d10×1d10尺；51-95=严重偏差1d10×1d10×10尺；96-100=意外异界传送）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "transmute_metal_to_wood",
    "nameEn": "Transmute Metal to Wood",
    "nameZh": "金化木",
    "level": 7,
    "school": "变化系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "中距 (100尺+10尺/环)",
    "target": "区域内的金属物品",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "区域内所有金属物品变为木质。魔法金属物品可以进行豁免来抵抗。武器变为木质后伤害减少（如长剑1d8变为1d6），护甲AC降低2点。该变化是永久的。",
    "source": "PHB",
    "classLevels": {
      "druid": 7
    },
    "divine": {
      "德鲁伊": 7
    }
  },
  {
    "id": "unholy_word",
    "nameEn": "Unholy Word",
    "nameZh": "邪言术",
    "level": 7,
    "school": "塑能系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "40尺扩散",
    "target": "区域内的非邪恶生物",
    "duration": "见描述",
    "savingThrow": "无或意志过则无效",
    "spellResist": "是",
    "desc": "你说出一个邪恶词语。区域内的非邪恶生物受到影响：HD≤施法者等级的生物被杀死；HD≤施法者等级+10的生物被震慑1d10轮；HD更高的生物被减速1d10轮（意志豁免避免非死亡效果）。善良阵营的召唤生物被驱逐。",
    "source": "PHB"
  },
  {
    "id": "vision",
    "nameEn": "Vision",
    "nameZh": "通晓传奇",
    "level": 7,
    "school": "预言系",
    "components": "V, S, M, XP",
    "castingTime": "1小时",
    "range": "见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你向更高力量询问关于某个传说人物、地点或物品的信息（类似通晓传奇，但以幻象形式呈现）。你会看到与该主题相关的重要事件的幻象片段。消耗100XP。",
    "material": "熏香（价值250gp）",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "waves_of_exhaustion",
    "nameEn": "Waves of Exhaustion",
    "nameZh": "力竭波",
    "level": 7,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "锥形区域内所有活物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "负能量波从你手中涌出。区域内所有活物立即变为力竭状态。已经力竭的生物不受进一步影响。该法术对不死生物无效。",
    "material": "一滴汗水",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "word_of_chaos",
    "nameEn": "Word of Chaos",
    "nameZh": "混乱真言",
    "level": 7,
    "school": "惑控系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "40尺",
    "target": "所有在范围内的守序生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个混乱真言。守序生物受到以下效果（基于HD）：HD9或更少→立即死亡；HD10-18→目盲、耳聋、目盲1d4轮；HD19+→目盲1轮。守序生物可以通过强韧检定来减半效果。",
    "source": "3R",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "animal_shapes",
    "nameEn": "Animal Shapes",
    "nameZh": "动物变化",
    "level": 8,
    "school": "变化系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "每等级1个自愿生物，相互之间30尺内",
    "duration": "1小时/等级(D)",
    "savingThrow": "无",
    "spellResist": "是（无害）",
    "desc": "此法术让多个自愿生物变形为同一种动物。与变形术不同，受术者保留自己的HD、HP和阵营，但获得新形态的力量、敏捷、体质、天生护甲和特殊攻击。可选的动物包括：猿、熊、野猪、猎豹、鳄鱼、狗、鹰、狮、蜥蜴、豹、鼠、猫头鹰、蛇、狼等。",
    "source": "PHB",
    "classLevels": {
      "druid": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "antipathy",
    "nameEn": "Antipathy",
    "nameZh": "厌恶术",
    "level": 8,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "",
    "duration": "1天/级（见描述）",
    "savingThrow": "意志过则无效（见描述）",
    "spellResist": "可（见描述）",
    "desc": "你使一个区域或物体对某类生物产生厌恶。该类生物必须成功意志检定，否则会尽可能远离该区域。如果被迫进入区域，会受到恶心效果。该法术与同情术互斥。",
    "material": "一块磁铁和一根铁针",
    "source": "3R",
    "classLevels": {
      "druid": 9,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "binding",
    "nameEn": "Binding",
    "nameZh": "束缚术",
    "level": 8,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "1分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个活物",
    "duration": "可变",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你创造强大的魔法束缚来禁锢一个生物。有多种形式：锁链（生物被束缚）、蛰眠（生物昏迷数年）、变形（生物变小封入宝石）、最小化（类似监牢）、等。",
    "material": "特殊材料（根据形式不同）",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "chaos_bolt_mass",
    "nameEn": "Chaos Bolt, Mass",
    "nameZh": "混乱箭（群体）",
    "level": 8,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "远距（400英尺+40英尺/等级）",
    "duration": "瞬时",
    "savingThrow": "反射过",
    "spellResist": "是",
    "desc": "你发射多道混乱能量的射线，每道对一个目标造成1d8点伤害/等级（最大15d8）。你可以指定最多一个目标/等级。",
    "source": "3R"
  },
  {
    "id": "cloak_of_chaos",
    "nameEn": "Cloak of Chaos",
    "nameZh": "混乱护罩",
    "level": 8,
    "school": "防护系",
    "components": "V,S,F",
    "castingTime": "1标准动作",
    "range": "20尺",
    "target": "以你为中心的20尺半径内每等级1个生物",
    "duration": "1轮/等级(D)",
    "savingThrow": "见描述",
    "spellResist": "是（无害）",
    "desc": "此法术产生随机颜色的光芒保护受术者。效果包括：对守序法术+4偏斜AC加值和+4抗力豁免加值；对守序生物的AC+4偏斜加值；法术免疫25%。此外，攻击受术者的守序生物需通过意志豁免否则被困惑1轮。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "clone",
    "nameEn": "Clone",
    "nameZh": "克隆术",
    "level": 8,
    "school": "死灵系",
    "components": "V,S,M,DF",
    "castingTime": "10分钟",
    "range": "0尺",
    "target": "一小片尸体组织",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你用一小片尸体组织（如一滴血、一根头发）制造一个成年克隆体。克隆体需要2d4个月成长。当原身死亡时，灵魂自动转入克隆体（如果克隆体已完成成长）。克隆体拥有原身的所有记忆和能力（但失去死前最后一刻的记忆）。",
    "material": "价值1000gp的培养缸和价值1000gp的每个HD的养分",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "control_plants",
    "nameEn": "Control Plants",
    "nameZh": "控制植物",
    "level": 8,
    "school": "惑控系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "远距 (400尺+40尺/环)",
    "target": "一个植物生物或每环一个HD的植物生物",
    "duration": "1分钟/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你控制一个或多个植物生物的行为。受控植物会执行你指定的任何行动（在它们能力范围内），包括攻击你的敌人。植物会服从命令直到法术结束。",
    "source": "PHB",
    "classLevels": {
      "druid": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "create_undead_greater",
    "nameEn": "Create Greater Undead",
    "nameZh": "创造强力不死生物",
    "level": 8,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一具尸体",
    "duration": "即时/永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如同创造不死生物，但你可以创造更强大的不死生物，如吸血鬼、巫妖等。",
    "material": "一块黑曜石和一滴活人血液",
    "source": "3R",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "demand",
    "nameEn": "Demand",
    "nameZh": "传讯术",
    "level": 8,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "见描述",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你如同发送术一样向远处的目标发送信息，但附带一个暗示术效果。目标可以回复信息（如同传讯术）。暗示效果使目标倾向于按照你的信息行事。",
    "material": "一小段铜线",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "demand_death",
    "nameEn": "Demand Death",
    "nameZh": "要求死亡",
    "level": 8,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你要求目标死亡。目标必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到10d6点伤害。该法术对HD20或以上的生物无效。",
    "material": "一撮骨粉",
    "source": "3R"
  },
  {
    "id": "dimensional_lock",
    "nameEn": "Dimensional Lock",
    "nameZh": "次元锁定",
    "level": 8,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1天/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你锁定区域，阻止所有传送（传送术、任意门、异界传送等）和异次元旅行（星界投射、虚幻游走等）。该法术不影响 already in the area 的生物离开。",
    "material": "一块玫瑰石英",
    "source": "3R",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "discern_lies",
    "nameEn": "Discern Lies",
    "nameZh": "辨知谎言",
    "level": 8,
    "school": "预言系",
    "components": "V, S, F",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "你可以看穿目标的所有谎言。如果目标说谎，你会立即知道。你也可以知道目标是真相信还是假装相信。该法术可以看穿所有非神力欺骗效果。",
    "source": "3R",
    "classLevels": {
      "cleric": 4,
      "paladin": 3
    },
    "divine": {
      "牧师": 4,
      "圣武士": 3
    }
  },
  {
    "id": "discern_location",
    "nameEn": "Discern Location",
    "nameZh": "定位术",
    "level": 8,
    "school": "预言系",
    "components": "V, S",
    "castingTime": "1轮",
    "range": "无限",
    "target": "一个生物或物体",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以精确确定任何一个生物或物体的位置，无论距离多远，甚至跨越位面。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "earthquake",
    "nameEn": "Earthquake",
    "nameZh": "地震术",
    "level": 8,
    "school": "塑能系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "半径40尺散布，以你选定点为起始",
    "duration": "1轮",
    "savingThrow": "见描述",
    "spellResist": "否",
    "desc": "你制造一场剧烈地震。地震中心40尺半径内地面剧烈摇晃。效果：1=地面裂开（深陷危害）；2=建筑倒塌（造成3d6点伤害）；3=地面变成困难地形；4=石质地面隆起（障碍）；5d6点钝击伤害每轮对区域内所有生物。地震术在户外使用效果更佳。在地下使用时可能引致洞穴坍塌。",
    "source": "3R",
    "classLevels": {
      "cleric": 8,
      "druid": 8
    },
    "divine": {
      "牧师": 8,
      "德鲁伊": 8
    }
  },
  {
    "id": "fear_mass",
    "nameEn": "Fear, Mass",
    "nameZh": "群体恐惧术",
    "level": 8,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如恐惧术，但影响区域内所有生物。目标如果失败意志检定，会恐慌逃窜（如同恐慌状态）。",
    "material": "一块白狗的牙齿",
    "source": "3R"
  },
  {
    "id": "fire_storm",
    "nameEn": "Fire Storm",
    "nameZh": "烈焰风暴",
    "level": 8,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "半径20尺散布（两个）",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "是",
    "desc": "你在两个位置各制造一场烈焰风暴。每个风暴内所有生物受到1d6点火焰伤害每施法者等级（最高20d6）。通过反射检定则伤害减半。烈焰风暴可以熄灭火焰、点燃可燃物。",
    "source": "3R",
    "classLevels": {
      "cleric": 8,
      "druid": 7
    },
    "divine": {
      "牧师": 8,
      "德鲁伊": 7
    }
  },
  {
    "id": "glasseel",
    "nameEn": "Glasseel",
    "nameZh": "镜钢术",
    "level": 8,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "一件金属武器或最多20尺立方的金属物体",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将金属物体转化为镜钢（一种魔法金属）。镜钢的硬度为20，HP每寸100点。金属武器获得+5增强加值。镜钢对顺利武器和顺利生物造成额外伤害。",
    "material": "一小块镜钢",
    "source": "3R"
  },
  {
    "id": "planar_ally_greater",
    "nameEn": "Greater Planar Ally",
    "nameZh": "高等异界盟友",
    "level": 8,
    "school": "咒法系",
    "components": "V, S, XP",
    "castingTime": "10分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "最多三个异界生物，总计不超过18HD",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你请求你信仰的神灵派遣强大的异界生物来帮助你。报酬更高（每HD500gp），但可以召唤更强大的盟友。神灵可能派遣一个18HD的强大生物或三个较弱的生物。消耗500XP。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "hammer_of_the_gods",
    "nameEn": "Hammer of the Gods",
    "nameZh": "神之锤",
    "level": 8,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "强韧过则半数",
    "spellResist": "可",
    "desc": "你召唤一把巨大的魔法锤打击目标，造成1d6点伤害+每等级1点（最大+20d6）。通过的强韧检定将伤害减半。邪恶外位面生物受到双倍伤害。",
    "source": "3R"
  },
  {
    "id": "holy_aura",
    "nameEn": "Holy Aura",
    "nameZh": "神圣灵光",
    "level": 8,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "见描述",
    "spellResist": "可",
    "desc": "你散发神圣灵光。效果：所有邪恶生物受到光亮伤害（每轮1d6点）；所有善良生物获得+4神圣加值AC和豁免；所有位面旅行法术被阻止。邪恶外位面生物震慑1d4轮（意志过则无效）。",
    "source": "3R",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "horn_of_valhalla",
    "nameEn": "Horn of Valhalla",
    "nameZh": "瓦尔基里号角",
    "level": 8,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个瓦尔基里战士（Barbarian 10级）来协助你。召唤的战士服从你的命令，擅长近战。号角可以在战斗中吹响（自由动作），召唤额外的战士。",
    "material": "一个号角（价值至少5000金币）",
    "source": "3R"
  },
  {
    "id": "horrid_wilting",
    "nameEn": "Horrid Wilting",
    "nameZh": "恐怖枯萎",
    "level": 8,
    "school": "死灵系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "数个生物（所有目标都在范围内）",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你使目标枯萎。每个目标受到1d6点伤害每施法者等级（最高25d6）。对植物生物和外来生物造成双倍伤害。该法术对水元素生物造成即时死亡。",
    "material": "一小撮干枯的树叶",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "incendiary_cloud",
    "nameEn": "Incendiary Cloud",
    "nameZh": "焚云术",
    "level": 8,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "反射过则半数",
    "spellResist": "可",
    "desc": "你创造出一片燃烧的云雾。云中的生物每轮受到3d6点火焰伤害。云可以被风吹散。反射检定成功则伤害减半。",
    "material": "一小瓶燃油",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "inflict_critical_wounds_mass",
    "nameEn": "Inflict Critical Wounds, Mass",
    "nameZh": "造成严重伤（群体）",
    "level": 8,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个或对于目标",
    "duration": "瞬时",
    "savingThrow": "意志过",
    "spellResist": "是",
    "desc": "如同造成严重伤，但你可以影响多个目标。每个目标受到4d8点伤害+1/等级（最大+25）。",
    "source": "3R",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "iron_body",
    "nameEn": "Iron Body",
    "nameZh": "铁身躯",
    "level": 8,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "个人",
    "target": "自己",
    "duration": "1分钟/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的身体变成纯铁。你获得伤害减免15/挥砍，对毒素、疾病和Critical Hit免疫。但你的移动速度减半。",
    "material": "一块铁",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "cure_critical_wounds_mass",
    "nameEn": "Mass Cure Critical Wounds",
    "nameZh": "群体治疗危重伤",
    "level": 8,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "你所选的最多每等级1个接触的生物，彼此相距不超过30尺",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "可（无害）",
    "desc": "如治疗极重创，但可影响多个目标。每个受术者恢复4d8+1/级HP（最大+20）。该法术可以治疗不死生物造成的伤害。",
    "source": "3R",
    "classLevels": {
      "cleric": 8,
      "druid": 9
    },
    "divine": {
      "牧师": 8,
      "德鲁伊": 9
    }
  },
  {
    "id": "maze",
    "nameEn": "Maze",
    "nameZh": "迷宫术",
    "level": 8,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你将目标放逐到一个无底的力场迷宫中。目标需要进行DC20的智力检定才能在一轮内找到出口；否则每失败一次，需要等待1d4轮后再尝试。一旦目标逃出迷宫，它重新出现在你附近（30尺内）。迷宫术对智力属性为-或低的生物无效（它们立即逃出）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "moment_of_prescience",
    "nameEn": "Moment of Prescience",
    "nameZh": "预见时刻",
    "level": 8,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "最大1轮/级或直到触发",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得短暂的未来预见。在一次攻击、豁免、技能检定或属性检定前，你可以激活该法术获得+10洞察加值。该法术只能使用一次。",
    "material": "一张写有问题的纸条",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "planar_ally_elder",
    "nameEn": "Planar Ally, Elder",
    "nameZh": "高阶位面盟友",
    "level": 8,
    "school": "咒法系",
    "components": "V, S, M, DF",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如位面盟友，但可以召唤更强大的生物（20HD或更少）。你必须提供价值至少5000金币的祭品。召唤的生物服务时间：每1000金币价值1轮。",
    "material": "价值至少5000金币的祭品",
    "source": "3R"
  },
  {
    "id": "polymorph_any_object",
    "nameEn": "Polymorph Any Object",
    "nameZh": "变形万物",
    "level": 8,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物或物体",
    "duration": "见下文",
    "savingThrow": "强韧过",
    "spellResist": "是",
    "desc": "你将目标变成几乎任何其他生物或物体。持续时间取决于目标与新形态之间的相似程度。",
    "material": "一块象牙和一块乌龟壳",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "power_word_stun",
    "nameEn": "Power Word Stun",
    "nameZh": "律令震慑",
    "level": 8,
    "school": "惑控系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个魔法字，使目标震慑。HD11-16的生物震慑1d4轮；HD6-10的生物震慑2d4轮；HD5或更少的生物震慑3d4轮。言灵法术无视法术抗力（但有例外）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "prismatic_wall",
    "nameEn": "Prismatic Wall",
    "nameZh": "虹光墙",
    "level": 8,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "10分钟/级",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "你创造一道彩虹色的墙。墙有七层颜色，每层有不同的效果：红（1d6火伤害+目盲）、橙（2d6酸伤害+目眩）、黄（3d6电伤害+震慑）、绿（4d6毒伤害+即死豁免）、蓝（5d6即死豁免）、靛（放逐至异界）、紫（解离）。必须从一侧穿透所有层。",
    "material": "一块棱镜",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "protection_spells",
    "nameEn": "Protection from Spells",
    "nameZh": "防法术",
    "level": 8,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/等级",
    "savingThrow": "意志过（无害）",
    "spellResist": "是（无害）",
    "desc": "受术者对法术获得抗力。所有针对受术者的法术都需要进行施法者等级检定才能成功。",
    "material": "价值500金币的钻石",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "repel_metal",
    "nameEn": "Repel Metal",
    "nameZh": "排斥金属",
    "level": 8,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "0尺",
    "target": "",
    "duration": "1分钟/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "所有金属物品和金属生物被排斥离开你。金属武器不能命中你。金属护甲失去AC加值。你可以在金属表面行走（如同行走于空气）。",
    "source": "3R"
  },
  {
    "id": "repel_metal_or_stone",
    "nameEn": "Repel Metal or Stone",
    "nameZh": "驱金术",
    "level": 8,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "60尺",
    "target": "60尺线形区域",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你创造出一道排斥金属和石头的波浪。金属和石制物品被推离你。穿戴金属护甲的生物被推回或被脱去护甲。石制结构（如石墙）会受到6d6点伤害。",
    "source": "PHB",
    "classLevels": {
      "druid": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "reverse_metamagic",
    "nameEn": "Reverse Metamagic",
    "nameZh": "反转超魔",
    "level": 8,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "见描述",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以反转一个指向你的超魔法术。当有人对你施展超魔法术时，你可以以一个即用法术动作施展反转超魔，将超魔效果反转回原施法者。",
    "material": "一块水晶",
    "source": "3R"
  },
  {
    "id": "screen",
    "nameEn": "Screen",
    "nameZh": "障幕",
    "level": 8,
    "school": "幻术系",
    "components": "V, S",
    "castingTime": "10分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "30立方英尺/环",
    "duration": "24小时",
    "savingThrow": "无或意志过则识破（如有互动）",
    "spellResist": "否",
    "desc": "你创造一个幻术屏障，使区域看起来与真实情况完全不同。你设定一个场景（如空房间、正常走廊等），所有观看者都会看到该幻象。施法者等级检定失败的观看者不会被幻术欺骗。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "serten_s_spell_resistance",
    "nameEn": "Serten's Spell Resistance",
    "nameZh": "瑟顿法术抗力",
    "level": 8,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "1轮/级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "受术者获得法术抗力（SR）= 15+你的施法者等级调整值。该法术抗力可以拒绝其他法术的影响。",
    "material": "一小块水晶",
    "source": "3R"
  },
  {
    "id": "summon_monster_8",
    "nameEn": "Summon Monster VIII",
    "nameZh": "召唤怪物Ⅷ",
    "level": 8,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个CR8或更低的生物为你作战。常见选择：1个大型冰元素、1个石巨人、1个成年金龙等。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "summon_natures_ally_viii",
    "nameEn": "Summon Nature's Ally VIII",
    "nameZh": "召唤自然盟友VIII",
    "level": 8,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤极为强大的自然生物来为你战斗。可以召唤1个8级自然生物、1d3个7级生物或1d4+1个6级或更低的生物。",
    "source": "PHB",
    "classLevels": {
      "druid": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "sunburst",
    "nameEn": "Sunburst",
    "nameZh": "阳光爆发",
    "level": 8,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "长距",
    "target": "",
    "duration": "即时",
    "savingThrow": "反射过则半数",
    "spellResist": "可",
    "desc": "你释放出一道强烈的阳光爆发。区域内所有生物受到1d6点光耀伤害/级（最大20d6）。反射检定成功则伤害减半。不死生物和黑暗生物受到双倍伤害，并且目盲1d4轮。",
    "material": "一块太阳石水晶",
    "source": "PHB",
    "classLevels": {
      "druid": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "symbol_of_death",
    "nameEn": "Symbol of Death",
    "nameZh": "死亡符记",
    "level": 8,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你创造一个隐藏的魔法符记，当被触发时杀死60尺内HP150或以下的所有生物（通过强韧检定者不受影响）。HP超过150的生物不受影响。",
    "material": "价值5000gp的水银、磷和蛋白石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "sympathy",
    "nameEn": "Sympathy",
    "nameZh": "同情术",
    "level": 8,
    "school": "惑控系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "",
    "duration": "1天/级（见描述）",
    "savingThrow": "意志过则无效（见描述）",
    "spellResist": "可（见描述）",
    "desc": "你使一个区域或物体对某类生物产生同情。该类生物必须成功意志检定，否则会被吸引到该区域（如同魅力法术）。如果被迫离开区域，会获得恶心效果。该法术与厌恶术互斥。",
    "material": "一块磁铁和一根铁针",
    "source": "PHB",
    "classLevels": {
      "druid": 9,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "trap_the_soul",
    "nameEn": "Trap the Soul",
    "nameZh": "锢魂术",
    "level": 8,
    "school": "咒法系",
    "components": "V, S, M (或 V, S)",
    "castingTime": "1标准动作或10分钟",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你将一个生物的灵魂和身体一起封入一颗宝石中。被困住的生物保持静止状态，不会死亡也不会衰老。有两种方式：触发法（目标触发宝石）或强制法（施法者触碰目标）。",
    "material": "一颗宝石（每HD价值1000gp）",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "unholy_aura",
    "nameEn": "Unholy Aura",
    "nameZh": "邪秽灵光",
    "level": 8,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "见描述",
    "spellResist": "可",
    "desc": "你散发邪恶意光。效果：所有善良生物受到黑暗伤害（每轮1d6点）；所有邪恶生物获得+4阴影加值AC和豁免；所有位面旅行法术被阻止。善良外位面生物震慑1d4轮（意志过则无效）。",
    "source": "3R",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "whirlwind",
    "nameEn": "Whirlwind",
    "nameZh": "旋风术",
    "level": 8,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "反射过则半数",
    "spellResist": "否",
    "desc": "你创造一个旋风。旋风可以移动（每轮60尺），吸入并抛掷生物和物体。被吸入的生物受到2d6点钝击伤害/轮，并被抛掷30尺。",
    "material": "一小片旋风图样",
    "source": "3R",
    "classLevels": {
      "druid": 8
    },
    "divine": {
      "德鲁伊": 8
    }
  },
  {
    "id": "astral_projection",
    "nameEn": "Astral Projection",
    "nameZh": "星界投射",
    "level": 9,
    "school": "死灵系",
    "components": "V,S,M",
    "castingTime": "30分钟",
    "range": "触碰",
    "target": "你和最多八名自愿生物",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将你和队友的灵魂投射到星界。你们的肉体留在原地（处于沉睡状态）。在星界中，你们可以旅行到其他位面。如果你们的星界体在某处死亡，你们会醒来回到肉体（肉体受到2d6点属性伤害）。如果肉体在你们离开期间死亡，你们的灵魂被困在星界（直到有人复活你们的肉体）。",
    "material": "价值1000gp的珠宝（每人）",
    "source": "PHB",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "edge_of_ultimate",
    "nameEn": "Edge of Ultimate",
    "nameZh": "终极之锋",
    "level": 9,
    "school": "塑能系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "接触",
    "target": "一件手持锋利武器",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你的武器获得终极锋利。攻击造成最大伤害（掷骰結果取最大值）。武器获得+5增强加值，并且可以切割任何材料（硬度30以下）。",
    "material": "一块钻石（价值至少1000金币）",
    "source": "3R"
  },
  {
    "id": "elemental_swarm",
    "nameEn": "Elemental Swarm",
    "nameZh": "元素虫群",
    "level": 9,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤出至多八个元素为你作战（每种元素最多两个）。元素出现后攻击你的敌人。你可以指定战术（如「防守」「攻击最强敌人」等）。元素虫群需要10分钟施展（较通常1轮长）。",
    "source": "3R",
    "classLevels": {
      "druid": 9
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "elemental_swarm_air",
    "nameEn": "Elemental Swarm (Air)",
    "nameZh": "元素蜂群（气）",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "10轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤出多个气元素为你作战。你可以召唤最多8个气元素，或1个大型气元素。",
    "source": "3R"
  },
  {
    "id": "elemental_swarm_earth",
    "nameEn": "Elemental Swarm (Earth)",
    "nameZh": "元素蜂群（土）",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "10轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤出多个土元素为你作战。你可以召唤最多8个土元素，或1个大型土元素。",
    "source": "3R"
  },
  {
    "id": "elemental_swarm_fire",
    "nameEn": "Elemental Swarm (Fire)",
    "nameZh": "元素蜂群（火）",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "10轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤出多个火元素为你作战。你可以召唤最多8个火元素，或1个大型火元素。",
    "source": "3R"
  },
  {
    "id": "elemental_swarm_water",
    "nameEn": "Elemental Swarm (Water)",
    "nameZh": "元素蜂群（水）",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "duration": "10轮/等级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤出多个水元素为你作战。你可以召唤最多8个水元素，或1个大型水元素。",
    "source": "3R"
  },
  {
    "id": "energy_drain",
    "nameEn": "Energy Drain",
    "nameZh": "能量吸取",
    "level": 9,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一道射线",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "你需要进行远程接触攻击。命中则目标受到2d4个负等级。每轮结束时，目标需要通过强韧检定否则负等级成为永久（失去1点HD和对应属性、攻击加值、豁免加值等）。负等级可以通过复原术或等价效果移除。",
    "source": "3R",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "foresight",
    "nameEn": "Foresight",
    "nameZh": "预知术",
    "level": 9,
    "school": "预言系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "10分钟/环或直到触发",
    "savingThrow": "意志过则无害",
    "spellResist": "是（无害）",
    "desc": "受术者获得预知能力：在受到攻击之前获得警报（可以获得直觉加值+2 AC和+2反射豁免），并且不会措手不及。预知术也可以让受术者重新投掷一次失败的攻击检定或豁免检定（每天一次）。",
    "material": "一颗价值1000gp的翡翠",
    "source": "PHB",
    "classLevels": {
      "druid": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "freedom",
    "nameEn": "Freedom",
    "nameZh": "自由术",
    "level": 9,
    "school": "咒法系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你立即解除目标身上的所有束缚效果：定身、禁锢、缠绕、蛛网、异界束缚、指使术、放逐术等。自由术可以解除任何将目标固定在某处的法术。它无法解除对物品或地点的禁锢。",
    "material": "价值500gp的琥珀块",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "gate",
    "nameEn": "Gate",
    "nameZh": "传送门",
    "level": 9,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你打开一道连接异界的传送门。你可以：1=召唤一个特定异界生物（通过名字或描述）；2=将你自己或队友传送到异界；3=将异界生物传送到你面前。门宽约20尺。异界生物需要通过魅力检定（DC等于你的施法者等级+5）否则被迫为你服务（最多1天/环）。",
    "source": "3R",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "heal_mass",
    "nameEn": "Heal, Mass",
    "nameZh": "群体治疗术",
    "level": 9,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物以及最多每施法者等级一个盟友（所有目标都在范围内）",
    "duration": "立即",
    "savingThrow": "意志过则无害；见描述",
    "spellResist": "是（无害）",
    "desc": "如同治疗术，但可以影响多个目标。每个目标治愈全部伤害（恢复健康值全满）并解除所有负面状态。",
    "source": "3R",
    "classLevels": {
      "cleric": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "implosion",
    "nameEn": "Implosion",
    "nameZh": "内爆术",
    "level": 9,
    "school": "死灵系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "强韧过则无效",
    "spellResist": "是",
    "desc": "目标需要通过强韧检定否则死亡（即死效果）。如果通过检定，则受到1d6点伤害每施法者等级（最高25d6）。对构装生物、不死生物、元素生物无效。",
    "source": "PHB",
    "classLevels": {
      "cleric": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "imprisonment",
    "nameEn": "Imprisonment",
    "nameZh": "禁锢术",
    "level": 9,
    "school": "防护系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "触碰",
    "target": "触碰的生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你触碰一个生物并将其永远囚禁在地底深处。被禁锢的生物不会死亡、不会衰老、不需要食物和水。只有自由术（在禁锢地点施放）才能释放被囚者。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "invulnerability",
    "nameEn": "Invulnerability",
    "nameZh": "无敌术",
    "level": 9,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你获得对一切伤害的绝对免疫（包括即死效果、属性吸取、解离等）。你仍然可以受到非伤害效果的影响（如魅惑、胁迫、放逐等）。",
    "material": "一块钻石（价值至少5000金币）",
    "source": "3R"
  },
  {
    "id": "mass_heal",
    "nameEn": "Mass Heal",
    "nameZh": "群体治疗术（完全）",
    "level": 9,
    "school": "咒法系",
    "components": "V, S",
    "castingTime": "单动作",
    "range": "近距",
    "target": "你所选的最多每等级1个生物，彼此相距不超过30尺",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "可（无害）",
    "desc": "如治疗术（完全），但可影响多个目标。每个受术者完全治愈（如同治疗术）。该法术可以治疗多个生物，非常有用于战后恢复。",
    "source": "3R"
  },
  {
    "id": "meteor_swarm",
    "nameEn": "Meteor Swarm",
    "nameZh": "流星雨",
    "level": 9,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "长距",
    "target": "四个目标位置（每个半径40尺散布）",
    "duration": "立即",
    "savingThrow": "反射过则减半",
    "spellResist": "否",
    "desc": "你召唤四颗流星撞击四个目标位置（所有位置都在范围内）。每颗流星造成1d6点火焰伤害每施法者等级（最高40d6）对区域内所有生物。通过反射检定则伤害减半。流星雨可以造成大规模破坏，并对接触到的建筑物造成伤害。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "miracle",
    "nameEn": "Miracle",
    "nameZh": "奇迹术",
    "level": 9,
    "school": "通用系",
    "components": "V,S,XP",
    "castingTime": "1标准动作",
    "range": "见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "奇迹术是神术版许愿术。你可以请求你的神祇显示奇迹：复活死者、治疗所有伤害、改变天气、摧毁敌人等。你的神祇可以做几乎任何事（DM判断）。如果你是邪教徒或神祇不满，则可能拒绝。代价：每天可以施展一次无代价。额外的奇迹需要奉献5000gp的祭品或损失5000XP。",
    "source": "3R",
    "classLevels": {
      "cleric": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "miracle_luck",
    "nameEn": "Miracle (Luck)",
    "nameZh": "奇迹（幸运）",
    "level": 9,
    "school": "塑能系",
    "components": "V, S, DF, XP",
    "castingTime": "标准动作",
    "range": "见下文",
    "target": "见下文",
    "duration": "见下文",
    "savingThrow": "见下文",
    "spellResist": "见下文",
    "desc": "你祈求神祇施展一个奇迹。此技法术可以实现几乎任何效果，从复活死者到改变现实。",
    "source": "3R"
  },
  {
    "id": "overwhelming_presence",
    "nameEn": "Overwhelming Presence",
    "nameZh": "压倒性存在",
    "level": 9,
    "school": "惑控系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "40尺",
    "target": "所有在范围内的敌人",
    "duration": "1轮/环",
    "savingThrow": "意志过则无效",
    "spellResist": "是",
    "desc": "你散发出压倒性的神圣/邪恶存在。范围内所有敌人需要通过意志检定否则慌忙撤退（如同恐惧法术）。通过意志检定的敌人感到战栗（攻击检定-2、伤害-2）。",
    "source": "3R"
  },
  {
    "id": "true_polymorph",
    "nameEn": "Polymorph Any Object",
    "nameZh": "完全变形",
    "level": 9,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距 (25尺+5尺/2环)",
    "target": "一个生物或一件非魔法物品",
    "duration": "可变",
    "savingThrow": "强韧过则无效或意志过则无效",
    "spellResist": "是",
    "desc": "你可以将任何生物或物体变为任何其他生物或物体。持续时间取决于变化的相似程度（从几分钟到永久不等）。该法术是最强大的变形法术之一。",
    "material": "水银、阿拉伯胶和烟灰",
    "source": "PHB"
  },
  {
    "id": "power_word_heal",
    "nameEn": "Power Word Heal",
    "nameZh": "力量言语：治疗",
    "level": 9,
    "school": "咒法系",
    "components": "V",
    "castingTime": "单动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "即时",
    "savingThrow": "无",
    "spellResist": "可（无害）",
    "desc": "你说出一个魔法字，治疗目标。效果取决于目标的缺失HP：缺失150HP或更少：完全治愈；缺失151-300：恢复150HP；缺失301+：无效。该法术也可以移除所有属性伤害和负向等级。",
    "source": "3R"
  },
  {
    "id": "power_word_kill",
    "nameEn": "Power Word Kill",
    "nameZh": "律令死亡",
    "level": 9,
    "school": "惑控系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个魔法字，使目标立即死亡。HD50或更少的生物立即死亡。HD51-100的生物受到3d6点体质伤害。HD101+的生物不受影响。言灵法术无视法术抗力（但有例外）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "power_word_justify",
    "nameEn": "Power Word, Justify",
    "nameZh": "律令：正义",
    "level": 9,
    "school": "惑控系",
    "components": "V",
    "castingTime": "标准动作",
    "range": "近距（25英尺+5英尺/2等级）",
    "target": "一个生物",
    "duration": "瞬时",
    "savingThrow": "无",
    "spellResist": "是",
    "desc": "你说出一个充满力量的词汇，使目标被正义能量震击。目标受到10d6点伤害，如果生命值降至0以下，立即死亡。",
    "source": "3R"
  },
  {
    "id": "prismatic_sphere",
    "nameEn": "Prismatic Sphere",
    "nameZh": "虹光法球",
    "level": 9,
    "school": "塑能系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "10尺",
    "target": "你自己",
    "duration": "10分钟/环",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你被一个七彩球状屏障包围。任何生物试图触碰你或穿过屏障会受到七种效果之一（随机，d8）：红（火，20d6；反射过则减半）；橙（酸，10d6；反射过则减半）；黄（电，10d6；反射过则减半）；绿（毒，强韧过则死亡）；蓝（石化，强韧过则无效）；靛（疯狂，强韧过则无效）；紫（解离，强韧过则无效）。远程攻击无法穿透屏障。需要成功DC27的法术辨识检定才能用单法术解除屏障。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "refuge",
    "nameEn": "Refuge",
    "nameZh": "避难所",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "见描述",
    "target": "一个生物",
    "duration": "永久或直到触发",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你标记一个生物。当该生物说出你的名字并请求帮助时，它们立即被传送到你的位置（无论多远）。该法术只能使用一次。",
    "material": "一个价值至少10000金币的宝石",
    "source": "3R",
    "classLevels": {
      "cleric": 7,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "shambler",
    "nameEn": "Shambler",
    "nameZh": "蹒跚怪",
    "level": 9,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤1d4+1个蹒跚怪（Shambling Mound）为你作战。蹒跚怪是强大的植物怪物（CR6）。它们出现后攻击你的敌人。",
    "source": "3R",
    "classLevels": {
      "druid": 9
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "shapechange",
    "nameEn": "Shapechange",
    "nameZh": "变身术",
    "level": 9,
    "school": "变化系",
    "components": "V,S,M",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你可以变成任何体型的动物、魔法兽或巨人。你可以获得该生物的所有物理属性、天生攻击、速度、技能、专长（如果你有对应的先决条件）、超自然能力和法术能力。你可以每轮以一个标准动作改变形态（次数不限）。你的生命值保持不变。⚠️ 争议：变身术的精确机制在玩家手册和规则存档之间有冲突。",
    "material": "一小撮蒲公英种子",
    "source": "PHB",
    "classLevels": {
      "druid": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "shapechange_greater",
    "nameEn": "Shapechange, Greater",
    "nameZh": "高等变形术",
    "level": 9,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "个人",
    "target": "你",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如变形术，但你可以变成HD不超过你的施法者等级+10的任何生物。你可以获得该生物的所有能力和属性。你可以在法术持续时间内以自由动作改变形态（每轮一次）。",
    "material": "一块变形怪的皮",
    "source": "3R"
  },
  {
    "id": "shield_of_law",
    "nameEn": "Shield of Law",
    "nameZh": "守序之盾",
    "level": 9,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "见描述",
    "spellResist": "可",
    "desc": "你创造一个守序灵光。效果：所有混乱生物受到1d6点伤害/轮；所有守序生物获得+4守序加值AC和豁免；所有混乱法术被阻止或驱散。",
    "source": "3R",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "soul_bind",
    "nameEn": "Soul Bind",
    "nameZh": "灵魂绑定",
    "level": 9,
    "school": "死灵系",
    "components": "V,S,DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一具尸体",
    "duration": "永久",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你将刚死生物的灵魂封入一颗宝石（价值至少1000gp）。被绑定的灵魂无法复活、转生或复活（除非宝石被破坏或法术解除）。灵魂绑定可以用来阻止敌人复活。",
    "source": "PHB",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "storm_of_vengeance",
    "nameEn": "Storm of Vengeance",
    "nameZh": "复仇风暴",
    "level": 9,
    "school": "咒法系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "半径360尺散布，以你选定点为起始",
    "duration": "1轮/环",
    "savingThrow": "见描述",
    "spellResist": "是",
    "desc": "你制造一场巨大的风暴。每轮风暴产生以下效果（你可以每轮选择不同效果）：1=酸雨（2d6伤害，反射过则减半）；2=大雨（熄灭明火，地面湿滑）；3=冰雹（5d6钝击伤害，反射过则减半）；4=暴风（强风，飞行困难）；5=闪电（10d6电击伤害，反射过则减半）；6=地震（地面震动，平衡检定DC15）。",
    "source": "3R",
    "classLevels": {
      "cleric": 9,
      "druid": 9
    },
    "divine": {
      "牧师": 9,
      "德鲁伊": 9
    }
  },
  {
    "id": "summon_monster_9",
    "nameEn": "Summon Monster IX",
    "nameZh": "召唤怪物Ⅸ",
    "level": 9,
    "school": "咒法系",
    "components": "V,S,F",
    "castingTime": "1轮",
    "range": "近距",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤一个CR9或更低的生物为你作战。常见选择：1个以太巨人、1个太古金龙、1个恶魔领主等。",
    "source": "PHB",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "summon_natures_ally_ix",
    "nameEn": "Summon Nature's Ally IX",
    "nameZh": "召唤自然盟友IX",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "1整轮",
    "range": "近距 (25尺+5尺/2环)",
    "target": "见描述",
    "duration": "1轮/环",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你召唤最强大的自然生物来为你战斗。可以召唤1个9级自然生物、1d3个8级生物或1d4+1个7级或更低的生物。召唤列表包括长老元素等最强大的自然存在。",
    "source": "PHB",
    "classLevels": {
      "druid": 9
    },
    "divine": {
      "德鲁伊": 9
    }
  },
  {
    "id": "teleportation_circle",
    "nameEn": "Teleportation Circle",
    "nameZh": "传送道标",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "",
    "duration": "1轮/级",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "你创造一个传送道标。任何使用传送术或任意门法术的生物可以以该道标为目标（如同传送阵）。该法术可以用于创建永久传送网络。",
    "material": "价值至少5000金币的魔法粉末",
    "source": "3R",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "time_stasis",
    "nameEn": "Time Stasis",
    "nameZh": "时间凝滞",
    "level": 9,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "一个生物",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "目标陷入时间凝滞状态。目标处于无敌状态（免疫一切），但无法行动、感知或互动。时间凝滞状态可以被解咒法术（有限祈愿术或神迹术）解除。",
    "material": "一块钻石（价值至少5000金币）",
    "source": "3R"
  },
  {
    "id": "time_stop",
    "nameEn": "Time Stop",
    "nameZh": "时间停止",
    "level": 9,
    "school": "变化系",
    "components": "V,S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "你自己",
    "duration": "1d4+1轮（见描述）",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "时间对你以外的一切停止。你可以自由行动1d4+1轮。在时间停止期间，你无法影响其他生物（你的攻击、法术等对它们无效）。但你可以对自己施展法术、移动、取出物品、布置陷阱等。如果你施展一个法术的持续时间不是「立即」，该法术在时间恢复后继续生效。时间停止可以被巧合复现或等价效果干扰。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "true_resurrection",
    "nameEn": "True Resurrection",
    "nameZh": "真复活术",
    "level": 9,
    "school": "死灵系",
    "components": "V,S,DF",
    "castingTime": "10分钟",
    "range": "见描述",
    "target": "一个已死生物（无论尸体是否存在）",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "否",
    "desc": "如同复活术，但不需要尸体（只要你知道死者的全名和死因）。死者复活时恢复健康值全满，无负面等级，无体质损失。这是最强的复活法术。",
    "source": "3R",
    "classLevels": {
      "cleric": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "tsunami",
    "nameEn": "Tsunami",
    "nameZh": "海啸术",
    "level": 9,
    "school": "咒法系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "长距（400英尺+40英尺/等级）",
    "duration": "1轮/等级",
    "savingThrow": "反射过",
    "spellResist": "否",
    "desc": "你召唤出一道巨大的海啸。海啸对沿路的所有生物和建筑物造成巨大破坏。每轮海啸造成1d6点伤害/等级（最大20d6）。",
    "source": "3R"
  },
  {
    "id": "wail_of_the_banshee",
    "nameEn": "Wail of the Banshee",
    "nameZh": "女妖之嚎",
    "level": 9,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "近距",
    "target": "",
    "duration": "即时",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "你发出一声恐怖的尖嚎。范围内所有生物必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到3d6点属性吸取（随机属性）。",
    "material": "一块黑曜石",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "weird",
    "nameEn": "Weird",
    "nameZh": "怪影术",
    "level": 9,
    "school": "幻术系",
    "components": "V, S, M",
    "castingTime": "单动作",
    "range": "中距",
    "target": "",
    "duration": "即时",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "你创造出目标最恐惧的幻象。每个目标必须成功意志检定，否则受到1d6点体质伤害/级（最大15d6）并恐慌1d4轮。通过意志检定的目标只受到一半伤害。",
    "material": "一小块镜子和一块黑曜石",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "wish",
    "nameEn": "Wish",
    "nameZh": "许愿术",
    "level": 9,
    "school": "通用系",
    "components": "V,S,XP",
    "castingTime": "1标准动作",
    "range": "见描述",
    "target": "见描述",
    "duration": "见描述",
    "savingThrow": "见描述",
    "spellResist": "见描述",
    "desc": "许愿术是最强大的法术之一。它可以实现几乎任何愿望：复活死者、治疗所有伤害、获得+1天生加值所有属性、复制任何其他法术（最高8环）等。但许愿术有危险：如果你许愿超出法术能力（DM判断），可能部分实现或产生意外后果。每使用一次许愿术，你失去5000XP，并且体质受到2d4点伤害（无豁免）。材料成分：无（但XP代价是必须的）。你也可以许一个受限的愿望（不损失XP，但效果有限）。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "restoration_lesser",
    "nameEn": "Restoration, Lesser",
    "nameZh": "次级复原术",
    "level": 2,
    "school": "咒法系（医疗）",
    "components": "V, S",
    "castingTime": "3轮",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "立即",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "移除一种造成属性减值的魔法效果，或治疗目标一项属性受到的1d4点临时属性伤害。它也能解除疲乏，或把力竭降为疲乏，但不能恢复永久属性吸取。",
    "source": "PHB",
    "classLevels": {
      "cleric": 2,
      "druid": 2,
      "paladin": 1
    },
    "divine": {
      "牧师": 2,
      "德鲁伊": 2,
      "圣武士": 1
    }
  },
  {
    "id": "bestow_curse",
    "nameEn": "Bestow Curse",
    "nameZh": "降咒",
    "level": 3,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "永久",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "以接触使目标承受诅咒，可令一项属性承受-6减值，或使攻击、豁免、属性检定和技能检定承受-4惩罚，或让目标每轮只有一半概率正常行动。也可由DM批准同等强度的诅咒。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "create_food_and_water",
    "nameEn": "Create Food And Water",
    "nameZh": "造粮术",
    "level": 3,
    "school": "咒法系（创造）",
    "components": "V, S",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "足够每等级维持三个人或一匹马一天的食物与水",
    "duration": "24小时；见说明",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造简单而可食用的食物与洁净饮水。食物会在24小时后变质，除非再以净化食粮等效果处理；水如普通洁净雨水，不会像食物那样腐败。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "deep_darkness",
    "nameEn": "Deep Darkness",
    "nameZh": "深幽黑暗术",
    "level": 3,
    "school": "塑能系[黑暗]",
    "components": "V, M/DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的物体",
    "duration": "1天/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "如黑暗术，但阴影半径为60尺且持续时间更长。它可以反制或解除同等或更低等级的光亮法术，和光亮效果重叠时按反制规则处理。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "glyph_of_warding",
    "nameEn": "Glyph of Warding",
    "nameZh": "守卫刻文",
    "level": 3,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "接触",
    "target": "接触到的物体或至多5平方尺/等级的区域",
    "duration": "永久，直到耗散（可解消）",
    "savingThrow": "见说明",
    "spellResist": "见说明",
    "desc": "在区域或物体上设置难以察觉的魔法刻文，并指定触发条件。刻文可爆发造成每2施法者等级1d8点能量伤害（最高5d8），也可储存一个3级或更低的有害法术，在触发时作用于入侵者。",
    "material": "用于描绘刻文的熏香和至少价值200金币的钻石粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "helping_hand",
    "nameEn": "Helping Hand",
    "nameZh": "引导之手",
    "level": 3,
    "school": "塑能系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "5英里",
    "target": "一只幽灵般的手",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造一只幽灵手，按你描述的外貌特征在5英里内寻找某个生物。若找到且对方愿意跟随，它会指引对方沿可行路径来到你处；它不能强迫目标，也不能执行战斗或搬运等任务。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "inflict_serious_wounds",
    "nameEn": "Inflict Serious Wounds",
    "nameZh": "造成重伤",
    "level": 3,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "立即",
    "savingThrow": "意志过则伤害减半",
    "spellResist": "可",
    "desc": "你的接触灌入负能量，对活物造成3d8点伤害，再加每施法者等级1点（最高+15）。用于不死生物时，这股负能量会改为治疗同等数值。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "invisibility_purge",
    "nameEn": "Invisibility Purge",
    "nameZh": "消除隐形",
    "level": 3,
    "school": "塑能系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "自身",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "你周围形成半径每施法者等级5尺的球形区域。区域内的隐形效果会被压制，隐形生物与物体会显现出来；离开区域后原本仍有效的隐形可继续生效。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "speak_with_dead",
    "nameEn": "Speak with Dead",
    "nameZh": "死者交谈",
    "level": 3,
    "school": "死灵系[语言相关]",
    "components": "V, S, DF",
    "castingTime": "10分钟",
    "range": "10尺",
    "target": "一具死亡生物的尸体",
    "duration": "1分钟/等级",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "不可",
    "desc": "使尸体短暂回应问题，每2个施法者等级可问一个问题。回答只来自尸体生前已知的信息，通常简短或含混；尸体必须大致完整并仍有可发声的部位。",
    "source": "PHB",
    "classLevels": {
      "cleric": 3
    },
    "divine": {
      "牧师": 3
    }
  },
  {
    "id": "magic_weapon_greater",
    "nameEn": "Magic Weapon, Greater",
    "nameZh": "高等魔化武器",
    "level": 3,
    "school": "变化系",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一件武器，或50枚同类弹药",
    "duration": "1小时/等级",
    "savingThrow": "意志过则无效（无害，物体）",
    "spellResist": "可（无害，物体）",
    "desc": "如魔化武器，但武器获得每4个施法者等级+1的增强加值，最高+5。也可施放在一组同类弹药上；弹药使用后即失去此法术赋予的魔法加值。",
    "material": "石灰粉和碳粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "paladin": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "牧师": 4,
      "圣武士": 3
    }
  },
  {
    "id": "restoration",
    "nameEn": "Restoration",
    "nameZh": "复原术",
    "level": 4,
    "school": "咒法系（医疗）",
    "components": "V, S, M",
    "castingTime": "3轮",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "立即",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如次级复原术，并可移除负向等级、恢复一个被吸取的经验等级，治疗所有临时属性伤害，或完全恢复一项被永久吸取的属性值。不能恢复因死亡造成的等级或体质损失。",
    "material": "价值100金币的钻石粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 4,
      "paladin": 4
    },
    "divine": {
      "牧师": 4,
      "圣武士": 4
    }
  },
  {
    "id": "disrupting_weapon",
    "nameEn": "Disrupting Weapon",
    "nameZh": "毁灭武器",
    "level": 5,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "一件近战武器",
    "duration": "1轮/等级",
    "savingThrow": "意志过则无效（无害，物体）；见说明",
    "spellResist": "可（无害，物体）",
    "desc": "使一件近战武器成为不死生物的克星。被该武器命中的不死生物若HD不高于你的施法者等级，必须通过意志豁免，否则立即被摧毁；法术抗力不适用于这个摧毁效果。",
    "source": "PHB",
    "classLevels": {
      "cleric": 5
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "plane_shift",
    "nameEn": "Plane Shift",
    "nameZh": "异界传送",
    "level": 5,
    "school": "咒法系（传送）",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "一个接触到的生物，或至多八个手牵手的自愿生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "将自己或接触到的目标送往另一个位面。抵达地点通常无法精确控制，会在目标地点附近出现；若以一圈手牵手的自愿生物为目标，至多可带八个生物一同转移。",
    "focus": "一小段分叉金属短棒",
    "source": "PHB",
    "classLevels": {
      "cleric": 5,
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    },
    "divine": {
      "牧师": 5
    }
  },
  {
    "id": "glyph_of_warding_greater",
    "nameEn": "Glyph of Warding, Greater",
    "nameZh": "高等守卫刻文",
    "level": 6,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "接触",
    "target": "接触到的物体或至多5平方尺/等级的区域",
    "duration": "永久，直到耗散（可解消）",
    "savingThrow": "见说明",
    "spellResist": "见说明",
    "desc": "如守卫刻文，但爆裂刻文最高可造成10d8点伤害，法术刻文可储存6级或更低的有害法术。其他触发、侦测和解除规则按守卫刻文处理。",
    "material": "用于描绘刻文的熏香和至少价值400金币的钻石粉",
    "source": "PHB",
    "classLevels": {
      "cleric": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "symbol_of_persuasion",
    "nameEn": "Symbol of Persuasion",
    "nameZh": "说服徽记",
    "level": 6,
    "school": "惑控系（魅惑）[影响心灵]",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见说明",
    "target": "一个魔法徽记",
    "duration": "见说明",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如死亡徽记一类的魔法陷阱，但触发后会使范围内生物如同被魅惑怪物影响，持续1小时/等级。它没有生命值总量限制，触发后可在10分钟/等级内保持启动状态。",
    "material": "水银和磷，以及价值至少5000金币的钻石与猫眼石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 6,
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    },
    "divine": {
      "牧师": 6
    }
  },
  {
    "id": "cure_serious_wounds_mass",
    "nameEn": "Cure Serious Wounds, Mass",
    "nameZh": "群体治疗重伤",
    "level": 7,
    "school": "咒法系（医疗）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "每等级一个生物，任两者相距不超过30尺",
    "duration": "立即",
    "savingThrow": "意志过则减半（无害）",
    "spellResist": "可（无害）",
    "desc": "如群体治疗轻伤，但每个目标恢复3d8点生命值，再加每施法者等级1点（最高+35）。对不死生物造成同等正能量伤害，成功意志豁免则伤害减半。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7,
      "druid": 8
    },
    "divine": {
      "牧师": 7,
      "德鲁伊": 8
    }
  },
  {
    "id": "inflict_serious_wounds_mass",
    "nameEn": "Inflict Serious Wounds, Mass",
    "nameZh": "群体造成重伤",
    "level": 7,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "每等级一个生物，任两者相距不超过30尺",
    "duration": "立即",
    "savingThrow": "意志过则伤害减半",
    "spellResist": "可",
    "desc": "如群体造成轻伤，但对每个活物目标造成3d8点负能量伤害，再加每施法者等级1点（最高+35）。用于不死生物时会治疗同等数值。",
    "source": "PHB",
    "classLevels": {
      "cleric": 7
    },
    "divine": {
      "牧师": 7
    }
  },
  {
    "id": "spell_immunity_greater",
    "nameEn": "Spell Immunity, Greater",
    "nameZh": "高等法术免疫",
    "level": 8,
    "school": "防护系",
    "components": "V, S, DF",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "10分钟/等级",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如法术免疫，但可选择8级或更低的法术。目标对所选法术获得免疫；同一时间一个生物只能受一个法术免疫或高等法术免疫效果影响。",
    "source": "PHB",
    "classLevels": {
      "cleric": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "symbol_of_insanity",
    "nameEn": "Symbol of Insanity",
    "nameZh": "摄魂徽记",
    "level": 8,
    "school": "惑控系（胁迫）[影响心灵]",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "0尺；见说明",
    "target": "一个魔法徽记",
    "duration": "见说明",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如死亡徽记一类的魔法陷阱，但触发后使60尺内生物陷入永久性精神错乱，如同精神错乱法术。它没有生命值总量限制，触发后可在10分钟/等级内保持启动状态。",
    "material": "水银和磷，以及价值至少5000金币的钻石与猫眼石粉末",
    "source": "PHB",
    "classLevels": {
      "cleric": 8,
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    },
    "divine": {
      "牧师": 8
    }
  },
  {
    "id": "etherealness",
    "nameEn": "Etherealness",
    "nameZh": "同游灵界",
    "level": 9,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触；见说明",
    "target": "自身，以及每3等级一个接触到的自愿生物",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "如灵化术，但你可以带着接触到的自愿生物和其装备一同进入以太位面。除你之外，每3个施法者等级可多带一个生物；效果开始后不再需要保持接触。",
    "source": "PHB",
    "classLevels": {
      "cleric": 9,
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    },
    "divine": {
      "牧师": 9
    }
  },
  {
    "id": "fire_trap",
    "nameEn": "Fire Trap",
    "nameZh": "火焰陷阱",
    "level": 2,
    "school": "防护系[火焰]",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "接触",
    "target": "接触到的物体",
    "duration": "永久，直到耗散（可解消）",
    "savingThrow": "反射过则伤害减半",
    "spellResist": "可",
    "desc": "在可开启的物体上设置火焰陷阱。未经许可者开启时会引发爆炸，对触发者和近处生物造成1d4点火焰伤害，再加每施法者等级1点；施法时可指定不会触发陷阱的生物。",
    "material": "少量硫磺或火磷粉",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "fog_cloud",
    "nameEn": "Fog Cloud",
    "nameZh": "云雾术",
    "level": 2,
    "school": "咒法系（创造）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "半径20尺、高20尺的雾云",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "制造一片浓雾，遮蔽所有视觉，包括黑暗视觉。5尺外的生物具有隐蔽，超过5尺则具有全隐蔽；强风可较快驱散雾气。",
    "source": "PHB",
    "classLevels": {
      "druid": 2,
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    },
    "divine": {
      "德鲁伊": 2
    }
  },
  {
    "id": "sleet_storm",
    "nameEn": "Sleet Storm",
    "nameZh": "雪风暴",
    "level": 3,
    "school": "咒法系（创造）[寒冷]",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "远距",
    "area": "半径40尺、高20尺的圆柱",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "降下冻雨和冰雪，阻断区域内视线并使地面湿滑。区域内生物行动困难，可能跌倒；法术还会压制火焰并让远程攻击与视觉判断变得不可靠。",
    "material": "一撮灰尘和数滴水",
    "source": "PHB",
    "classLevels": {
      "druid": 3,
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    },
    "divine": {
      "德鲁伊": 3
    }
  },
  {
    "id": "bless_weapon",
    "nameEn": "Bless Weapon",
    "nameZh": "祝福武器",
    "level": 1,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的武器",
    "duration": "1分钟/等级",
    "savingThrow": "意志过则无效（无害，物体）",
    "spellResist": "可（无害，物体）",
    "desc": "使武器被视为善良武器以克服伤害减免，并让它对邪恶生物的重击威胁自动确认。此效果不会和已有的锐锋等扩大重击范围效果叠加。",
    "source": "PHB",
    "classLevels": {
      "paladin": 1
    },
    "divine": {
      "圣武士": 1
    }
  },
  {
    "id": "heal_mount",
    "nameEn": "Heal Mount",
    "nameZh": "医疗坐骑",
    "level": 3,
    "school": "咒法系（医疗）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "你的特殊坐骑",
    "duration": "立即",
    "savingThrow": "意志过则无效（无害）",
    "spellResist": "可（无害）",
    "desc": "如医疗术，但只影响你的圣武士特殊坐骑。它恢复大量生命值，并移除常见的伤害状态，如目盲、耳聋、疾病、毒素和部分临时属性伤害。",
    "source": "PHB",
    "classLevels": {
      "paladin": 3
    },
    "divine": {
      "圣武士": 3
    }
  },
  {
    "id": "holy_sword",
    "nameEn": "Holy Sword",
    "nameZh": "圣剑术",
    "level": 4,
    "school": "塑能系[善良]",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的近战武器",
    "duration": "1轮/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "使一件近战武器成为强大的善良武器，获得+5增强加值并对邪恶生物造成额外神圣伤害。武器周围还会产生类似防护邪恶法阵的保护效果。",
    "source": "PHB",
    "classLevels": {
      "paladin": 4
    },
    "divine": {
      "圣武士": 4
    }
  },
  {
    "id": "floating_disk",
    "nameEn": "Floating Disk",
    "nameZh": "浮碟术",
    "level": 1,
    "school": "塑能系[力场]",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "直径3尺的力场圆盘",
    "duration": "1小时/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造一面水平漂浮的力场圆盘，可承载重量并跟随你移动。圆盘通常保持在地面上方约3尺，不能越过高度差过大的障碍；法术结束或超出距离时，承载物落下。",
    "material": "一滴水银",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "reduce_person",
    "nameEn": "Reduce Person",
    "nameZh": "人类缩小术",
    "level": 1,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一个类人生物",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "使一个类人生物体型缩小一级，通常获得敏捷加值、力量减值、攻击和AC的体型调整，并改变武器伤害。目标的装备随之缩小，离身后恢复原尺寸。",
    "material": "一撮铁粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 1
    },
    "arcane": {
      "术士/法师": 1
    }
  },
  {
    "id": "command_undead",
    "nameEn": "Command Undead",
    "nameZh": "命令死灵",
    "level": 2,
    "school": "死灵系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "一个不死生物",
    "duration": "1天/等级",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "让一个不死生物听从你的指令。无智力不死生物通常不进行豁免；有智力不死生物会以友好态度对待你，但危险或违背本性的命令仍可能受到限制。",
    "material": "一小片生肉和一撮骨粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "phantom_trap",
    "nameEn": "Phantom Trap",
    "nameZh": "魅影陷阱",
    "level": 2,
    "school": "幻术系（五官幻觉）",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的物体",
    "duration": "永久（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "让一个物体看起来像被设置了陷阱，侦测和解除陷阱的尝试会得到误导性迹象。这个法术本身不会造成伤害，只制造足以拖延或吓阻检查者的假象。",
    "material": "一小段铁丝",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "scorching_ray",
    "nameEn": "Scorching Ray",
    "nameZh": "灼热射线",
    "level": 2,
    "school": "塑能系[火焰]",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一条或多条射线",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "发射火焰射线进行远程接触攻击，命中造成4d6点火焰伤害。施法者等级提高后可发射多条射线，射线可攻击同一目标或不同目标。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 2
    },
    "arcane": {
      "术士/法师": 2
    }
  },
  {
    "id": "stinking_cloud",
    "nameEn": "Stinking Cloud",
    "nameZh": "臭云术",
    "level": 3,
    "school": "咒法系（创造）",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "半径20尺的云雾",
    "duration": "1轮/等级",
    "savingThrow": "强韧过则无效；见说明",
    "spellResist": "不可",
    "desc": "制造令人作呕的恶臭云雾。云内生物若强韧豁免失败会陷入反胃，离开云雾后还会短暂持续；云雾同时像雾云一样遮蔽视线。",
    "material": "一个臭鸡蛋或腐烂植物碎片",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "vampiric_touch",
    "nameEn": "Vampiric Touch",
    "nameZh": "吸血鬼之触",
    "level": 3,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的活物",
    "duration": "立即/1小时；见说明",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "通过近战接触攻击吸取目标生命力，造成每2施法者等级1d6点伤害（最高10d6）。你获得等量临时生命值，持续1小时。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 3
    },
    "arcane": {
      "术士/法师": 3
    }
  },
  {
    "id": "black_tentacles",
    "nameEn": "Black Tentacles",
    "nameZh": "黑触手",
    "level": 4,
    "school": "咒法系（创造）",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "中距",
    "area": "半径20尺扩散",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "从地面或表面召出大量橡胶般的黑色触手。触手会擒抱区域内生物并造成伤害，使用基于施法者等级的擒抱检定；区域也会变成难以穿行的威胁地带。",
    "material": "一段章鱼或乌贼触须",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "enlarge_person_mass",
    "nameEn": "Enlarge Person, Mass",
    "nameZh": "群体变巨术",
    "level": 4,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "每等级一个类人生物，任两者相距不超过30尺",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "如人类变巨术，但可同时影响多个类人生物。每个目标体型增大一级，获得相应力量、敏捷、攻击、AC和武器伤害调整。",
    "material": "一撮铁粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "globe_of_invulnerability_lesser",
    "nameEn": "Globe of Invulnerability, Lesser",
    "nameZh": "次级法术无效结界",
    "level": 4,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "10尺",
    "area": "以你为中心的10尺半径球形发散",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "形成静止的魔法球体，阻挡3级或更低的法术效果进入或影响球内目标。高等级法术不受影响，球内施放的法术也可正常作用于球外。",
    "material": "一个玻璃或水晶珠",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "illusory_wall",
    "nameEn": "Illusory Wall",
    "nameZh": "幻墙术",
    "level": 4,
    "school": "幻术系（五官幻觉）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一个墙、地板或天花板幻象",
    "duration": "永久",
    "savingThrow": "意志辨破；见说明",
    "spellResist": "不可",
    "desc": "制造看似真实的墙面、地板或天花板。幻象不会阻挡移动、声音或攻击，但外观足以遮掩通道、坑洞或开口；与其互动者可尝试辨破。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "mnemonic_enhancer",
    "nameEn": "Mnemonic Enhancer",
    "nameZh": "强记术",
    "level": 4,
    "school": "变化系",
    "components": "V, S, M, F",
    "castingTime": "10分钟",
    "range": "个人",
    "target": "自身",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "强化你的法术记忆，可立即准备额外法术，或重新记起当天已施放过的低级法术。具体选择在施法时决定，只对准备施法体系有意义。",
    "material": "一条系结的细绳",
    "focus": "价值至少50金币的象牙片",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "reduce_person_mass",
    "nameEn": "Reduce Person, Mass",
    "nameZh": "群体人类缩小术",
    "level": 4,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1轮",
    "range": "近距",
    "target": "每等级一个类人生物，任两者相距不超过30尺",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "如人类缩小术，但可同时影响多个类人生物。每个目标体型缩小一级，并获得相应属性、攻击、AC和武器伤害调整。",
    "material": "一撮铁粉",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "resilient_sphere",
    "nameEn": "Resilient Sphere",
    "nameZh": "弹力法球",
    "level": 4,
    "school": "塑能系[力场]",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "直径1尺/等级的力场球体",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "反射过则无效",
    "spellResist": "可",
    "desc": "以透明力场球困住目标。球体阻挡实体、能量和多数法术效果，内部目标也难以影响外界；球体可被解离术等特定效果移除。",
    "material": "一块半球形水晶和一块配套树胶半球",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 4
    },
    "arcane": {
      "术士/法师": 4
    }
  },
  {
    "id": "cone_of_cold",
    "nameEn": "Cone of Cold",
    "nameZh": "寒冰锥",
    "level": 5,
    "school": "塑能系[寒冷]",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "60尺",
    "area": "锥形爆发",
    "duration": "立即",
    "savingThrow": "反射过则伤害减半",
    "spellResist": "可",
    "desc": "从你手中喷发极寒能量，对锥形范围内生物造成每施法者等级1d6点寒冷伤害（最高15d6）。",
    "material": "小型水晶或玻璃锥",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "interposing_hand",
    "nameEn": "Interposing Hand",
    "nameZh": "护身掌",
    "level": 5,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "一只大型力场手掌",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "创造一只力场手掌，在你和指定敌人之间移动，提供掩护并阻碍对方接近。手掌会随目标移动，但不能主动攻击。",
    "focus": "一只柔软手套",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "mages_faithful_hound",
    "nameEn": "Mage's Faithful Hound",
    "nameZh": "法师忠犬",
    "level": 5,
    "school": "咒法系（创造）",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一只幽灵般的看门犬",
    "duration": "1小时/等级或直到耗散",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "召出一只不可见的魔法看门犬守卫区域。它能察觉接近的生物并吠叫示警，若入侵者靠近到一定距离内，还会以力场咬击攻击。",
    "material": "一小块骨头和一段黑线",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "mages_private_sanctum",
    "nameEn": "Mage's Private Sanctum",
    "nameZh": "法师密室",
    "level": 5,
    "school": "防护系",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "近距",
    "area": "每等级一个30尺立方",
    "duration": "24小时",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "封锁一片区域的窥探与窃听。外界无法以普通视觉、听觉或预言探知内部，内部声音也不会传出；该法术适合建立临时密谈或休整空间。",
    "material": "薄铅片、玻璃粉和棉花",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "magic_jar",
    "nameEn": "Magic Jar",
    "nameZh": "魔魂壶",
    "level": 5,
    "school": "死灵系",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "一个生物",
    "duration": "1小时/等级或直到返回身体",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "将你的灵魂转入一个容器，并可尝试占据附近生物的身体。你的肉体在此期间无助；若容器、肉体或宿主状态变化，法术可能提前结束并带来风险。",
    "focus": "价值至少100金币的宝石或水晶容器",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "major_creation",
    "nameEn": "Major Creation",
    "nameZh": "强效造物术",
    "level": 5,
    "school": "咒法系（创造）",
    "components": "V, S, M",
    "castingTime": "10分钟",
    "range": "近距",
    "effect": "一个非魔法物体，体积至多1立方尺/等级",
    "duration": "见说明",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "如次级造物术，但可创造矿物材质物体。物品持续时间取决于材质，越稀有或坚硬的材料持续越短；创造物不能作为昂贵材料成分替代品。",
    "material": "与要创造物同类的一小片材料",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "passwall",
    "nameEn": "Passwall",
    "nameZh": "穿墙术",
    "level": 5,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "接触",
    "effect": "穿过木、灰泥或石墙的通道",
    "duration": "1小时/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "在木、灰泥或石质障碍中打开临时通道，深度随施法者等级提高。法术结束时通道关闭，仍在通道内的生物会被推出最近出口。",
    "material": "一撮芝麻",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "secret_chest",
    "nameEn": "Secret Chest",
    "nameZh": "秘藏箱",
    "level": 5,
    "school": "咒法系（召唤）",
    "components": "V, S, F",
    "castingTime": "10分钟",
    "range": "见说明",
    "target": "一只箱子和其复制品",
    "duration": "60天或直到耗散",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "把一只昂贵箱子藏入以太位面，并以小型复制品召回或送回。若持续时间过久或复制品遗失，箱子可能难以取回。",
    "focus": "一只精制箱子及其小型复制品",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "telepathic_bond",
    "nameEn": "Telepathic Bond",
    "nameZh": "心灵连线",
    "level": 5,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "target": "你和每3等级一个自愿生物",
    "duration": "10分钟/等级",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "在多个自愿生物之间建立心灵通讯。受术者即使没有共同语言也能传递思想，只要仍在同一位面即可交流。",
    "material": "两片不同生物的蛋壳",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "waves_of_fatigue",
    "nameEn": "Waves of Fatigue",
    "nameZh": "疲乏波",
    "level": 5,
    "school": "死灵系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "30尺",
    "area": "锥形爆发",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "释放负能量波，使锥形范围内活物陷入疲乏。已经疲乏的目标不会因此变为力竭，但仍会受到疲乏状态的正常限制。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 5
    },
    "arcane": {
      "术士/法师": 5
    }
  },
  {
    "id": "forceful_hand",
    "nameEn": "Forceful Hand",
    "nameZh": "飞击掌",
    "level": 6,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "一只大型力场手掌",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "如护身掌，但力场手掌还能主动冲撞指定敌人，把目标推离你或推向指定方向。它按法术说明使用自身力量与施法者等级计算冲撞能力。",
    "focus": "一只结实手套",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "mages_lucubration",
    "nameEn": "Mage's Lucubration",
    "nameZh": "法师回忆术",
    "level": 6,
    "school": "变化系",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "个人",
    "target": "自身",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "回忆并重新准备一个当天已经施放过的5级或更低法术。该法术必须是你当天实际准备并释放过的法术。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 6
    },
    "arcane": {
      "术士/法师": 6
    }
  },
  {
    "id": "grasping_hand",
    "nameEn": "Grasping Hand",
    "nameZh": "擒拿掌",
    "level": 7,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "一只巨型力场手掌",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "如飞击掌，但力场手掌还能擒抱目标并持续压制。它可在阻挡、推挤和擒抱之间按你的指令行动。",
    "focus": "一只皮手套",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "hold_person_mass",
    "nameEn": "Hold Person, Mass",
    "nameZh": "群体人类定身术",
    "level": 7,
    "school": "惑控系（胁迫）[影响心灵]",
    "components": "V, S, F/DF",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "每等级一个类人生物，任两者相距不超过30尺",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "如定身人类，但可同时影响多个类人生物。受术者麻痹不能行动，每轮可重新进行意志豁免以结束自身效果。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "mages_magnificent_mansion",
    "nameEn": "Mage's Magnificent Mansion",
    "nameZh": "法师豪宅",
    "level": 7,
    "school": "咒法系（创造）",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一个通往异次元宅邸的入口",
    "duration": "2小时/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "创造一座安全舒适的异次元宅邸，入口外观看似微光门户。宅邸内有足够空间、食物和仆役供队伍休整，入口关闭后外界难以干扰内部。",
    "focus": "一只象牙小门、银匙和小块大理石",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "mages_sword",
    "nameEn": "Mage's Sword",
    "nameZh": "法师之剑",
    "level": 7,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一把力场剑",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "创造一把由力场构成的剑，按你的指令攻击指定目标。它使用你的施法者等级相关攻击加值，造成力场伤害，并可在持续时间内转移目标。",
    "focus": "一把微型白金剑",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "shadow_conjuration_greater",
    "nameEn": "Shadow Conjuration, Greater",
    "nameZh": "高等幽影咒法术",
    "level": 7,
    "school": "幻术系（幽影）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "见说明",
    "target": "见说明",
    "duration": "见说明",
    "savingThrow": "意志辨破；见说明",
    "spellResist": "可",
    "desc": "如幽影咒法术，但可模拟更高等级的咒法系召唤或创造法术，且被辨破后仍保留较高比例的真实效果。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "simulacrum",
    "nameEn": "Simulacrum",
    "nameZh": "拟象术",
    "level": 7,
    "school": "幻术系（幽影）",
    "components": "V, S, M, XP",
    "castingTime": "12小时",
    "range": "0尺",
    "effect": "一个被复制生物的虚假生命体",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "用冰雪与材料制造某个生物的半真实复制体。拟象拥有原型部分生命骰、能力和记忆，但受你控制；修复它需要特殊实验室流程。",
    "material": "雪或冰制成的躯体及原型的一部分",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "teleport_object",
    "nameEn": "Teleport Object",
    "nameZh": "物品传送术",
    "level": 7,
    "school": "咒法系（传送）",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "一个接触到的物体",
    "duration": "立即",
    "savingThrow": "意志过则无效（物体）",
    "spellResist": "可（物体）",
    "desc": "如传送术，但目标为物体。你可把物体送到熟悉地点；若目标由生物持有或属于魔法物品，正常适用豁免和法术抗力。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 7
    },
    "arcane": {
      "术士/法师": 7
    }
  },
  {
    "id": "clenched_fist",
    "nameEn": "Clenched Fist",
    "nameZh": "金刚拳",
    "level": 8,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "一只巨型力场拳",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "如擒拿掌，但力场手可重击敌人并造成更高伤害，还可能使目标震慑。它仍可按你的指令阻挡、推挤或擒抱。",
    "focus": "一只皮手套",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "planar_binding_greater",
    "nameEn": "Planar Binding, Greater",
    "nameZh": "高等异界誓缚",
    "level": 8,
    "school": "咒法系（召唤）",
    "components": "V, S",
    "castingTime": "10分钟",
    "range": "近距",
    "target": "一个至多18HD的异界生物，或多个较弱异界生物",
    "duration": "立即",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如异界誓缚，但可呼唤更强的异界生物或一组较弱生物。被召来的生物可被魔法圈困住，并通过交涉、威逼或交易完成任务。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "polar_ray",
    "nameEn": "Polar Ray",
    "nameZh": "极冰射线",
    "level": 8,
    "school": "塑能系[寒冷]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "一条射线",
    "duration": "立即",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "发射极寒射线进行远程接触攻击，命中造成每施法者等级1d6点寒冷伤害（最高25d6）。",
    "focus": "白色陶瓷小锥或水晶",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "prying_eyes_greater",
    "nameEn": "Prying Eyes, Greater",
    "nameZh": "高等窥视魔眼",
    "level": 8,
    "school": "预言系",
    "components": "V, S, M",
    "castingTime": "1分钟",
    "range": "一英里",
    "effect": "多个魔法眼",
    "duration": "1小时/等级；见说明",
    "savingThrow": "无",
    "spellResist": "不可",
    "desc": "如窥视魔眼，但魔眼具有真实视觉，能更可靠地侦察隐形、幻术和变形伪装。魔眼返回后会把所见信息传递给你。",
    "material": "一把水晶弹珠",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "scintillating_pattern",
    "nameEn": "Scintillating Pattern",
    "nameZh": "闪光图纹",
    "level": 8,
    "school": "幻术系（图纹）[影响心灵]",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "半径20尺扩散的彩色光纹",
    "duration": "专注+2轮",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "制造强烈变幻的光纹，按生命骰影响范围内生物，使其陷入昏迷、震慑、困惑或其他较轻效果。效果会随你专注维持。",
    "material": "一根水晶棱柱",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "shadow_evocation_greater",
    "nameEn": "Shadow Evocation, Greater",
    "nameZh": "高等幽影塑能术",
    "level": 8,
    "school": "幻术系（幽影）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "见说明",
    "target": "见说明",
    "duration": "见说明",
    "savingThrow": "意志辨破；见说明",
    "spellResist": "可",
    "desc": "如幽影塑能术，但可模拟更高等级的塑能系法术，且即使被辨破也保留较高比例的真实伤害或效果。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "telekinetic_sphere",
    "nameEn": "Telekinetic Sphere",
    "nameZh": "灵动法球",
    "level": 8,
    "school": "塑能系[力场]",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "近距",
    "effect": "直径1尺/等级的力场球体",
    "duration": "1分钟/等级（可解消）",
    "savingThrow": "反射过则无效",
    "spellResist": "可",
    "desc": "如弹力法球，但你能以意念移动球体及其内容物。球体提供强力保护，同时可作为短距离搬运或控制目标位置的手段。",
    "material": "半球形水晶、树胶半球和一对小磁铁",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "temporal_stasis",
    "nameEn": "Temporal Stasis",
    "nameZh": "永恒静滞",
    "level": 8,
    "school": "变化系",
    "components": "V, S, M",
    "castingTime": "1标准动作",
    "range": "接触",
    "target": "接触到的生物",
    "duration": "永久",
    "savingThrow": "强韧过则无效",
    "spellResist": "可",
    "desc": "把目标置于时间停滞状态。目标不会变老、受伤或感知外界，状态可由解除魔法等强力手段结束。",
    "material": "价值至少5000金币的粉末材料",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 8
    },
    "arcane": {
      "术士/法师": 8
    }
  },
  {
    "id": "crushing_hand",
    "nameEn": "Crushing Hand",
    "nameZh": "粉碎掌",
    "level": 9,
    "school": "塑能系[力场]",
    "components": "V, S, F",
    "castingTime": "1标准动作",
    "range": "中距",
    "effect": "一只巨型力场手",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "无",
    "spellResist": "可",
    "desc": "如金刚拳，但力场手能更有效地擒抱并挤压目标，造成大量伤害。它也可执行前序手掌法术的阻挡与推挤功能。",
    "focus": "一只皮手套",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "dominate_monster",
    "nameEn": "Dominate Monster",
    "nameZh": "支配怪物",
    "level": 9,
    "school": "惑控系（胁迫）[影响心灵]",
    "components": "V, S",
    "castingTime": "1轮",
    "range": "近距",
    "target": "一个生物",
    "duration": "1天/等级",
    "savingThrow": "意志过则无效",
    "spellResist": "可",
    "desc": "如支配人类，但可影响任意类型生物。你能以心灵命令控制目标行动，违背本性的命令会给予目标额外抵抗机会。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "hold_monster_mass",
    "nameEn": "Hold Monster, Mass",
    "nameZh": "群体怪物定身术",
    "level": 9,
    "school": "惑控系（胁迫）[影响心灵]",
    "components": "V, S, M/DF",
    "castingTime": "1标准动作",
    "range": "中距",
    "target": "每等级一个生物，任两者相距不超过30尺",
    "duration": "1轮/等级（可解消）",
    "savingThrow": "意志过则无效；见说明",
    "spellResist": "可",
    "desc": "如定身怪物，但可同时影响多个生物。受术者麻痹且无助，每轮可重新进行意志豁免来摆脱效果。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "mages_disjunction",
    "nameEn": "Mage's Disjunction",
    "nameZh": "法师裂解术",
    "level": 9,
    "school": "防护系",
    "components": "V",
    "castingTime": "1标准动作",
    "range": "近距",
    "area": "半径40尺爆发内的魔法效果和物品",
    "duration": "立即",
    "savingThrow": "意志过则无效（物体）",
    "spellResist": "不可",
    "desc": "裂解范围内的法术和魔法物品。持续法术会被终止，魔法物品可能失去魔力；神器和极强魔法通常需要特殊判定，并可能带来严重后果。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "shades",
    "nameEn": "Shades",
    "nameZh": "影法术",
    "level": 9,
    "school": "幻术系（幽影）",
    "components": "V, S",
    "castingTime": "1标准动作",
    "range": "见说明",
    "target": "见说明",
    "duration": "见说明",
    "savingThrow": "意志辨破；见说明",
    "spellResist": "可",
    "desc": "以幽影能量模拟强大的咒法系召唤或创造法术。被辨破的目标只承受部分真实效果，未辨破者则按被模拟法术正常处理。",
    "source": "PHB",
    "classLevels": {
      "sorcererWizard": 9
    },
    "arcane": {
      "术士/法师": 9
    }
  },
  {
    "id": "wish_evil",
    "nameEn": "Wish (Evil)",
    "nameZh": "愿望（邪恶）",
    "level": 9,
    "school": "通用系",
    "components": "V, S, DF",
    "castingTime": "标准动作",
    "range": "见下文",
    "target": "见下文",
    "duration": "见下文",
    "savingThrow": "见下文",
    "spellResist": "见下文",
    "desc": "如同标准愿望术，但只用于邪恶目的。你可以实现几乎任何愿望，但可能伴随着邪恶的代价。",
    "source": "3R"
  }
];
