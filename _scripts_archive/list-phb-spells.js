const fs = require('fs');

// 读取法术数据
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 筛选PHB法术
const phb = spells.filter(s => s.source === 'PHB');

console.log(`=== PHB法术列表（共 ${phb.length} 个）===\n`);

// 按名称排序（使用nameEn或nameZh）
phb.sort((a, b) => {
  const nameA = a.nameEn || a.nameZh || '';
  const nameB = b.nameEn || b.nameZh || '';
  return nameA.localeCompare(nameB);
});

// 输出
phb.forEach((s, i) => {
  const levelText = s.level + '级';
  const schoolText = s.school ? `, ${s.school}` : '';
  const name = s.nameEn || s.nameZh || '未知';
  console.log(`${i+1}. ${name} (${levelText}${schoolText})`);
});

// 按等级分类统计
console.log(`\n=== 按等级分类 ===`);
const byLevel = {};
phb.forEach(s => {
  const level = s.level;
  if (!byLevel[level]) byLevel[level] = [];
  byLevel[level].push(s.name);
});

Object.keys(byLevel).sort((a, b) => a - b).forEach(level => {
  console.log(`\n${level}级: ${byLevel[level].length}个`);
  byLevel[level].sort((a, b) => a.localeCompare(b.name)).forEach(name => {
    console.log(`  - ${name}`);
  });
});

// 保存到文件
const output = phb.map(s => s.name).join('\n');
fs.writeFileSync('phb-spells-list.txt', output, 'utf8');
console.log(`\nPHB法术列表已保存到 phb-spells-list.txt`);
