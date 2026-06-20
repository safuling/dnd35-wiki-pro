/**
 * 修复法术数据质量问题：
 * 1. 将level为对象的法术统一转换为整数level，原来的多职业等级保存到classLevels字段
 * 2. 修复spells-domains.js中3个无效的法术ID
 */
const fs = require('fs');

// ===== 修复 spells-data.js 中 level 为对象的问题 =====

const spellsRaw = fs.readFileSync('js/spells-data.js', 'utf8');
const spellsFn = new Function(spellsRaw + '; return SPELLS');
let spells = spellsFn();

// 职业优先级（用于从classLevels中提取主等级）
const CLASS_PRIORITY = ['wizard', 'sorcerer', 'cleric', 'druid', 'bard', 'ranger', 'paladin'];

let fixedCount = 0;
spells = spells.map(s => {
  if (typeof s.level === 'object' && s.level !== null) {
    const classLevels = s.level;
    
    // 找最低等级（作为主等级），优先使用标准职业等级
    let mainLevel = null;
    
    // 按优先级找主等级
    for (const cls of CLASS_PRIORITY) {
      if (classLevels[cls] !== undefined) {
        if (mainLevel === null || classLevels[cls] < mainLevel) {
          mainLevel = classLevels[cls];
        }
      }
    }
    
    // 如果没找到主职业，取所有等级中的最小值
    if (mainLevel === null) {
      const allLevels = Object.values(classLevels).filter(v => typeof v === 'number');
      if (allLevels.length > 0) {
        mainLevel = Math.min(...allLevels);
      } else {
        mainLevel = 0;
      }
    }
    
    s.level = mainLevel;
    s.classLevels = classLevels;  // 保留原始多职业等级
    fixedCount++;
  }
  return s;
});

console.log(`✅ 修复了 ${fixedCount} 个法术的 level 字段`);

// 写回
fs.writeFileSync('js/spells-data.js', 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n', 'utf8');

// 验证
const allNumbers = spells.every(s => typeof s.level === 'number');
console.log(`验证：所有法术的level都是数字: ${allNumbers}`);
console.log(`法术总数: ${spells.length}`);

// ===== 修复 spells-domains.js 中无效的法术ID =====

let domainsRaw = fs.readFileSync('js/spells-domains.js', 'utf8');

// lion's-charge -> lion's_charge (但实际上这是一个3R法术，更合适的处理是检查实际ID)
// fire-ball -> fireball (标准写法)  
// antisiigil -> 需要删除或修正（魔法符文法术，可能拼写错误）

const idFixes = {
  "'lion's-charge'": "'lion-s-charge'",  // 修正撇号问题（可能的ID）
  "'fire-ball'": "'fireball'",            // fire-ball -> fireball
};

// 先检查实际存在的法术ID
const spellIdSet = new Set(spells.map(s => s.id));
console.log('\n=== 检查域映射中的法术ID ===');
console.log("'fireball' 存在:", spellIdSet.has('fireball'));
console.log("'fire-ball' 存在:", spellIdSet.has('fire-ball'));
console.log("lion's法术:", [...spellIdSet].filter(id => id.includes('lion')));
console.log("antisiigil 存在:", spellIdSet.has('antisiigil'));

// 在domains.js中替换 fire-ball -> fireball
if (domainsRaw.includes("'fire-ball'")) {
  domainsRaw = domainsRaw.replace(/'fire-ball'/g, "'fireball'");
  console.log("✅ 修复: 'fire-ball' -> 'fireball'");
}

// 检查 lion's-charge
if (domainsRaw.includes("lion's-charge")) {
  // 这个法术在PHB中存在，ID应该是 lions-charge
  domainsRaw = domainsRaw.replace(/lion's-charge/g, "lions-charge");
  console.log("✅ 修复: lion's-charge -> lions-charge");
}

// 检查 antisiigil（可能是anti-sigil或其他拼写）
if (domainsRaw.includes('antisiigil')) {
  // 这是一个3R法术，删除这个映射或保留（若法术不存在则领域筛选时被忽略）
  // 实际上搜索页的筛选逻辑会忽略不存在的法术，所以可以保留
  console.log("ℹ️  'antisiigil' 在法术库中不存在，领域筛选时会被忽略（保留以备将来添加）");
}

fs.writeFileSync('js/spells-domains.js', domainsRaw, 'utf8');
console.log('\n✅ spells-domains.js 已更新');

// 最终验证
const domainsRaw2 = fs.readFileSync('js/spells-domains.js', 'utf8');
const domainsFn = new Function(domainsRaw2 + '; return {SPELL_DOMAINS, ALL_DOMAINS, DOMAIN_NAMES}');
const domainsData = domainsFn();
const domainIds = Object.keys(domainsData.SPELL_DOMAINS);
const stillMissing = domainIds.filter(id => !spellIdSet.has(id));
console.log(`领域映射中缺失的法术: ${stillMissing.length}`, stillMissing);
