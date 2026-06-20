/**
 * 同步 global-search-data.js 的法术数据
 * 从 spells-data.js 重新生成搜索数据中的法术部分
 */
const fs = require('fs');
const path = require('path');

// 读取 spells-data.js
const spellsPath = path.resolve(__dirname, '..', 'js', 'spells-data.js');
const spellsContent = fs.readFileSync(spellsPath, 'utf8');

// 提取法术数据
eval(spellsContent.replace('const SPELLS', 'globalThis.SPELLS'));

console.log(`读取到 ${SPELLS.length} 条法术`);

// 获取法术的最低环级
function getSpellLevel(spell) {
  if (!spell.level) return 0;
  const levels = Object.values(spell.level).filter(v => typeof v === 'number');
  return levels.length > 0 ? Math.min(...levels) : 0;
}

// 获取法术的环级对应的URL
function getSpellUrl(level) {
  return `spells/level${level}.html`;
}

// 生成搜索数据条目
const searchEntries = SPELLS.map(spell => {
  const level = getSpellLevel(spell);
  return {
    id: spell.id,
    nameZh: spell.nameZh || spell.nameEn,
    nameEn: spell.nameEn || '',
    type: 'spell',
    level: level,
    school: spell.school || '',
    source: spell.source || 'PHB',
    url: getSpellUrl(level)
  };
});

console.log(`生成 ${searchEntries.length} 条搜索数据`);

// 读取 global-search-data.js
const searchPath = path.resolve(__dirname, '..', 'js', 'global-search-data.js');
const searchContent = fs.readFileSync(searchPath, 'utf8');
const lines = searchContent.split('\n');

// 找到 spells 部分的边界
let startLine = -1;
let endLine = -1;
let bracketDepth = 0;
let inSpells = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim().startsWith('spells:')) {
    startLine = i;
    inSpells = true;
    // 找到 [ 的位置
    const bracketPos = lines[i].indexOf('[');
    if (bracketPos >= 0) bracketDepth = 1;
    continue;
  }
  if (inSpells) {
    for (const ch of lines[i]) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }
    if (bracketDepth <= 0) {
      endLine = i;
      break;
    }
  }
}

if (startLine < 0 || endLine < 0) {
  console.error('无法找到 spells 部分的边界');
  process.exit(1);
}

console.log(`替换行 ${startLine + 1} 到 ${endLine + 1}`);

// 生成新的 spells 部分
const newSpellsSection = [
  '  spells: ['
];

for (const entry of searchEntries) {
  newSpellsSection.push('  {');
  newSpellsSection.push(`    "id": "${entry.id}",`);
  newSpellsSection.push(`    "nameZh": "${entry.nameZh}",`);
  newSpellsSection.push(`    "nameEn": "${entry.nameEn}",`);
  newSpellsSection.push(`    "type": "spell",`);
  newSpellsSection.push(`    "level": ${entry.level},`);
  newSpellsSection.push(`    "school": "${entry.school}",`);
  newSpellsSection.push(`    "source": "${entry.source}",`);
  newSpellsSection.push(`    "url": "${entry.url}"`);
  newSpellsSection.push('  },');
}

newSpellsSection.push('  ],');

// 组装新文件
const newLines = [
  ...lines.slice(0, startLine),
  ...newSpellsSection,
  ...lines.slice(endLine + 1)
];

// 更新生成时间
const result = newLines.join('\n')
  .replace(/生成时间：[\d-]+/, '生成时间：2026-06-21');

fs.writeFileSync(searchPath, result, 'utf8');
console.log(`✅ 已更新 global-search-data.js，法术部分从 462 条更新为 ${searchEntries.length} 条`);
