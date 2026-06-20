const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第6批：缺失的 PHB 5-7级法术
const batch6 = [
  {
    id: 'dream',
    nameEn: 'Dream',
    nameZh: '梦境术',
    level: {"wizard":5,"bard":5},
    school: 'Enchantment',
    components: 'V, S',
    castingTime: '1 minute',
    range: 'Unlimited',
    target: 'One or more living creatures',
    duration: 'See text',
    savingThrow: 'None (see text)',
    spellResist: 'Yes',
    desc: '该法术让你进入目标的梦境。你可以传递信息、警告或威胁。目标可以进行意志检定以提前醒来。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false},"bard":{"levels":[5,6],"isDomain":false}},
    arcane: [5],
    source: 'PHB'
  },
  {
    id: 'fabricate',
    nameEn: 'Fabricate',
    nameZh: '制造术',
    level: {"wizard":5},
    school: 'Transmutation',
    components: 'V, S, M (the original material)',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'Object touched',
    duration: 'Instantaneous',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你将原材料转化为成品。每施法者等级可以转化 1 磅的材料。该法术可以在1轮内制造物品。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    material: 'the original material',
    source: 'PHB'
  },
  {
    id: 'permanent-image',
    nameEn: 'Permanent Image',
    nameZh: '永久幻影',
    level: {"wizard":5,"sorcerer":5},
    school: 'Illusion',
    components: 'V, S, M (a bit of fleece)',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'Visual illusion that fills up to a 20-ft. cube',
    duration: 'Permanent (D)',
    savingThrow: 'Will disbelief (if interacted with)',
    spellResist: 'No',
    desc: '创造一个永久的幻影。幻影可以移动，也可以改变外观。只要你在范围内，你可以维持幻影。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    material: 'a bit of fleece',
    source: 'PHB'
  },
  {
    id: 'telekinesis',
    nameEn: 'Telekinesis',
    nameZh: '遥体术',
    level: {"wizard":5},
    school: 'Transmutation',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'One object or creature',
    duration: 'Concentration, up to 1 round/level',
    savingThrow: 'Will negates (object)',
    spellResist: 'Yes',
    desc: '你获得远程操纵物体的能力。可以举起、移动或投掷物体。重量上限为每施法者等级 25 磅。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    source: 'PHB'
  },
  {
    id: 'wall-of-force',
    nameEn: 'Wall of Force',
    nameZh: '力墙术',
    level: {"wizard":5},
    school: 'Evocation',
    components: 'V, S, M (a pinch of powder made from a clear gem)',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'Wall up to 20 ft. long/level and 10 ft. high',
    duration: 'Permanent (D)',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '创造一道无形的力场墙。力墙是绝对坚固的（硬度 50，生命值 90），无法被常规手段破坏。魔法也无法穿透。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    material: 'a pinch of powder made from a clear gem',
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch6.filter(s => !existingIds.has(s.id));

console.log('第6批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(', s.nameZh, ')'));

if (toAdd.length === 0) {
  console.log('✅ 第6批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件（使用 JSON 序列化）
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
