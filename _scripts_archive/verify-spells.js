// 检查 spells-data.js 的法术总数和语法
const fs = require('fs');
const content = fs.readFileSync('js/spells-data.js', 'utf8');

// 语法检查
try {
  new Function(content);
  console.log('✅ spells-data.js 语法检查通过');
} catch (e) {
  console.log('❌ 语法错误:', e.message);
  process.exit(1);
}

// 计数法术
// 方法1：解析数组
const func = new Function(content + '; return SPELLS;');
const SPELLS = func();
console.log(`法术总数: ${SPELLS.length}`);

// 列出所有法术ID（用于验证）
const ids = SPELLS.map(s => s.id);
console.log('\n前10个ID:', ids.slice(0, 10).join(', '));
console.log('后10个ID:', ids.slice(-10).join(', '));

// 检查是否有重复ID
const dupes = ids.filter((id, index) => ids.indexOf(id) !== index);
if (dupes.length > 0) {
  console.log('\n⚠️ 发现重复ID:', dupes.join(', '));
} else {
  console.log('\n✅ 无重复ID');
}

// 检查新增的领域法术是否都在
const domainSpells = require('./js/spells-domains.js');
const domainIds = Object.keys(domainSpells.SPELL_DOMAINS || {});
console.log('\n领域映射中的法术数:', domainIds.length);

const missing = domainIds.filter(id => !ids.includes(id));
if (missing.length > 0) {
  console.log('⚠️ 仍在缺失的法术:', missing.length, '个');
  missing.forEach(id => console.log('  -', id));
} else {
  console.log('✅ 所有领域法术都已存在于 spells-data.js！');
}
