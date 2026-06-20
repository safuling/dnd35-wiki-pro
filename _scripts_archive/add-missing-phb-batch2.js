const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第2批：常见 2-4 级缺失 PHB 法术
const batch2 = [
  {
    id: 'misdirection',
    nameEn: 'Misdirection',
    nameZh: '误导术',
    level: {"wizard":2},
    school: 'Illusion',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature or object touched',
    duration: '1 hour/level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '目标获得误导保护。任何试图侦测、定位或接触目标的生物或法术，会被误导到另一个生物或物体上。',
    classes: {"wizard":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [2],
    source: 'PHB'
  },
  {
    id: 'spider-climb',
    nameEn: 'Spider Climb',
    nameZh: '蜘蛛攀爬',
    level: {"wizard":2},
    school: 'Transmutation',
    components: 'V, S, M (a live spider)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '10 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '受术者获得蜘蛛般的攀爬能力，可以在墙壁和天花板上自由移动，不会坠落。攀爬速度等于受术者的地面移动速度。',
    classes: {"wizard":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [2],
    material: 'a live spider',
    source: 'PHB'
  },
  {
    id: 'whispering-wind',
    nameEn: 'Whispering Wind',
    nameZh: '低语之风',
    level: {"wizard":2},
    school: 'Transmutation',
    components: 'V, S',
    castingTime: '1 standard action',
    range: '1 mile',
    target: 'One creature designated by you',
    duration: 'No more than 1 hour',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你召唤一阵低语之风，它可以找到指定的目标并传达一段简短的信息（最多25个字）。风的移动速度为每小时1英里。',
    classes: {"wizard":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [2],
    source: 'PHB'
  },
  {
    id: 'calm-emotions',
    nameEn: 'Calm Emotions',
    nameZh: '安抚情绪',
    level: {"cleric":2,"bard":2},
    school: 'Enchantment',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'All creatures within a 20-ft.-radius burst',
    duration: 'Concentration, up to 1 round/level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '该法术平息受影响生物的情绪。受影响生物无法进行激烈的行动，如奔跑、冲锋、攻击或施展攻击性法术。',
    classes: {"cleric":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false},"bard":{"levels":[2,3,4,5,6],"isDomain":false}},
    divine: [2],
    arcane: [2],
    source: 'PHB'
  },
  {
    id: 'consecrate',
    nameEn: 'Consecrate',
    nameZh: '祝圣',
    level: {"cleric":2},
    school: 'Evocation',
    components: 'V, S, M (a vial of holy water and 25 gp worth of silver dust)',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One location (up to 20-ft. cube/level)',
    duration: '2 hours/level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你将一片区域祝圣给善良或邪恶阵营（由你选择）。祝圣区域内的邪恶或善良生物在攻击骰和伤害骰上承受-1惩罚。在祝圣区域内召唤或创造的不死生物获得+1生命值加值。',
    classes: {"cleric":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    divine: [2],
    material: 'a vial of holy water and 25 gp worth of silver dust',
    source: 'PHB'
  },
  {
    id: 'remove-paralysis',
    nameEn: 'Remove Paralysis',
    nameZh: '移除麻痹',
    level: {"cleric":2},
    school: 'Conjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '触摸一个受影响于麻痹或类似效果（如法术【定身术】）的生物。该法术移除麻痹状态和任何类似的临时束缚效果。',
    classes: {"cleric":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    divine: [2],
    source: 'PHB'
  },
  {
    id: 'heat-metal',
    nameEn: 'Heat Metal',
    nameZh: '加热金属',
    level: {"druid":2},
    school: 'Transmutation',
    components: 'V, S, DF',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'Metal equipment of one creature',
    duration: '7 rounds',
    savingThrow: 'Fortitude negates (object)',
    spellResist: 'No',
    desc: '该法术使目标的金属装备（如盔甲、盾牌、武器）变得灼热。穿着受热金属的生物每轮承受 2d6 点伤害。如果生物脱掉受热的金属装备，伤害停止。',
    classes: {"druid":{"levels":[2,3,4,5,6,7],"isDomain":false}},
    divine: [2],
    source: 'PHB'
  },
  {
    id: 'protection-from-arrows',
    nameEn: 'Protection from Arrows',
    nameZh: '防箭护盾',
    level: {"wizard":2,"sorcerer":2},
    school: 'Abjuration',
    components: 'V, S, M (a piece of parchment with a bit of down or feather)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 hour/level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'No',
    desc: '受术者对远程武器攻击（弓箭、弩箭、投掷武器等）获得伤害减免 10/挥砍、穿刺、钝击。该法术不防魔法远程攻击（如法术【魔法飞弹】）。',
    classes: {"wizard":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [2],
    material: 'a piece of parchment with a bit of down or feather',
    source: 'PHB'
  },
  {
    id: 'shatter',
    nameEn: 'Shatter',
    nameZh: '粉碎',
    level: {"wizard":2,"sorcerer":2,"bard":2},
    school: 'Evocation',
    components: 'V, S, M (a chip of mica)',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One solid object or one crystalline creature',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (object)',
    spellResist: 'No',
    desc: '该法术可以粉碎非魔法水晶、玻璃或陶瓷物品。它也可以伤害结晶生物（如魔像）。受影响的物品或生物承受 1d6 点伤害/每2施法者等级（最大 5d6）。',
    classes: {"wizard":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false},"bard":{"levels":[2,3,4,5,6],"isDomain":false}},
    arcane: [2],
    material: 'a chip of mica',
    source: 'PHB'
  },
  {
    id: 'silence',
    nameEn: 'Silence',
    nameZh: '沉默术',
    level: {"cleric":2},
    school: 'Illusion',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'One creature or object',
    duration: '1 min./level',
    savingThrow: 'Will negates (object)',
    spellResist: 'No',
    desc: '该法术创造一个半径为 20 英尺的沉默区域。区域内所有生物无法发出声音，无法施展带有言语成分的法术。该法术可以移动（由你决定）。',
    classes: {"cleric":{"levels":[2,3,4,5,6,7,8,9],"isDomain":false}},
    divine: [2],
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch2.filter(s => !existingIds.has(s.id));

console.log('第2批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(' + s.nameZh + ')'));

if (toAdd.length === 0) {
  console.log('✅ 第2批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件（使用 JSON 序列化）
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
