const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 第5批：缺失的 PHB 5-7级常见法术
const batch5 = [
  {
    id: 'baleful-polymorph',
    nameEn: 'Baleful Polymorph',
    nameZh: '恶毒变形术',
    level: {"wizard":5},
    school: 'Transmutation',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Close (25 ft. + 5 ft./2 levels)',
    target: 'One creature',
    duration: 'Permanent',
    savingThrow: 'Fortitude negates',
    spellResist: 'Yes',
    desc: '目标必须进行强韧检定，否则会变成一只小羊（生命值 1d4+1）。变形为小羊后，目标失去所有特殊能力和法术能力。该效果可以被【移除诅咒】或【有限祈愿术】解除。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    source: 'PHB'
  },
  {
    id: 'break-enchantment',
    nameEn: 'Break Enchantment',
    nameZh: '解除魅惑',
    level: {"bard":5,"cleric":5},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '该法术可以解除目标身上所有的魅惑、程控和幻术效果。它可以解除【魅惑人类】、【暗示术】、【催眠图纹】等效果。',
    classes: {"bard":{"levels":[5,6],"isDomain":false},"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    divine: [5],
    arcane: [5],
    source: 'PHB'
  },
  {
    id: 'cure-critical-wounds',
    nameEn: 'Cure Critical Wounds',
    nameZh: '医疗严重伤害',
    level: {"cleric":5},
    school: 'Conjuration (Healing)',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: 'Instantaneous',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '触摸受术者，治疗 4d8+1/每施法者等级（最大 +20）点伤害。该法术可以Overheal（治疗超过当前生命值），超出的部分在 1轮/等级 内以临时生命值形式存在。',
    classes: {"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    divine: [5],
    source: 'PHB'
  },
  {
    id: 'flame-strike',
    nameEn: 'Flame Strike',
    nameZh: '火焰击',
    level: {"cleric":5},
    school: 'Evocation',
    components: 'V, S, DF',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One creature',
    duration: 'Instantaneous',
    savingThrow: 'Reflex half',
    spellResist: 'Yes',
    desc: '召唤一道从天而降的火焰柱，对目标造成 10d6 点火系伤害 + 10d6 点神术伤害。反射减半。邪恶阵营生物在法术抗力检定上承受 -4 惩罚。',
    classes: {"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    divine: [5],
    source: 'PHB'
  },
  {
    id: 'true-seeing',
    nameEn: 'True Seeing',
    nameZh: '真视术',
    level: {"wizard":5,"cleric":5},
    school: 'Divination',
    components: 'V, S, M (an ointment of the eyes worth 300 gp)',
    castingTime: '1 standard action',
    range: 'Touch',
    target: 'Creature touched',
    duration: '1 hour/level',
    savingThrow: 'Will negates (harmless)',
    spellResist: 'Yes (harmless)',
    desc: '受术者获得真视能力，可以看到 60 英尺内的隐身、星界投影、投影、幻术、改变容貌的生物。也可以看穿少有人用的传送门和幻影。',
    classes: {"wizard":{"levels":[5,6,7,8,9],"isDomain":false},"cleric":{"levels":[5,6,7,8,9],"isDomain":false}},
    arcane: [5],
    divine: [5],
    material: 'an ointment of the eyes worth 300 gp',
    source: 'PHB'
  }
];

// 检查哪些已经存在
const existingIds = new Set(spells.map(s => s.id));
const toAdd = batch5.filter(s => !existingIds.has(s.id));

console.log('第5批要添加的法术:', toAdd.length, '个');
toAdd.forEach(s => console.log('  -', s.nameEn, '(', s.nameZh, ')'));

if (toAdd.length === 0) {
  console.log('✅ 第5批法术已全部存在！');
  process.exit(0);
}

// 添加到数组
toAdd.forEach(s => spells.push(s));

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加', toAdd.length, '个法术到 spells-data.js');
console.log('当前法术总数:', spells.length);
