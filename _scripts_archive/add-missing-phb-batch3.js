const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第3批：缺失的 PHB 3-5级法术（最常见的高等级法术）
const batch3 = [
  {
    id: 'flame-arrow',
    nameEn: 'Flame Arrow',
    nameZh: '火箭术',
    level: {"ranger":2,"wizard":3},
    school: 'Evocation',
    components: 'V, S, M (a drop of oil and a small piece of flint)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Weapons or ammunition touched (up to 50 arrows or bolts)',
    duration: '10 min./level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你为箭矢或弩箭附魔火焰。被附魔的弹药在命中时造成额外的 1d6 点火系伤害。',
    classes: {"ranger":{"levels":[2,3,4],"isDomain":false},"wizard":{"levels":[3,4,5,6,7,8,9],"isDomain":false}},
    divine: [2],
    arcane: [3],
    material: 'a drop of oil and a small piece of flint',
    source: 'PHB'
  },
  {
    id: 'phantasmal-killer',
    nameEn: 'Phantasmal Killer',
    nameZh: '幻影杀手',
    level: {"wizard":4},
    school: 'Illusion',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One living creature',
    duration: 'Instantaneous',
    savingThrow: 'Fortitude partial (see text)',
    spellResist: 'Yes',
    desc: '目标的潜意识最深处的恐惧被具现化。目标必须通过对抗检定，否则受到 3d6 点体质伤害（若通过检定则受到一半伤害）。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    source: 'PHB'
  },
  {
    id: 'call-lightning',
    nameEn: 'Call Lightning',
    nameZh: '召唤闪电',
    level: {"druid":3,"ranger":3},
    school: 'Evocation',
    components: 'V, S',
    castingTime: '1 round',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'One or more 30-ft.-radius bursts',
    duration: '1 min./level',
    savingThrow: 'Reflex half',
    spellResist: 'No',
    desc: '你在指定区域召唤一道闪电风暴。每轮你可以在区域内召唤一道闪电，造成 3d6 点电系伤害。',
    classes: {"druid":{"levels":[3,4,5,6,7],"isDomain":false},"ranger":{"levels":[3,4],"isDomain":false}},
    divine: [3],
    source: 'PHB'
  },
  {
    id: 'stone-shape',
    nameEn: 'Stone Shape',
    nameZh: '化石为泥',
    level: {"druid":3},
    school: 'Transmutation',
    components: 'V, S, M (soft clay)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Stone object touched',
    duration: 'Instantaneous',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你改变接触到的石制物品的形状。你可以创造门口、窗户、通道或其他形状。最大体积为每施法者等级 5 立方英尺。',
    classes: {"druid":{"levels":[3,4,5,6,7],"isDomain":false}},
    divine: [3],
    material: 'soft clay',
    source: 'PHB'
  },
  {
    id: 'remove-blindness-deafness',
    nameEn: 'Remove Blindness/Deafness',
    nameZh: '移除盲聋',
    level: {"cleric":3,"paladin":3},
    school: 'Conjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: 'Instantaneous',
    savingThrow: 'Fortitude negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '该法术治愈目标的盲或聋状态。你可以选择治愈盲或聋，或者同时治愈两者。',
    classes: {"cleric":{"levels":[3,4,5,6,7,8,9],"isDomain":false},"paladin":{"levels":[3,4,5],"isDomain":false}},
    divine: [3],
    source: 'PHB'
  },
  {
    id: 'remove-curse',
    nameEn: 'Remove Curse',
    nameZh: '移除诅咒',
    level: {"cleric":3,"paladin":3,"wizard":4},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature or object touched',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '该法术移除目标身上的诅咒。它也可以移除魔法物品上的诅咒。',
    classes: {"cleric":{"levels":[3,4,5,6,7,8,9],"isDomain":false},"paladin":{"levels":[3,4,5],"isDomain":false},"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    divine: [3],
    arcane: [4],
    source: 'PHB'
  },
  {
    id: 'arcane-eye',
    nameEn: 'Arcane Eye',
    nameZh: '奥术之眼',
    level: {"wizard":4},
    school: 'Divination',
    components: 'V, S, M (a bit of bat fur)',
    castingTime: '1 standard action',
    range: 'Unlimited',
    target: 'Magical eye',
    duration: '1 min./level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你创造一个无形的魔法眼睛，可以在任何地方悬浮。你通过眼睛看，可以飞行（速度 30 英尺）。眼睛不会被侦测。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    material: 'a bit of bat fur',
    source: 'PHB'
  },
  {
    id: 'locate-creature',
    nameEn: 'Locate Creature',
    nameZh: '定位生物',
    level: {"wizard":4,"ranger":4},
    school: 'Divination',
    components: 'V, S, M (a bit of fur from the type of creature you seek)',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'One creature',
    duration: '10 min./level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '该法术让你知道指定生物的方向和距离。你必须知道你要找的生物的姓名或描述。该法术可以穿透大多数障碍物。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false},"ranger":{"levels":[4],"isDomain":false}},
    arcane: [4],
    material: 'a bit of fur from the type of creature you seek',
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch3.filter(s => !existingIds.has(s.id));

console.log('第3批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(' + s.nameZh + ')'));

if (toAdd.length === 0) {
  console.log('✅ 第3批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
