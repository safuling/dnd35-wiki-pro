// Extract class and domain info from spells data
const fs = require('fs');
const content = fs.readFileSync('js/spells-data.js', 'utf8');

// Use Function constructor to evaluate in a scope where we can access SPELLS
const fn = new Function(content + '; return SPELLS;');
const SPELLS = fn();

// Extract all class names
const classes = new Set();
SPELLS.forEach(s => {
  if (s.classes) {
    Object.keys(s.classes).forEach(c => classes.add(c));
  }
});

console.log('=== 所有职业 ===');
console.log([...classes].sort().join(', '));

// Check if any spell has domain info
const withDomain = SPELLS.filter(s => s.domain || s.domains);
console.log('\n=== 有领域数据的法术数量 ===');
console.log(withDomain.length);

// Show sample class mappings
console.log('\n=== 示例：法师可用的法术（前5个）===');
const wizardSpells = SPELLS.filter(s => s.classes && s.classes.wizard !== undefined);
console.log(`法师共有 ${wizardSpells.length} 个法术`);
wizardSpells.slice(0, 5).forEach(s => {
  console.log(`  ${s.nameZh} (${s.nameEn}) - 环级: ${s.classes.wizard}`);
});

// Count spells per class
console.log('\n=== 每个职业的法术数量 ===');
const classCounts = {};
classes.forEach(c => {
  classCounts[c] = SPELLS.filter(s => s.classes && s.classes[c] !== undefined).length;
});
Object.entries(classCounts).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => {
  console.log(`  ${c}: ${n} 个法术`);
});

console.log('\n=== 总法术数 ===');
console.log(SPELLS.length);
