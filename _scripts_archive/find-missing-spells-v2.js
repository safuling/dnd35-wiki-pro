const fs = require('fs');

// 读取领域映射
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 使用Node.js vm模块来安全地执行代码并提取变量
const vm = require('vm');

// 创建一个上下文来捕获 SPELL_DOMAINS
const context = { SPELL_DOMAINS: null };
vm.createContext(context);

// 执行代码
try {
    vm.runInContext(domainsContent, context);
} catch (e) {
    console.error('执行 spells-domains.js 失败:', e.message);
    process.exit(1);
}

const spellDomains = context.SPELL_DOMAINS;

if (!spellDomains) {
    console.error('无法提取 SPELL_DOMAINS');
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
    console.log('\n缺失的法术:');
    missingSpells.forEach(s => {
        console.log(`  ${s.id} -> ${s.domains.join(', ')}`);
    });
    
    // 保存缺失法术列表
    fs.writeFileSync('missing-spells.json', JSON.stringify(missingSpells, null, 2), 'utf8');
    console.log('\n已保存缺失法术列表到 missing-spells.json');
} else {
    console.log('\n所有领域法术都已存在于 spells-data.js 中！');
}
