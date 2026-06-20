// 添加第二批缺失的领域法术（72个）
const fs = require('fs');
const path = require('path');

console.log('=== 开始添加第二批缺失的领域法术 ===\n');

// 读取现有法术数据
const spellsPath = path.join(__dirname, 'js', 'spells-data.js');
let content = fs.readFileSync(spellsPath, 'utf8');

// 备份
const backupPath = path.join(__dirname, 'js', 'spells-data.js.bak-add2');
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

// 定义第二批缺失的法术数据
const missingSpells2 = [
  // === 知识领域 (Knowledge) ===
  {
    id: 'detect-secret-doors',
    nameEn: 'Detect Secret Doors',
    nameZh: '侦测秘门',
    level: { cleric: 1, wizard: 1, knowledge: 1 },
    school: 'divination',
    components: 'V, S',
    castingTime: '标准动作',
    range: '60英尺',
    area: '以你为中心，60英尺半径扩散',
    duration: '专注，最长1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你能够察觉到隐藏的门、机关、陷阱等秘密入口。'
  },
  {
    id: 'detect-thoughts',
    nameEn: 'Detect Thoughts',
    nameZh: '侦测思想',
    level: { bard: 2, sorcerer: 2, wizard: 2, knowledge: 2 },
    school: 'divination',
    components: 'V, S, F',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '以你为中心，锥形爆发',
    duration: '专注，最长1轮/等级',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '你可以侦测到生物的思想。你可以察觉到表面的情绪和想法。',
    focus: '一个银质占卜棒'
  },
  {
    id: 'true-seeing',
    nameEn: 'True Seeing',
    nameZh: '真知术',
    level: { bard: 5, cleric: 5, druid: 7, sorcerer: 6, wizard: 6, knowledge: 5 },
    school: 'divination',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物或物体',
    duration: '1分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者能够看穿幻象、隐形、移位等幻术效果，并获得盲斗感官。',
    material: '一撮锑粉和一块桃花心木'
  },
  {
    id: 'find-the-path',
    nameEn: 'Find the Path',
    nameZh: '寻路术',
    level: { cleric: 6, knowledge: 6 },
    school: 'divination',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1小时/等级或直到到达目的地',
    savingThrow: '无',
    spellResist: '否',
    desc: '受术者知道如何到达指定目的地。法术会指引方向，如同有一条明显的路径。'
  },
  {
    id: 'legend-lore',
    nameEn: 'Legend Lore',
    nameZh: '传奇知识',
    level: { bard: 4, wizard: 6, knowledge: 4 },
    school: 'divination',
    components: 'V, S, M',
    castingTime: '见下文',
    range: '个人',
    target: '自己',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以了解关于特定人物、地点或物品的传说知识。施法时间取决于你所询问主题的知名度。',
    material: '价值至少100金币的熏香'
  },
  {
    id: 'discern-location',
    nameEn: 'Discern Location',
    nameZh: '定位术',
    level: { cleric: 8, wizard: 8, knowledge: 8 },
    school: 'divination',
    components: 'V, S',
    castingTime: '1轮',
    range: '无限',
    target: '一个生物或物体',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以精确确定任何一个生物或物体的位置，无论距离多远，甚至跨越位面。'
  },
  
  // === 守序领域 (Law) ===
  {
    id: 'command',
    nameEn: 'Command',
    nameZh: '指令术',
    level: { cleric: 1, law: 1 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你发出一个单词语指令（如"撤退"、"倒下"、"停止"、"投降"），目标必须通过意志检定来执行该指令。'
  },
  {
    id: 'order-wrath',
    nameEn: "Order's Wrath",
    nameZh: '秩序之怒',
    level: { cleric: 4, law: 4 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '20英尺半径爆发',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你创造出一道秩序能量的冲击波，对混乱生物造成伤害。混乱生物还会被震懵1轮。'
  },
  {
    id: 'magic-circle-law',
    nameEn: 'Magic Circle against Chaos',
    nameZh: '抗混乱法阵',
    level: { cleric: 3, law: 3 },
    school: 'abjuration',
    components: 'V, S, M, DF',
    castingTime: '标准动作',
    range: '接触',
    area: '以接触的生物或物为中心，10英尺半径扩散',
    duration: '1分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '否',
    desc: '创造一个对抗混乱生物的防护法阵。混乱生物无法进入法阵，法阵内的生物获得+2抗混乱豁免加值。',
    material: '价值至少100金币的银质法器'
  },
  {
    id: 'discern-lies',
    nameEn: 'Discern Lies',
    nameZh: '识破谎言',
    level: { bard: 3, cleric: 3, law: 3 },
    school: 'divination',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '你可以看穿目标的谎言。当目标说谎时，你会知道真相。'
  },
  {
    id: 'command-greater',
    nameEn: 'Command, Greater',
    nameZh: '高等指令术',
    level: { cleric: 5, law: 5 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '见下文',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '如同指令术，但你可以使用更长的指令短语（最多10个词），且持续时间更长。'
  },
  {
    id: 'hold-monster',
    nameEn: 'Hold Monster',
    nameZh: '定身怪物',
    level: { bard: 3, sorcerer: 5, wizard: 5, law: 5 },
    school: 'enchantment',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '目标怪物被完全定身，无法移动或行动。每轮结束时，目标可以重新进行豁免检定。',
    material: '一个小金钩'
  },
  
  // === 幸运领域 (Luck) ===
  {
    id: 'serendipity',
    nameEn: 'Serendipity',
    nameZh: '机缘巧合',
    level: { bard: 1, luck: 1 },
    school: 'divination',
    components: 'V, S',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '在法术持续时间内，每天一次，你可以重骰一次失败的攻击骰、豁免骰或技能检定。'
  },
  {
    id: 'freedom-of-movement',
    nameEn: 'Freedom of Movement',
    nameZh: '自由行动',
    level: { cleric: 4, druid: 4, ranger: 4, luck: 4 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物或物体',
    duration: '10分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者免疫束缚、擒抱、地形困难等移动限制效果。受术者可以正常在水中移动。',
    material: '一撮尘土'
  },
  {
    id: 'break-enchantment',
    nameEn: 'Break Enchantment',
    nameZh: '破除魔法',
    level: { bard: 4, cleric: 5, sorcerer: 5, wizard: 5, luck: 5 },
    school: 'abjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '你尝试解除目标身上的诅咒、魅惑、支配等附魔效果。你需要进行施法者等级检定来对抗原施法者等级。'
  },
  {
    id: 'esp',
    nameEn: 'ESP',
    nameZh: '心灵感应',
    level: { sorcerer: 3, wizard: 3, luck: 3 },
    school: 'divination',
    components: 'V, S, F',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '以你为中心，锥形爆发',
    duration: '1分钟/等级',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '你可以读取生物表面的思想。你可以理解任何语言的思想。',
    focus: '一块银质占卜棒'
  },
  {
    id: 'miracle-luck',
    nameEn: 'Miracle (Luck)',
    nameZh: '奇迹（幸运）',
    level: { cleric: 9, luck: 9 },
    school: 'evocation',
    components: 'V, S, DF, XP',
    castingTime: '标准动作',
    range: '见下文',
    target: '见下文',
    duration: '见下文',
    savingThrow: '见下文',
    spellResist: '见下文',
    desc: '你祈求神祇施展一个奇迹。此技法术可以实现几乎任何效果，从复活死者到改变现实。',
    xp: '500 XP'
  },
  
  // === 魔法领域 (Magic) ===
  {
    id: 'dispel-magic',
    nameEn: 'Dispel Magic',
    nameZh: '解除魔法',
    level: { bard: 3, cleric: 3, druid: 4, sorcerer: 3, wizard: 3, magic: 3 },
    school: 'abjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    target: '一个法术效果或物体',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你尝试解除目标身上的法术效果。你需要进行施法者等级检定来对抗被解除法术的施法者等级。'
  },
  {
    id: 'imbue-with-spell-ability',
    nameEn: 'Imbue with Spell Ability',
    nameZh: '赋予法术能力',
    level: { cleric: 4, magic: 4 },
    school: 'necromancy',
    components: 'V, S, DF',
    castingTime: '1轮',
    range: '接触',
    target: '接触到的生物',
    duration: '直到被施展或1天/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '你赋予受术者施展某些法术的能力。受术者可以施展你的一些神术，使用你的施法者等级。'
  },
  {
    id: 'spell-resistance',
    nameEn: 'Spell Resistance',
    nameZh: '法术抗力',
    level: { cleric: 5, sorcerer: 5, wizard: 5, magic: 5 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者获得法术抗力等于12+你的魅力调整值（牧师）或智力调整值（法师）。',
    material: '一小块琥珀'
  },
  {
    id: 'antisigil',
    nameEn: 'Antisigil',
    nameZh: '反印记',
    level: { wizard: 4, magic: 4 },
    school: 'abjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1天/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造一个反法术印记，使得追踪法术无法定位你。任何尝试定位你的法术或能力都会失败。'
  },
  {
    id: 'spell-turning',
    nameEn: 'Spell Turning',
    nameZh: '法术反转',
    level: { sorcerer: 7, wizard: 7, magic: 7 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你反转针对你的法术。1d4+6点法术等级会被反转回施法者。',
    material: '一块水晶球'
  },
  {
    id: 'protection-spells',
    nameEn: 'Protection from Spells',
    nameZh: '防法术',
    level: { sorcerer: 8, wizard: 8, magic: 8 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1轮/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者对法术获得抗力。所有针对受术者的法术都需要进行施法者等级检定才能成功。',
    material: '价值500金币的钻石'
  },
  {
    id: 'mage-hand-mass',
    nameEn: 'Mage Hand, Mass',
    nameZh: '法师之手（群体）',
    level: { wizard: 3, magic: 3 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '以你为中心，锥形爆发',
    duration: '专注，最长1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '如同法师之手，但你可以同时移动多个物体，总重量不超过10磅/等级。'
  },
  
  // === 植物领域 (Plant) ===
  {
    id: 'entangle',
    nameEn: 'Entangle',
    nameZh: '纠缠术',
    level: { druid: 1, ranger: 1, plant: 1 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '20英尺半径扩散',
    duration: '1分钟/等级',
    savingThrow: '反射过',
    spellResist: '否',
    desc: '区域内的植物迅速生长并纠缠所有生物。被纠缠的生物移动速度减半，且可能被困住。'
  },
  {
    id: 'tree-shape',
    nameEn: 'Tree Shape',
    nameZh: '化树术',
    level: { druid: 2, plant: 2 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你变成一棵活树的形状。你无法移动或攻击，但可以获得树的AC和生命值。'
  },
  {
    id: 'plant-growth',
    nameEn: 'Plant Growth',
    nameZh: '植物生长',
    level: { druid: 3, plant: 3 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '每等级一个10英尺立方体',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你加速植物的生长。被影响的植物生长得异常茂盛，使移动变得困难（视为困难地形）。'
  },
  {
    id: 'command-plants',
    nameEn: 'Command Plants',
    nameZh: '命令植物',
    level: { druid: 4, plant: 4 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '植物生物',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '你命令植物生物为你作战或执行任务。植物生物会听从你的命令，只要命令不违背其本性。'
  },
  {
    id: 'wall-of-thorns',
    nameEn: 'Wall of Thorns',
    nameZh: '荆棘墙',
    level: { druid: 5, plant: 5 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    effect: '一排荆棘，最长大10英尺/等级',
    duration: '1分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一道由尖刺荆棘组成的墙。任何试图穿过墙的生物受到每轮1d8点穿刺伤害。'
  },
  {
    id: 'repel-wood',
    nameEn: 'Repel Wood',
    nameZh: '驱退木制物品',
    level: { druid: 6, plant: 6 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '0英尺',
    area: '以你为中心，60英尺半径扩散',
    duration: '1分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一道力场，驱退所有木制物品和植物。木制武器和箭矢无法伤害你。'
  },
  {
    id: 'animate-plants',
    nameEn: 'Animate Plants',
    nameZh: '活化植物',
    level: { druid: 7, plant: 7 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '见下文',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将植物变成活化植物为你作战。你可以活化最多每等级一个中型植物，或一个大型植物/每2等级。'
  },
  {
    id: 'ironwood',
    nameEn: 'Ironwood',
    nameZh: '铁木术',
    level: { druid: 6, plant: 6 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '1轮',
    range: '接触',
    target: '接触到的活树',
    duration: '1天/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将活树的木材变成如同铁一样坚硬。铁木可以建造船、建筑或其他结构。',
    material: '一撮铁粉'
  },
  {
    id: 'liveoak',
    nameEn: 'Liveoak',
    nameZh: '活橡树',
    level: { druid: 6, plant: 6 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '1轮',
    range: '接触',
    target: '接触到的活橡树',
    duration: '1天/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将一棵活橡树变成树人守卫。树人拥有20HD，会使用你的施法者等级施展德鲁伊法术。',
    material: '一块橡木和一颗宝石'
  },
  
  // === 防护领域 (Protection) ===
  {
    id: 'sanctuary',
    nameEn: 'Sanctuary',
    nameZh: '圣所术',
    level: { cleric: 1, protection: 1 },
    school: 'abjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1轮/等级',
    savingThrow: '意志过',
    spellResist: '否',
    desc: '受术者被圣所保护。任何试图攻击受术者的生物必须通过意志检定，否则无法攻击。'
  },
  {
    id: 'shield-other',
    nameEn: 'Shield Other',
    nameZh: '保护他人',
    level: { cleric: 2, protection: 2 },
    school: 'abjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1小时/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '你分担受术者受到的伤害。受术者受到的所有伤害减半，你受到另一半伤害。'
  },
  {
    id: 'protection-from-energy',
    nameEn: 'Protection from Energy',
    nameZh: '防护能量',
    level: { cleric: 3, sorcerer: 3, wizard: 3, protection: 3 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物或物体',
    duration: '10分钟/等级或直到被吸收',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者获得对一种能量类型（酸、冷、电、火、音）的抗力12点伤害。',
    material: '一撮与该能量类型相关的材料'
  },
  {
    id: 'spell-immunity',
    nameEn: 'Spell Immunity',
    nameZh: '法术免疫',
    level: { cleric: 4, protection: 4 },
    school: 'abjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1轮/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者对特定法术免疫。你可以指定每4等级一个法术（最大5个），受术者对这些法术完全免疫。'
  },
  {
    id: 'antimagic-field',
    nameEn: 'Antimagic Field',
    nameZh: '反魔法场',
    level: { cleric: 8, sorcerer: 6, wizard: 6, protection: 8 },
    school: 'abjuration',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '个人',
    area: '以你为中心，10英尺半径扩散',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造一个反魔法区域。所有法术和超自然能力在区域内失效。',
    material: '一块铁和一块玛瑙'
  },
  {
    id: 'mind-blank',
    nameEn: 'Mind Blank',
    nameZh: '心灵屏障',
    level: { bard: 5, sorcerer: 8, wizard: 8, protection: 8 },
    school: 'abjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1天/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者对心灵感应、附魔、幻术和任何形式的思想侦测免疫。受术者也不会留下灵光痕迹。'
  },
  {
    id: 'prismatic-sphere',
    nameEn: 'Prismatic Sphere',
    nameZh: '虹光法球',
    level: { sorcerer: 9, wizard: 9, protection: 9 },
    school: 'abjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '10英尺',
    effect: '不透明的彩色球体，半径10英尺',
    duration: '10分钟/等级',
    savingThrow: '见下文',
    spellResist: '是',
    desc: '你创造一个虹光球体，阻挡所有视线。球体有七层，每层有不同的颜色和效果。'
  },
  
  // === 力量领域 (Strength) ===
  {
    id: 'enlarge-person',
    nameEn: 'Enlarge Person',
    nameZh: '人类定身',
    level: { sorcerer: 1, wizard: 1, strength: 1 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个类人生物',
    duration: '1分钟/等级',
    savingThrow: '强韧过',
    spellResist: '是',
    desc: '目标生物的体型增大一档。目标获得+2力量加值，-2敏捷减值，近战攻击和伤害+2d6。',
    material: '一撮铁粉'
  },
  {
    id: "bulls-strength",
    nameEn: "Bull's Strength",
    nameZh: '公牛之力',
    level: { cleric: 2, sorcerer: 2, wizard: 2, strength: 2 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1分钟/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者获得+4力量调整值。这增加近战攻击加值和伤害加值。',
    material: '一撮牛毛'
  },
  {
    id: 'magic-vestment',
    nameEn: 'Magic Vestment',
    nameZh: '魔法武备',
    level: { cleric: 3, strength: 3 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的护甲或盾牌',
    duration: '1小时/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '你将护甲或盾牌赋予+1增强加值（每4等级+1，最大+5）。这可以叠加于现有增强加值。'
  },
  {
    id: 'divine-power',
    nameEn: 'Divine Power',
    nameZh: '神力术',
    level: { cleric: 4, strength: 4 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你获得+6力量调整值，基础攻击加值等于你的HD（可以使用附加攻击），且获得临时生命值等于2倍你的施法者等级。'
  },
  {
    id: 'righteous-might',
    nameEn: 'Righteous Might',
    nameZh: '正义威仪',
    level: { cleric: 5, strength: 5 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你变得威武庄严。你的体型增大一档，获得+4力量、+4魅力、伤害减免5/邪恶，近战攻击和伤害+2d6。'
  },
  
  // === 太阳领域 (Sun) ===
  {
    id: 'continual-flame',
    nameEn: 'Continual Flame',
    nameZh: '恒久明焰',
    level: { cleric: 3, sun: 3 },
    school: 'evocation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的物体',
    duration: '永久',
    savingThrow: '无',
    spellResist: '否',
    desc: '你在物体上创造一个永久的魔法火焰。火焰散发普通火把的光芒，但不产生热、不消耗氧气、不会被水浇灭。',
    material: '价值50金币的宝石'
  },
  {
    id: 'sunbeam',
    nameEn: 'Sunbeam',
    nameZh: '阳光射线',
    level: { druid: 7, sun: 7 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '60英尺',
    effect: '多道阳光射线',
    duration: '1轮/等级',
    savingThrow: '反射过',
    spellResist: '是',
    desc: '你创造出多道强烈的阳光射线。每轮你可以发射一道射线，对目标造成1d6点伤害/等级（最大15d6）。对不死生物和暗影生物造成双倍伤害。'
  },
  
  // === 旅行领域 (Travel) ===
  {
    id: 'longstrider',
    nameEn: 'Longstrider',
    nameZh: '长步术',
    level: { druid: 1, ranger: 1, travel: 1 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '1小时/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者的地面移动速度增加10英尺。'
  },
  {
    id: 'find-vehicle',
    nameEn: 'Find Vehicle',
    nameZh: '寻车术',
    level: { ranger: 2, travel: 2 },
    school: 'divination',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '1英里/等级',
    target: '一辆合适的载具',
    duration: '1小时/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你找到一辆适合你需求的载具。载具会出现在你附近，并在法术持续时间内处于完美工作状态。'
  },
  {
    id: 'dimension-door',
    nameEn: 'Dimension Door',
    nameZh: '任意门',
    level: { bard: 4, sorcerer: 4, wizard: 4, travel: 4 },
    school: 'conjuration',
    components: 'V',
    castingTime: '标准动作',
    range: '0英尺',
    target: '自己或其他目标',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你瞬间传送自己到视线内或已知位置的任何地点，最远400英尺+40英尺/等级。'
  },
  {
    id: 'teleport-greater',
    nameEn: 'Teleport, Greater',
    nameZh: '高等传送术',
    level: { bard: 6, sorcerer: 7, wizard: 7, travel: 7 },
    school: 'conjuration',
    components: 'V',
    castingTime: '标准动作',
    range: '个人',
    target: '自己和其他愿意的生物',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '如同传送术，但你可以携带更多生物（每等级一个生物），且不需要熟悉目的地。'
  },
  {
    id: 'phase-door',
    nameEn: 'Phase Door',
    nameZh: '相位门',
    level: { sorcerer: 7, wizard: 7, travel: 7 },
    school: 'conjuration',
    components: 'V',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的表面',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你在墙壁、门或其他固体表面创造一个无形的通道。任何生物可以穿过通道，到达表面另一侧的对应位置。'
  },
  {
    id: 'astral-projection',
    nameEn: 'Astral Projection',
    nameZh: '星界投射',
    level: { cleric: 9, sorcerer: 9, wizard: 9, travel: 9 },
    school: 'necromancy',
    components: 'V, S, M',
    castingTime: '30分钟',
    range: '10英尺',
    target: '你和最多每等级一个接触到的生物',
    duration: '见下文',
    savingThrow: '无',
    spellResist: '否',
    desc: '你将你的星界体投射到星界。你的肉体留在原地（处于休眠状态），而你的星界体可以旅行到以太位面和外层位面。',
    material: '价值至少1000金币的宝石'
  },
  
  // === 诡术领域 (Trickery) ===
  {
    id: 'charm-person',
    nameEn: 'Charm Person',
    nameZh: '魅惑人类',
    level: { bard: 1, sorcerer: 1, wizard: 1, trickery: 1 },
    school: 'enchantment',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个类人生物',
    duration: '1小时/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你对一个类人生物施展此法术，使其对你产生友善感。目标不会听从可能伤害它的命令。'
  },
  {
    id: 'dominate-person',
    nameEn: 'Dominate Person',
    nameZh: '支配人类',
    level: { bard: 4, sorcerer: 5, wizard: 5, trickery: 5 },
    school: 'enchantment',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个类人生物',
    duration: '1天/等级',
    savingThrow: '意志过',
    spellResist: '是',
    desc: '你完全控制目标类人生物的心智。你可以使其执行任何行动，但它每天可以进行一次新的豁免检定。'
  },
  {
    id: 'polymorph-any-object',
    nameEn: 'Polymorph Any Object',
    nameZh: '变形万物',
    level: { sorcerer: 8, wizard: 8, trickery: 8 },
    school: 'transmutation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物或物体',
    duration: '见下文',
    savingThrow: '强韧过',
    spellResist: '是',
    desc: '你将目标变成几乎任何其他生物或物体。持续时间取决于目标与新形态之间的相似程度。',
    material: '一块象牙和一块乌龟壳'
  },
  
  // === 战争领域 (War) ===
  {
    id: 'spiritual-weapon',
    nameEn: 'Spiritual Weapon',
    nameZh: '灵能武器',
    level: { cleric: 2, war: 2 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    effect: '一把魔法飞剑',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一把魔法飞剑攻击敌人。飞剑使用你的基础攻击加值+魅力调整值进行攻击，造成1d8+魅力调整值点伤害。'
  },
  {
    id: 'bolt-of-glory',
    nameEn: 'Bolt of Glory',
    nameZh: '荣耀之箭',
    level: { cleric: 6, war: 6 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '远距（400英尺+40英尺/等级）',
    effect: '一道能量射线',
    duration: '瞬时',
    savingThrow: '反射过',
    spellResist: '是',
    desc: '你发射一道神圣能量的射线。射线对邪恶生物造成1d8点伤害/等级（最大15d8），对邪恶外位面生物造成双倍伤害。'
  },
  {
    id: 'power-word-faithful',
    nameEn: 'Power Word, Faithful',
    nameZh: '律令：忠诚',
    level: { cleric: 5, war: 5 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1天/等级',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，使目标对你绝对忠诚。目标会为你而战，不会背叛你。'
  },
  {
    id: 'power-word-true',
    nameEn: 'Power Word, True',
    nameZh: '律令：真实',
    level: { cleric: 7, war: 7 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '1轮/等级',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，使目标无法说谎。在法术持续时间内，目标只能说真话。'
  },
  {
    id: 'power-word-justify',
    nameEn: 'Power Word, Justify',
    nameZh: '律令：正义',
    level: { cleric: 9, war: 9 },
    school: 'enchantment',
    components: 'V',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '是',
    desc: '你说出一个充满力量的词汇，使目标被正义能量震击。目标受到10d6点伤害，如果生命值降至0以下，立即死亡。'
  },
  
  // === 水领域 (Water) ===
  {
    id: 'create-water',
    nameEn: 'Create Water',
    nameZh: '造水术',
    level: { cleric: 0, water: 0 },
    school: 'conjuration',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '一个容器',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出2加仑纯净水。水出现在容器内，如果没有容器，水会洒在地上。'
  },
  {
    id: 'obscure',
    nameEn: 'Obscure',
    nameZh: '模糊术',
    level: { cleric: 1, water: 1 },
    school: 'illusion',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '以目标为中心，20英尺半径扩散',
    duration: '10分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你创造出一片模糊的雾气，遮挡视线。在雾气中的生物获得隐蔽加值。'
  },
  {
    id: 'water-breathing',
    nameEn: 'Water Breathing',
    nameZh: '水下呼吸',
    level: { druid: 3, water: 3 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '接触',
    target: '接触到的生物',
    duration: '2小时/等级',
    savingThrow: '意志过（无害）',
    spellResist: '是（无害）',
    desc: '受术者可以在水下正常呼吸。法术不会影响淡水或咸水。'
  },
  {
    id: 'control-water',
    nameEn: 'Control Water',
    nameZh: '控制水流',
    level: { cleric: 4, druid: 4, water: 4 },
    school: 'transmutation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '长距（400英尺+40英尺/等级）',
    area: '见下文',
    duration: '10分钟/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你可以改变水体的水位或水流方向。你可以降低或提高水位，或改变水流速度。'
  },
  {
    id: 'ice-storm',
    nameEn: 'Ice Storm',
    nameZh: '冰风暴',
    level: { druid: 4, sorcerer: 4, wizard: 4, water: 4 },
    school: 'evocation',
    components: 'V, S, M',
    castingTime: '标准动作',
    range: '中距（100英尺+10英尺/等级）',
    area: '两个10英尺半径扩散/等级',
    duration: '瞬时',
    savingThrow: '无',
    spellResist: '否',
    desc: '你召唤出一阵冰雹和冰雨。每个扩散区域内的生物受到5d6点钝击伤害。',
    material: '一小撮沙子'
  },
  {
    id: 'freezing-sphere',
    nameEn: 'Freezing Sphere',
    nameZh: '冰冻法球',
    level: { druid: 6, sorcerer: 6, wizard: 6, water: 6 },
    school: 'evocation',
    components: 'V, S',
    castingTime: '标准动作',
    range: '长距（400英尺+40英尺/等级）',
    area: '40英尺半径爆发',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你创造出一颗极冷的冰球，对爆发区域内的生物造成10d6点寒冷伤害（反射过则受到5d6点伤害）。'
  },
  {
    id: 'tsunami',
    nameEn: 'Tsunami',
    nameZh: '海啸术',
    level: { druid: 9, water: 9 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '长距（400英尺+40英尺/等级）',
    effect: '一道巨大的海浪',
    duration: '1轮/等级',
    savingThrow: '反射过',
    spellResist: '否',
    desc: '你召唤出一道巨大的海啸。海啸对沿路的所有生物和建筑物造成巨大破坏。每轮海啸造成1d6点伤害/等级（最大20d6）。'
  },
  {
    id: 'elemental-swarm-water',
    nameEn: 'Elemental Swarm (Water)',
    nameZh: '元素蜂群（水）',
    level: { druid: 9, water: 9 },
    school: 'conjuration',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    effect: '召唤多个水元素',
    duration: '10轮/等级',
    savingThrow: '无',
    spellResist: '否',
    desc: '你召唤出多个水元素为你作战。你可以召唤最多8个水元素，或1个大型水元素。'
  }
];

console.log(`📝 定义了 ${missingSpells2.length} 个缺失法术的数据`);

// 过滤掉已经存在的法术
const newSpells = missingSpells2.filter(spell => !existingIds.has(spell.id));
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
  
  if (spell.xp) {
    lines.push(`    xp: '${spell.xp}',`);
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
