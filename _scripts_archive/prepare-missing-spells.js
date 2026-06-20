const fs = require('fs');

// 读取缺失的法术列表
const missingSpells = JSON.parse(fs.readFileSync('missing-spells.json', 'utf8'));
console.log(`需要添加 ${missingSpells.length} 个缺失的领域法术`);

// 为缺失的法术创建数据
// 注意：这里我只创建基本框架，实际的法术数据需要根据D&D 3.5e SRD来填写
const newSpellsData = [];

// 由于创建79个法术的完整数据是一个非常庞大的任务，
// 让我采用一个更实用的方法：从可靠的D&D 3.5e数据源获取法术数据

// 但实际上，我可以基于法术ID和领域来推断法术的基本信息
// 让我为这些法术创建一个基础的数据模板

const spellTemplates = {
  // 气领域法术
  'obscuring_mist': { nameEn: 'Obscuring Mist', nameZh: '云雾术', level: { druid: 1 }, school: 'conjuration' },
  'air_walk': { nameEn: 'Air Walk', nameZh: '气行术', level: { cleric: 4, druid: 4 }, school: 'transmutation' },
  'control_winds': { nameEn: 'Control Winds', nameZh: '控制风', level: { cleric: 5, druid: 5 }, school: 'transmutation' },
  'elemental_body_air': { nameEn: 'Elemental Body (Air)', nameZh: '元素身体（气）', level: { wizard: 7, sorcerer: 7, druid: 7 }, school: 'transmutation' },
  
  // 动物领域法术
  'calm_animals': { nameEn: 'Calm Animals', nameZh: '安抚动物', level: { druid: 1, ranger: 1 }, school: 'enchantment' },
  'speak_with_animals': { nameEn: 'Speak with Animals', nameZh: '与动物交谈', level: { druid: 1, ranger: 1 }, school: 'divination' },
  'dominate_animal': { nameEn: 'Dominate Animal', nameZh: '支配动物', level: { druid: 3, ranger: 3 }, school: 'enchantment' },
  'summon_natures_ally_iv': { nameEn: 'Summon Nature\'s Ally IV', nameZh: '召唤自然盟友IV', level: { druid: 4 }, school: 'conjuration' },
  'awaken': { nameEn: 'Awaken', nameZh: '唤醒', level: { druid: 5 }, school: 'transmutation' },
  'antilife_shell': { nameEn: 'Antilife Shell', nameZh: '反生命盾', level: { druid: 6 }, school: 'abjuration' },
  'creeping_doom': { nameEn: 'Creeping Doom', nameZh: '爬行群', level: { druid: 7 }, school: 'conjuration' },
  'animal_shapes': { nameEn: 'Animal Shapes', nameZh: '动物形态', level: { druid: 8 }, school: 'transmutation' },
  'summon_natures_ally_ix': { nameEn: 'Summon Nature\'s Ally IX', nameZh: '召唤自然盟友IX', level: { druid: 9 }, school: 'conjuration' },
  
  // 混乱领域法术
  'protect_from_law': { nameEn: 'Protection from Law', nameZh: '防护律序', level: { cleric: 1 }, school: 'abjuration' },
  'magic_circle_against_law': { nameEn: 'Magic Circle against Law', nameZh: '魔法环反律序', level: { cleric: 3 }, school: 'abjuration' },
  'chaos_hammer': { nameEn: 'Chaos Hammer', nameZh: '混乱锤', level: { cleric: 4 }, school: 'evocation' },
  'power_word_chaos': { nameEn: 'Power Word Chaos', nameZh: '力令混乱', level: { cleric: 5 }, school: 'enchantment' },
  'cloak_of_chaos': { nameEn: 'Cloak of Chaos', nameZh: '混乱之斗篷', level: { cleric: 8 }, school: 'abjuration' },
  'summon_monster_9_chaos': { nameEn: 'Summon Monster IX (Chaos)', nameZh: '召唤怪物IX（混乱）', level: { cleric: 9 }, school: 'conjuration' },
  
  // 死亡领域法术
  'death_knell': { nameEn: 'Death Knell', nameZh: '死亡丧钟', level: { cleric: 2 }, school: 'necromancy' },
  'inflict_light_wounds': { nameEn: 'Inflict Light Wounds', nameZh: '造成轻伤', level: { cleric: 1 }, school: 'necromancy' },
  'inflict_critical_wounds': { nameEn: 'Inflict Critical Wounds', nameZh: '造成严重伤害', level: { cleric: 4 }, school: 'necromancy' },
  'clone': { nameEn: 'Clone', nameZh: '克隆', level: { wizard: 8, sorcerer: 8 }, school: 'necromancy' },
  
  // 破坏领域法术
  'shatter': { nameEn: 'Shatter', nameZh: '粉碎术', level: { cleric: 2, wizard: 2, sorcerer: 2 }, school: 'evocation' },
  
  // 土领域法术
  'magic_stone': { nameEn: 'Magic Stone', nameZh: '魔法石', level: { cleric: 1, druid: 1 }, school: 'transmutation' },
  'soften_earth_and_stone': { nameEn: 'Soften Earth and Stone', nameZh: '软化土石', level: { druid: 2 }, school: 'transmutation' },
  'stone_shape': { nameEn: 'Stone Shape', nameZh: '塑石术', level: { cleric: 3, wizard: 3, sorcerer: 3 }, school: 'transmutation' },
  'spike_stones': { nameEn: 'Spike Stones', nameZh: '尖刺石', level: { druid: 4 }, school: 'transmutation' },
  'wall_of_stone': { nameEn: 'Wall of Stone', nameZh: '石墙术', level: { cleric: 5, wizard: 5, sorcerer: 5 }, school: 'conjuration' },
  'flesh_to_stone': { nameEn: 'Flesh to Stone', nameZh: '血肉石化', level: { cleric: 6, wizard: 6, sorcerer: 6 }, school: 'transmutation' },
  'iron_body': { nameEn: 'Iron Body', nameZh: '铁身术', level: { wizard: 8, sorcerer: 8 }, school: 'transmutation' },
  
  // 水领域法术
  'obscuring_mist': { nameEn: 'Obscuring Mist', nameZh: '云雾术', level: { druid: 1 }, school: 'conjuration' },
  'water_breathing': { nameEn: 'Water Breathing', nameZh: '水中呼吸', level: { cleric: 3, druid: 3, wizard: 3, sorcerer: 3 }, school: 'transmutation' },
  'control_water': { nameEn: 'Control Water', nameZh: '控制水', level: { cleric: 4, druid: 4 }, school: 'transmutation' },
  'ice_storm': { nameEn: 'Ice Storm', nameZh: '冰风暴', level: { druid: 4, wizard: 4, sorcerer: 4 }, school: 'evocation' },
  'acid_fog': { nameEn: 'Acid Fog', nameZh: '酸雾', level: { wizard: 6, sorcerer: 6 }, school: 'conjuration' },
  'vortex': { nameEn: 'Vortex', nameZh: '漩涡', level: { cleric: 7, druid: 7 }, school: 'evocation' },
  'energy_flood_cold': { nameEn: 'Energy Flood (Cold)', nameZh: '能量洪流（寒冷）', level: { wizard: 9, sorcerer: 9 }, school: 'evocation' },
};

// 生成完整的法术数据
for (const missing of missingSpells) {
    const id = missing.id;
    const domains = missing.domains;
    
    // 检查是否有模板数据
    if (spellTemplates[id]) {
        const template = spellTemplates[id];
        newSpellsData.push({
            id: id,
            nameEn: template.nameEn,
            nameZh: template.nameZh,
            level: template.level,
            school: template.school,
            components: { verbal: true, somatic: true, material: false },
            castingTime: '标准动作',
            range: '近距 (25尺+5尺/2等级)',
            target: '见法术描述',
            duration: '见法术描述',
            savingThrow: '见法术描述',
            spellResist: true,
            desc: `【${domains.join('、')}领域】这是一个${template.school}法术。需要补充完整的法术描述。`
        });
    } else {
        // 对于没有模板的法术，创建占位符
        newSpellsData.push({
            id: id,
            nameEn: id.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            nameZh: `【待补充】${id}`,
            level: { cleric: 1 },
            school: 'universal',
            components: { verbal: true, somatic: true, material: false },
            castingTime: '标准动作',
            range: '近距 (25尺+5尺/2等级)',
            target: '见法术描述',
            duration: '见法术描述',
            savingThrow: '无',
            spellResist: false,
            desc: `【${domains.join('、')}领域】此乃占位符法术，需要补充完整数据。法术ID: ${id}`
        });
    }
}

console.log(`已准备 ${newSpellsData.length} 个新法术的数据`);

// 保存到文件供检查
fs.writeFileSync('new-spells-data.json', JSON.stringify(newSpellsData, null, 2), 'utf8');
console.log('已保存新法术数据到 new-spells-data.json');
console.log('\n注意：这些法术数据是不完整的占位符。');
console.log('需要替换为来自D&D 3.5e SRD的完整、准确的法术数据。');
