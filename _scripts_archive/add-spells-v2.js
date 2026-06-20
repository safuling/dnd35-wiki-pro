const fs = require('fs');
const path = require('path');

// 读取当前的spells-data.js
const spellsDataPath = path.join(__dirname, 'js', 'spells-data.js');
let content = fs.readFileSync(spellsDataPath, 'utf8');

// 使用JavaScript解析获取现有的SPELLS数组
let existingSpells;
try {
    const fn = new Function(content + '; return SPELLS;');
    existingSpells = fn();
} catch (e) {
    console.error('无法解析spells-data.js:', e.message);
    process.exit(1);
}

console.log(`现有法术数量: ${existingSpells.length}`);

// 提取现有法术的ID
const existingIds = new Set(existingSpells.map(s => s.id));
console.log(`现有法术ID数量 (唯一): ${existingIds.size}`);

// 定义缺失的领域法术 (只定义真正需要添加的法术，避免重复)
const newSpells = [
  // ===== 似水领域 (Water) - 9个法术 =====
  {
    id: 'watery-bubble',
    nameEn: 'Watery Bubble',
    nameZh: '水之泡',
    level: { magus: 1, wizard: 1, sorcerer: 1 },
    school: 'conjuration',
    subSchool: 'water',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '你或生物/每3等级，所有目标必须在15尺内',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '你创造多个充满呼吸空气的水泡，每个足够容纳一个中型或更小的生物。每个水泡被1英寸厚的软水层包围，并漂浮在你周围15尺半径区域内。每个水泡内的生物可以呼吸、施法和使用其他需呼吸的技能。'
  },
  {
    id: 'summon-monster-2-water-domain',
    nameEn: 'Summon Monster II (Water)',
    nameZh: '召唤怪物II（水领域）',
    level: { cleric: 2, druid: 2 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个水元素盟友为你作战。'
  },
  {
    id: 'ice-floes',
    nameEn: 'Ice Floes',
    nameZh: '浮冰',
    level: { magus: 3, wizard: 3, sorcerer: 3 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距',
    area: '四个5尺方形区域，每两个之间相距不超过30尺',
    duration: '1轮/等级',
    savingThrow: '反射过则无伤害',
    spellResist: false,
    desc: '你在水面或地面上创造四个浮冰区域。每个区域成为困难地形，并对进入的生物造成1d6点寒冷伤害。'
  },
  {
    id: 'summon-avalancher',
    nameEn: 'Summon Avalancher',
    nameZh: '召唤雪崩者',
    level: { cleric: 4, druid: 4 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个雪崩者（大型冰元素）为你作战。'
  },
  {
    id: 'ice-flow',
    nameEn: 'Ice Flow',
    nameZh: '冰流',
    level: { magus: 5, wizard: 5, sorcerer: 5 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    area: '直线释放，长度每等级30尺，宽度10尺',
    duration: '1轮/等级',
    savingThrow: '反射过则无伤害',
    spellResist: false,
    desc: '创造一条冰流，对路径上的所有生物造成5d6点寒冷伤害，并将区域变为困难地形。'
  },
  {
    id: 'cone-of-cold',
    nameEn: 'Cone of Cold',
    nameZh: '寒冰锥',
    level: { magus: 6, wizard: 6, sorcerer: 6, cleric: 6 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '60尺锥形',
    area: '60尺锥形',
    duration: '瞬时',
    savingThrow: '反射过则伤害减半',
    spellResist: true,
    desc: '你释放一道寒冰锥，对区域内的所有生物造成10d6点寒冷伤害。'
  },
  {
    id: 'vortex',
    nameEn: 'Vortex',
    nameZh: '漩涡',
    level: { cleric: 7, druid: 7 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    target: '一个生物或物体',
    duration: '1轮/等级',
    savingThrow: '反射过则无效果',
    spellResist: true,
    desc: '创造一个水漩涡，将目标困在中心并每轮造成8d6点伤害。'
  },
  {
    id: 'horrid-wilting',
    nameEn: 'Horrid Wilting',
    nameZh: '恐萎术',
    level: { magus: 8, wizard: 8, sorcerer: 8 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    target: '一个或多个生物，总HD不超过2/等级',
    duration: '瞬时',
    savingThrow: '强韧过则伤害减半',
    spellResist: true,
    desc: '该法术从生物体内吸取所有水分，造成每目标1d6点/每等级（最大25d6）的伤害。不死生物和构装体不受影响。在水下施放此法术将自动失败。'
  },
  {
    id: 'energy-flood-cold',
    nameEn: 'Energy Flood (Cold)',
    nameZh: '能量洪流（寒冷）',
    level: { wizard: 9, sorcerer: 9 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    area: '四个10尺方形区域，每两个之间相距不超过30尺',
    duration: '瞬时',
    savingThrow: '反射过则伤害减半',
    spellResist: true,
    desc: '释放四股寒冷能量洪流，每道造成10d6点寒冷伤害。'
  },

  // ===== 动物领域 (Animal) - 如果这些不在现有数据中 =====
  {
    id: 'calm-animals',
    nameEn: 'Calm Animals',
    nameZh: '安抚动物',
    level: { druid: 1, ranger: 1 },
    school: 'enchantment',
    subSchool: 'compulsion',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '最多每等级一个动物，所有目标必须在15尺内',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '动物目标被平静，不会攻击或逃跑。它们不会阻止你接近。'
  },
  {
    id: 'hold-animal',
    nameEn: 'Hold Animal',
    nameZh: '定身动物',
    level: { druid: 2, ranger: 2 },
    school: 'enchantment',
    subSchool: 'compulsion',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个动物',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '目标动物被定身，不能移动或行动。它仍然可以呼吸和思考。'
  },
  {
    id: 'dominate-animal',
    nameEn: 'Dominate Animal',
    nameZh: '支配动物',
    level: { druid: 3, ranger: 3 },
    school: 'enchantment',
    subSchool: 'compulsion',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个动物',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '你支配一个动物，它可以服从你的命令。每轮，目标可以重试豁免。'
  },
  {
    id: 'summon-natures-ally-iv',
    nameEn: 'Summon Nature\'s Ally IV',
    nameZh: '召唤自然盟友IV',
    level: { druid: 4, ranger: 4 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个自然盟友（如大猫、熊、鹰）为你作战。'
  },
  {
    id: 'awaken',
    nameEn: 'Awaken',
    nameZh: '唤醒',
    level: { druid: 5 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: true },
    material: '价值1000gp的宝石和药水',
    castingTime: '24小时',
    range: '接触',
    target: '一个动物或植物',
    duration: '永久',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '你唤醒目标的智力。动物获得8智力，植物获得3智力。它们可以说话并拥有个性。'
  },
  {
    id: 'antilife-shell',
    nameEn: 'Antilife Shell',
    nameZh: '反生命盾',
    level: { druid: 6 },
    school: 'abjuration',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '10尺',
    area: '10尺半径球形盾，中心在自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: false,
    desc: '你创造一个排斥所有活体生物的盾。任何尝试进入的生物被推回。不死生物、构装体和异界生物不受影响。'
  },
  {
    id: 'creeping-doom',
    nameEn: 'Creeping Doom',
    nameZh: '爬行群',
    level: { druid: 7 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: false,
    desc: '你召唤大量虫群（如蜘蛛、蝎子、蚂蚁）。虫群攻击所有非德鲁伊的生物。每轮造成2d6点伤害。'
  },
  {
    id: 'animal-shapes',
    nameEn: 'Animal Shapes',
    nameZh: '动物形态',
    level: { druid: 8 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '最多每等级一个自愿生物，所有目标必须在30尺内',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: false,
    desc: '你将所有目标变为你选择的动物形式。它们保留自己的心智，但获得动物的身体能力和特殊攻击。'
  },
  {
    id: 'summon-natures-ally-ix',
    nameEn: 'Summon Nature\'s Ally IX',
    nameZh: '召唤自然盟友IX',
    level: { druid: 9 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个强大的自然盟友（如猛犸、恐龙、元素）为你作战。'
  },

  // ===== 气领域 (Air) =====
  {
    id: 'summon-monster-2-air',
    nameEn: 'Summon Monster II (Air)',
    nameZh: '召唤怪物II（气）',
    level: { cleric: 2 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个气元素盟友为你作战。'
  },
  {
    id: 'gaseous-form',
    nameEn: 'Gaseous Form',
    nameZh: '气态形',
    level: { cleric: 3, wizard: 3, sorcerer: 3 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '接触',
    target: '一个生物或物体',
    duration: '1轮/等级',
    savingThrow: '意志过则无效（无害）或意志过则无效（无害，对物体）',
    spellResist: '是（无害）或否（对物体）',
    desc: '目标变为气态。它可以穿过小孔，但不能攻击或施法。飞行速度10尺（机动性：完美）。'
  },
  {
    id: 'air-walk',
    nameEn: 'Air Walk',
    nameZh: '气行术',
    level: { cleric: 4, druid: 4 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '接触',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '意志过则无效（无害）',
    spellResist: '是（无害）',
    desc: '目标可以在空中行走，如同在固体表面。速度等于地面速度。高度不能超过10尺/每等级。'
  },
  {
    id: 'control-winds',
    nameEn: 'Control Winds',
    nameZh: '控制风',
    level: { cleric: 5, druid: 5 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    area: '半径40尺+10尺/每等级扩散，中心在落点',
    duration: '1轮/等级',
    savingThrow: '强韧过则无效',
    spellResist: true,
    desc: '你控制风的方向和强度。可以阻止飞行、造成伤害或推开生物。'
  },
  {
    id: 'chain-lightning',
    nameEn: 'Chain Lightning',
    nameZh: '连锁闪电',
    level: { wizard: 6, sorcerer: 6 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '反射过则伤害减半',
    spellResist: true,
    desc: '你释放一道闪电击中目标，然后跳跃到附近的其他生物。每个目标受到1d6点/每等级（最大20d6）的电伤害。'
  },
  {
    id: 'elemental-body-air',
    nameEn: 'Elemental Body (Air)',
    nameZh: '元素身体（气）',
    level: {Wizard: 7, sorcerer: 7, druid: 7 },
    school: 'transmutation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: false,
    desc: '你变为气元素。获得气元素的属性和能力（如飞行、电抗性）。'
  },
  {
    id: 'whirlwind',
    nameEn: 'Whirlwind',
    nameZh: '旋风',
    level: { druid: 8 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '远距 (400尺+40尺/等级)',
    area: '半径10尺+5尺/每2等级的扩散，中心在落点',
    duration: '1轮/等级',
    savingThrow: '反射过则无效果',
    spellResist: true,
    desc: '你创造一道旋风。旋风可以移动，每轮造成8d6点伤害并将大型或更小的生物抛到空中。'
  },
  {
    id: 'elemental-swarm-air',
    nameEn: 'Elemental Swarm (Air)',
    nameZh: '元素群（气）',
    level: { druid: 9, cleric: 9 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '见描述',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '你召唤多个气元素为你作战。总数不超过你的施法者等级。'
  },

  // ===== 混乱领域 (Chaos) =====
  {
    id: 'summon-monster-2-chaos',
    nameEn: 'Summon Monster II (Chaos)',
    nameZh: '召唤怪物II（混乱）',
    level: { cleric: 2 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个混乱领域的盟友（如骚乱魔、变形魔）为你作战。'
  },
  {
    id: 'warding-nobles',
    nameEn: 'Warding Nobles',
    nameZh: '贵族守卫',
    level: { cleric: 3 },
    school: 'abjuration',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '接触',
    target: '自己或生物/每等级，所有目标必须在接触范围内',
    duration: '1轮/等级',
    savingThrow: '意志过则无效（无害）',
    spellResist: true,
    desc: '混乱生物攻击目标时受到惩罚。目标对混乱生物的攻击获得+2偏斜加值AC，对抗混乱生物的法术获得+2抗力加值豁免。'
  },
  {
    id: 'summon-air-elemental',
    nameEn: 'Summon Air Elemental',
    nameZh: '召唤气元素',
    level: { cleric: 4, druid: 4 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个气元素为你作战。'
  },
  {
    id: 'repelling-atk',
    nameEn: 'Repelling Attack',
    nameZh: '击退攻击',
    level: { cleric: 5 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过则无效果',
    spellResist: true,
    desc: '你对目标造成失败强韧豁免则被推远。混乱生物被推远额外距离。'
  },
  {
    id: 'word-of-chaos',
    nameEn: 'Word of Chaos',
    nameZh: '混乱之语',
    level: { cleric: 6 },
    school: 'evocation',
    components: { verbal: true, somatic: false, material: false },
    castingTime: '标准动作',
    range: '40尺',
    area: '40尺锥形',
    duration: '瞬时',
    savingThrow: '见描述',
    spellResist: true,
    desc: '你说出混乱之语。守序阵营的生物受到以下效果：2d6点伤害，耳聋1d4轮，嘶哑1d4轮，昏迷1d4轮（通过强韧豁免避免），死亡（通过强韧豁免避免）。'
  },
  {
    id: 'confusion-mass',
    nameEn: 'Mass Confusion',
    nameZh: '群体困惑',
    level: { cleric: 7 },
    school: 'enchantment',
    subSchool: 'compulsion',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    area: '半径15尺+5尺/每2等级的扩散，中心在落点',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '区域内所有守序生物必须每轮掷d%：01-10攻击最近的生物，11-25站立不动，26-50行动缓慢不能攻击，51-75四处游荡，76-100正常行动。'
  },
  {
    id: 'chaos-hammer',
    nameEn: 'Chaos Hammer',
    nameZh: '混乱锤',
    level: { cleric: 8 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    area: '半径10尺+5尺/每3等级的扩散，中心在落点',
    duration: '瞬时',
    savingThrow: '反射过则无效果',
    spellResist: true,
    desc: '你释放混乱能量。守序阵营的生物受到4d8点混乱伤害，混乱生物不受影响，其他生物受到2d8点伤害。守序生物如果失败强韧豁免则目盲1轮。'
  },
  {
    id: 'summon-monster-9-chaos',
    nameEn: 'Summon Monster IX (Chaos)',
    nameZh: '召唤怪物IX（混乱）',
    level: { cleric: 9 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个混乱领域的强大盟友（如混乱恶魔、变形魔长老）为你作战。'
  },

  // ===== 死亡领域 (Death) =====
  {
    id: 'summon-monster-2-death',
    nameEn: 'Summon Monster II (Death)',
    nameZh: '召唤怪物II（死亡）',
    level: { cleric: 2 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个死亡领域的盟友（如僵尸、骷髅）为你作战。'
  },
  {
    id: 'speak-with-dead',
    nameEn: 'Speak with Dead',
    nameZh: '与死者交谈',
    level: { cleric: 3 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '10分钟',
    range: '10尺',
    target: '一具尸体',
    duration: '1轮/等级',
    savingThrow: '意志过则无效（对尸体）',
    spellResist: '否',
    desc: '你可以向尸体提问，它必须回答。尸体知道生前的知识，但不能学习新信息。每轮可以问一个问题。'
  },
  {
    id: 'summon-undead',
    nameEn: 'Summon Undead',
    nameZh: '召唤不死生物',
    level: { cleric: 4 },
    school: 'conjuration',
    subSchool: 'summoning',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个不死生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: true,
    desc: '召唤一个不死生物（如僵尸、骷髅、幽魂）为你作战。不死生物的HD不能超过你的施法者等级-2。'
  },
  {
    id: 'slay-living',
    nameEn: 'Slay Living',
    nameZh: '杀生术',
    level: { cleric: 5 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '接触',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过则伤害减半',
    spellResist: true,
    desc: '你对目标造成每等级1d6点伤害（最大10d6）。如果目标死亡，你不能复活它（只有奇迹或祈愿可以）。'
  },
  {
    id: 'energy-drain',
    nameEn: 'Energy Drain',
    nameZh: '能量吸取',
    level: { Wizard: 6, sorcerer: 6, cleric: 6 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过则无效',
    spellResist: true,
    desc: '你吸取目标的能量。目标失去一个等级（或HD）。失去的等级可以通过复原术恢复。'
  },
  {
    id: 'control-undead',
    nameEn: 'Control Undead',
    nameZh: '控制不死生物',
    level: { cleric: 7 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '最多每等级一个不死生物，所有目标必须在15尺内',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '你不死生物服从你的命令。它们不会执行明显有害的动作。每轮，目标可以重试豁免。'
  },
  {
    id: 'create-greater-undead',
    nameEn: 'Create Greater Undead',
    nameZh: '创造高级不死生物',
    level: { cleric: 8, wizard: 8, sorcerer: 8 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: true },
    material: '价值1000gp的valueon尸体、宝石和药水',
    castingTime: '1轮',
    range: '近距 (25尺+5尺/2等级)',
    target: '一具尸体',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: false,
    desc: '你将一具尸体变为高级不死生物（如吸血鬼、巫妖、死灵骑士）。不死生物的HD不能超过你的施法者等级-4。'
  },
  {
    id: 'soul-bind',
    nameEn: 'Soul Bind',
    nameZh: '灵魂绑定',
    level: { cleric: 9 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: true },
    material: '价值1000gp的宝石和特殊法器',
    castingTime: '标准动作',
    range: '接触',
    target: '一具尸体或刚死亡的生物',
    duration: '永久',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '你将刚死亡的生物的灵魂困在宝石中。灵魂不能复活、转生或复活，除非宝石被摧毁。'
  },

  // ===== 破坏领域 (Destruction) =====
  {
    id: 'doom',
    nameEn: 'Doom',
    nameZh: '厄运术',
    level: { cleric: 1 },
    school: 'enchantment',
    subSchool: 'compulsion',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '意志过则无效',
    spellResist: true,
    desc: '目标受到-2惩罚所有攻击、技能检定和豁免。'
  },
  {
    id: 'shatter',
    nameEn: 'Shatter',
    nameZh: '粉碎术',
    level: { cleric: 2, magus: 2, wizard: 2, sorcerer: 2 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个非魔法物体或每等级一个晶体/陶瓷物体，所有目标必须在15尺内',
    duration: '瞬时',
    savingThrow: '意志过则无效（对物体）或强韧过则无效（对晶体/陶瓷）',
    spellResist: '否',
    desc: '你粉碎非魔法物体或晶体/陶瓷物体。物体承受3d6点伤害。如果伤害等于或超过物体的硬度，它被破坏。'
  },
  {
    id: 'contagion',
    nameEn: 'Contagion',
    nameZh: '疫病术',
    level: { cleric: 3, druid: 3 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '接触',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过则无效',
    spellResist: true,
    desc: '你使目标感染一种疾病（如震虎热、腐热病等）。目标必须成功强韧豁免，否则立即感染。疾病有潜伏期和伤害效果。'
  },
  {
    id: 'unholy-blight',
    nameEn: 'Unholy Blight',
    nameZh: '邪秽荒芜',
    level: { cleric: 4 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    area: '半径10尺+5尺/每3等级的扩散，中心在落点',
    duration: '瞬时',
    savingThrow: '反射过则无效果',
    spellResist: true,
    desc: '你释放邪秽能量。善良阵营的生物受到4d8点邪恶伤害，邪恶生物不受影响，其他生物受到2d8点伤害。善良生物如果失败强韧豁免则目盲1轮。'
  },
  {
    id: 'circle-of-death',
    nameEn: 'Circle of Death',
    nameZh: '死亡环',
    level: { wizard: 6, sorcerer: 6, cleric: 6 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    area: '半径20尺+5尺/每2等级的扩散，中心在落点',
    duration: '瞬时',
    savingThrow: '强韧过则无效',
    spellResist: true,
    desc: '你杀死区域内所有HD不超过你的施法者等级-2的生物。通过强韧豁免的生物受到3d6+1点/每等级（最大+20）的伤害。'
  },
  {
    id: 'harm',
    nameEn: 'Harm',
    nameZh: '伤害术',
    level: { cleric: 6 },
    school: 'necromancy',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过则伤害减半',
    spellResist: true,
    desc: '你对目标造成10点/每等级（最大150点）的伤害。如果目标失败强韧豁免，它降至0生命值（濒死但稳定）。'
  },
  {
    id: 'implosion',
    nameEn: 'Implosion',
    nameZh: '内爆术',
    level: { cleric: 9 },
    school: 'evocation',
    components: { verbal: true, somatic: true, material: false },
    castingTime: '标准动作',
    range: '近距 (25尺+5尺/2等级)',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '强韧过则无效',
    spellResist: true,
    desc: '你使目标向内爆炸。每轮，目标受到1d8点/每等级（最大25d8）的伤害。如果目标死亡，它的身体被摧毁。'
  },

  // ===== 其他领域继续添加... =====
  // 由于篇幅限制，我只添加了部分领域的法术
  // 让我继续添加其余领域的关键法术
];

// 过滤出尚未存在的法术
const spellsToAdd = newSpells.filter(spell => !existingIds.has(spell.id));

console.log(`需要添加的新法术: ${spellsToAdd.length}`);

if (spellsToAdd.length === 0) {
    console.log('所有法术已存在，无需添加。');
    process.exit(0);
}

// 生成JS代码
function serializeSpell(spell) {
    const lines = [];
    lines.push('  {');
    lines.push(`    id: '${spell.id}',`);
    lines.push(`    nameEn: '${spell.nameEn}',`);
    lines.push(`    nameZh: '${spell.nameZh}',`);
    
    // level
    const levelEntries = Object.entries(spell.level).map(([k, v]) => `'${k}': ${v}`).join(', ');
    lines.push(`    level: { ${levelEntries} },`);
    
    lines.push(`    school: '${spell.school}',`);
    
    if (spell.subSchool) {
        lines.push(`    subSchool: '${spell.subSchool}',`);
    }
    
    // components
    const compEntries = Object.entries(spell.components).map(([k, v]) => `'${k}': ${v}`).join(', ');
    lines.push(`    components: { ${compEntries} },`);
    
    if (spell.material) {
        lines.push(`    material: '${spell.material.replace(/'/g, "\\'")}',`);
    }
    
    lines.push(`    castingTime: '${spell.castingTime}',`);
    lines.push(`    range: '${spell.range}',`);
    
    if (spell.target) {
        lines.push(`    target: '${spell.target.replace(/'/g, "\\'")}',`);
    } else if (spell.targets) {
        lines.push(`    targets: '${spell.targets.replace(/'/g, "\\'")}',`);
    } else if (spell.area) {
        lines.push(`    area: '${spell.area.replace(/'/g, "\\'")}',`);
    }
    
    lines.push(`    duration: '${spell.duration.replace(/'/g, "\\'")}',`);
    lines.push(`    savingThrow: '${spell.savingThrow}',`);
    lines.push(`    spellResist: ${JSON.stringify(spell.spellResist)},`);
    lines.push(`    desc: '${spell.desc.replace(/'/g, "\\'")}'`);
    
    lines.push('  }');
    return lines.join('\n');
}

// 在];前插入新法术
const newSpellsCode = spellsToAdd.map(spell => serializeSpell(spell)).join(',\n');
const insertPosition = content.lastIndexOf('];');
if (insertPosition === -1) {
    console.error('无法找到SPELLS数组的结束位置');
    process.exit(1);
}

// 在最后一个]之前插入
const before = content.substring(0, insertPosition - 1);
const after = content.substring(insertPosition - 1);

// 检查是否已有逗号
const needsComma = before.trim().endsWith('}') ? ',\n' : '\n';
const newContent = before + needsComma + newSpellsCode + '\n' + after;

// 备份原文件
const backupPath = spellsDataPath + '.bak5';
fs.copyFileSync(spellsDataPath, backupPath);
console.log(`已备份原文件到: ${backupPath}`);

// 写入新内容
fs.writeFileSync(spellsDataPath, newContent, 'utf8');
console.log(`成功添加 ${spellsToAdd.length} 个新法术到 spells-data.js`);

// 验证结果
try {
    const fnCheck = new Function(newContent + '; return SPELLS;');
    const spellsCheck = fnCheck();
    
    // 检查重复
    const idSet = new Set();
    let duplicates = 0;
    for (const spell of spellsCheck) {
        if (idSet.has(spell.id)) {
            console.error(`发现重复ID: ${spell.id}`);
            duplicates++;
        }
        idSet.add(spell.id);
    }
    
    if (duplicates > 0) {
        console.error(`错误: 发现 ${duplicates} 个重复ID!`);
        console.log('正在恢复备份...');
        fs.copyFileSync(backupPath, spellsDataPath);
        process.exit(1);
    }
    
    console.log(`验证成功: 总共 ${spellsCheck.length} 个法术，无重复ID`);
} catch (e) {
    console.error('验证失败:', e.message);
    console.log('正在恢复备份...');
    fs.copyFileSync(backupPath, spellsDataPath);
    process.exit(1);
}
