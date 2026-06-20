const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第4批：缺失的 PHB 4-6 级常见法术
const batch4 = [
  {
    id: 'dimension-door',
    nameEn: 'Dimension Door',
    nameZh: '任意门',
    level: {"wizard":4,"sorcerer":4,"bard":4},
    school: 'Conjuration',
    components: 'V',
    castingTime: '1 standard action',
    range: 'Long (400 ft. + 40 ft./level)',
    target: 'You and touched objects or other touched willing creatures',
    duration: 'Instantaneous',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '你瞬间传送 yourself and up to 50 pounds of objects to any location within range. You can bring along objects or willing creatures, but they must be in contact with you.',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[4,5,6,7,8,9],"isDomain":false},"bard":{"levels":[4,5,6],"isDomain":false}},
    arcane: [4],
    source: 'PHB'
  },
  {
    id: 'polymorph',
    nameEn: 'Polymorph',
    nameZh: '变形术',
    level: {"wizard":4,"sorcerer":4},
    school: 'Transmutation',
    components: 'V, S, M (a piece of cocoaather or a writhing insect)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 min./level (D)',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '将目标变成一个新的生物。目标获得新形态的属性，但保留自己的意识和智力。法师可以使用该法术将自己变成强大的生物进行战斗。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false},"sorcerer":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    material: 'a piece of cocoaather or a writhing insect',
    source: 'PHB'
  },
  {
    id: 'scrying',
    nameEn: 'Scrying',
    nameZh: '占卜术',
    level: {"wizard":4,"cleric":5},
    school: 'Divination',
    components: 'V, S, M (a pool of water or a mirror)',
    castingTime: '1 hour',
    range: 'See text',
    target: 'One creature or object',
    duration: '1 min./level',
    savingThrow: 'Will negates',
    spellResist: 'Yes',
    desc: '创造一个魔法传感器来远程观察目标。你可以在任何距离观察目标，但必须在同一个位面。传感器是隐形的，无法被常规手段发现。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false},"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    divine: [5],
    material: 'a pool of water or a mirror',
    source: 'PHB'
  },
  {
    id: 'wall-of-fire',
    nameEn: 'Wall of Fire',
    nameZh: '火墙术',
    level: {"wizard":4},
    school: 'Evocation',
    components: 'V, S, M (a piece of phosphorous)',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'Wall up to 20 ft. long/level and 20 ft. high',
    duration: 'Concentration + 1 round/level',
    savingThrow: 'Reflex negates',
    spellResist: 'No',
    desc: '创造一道火墙。任何穿过火墙的生物受到 2d6 点火系伤害（反射减半）。你也可以创造一个火环困住敌人。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    material: 'a piece of phosphorous',
    source: 'PHB'
  },
  {
    id: 'wall-of-ice',
    nameEn: 'Wall of Ice',
    nameZh: '冰墙术',
    level: {"wizard":4},
    school: 'Evocation',
    components: 'V, S, M (a small piece of quartz or similar crystal)',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'Wall up to 20 ft. long/level and 20 ft. high',
    duration: 'Concentration + 1 round/level',
    savingThrow: 'Reflex negates',
    spellResist: 'No',
    desc: '创造一道冰墙。任何穿过冰墙的生物受到 2d6 点冷系伤害（反射减半）。冰墙可以阻挡远程攻击和视线。',
    classes: {"wizard":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    arcane: [4],
    material: 'a small piece of quartz or similar crystal',
    source: 'PHB'
  },
  {
    id: 'dimension-anchor',
    nameEn: 'Dimensional Anchor',
    nameZh: '维度锚',
    level: {"cleric":4},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One creature or object',
    duration: '1 min./level',
    savingThrow: 'None (see text)',
    spellResist: 'No',
    desc: '防止目标使用传送法术或异界旅行法术离开当前位面。该法术可以阻止敌人逃跑，也可以防止友军意外传送离开。',
    classes: {"cleric":{"levels":[4,5,6,7,8,9],"isDomain":false}},
    divine: [4],
    source: 'PHB'
  },
  {
    id: 'death-ward',
    nameEn: 'Death Ward',
    nameZh: '死亡防护',
    level: {"cleric":4,"paladin":4},
    school: 'Abjuration',
    components: 'V, S, DF',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 hour/level or until discharged',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '保护目标免受死亡效果影响。该法术可以防止死亡术、即死术、属性吸取等死亡效果。当目标受到死亡效果时，该法术消耗以抵消效果。',
    classes: {"cleric":{"levels":[4,5,6,7,8,9],"isDomain":false},"paladin":{"levels":[4,5],"isDomain":false}},
    divine: [4],
    source: 'PHB'
  },
  {
    id: 'freedom-of-movement',
    nameEn: 'Freedom of Movement',
    nameZh: '自由行动',
    level: {"cleric":4,"ranger":4,"druid":4},
    school: 'Abjuration',
    components: 'V, S, DF',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '10 min./level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '目标获得行动自由，不受困缚、泥沼、蛛网等效果影响。在水中移动也不会受到惩罚。',
    classes: {"cleric":{"levels":[4,5,6,7,8,9],"isDomain":false},"ranger":{"levels":[4,5],"isDomain":false},"druid":{"levels":[4,5,6,7],"isDomain":false}},
    divine: [4],
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch4.filter(s => !existingIds.has(s.id));

console.log('第4批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(', s.nameZh, ')'));

if (toAdd.length === 0) {
  console.log('✅ 第4批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
