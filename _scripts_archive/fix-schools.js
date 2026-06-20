const fs = require('fs');

// 读取法术数据
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
let spells = fn();

// 学派映射表（英文 → 中文）
const SCHOOL_MAP = {
  // 标准英文 → 中文
  'Abjuration': '防护系',
  'Conjuration': '咒法系',
  'Divination': '预言系',
  'Enchantment': '惑控系',
  'Evocation': '塑能系',
  'Illusion': '幻术系',
  'Necromancy': '死灵系',
  'Transmutation': '变化系',
  'Universal': '通用系',

  // 大小写变体
  'abjuration': '防护系',
  'conjuration': '咒法系',
  'divination': '预言系',
  'enchantment': '惑控系',
  'evocation': '塑能系',
  'illusion': '幻术系',
  'necromancy': '死灵系',
  'transmutation': '变化系',
  'universal': '通用系',

  // 拼写错误
  'Conjuration': '咒法系',
  'Enchantment': '惑控系',
  'Illusion': '幻术系',

  // 特殊值
  'Conjuration (Healing)': '咒法系（治疗）',
  'universalist': '通用系',
  'illusory': '幻术系'
};

// 统计
let updated = 0;
let unchanged = 0;
let unknown = 0;

// 更新school字段
spells = spells.map(s => {
  if (!s.school) {
    unknown++;
    return s;
  }

  // 如果已经是中文，保留
  if (/[\u4e00-\u9fa5]/.test(s.school)) {
    unchanged++;
    return s;
  }

  // 如果是英文，映射为中文
  if (SCHOOL_MAP[s.school]) {
    s.school = SCHOOL_MAP[s.school];
    updated++;
  } else {
    console.log(`⚠️  未知的school值: "${s.school}" (法术: ${s.nameEn || s.nameZh || s.id})`);
    unknown++;
  }

  return s;
});

console.log('\n=== 更新统计 ===');
console.log(`更新: ${updated}个`);
console.log(`未变: ${unchanged}个`);
console.log(`未知: ${unknown}个`);

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('\n✅ 已更新 js/spells-data.js');
console.log(`\n新的school分布:`);

const newSchools = {};
spells.forEach(s => {
  const sch = s.school || '未知';
  if (!newSchools[sch]) newSchools[sch] = 0;
  newSchools[sch]++;
});

Object.keys(newSchools).sort().forEach(sch => {
  console.log(`  - ${sch}: ${newSchools[sch]}个`);
});
