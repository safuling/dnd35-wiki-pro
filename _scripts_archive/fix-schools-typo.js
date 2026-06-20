const fs = require('fs');

// 读取法术数据
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
let spells = fn();

// 需要修正的school值
const CORRECTIONS = {
  '咒法学': '咒法系',
  '通用': '通用系',
  '召唤系': '咒法系'  // 召唤是咒法系的子学派
};

// 统计
let corrected = 0;

// 修正school字段
spells = spells.map(s => {
  if (s.school && CORRECTIONS[s.school]) {
    s.school = CORRECTIONS[s.school];
    corrected++;
  }
  return s;
});

console.log(`✅ 已修正 ${corrected} 个法术的school字段`);

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('\n=== 修正后的school分布 ===');
const newSchools = {};
spells.forEach(s => {
  const sch = s.school || '未知';
  if (!newSchools[sch]) newSchools[sch] = 0;
  newSchools[sch]++;
});

Object.keys(newSchools).sort().forEach(sch => {
  console.log(`  - ${sch}: ${newSchools[sch]}个`);
});
