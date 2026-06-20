// 法术数据二次修复脚本
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const spellsDataContent = fs.readFileSync(path.join(projectRoot, 'js/spells-data.js'), 'utf8');
const spellsMatch = spellsDataContent.match(/const SPELLS = (\[[\s\S]*?\]);/);
const spells = eval(spellsMatch[1]);

console.log(`读取 ${spells.length} 条法术\n`);

// ===== 1. 处理 stoneskin ID 冲突 =====
// PHB 标准: stoneskin 是 4 环法术
// "Stone Skin" 5环版本来自 3R 扩展，应改为不同 ID
const stoneskinIdx = spells.findIndex(s => s.id === 'stoneskin' && s.level === 5);
if (stoneskinIdx >= 0) {
  spells[stoneskinIdx].id = 'stone_skin_3r';  // 3R 扩展版本用不同 ID
  spells[stoneskinIdx].nameEn = 'Stone Skin (3R)';
  console.log(`✅ stoneskin 冲突修复: 5环版本改为 stone_skin_3r`);
}

// ===== 2. 处理 teleport-greater vs greater_teleport =====
// PHB: Greater Teleport 是 7 环咒法系法术
// 6环 "Teleport, Greater" 可能是错误环级
const tgIdx = spells.findIndex(s => s.id === 'teleport-greater');
const gtIdx = spells.findIndex(s => s.id === 'greater_teleport');
if (tgIdx >= 0 && gtIdx >= 0) {
  // 保留 7 环版本 (PHB 标准)，移除 6 环版本
  console.log(`✅ 移除重复: teleport-greater (6环) → 保留 greater_teleport (7环)`);
  spells.splice(tgIdx, 1);
}

// ===== 3. 将所有连字符 ID 转为下划线 =====
const hyphenFixes = [];
spells.forEach(s => {
  if (s.id && s.id.includes('-')) {
    const newId = s.id.replace(/-/g, '_');
    // 检查是否已有同 ID
    const existing = spells.find(x => x.id === newId && x !== s);
    if (existing) {
      // 有冲突：加后缀
      s.id = newId + '_alt';
      console.log(`⚠ ID 冲突: "${s.id}" → "${newId}_alt" (已有 ${existing.id})`);
    } else {
      s.id = newId;
      hyphenFixes.push(`${s.nameZh}: ${s.id}`);
    }
  }
});
console.log(`\n✅ 修复 ${hyphenFixes.length} 个连字符 ID`);

// ===== 4. 修正中文名不一致 =====
const nameZhOverrides = {
  'message': '传讯术',
  'sending': '发送术',
  'obscure': '遮蔽术',
  'blur': '模糊术',
  'misdirection': '误导术',
  'mislead': '假象术',
  'teleport_greater': '高等传送术',
  'greater_teleport': '高等传送术',
};

Object.entries(nameZhOverrides).forEach(([id, nameZh]) => {
  const spell = spells.find(s => s.id === id);
  if (spell && spell.nameZh !== nameZh) {
    console.log(`  中文名: ${spell.id} "${spell.nameZh}" → "${nameZh}"`);
    spell.nameZh = nameZh;
  }
});

// ===== 5. 重新排序 =====
spells.sort((a, b) => {
  if (a.level !== b.level) return a.level - b.level;
  return a.nameEn.localeCompare(b.nameEn);
});

// ===== 6. 验证 =====
const idSet = new Set();
const idDups = [];
spells.forEach(s => {
  if (idSet.has(s.id)) idDups.push(s.id);
  idSet.add(s.id);
});
if (idDups.length > 0) {
  console.log(`\n⚠ 仍有 ID 重复: ${idDups.join(', ')}`);
} else {
  console.log(`\n✅ ID 无重复`);
}

const enSet = new Set(spells.map(s => s.nameEn.toLowerCase().trim()));
console.log(`✅ 英文名无重复: ${enSet.size} 唯一`);

// 连字符检查
const remainingHyphens = spells.filter(s => s.id.includes('-'));
console.log(`连字符 ID 剩余: ${remainingHyphens.length}`);

// ===== 7. 写回文件 =====
function formatSpell(s) {
  const lines = ['  {'];
  const keys = ['id', 'nameEn', 'nameZh', 'level', 'school', 'components', 'castingTime', 'range', 'target', 'duration', 'savingThrow', 'spellResist', 'desc', 'material', 'source'];
  keys.forEach(k => {
    if (s[k] !== undefined) {
      const val = typeof s[k] === 'number' ? s[k] : JSON.stringify(s[k]);
      lines.push(`    "${k}": ${val},`);
    }
  });
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('  }');
  return lines.join('\n');
}

const newSpellsJs = `const SPELLS = [\n${spells.map(formatSpell).join(',\n')}\n];\n`;
fs.writeFileSync(path.join(projectRoot, 'js/spells-data.js'), newSpellsJs, 'utf8');
console.log(`\n✅ 已写入 js/spells-data.js (${spells.length} 条)`);

// ===== 8. 同步 global-search-data.js =====
const searchContent = fs.readFileSync(path.join(projectRoot, 'js/global-search-data.js'), 'utf8');
const searchLines = searchContent.split('\n');
let spellsStartLine = -1, spellsEndLine = -1, bracketDepth = 0, inSpellsArray = false;

for (let i = 0; i < searchLines.length; i++) {
  const line = searchLines[i];
  if (spellsStartLine === -1 && /^\s*spells:\s*\[/.test(line)) {
    spellsStartLine = i;
    inSpellsArray = true;
    bracketDepth = 1;
    for (const ch of line.substring(line.indexOf('[') + 1)) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }
    if (bracketDepth === 0) { spellsEndLine = i; break; }
    continue;
  }
  if (inSpellsArray) {
    for (const ch of line) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }
    if (bracketDepth === 0) { spellsEndLine = i; break; }
  }
}

const searchSpellEntries = spells.map(s => {
  return `  {\n    "id": "${s.id}",\n    "nameZh": "${s.nameZh}",\n    "nameEn": "${s.nameEn}",\n    "type": "spell",\n    "level": ${s.level},\n    "school": "${s.school}",\n    "source": "${s.source}",\n    "url": "spells/level${s.level}.html"\n  }`;
});

if (spellsStartLine >= 0 && spellsEndLine >= 0) {
  const before = searchLines.slice(0, spellsStartLine);
  const after = searchLines.slice(spellsEndLine + 1);
  const newSpellsSection = `  // ===== 法术 (Spells) - 完整数据（已去重） =====\n  spells: [\n${searchSpellEntries.join(',\n')}\n  ],`;
  const newSearchJs = [...before, newSpellsSection, ...after].join('\n');
  fs.writeFileSync(path.join(projectRoot, 'js/global-search-data.js'), newSearchJs, 'utf8');
  console.log(`✅ 已同步 js/global-search-data.js (${searchSpellEntries.length} 条)`);
}

// 最终统计
const levelCounts = {};
spells.forEach(s => { levelCounts[s.level] = (levelCounts[s.level] || 0) + 1; });
console.log(`\n===== 最终统计 =====`);
console.log(`总计: ${spells.length} 条唯一法术`);
for (let i = 0; i <= 9; i++) console.log(`  ${i}环: ${levelCounts[i] || 0}`);
