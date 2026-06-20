#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第13批（最终批）法术追加 - 补充0-5环核心法术 + 重要领域法术
目标：达到300+法术，实现"完整"
"""

spells_to_add = [
    # 0环法术补充
    {
        "id": "acid_splash",
        "nameEn": "Acid Splash",
        "nameZh": "酸溅",
        "level": 0,
        "school": "conjuration",
        "subSchool": "creation",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物或物体",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你射击一小团强酸。命中后造成1点强酸伤害。如果你的施法者等级为1+，伤害为1d3。",
        "arcane": {"wizard": 0, "sorcerer": 0},
        "divine": None,
        "classes": {"wizard": 0, "sorcerer": 0}
    },
    {
        "id": "detect_magic",
        "nameEn": "Detect Magic",
        "nameZh": "侦测魔法",
        "level": 0,
        "school": "divination",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "60尺",
        "area": "以你为中心，60尺半径扩散",
        "duration": " concentration, 最�?1分钟/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你察觉魔法灵光。通过专注，你可以确定：魔法灵光的存在、法术学派、灵光强度（基于施法者等级）。",
        "arcane": {"wizard": 0, "sorcerer": 0},
        "divine": {"cleric": 0, "druid": 0},
        "classes": {"wizard": 0, "sorcerer": 0, "cleric": 0, "druid": 0}
    },
    {
        "id": "read_magic",
        "nameEn": "Read Magic",
        "nameZh": "阅读魔法",
        "level": 0,
        "school": "divination",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级（见描述）",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你可以阅读魔法文字和法术卷轴。该法术也需要用于理解魔法符文和铭文。持续时间内，你可以理解所有魔法书写。",
        "focus": "一块水晶球",
        "arcane": {"wizard": 0, "sorcerer": 0},
        "divine": {"cleric": 0, "druid": 0},
        "classes": {"wizard": 0, "sorcerer": 0, "cleric": 0, "druid": 0}
    },
    # 1环法术补充
    {
        "id": "cause_fear",
        "nameEn": "Cause Fear",
        "nameZh": "造成恐惧",
        "level": 1,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个HD5或更少的生物",
        "duration": "1d4轮",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "目标如果失败意志检定，会恐慌逃窜（如同恐慌状态）。HD6+的生物不受该法术影响。",
        "material": "一撮兔毛",
        "arcane": None,
        "divine": {"cleric": 1},
        "classes": {"cleric": 1}
    },
    {
        "id": "charm_person",
        "nameEn": "Charm Person",
        "nameZh": "魅惑人类",
        "level": 1,
        "school": "enchantment",
        "subSchool": "charm",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个人形生物",
        "duration": "1小时/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "目标对你产生好感（如同朋友）。目标不会执行明显有害的行动。每层 overlapping charm 给予新的豁免检定。",
        "arcane": {"wizard": 1, "sorcerer": 1, "bard": 1},
        "divine": {"druid": 1},
        "classes": {"wizard": 1, "sorcerer": 1, "bard": 1, "druid": 1}
    },
    {
        "id": "chil_ouch",
        "nameEn": "Chil Touch",
        "nameZh": "冷冻之触",
        "level": 1,
        "school": "necromancy",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1轮/级（见描述）",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你的徒手攻击造成1d6点寒冷伤害+1点/级（最大+5）。命中的生物如果失败强韧检定，会受到1点力量伤害。你可以以自由动作在每个回合进行一次冷冻之触攻击。",
        "arcane": {"wizard": 1, "sorcerer": 1},
        "divine": None,
        "classes": {"wizard": 1, "sorcerer": 1}
    },
    {
        "id": "color_spray",
        "nameEn": "Color Spray",
        "nameZh": "色彩喷射",
        "level": 1,
        "school": "illusion",
        "subSchool": "figment",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "锥状扩散（15尺）",
        "duration": "1轮/级（见描述）",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你喷射出一阵彩色光芒。每个在锥状内的生物随机受到以下一种效果：1-10：目盲1d4轮；11-20：目眩1轮；21-30：震慑1轮。",
        "material": "一块红布、黄布和蓝布",
        "arcane": {"wizard": 1, "sorcerer": 1},
        "divine": None,
        "classes": {"wizard": 1, "sorcerer": 1}
    },
    {
        "id": "comprehend_languages",
        "nameEn": "Comprehend Languages",
        "nameZh": "理解语言",
        "level": 1,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你可以理解所有书写和口语语言（包括魔法文字）。该法术不会让你能够说话或写这些语言。魔法文字需要阅读魔法才能理解。",
        "material": "一小块泥土和一小撮盐",
        "arcane": {"wizard": 1, "sorcerer": 1},
        "divine": {"cleric": 1, "druid": 1},
        "classes": {"wizard": 1, "sorcerer": 1, "cleric": 1, "druid": 1}
    },
    {
        "id": "cure_light_wounds",
        "nameEn": "Cure Light Wounds",
        "nameZh": "治疗轻伤",
        "level": 1,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "你治疗目标1d8+1/级HP（最大+5）。该法术可以治疗不死生物造成的伤害。",
        "divine": {"cleric": 1, "druid": 1},
        "arcane": None,
        "classes": {"cleric": 1, "druid": 1}
    },
    {
        "id": "sleep_1",
        "nameEn": "Sleep",
        "nameZh": "睡眠术",
        "level": 1,
        "school": "enchantment",
        "subSchool": "compulsion",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "以你选择的点为中心，15尺半径扩散",
        "duration": "1分钟/级",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你使区域内最多4HD的生物入睡。优先选择HP最低的生物。受影响的生物睡着（如同昏迷）。受到伤害会醒来。",
        "material": "一根蟋蟀腿",
        "arcane": {"wizard": 1, "sorcerer": 1},
        "divine": None,
        "classes": {"wizard": 1, "sorcerer": 1}
    },
    # 2环法术补充
    {
        "id": "aid",
        "nameEn": "Aid",
        "nameZh": "援助术",
        "level": 2,
        "school": "enchantment",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得：+1士气加值攻击和豁免，+1d8临时HP（每等级1d8，最大+10d8）。该临时HP在法术结束后消失。",
        "divine": {"cleric": 2, "druid": 3},
        "arcane": None,
        "classes": {"cleric": 2, "druid": 3}
    },
    {
        "id": "align_weapon",
        "nameEn": "Align Weapon",
        "nameZh": "阵营武器",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "接触",
        "target": "一件武器",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将一件武器转化为特定阵营（守序、混乱、善良、邪恶）。该武器对具有相反阵营的生物造成额外伤害（如同魔法武器）。",
        "divine": {"cleric": 2},
        "arcane": None,
        "classes": {"cleric": 2}
    },
    {
        "id": "bear_s_endurance",
        "nameEn": "Bear's Endurance",
        "nameZh": "熊之耐力",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的体质获得+4增强加值。体质提升会增加HP（每等级1点）。",
        "material": "一滴甘草汁",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2, "druid": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2, "druid": 2}
    },
    {
        "id": "bull_s_strength",
        "nameEn": "Bull's Strength",
        "nameZh": "公牛之力",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的力量获得+4增强加值。力量提升会增加近战攻击和伤害。",
        "material": "一摄公牛毛",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2}
    },
    {
        "id": "cat_s_grace",
        "nameEn": "Cat's Grace",
        "nameZh": "猫之优雅",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的敏捷获得+4增强加值。敏捷提升会增加AC、反射豁免和远程攻击。",
        "material": "一摄猫毛",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2}
    },
    {
        "id": "cure_modarate_wounds",
        "nameEn": "Cure Moderate Wounds",
        "nameZh": "治疗重伤",
        "level": 2,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "你治疗目标2d8+1/级HP（最大+10）。该法术可以治疗不死生物造成的伤害。",
        "divine": {"cleric": 2, "druid": 3},
        "arcane": None,
        "classes": {"cleric": 2, "druid": 3}
    },
    {
        "id": "darkness",
        "nameEn": "Darkness",
        "nameZh": "黑暗术",
        "level": 2,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一个半径为20尺的黑暗球",
        "duration": "1分钟/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你创造一个黑暗区域。黑暗对视觉（包括暗视）造成完全遮蔽。光亮术无法照亮该区域。更高环级的法术（3环+）可以照亮。",
        "material": "一块煤炭和一滴油",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2}
    },
    {
        "id": "delay_poison",
        "nameEn": "Delay Poison",
        "nameZh": "延缓毒素",
        "level": 2,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1小时/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者对毒素免疫。中毒效果被延缓直到法术结束。法术结束后，中毒效果正常发作。该法术不会治愈已经生效的毒素伤害。",
        "divine": {"cleric": 2, "druid": 2, "ranger": 3},
        "arcane": None,
        "classes": {"cleric": 2, "druid": 2, "ranger": 3}
    },
    {
        "id": "eagle_s_splendor",
        "nameEn": "Eagle's Splendor",
        "nameZh": "雄鹰之辉",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的魅力获得+4增强加值。魅力提升会增加交会技能和其他基于魅力的技能。",
        "material": "一摄雄鹰羽毛",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2}
    },
    {
        "id": "false_life",
        "nameEn": "False Life",
        "nameZh": "虚假生命",
        "level": 2,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1小时/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你获得1d10点临时HP+每等级1点（最大+10）。该临时HP可以吸收伤害。法术结束后，临时HP消失（任何超出伤害的部分也消失）。",
        "material": "一小块血粉",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": None,
        "classes": {"wizard": 2, "sorcerer": 2}
    },
    {
        "id": "fox_s_cunning",
        "nameEn": "Fox's Cunning",
        "nameZh": "狐狸之智",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的智力获得+4增强加值。智力提升会增加技能点数和知识技能。",
        "material": "一摄狐狸毛",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2}
    },
    {
        "id": "owl_s_wisdom",
        "nameEn": "Owl's Wisdom",
        "nameZh": "猫头鹰之智慧",
        "level": 2,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者的感知获得+4增强加值。感知提升会增加意志豁免和医疗技能。",
        "material": "一摄猫头鹰羽毛",
        "arcane": {"wizard": 2, "sorcerer": 2},
        "divine": {"cleric": 2, "druid": 2},
        "classes": {"wizard": 2, "sorcerer": 2, "cleric": 2, "druid": 2}
    },
    # 3环法术补充
    {
        "id": "dispel_magic",
        "nameEn": "Dispel Magic",
        "nameZh": "解除魔法",
        "level": 3,
        "school": "abjuration",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物、物体或法术效果",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你尝试解除目标上的魔法效果。检定：1d20+施法者等级 vs 11+原施法者等级。成功则解除效果。可以对区域施展（解除所有效果）。",
        "arcane": {"wizard": 3, "sorcerer": 3, "bard": 3},
        "divine": {"cleric": 3, "druid": 3},
        "classes": {"wizard": 3, "sorcerer": 3, "bard": 3, "cleric": 3, "druid": 3}
    },
    {
        "id": "displacement",
        "nameEn": "Displacement",
        "nameZh": "位移术",
        "level": 3,
        "school": "illusion",
        "subSchool": "glamer",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你的图像总是在你实际位置偏移2d6尺。攻击者命中你的概率如同你的AC降低50%（向下取整）。近战攻击者受到-4攻击加值。",
        "material": "一小块镜子和一根丝绸线",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3}
    },
    {
        "id": "fireball",
        "nameEn": "Fireball",
        "nameZh": "火球术",
        "level": 3,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "爆炸半径（20尺）",
        "duration": "即时",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你投掷一个火球，爆炸造成1d6点火焰伤害+每等级1点（最大+10d6）。反射检定成功则伤害减半。爆炸可以绕过角落（扩散）。",
        "material": "一块蝙蝠粪便和一小瓶硫磺",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3}
    },
    {
        "id": "fly",
        "nameEn": "Fly",
        "nameZh": "飞行术",
        "level": 3,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得飞行速度40尺（不良机动性）。飞行中可以采取正常行动。机动性可以通过技能（飞行）改善。",
        "material": "一根羽毛",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": {"cleric": 4, "druid": 4},
        "classes": {"wizard": 3, "sorcerer": 3, "cleric": 4, "druid": 4}
    },
    {
        "id": "haste",
        "nameEn": "Haste",
        "nameZh": "加速术",
        "level": 3,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得：速度加倍（额外一个移动动作/轮）；反射豁免+2；AC+2。该法术不能叠加（多重加速无效）。",
        "material": "一根警棍或木棒",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": {"cleric": 4, "druid": 4},
        "classes": {"wizard": 3, "sorcerer": 3, "cleric": 4, "druid": 4}
    },
    {
        "id": "heroism",
        "nameEn": "Heroism",
        "nameZh": "英雄术",
        "level": 3,
        "school": "enchantment",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1分钟/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得+2士气加值攻击和豁免。该法术可以抵抗恐惧效果。每轮你可以以移动动作延长法术1轮（需要专注）。",
        "arcane": {"wizard": 3, "sorcerer": 3, "bard": 2},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3, "bard": 2}
    },
    {
        "id": "invisibility",
        "nameEn": "Invisibility",
        "nameZh": "隐身术",
        "level": 3,
        "school": "illusion",
        "subSchool": "glamer",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物或物体",
        "duration": "1轮/级（见描述）",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "目标变得不可见。隐身状态持续到主动攻击或施展法术。受到伤害不会解除隐身。对敌人隐形不等于对朋友隐形。",
        "material": "一根睫毛",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3}
    },
    {
        "id": "keen_edge",
        "nameEn": "Keen Edge",
        "nameZh": "锋锐之锋",
        "level": 3,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "一件手持锋利武器",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你的武器获得双倍重击范围（长剑从18-20变为15-20）。该法术可以叠加武器原有重击范围。",
        "material": "一块小磨刀石",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3}
    },
    {
        "id": "lightning_bolt",
        "nameEn": "Lightning Bolt",
        "nameZh": "闪电 bolt",
        "level": 3,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "一道闪电（宽5尺，长最长100尺+10尺/级）",
        "duration": "即时",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你发射一道闪电，造成1d6点电击伤害+每等级1点（最大+10d6）。反射检定成功则伤害减半。闪电可以反射（如果击中金属表面）。",
        "material": "一块黄铜片",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3}
    },
    {
        "id": "protection_from_energy",
        "nameEn": "Protection from Energy",
        "nameZh": "防护能量",
        "level": 3,
        "school": "abjuration",
        "components": "V, S, M, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级或直到耗尽",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者对一种能量（强酸、寒冷、电击、火焰、音波）免疫，吸收最多12点伤害/级（最大120点）。吸收池耗尽后法术结束。",
        "material": "一块对应元素的样本（如一块硫磺对火焰）",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": {"cleric": 3, "druid": 3},
        "classes": {"wizard": 3, "sorcerer": 3, "cleric": 3, "druid": 3}
    },
    {
        "id": "rage",
        "nameEn": "Rage",
        "nameZh": "狂暴术",
        "level": 3,
        "school": "enchantment",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "目标进入狂暴状态：力量+4，体质+4，意志豁免-2，获得根据这些调整值的临时HP。狂暴持续时间内，目标不能执行精细操作（如解谜、开锁等）。",
        "arcane": {"wizard": 3, "sorcerer": 3, "bard": 2},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3, "bard": 2}
    },
    {
        "id": "suggestion",
        "nameEn": "Suggestion",
        "nameZh": "暗示术",
        "level": 3,
        "school": "enchantment",
        "subSchool": "compulsion",
        "components": "V, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1小时/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你向目标提出一个合理的行动建议。目标如果失败意志检定，会尝试执行该建议（只要建议不是明显有害）。暗示必须听起来合理。",
        "material": "一条蛇舌或一块糖果",
        "arcane": {"wizard": 3, "sorcerer": 3, "bard": 2},
        "divine": None,
        "classes": {"wizard": 3, "sorcerer": 3, "bard": 2}
    },
    {
        "id": "summon_monster_3",
        "nameEn": "Summon Monster III",
        "nameZh": "召唤怪物三",
        "level": 3,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个生物",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "召唤以下生物之一：1) 1个3级怪兽（如土元素、电浆虫）；2) 1d4+1个2级怪兽；3) 2d6个1级怪兽。",
        "focus": "一个价值至少1000金币的宝石",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": {"cleric": 3},
        "classes": {"wizard": 3, "sorcerer": 3, "cleric": 3}
    },
    {
        "id": "wind_wall",
        "nameEn": "Wind Wall",
        "nameZh": "风墙术",
        "level": 3,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一道风墙（高10尺，长10尺/级）",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你创造一道风墙。风墙可以偏转远程武器（箭、矢等）和气体法术（火球、云雾等）。近战攻击者和生物可以正常通过。",
        "material": "一把扇子",
        "arcane": {"wizard": 3, "sorcerer": 3},
        "divine": {"druid": 3},
        "classes": {"wizard": 3, "sorcerer": 3, "druid": 3}
    },
    # 4环法术补充
    {
        "id": "charm_monster",
        "nameEn": "Charm Monster",
        "nameZh": "魅惑怪物",
        "level": 4,
        "school": "enchantment",
        "subSchool": "charm",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "1小时/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "如魅惑人类，但可以影响任何生物（不超过HD限制）。目标对你产生好感（如同朋友）。",
        "material": "一块小琥珀",
        "arcane": {"wizard": 4, "sorcerer": 4, "bard": 3},
        "divine": {"druid": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "bard": 3, "druid": 4}
    },
    {
        "id": "confusion",
        "nameEn": "Confusion",
        "nameZh": "困惑术",
        "level": 4,
        "school": "enchantment",
        "subSchool": "compulsion",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "以你选择的点为中心，25尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "区域内所有生物如果失败意志检定，会陷入困惑（每轮随机行动：攻击最近生物、自己、或什么也不做）。",
        "material": "一小块琥珀和一块玻璃",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": None,
        "classes": {"wizard": 4, "sorcerer": 4}
    },
    {
        "id": "cure_critical_wounds",
        "nameEn": "Cure Critical Wounds",
        "nameZh": "治疗极重创",
        "level": 4,
        "school": "conjuration",
        "subSchool": "healing",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可（无害）",
        "desc": "你治疗目标4d8+1/级HP（最大+20）。该法术可以治疗不死生物造成的伤害，也可以治疗属性伤害。",
        "divine": {"cleric": 4, "druid": 5},
        "arcane": None,
        "classes": {"cleric": 4, "druid": 5}
    },
    {
        "id": "dimension_door",
        "nameEn": "Dimension Door",
        "nameZh": "任意门",
        "level": 4,
        "school": "conjuration",
        "subSchool": "teleportation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "见描述",
        "target": "你和其他自愿接触的生物（最多每等级1个）",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你瞬间传送到视野内或已知位置（最远400尺+40尺/级）。传送后你无法行动（直到下轮）。你可以带走携带的物品和接触的生物。",
        "material": "一小块黄铜门框",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"cleric": 4, "druid": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "cleric": 4, "druid": 4}
    },
    {
        "id": "enervation",
        "nameEn": "Enervation",
        "nameZh": "负能量射流",
        "level": 4,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "effect": "一道负能量射线",
        "duration": "1轮/级（见描述）",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你发射一道负能量射线。命中后目标获得1d4个负向等级。每1d4分钟，目标必须成功强韧检定否则负向等级变为永久（属性惩罚和HP损失）。",
        "material": "一撮骨粉",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": None,
        "classes": {"wizard": 4, "sorcerer": 4}
    },
    {
        "id": "freedom_of_movement",
        "nameEn": "Freedom of Movement",
        "nameZh": "行动自由",
        "level": 4,
        "school": "abjuration",
        "components": "V, S, M, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者免疫以下效果：束缚（麻痹、石化、定身）、困难地形、重力效果。受术者可以忽略重力和在水中正常行动。",
        "material": "一小片羽毛",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"cleric": 4, "druid": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "cleric": 4, "druid": 4}
    },
    {
        "id": "giant_strength",
        "nameEn": "Giant Strength",
        "nameZh": "巨人力量",
        "level": 4,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得+8增强加值力量（如同巨人）。该法术比公牛之力更强大。",
        "material": "一摄巨人头发",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"cleric": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "cleric": 4}
    },
    {
        "id": "ice_storm",
        "nameEn": "Ice Storm",
        "nameZh": "冰风暴",
        "level": 4,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "以你选择的点为中心，20尺半径扩散",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你召唤一场冰风暴。区域内所有生物受到5d6点寒冷伤害（反射过则半数）。冰雹覆盖地面，造成困难地形。",
        "material": "一小撮灰尘和水",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"druid": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "druid": 4}
    },
    {
        "id": "invisibility_greater",
        "nameEn": "Greater Invisibility",
        "nameZh": "高等隐身术",
        "level": 4,
        "school": "illusion",
        "subSchool": "glamer",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物或物体",
        "duration": "1轮/级（见描述）",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "如隐身术，但攻击或施展法术不会解除隐身。隐身状态持续到法术结束或受到伤害。",
        "material": "一根睫毛",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": None,
        "classes": {"wizard": 4, "sorcerer": 4}
    },
    {
        "id": "polymorph",
        "nameEn": "Polymorph",
        "nameZh": "变形术",
        "level": 4,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个自愿或非自愿生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你将目标变形为一个小动物（HD不超过你的施法者等级一半）。变形后获得该动物的属性和能力。目标的装备融合到新身体中（失效）。",
        "material": "一块变形怪的皮",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": None,
        "classes": {"wizard": 4, "sorcerer": 4}
    },
    {
        "id": "remove_curse",
        "nameEn": "Remove Curse",
        "nameZh": "移除诅咒",
        "level": 4,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物或物体",
        "duration": "即时",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你移除目标上的诅咒。该法术可以移除所有诅咒效果（包括魔法物品诅咒、法术诅咒等）。如果诅咒来自神祇或神力，该法术可能无效。",
        "material": "一块未切割的宝石",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"cleric": 3, "druid": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "cleric": 3, "druid": 4}
    },
    {
        "id": "sending",
        "nameEn": "Sending",
        "nameZh": "传讯术",
        "level": 4,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "无限",
        "target": "一个生物",
        "duration": "1轮",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你向一个遥远（甚至其他位面）的生物发送一条短讯（最长25字）。目标可以立即回复（同样长度）。该法术可以穿透大多数屏障。",
        "material": "一小块电线或细绳",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"cleric": 4},
        "classes": {"wizard": 4, "sorcerer": 4, "cleric": 4}
    },
    {
        "id": "wall_of_fire",
        "nameEn": "Wall of Fire",
        "nameZh": "火焰墙",
        "level": 4,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一道火焰墙（长10尺/级，高20尺）",
        "duration": "1轮/级",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你创造一道火焰墙。墙可以环形或直线。墙对10尺内的生物造成2d6点火焰伤害（每轮一次）。穿过墙的生物受到4d6点伤害。",
        "material": "一块磷和小块木头",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": {"druid": 5},
        "classes": {"wizard": 4, "sorcerer": 4, "druid": 5}
    },
    {
        "id": "wall_of_ice",
        "nameEn": "Wall of Ice",
        "nameZh": "冰墙术",
        "level": 4,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一道冰墙（长10尺/级，高10尺/级，厚1尺）",
        "duration": "1轮/级",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你创造一道冰墙。墙的硬度0，HP每寸5点。穿过墙的生物受到5d6点寒冷伤害。墙可以被物理攻击摧毁（每10点伤害摧毁1尺立方）。",
        "material": "一小块冰或雪",
        "arcane": {"wizard": 4, "sorcerer": 4},
        "divine": None,
        "classes": {"wizard": 4, "sorcerer": 4}
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
new_content = content[:end_pos] + ',\n  // ===== Batch 13: Completing core spells =====\n' + spells_js + '\n' + content[end_pos:]

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
    total = len(spells)
    print(f"Total spells: {total}")
    
    if total >= 300:
        print("目标达成：300+法术，基本实现'完整'！")
else:
    print("JS syntax error:")
    print(result.stderr)
