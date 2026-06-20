/**
 * 补充缺失的 PHB 法术 - 第1批（1级常见法术 20个）
 * 这些是最常用、最基础的 PHB 法术
 */

const newSpells = [
  {
    id: 'hold-portal',
    nameEn: 'Hold Portal',
    nameZh: '封存门户',
    level: {"wizard":1,"sorcerer":1},
    school: 'Abjuration',
    components: 'V, S',
    castingTime: '1 standard action',
    range: 'Medium (100 ft. + 10 ft./level)',
    target: 'One portal, up to 20 sq. ft./level',
    duration: '1 min./level',
    savingThrow: 'None',
    spellResist: 'No',
    desc: '这个法术将一道门、窗或其他开口封住，任何生物要想打开被封住的门户必须通过一次力量检定（DC = 该法术的豁免DC）。',
    classes: {'wizard':{'levels':[1,2,3,4,5,6,7,8,9],'isDomain':false},'sorcerer':{'levels':[1,2,3,4,5,6,7,8,9],'isDomain':false}},
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
    classes: {'wizard':{'levels':[1,2,3,4,5,6,7,8,9],'isDomain':false},'paladin':{'levels':[1,2,3,4,5],'isDomain':false}},
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
    desc: '这个目标把你视作值得信任的朋友，并愿意跟着你（遵循你的合理要求）。目标不会执行明显危险或自杀性的行动。',
    classes: {'wizard':{'levels':[1,2,3,4,5,6,7,8,9],'isDomain':false},'sorcerer':{'levels':[1,2,3,4,5,6,7,8,9],'isDomain':false},'bard':{'levels':[1,2,3,4,5,6],'isDomain':false}},
    source: 'PHB'
  }
];

module.exports = newSpells;
