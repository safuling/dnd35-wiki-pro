const fs = require('fs');
const content = fs.readFileSync('js/spells-data.js', 'utf8');

// 使用更简单的方法提取ID
const idMatches = content.match(/id:\s*['"][^'"]+['"]/g);
console.log('法术ID数量:', idMatches ? idMatches.length : 0);

//  also check if the file has valid JS syntax
try {
    const fn = new Function(content + '; return SPELLS;');
    const spells = fn();
    console.log('实际法术数量 (通过解析):', spells.length);
} catch (e) {
    console.error('解析错误:', e.message);
}
