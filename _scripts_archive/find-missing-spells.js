const fs = require('fs');

// 读取领域映射
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 提取 SPELL_DOMAINS 对象
const match = domainsContent.match(/const SPELL_DOMAINS = ({[\s\S]*});/);
if (!match) {
    console.error('无法解析 spells-domains.js');
    process.exit(1);
}

let spellDomains;
try {
    spellDomains = eval(match[1]);
} catch (e) {
    console.error('解析 SPELL_DOMAINS 失败:', e.message);
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

const existingIds = new Set(existingSpells.map(s => s.id));
console.log(`现有法术数量: ${existingSpells.length}`);
console.log(`现有唯一ID数量: ${existingIds.size}`);

// 找出缺失的法术
const missingSpells = [];
for (const [spellId, domains] of Object.entries(spellDomains)) {
    if (!existingIds.has(spellId)) {
        missingSpells.push({ id: spellId, domains: domains });
    }
}

console.log(`缺失的法术数量: ${missingSpells.length}`);
console.log('\n缺失的法术:');
missingSpells.forEach(s => {
    console.log(`  ${s.id} -> ${s.domains.join(', ')}`);
});

// 保存缺失法术列表
fs.writeFileSync('missing-spells.json', JSON.stringify(missingSpells, null, 2), 'utf8');
console.log('\n已保存缺失法术列表到 missing-spells.json');
