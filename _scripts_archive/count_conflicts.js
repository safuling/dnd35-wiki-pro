// 统计有conflicts的法术数量
const fs = require('fs');
const FILE = 'C:/Users/wyb/WorkBuddy/2026-06-20-01-52-30/dnd35-wiki-pro/js/spells-data.js';
let content = fs.readFileSync(FILE, 'utf8');

// 用正则提取所有法术id
const idPattern1 = /id:"([^"]+)"/g;
const idPattern2 = /"id": "([^"]+)"/g;

let ids = [];
let match;

while ((match = idPattern1.exec(content)) !== null) {
    ids.push(match[1]);
}
while ((match = idPattern2.exec(content)) !== null) {
    ids.push(match[1]);
}

console.log(`Total spell ids found: ${ids.length}`);

// 检查每个id是否有conflicts
let count = 0;
for (const id of ids) {
    const idx = content.indexOf(`"${id}"`);
    if (idx === -1) continue;
    const chunk = content.substring(idx, idx + 2000);
    if (chunk.includes('conflicts')) {
        count++;
    }
}

console.log(`Total spells with conflicts: ${count}`);
console.log(`Percentage: ${(count / ids.length * 100).toFixed(1)}%`);
