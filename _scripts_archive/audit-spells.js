// 法术数据深度审计脚本
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// 读取 spells-data.js
const spellsDataContent = fs.readFileSync(path.join(projectRoot, 'js/spells-data.js'), 'utf8');
// 提取 SPELLS 数组
const spellsMatch = spellsDataContent.match(/const SPELLS = (\[[\s\S]*?\]);/);
if (!spellsMatch) { console.error('无法解析 SPELLS 数组'); process.exit(1); }
const spells = eval(spellsMatch[1]);

// 读取 global-search-data.js
const searchDataContent = fs.readFileSync(path.join(projectRoot, 'js/global-search-data.js'), 'utf8');
const searchSpellsMatch = searchDataContent.match(/spells:\s*(\[[\s\S]*?\])\s*,?\s*(?:\/\/|$|feats|skills|races|classes|monsters|equipment)/);
let searchSpells = [];
if (searchSpellsMatch) {
  searchSpells = eval(searchSpellsMatch[1]);
} else {
  // 尝试另一种解析
  const altMatch = searchDataContent.match(/spells:\s*(\[[\s\S]*?\])\s*,\s*\n\s*\w/);
  if (altMatch) searchSpells = eval(altMatch[1]);
}

console.log('===== 法术数据深度审计报告 =====\n');

// 1. 基本统计
console.log(`【1. 基本统计】`);
console.log(`spells-data.js 总条目: ${spells.length}`);
console.log(`global-search-data.js 法术条目: ${searchSpells.length}`);

// 按等级统计
const levelCounts = {};
spells.forEach(s => { levelCounts[s.level] = (levelCounts[s.level] || 0) + 1; });
console.log(`\n按环级分布:`);
for (let i = 0; i <= 9; i++) {
  console.log(`  ${i}环: ${levelCounts[i] || 0} 条`);
}

// 按学派统计
const schoolCounts = {};
spells.forEach(s => { schoolCounts[s.school] = (schoolCounts[s.school] || 0) + 1; });
console.log(`\n按学派分布:`);
Object.entries(schoolCounts).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

// 按来源统计
const sourceCounts = {};
spells.forEach(s => { sourceCounts[s.source] = (sourceCounts[s.source] || 0) + 1; });
console.log(`\n按来源:`);
Object.entries(sourceCounts).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

// 2. 重复检测
console.log(`\n【2. 重复检测】`);

// 2a. ID 重复
const idMap = {};
spells.forEach((s, i) => {
  if (!idMap[s.id]) idMap[s.id] = [];
  idMap[s.id].push(i);
});
const dupIds = Object.entries(idMap).filter(([_, indices]) => indices.length > 1);
console.log(`\nID 重复 (${dupIds.length} 组):`);
dupIds.forEach(([id, indices]) => {
  console.log(`  "${id}" 出现在索引 ${indices.join(', ')}`);
  indices.forEach(idx => {
    const s = spells[idx];
    console.log(`    → ${s.nameZh} (${s.nameEn}), ${s.level}环, ${s.school}`);
  });
});

// 2b. 中文名重复
const nameZhMap = {};
spells.forEach((s, i) => {
  if (!nameZhMap[s.nameZh]) nameZhMap[s.nameZh] = [];
  nameZhMap[s.nameZh].push(i);
});
const dupNameZh = Object.entries(nameZhMap).filter(([_, indices]) => indices.length > 1);
console.log(`\n中文名重复 (${dupNameZh.length} 组):`);
dupNameZh.forEach(([name, indices]) => {
  console.log(`  "${name}" 出现 ${indices.length} 次:`);
  indices.forEach(idx => {
    const s = spells[idx];
    console.log(`    → id="${s.id}", ${s.nameEn}, ${s.level}环, ${s.school}, ${s.source}`);
  });
});

// 2c. 英文名重复（忽略大小写）
const nameEnMap = {};
spells.forEach((s, i) => {
  const key = s.nameEn.toLowerCase().trim();
  if (!nameEnMap[key]) nameEnMap[key] = [];
  nameEnMap[key].push(i);
});
const dupNameEn = Object.entries(nameEnMap).filter(([_, indices]) => indices.length > 1);
console.log(`\n英文名重复 (${dupNameEn.length} 组):`);
dupNameEn.forEach(([name, indices]) => {
  console.log(`  "${name}" 出现 ${indices.length} 次:`);
  indices.forEach(idx => {
    const s = spells[idx];
    console.log(`    → id="${s.id}", 中文名="${s.nameZh}", ${s.level}环, ${s.school}`);
  });
});

// 3. 数据质量问题
console.log(`\n【3. 数据质量问题】`);

// ID 含连字符
const hyphenIds = spells.filter(s => s.id && s.id.includes('-'));
console.log(`\nID 含连字符 (${hyphenIds.length}):`);
hyphenIds.forEach(s => console.log(`  "${s.id}" → ${s.nameZh}`));

// 空描述
const emptyDesc = spells.filter(s => !s.desc || s.desc.trim() === '');
console.log(`\n空描述 (${emptyDesc.length}):`);
emptyDesc.forEach(s => console.log(`  "${s.id}" → ${s.nameZh}`));

// 缺少来源
const noSource = spells.filter(s => !s.source);
console.log(`\n缺少来源 (${noSource.length}):`);
noSource.forEach(s => console.log(`  "${s.id}" → ${s.nameZh}`));

// 拼写检查 - 常见错误
console.log(`\n拼写检查:`);
spells.forEach(s => {
  if (s.id && (s.id.includes('modarate') || s.id.includes('modrate'))) {
    console.log(`  ⚠ "${s.id}" 可能是 "moderate" 的拼写错误`);
  }
  if (s.nameEn && s.nameEn.toLowerCase().includes('modarate')) {
    console.log(`  ⚠ nameEn "${s.nameEn}" 可能是拼写错误`);
  }
});

// 4. global-search-data.js 同步检查
console.log(`\n【4. 搜索数据同步检查】`);

const spellIds = new Set(spells.map(s => s.id));
const searchIds = new Set(searchSpells.map(s => s.id));

const inSpellsNotSearch = [...spellIds].filter(id => !searchIds.has(id));
const inSearchNotSpells = [...searchIds].filter(id => !spellIds.has(id));

console.log(`在 spells-data.js 但不在 global-search-data.js 中 (${inSpellsNotSearch.length}):`);
inSpellsNotSearch.forEach(id => {
  const s = spells.find(x => x.id === id);
  console.log(`  "${id}" → ${s ? s.nameZh : '?'}`);
});

console.log(`\n在 global-search-data.js 但不在 spells-data.js 中 (${inSearchNotSpells.length}):`);
inSearchNotSpells.forEach(id => {
  const s = searchSpells.find(x => x.id === id);
  console.log(`  "${id}" → ${s ? s.nameZh : '?'}`);
});

// 5. 真实数量统计
const uniqueIds = new Set(spells.map(s => s.id));
const uniqueNamesZh = new Set(spells.map(s => s.nameZh));
const uniqueNamesEn = new Set(spells.map(s => s.nameEn.toLowerCase().trim()));

console.log(`\n【5. 真实统计】`);
console.log(`总条目: ${spells.length}`);
console.log(`唯一 ID: ${uniqueIds.size}`);
console.log(`唯一中文名: ${uniqueNamesZh.size}`);
console.log(`唯一英文名(不区分大小写): ${uniqueNamesEn.size}`);
console.log(`重复 ID 数量: ${spells.length - uniqueIds.size}`);
