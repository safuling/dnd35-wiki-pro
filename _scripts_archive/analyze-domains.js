const fs = require('fs');

// 读取领域映射文件
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 提取 SPELL_DOMAINS 对象
const vm = require('vm');
const context = { SPELL_DOMAINS: null };
vm.createContext(context);

try {
    vm.runInContext(domainsContent, context);
} catch (e) {
    console.error('执行失败:', e.message);
    process.exit(1);
}

const spellDomains = context.SPELL_DOMAINS;

if (!spellDomains) {
    console.error('无法提取 SPELL_DOMAINS');
    process.exit(1);
}

// 统计每个领域的法术数量
const domainCounts = {};
for (const [spellId, domains] of Object.entries(spellDomains)) {
    for (const domain of domains) {
        if (!domainCounts[domain]) {
            domainCounts[domain] = 0;
        }
        domainCounts[domain]++;
    }
}

console.log('每个领域的法术映射数量:');
const sortedDomains = Object.keys(domainCounts).sort();
for (const domain of sortedDomains) {
    console.log(`  ${domain}: ${domainCounts[domain]} 个法术`);
}

console.log(`\n总映射数: ${Object.keys(spellDomains).length}`);
console.log('总领域数:', sortedDomains.length);

// 理论上，每个领域应该有多个法术（通常1-9级各一个）
// 让我们输出建议：哪些领域可能需要更多法术
console.log('\n--- 领域法术映射分析 ---');
console.log('在D&D 3.5e中，每个领域通常授予9个领域法术（1-9级各一个）');
console.log('当前映射数量较少的领域可能需要补充更多法术。');
