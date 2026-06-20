// 正确验证 spells-data.js
const fs = require('fs');
const content = fs.readFileSync('js/spells-data.js', 'utf8');

// 方法1：语法解析获取数组
try {
  const func = new Function(content + '\nreturn SPELLS;');
  const SPELLS = func();
  console.log('✅ 语法解析成功');
  console.log('法术总数 (数组长度):', SPELLS.length);
  
  // 收集所有ID
  const ids = SPELLS.map(s => s.id);
  const uniqueIds = new Set(ids);
  console.log('唯一ID数:', uniqueIds.size);
  console.log('重复条目数:', ids.length - uniqueIds.size);
  
  if (ids.length > uniqueIds.size) {
    const seen = new Set();
    const dupes = [];
    SPELLS.forEach((s, i) => {
      if (seen.has(s.id)) {
        dupes.push(`${i}: ${s.id}`);
      } else {
        seen.add(s.id);
      }
    });
    console.log('\n重复条目（索引: ID）:');
    dupes.slice(0, 10).forEach(d => console.log(' ', d));
    if (dupes.length > 10) console.log(`  ... 及 ${dupes.length - 10} 更多`);
  } else {
    console.log('✅ 无重复ID');
  }
  
  // 列出最后10个法术
  console.log('\n最后10个法术:');
  SPELLS.slice(-10).forEach(s => {
    console.log(`  ${s.id}: ${s.nameZh} (${s.nameEn})`);
  });
  
} catch (e) {
  console.log('❌ 解析失败:', e.message);
}
