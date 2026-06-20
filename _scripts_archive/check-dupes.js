const fs = require('fs');
const content = fs.readFileSync('js/spells-data.js', 'utf8');

// 提取所有 id
const idRegex = /id\s*:\s*"([^"]+)"/g;
const ids = [];
let m;
while ((m = idRegex.exec(content)) !== null) ids.push(m[1]);

console.log('文件中找到的ID总数:', ids.length);
const unique = new Set(ids);
console.log('唯一ID数:', unique.size);
console.log('重复条目数:', ids.length - unique.size);

if (ids.length > unique.size) {
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  const uniqueDupes = [...new Set(dupes)];
  console.log('\n重复ID列表（共', uniqueDupes.length, '个）:');
  uniqueDupes.forEach(id => {
    const indices = ids.reduce((acc, val, idx) => {
      if (val === id) acc.push(idx + 1);
      return acc;
    }, []);
    console.log('  -', id, '出现在行:', indices.join(', '));
  });
}
