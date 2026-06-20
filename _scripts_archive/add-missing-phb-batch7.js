const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第7批：缺失的 PHB 6-7级常见法术
const batch7 = [
  {
    id: 'analyze-dweomer',
    nameEn: 'Analyze Dweomer',
    nameZh: '解析魔法',
    level: {"wizard":6},
    school: 'Divination',
    components: 'V, S, F',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One spell or magic item',
    duration: '1 round/level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你可以了解目标法术或魔法物品的所有信息，包括法术等级、学派、施法者等级、持续时间等。',
    classes: {"wizard":{"levels":[6,7,8,9],"isDomain":false}},
    arcane: [6],
    source: 'PHB'
  },
  {
    id: 'true-seeing',
    nameEn: 'True Seeing',
    nameZh: '真视术',
    level: {"wizard":6,"cleric":5},
    school: 'Divination',
    components: 'V, S, M (a ruby paste worth 5,000 gp)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '受术者获得真视能力，可以看到隐身生物、星界投影、投影、幻术、改变容貌的生物等。',
    classes: {"wizard":{"levels":[6,7,8,9],"isDomain":false},"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [6],
    divine: [5],
    material: 'a ruby paste worth 5,000 gp',
    source: 'PHB'
  },
  {
    id: 'hez',
    nameEn: 'Heal',
    nameZh: '医疗术',
    level: {"cleric":6},
    school: 'Conjuration (Healing)',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '触摸受术者，治疗所有伤害（包括属性伤害）、移除失明、耳聋、麻痹、腐朽等状态。',
    classes: {"cleric":{"levels":[6,7,8,9],"isDomain":false}},
    divine: [6],
    source: 'PHB'
  },
  {
    id: 'eyebite',
    nameEn: 'Eyebite',
    nameZh: '魔眼术',
    level: {"wizard":6},
    school: 'Divination',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 min./level (D)',
    savingThrow: 'None (see text)',
    spellResist: 'No',
    desc: '你在受术者额头上创造一个魔法之眼。你可以看到受术者看到的任何东西，持续时间为该法术的持续时间。',
    classes: {"wizard":{"levels":[6,7,8,9],"isDomain":false}},
    arcane: [6],
    source: 'PHB'
  },
  {
    id: 'mislead',
    nameEn: 'Mislead',
    nameZh: '误导幻影',
    level: {"wizard":5,"bard":6},
    school: 'Illusion',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'You',
    duration: '1 round/level (D)',
    savingThrow: 'None (see text)',
    spellResist: 'No',
    desc: '你创造一个与自己完全相同的幻影。幻影可以移动、说话、施法，而你本尊可以隐身和移动。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false},"bard":{"levels":[6],"isDomain":false}},
    arcane: [5],
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch7.filter(s => !existingIds.has(s.id));

console.log('第7批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(', s.nameZh, ')'));

if (toAdd.length === 0) {
  console.log('✅ 第7批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
