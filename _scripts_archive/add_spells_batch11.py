#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
第11批法术追加 - 8环核心 + 9环核心
目标：达到250+法术
"""

spells_to_add = [
    # 8环核心法术
    {
        "id": "clone",
        "nameEn": "Clone",
        "nameZh": "克隆术",
        "level": 8,
        "school": "necromancy",
        "components": "V, S, M, F",
        "castingTime": "10分钟",
        "range": "0尺",
        "target": "你",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你创造一个自己的克隆体。克隆体在培养皿中成长（需要2d4个月）。如果你的本体死亡，你的灵魂转移到克隆体（HP1d10+体质调整值）。克隆体没有记忆过去。",
        "material": "一小块你自己的肉体（价值至少1000金币）",
        "focus": "一个培养皿（价值至少5000金币）",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "demand_death",
        "nameEn": "Demand Death",
        "nameZh": "要求死亡",
        "level": 8,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你要求目标死亡。目标必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到10d6点伤害。该法术对HD20或以上的生物无效。",
        "material": "一撮骨粉",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "dimensional_lock",
        "nameEn": "Dimensional Lock",
        "nameZh": "次元锁定",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你选择的点为中心，40尺半径扩散",
        "duration": "1天/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你锁定区域，阻止所有传送（传送术、任意门、异界传送等）和异次元旅行（星界投射、虚幻游走等）。该法术不影响 already in the area 的生物离开。",
        "material": "一块玫瑰石英",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "discern_lies",
        "nameEn": "Discern Lies",
        "nameZh": "识破谎言",
        "level": 8,
        "school": "divination",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "你可以看穿目标的所有谎言。如果目标说谎，你会立即知道。你也可以知道目标是真相信还是假装相信。该法术可以看穿所有非神力欺骗效果。",
        "focus": "一块水晶球",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8, "bard": 6},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8, "bard": 6}
    },
    {
        "id": "fear_mass",
        "nameEn": "Fear, Mass",
        "nameZh": "群体恐惧术",
        "level": 8,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你选择的点为中心，40尺半径扩散",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效",
        "spellResist": "可",
        "desc": "如恐惧术，但影响区域内所有生物。目标如果失败意志检定，会恐慌逃窜（如同恐慌状态）。",
        "material": "一块白狗的牙齿",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "fire_storm",
        "nameEn": "Fire Storm",
        "nameZh": "烈焰风暴",
        "level": 8,
        "school": "evocation",
        "components": "V, S",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你选择的点为中心，分为多个5尺立方的区域",
        "duration": "即时",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你召唤一场烈焰风暴。每个5尺立方造成1d6点火焰伤害+每等级1点（最大+20d6）。反射检定成功则伤害减半。水中的生物受到双倍伤害。",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8, "druid": 7},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8, "druid": 7}
    },
    {
        "id": "glasseel",
        "nameEn": "Glasseel",
        "nameZh": "镜钢术",
        "level": 8,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "一件金属武器或最多20尺立方的金属物体",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将金属物体转化为镜钢（一种魔法金属）。镜钢的硬度为20，HP每寸100点。金属武器获得+5增强加值。镜钢对顺利武器和顺利生物造成额外伤害。",
        "material": "一小块镜钢",
        "arcane": {"wizard": 8},
        "divine": None,
        "classes": {"wizard": 8}
    },
    {
        "id": "hammer_of_the_gods",
        "nameEn": "Hammer of the Gods",
        "nameZh": "神之锤",
        "level": 8,
        "school": "evocation",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则半数",
        "spellResist": "可",
        "desc": "你召唤一把巨大的魔法锤打击目标，造成1d6点伤害+每等级1点（最大+20d6）。通过的强韧检定将伤害减半。邪恶外位面生物受到双倍伤害。",
        "divine": {"cleric": 8},
        "arcane": None,
        "classes": {"cleric": 8}
    },
    {
        "id": "horn_of_valhalla",
        "nameEn": "Horn of Valhalla",
        "nameZh": "瓦尔基里号角",
        "level": 8,
        "school": "conjuration",
        "subSchool": "calling",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "近距",
        "effect": "召唤一个瓦尔基里战士",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你召唤一个瓦尔基里战士（Barbarian 10级）来协助你。召唤的战士服从你的命令，擅长近战。号角可以在战斗中吹响（自由动作），召唤额外的战士。",
        "material": "一个号角（价值至少5000金币）",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "incendiary_cloud",
        "nameEn": "Incendiary Cloud",
        "nameZh": "燃烧云",
        "level": 8,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "中距",
        "area": "云扩散范围（20尺半径，20尺高）",
        "duration": "1轮/级",
        "savingThrow": "反射过则半数",
        "spellResist": "可",
        "desc": "你创造出一片燃烧的云雾。云中的生物每轮受到3d6点火焰伤害。云可以被风吹散。反射检定成功则伤害减半。",
        "material": "一小瓶燃油",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "maze",
        "nameEn": "Maze",
        "nameZh": "迷宫术",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你将目标放逐到一个迷宫位面。目标必须成功法术抗力检定，否则被困在迷宫中。目标可以每轮尝试一次智力检定（DC=迷宫的DC）以逃离。逃离后出现在你附近。",
        "material": "一块大理石迷宫模型",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "moment_of_prescience",
        "nameEn": "Moment of Prescience",
        "nameZh": "预见时刻",
        "level": 8,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "最大1轮/级或直到触发",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你获得短暂的未来预见。在一次攻击、豁免、技能检定或属性检定前，你可以激活该法术获得+10洞察加值。该法术只能使用一次。",
        "material": "一张写有问题的纸条",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "power_word_stun",
        "nameEn": "Power Word Stun",
        "nameZh": "力量言语：震慑",
        "level": 8,
        "school": "enchantment",
        "components": "V",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你说出一个魔法字，使目标震慑。效果取决于目标的HP：HP100或以下：永久震慑（直到被解除）；HP101-200：震慑1d4+1轮；HP201+：无效。",
        "arcane": {"wizard": 8, "sorcerer": 8, "bard": 6},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8, "bard": 6}
    },
    {
        "id": "prismatic_wall",
        "nameEn": "Prismatic Wall",
        "nameZh": "虹光墙",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "一道垂直或水平的彩色墙（长10尺/级，高10尺/级）",
        "duration": "10分钟/级",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "你创造一道彩虹色的墙。墙有七层颜色，每层有不同的效果：红（1d6火伤害+目盲）、橙（2d6酸伤害+目眩）、黄（3d6电伤害+震慑）、绿（4d6毒伤害+即死豁免）、蓝（5d6即死豁免）、靛（放逐至异界）、紫（解离）。必须从一侧穿透所有层。",
        "material": "一块棱镜",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "repel_metal",
        "nameEn": "Repel Metal",
        "nameZh": "排斥金属",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, DF",
        "castingTime": "单动作",
        "range": "0尺",
        "area": "以你为中心，10尺半径/级的区域",
        "duration": "1分钟/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "所有金属物品和金属生物被排斥离开你。金属武器不能命中你。金属护甲失去AC加值。你可以在金属表面行走（如同行走于空气）。",
        "divine": {"druid": 8},
        "arcane": None,
        "classes": {"druid": 8}
    },
    {
        "id": "reverse_metamagic",
        "nameEn": "Reverse Metamagic",
        "nameZh": "反转超魔",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "见描述",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你可以反转一个指向你的超魔法术。当有人对你施展超魔法术时，你可以以一个即用法术动作施展反转超魔，将超魔效果反转回原施法者。",
        "material": "一块水晶",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": None,
        "classes": {"wizard": 8, "sorcerer": 8}
    },
    {
        "id": "serten_s_spell_resistance",
        "nameEn": "Serten's Spell Resistance",
        "nameZh": "瑟顿法术抗力",
        "level": 8,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1轮/级",
        "savingThrow": "意志过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得法术抗力（SR）= 15+你的施法者等级调整值。该法术抗力可以拒绝其他法术的影响。",
        "material": "一小块水晶",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "summon_monster_8",
        "nameEn": "Summon Monster VIII",
        "nameZh": "召唤怪物八",
        "level": 8,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个生物（列表见描述）",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "召唤以下生物之一：1) 1个8级怪兽（如炎魔、冰魔）；2) 1d4+1个7级怪兽；3) 1d4+2个6级怪兽；4) 2d6个5级怪兽。召唤的生物在你的控制下。",
        "focus": "一个价值至少1000金币的宝石（某些生物需要）",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8}
    },
    {
        "id": "sympathy",
        "nameEn": "Sympathy",
        "nameZh": "同情术",
        "level": 8,
        "school": "enchantment",
        "components": "V, S, M",
        "castingTime": "1轮",
        "range": "近距",
        "area": "放射范围（30尺）",
        "duration": "1天/级（见描述）",
        "savingThrow": "意志过则无效（见描述）",
        "spellResist": "可（见描述）",
        "desc": "你使一个区域或物体对某类生物产生同情。该类生物必须成功意志检定，否则会被吸引到该区域（如同魅力法术）。如果被迫离开区域，会获得恶心效果。该法术与厌恶术互斥。",
        "material": "一块磁铁和一根铁针",
        "arcane": {"wizard": 8, "sorcerer": 8},
        "divine": {"cleric": 8, "druid": 9},
        "classes": {"wizard": 8, "sorcerer": 8, "cleric": 8, "druid": 9}
    },
    # 9环核心法术
    {
        "id": "astral_projection",
        "nameEn": "Astral Projection",
        "nameZh": "星界投射",
        "level": 9,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "30分钟",
        "range": "近距",
        "target": "你和最多每等级1个自愿接触的生物",
        "duration": "见描述",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将你的星界体投射到星界位面。在星界位面中，你的身体留在原地（处于昏迷状态），而星界体可以自由旅行。你可以进入其他位面（通过星界位面作为中转）。",
        "material": "价值至少1000金币的珠宝",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9, "druid": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9, "druid": 9}
    },
    {
        "id": "edge_of_ultimate",
        "nameEn": "Edge of Ultimate",
        "nameZh": "终极之锋",
        "level": 9,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "一件手持锋利武器",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你的武器获得终极锋利。攻击造成最大伤害（掷骰結果取最大值）。武器获得+5增强加值，并且可以切割任何材料（硬度30以下）。",
        "material": "一块钻石（价值至少1000金币）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "energy_drain",
        "nameEn": "Energy Drain",
        "nameZh": "能量吸取",
        "level": 9,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "永久",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你吸取目标的所有生命能量。目标必须成功强韧检定，否则获得2d4个负向等级。每1d4分钟，目标必须再次进行强韧检定，否则负向等级变为永久（属性惩罚和HP损失）。",
        "material": "一撮骨粉",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "foresight",
        "nameEn": "Foresight",
        "nameZh": "预见术",
        "level": 9,
        "school": "divination",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "1轮/级",
        "savingThrow": "感知过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者获得对未来的短暂预见。受术者获得：AC+2洞察加值，豁免+2洞察加值，先攻+2洞察加值。该法术可以预测危险并自动采取适当行动。",
        "material": "一片水晶球碎片",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9, "druid": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9, "druid": 9}
    },
    {
        "id": "freedom",
        "nameEn": "Freedom",
        "nameZh": "自由术",
        "level": 9,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "接触",
        "target": "接触到的生物",
        "duration": "1轮/级",
        "savingThrow": "感知过则无效（无害）",
        "spellResist": "可（无害）",
        "desc": "受术者免疫以下效果：束缚（麻痹、石化、定身）、魅惑、胁迫、恐慌、睡眠、晕眩。受术者可以忽略重力和困难地形。该法术不移除已存在的效果。",
        "material": "一小片羽毛",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9, "druid": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9, "druid": 9}
    },
    {
        "id": "implosion",
        "nameEn": "Implosion",
        "nameZh": "内爆术",
        "level": 9,
        "school": "evocation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "强韧过则部分生效",
        "spellResist": "可",
        "desc": "你使目标的内部产生爆发。目标受到1d6点伤害/级（最大25d6）。通过的强韧检定将伤害减半。如果伤害将目标降至0HP或以下，目标被压缩为一个小肉球（死亡）。",
        "material": "一小块海绵",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "invulnerability",
        "nameEn": "Invulnerability",
        "nameZh": "无敌术",
        "level": 9,
        "school": "abjuration",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你获得对一切伤害的绝对免疫（包括即死效果、属性吸取、解离等）。你仍然可以受到非伤害效果的影响（如魅惑、胁迫、放逐等）。",
        "material": "一块钻石（价值至少5000金币）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "miracle",
        "nameEn": "Miracle",
        "nameZh": "神迹术",
        "level": 9,
        "school": "evocation",
        "components": "V, S, M, DF",
        "castingTime": "单动作",
        "range": "见描述",
        "target": "见描述",
        "duration": "见描述",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "你请求你的神祇施展一个奇迹。效果可以是：复活死者、治愈所有属性伤害、移除所有负向等级、摧毁一个HP不超过100的生物、创造一个永久物品、改变天气、或任何DM认为合理的请求（限于神祇的能力和领域）。",
        "material": "价值至少10000金币的祭品（某些请求需要）",
        "divine": {"cleric": 9},
        "arcane": None,
        "classes": {"cleric": 9}
    },
    {
        "id": "power_word_kill",
        "nameEn": "Power Word Kill",
        "nameZh": "力量言语：即死",
        "level": 9,
        "school": "enchantment",
        "components": "V",
        "castingTime": "单动作",
        "range": "中距",
        "target": "一个生物",
        "duration": "即时",
        "savingThrow": "无",
        "spellResist": "可",
        "desc": "你说出一个魔法字，立即杀死目标。效果取决于目标的HP：HP50或以下：立即死亡；HP51-100：受到4d6点伤害；HP101+：无效。该法术无视HP临时加值（如属于法术或效果）。",
        "arcane": {"wizard": 9, "sorcerer": 9, "bard": 7},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9, "bard": 7}
    },
    {
        "id": "prismatic_sphere",
        "nameEn": "Prismatic Sphere",
        "nameZh": "虹光球",
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
        "id": "shapechange_greater",
        "nameEn": "Shapechange, Greater",
        "nameZh": "高等变形术",
        "level": 9,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "如变形术，但你可以变成HD不超过你的施法者等级+10的任何生物。你可以获得该生物的所有能力和属性。你可以在法术持续时间内以自由动作改变形态（每轮一次）。",
        "material": "一块变形怪的皮",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"druid": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "druid": 9}
    },
    {
        "id": "soul_bind",
        "nameEn": "Soul Bind",
        "nameZh": "灵魂绑定",
        "level": 9,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "target": "一个刚死亡不超过1轮的生物",
        "duration": "永久",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你将刚死亡生物的灵魂绑定到一个宝石中。被绑定的灵魂无法复活或转生（除非宝石被摧毁且神迹术被施展）。宝石可以储存多个灵魂，但每个灵魂需要一个单独的宝石。",
        "material": "一个珍贵的宝石（价值至少1000金币）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "summon_monster_9",
        "nameEn": "Summon Monster IX",
        "nameZh": "召唤怪物九",
        "level": 9,
        "school": "conjuration",
        "subSchool": "summoning",
        "components": "V, S, F",
        "castingTime": "单动作",
        "range": "近距",
        "effect": "召唤一个生物（列表见描述）",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "召唤以下生物之一：1) 1个9级怪兽（如巴托地狱的最强恶魔、魔鬼或磷妖）；2) 1d4+1个8级怪兽；3) 1d4+2个7级怪兽；4) 2d6个6级怪兽。召唤的生物在你的控制下。",
        "focus": "一个价值至少1000金币的宝石（某些生物需要）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "teleportation_circle",
        "nameEn": "Teleportation Circle",
        "nameZh": "传送道标",
        "level": 9,
        "school": "conjuration",
        "subSchool": "teleportation",
        "components": "V, S, M",
        "castingTime": "10分钟",
        "range": "近距",
        "effect": "一个魔法道标（5尺半径）",
        "duration": "1轮/级",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "你创造一个传送道标。任何使用传送术或任意门法术的生物可以以该道标为目标（如同传送阵）。该法术可以用于创建永久传送网络。",
        "material": "价值至少5000金币的魔法粉末",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "time_stop",
        "nameEn": "Time Stop",
        "nameZh": "时间停止",
        "level": 9,
        "school": "transmutation",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "个人",
        "target": "你",
        "duration": "1d4+1轮",
        "savingThrow": "无",
        "spellResist": "否",
        "desc": "时间停止流动，除了你。你可以在停止的时间中自由行动（移动、攻击、施展法术等）。其他生物在时间停止期间无法行动。时间停止结束后，一切恢复正常。该法术不能在时间停止期间影响其他生物（除了创造 persistent 效果）。",
        "material": "一块钻石（价值至少5000金币）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": None,
        "classes": {"wizard": 9, "sorcerer": 9}
    },
    {
        "id": "wail_of_the_banshee",
        "nameEn": "Wail of the Banshee",
        "nameZh": "女妖之嚎",
        "level": 9,
        "school": "necromancy",
        "components": "V, S, M",
        "castingTime": "单动作",
        "range": "近距",
        "area": "以你选择的点为中心，40尺半径扩散",
        "duration": "即时",
        "savingThrow": "强韧过则无效",
        "spellResist": "可",
        "desc": "你发出一声恐怖的尖嚎。范围内所有生物必须成功强韧检定，否则立即死亡（如同即死效果）。通过的强韧检定则目标受到3d6点属性吸取（随机属性）。",
        "material": "一块黑曜石",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
    },
    {
        "id": "wish",
        "nameEn": "Wish",
        "nameZh": "祈愿术",
        "level": 9,
        "school": "universal",
        "components": "V, S, M, XP",
        "castingTime": "单动作",
        "range": "见描述",
        "target": "见描述",
        "duration": "见描述",
        "savingThrow": "见描述",
        "spellResist": "见描述",
        "desc": "你许下一个愿望。愿望可以是：复活死者、治愈所有伤害、获得+10内在加值、创造魔法物品、改变现实等。使用祈愿术有风险：每次使用有33%几率再也无法施展祈愿术（除非通过有限祈愿术或奇迹术恢复）。",
        "material": "价值至少25000金币的珠宝",
        "xpCost": "5000 XP（某些愿望需要）",
        "arcane": {"wizard": 9, "sorcerer": 9},
        "divine": {"cleric": 9},
        "classes": {"wizard": 9, "sorcerer": 9, "cleric": 9}
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
new_content = content[:end_pos] + ',\n  // ===== Batch 11: 8th & 9th level core =====\n' + spells_js + '\n' + content[end_pos:]

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
