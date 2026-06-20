const fs = require('fs');

// 读取法术数据
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 创建查找集合
const existingIds = new Set(spells.map(s => s.id.toLowerCase()));
const existingNamesEn = new Set(spells.map(s => (s.nameEn || '').toLowerCase()));
const existingNamesZh = new Set(spells.map(s => (s.nameZh || '').toLowerCase()));

// 常见的PHB法术（部分列表，用于验证）
const COMMON_PHB_SPELLS = [
  'Acid Splash', 'Burning Hands', 'Charm Person', 'Magic Missile', 'Shield',
  'Sleep', 'Invisibility', 'Fireball', 'Fly', 'Polymorph',
  'Cure Light Wounds', 'Bless', 'Command', 'Protection from Evil',
  'Hold Person', 'Fire Shield', 'Teleport', 'True Seeing',
  'Wish', 'Heal', 'Resurrection', 'Circle of Death',
  'Mage Armor', 'Charm Monster', 'Dispel Magic', 'Lightning Bolt',
  'Fear', 'Suggestion', 'Dominate Person', 'Summon Monster I',
  'Summon Monster II', 'Summon Monster III', 'Summon Monster IV',
  'Summon Monster V', 'Summon Monster VI', 'Summon Monster VII',
  'Summon Monster VIII', 'Summon Monster IX'
];

console.log('=== 常见PHB法术检查 ===\n');
console.log(`检查的PHB法术数量: ${COMMON_PHB_SPELLS.length}\n`);

const found = [];
const missing = [];

COMMON_PHB_SPELLS.forEach(name => {
  const nameLower = name.toLowerCase();
  const id = nameLower.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // 检查匹配
  if (existingIds.has(id) || existingNamesEn.has(nameLower) || existingNamesZh.has(nameLower)) {
    found.push(name);
  } else {
    missing.push(name);
  }
});

console.log(`✅ 已找到: ${found.length}个`);
console.log(`❌ 缺失: ${missing.length}个\n`);

if (found.length > 0) {
  console.log('=== 已找到的常见PHB法术 ===');
  found.forEach((name, i) => {
    console.log(`${i+1}. ${name}`);
  });
}

if (missing.length > 0) {
  console.log('\n=== 缺失的常见PHB法术 ===');
  missing.forEach((name, i) => {
    console.log(`${i+1}. ${name}`);
  });
}

// 统计
const phbCount = spells.filter(s => s.source === 'PHB').length;
const r3Count = spells.filter(s => s.source === '3R').length;

console.log('\n=== 统计 ===');
console.log(`总法术数: ${spells.length}`);
console.log(`PHB法术: ${phbCount}`);
console.log(`3R法术: ${r3Count}`);
console.log(`\n常见PHB法术完整度: ${found.length}/${COMMON_PHB_SPELLS.length} = ${(found.length/COMMON_PHB_SPELLS.length*100).toFixed(1)}%`);

if (missing.length === 0) {
  console.log('\n✅ 常见PHB法术全部存在！数据库可能比较完整。');
} else {
  console.log(`\n⚠️  缺失 ${missing.length} 个常见PHB法术，建议补充。`);
}
