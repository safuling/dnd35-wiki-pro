// 找出领域映射中缺失的法术
const fs = require('fs');

// 读取文件
const spellsContent = fs.readFileSync('js/spells-data.js', 'utf8');
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 提取现有法术ID
const spellIdRegex = /id:\s*['"]([^'"]+)['"]/g;
const existingIds = new Set();
let match;
while ((match = spellIdRegex.exec(spellsContent)) !== null) {
  existingIds.add(match[1]);
}

console.log(`现有法术数量: ${existingIds.size}`);

// 提取领域映射中的法术ID
const domainsRegex = /'([^']+)':\s*\[/g;
const domainSpellIds = new Set();
let match2;
while ((match2 = domainsRegex.exec(domainsContent)) !== null) {
  domainSpellIds.add(match2[1]);
}

console.log(`领域映射中的法术数量: ${domainSpellIds.size}`);

// 找出缺失的法术
const missingSpells = [];
domainSpellIds.forEach(id => {
  if (!existingIds.has(id)) {
    missingSpells.push(id);
  }
});

console.log(`\n缺失的法术数量: ${missingSpells.length}`);
console.log('\n缺失的法术ID:');
missingSpells.forEach((id, i) => {
  console.log(`${i + 1}. ${id}`);
});

// 按领域分组显示
const domainsSection = domainsContent.match(/const SPELL_DOMAINS = \{([\s\S]*?)\};\s*const/);
if (domainsSection) {
  console.log('\n\n按领域分组的缺失法术:');
  const lines = domainsSection[1].split('\n');
  const missingByDomain = {};
  
  lines.forEach(line => {
    const idMatch = line.match(/'([^']+)':\s*\[([^\]]+)\]/);
    if (idMatch) {
      const id = idMatch[1];
      const domains = idMatch[2].match(/'([^']+)'/g).map(d => d.replace(/'/g, ''));
      
      if (missingSpells.includes(id)) {
        domains.forEach(domain => {
          if (!missingByDomain[domain]) {
            missingByDomain[domain] = [];
          }
          missingByDomain[domain].push(id);
        });
      }
    }
  });
  
  Object.entries(missingByDomain).forEach(([domain, spells]) => {
    console.log(`\n${domain}领域 (${spells.length}个):`);
    spells.forEach(id => console.log(`  - ${id}`));
  });
}
