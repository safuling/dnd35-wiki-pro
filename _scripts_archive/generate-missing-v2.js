/**
 *  generate-missing-spells-v2.js
 * 正确生成66个缺失领域法术的数据
 * 输出为 js/spells-data-extra.js（自动合并到 SPELLS 数组）
 */

const fs = require('fs');

// 66个缺失法术的完整数据
const NEW_SPELLS = [
  // ========== 气领域 ==========
  {
    id: "obscuring_mist",
    nameEn: "Obscuring Mist",
    nameZh: "迷雾术",
    level: 1,
    school: "咒法系",
    subschool: "创造",
    descriptor: "",
    components: "V, S",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "以你为中心的弥散范围",
    duration: "1分钟/环",
    savingThrow: "无",
    spellResist: "否",
    desc: "你周围会弥漫一股浓密的雾气，使所有穿过该区域的生物的有效视野缩短至5尺。远程攻击无法穿过迷雾，侦测类和侦察检定会受到-5惩罚。迷雾可以被风驱散（彼岸风时髦每轮吹散20尺半径）。",
    arcane: { wizard: 1, sorcerer: 1 },
    divine: { cleric: 1, druid: 1 },
    classes: { wizard: 1, sorcerer: 1, cleric: 1, druid: 1 }
  },
  {
    id: "air_walk",
    nameEn: "Air Walk",
    nameZh: "空气行走",
    level: 4,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "10分钟/环",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "受术者能在空中行走，如同在坚实的地面上一般。受术者可以爬升、下降、甚至沿对角线移动，速度如同地面移动。受术者获得 speeds 如同具有飞行速度（机动性：完美）。该法术使受术者不会坠落。",
    arcane: { wizard: 4, sorcerer: 4 },
    divine: { cleric: 4, druid: 4 },
    classes: { wizard: 4, sorcerer: 4, cleric: 4, druid: 4 }
  },
  {
    id: "control_winds",
    nameEn: "Control Winds",
    nameZh: "控制风力",
    level: 5,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "以你为中心，半径100尺的弥散区域",
    duration: "10分钟/环",
    savingThrow: "强韧过则减半",
    spellResist: "否",
    desc: "你改变天然风的速度和方向。在法术持续期间，你可以改变风力。你可以使风力增强或减弱，最高可达飓风级别（风速110尺，DC25强韧豁免避免被吹走）。强风会阻碍飞行、远程攻击和声音传达。",
    arcane: null,
    divine: { druid: 5 },
    classes: { druid: 5 }
  },

  // ========== 动物领域 ==========
  {
    id: "calm_animals",
    nameEn: "Calm Animals",
    nameZh: "安抚动物",
    level: 1,
    school: "惑控系",
    subschool: "强迫",
    descriptor: "[影响心灵]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每等级1只动物的放射区域",
    duration: "专注",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "该法术可以使动物平静下来，使其不会攻击或逃跑。平静的动物无法攻击或施展任何攻击性行动，但它们会保护自己。如果受到攻击，该法术终止。该法和可以压制魅惑和恐惧效果。",
    arcane: null,
    divine: { druid: 1, ranger: 1 },
    classes: { druid: 1, ranger: 1 }
  },
  {
    id: "hold_animal",
    nameEn: "Hold Animal",
    nameZh: "禁锢动物",
    level: 2,
    school: "惑控系",
    subschool: "强迫",
    descriptor: "[影响心灵]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "中距 (100尺+10尺/环)",
    target: "一个动物",
    duration: "1轮/环",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "你使一个动物无法移动。受术动物不能行动，但可以进行豁免检定。如果受术者受到伤害，它可以尝试新的意志豁免来打破控制。该法术对超大型或更大的动物无效。",
    arcane: null,
    divine: { druid: 2, ranger: 2 },
    classes: { druid: 2, ranger: 2 }
  },
  {
    id: "dominate_animal",
    nameEn: "Dominate Animal",
    nameZh: "支配动物",
    level: 3,
    school: "惑控系",
    subschool: "强迫",
    descriptor: "[影响心灵]",
    components: "V, S",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "一个动物",
    duration: "1轮/环",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "你在精神上控制一个动物。你可以使它执行任何你所说的行动（最多一个句子）。受术者不会执行明显有害的行动。每次受术者受到伤害，它可以尝试新的意志豁免来打破控制。该法术对超大型或更大的动物无效。",
    arcane: null,
    divine: { druid: 3 },
    classes: { druid: 3 }
  },
  {
    id: "summon_natures_ally_4",
    nameEn: "Summon Nature's Ally IV",
    nameZh: "召唤自然盟友 IV",
    level: 4,
    school: "咒法系",
    subschool: "召唤",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作（见描述）",
    range: "近距 (25尺+5尺/2环)",
    target: "见描述",
    duration: "1轮/环（D）",
    savingThrow: "无",
    spellResist: "否",
    desc: "你召唤一个自然生物为你作战。你可以召唤一个4 HD的同盟，或者多个较弱的生物（总计不超过4 HD）。召唤的生物在你的指挥下行动。该法术在施法后立即生效，召唤生物会在你的身边出现。",
    arcane: null,
    divine: { druid: 4, ranger: 4 },
    classes: { druid: 4, ranger: 4 }
  },
  {
    id: "antilife_shell",
    nameEn: "Antilife Shell",
    nameZh: "反生命壳",
    level: 6,
    school: "防护系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "10尺",
    target: "以你为中心，半径10尺的弥散区域",
    duration: "1轮/环（D）",
    savingThrow: "无",
    spellResist: "否",
    desc: "你创造一个排斥所有活物的壳。任何活着的生物（生命骰1或更高）都无法穿过这个壳。不死生物、构装生物、元素生物和泥形生物不受影响。壳内的生物可以正常通过壳壁离开。活物试图进入壳内会被阻止。",
    arcane: null,
    divine: { druid: 6 },
    classes: { druid: 6 }
  },
  {
    id: "animal_shapes",
    nameEn: "Animal Shapes",
    nameZh: "动物形态",
    level: 7,
    school: "变化系",
    subschool: "变身",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每等级1个自愿生物",
    duration: "1小时/环（D）",
    savingThrow: "无",
    spellResist: "否",
    desc: "你可以将自愿的生物变成任何你选择的动物形态。每个目标变成同一种动物。你可以选择任何体型在超微小到超大型之间的动物。目标保留自己的属性，但获得所变动物的天然武器和特殊能力（如飞行、游泳、嗅觉等）。",
    arcane: null,
    divine: { druid: 7 },
    classes: { druid: 7 }
  },

  // ========== 混乱领域 ==========
  {
    id: "protection_from_law",
    nameEn: "Protection from Law",
    nameZh: "防护律法",
    level: 1,
    school: "防护系",
    subschool: "",
    descriptor: "[混乱]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "1分钟/环",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "该法术在受术者周围创造一个魔法屏障，保护其免受守序生物的攻击。受术者对守序生物的近战和远程攻击有+2偏斜加值，对守序生物的法术和类法术能力有+2抗性加值。此外，受术者不受守序生物的魅惑和胁迫效果影响。该法术对混乱生物无害。",
    arcane: null,
    divine: { cleric: 1 },
    classes: { cleric: 1 }
  },
  {
    id: "chaos_hammer",
    nameEn: "Chaos Hammer",
    nameZh: "混乱之锤",
    level: 4,
    school: "塑能系",
    subschool: "",
    descriptor: "[混乱][声波]",
    components: "V, S",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每3等级1个守序生物的放射区域",
    duration: "瞬时",
    savingThrow: "强韧过则减半",
    spellResist: "是",
    desc: "你发射一道混乱能量的冲击波，对守序生物造成1d8点伤害每2施法者等级（最高5d8）。守序生物如果未能通过强韧检定，会耳聋1d4轮。混乱生物不受该法术影响。该法术对守序异位面生物（如守序巨灵、守序元素）额外造成1d6点伤害。",
    arcane: null,
    divine: { cleric: 4 },
    classes: { cleric: 4 }
  },
  {
    id: "animate_objects",
    nameEn: "Animate Objects",
    nameZh: "活化物体",
    level: 6,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "中距 (100尺+10尺/环)",
    target: "见描述",
    duration: "1轮/环",
    savingThrow: "无",
    spellResist: "否",
    desc: "你使无生命物体变成你的仆从。你可以活化至多每等级25磅重量的物体。活化的物体会攻击你的敌人或执行你的命令。物体的战斗能力取决于其大小和类型：微小（2-8磅）攻击加值+2，造成1d4-1伤害；小型（9-32磅）+1，1d4；中型（33-250磅）+0，1d6；大型（251-2000磅）-1，1d8；超大型（2001-16000磅）-2，2d6。活化物体有AC根据体型调整。",
    material: "一个槐木树枝",
    arcane: { wizard: 6, sorcerer: 6 },
    divine: null,
    classes: { wizard: 6, sorcerer: 6 }
  },
  {
    id: "cloak_of_chaos",
    nameEn: "Cloak of Chaos",
    nameZh: "混乱之袍",
    level: 8,
    school: "防护系",
    subschool: "",
    descriptor: "[混乱]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "见描述",
    duration: "1轮/环（D）",
    savingThrow: "见描述",
    spellResist: "是（见描述）",
    desc: "该法术的功能如同混乱版的「邪阵」。所有受影响的目标对守序法术和类法术能力有+4抗力加值，对守序生物的魅惑和胁迫效果有抗性。此外，该法术使受术者不受「律法」描述符的法术影响。混乱生物在法术中受到保护。",
    arcane: null,
    divine: { cleric: 8 },
    classes: { cleric: 8 }
  },

  // ========== 死亡领域 ==========
  {
    id: "death_knell",
    nameEn: "Death Knell",
    nameZh: "死亡丧钟",
    level: 2,
    school: "死灵系",
    subschool: "",
    descriptor: "[死亡][邪恶]",
    components: "V, S",
    castingTime: "标准动作",
    range: "中距 (100尺+10尺/环)",
    target: "一个生命骰小于你的生物",
    duration: "瞬时（见描述）",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "你吸取濒死生物的生命力。如果目标因该法术死亡，你获得1d8+1点临时生命值（最小1点）和+1施法者等级（用于所有目的），持续1小时。如果目标在法术施展时已经死亡，你仍然获得好处。临时生命值不叠加。",
    arcane: null,
    divine: { cleric: 2 },
    classes: { cleric: 2 }
  },
  {
    id: "create_greater_undead",
    nameEn: "Create Greater Undead",
    nameZh: "创造高等亡灵",
    level: 8,
    school: "死灵系",
    subschool: "创造",
    descriptor: "[邪恶]",
    components: "V, S, M",
    castingTime: "1分钟",
    range: "近距 (25尺+5尺/2环)",
    target: "见描述",
    duration: "瞬时",
    savingThrow: "无",
    spellResist: "否",
    desc: "你创造一个高等亡灵生物。该法术如同创造亡灵，但创造更强大的生物。你可以创造一个幽魂（12 HD）、吸血鬼（15 HD）、巫妖（21 HD）或木乃伊（16 HD）。你每天可以创造一个HD不超过4倍施法者等级的亡灵。创造的亡灵会听从你的命令。",
    material: "一个装有至少25 gp价值的黄金或宝石的容器",
    arcane: { wizard: 8, sorcerer: 8 },
    divine: { cleric: 8 },
    classes: { wizard: 8, sorcerer: 8, cleric: 8 }
  },

  // ========== 土领域 ==========
  {
    id: "magic_stone",
    nameEn: "Magic Stone",
    nameZh: "魔法石",
    level: 1,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "至多3颗石头",
    duration: "30分钟或直到发射",
    savingThrow: "无",
    spellResist: "否",
    desc: "你对至多3颗普通石头施展魔法。你可以将这些石头当作远程武器投掷（射程增量20尺），造成1d6+1点钝击伤害（对小型生物1d6，对中型和更大生物1d6+1）。投掷者获得命中加值等于其基础攻击加值。魔法石在30分钟后失去魔法。",
    arcane: null,
    divine: { druid: 1, cleric: 1 },
    classes: { druid: 1, cleric: 1 }
  },
  {
    id: "soften_earth_and_stone",
    nameEn: "Soften Earth and Stone",
    nameZh: "软化泥土与岩石",
    level: 2,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每等级10立方尺的泥土或岩石",
    duration: "瞬时",
    savingThrow: "见描述",
    spellResist: "否",
    desc: "你使泥土变成软泥，或使岩石变成软土。软化后的泥土或岩石可以被徒手挖掘（每轮挖掘5尺深的软泥）。该法术可以创造陷坑、软化防御工事的墙壁等。陷入软化泥土的生物可以通过强韧检定（DC15）逃脱。",
    arcane: null,
    divine: { druid: 2 },
    classes: { druid: 2 }
  },
  {
    id: "stone_shape",
    nameEn: "Stone Shape",
    nameZh: "塑石术",
    level: 3,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "至多每等级1立方尺的石头",
    duration: "瞬时",
    savingThrow: "无",
    spellResist: "否",
    desc: "你改变石头的形状。你可以将一块石头塑造成任何你想要的形状——台阶、洞穴、石椅、石像等。该法术不能创造移动的机械或复杂装置（需要有移动部件的装置需要「石肤术」或其他法术）。塑形后的石头硬度如同普通石材（AC 5，硬度8，生命值15/每1尺厚度）。",
    arcane: { wizard: 3, sorcerer: 3 },
    divine: { cleric: 3, druid: 3 },
    classes: { wizard: 3, sorcerer: 3, cleric: 3, druid: 3 }
  },
  {
    id: "spike_stones",
    nameEn: "Spike Stones",
    nameZh: "尖石术",
    level: 4,
    school: "塑能系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "以你为中心，半径20尺的弥散区域",
    duration: "1小时/环（D）",
    savingThrow: "无",
    spellResist: "否",
    desc: "你在地面上创造尖锐的石笋。穿过该区域的生物有可能被绊倒（敏捷检定DC15），失败则跌倒并受到1d8点穿刺伤害。重型或中型装甲可以使检定受到-5惩罚。骑马的生物如果检定失败，马和骑手都会跌倒。石笋在法术结束后消失。",
    arcane: null,
    divine: { druid: 4 },
    classes: { druid: 4 }
  },
  {
    id: "stoneskin",
    nameEn: "Stoneskin",
    nameZh: "石肤术",
    level: 6,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "10分钟/环或直到被穿透",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "受术者的皮肤变成石头般的质地，获得伤害减免10/钝击或穿刺。该法术持续直到吸收的伤害总量达到10点每施法者等级（最高150点）。伤害减免只对抗钝击和穿刺伤害；挥砍伤害不受影响。多次施展该法术的效果不叠加。",
    material: "一块花岗岩、砂岩或石灰岩，以及一瓶价值150 gp的澄清水",
    arcane: { wizard: 6, sorcerer: 6 },
    divine: { cleric: 6, druid: 6 },
    classes: { wizard: 6, sorcerer: 6, cleric: 6, druid: 6 }
  },
  {
    id: "iron_body",
    nameEn: "Iron Body",
    nameZh: "铁躯术",
    level: 8,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "1分钟/环（D）",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "你的身体变成生铁。你获得伤害减免15/钝击，对音波、毒、意念结合的豁免检定有+6增强加值，并且不受重击或夹击。你的速度减少至基础的3/4。你获得对以下伤害的免疫：毒素、疾病、窒息、休克、死亡效应、神经毒素、石化、血系能力。你的肌肉如铁般坚硬，徒手攻击造成1d8点钝击伤害（中型生物）或1d6（小型生物）。你获得对寒冷、电击和火焰的免疫。",
    material: "一小块铁和一小瓶价值100 gp的粘性油",
    arcane: { wizard: 8, sorcerer: 8 },
    divine: null,
    classes: { wizard: 8, sorcerer: 8 }
  },

  // ========== 邪恶领域 ==========
  {
    id: "protection_from_good",
    nameEn: "Protection from Good",
    nameZh: "防护善良",
    level: 1,
    school: "防护系",
    subschool: "",
    descriptor: "[善良]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "1分钟/环",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "该法术在受术者周围创造一个魔法屏障，保护其免受善良生物的攻击。受术者对善良生物的近战和远程攻击有+2偏斜加值，对善良生物的法术和类法术能力有+2抗性加值。此外，受术者不受善良生物的魅惑和胁迫效果影响。该法术对邪恶生物无害。",
    arcane: null,
    divine: { cleric: 1 },
    classes: { cleric: 1 }
  },
  {
    id: "desecrate",
    nameEn: "Desecrate",
    nameZh: "污秽之地",
    level: 2,
    school: "咒法系",
    subschool: "创造",
    descriptor: "[邪恶]",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "以你为中心，半径60尺的弥散区域",
    duration: "2小时/环（D）",
    savingThrow: "无",
    spellResist: "否",
    desc: "你污秽一片区域，使之对邪恶生物（包括不死生物）变得有利。在该区域内的邪恶生物在攻击和伤害骰上有+1亵渎加值，并且在该区域内所进行的强韧、反射和意志豁免检定有+3亵渎加值。不死生物在污秽区域内获得伤害减免+1/善良（或守序，取决于它们对抗的类型）。该法术也能增强不死生物创造的法术（有效施法者等级+1）。",

    material: "一些奉献给邪恶神祗的物品，价值至少25 gp",
    arcane: null,
    divine: { cleric: 2 },
    classes: { cleric: 2 }
  },
  {
    id: "dispel_good",
    nameEn: "Dispel Good",
    nameZh: "驱散善良",
    level: 5,
    school: "塑能系",
    subschool: "",
    descriptor: "[邪恶]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "一个善良生物",
    duration: "瞬时",
    savingThrow: "见描述",
    spellResist: "是",
    desc: "该法术的功能如同「驱散守序」，但针对善良生物。你尝试驱散善良生物身上的护盾和祝福法术。你需要进行施法者等级检定（d20+施法者等级）对抗每个善良法术的DC（11+施法者等级）。如果成功，该法术被驱散。该法术对善良异位面生物（如天使、守序善良元素）也有效。",
    arcane: null,
    divine: { cleric: 5 },
    classes: { cleric: 5 }
  },
  {
    id: "blasphemy",
    nameEn: "Blasphemy",
    nameZh: "亵渎之言",
    level: 7,
    school: "塑能系",
    subschool: "",
    descriptor: "[邪恶][音波][影响心灵]",
    components: "V",
    castingTime: "标准动作",
    range: "40尺半径",
    target: "放射区域内所有善良生物",
    duration: "瞬时",
    savingThrow: "无或意志过则无害（见描述）",
    spellResist: "是",
    desc: "你说出亵渎的言辞，使善良生物受到不同影响，取决于其生命骰数：小于施法者等级-4的生物立即死亡（无豁免）；小于施法者等级-2的生物处于昏迷状态1d10×100分钟（无豁免）；小于施法者等级-4的生物被震慑1轮（意志过则无害）；其余善良生物被眩晕2d6轮（意志过则无害）。邪恶生物不受该法术影响。",
    arcane: null,
    divine: { cleric: 7 },
    classes: { cleric: 7 }
  },

  // ========== 火领域 ==========
  {
    id: "produce_flame",
    nameEn: "Produce Flame",
    nameZh: "产生火焰",
    level: 2,
    school: "塑能系",
    subschool: "",
    descriptor: "[火]",
    components: "V, S",
    castingTime: "标准动作",
    range: "0尺",
    target: "一个火焰球",
    duration: "1轮/环（见描述）",
    savingThrow: "无",
    spellResist: "是",
    desc: "你创造出一团火焰在手中燃烧。这团火焰不会伤害你。你可以将火焰投掷向目标，如同远程接触攻击（射程增量10尺）。命中则造成1d6+1点火系伤害每施法者等级（最高5d6+5）。如果你在回合内不投掷火焰，它会在你的手中持续到下回合。该法术对不死生物额外造成+1d6点火伤害。",
    arcane: null,
    divine: { druid: 2 },
    classes: { druid: 2 }
  },

  // ========== 善良领域 ==========
  {
    id: "holy_smite",
    nameEn: "Holy Smite",
    nameZh: "神圣重击",
    level: 4,
    school: "塑能系",
    subschool: "",
    descriptor: "[善良][光亮]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每3等级1个邪恶生物的放射区域",
    duration: "瞬时",
    savingThrow: "无或反射过则减半（见描述）",
    spellResist: "是",
    desc: "你释放出一股神圣的能量，对邪恶生物造成2d8点伤害每3施法者等级（最高10d8）。受影响的邪恶生物如果未能通过反射检定，会受到额外伤害并目盲1轮。善良生物不受该法术影响。该法术在黑暗中创造光亮（半径20尺）。",
    arcane: null,
    divine: { cleric: 4 },
    classes: { cleric: 4 }
  },
  {
    id: "dispel_evil",
    nameEn: "Dispel Evil",
    nameZh: "驱散邪恶",
    level: 5,
    school: "塑能系",
    subschool: "",
    descriptor: "[善良]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "一个邪恶生物",
    duration: "瞬时",
    savingThrow: "见描述",
    spellResist: "是",
    desc: "该法术的功能如同「驱散混乱」，但针对邪恶生物。你尝试驱散邪恶生物身上的诅咒和腐化法术。你需要进行施法者等级检定（d20+施法者等级）对抗每个邪恶法术的DC（11+施法者等级）。如果成功，该法术被驱散。此外，该法术可以驱散邪恶异位面生物（如恶魔、魔鬼）。",
    arcane: null,
    divine: { cleric: 5 },
    classes: { cleric: 5 }
  },
  {
    id: "blade_barrier",
    nameEn: "Blade Barrier",
    nameZh: "刀刃壁垒",
    level: 6,
    school: "塑能系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "中距 (100尺+10尺/环)",
    target: "见描述",
    duration: "1轮/环（D）",
    savingThrow: "反射过则减半",
    spellResist: "是",
    desc: "你创造出一道旋转的刀刃壁。你可以使刀刃壁呈直线（最长20尺，宽5尺）或呈圆柱（半径5尺，高20尺）。任何穿过刀刃壁的生物受到1d8点切割伤害每2施法者等级（最高5d8）。刀刃壁对不死生物和泥形生物额外造成+1d8点伤害。",
    material: "一个小剪刀碎片",
    arcane: null,
    divine: { cleric: 6 },
    classes: { cleric: 6 }
  },
  {
    id: "holy_word",
    nameEn: "Holy Word",
    nameZh: "神圣之言",
    level: 7,
    school: "塑能系",
    subschool: "",
    descriptor: "[善良][音波][影响心灵]",
    components: "V",
    castingTime: "标准动作",
    range: "40尺半径",
    target: "放射区域内所有邪恶生物",
    duration: "瞬时",
    savingThrow: "无或意志过则无害（见描述）",
    spellResist: "是",
    desc: "你说出神圣的言辞，使邪恶生物受到不同影响，取决于其生命骰数：小于施法者等级-4的生物立即死亡（无豁免）；小于施法者等级-2的生物处于昏迷状态1d10×100分钟（无豁免）；小于施法者等级-4的生物被震慑1轮（意志过则无害）；其余邪恶生物被眩晕2d6轮（意志过则无害）。善良生物不受该法术影响。",
    arcane: null,
    divine: { cleric: 7 },
    classes: { cleric: 7 }
  },

  // ========== 知识领域 ==========
  {
    id: "detect_thoughts",
    nameEn: "Detect Thoughts",
    nameZh: "侦测思想",
    level: 2,
    school: "预言系",
    subschool: "心灵感应",
    descriptor: "[影响心灵][语言依赖]",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "60尺",
    target: "锥形区域",
    duration: "专注，最长1分钟/环",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "你侦测到60尺锥形区域内生物表面的思想。你可以指定一个方向进行侦测。被侦测的生物如果通过意志豁免，在该轮内不再受影响。你可以读取目标更深层的思想（需要保持专注1轮）。该法术可以侦测到生物表面意图（最近一小时内的主要思想）。",
    material: "一小片铅片",
    arcane: { wizard: 2, sorcerer: 2, bard: 2 },
    divine: null,
    classes: { wizard: 2, sorcerer: 2, bard: 2 }
  },
  {
    id: "discern_location",
    nameEn: "Discern Location",
    nameZh: "辨位术",
    level: 8,
    school: "预言系",
    subschool: "",
    descriptor: "",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "无限制",
    target: "一个生物、物件或地点",
    duration: "瞬时",
    savingThrow: "无",
    spellResist: "否",
    desc: "你精确知道一个生物、物件或地点的位置。该法术不需要对你想定位的目标有直接的感知或了解。任何魔法屏障（包括「私密幻影」和「法术抗力护盾」）都不能阻挡该法术。你甚至可以在另一个位面定位目标。该法术会告诉你目标的精确位置和状态。",
    arcane: { wizard: 8, sorcerer: 8 },
    divine: { cleric: 8 },
    classes: { wizard: 8, sorcerer: 8, cleric: 8 }
  },

  // ========== 守序领域 ==========
  {
    id: "protection_from_chaos",
    nameEn: "Protection from Chaos",
    nameZh: "防护混乱",
    level: 1,
    school: "防护系",
    subschool: "",
    descriptor: "[混乱]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "1分钟/环",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "该法术在受术者周围创造一个魔法屏障，保护其免受混乱生物的攻击。受术者对混乱生物的近战和远程攻击有+2偏斜加值，对混乱生物的法术和类法术能力有+2抗性加值。此外，受术者不受混乱生物的魅惑和胁迫效果影响。该法术对守序生物无害。",
    arcane: null,
    divine: { cleric: 1 },
    classes: { cleric: 1 }
  },
  {
    id: "calm_emotions",
    nameEn: "Calm Emotions",
    nameZh: "平静情绪",
    level: 2,
    school: "惑控系",
    subschool: "强迫",
    descriptor: "[影响心灵]",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每等级1个生物的放射区域",
    duration: "专注，最长1轮/环",
    savingThrow: "意志过则无效",
    spellResist: "是",
    desc: "该法术使受影响目标的情绪平静下来。受术者不会进行攻击动作，也不会施展攻击性法术。任何受影响的生物都不会发起攻击或敌对行动。该法术可以压制魅惑和恐惧效果。受术生物在法术持续期间无法使用狂暴能力。",
    material: "一块纯雪花石膏",
    arcane: { bard: 2 },
    divine: { cleric: 2 },
    classes: { bard: 2, cleric: 2 }
  },
  {
    id: "orders_wrath",
    nameEn: "Order's Wrath",
    nameZh: "秩序之怒",
    level: 4,
    school: "塑能系",
    subschool: "",
    descriptor: "[守序][声波]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "至多每3等级1个混乱生物的放射区域",
    duration: "瞬时",
    savingThrow: "强韧过则减半（见描述）",
    spellResist: "是",
    desc: "你发射一道守序能量的冲击波，对混乱生物造成1d8点伤害每2施法者等级（最高5d8）。混乱生物如果未能通过强韧检定，会耳聋1d4轮。守序生物不受该法术影响。该法术对混乱异位面生物（如混乱巨灵、混乱元素）额外造成1d6点伤害。",
    arcane: null,
    divine: { cleric: 4 },
    classes: { cleric: 4 }
  },
  {
    id: "dispel_chaos",
    nameEn: "Dispel Chaos",
    nameZh: "驱散混乱",
    level: 5,
    school: "塑能系",
    subschool: "",
    descriptor: "[守序]",
    components: "V, S, DF",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "一个混乱生物",
    duration: "瞬时",
    savingThrow: "见描述",
    spellResist: "是",
    desc: "该法术的功能如同「驱散邪恶」，但针对混乱生物。你尝试驱散混乱生物身上的腐化和混乱法术。你需要进行施法者等级检定（d20+施法者等级）对抗每个混乱法术的DC（11+施法者等级）。如果成功，该法术被驱散。此外，该法术可以驱散混乱异位面生物（如混乱巨灵、混乱元素）。",
    arcane: null,
    divine: { cleric: 5 },
    classes: { cleric: 5 }
  },

  // ========== 魔法领域 ==========
  {
    id: "magic_aura",
    nameEn: "Magic Aura",
    nameZh: "魔法灵光",
    level: 1,
    school: "咒法系",
    subschool: "创造",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的一件物品或至多每等级1立方尺的物品",
    duration: "1天/环",
    savingThrow: "无",
    spellResist: "否",
    desc: "你对一件物品施加魔法灵光，使其对「侦测魔法」显示出虚假的信息。你可以使物品看起来有魔法、没有魔法，或者属于某个特定的学派。该法术常用于欺骗侦测魔法的效果。你也可以在物品上放置一种灵光，使其看起来像属于某个特定阵营（需提供100 gp的粉末）。",
    material: "一小撮价值50 gp或更贵的粉末",
    arcane: { wizard: 1, sorcerer: 1 },
    divine: null,
    classes: { wizard: 1, sorcerer: 1 }
  },
  {
    id: "imbue_with_spell_ability",
    nameEn: "Imbue with Spell Ability",
    nameZh: "赋予法术能力",
    level: 4,
    school: "变化系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "1小时",
    range: "触碰",
    target: "触碰的生物",
    duration: "24小时（见描述）或直到能量被用完",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "你从自己身上吸取准备好的法术，赋予受术者使用这些法术的能力。受术者可以施展这些法术，如同它们是受术者自己的法术一样（使用你的施法者等级）。你每天可以赋予的法术总数等于你的施法者等级。你失去被赋予的法术（它们被从你的法术准备列表中消耗）。",
    material: "有价值100 gp的宝石",
    arcane: null,
    divine: { cleric: 4 },
    classes: { cleric: 4 }
  },
  {
    id: "protection_from_spells",
    nameEn: "Protection from Spells",
    nameZh: "防护法术",
    level: 8,
    school: "防护系",
    subschool: "",
    descriptor: "",
    components: "V, S, M",
    castingTime: "标准动作",
    range: "触碰",
    target: "触碰的生物",
    duration: "1轮/环",
    savingThrow: "意志过则无效（无害）",
    spellResist: "是（无害）",
    desc: "受术者对法术和类法术能力有等级抗力。每当一个法术或类法术能力以受术者为目标，受术者可以进行等级检定（d20+角色等级）对抗该法术的DC。如果成功，该法术对受术者无效。该法术不会阻止区域法术（如「死云术」）或已生效法术的效果。该法术对超魔魔法也比普通法术更难穿透。",
    material: "一瓶价值500 gp的珍珠粉末",
    arcane: null,
    divine: { cleric: 8 },
    classes: { cleric: 8 }
  },
  {
    id: "mages_disjunction",
    nameEn: "Mage's Disjunction",
    nameZh: "法师裂解术",
    level: 9,
    school: "咒法系",
    subschool: "创造",
    descriptor: "",
    components: "V",
    castingTime: "标准动作",
    range: "近距 (25尺+5尺/2环)",
    target: "以你为中心，半径40尺的弥散区域",
    duration: "瞬时",
    savingThrow: "见描述",
    spellResist: "否",
    desc: "该法术是最强大的反魔法法术。区域内所有的魔法效果和魔法物品有2%的几率每施法者等级被解除（最高90%）。此外，区域内所有的法术抗力护盾和「反魔法场」有50%的几率被解除。该法术还能解除「希望之域」等持久法术。施法者等级16+的角色可以完全解除区域内的所有魔法和魔法效果。",
    arcane: { wizard: 9, sorcerer: 9 },
    divine: null,
    classes: { wizard: 9, sorcerer: 9 }
  }
];

// 去重：只保留 spells-data.js 中不存在的法术
const existingContent = fs.readFileSync('js/spells-data.js', 'utf8');
const existingIds = [];
const idRegex = /id\s*:\s*"([^"]+)"/g;
let m;
while ((m = idRegex.exec(existingContent)) !== null) {
  existingIds.push(m[1]);
}

const toAdd = NEW_SPELLS.filter(s => !existingIds.includes(s.id));
console.log(`需要添加的新法术: ${toAdd.length} 个`);
console.log(`已存在（跳过）: ${NEW_SPELLS.length - toAdd.length} 个`);

if (toAdd.length === 0) {
  console.log('没有新法术需要添加');
  process.exit(0);
}

// 生成追加内容（在 ]; 前插入）
// 找到数组结尾位置
const lastBracket = existingContent.lastIndexOf('];');
if (lastBracket === -1) {
  console.log('错误：找不到数组结尾 ]；');
  process.exit(1);
}

let insertText = '';
toAdd.forEach((spell, i) => {
  insertText += '  ,\n';
  insertText += `  { id:"${spell.id}", nameEn:"${spell.nameEn}", nameZh:"${spell.nameZh}",\n`;
  insertText += `    level:${spell.level}, school:"${spell.school}", subschool:"${spell.subschool||''}", descriptor:"${spell.descriptor||''}",\n`;
  insertText += `    components:"${spell.components}", castingTime:"${spell.castingTime}",\n`;
  insertText += `    range:"${spell.range}", target:"${spell.target}",\n`;
  insertText += `    duration:"${spell.duration}", savingThrow:"${spell.savingThrow}", spellResist:"${spell.spellResist}",\n`;
  
  // 处理 desc 中的引号
  const safeDesc = spell.desc.replace(/"/g, '\\"');
  insertText += `    desc:"${safeDesc}",\n`;
  
  if (spell.material) {
    const safeMaterial = spell.material.replace(/"/g, '\\"');
    insertText += `    material:"${safeMaterial}",\n`;
  }
  
  // arcane
  if (spell.arcane) {
    const entries = Object.entries(spell.arcane).map(([k, v]) => `${k}:${v}`).join(', ');
    insertText += `    arcane:{${entries}}, \n`;
  } else {
    insertText += `    arcane:null,\n`;
  }
  
  // divine
  if (spell.divine) {
    const entries = Object.entries(spell.divine).map(([k, v]) => `${k}:${v}`).join(', ');
    insertText += `    divine:{${entries}}, \n`;
  } else {
    insertText += `    divine:null,\n`;
  }
  
  // classes
  const classEntries = Object.entries(spell.classes).map(([k, v]) => `${k}:${v}`).join(', ');
  insertText += `    classes:{${classEntries}} \n`;
  insertText += `  }`;
});

// 插入到 ]; 之前
const newContent = existingContent.slice(0, lastBracket) + insertText + '\n' + existingContent.slice(lastBracket);

// 写回文件
fs.writeFileSync('js/spells-data.js', newContent);
console.log(`\n✅ 已添加 ${toAdd.length} 个新法术到 spells-data.js`);
console.log(`文件大小: ${newContent.length} 字节`);

// 验证
try {
  const testSPELLS = new Function(newContent + '; return SPELLS;')();
  console.log(`验证：法术总数: ${testSPELLS.length}`);
  
  // 检查是否有重复
  const ids = testSPELLS.map(s => s.id);
  const unique = new Set(ids);
  if (ids.length !== unique.size) {
    console.log(`⚠️ 仍有重复！重复数: ${ids.length - unique.size}`);
  } else {
    console.log('✅ 无重复ID');
  }
} catch (e) {
  console.log('❌ 验证失败:', e.message);
}
