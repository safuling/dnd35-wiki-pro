// 正确解析spells-data.js来找出缺失的法术
const fs = require('fs');

// 读取并解析spells-data.js
const spellsContent = fs.readFileSync('js/spells-data.js', 'utf8');

// 使用Function构造函数来正确解析JS文件
let SPELLS;
try {
  const func = new Function(spellsContent + '\nreturn SPELLS;');
  SPELLS = func();
  console.log(`成功解析，找到 ${SPELLS.length} 个法术`);
} catch (e) {
  console.error('解析错误:', e.message);
  process.exit(1);
}

// 提取现有法术ID
const existingIds = new Set(SPELLS.map(s => s.id));
console.log(`现有法术ID数量: ${existingIds.size}`);

// 读取spells-domains.js并提取领域映射的法术ID
const domainsContent = fs.readFileSync('js/spells-domains.js', 'utf8');

// 提取SPELL_DOMAINS对象
let SPELL_DOMAINS;
try {
  const func2 = new Function(domainsContent + '\nreturn SPELL_DOMAINS;');
  SPELL_DOMAINS = func2();
  console.log(`领域映射数量: ${Object.keys(SPELL_DOMAINS).length}`);
} catch (e) {
  console.error('解析领域文件错误:', e.message);
  process.exit(1);
}

// 找出缺失的法术
const missingSpells = [];
Object.keys(SPELL_DOMAINS).forEach(id => {
  if (!existingIds.has(id)) {
    missingSpells.push(id);
  }
});

console.log(`\n缺失的法术数量: ${missingSpells.length}`);

if (missingSpells.length > 0) {
  console.log('\n缺失的法术ID:');
  missingSpells.forEach((id, i) => {
    const domains = SPELL_DOMAINS[id];
    console.log(`${i + 1}. ${id} [${domains.join(', ')}]`);
  });
  
  // 按领域统计
  const missingByDomain = {};
  missingSpells.forEach(id => {
    const domains = SPELL_DOMAINS[id];
    domains.forEach(domain => {
      if (!missingByDomain[domain]) {
        missingByDomain[domain] = [];
      }
      missingByDomain[domain].push(id);
    });
  });
  
  console.log('\n\n按领域统计缺失法术:');
  Object.entries(missingByDomain).sort((a, b) => b[1].length - a[1].length).forEach(([domain, spells]) => {
    console.log(`${domain}: ${spells.length}个`);
  });
}
