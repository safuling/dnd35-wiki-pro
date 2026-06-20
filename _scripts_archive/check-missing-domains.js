// 检查缺失的领域法术
const fs = require('fs');
const path = require('path');

console.log('=== 检查缺失的领域法术 ===\n');

// 读取spells-domains.js
const domainsPath = path.join(__dirname, 'js', 'spells-domains.js');
const domainsContent = fs.readFileSync(domainsPath, 'utf8');

// 提取SPELL_DOMAINS对象
const domainsMatch = domainsContent.match(/const SPELL_DOMAINS\s*=\s*({[\s\S]*?});/);
if (!domainsMatch) {
  console.error('❌ 无法解析SPELL_DOMAINS');
  process.exit(1);
}

let SPELL_DOMAINS;
try {
  eval('SPELL_DOMAINS = ' + domainsMatch[1]);
} catch (e) {
  console.error('❌ 解析SPELL_DOMAINS失败:', e.message);
  process.exit(1);
}

const domainSpellIds = Object.keys(SPELL_DOMAINS);
console.log(`📊 领域映射总数: ${domainSpellIds.length}`);

// 读取spells-data.js
const spellsPath = path.join(__dirname, 'js', 'spells-data.js');
const spellsContent = fs.readFileSync(spellsPath, 'utf8');

// 提取所有法术ID
const idMatches = spellsContent.match(/id:\s*['"]([^'"]+)['"]/g);
if (!idMatches) {
  console.error('❌ 无法解析法术ID');
  process.exit(1);
}

const existingIds = new Set();
idMatches.forEach(match => {
  const idMatch = match.match(/id:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    existingIds.add(idMatch[1]);
  }
});

console.log(`📊 现有法术总数: ${existingIds.size}`);

// 找出缺失的法术
const missingIds = domainSpellIds.filter(id => !existingIds.has(id));

console.log(`\n📋 缺失的法术: ${missingIds.length} 个\n`);

if (missingIds.length > 0) {
  // 按领域分组
  const missingByDomain = {};
  
  missingIds.forEach(id => {
    const domains = SPELL_DOMAINS[id];
    if (domains) {
      domains.forEach(domain => {
        if (!missingByDomain[domain]) {
          missingByDomain[domain] = [];
        }
        missingByDomain[domain].push(id);
      });
    }
  });
  
  console.log('按领域分组:');
  const sortedDomains = Object.keys(missingByDomain).sort();
  sortedDomains.forEach(domain => {
    console.log(`  ${domain}: ${missingByDomain[domain].length}个`);
  });
  
  console.log('\n=== 缺失法术列表 ===\n');
  
  missingIds.forEach((id, index) => {
    const domains = SPELL_DOMAINS[id] || [];
    console.log(`${index + 1}. ${id} [${domains.join(', ')}]`);
  });
  
  // 保存到文件
  const outputPath = path.join(__dirname, 'missing-domain-spells.txt');
  const outputContent = missingIds.map(id => {
    const domains = SPELL_DOMAINS[id] || [];
    return `${id}\t${domains.join(', ')}`;
  }).join('\n');
  
  fs.writeFileSync(outputPath, outputContent, 'utf8');
  console.log(`\n✅ 已保存缺失法术列表到: ${outputPath}`);
  
} else {
  console.log('✅ 所有领域法术都已存在！');
}

console.log('\n=== 检查完成 ===');
