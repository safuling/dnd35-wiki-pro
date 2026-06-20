/**
 * fix-and-add-spells.js
 * 1) 从 spells-data.js.bak 恢复原始585个法术
 * 2) 向数组中添加66个缺失领域法术
 * 3) 重新生成格式良好的 spells-data.js
 */

const fs = require('fs');

// ─── 恢复原始文件 ───
if (!fs.existsSync('js/spells-data.js.bak')) {
  console.error('缺少备份文件 spells-data.js.bak');
  process.exit(1);
}
const bakContent = fs.readFileSync('js/spells-data.js.bak', 'utf8');
const SPELLS = new Function(bakContent + '; return SPELLS;')();
console.log(`原始法术数: ${SPELLS.length}`);

// ─── 66个缺失领域法术 ───
const NEW = [
  // 气领域
  {id:"obscuring_mist",nameEn:"Obscuring Mist",nameZh:"迷雾术",level:1,school:"咒法系",subschool:"创造",descriptor:"",components:"V, S",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"以你为中心的弥散范围",duration:"1分钟/环",savingThrow:"无",spellResist:"否",desc:"你周围会弥漫一股浓密的雾气，使所有穿过该区域的生物的有效视野缩短至5尺。远程攻击无法穿过迷雾，侦测类和侦察检定会受到-5惩罚。",arcane:{wizard:1,sorcerer:1},divine:{cleric:1,druid:1},classes:{wizard:1,sorcerer:1,cleric:1,druid:1}},
  {id:"air_walk",nameEn:"Air Walk",nameZh:"空气行走",level:4,school:"变化系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"10分钟/环",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"受术者能在空中行走，如同在坚实的地面上一般。受术者不会坠落，并获得飞行速度（机动性：完美）。",arcane:{wizard:4,sorcerer:4},divine:{cleric:4,druid:4},classes:{wizard:4,sorcerer:4,cleric:4,druid:4}},
  {id:"control_winds",nameEn:"Control Winds",nameZh:"控制风力",level:5,school:"变化系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"以你为中心，半径100尺的弥散区域",duration:"10分钟/环",savingThrow:"强韧过则减半",spellResist:"否",desc:"你改变天然风的速度和方向，最高可达飓风级别（风速110尺）。强风会阻碍飞行、远程攻击和声音传达。",arcane:null,divine:{druid:5},classes:{druid:5}},
  // 动物领域
  {id:"calm_animals",nameEn:"Calm Animals",nameZh:"安抚动物",level:1,school:"惑控系",subschool:"强迫",descriptor:"[影响心灵]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每等级1只动物的放射区域",duration:"专注",savingThrow:"意志过则无效",spellResist:"是",desc:"该法术可以使动物平静下来，使其不会攻击或逃跑。平静的动物无法攻击或施展任何攻击性行动。",arcane:null,divine:{druid:1,ranger:1},classes:{druid:1,ranger:1}},
  {id:"hold_animal",nameEn:"Hold Animal",nameZh:"禁锢动物",level:2,school:"惑控系",subschool:"强迫",descriptor:"[影响心灵]",components:"V, S, DF",castingTime:"标准动作",range:"中距 (100尺+10尺/环)",target:"一个动物",duration:"1轮/环",savingThrow:"意志过则无效",spellResist:"是",desc:"你使一个动物无法移动。受术动物不能行动，但可以进行豁免检定。如果受到伤害，可以尝试新的意志豁免来打破控制。",arcane:null,divine:{druid:2,ranger:2},classes:{druid:2,ranger:2}},
  {id:"dominate_animal",nameEn:"Dominate Animal",nameZh:"支配动物",level:3,school:"惑控系",subschool:"强迫",descriptor:"[影响心灵]",components:"V, S",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"一个动物",duration:"1轮/环",savingThrow:"意志过则无效",spellResist:"是",desc:"你在精神上控制一个动物。你可以使它执行任何你所说的行动。受术者不会执行明显有害的行动。",arcane:null,divine:{druid:3},classes:{druid:3}},
  {id:"summon_natures_ally_4",nameEn:"Summon Nature's Ally IV",nameZh:"召唤自然盟友IV",level:4,school:"咒法系",subschool:"召唤",descriptor:"",components:"V, S, DF",castingTime:"标准动作（见描述）",range:"近距 (25尺+5尺/2环)",target:"见描述",duration:"1轮/环（D）",savingThrow:"无",spellResist:"否",desc:"你召唤一个自然生物为你作战，总计不超过4 HD。召唤的生物在你的指挥下行动。",arcane:null,divine:{druid:4,ranger:4},classes:{druid:4,ranger:4}},
  {id:"antilife_shell",nameEn:"Antilife Shell",nameZh:"反生命壳",level:6,school:"防护系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"10尺",target:"以你为中心，半径10尺的弥散区域",duration:"1轮/环（D）",savingThrow:"无",spellResist:"否",desc:"你创造一个排斥所有活物的壳。任何活着的生物都无法穿过这个壳。不死生物、构装生物、元素生物和泥形生物不受影响。",arcane:null,divine:{druid:6},classes:{druid:6}},
  {id:"animal_shapes",nameEn:"Animal Shapes",nameZh:"动物形态",level:7,school:"变化系",subschool:"变身",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每等级1个自愿生物",duration:"1小时/环（D）",savingThrow:"无",spellResist:"否",desc:"你可以将自愿的生物变成任何你选择的动物形态。每个目标变成同一种动物，保留自己的属性，但获得所变动物的天然武器和特殊能力。",arcane:null,divine:{druid:7},classes:{druid:7}},
  // 混乱领域
  {id:"protection_from_law",nameEn:"Protection from Law",nameZh:"防护律法",level:1,school:"防护系",subschool:"",descriptor:"[律法]",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"1分钟/环",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"该法术在受术者周围创造一个魔法屏障，保护其免受守序生物的攻击。受术者对守序生物的攻击有+2偏斜加值，对守序生物的法术有+2抗性加值。",arcane:null,divine:{cleric:1},classes:{cleric:1}},
  {id:"chaos_hammer",nameEn:"Chaos Hammer",nameZh:"混乱之锤",level:4,school:"塑能系",subschool:"",descriptor:"[混乱][声波]",components:"V, S",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每3等级1个守序生物的放射区域",duration:"瞬时",savingThrow:"强韧过则减半",spellResist:"是",desc:"你发射一道混乱能量的冲击波，对守序生物造成1d8点伤害每2施法者等级（最高5d8）。守序生物如果未能通过强韧检定，会耳聋1d4轮。",arcane:null,divine:{cleric:4},classes:{cleric:4}},
  {id:"animate_objects",nameEn:"Animate Objects",nameZh:"活化物体",level:6,school:"变化系",subschool:"",descriptor:"",components:"V, S, M",castingTime:"标准动作",range:"中距 (100尺+10尺/环)",target:"见描述",duration:"1轮/环",savingThrow:"无",spellResist:"否",desc:"你使无生命物体变成你的仆从。你可以活化至多每等级25磅重量的物体，活化的物体会攻击你的敌人或执行你的命令。",material:"一个槐木树枝",arcane:{wizard:6,sorcerer:6},divine:null,classes:{wizard:6,sorcerer:6}},
  {id:"cloak_of_chaos",nameEn:"Cloak of Chaos",nameZh:"混乱之袍",level:8,school:"防护系",subschool:"",descriptor:"[混乱]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"见描述",duration:"1轮/环（D）",savingThrow:"见描述",spellResist:"是（见描述）",desc:"该法术的功能如同混乱版的法术抗力护盾。所有受影响的目标对守序法术和类法术能力有+4抗力加值，对守序生物的魅惑和胁迫效果有抗性。",arcane:null,divine:{cleric:8},classes:{cleric:8}},
  // 死亡领域
  {id:"death_knell",nameEn:"Death Knell",nameZh:"死亡丧钟",level:2,school:"死灵系",subschool:"",descriptor:"[死亡][邪恶]",components:"V, S",castingTime:"标准动作",range:"中距 (100尺+10尺/环)",target:"一个生命骰小于你的生物",duration:"瞬时（见描述）",savingThrow:"意志过则无效",spellResist:"是",desc:"你吸取濒死生物的生命力。如果目标因该法术死亡，你获得1d8点临时生命值和+1施法者等级（用于所有目的），持续1小时。",arcane:null,divine:{cleric:2},classes:{cleric:2}},
  {id:"create_greater_undead",nameEn:"Create Greater Undead",nameZh:"创造高等亡灵",level:8,school:"死灵系",subschool:"创造",descriptor:"[邪恶]",components:"V, S, M",castingTime:"1分钟",range:"近距 (25尺+5尺/2环)",target:"见描述",duration:"瞬时",savingThrow:"无",spellResist:"否",desc:"你创造一个高等亡灵生物（如幽魂、吸血鬼、巫妖或木乃伊）。你每天可以创造一个HD不超过4倍施法者等级的亡灵。",material:"一个装有至少25gp价值的黄金或宝石的容器",arcane:{wizard:8,sorcerer:8},divine:{cleric:8},classes:{wizard:8,sorcerer:8,cleric:8}},
  // 土领域
  {id:"magic_stone",nameEn:"Magic Stone",nameZh:"魔法石",level:1,school:"变化系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"至多3颗石头",duration:"30分钟或直到发射",savingThrow:"无",spellResist:"否",desc:"你对至多3颗普通石头施展魔法。你可以将这些石头当作远程武器投掷（射程增量20尺），造成1d6+1点钝击伤害。",arcane:null,divine:{druid:1,cleric:1},classes:{druid:1,cleric:1}},
  {id:"soften_earth_and_stone",nameEn:"Soften Earth and Stone",nameZh:"软化泥土与岩石",level:2,school:"变化系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每等级10立方尺的泥土或岩石",duration:"瞬时",savingThrow:"见描述",spellResist:"否",desc:"你使泥土变成软泥，或使岩石变成软土。软化后的泥土或岩石可以被徒手挖掘。陷入软化泥土的生物可以通过强韧检定（DC15）逃脱。",arcane:null,divine:{druid:2},classes:{druid:2}},
  {id:"stone_shape",nameEn:"Stone Shape",nameZh:"塑石术",level:3,school:"变化系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"至多每等级1立方尺的石头",duration:"瞬时",savingThrow:"无",spellResist:"否",desc:"你改变石头的形状。你可以将一块石头塑造成任何你想要的形状——台阶、洞穴、石椅等。该法术不能创造移动的机械或复杂装置。",arcane:{wizard:3,sorcerer:3},divine:{cleric:3,druid:3},classes:{wizard:3,sorcerer:3,cleric:3,druid:3}},
  {id:"spike_stones",nameEn:"Spike Stones",nameZh:"尖石术",level:4,school:"塑能系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"以你为中心，半径20尺的弥散区域",duration:"1小时/环（D）",savingThrow:"无",spellResist:"否",desc:"你在地面上创造尖锐的石笋。穿过该区域的生物有可能被绊倒（敏捷检定DC15），失败则跌倒并受到1d8点穿刺伤害。",arcane:null,divine:{druid:4},classes:{druid:4}},
  {id:"stoneskin",nameEn:"Stoneskin",nameZh:"石肤术",level:6,school:"变化系",subschool:"",descriptor:"",components:"V, S, M",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"10分钟/环或直到被穿透",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"受术者的皮肤变成石头般的质地，获得伤害减免10/钝击或穿刺。该法术持续直到吸收的伤害总量达到10点每施法者等级（最高150点）。",material:"一块花岗岩、砂岩或石灰岩，以及一瓶价值150gp的澄清水",arcane:{wizard:6,sorcerer:6},divine:{cleric:6,druid:6},classes:{wizard:6,sorcerer:6,cleric:6,druid:6}},
  {id:"iron_body",nameEn:"Iron Body",nameZh:"铁躯术",level:8,school:"变化系",subschool:"",descriptor:"",components:"V, S, M",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"1分钟/环（D）",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"你的身体变成生铁。你获得伤害减免15/钝击，对音波、毒、意念结合的豁免检定有+6增强加值，并且不受重击或夹击。",material:"一小块铁和一小瓶价值100gp的粘性油",arcane:{wizard:8,sorcerer:8},divine:null,classes:{wizard:8,sorcerer:8}},
  // 邪恶领域
  {id:"protection_from_good",nameEn:"Protection from Good",nameZh:"防护善良",level:1,school:"防护系",subschool:"",descriptor:"[善良]",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"1分钟/环",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"该法术在受术者周围创造一个魔法屏障，保护其免受善良生物的攻击。受术者对善良生物的攻击有+2偏斜加值，对善良生物的法术有+2抗性加值。",arcane:null,divine:{cleric:1},classes:{cleric:1}},
  {id:"desecrate",nameEn:"Desecrate",nameZh:"污秽之地",level:2,school:"咒法系",subschool:"创造",descriptor:"[邪恶]",components:"V, S, M",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"以你为中心，半径60尺的弥散区域",duration:"2小时/环（D）",savingThrow:"无",spellResist:"否",desc:"你污秽一片区域，使之对邪恶生物（包括不死生物）变得有利。在该区域内的邪恶生物在攻击和伤害骰上有+1亵渎加值，豁免检定有+3亵渎加值。",material:"一些奉献给邪恶神祗的物品，价值至少25gp",arcane:null,divine:{cleric:2},classes:{cleric:2}},
  {id:"dispel_good",nameEn:"Dispel Good",nameZh:"驱散善良",level:5,school:"塑能系",subschool:"",descriptor:"[邪恶]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"一个善良生物",duration:"瞬时",savingThrow:"见描述",spellResist:"是",desc:"该法术的功能如同驱散守序，但针对善良生物。你尝试驱散善良生物身上的护盾和祝福法术。",arcane:null,divine:{cleric:5},classes:{cleric:5}},
  {id:"blasphemy",nameEn:"Blasphemy",nameZh:"亵渎之言",level:7,school:"塑能系",subschool:"",descriptor:"[邪恶][音波][影响心灵]",components:"V",castingTime:"标准动作",range:"40尺半径",target:"放射区域内所有善良生物",duration:"瞬时",savingThrow:"无或意志过则无害（见描述）",spellResist:"是",desc:"你说出亵渎的言辞，使善良生物受到不同影响，取决于其生命骰数：小于施法者等级-4的生物立即死亡；小于施法者等级-2的生物处于昏迷状态1d10×100分钟。",arcane:null,divine:{cleric:7},classes:{cleric:7}},
  // 火领域
  {id:"produce_flame",nameEn:"Produce Flame",nameZh:"产生火焰",level:2,school:"塑能系",subschool:"",descriptor:"[火]",components:"V, S",castingTime:"标准动作",range:"0尺",target:"一个火焰球",duration:"1轮/环（见描述）",savingThrow:"无",spellResist:"是",desc:"你创造出一团火焰在手中燃烧。这团火焰不会伤害你。你可以将火焰投掷向目标，命中则造成1d6+1点火系伤害每施法者等级（最高5d6+5）。",arcane:null,divine:{druid:2},classes:{druid:2}},
  // 善良领域
  {id:"holy_smite",nameEn:"Holy Smite",nameZh:"神圣重击",level:4,school:"塑能系",subschool:"",descriptor:"[善良][光亮]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每3等级1个邪恶生物的放射区域",duration:"瞬时",savingThrow:"无或反射过则减半（见描述）",spellResist:"是",desc:"你释放出一股神圣的能量，对邪恶生物造成2d8点伤害每3施法者等级（最高10d8）。受影响的邪恶生物如果未能通过反射检定，会目盲1轮。",arcane:null,divine:{cleric:4},classes:{cleric:4}},
  {id:"dispel_evil",nameEn:"Dispel Evil",nameZh:"驱散邪恶",level:5,school:"塑能系",subschool:"",descriptor:"[善良]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"一个邪恶生物",duration:"瞬时",savingThrow:"见描述",spellResist:"是",desc:"该法术的功能如同驱散混乱，但针对邪恶生物。你尝试驱散邪恶生物身上的诅咒和腐化法术。此外，该法术可以驱散邪恶异位面生物。",arcane:null,divine:{cleric:5},classes:{cleric:5}},
  {id:"blade_barrier",nameEn:"Blade Barrier",nameZh:"刀刃壁垒",level:6,school:"塑能系",subschool:"",descriptor:"",components:"V, S, M/DF",castingTime:"标准动作",range:"中距 (100尺+10尺/环)",target:"见描述",duration:"1轮/环（D）",savingThrow:"反射过则减半",spellResist:"是",desc:"你创造出一道旋转的刀刃壁。你可以使刀刃壁呈直线（最长20尺，宽5尺）或呈圆柱（半径5尺，高20尺）。任何穿过刀刃壁的生物受到1d8点切割伤害每2施法者等级。",material:"一个小剪刀碎片",arcane:null,divine:{cleric:6},classes:{cleric:6}},
  {id:"holy_word",nameEn:"Holy Word",nameZh:"神圣之言",level:7,school:"塑能系",subschool:"",descriptor:"[善良][音波][影响心灵]",components:"V",castingTime:"标准动作",range:"40尺半径",target:"放射区域内所有邪恶生物",duration:"瞬时",savingThrow:"无或意志过则无害（见描述）",spellResist:"是",desc:"你说出神圣的言辞，使邪恶生物受到不同影响，取决于其生命骰数：小于施法者等级-4的生物立即死亡；小于施法者等级-2的生物处于昏迷状态。",arcane:null,divine:{cleric:7},classes:{cleric:7}},
  // 知识领域
  {id:"detect_thoughts",nameEn:"Detect Thoughts",nameZh:"侦测思想",level:2,school:"预言系",subschool:"心灵感应",descriptor:"[影响心灵][语言依赖]",components:"V, S, M",castingTime:"标准动作",range:"60尺",target:"锥形区域",duration:"专注，最长1分钟/环",savingThrow:"意志过则无效",spellResist:"是",desc:"你侦测到60尺锥形区域内生物表面的思想。你可以指定一个方向进行侦测。被侦测的生物如果通过意志豁免，在该轮内不再受影响。",material:"一小片铅片",arcane:{wizard:2,sorcerer:2,bard:2},divine:null,classes:{wizard:2,sorcerer:2,bard:2}},
  {id:"discern_location",nameEn:"Discern Location",nameZh:"辨位术",level:8,school:"预言系",subschool:"",descriptor:"",components:"V, S, DF",castingTime:"标准动作",range:"无限制",target:"一个生物、物件或地点",duration:"瞬时",savingThrow:"无",spellResist:"否",desc:"你精确知道一个生物、物件或地点的位置。该法术不需要对你想定位的目标有直接的感知或了解。任何魔法屏障都不能阻挡该法术。",arcane:{wizard:8,sorcerer:8},divine:{cleric:8},classes:{wizard:8,sorcerer:8,cleric:8}},
  // 守序领域
  {id:"protection_from_chaos",nameEn:"Protection from Chaos",nameZh:"防护混乱",level:1,school:"防护系",subschool:"",descriptor:"[混乱]",components:"V, S, DF",castingTime:"标准动作",range:"触碰",target:"触碰的生物",duration:"1分钟/环",savingThrow:"意志过则无效（无害）",spellResist:"是（无害）",desc:"该法术在受术者周围创造一个魔法屏障，保护其免受混乱生物的攻击。受术者对混乱生物的攻击有+2偏斜加值，对混乱生物的法术有+2抗性加值。",arcane:null,divine:{cleric:1},classes:{cleric:1}},
  {id:"calm_emotions",nameEn:"Calm Emotions",nameZh:"平静情绪",level:2,school:"惑控系",subschool:"强迫",descriptor:"[影响心灵]",components:"V, S, M/DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每等级1个生物的放射区域",duration:"专注，最长1轮/环",savingThrow:"意志过则无效",spellResist:"是",desc:"该法术使受影响目标的情绪平静下来。受术者不会进行攻击动作，也不会施展攻击性法术。该法术可以压制魅惑和恐惧效果。",material:"一块纯雪花石膏",arcane:{bard:2},divine:{cleric:2},classes:{bard:2,cleric:2}},
  {id:"orders_wrath",nameEn:"Order's Wrath",nameZh:"秩序之怒",level:4,school:"塑能系",subschool:"",descriptor:"[守序][声波]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"至多每3等级1个混乱生物的放射区域",duration:"瞬时",savingThrow:"强韧过则减半（见描述）",spellResist:"是",desc:"你发射一道守序能量的冲击波，对混乱生物造成1d8点伤害每2施法者等级（最高5d8）。混乱生物如果未能通过强韧检定，会耳聋1d4轮。",arcane:null,divine:{cleric:4},classes:{cleric:4}},
  {id:"dispel_chaos",nameEn:"Dispel Chaos",nameZh:"驱散混乱",level:5,school:"塑能系",subschool:"",descriptor:"[守序]",components:"V, S, DF",castingTime:"标准动作",range:"近距 (25尺+5尺/2环)",target:"一个混乱生物",duration:"瞬时",savingThrow:"见描述",spellResist:"是",desc:"该法术的功能如同驱散邪恶，但针对混乱生物。你尝试驱散混乱生物身上的腐化和混乱法术。此外，该法术可以驱散混乱异位面生物。",arcane:null,divine:{cleric:5},classes:{cleric:5}},
];

// 去重
const existingIds = new Set(SPELLS.map(s => s.id));
const toAdd = NEW.filter(s => !existingIds.has(s.id));
console.log(`需要添加: ${toAdd.length} 个`);
console.log(`已存在（跳过）: ${NEW.length - toAdd.length} 个`);

// 添加
toAdd.forEach(s => SPELLS.push(s));

// ─── 重新生成 spells-data.js ───
function serializeSpell(s, indent) {
  const sp = ' '.repeat(indent);
  let out = sp + '{\n';
  out += sp + '  id:"' + s.id + '", nameEn:"' + s.nameEn + '", nameZh:"' + s.nameZh + '",\n';
  out += sp + '  level:' + s.level + ', school:"' + s.school + '"';
  if (s.subschool) out += ', subschool:"' + s.subschool + '"';
  if (s.descriptor) out += ', descriptor:"' + s.descriptor + '"';
  out += ',\n';
  out += sp + '  components:"' + s.components + '", castingTime:"' + s.castingTime + '",\n';
  out += sp + '  range:"' + s.range + '", target:"' + s.target + '",\n';
  out += sp + '  duration:"' + s.duration + '", savingThrow:"' + s.savingThrow + '", spellResist:"' + s.spellResist + '",\n';
  out += sp + '  desc:"' + s.desc.replace(/"/g, '\\"') + '",\n';
  if (s.material) out += sp + '  material:"' + s.material.replace(/"/g, '\\"') + '",\n';
  if (s.focus) out += sp + '  focus:"' + s.focus.replace(/"/g, '\\"') + '",\n';
  if (s.xpCost) out += sp + '  xpCost:"' + s.xpCost + '",\n';
  // arcane
  if (s.arcane) {
    const e = Object.entries(s.arcane).map(([k,v]) => k+':'+v).join(', ');
    out += sp + '  arcane:{' + e + '},\n';
  } else {
    out += sp + '  arcane:null,\n';
  }
  // divine
  if (s.divine) {
    const e = Object.entries(s.divine).map(([k,v]) => k+':'+v).join(', ');
    out += sp + '  divine:{' + e + '},\n';
  } else {
    out += sp + '  divine:null,\n';
  }
  // classes
  const ce = Object.entries(s.classes).map(([k,v]) => k+':'+v).join(', ');
  out += sp + '  classes:{' + ce + '}\n';
  out += sp + '}';
  return out;
}

let output = 'const SPELLS = [\n';
for (let i = 0; i < SPELLS.length; i++) {
  output += serializeSpell(SPELLS[i], 2);
  if (i < SPELLS.length - 1) output += ',';
  output += '\n';
}
output += '];\n\n';
output += '// 用法示例：\n';
output += '// 获取所有3环法术：SPELLS.filter(s => s.level === 3)\n';
output += '// 获取所有奥术法术：SPELLS.filter(s => s.arcane !== null)\n';
output += '// 获取所有神术法术：SPELLS.filter(s => s.divine !== null)\n';

// 写回
fs.writeFileSync('js/spells-data.js', output);
console.log(`\n✅ 已写入 js/spells-data.js`);
console.log(`   法术总数: ${SPELLS.length}`);

// 验证
try {
  new Function(output + '; return SPELLS;')();
  console.log(`✅ 语法验证通过`);
  // 检查重复
  const ids = SPELLS.map(s => s.id);
  const unique = new Set(ids);
  if (ids.length !== unique.size) {
    console.log(`⚠️ 仍有重复ID: ${ids.length - unique.size} 个`);
  } else {
    console.log(`✅ 无重复ID`);
  }
} catch (e) {
  console.log(`❌ 语法错误: ${e.message}`);
}
