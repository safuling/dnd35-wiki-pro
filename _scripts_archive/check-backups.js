const fs = require('fs');
const paths = [
  'js/spells-data.js.bak',
  'js/spells-data.js.bak2',
  'js/spells-data.js.bak3',
  'js/spells-data.js'
];

paths.forEach(p => {
  if (!fs.existsSync(p)) {
    console.log(p, ': 不存在');
    return;
  }
  try {
    const content = fs.readFileSync(p, 'utf8');
    const SPELLS = new Function(content + '; return SPELLS;')();
    console.log(p, ': ', SPELLS.length, '个法术');
  } catch (e) {
    console.log(p, ': 解析失败 -', e.message.slice(0, 100));
  }
});
