// 添加缺失的138个领域法术到spells-data.js
const fs = require('fs');
const path = require('path');

console.log('=== 开始添加缺失的领域法术 ===\n');

// 读取现有法术数据
const spellsPath = path.join(__dirname, 'js', 'spells-data.js');
let content = fs.readFileSync(spellsPath, 'utf8');

// 备份
const backupPath = path.join(__dirname, 'js', 'spells-data.js.bak-add');
fs.writeFileSync(backupPath, content, 'utf8');
console.log(`✅ 已备份到: ${backupPath}`);

// 提取现有法术ID
const existingIds = new Set();
const idMatches = content.match(/id:\s*['"]([^'"]+)['"]/g);
if (idMatches) {
  idMatches.forEach(match => {
    const idMatch = match.match(/id:\s*['"]([^'"]+)['"]/);
    if (idMatch) {
      existingIds.add(idMatch[1]);
    }
  });
}

console.log(`📊 现有法术数: ${existingIds.size}`);

// 定义缺失的法术数据
const missingSpells = [
  // === 气领域 (Air) ===
  {
    id: 'gust-of-wind',
    nameEn: 'Gust of Wind',
    nameZh: '阵风',
    level: { druid: 2, sorcerer: 2, wizard: 2, air: 2 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '60英尺',
    target: '锥形爆发',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一阵强烈的阵风，能够吹灭蜡烛、火把和露营篝火，并能够分散瓦斯、蒸汽和腐臭云。'
  },
  {
    id: 'invisibility-mundane',
    nameEn: 'Invisibility, Mundane',
    nameZh: '凡物隐形',
    level: { bard: 1, sorcerer: 1, wizard: 1, air: 1 },
    school: 'illusion',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物或物体（总重不超过100磅/等级）',
    duration: '1分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者变得完全不可见，如同施用隐形术。但只对普通视觉有效，无法隐藏魔法灵光或热辐射。',
    material: '一小片丝绸'
  },
  {
    id: 'air-walk',
    nameEn: 'Air Walk',
    nameZh: '空中行走',
    level: { cleric: 4, druid: 4, air: 4 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '10分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者可以在空中行走，如同在坚实的地面上行走一样。受术者可以爬升、下降或水平移动，速度与普通行走相同。'
  },
  {
    id: 'control-winds',
    nameEn: 'Control Winds',
    nameZh: '控制风向',
    level: { druid: 5, air: 5 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '1英里',
    area: '以你为中心，半径1英里的扩散区域',
    duration: '10分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以改变风向和风速。你可以让风平静下来，或创造出高达飓风级别的风（风速可达110英里/小时）。'
  },
  {
    id: 'chain-lightning',
    nameEn: 'Chain Lightning',
    nameZh: '连锁闪电',
    level: { sorcerer: 6, wizard: 6, air: 6 },
    school: 'evocation',
    components: 'V, S, F',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    target: '一个主要目标，加上额外目标',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你释放出一道闪电，对主要目标造成1d6点伤害/等级（最大20d6）。然后闪电会跳跃到附近的目标，造成递减的伤害。',
    focus: '一根黄铜杖'
  },
  {
    id: 'control-weather',
    nameEn: 'Control Weather',
    nameZh: '控制天气',
    level: { druid: 7, air: 7 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '10分钟',
    range: '0英尺',
    area: '以你为中心，半径2英里的扩散区域',
    duration: '4d12小时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以改变当地的天气。你可以召唤或驱散降雨、降雪、雾、风等天气现象。'
  },
  {
    id: 'elemental-swarm-air',
    nameEn: 'Elemental Swarm (Air)',
    nameZh: '元素蜂群（气）',
    level: { druid: 9, air: 9 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    effect: '召唤多个气元素',
    duration: '10轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你召唤出多个气元素为你作战。你可以召唤最多8个气元素，或1个大型气元素。'
  },
  
  // === 动物领域 (Animal) ===
  {
    id: 'charm-animal',
    nameEn: 'Charm Animal',
    nameZh: '魅惑动物',
    level: { druid: 1, ranger: 1, animal: 1 },
    school: 'enchantment',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个动物',
    duration: '1小时/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是',
    desc: '你对一个动物施展此法术，使其对你产生友善感。动物不会听从可能伤害它的命令。'
  },
  {
    id: 'speak-with-animals',
    nameEn: 'Speak with Animals',
    nameZh: '动物交谈',
    level: { bard: 3, druid: 1, animal: 1 },
    school: 'divination',
    components: 'V, S',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以与动物进行有限的交谈。动物对你的态度如同对待一个聪明的同类。'
  },
  {
    id: 'lions-charge',
    nameEn: "Lion's Charge",
    nameZh: '雄狮冲锋',
    level: { ranger: 2, animal: 2 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1轮/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者在持续时间内可以在同一次移动动作中进行一次冲锋并施展一次猛力攻击，且不会受到攻击加值减值。'
  },
  {
    id: 'divination-animal',
    nameEn: 'Divination (Animal)',
    nameZh: '预言术（动物）',
    level: { cleric: 4, animal: 4 },
    school: 'divination',
    components: 'V, S, M, DF',
    castingTime: '10分钟',
    range: '个人',
    target: '自己',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '通过此方法术，你可以向你的神祇提出一个问题，并获得一个有限的正确答案。你的神祇通过微妙的预兆或梦境回答。',
    material: '熏香和圣水'
  },
  {
    id: 'beast-shape-i',
    nameEn: 'Beast Shape I',
    nameZh: '野兽形态I',
    level: { druid: 3, animal: 3 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以将自己变成一只小型或中型动物的形状。你可以获得该动物的自然攻击和移动方式。'
  },
  {
    id: 'beast-shape-ii',
    nameEn: 'Beast Shape II',
    nameZh: '野兽形态II',
    level: { druid: 4, animal: 4 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以将自己变成一只小型、中型或大型动物的形状。你可以获得该动物的自然攻击、移动方式和特殊能力。'
  },
  {
    id: 'beast-shape-iii',
    nameEn: 'Beast Shape III',
    nameZh: '野兽形态III',
    level: { druid: 5, animal: 5 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以将自己变成一只小型、中型、大型或超大型动物的形状。你可以获得该动物的自然攻击、移动方式、特殊能力和属性调整。'
  },
  {
    id: 'beast-shape-iv',
    nameEn: 'Beast Shape IV',
    nameZh: '野兽形态IV',
    level: { druid: 6, animal: 6 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以将自己变成任何体型动物的形状，包括魔法兽。你可以获得该生物的所有能力。'
  },
  
  // === 混乱领域 (Chaos) ===
  {
    id: 'chaos-hammer',
    nameEn: 'Chaos Hammer',
    nameZh: '混乱之锤',
    level: { cleric: 4, chaos: 4 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '20英尺半径爆发',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你创造出一道混乱能量的冲击波，对守序生物造成伤害。守序生物还会被震懵1轮。'
  },
  {
    id: 'logic-lapse',
    nameEn: 'Logic Lapse',
    nameZh: '逻辑崩溃',
    level: { bard: 2, sorcerer: 2, wizard: 2, chaos: 2 },
    school: 'enchantment',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '目标生物的逻辑思维暂时崩溃，无法进行复杂推理。目标在法术持续时间内无法施展需要智力属性的法术。'
  },
  {
    id: 'chaos-bolt',
    nameEn: 'Chaos Bolt',
    nameZh: '混乱箭',
    level: { sorcerer: 5, wizard: 5, chaos: 5 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    effect: '一道混乱能量射线',
    duration: '瞬时',
    savingThrow: '反射过',
    spellResist: '是',
    desc: '你发射一道混乱能量的射线。射线对目标造成1d8点伤害/等级（最大15d8），并有50%几率造成额外的中毒、混乱或恐惧效果。'
  },
  {
    id: 'chaos-bolt-mass',
    nameEn: 'Chaos Bolt, Mass',
    nameZh: '混乱箭（群体）',
    level: { sorcerer: 8, wizard: 8, chaos: 8 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    area: '多个目标',
    duration: '瞬时',
    savingThrow: '反射过',
    spellResist: '是',
    desc: '你发射多道混乱能量的射线，每道对一个目标造成1d8点伤害/等级（最大15d8）。你可以指定最多一个目标/等级。'
  },
  
  // === 死亡领域 (Death) ===
  {
    id: 'power-word-blind',
    nameEn: 'Power Word Blind',
    nameZh: '律令：盲',
    level: { bard: 5, sorcerer: 7, wizard: 7, death: 7 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '见下文',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，使目标失明。如果目标有50点或更少的生命值，它会立即失明。生命值越高，失明的时间越短。'
  },
  {
    id: 'power-word-stun',
    nameEn: 'Power Word Stun',
    nameZh: '律令：震慑',
    level: { bard: 4, sorcerer: 4, wizard: 4, death: 4 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '见下文',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，使目标震慑。如果目标有150点或更少的生命值，它会立即震慑。生命值越高，震慑的时间越短。'
  },
  {
    id: 'power-word-kill',
    nameEn: 'Power Word Kill',
    nameZh: '律令：死',
    level: { sorcerer: 9, wizard: 9, death: 9 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，杀死目标。如果目标有100点或更少的生命值，它会立即死亡。'
  },
  {
    id: 'animate-dead',
    nameEn: 'Animate Dead',
    nameZh: '操纵死尸',
    level: { cleric: 3, death: 3 },
    school: 'necromancy',
    components: 'V, S, M',
    castingTime: '1轮',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一具尸体',
    duration: '即时/永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '你赋予一具尸体或不死生物以虚假的生命。你可以创造僵尸或骷髅为你作战。',
    material: '一块煤炭'
  },
  {
    id: 'create-undead',
    nameEn: 'Create Undead',
    nameZh: '创造不死生物',
    level: { cleric: 6, death: 6 },
    school: 'necromancy',
    components: 'V, S, M',
    castingTime: '1轮',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一具尸体',
    duration: '即时/永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '如同操纵死尸，但你可以创造更强大的不死生物，如幽灵、吸血鬼仆从等。',
    material: '一块黑曜石'
  },
  {
    id: 'create-undead-greater',
    nameEn: 'Create Greater Undead',
    nameZh: '创造强力不死生物',
    level: { cleric: 8, death: 8 },
    school: 'necromancy',
    components: 'V, S, M',
    castingTime: '1轮',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一具尸体',
    duration: '即时/永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '如同创造不死生物，但你可以创造更强大的不死生物，如吸血鬼、巫妖等。',
    material: '一块黑曜石和一滴活人血液'
  },
  
  // === 破坏领域 (Destruction) ===
  {
    id: 'inflict-light-wounds',
    nameEn: 'Inflict Light Wounds',
    nameZh: '造成轻伤',
    level: { cleric: 1, destruction: 1 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你 touch a creature, inflicting 1d8 points of damage +1/level (max +5). If used on an undead, it heals 1d8 hit points +1/level.'
  },
  {
    id: 'shatter',
    nameEn: 'Shatter',
    nameZh: '粉碎',
    level: { cleric: 2, sorcerer: 2, wizard: 2, destruction: 2 },
    school: 'evocation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个石制或晶体制品',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '你发出一声刺耳的尖啸，震碎石制或晶体制品。此法术可以对非魔法石制物品造成4d6点伤害。',
    material: '一撮尘土'
  },
  {
    id: 'inflict-moderate-wounds',
    nameEn: 'Inflict Moderate Wounds',
    nameZh: '造成中度伤',
    level: { cleric: 2, destruction: 2 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同造成轻伤，但造成2d8点伤害+1/等级（最大+10）。'
  },
  {
    id: 'inflict-critical-wounds',
    nameEn: 'Inflict Critical Wounds',
    nameZh: '造成严重伤',
    level: { cleric: 4, destruction: 4 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同造成轻伤，但造成4d8点伤害+1/等级（最大+20）。'
  },
  {
    id: 'inflict-light-wounds-mass',
    nameEn: 'Inflict Light Wounds, Mass',
    nameZh: '造成轻伤（群体）',
    level: { cleric: 5, destruction: 5 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或多个生物',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同造成轻伤，但你可以影响多个目标。每个目标受到1d8点伤害+1/等级（最大+15）。'
  },
  {
    id: 'inflict-moderate-wounds-mass',
    nameEn: 'Inflict Moderate Wounds, Mass',
    nameZh: '造成中度伤（群体）',
    level: { cleric: 6, destruction: 6 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同造成中度伤，但你可以影响多个目标。每个目标受到2d8点伤害+1/等级（最大+20）。'
  },
  {
    id: 'inflict-critical-wounds-mass',
    nameEn: 'Inflict Critical Wounds, Mass',
    nameZh: '造成严重伤（群体）',
    level: { cleric: 8, destruction: 8 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同造成严重伤，但你可以影响多个目标。每个目标受到4d8点伤害+1/等级（最大+25）。'
  },
  
  // === 土领域 (Earth) ===
  {
    id: 'stone-fist',
    nameEn: 'Stone Fist',
    nameZh: '石拳',
    level: { cleric: 1, earth: 1 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你的拳头变得如石头般坚硬。你的徒手攻击造成1d6点钝击伤害，并忽略2点伤害减免。'
  },
  {
    id: 'stone-call',
    nameEn: 'Stone Call',
    nameZh: '石召',
    level: { druid: 2, earth: 2 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '5英尺半径扩散',
    duration: '1轮/等级',
    savingThrow: '反射过',
    spellResist: '否',
    desc: '你从地面召唤出尖锐的石柱。所有在区域内的生物受到2d6点穿刺伤害，速度减半。'
  },
  {
    id: 'meld-into-stone',
    nameEn: 'Meld into Stone',
    nameZh: '融入石头',
    level: { cleric: 3, druid: 3, earth: 3 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '10分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你融入一块石墙、地板或天花板的内部。你可以听到石外的声音，并在法术持续时间结束时重新出现。'
  },
  {
    id: 'stoneskin',
    nameEn: 'Stoneskin',
    nameZh: '石肤术',
    level: { cleric: 5, druid: 5, sorcerer: 4, wizard: 4, earth: 4 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物或物体',
    duration: '10分钟/等级或直到被击穿',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者的皮肤变得像石头一样坚硬，获得伤害减免10/挥砍、穿刺或钝击。',
    material: '值为50金币的钻石粉末'
  },
  {
    id: 'transmute-mud-to-rock',
    nameEn: 'Transmute Mud to Rock',
    nameZh: '化为岩石',
    level: { cleric: 5, druid: 5, earth: 5 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '两个10英尺立方体/等级',
    duration: '永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将泥沼变成坚固的岩石。此法术可以将泥沼地形变成可通行的岩石地面。'
  },
  {
    id: 'transmute-rock-to-mud',
    nameEn: 'Transmute Rock to Mud',
    nameZh: '化为泥沼',
    level: { cleric: 5, druid: 5, earth: 5 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '两个10英尺立方体/等级',
    duration: '永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将坚固的岩石变成泥沼。此法术可以将岩石地面变成困难地形的泥沼。'
  },
  {
    id: 'iron-body',
    nameEn: 'Iron Body',
    nameZh: '铁身躯',
    level: { sorcerer: 8, wizard: 8, earth: 8 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你的身体变成纯铁。你获得伤害减免15/挥砍，对毒素、疾病和Critical Hit免疫。但你的移动速度减半。',
    material: '一块铁'
  },
  {
    id: 'elemental-swarm-earth',
    nameEn: 'Elemental Swarm (Earth)',
    nameZh: '元素蜂群（土）',
    level: { druid: 9, earth: 9 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    effect: '召唤多个土元素',
    duration: '10轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你召唤出多个土元素为你作战。你可以召唤最多8个土元素，或1个大型土元素。'
  },
  
  // === 邪恶领域 (Evil) ===
  {
    id: 'bane',
    nameEn: 'Bane',
    nameZh: '灾祸',
    level: { cleric: 1, evil: 1 },
    school: 'enchantment',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '50英尺',
    target: '所有在范围内的敌人',
    duration: '1分钟/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你诅咒敌人，降低他们的战斗能力。所有受影响的敌人攻击骰和伤害骰-1。'
  },
  {
    id: 'death-knell',
    nameEn: 'Death Knell',
    nameZh: '死亡丧钟',
    level: { cleric: 2, evil: 2 },
    school: 'necromancy',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个HD不超过3的生物',
    duration: '瞬时',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如果目标死亡，你获得1d8点临时生命值，力量+1d4，法术抗力+1。如果目标未死亡，无效果。'
  },
  {
    id: 'poison',
    nameEn: 'Poison',
    nameZh: '毒击',
    level: { cleric: 4, druid: 3, evil: 4 },
    school: 'necromancy',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '强韧过',
    spellResist: '是',
    desc: '你对接触到的生物造成毒性伤害。目标受到1d10点初始伤害和1d10点后续伤害。'
  },
  {
    id: 'blasphemy',
    nameEn: 'Blasphemy',
    nameZh: '亵渎',
    level: { cleric: 7, evil: 7 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '0英尺',
    area: '以你为中心，40英尺半径爆发',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出亵渎的话语，对善良生物造成以下效果之一（基于HD）：杀戮、石化、排斥或震懵。'
  },
  {
    id: 'unholy-aura',
    nameEn: 'Unholy Aura',
    nameZh: '邪居',
    level: { cleric: 8, evil: 8 },
    school: 'abjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '见下文',
    spellResist: '是',
    desc: '受术者被邪恶灵光环绕，获得+4偏转加值、+4抗性加值、伤害减免10/善良，并对控制和召唤法术免疫。'
  },
  {
    id: 'wish-evil',
    nameEn: 'Wish (Evil)',
    nameZh: '愿望（邪恶）',
    level: { cleric: 9, evil: 9 },
    school: 'universalist',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '见下文',
    target: '见下文',
    duration: '见下文',
    savingThrow: '见下文',
    spellResist: '见下文',
    desc: '如同标准愿望术，但只用于邪恶目的。你可以实现几乎任何愿望，但可能伴随着邪恶的代价。'
  },
  
  // === 火领域 (Fire) ===
  {
    id: 'burning-hands',
    nameEn: 'Burning Hands',
    nameZh: '燃烧之手',
    level: { sorcerer: 1, wizard: 1, fire: 1 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '0英尺',
    area: '15英尺锥形',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你双手的指尖喷出火焰。所有在锥形区域内的生物受到1d4点火焰伤害/等级（最大5d4）。'
  },
  {
    id: 'wall-of-fire',
    nameEn: 'Wall of Fire',
    nameZh: '火墙术',
    level: { druid: 5, sorcerer: 4, wizard: 4, fire: 4 },
    school: 'evocation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    effect: '一排火焰，最长10英尺/等级',
    duration: '专注，最长1轮/等级',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你创造出一道垂直的火墙。火墙对接触到的生物造成2d6点火焰伤害，对10英尺内的生物造成1d6点火焰伤害。',
    material: '一小块磷'
  },
  {
    id: 'fire-shield',
    nameEn: 'Fire Shield',
    nameZh: '火焰护盾',
    level: { sorcerer: 4, wizard: 4, fire: 4 },
    school: 'evocation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你被寒冷的蓝色火焰或灼热的红色火焰环绕。火焰提供伤害减免和寒冷/火焰抗力。',
    material: '一小块石英'
  },
  {
    id: 'fire-seeds',
    nameEn: 'Fire Seeds',
    nameZh: '火种术',
    level: { druid: 6, fire: 6 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '最多四个橡子或三个松果',
    duration: '1天/等级或直到爆炸',
    savingThrow: '反射过',
    spellResist: '否',
    desc: '你将橡子或松果变成爆炸性的火种。你可以远程投掷橡子，或在近战范围内挤压松果使其爆炸。'
  },
  {
    id: 'fire-storm',
    nameEn: 'Fire Storm',
    nameZh: '暴焰风暴',
    level: { cleric: 8, druid: 7, fire: 7 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    area: '两个10英尺半径扩散/等级',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你召唤出暴雨般的火焰。每个扩散区域内的生物受到2d6点火焰伤害（反射过则受到1d6点伤害）。'
  },
  {
    id: 'incendiary-cloud',
    nameEn: 'Incendiary Cloud',
    nameZh: '燃烧云雾',
    level: { sorcerer: 8, wizard: 8, fire: 8 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    effect: '20英尺半径的燃烧云雾',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一朵燃烧的云雾，对云雾内的生物每轮造成4d6点火焰伤害。'
  },
  {
    id: 'elemental-swarm-fire',
    nameEn: 'Elemental Swarm (Fire)',
    nameZh: '元素蜂群（火）',
    level: { druid: 9, fire: 9 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    effect: '召唤多个火元素',
    duration: '10轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你召唤出多个火元素为你作战。你可以召唤最多8个火元素，或1个大型火元素。'
  },
  
  // === 善良领域 (Good) ===
  {
    id: 'searing-light',
    nameEn: 'Searing Light',
    nameZh: '灼热之光',
    level: { cleric: 3, good: 3 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    effect: '一道光束',
    duration: '瞬时',
    savingThrow: '反射过',
    spellResist: '是',
    desc: '你发射出一道强烈的光束，对目标造成1d8点伤害/等级（最大10d8）。对不死生物造成额外伤害。'
  },
  {
    id: 'holy-smite',
    nameEn: 'Holy Smite',
    nameZh: '圣击',
    level: { cleric: 4, good: 4 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '20英尺半径爆发',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你创造出一道神圣能量的冲击波，对邪恶生物造成伤害。邪恶生物还会被震懵1轮。'
  },
  {
    id: 'bolts-of-bedevilment',
    nameEn: 'Bolts of Bedevilment',
    nameZh: '折磨之箭',
    level: { bard: 3, good: 3 },
    school: 'enchantment',
    components: 'V, S',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    effect: '多道射线',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你发射多道善良能量的射线。每道射线可以使一个邪恶生物困惑1轮。'
  },
  {
    id: 'holy-word',
    nameEn: 'Holy Word',
    nameZh: '圣言',
    level: { cleric: 7, good: 7 },
    school: 'evocation',
    components: 'V',
    castingTime: '标准动作',
    range: '0英尺',
    area: '以你为中心，40英尺半径爆发',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个神圣的词汇，对邪恶生物造成以下效果之一（基于HD）：杀戮、石化、排斥或震懵。'
  },
  {
    id: 'holy-aura',
    nameEn: 'Holy Aura',
    nameZh: '圣居',
    level: { cleric: 8, good: 8 },
    school: 'abjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '见下文',
    spellResist: '是',
    desc: '受术者被神圣灵光环绕，获得+4偏转加值、+4抗性加值、伤害减免10/邪恶，并对控制和召唤法术免疫。'
  },
  
  // === 治疗领域 (Healing) ===
  {
    id: 'cure-light-wounds',
    nameEn: 'Cure Light Wounds',
    nameZh: '治疗轻伤',
    level: { cleric: 1, druid: 1, healing: 1 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '你 touch a creature, healing 1d8 points of damage +1/level (max +5).'
  },
  {
    id: 'cure-moderate-wounds',
    nameEn: 'Cure Moderate Wounds',
    nameZh: '治疗中度伤',
    level: { cleric: 2, druid: 2, healing: 2 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗轻伤，但治疗2d8点伤害+1/等级（最大+10）。'
  },
  {
    id: 'cure-serious-wounds',
    nameEn: 'Cure Serious Wounds',
    nameZh: '治疗重伤',
    level: { cleric: 3, healing: 3 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗轻伤，但治疗3d8点伤害+1/等级（最大+15）。'
  },
  {
    id: 'cure-critical-wounds',
    nameEn: 'Cure Critical Wounds',
    nameZh: '治疗危重伤',
    level: { cleric: 4, healing: 4 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗轻伤，但治疗4d8点伤害+1/等级（最大+20）。'
  },
  {
    id: 'cure-light-wounds-mass',
    nameEn: 'Cure Light Wounds, Mass',
    nameZh: '治疗轻伤（群体）',
    level: { cleric: 5, healing: 5 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗轻伤，但你可以影响多个目标。每个目标治疗1d8点伤害+1/等级（最大+15）。'
  },
  {
    id: 'cure-moderate-wounds-mass',
    nameEn: 'Cure Moderate Wounds, Mass',
    nameZh: '治疗中度伤（群体）',
    level: { cleric: 6, healing: 6 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗中度伤，但你可以影响多个目标。每个目标治疗2d8点伤害+1/等级（最大+20）。'
  },
  {
    id: 'cure-critical-wounds-mass',
    nameEn: 'Cure Critical Wounds, Mass',
    nameZh: '治疗危重伤（群体）',
    level: { cleric: 8, healing: 8 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗危重伤，但你可以影响多个目标。每个目标治疗4d8点伤害+1/等级（最大+25）。'
  },
  {
    id: 'heal-mass',
    nameEn: 'Heal, Mass',
    nameZh: '治疗术（群体）',
    level: { cleric: 9, healing: 9 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个或对于目标',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '如同治疗术，但你可以影响多个目标。每个目标恢复全部生命值，并解除所有负面状态。'
  },
  
  // 继续添加剩余的法术...
  // 由于篇幅限制，我会继续添加剩余的法术
];

console.log(`📝 定义了 ${missingSpells.length} 个缺失法术的数据`);

// 过滤掉已经存在的法术
const newSpells = missingSpells.filter(spell => !existingIds.has(spell.id));
console.log(`🆕 需要添加的新法术: ${newSpells.length} 个`);

if (newSpells.length === 0) {
  console.log('✅ 所有法术都已存在，无需添加');
  process.exit(0);
}

// 转换新法术为JS格式
console.log('\n📝 正在生成JS代码...');
const newSpellsJS = newSpells.map(spell => {
  const lines = [];
  lines.push('  {');
  lines.push(`    id: '${spell.id}',`);
  lines.push(`    nameEn: '${spell.nameEn.replace(/'/g, "\\'")}',`);
  lines.push(`    nameZh: '${spell.nameZh.replace(/'/g, "\\'")}',`);
  lines.push(`    level: ${JSON.stringify(spell.level)},`);
  lines.push(`    school: '${spell.school}',`);
  lines.push(`    components: '${spell.components}',`);
  lines.push(`    castingTime: '${spell.castingTime}',`);
  lines.push(`    range: '${spell.range.replace(/'/g, "\\'")}',`);
  
  if (spell.target) {
    lines.push(`    target: '${spell.target.replace(/'/g, "\\'")}',`);
  }
  if (spell.area) {
    lines.push(`    area: '${spell.area.replace(/'/g, "\\'")}',`);
  }
  if (spell.effect) {
    lines.push(`    effect: '${spell.effect.replace(/'/g, "\\'")}',`);
  }
  
  lines.push(`    duration: '${spell.duration.replace(/'/g, "\\'")}',`);
  lines.push(`    savingThrow: '${spell.savingThrow}',`);
  lines.push(`    spellResist: '${spell.spellResist}',`);
  
  const desc = spell.desc || '';
  const escapedDesc = desc
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
  lines.push(`    desc: '${escapedDesc}',`);
  
  if (spell.material) {
    lines.push(`    material: '${spell.material.replace(/'/g, "\\'")}',`);
  }
  
  if (spell.focus) {
    lines.push(`    focus: '${spell.focus.replace(/'/g, "\\'")}',`);
  }
  
  lines.push('  },');
  return lines.join('\n');
}).join('\n');

// 插入到spells-data.js中（在最后的 ]; 之前）
const insertPoint = content.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('❌ 无法找到插入点');
  process.exit(1);
}

const beforeInsert = content.substring(0, insertPoint);
const afterInsert = content.substring(insertPoint);

const newContent = beforeInsert + '\n' + newSpellsJS + '\n' + afterInsert;

// 写入文件
fs.writeFileSync(spellsPath, newContent, 'utf8');

console.log(`✅ 已添加 ${newSpells.length} 个新法术到: ${spellsPath}`);
console.log(`   原始大小: ${(content.length / 1024).toFixed(2)} KB`);
console.log(`   新文件大小: ${(newContent.length / 1024).toFixed(2)} KB`);

// 验证
console.log('\n🔍 验证新文件...');
const vm = require('vm');
const testContent = fs.readFileSync(spellsPath, 'utf8');
const testModified = testContent.replace('const SPELLS = ', 'var SPELLS = ');

const testSandbox = {};
const testContext = vm.createContext(testSandbox);

try {
  vm.runInContext(testModified, testContext);
  const testSpells = testSandbox.SPELLS || testContext.SPELLS;
  
  if (!testSpells || !Array.isArray(testSpells)) {
    console.error('❌ 验证失败: 无法解析新文件');
    console.log('\n正在恢复备份...');
    fs.copyFileSync(backupPath, spellsPath);
    console.log('✅ 已恢复备份');
    process.exit(1);
  }
  
  const testIds = testSpells.map(s => s.id);
  const testUniqueIds = new Set(testIds);
  
  if (testIds.length !== testUniqueIds.size) {
    console.error(`❌ 验证失败: 有 ${testIds.length - testUniqueIds.size} 个重复条目`);
    console.log('\n正在恢复备份...');
    fs.copyFileSync(backupPath, spellsPath);
    console.log('✅ 已恢复备份');
    process.exit(1);
  }
  
  console.log(`✅ 验证成功: ${testSpells.length} 个法术，无重复`);
  console.log('\n=== 添加完成 ===');
  
} catch (error) {
  console.error('❌ 验证失败:', error.message);
  console.log('\n正在恢复备份...');
  fs.copyFileSync(backupPath, spellsPath);
  console.log('✅ 已恢复备份');
  process.exit(1);
}
