const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第1批：最常见、最基础的缺失 PHB 法术（1-4级）
const batch1 = [
  {
    id: 'hold-portal',
    nameEn: 'Hold Portal',
    nameZh: '封存门户',
    level: {"wizard":1},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One portal, up to 20 sq. ft./level',
    duration: '1 min./level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '这个法术将一道门、窗或其他开口封住。任何生物要想打开被封住的门户必须通过一次力量检定（DC = 该法术的豁免DC）。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [1],
    source: 'PHB'
  },
  {
    id: 'magic-aura',
    nameEn: 'Magic Aura',
    nameZh: '魔法灵光',
    level: {"wizard":1,"paladin":1},
    school: 'Illusion',
    components: 'V, S, F',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'One creature or object touched',
    duration: '1 min./level',
    savingThrow: 'None (see text)',
    spellResist: 'No',
    desc: '你在目标身上或内部（最多一件持握物）创造一个魔法灵光。你可以指定这个灵光是变化、咒法、预言、塑能、召唤、防护、死灵或幻术系法术的灵光。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"paladin":{"levels":[1,2,3,4,5],"isDomain":false}},
    arcane: [1],
    divine: [1],
    source: 'PHB'
  },
  {
    id: 'charm-person',
    nameEn: 'Charm Person',
    nameZh: '魅惑人类',
    level: {"wizard":1,"sorcerer":1,"bard":1},
    school: 'Enchantment',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One humanoid',
    duration: '1 hour/level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '目标把你视作值得信任的朋友，并愿意跟着你（遵循你的合理要求）。目标不会执行明显危险或自杀性的行动。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"bard":{"levels":[1,2,3,4,5,6],"isDomain":false}},
    arcane: [1],
    source: 'PHB'
  },
  {
    id: 'cause-fear',
    nameEn: 'Cause Fear',
    nameZh: '造成恐惧',
    level: {"wizard":1},
    school: 'Necromancy',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One living creature with 5 or fewer HD',
    duration: '1 round/level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '目标受到恐惧影响，会在其回合中尽可能远离你。如果无法移动，则目标蒙受震慑。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [1],
    source: 'PHB'
  },
  {
    id: 'endure-elements',
    nameEn: 'Endure Elements',
    nameZh: '忍耐元素',
    level: {"wizard":1,"druid":1,"ranger":1},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 hour/level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '受术者获得对热量、寒冷、酸、电或音能的伤害抗性，每轮每类伤害最多承受 5 点。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"druid":{"levels":[1,2,3,4,5,6,7],"isDomain":false},"ranger":{"levels":[1,2,3,4],"isDomain":false}},
    arcane: [1],
    divine: [1],
    source: 'PHB'
  },
  {
    id: 'identify',
    nameEn: 'Identify',
    nameZh: '鉴定',
    level: {"wizard":1},
    school: 'Divination',
    components: 'V, S, M (a pearl worth at least 100 gp)',
    castingTime: '1 hour',
    range: 'Touch',
    target: 'One creature or object',
    duration: 'Instantaneous',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你可以鉴定魔法物品的特性。该法术可以揭示物品的法术、充能次数、诅咒等信息。施法者必须在法术持续时间内专注。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [1],
    material: 'a pearl worth at least 100 gp',
    source: 'PHB'
  },
  {
    id: 'mount',
    nameEn: 'Mount',
    nameZh: '坐骑',
    level: {"wizard":1,"paladin":1},
    school: 'Conjuration',
    components: 'V, S, M (a bit of harness and a riding crop)',
    castingTime: '1 round',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One mount',
    duration: '1 hour/level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你召唤一匹由魔法力量构成的坐骑。坐骑的外观由你决定，但通常是一匹马、骡子或类似生物。坐骑有正常的属性值，但生命值等于 2d8 + 你的施法者等级。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"paladin":{"levels":[1,2,3,4,5],"isDomain":false}},
    arcane: [1],
    divine: [1],
    material: 'a bit of harness and a riding crop',
    source: 'PHB'
  },
  {
    id: 'silent-image',
    nameEn: 'Silent Image',
    nameZh: '无声幻影',
    level: {"wizard":1,"sorcerer":1},
    school: 'Illusion',
    components: 'V, S, F',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'Visual illusion that fills up to a 20-ft. cube',
    duration: 'Concentration',
    savingThrow: 'Will disbelief (if interacted with)',
    spellResist: 'No',
    desc: '你创造一个无声的幻影。幻影可以移动，也可以改变外观（以你能够描述的速度）。如果你移开视线或停止专注，幻影消失。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [1],
    source: 'PHB'
  },
  {
    id: 'sleep',
    nameEn: 'Sleep',
    nameZh: '睡眠',
    level: {"wizard":1,"sorcerer":1,"bard":1},
    school: 'Enchantment',
    components: 'V, S, M (fine sand, rose petals, or a cricket)',
    castingTime: '1 round',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One or more living creatures within a 10-ft.-radius burst',
    duration: '1 min./level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '该法术让目标陷入魔法睡眠。它会影响总共最多 4 个HD 的生物。受影响生物的 HD 从最低的开始计算。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"bard":{"levels":[1,2,3,4,5,6],"isDomain":false}},
    arcane: [1],
    material: 'fine sand, rose petals, or a cricket',
    source: 'PHB'
  },
  {
    id: 'unseen-servant',
    nameEn: 'Unseen Servant',
    nameZh: '隐形仆役',
    level: {"wizard":1,"sorcerer":1},
    school: 'Conjuration',
    components: 'V, S, M (a piece of string and a bit of wood)',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'None',
    duration: '1 hour/level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你创造一个无形的、力量为 2 的力场仆役。仆役可以执行简单的任务，如拿取物品、开门、清理等。它不能攻击，也不能施展法术。',
    classes: {"wizard":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[1,2,3,4,5,6,7,8,9],"isDomain":false}},
    arcane: [1],
    material: 'a piece of string and a bit of wood',
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch1.filter(s => !existingIds.has(s.id));

console.log('第1批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(' + s.nameZh + ')'));

if (toAdd.length === 0) {
  console.log('✅ 第1批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
