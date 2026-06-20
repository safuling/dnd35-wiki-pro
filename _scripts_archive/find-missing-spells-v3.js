const fs = require('fs');

// 读取领域映射文件
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 手动提取 SPELL_DOMAINS 对象
// 找到 const SPELL_DOMAINS = { 的开始位置
const startIndex = domainsContent.indexOf('const SPELL_DOMAINS = {');
if (startIndex === -1) {
    console.error('无法找到 SPELL_DOMAINS 定义');
    process.exit(1);
}

// 从 startIndex 开始，找到匹配的大括号结束位置
let braceCount = 0;
let endIndex = -1;
let inString = false;
let stringChar = null;

for (let i = startIndex + 'const SPELL_DOMAINS = '.length; i < domainsContent.length; i++) {
    const char = domainsContent[i];
    
    if (inString) {
        if (char === stringChar && domainsContent[i-1] !== '\\') {
            inString = false;
        }
        continue;
    }
    
    if (char === '"' || char === "'") {
        inString = true;
        stringChar = char;
        continue;
    }
    
    if (char === '{') {
        braceCount++;
    } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
            endIndex = i + 1;
            break;
        }
    }
}

if (endIndex === -1) {
    console.error('无法找到 SPELL_DOMAINS 对象的结束位置');
    process.exit(1);
}

const objectStr = domainsContent.substring(startIndex + 'const SPELL_DOMAINS = '.length, endIndex);
console.log('提取的对象字符串长度:', objectStr.length);

// 尝试解析这个对象
let spellDomains;
try {
    spellDomains = eval('(' + objectStr + ')');
} catch (e) {
    console.error('解析对象失败:', e.message);
    process.exit(1);
}

console.log(`领域映射数量: ${Object.keys(spellDomains).length}`);

// 读取现有法术
const spellsContent = fs.readFileSync('js/spells-data.js', 'utf8');
let existingSpells;
try {
    const fn = new Function(spellsContent + '; return SPELLS;');
    existingSpells = fn();
} catch (e) {
    console.error('无法解析 spells-data.js:', e.message);
    process.exit(1);
}

const existingIds = new Set(existingSpells.map(s => s.id).filter(id => id)); // 过滤掉undefined
console.log(`现有法术数量: ${existingSpells.length}`);
console.log(`现有有效ID数量: ${existingIds.size}`);

// 找出缺失的法术
const missingSpells = [];
for (const [spellId, domains] of Object.entries(spellDomains)) {
    if (!existingIds.has(spellId)) {
        missingSpells.push({ id: spellId, domains: domains });
    }
}

console.log(`缺失的法术数量: ${missingSpells.length}`);

if (missingSpells.length > 0) {
    console.log('\n前20个缺失的法术:');
    missingSpells.slice(0, 20).forEach(s => {
        console.log(`  ${s.id} -> ${s.domains.join(', ')}`);
    });
    
    // 保存缺失法术列表
    fs.writeFileSync('missing-spells.json', JSON.stringify(missingSpells, null, 2), 'utf8');
    console.log(`\n已保存 ${missingSpells.length} 个缺失法术到 missing-spells.json`);
} else {
    console.log('\n所有领域法术都已存在于 spells-data.js 中！');
}
