// 清理spells-data.js中的重复法术条目
const fs = require('fs');

const spellsFile = 'js/spells-data.js';
const backupFile = 'js/spells-data.js.bak4';

// 备份
fs.copyFileSync(spellsFile, backupFile);
console.log(`已备份到: ${backupFile}`);

// 读取并解析
const content = fs.readFileSync(spellsFile, 'utf8');
let SPELLS;

try {
  const func = new Function(content + '\nreturn SPELLS;');
  SPELLS = func();
  console.log(`原始条目数: ${SPELLS.length}`);
} catch (e) {
  console.error('解析失败:', e.message);
  process.exit(1);
}

// 去重（保留第一个出现的）
const seenIds = new Set();
const uniqueSpells = [];
const duplicates = [];

SPELLS.forEach((spell, index) => {
  if (!spell || !spell.id) {
    console.warn(`警告: 条目 ${index} 缺少id`);
    return;
  }
  
  if (seenIds.has(spell.id)) {
    duplicates.push({ id: spell.id, index: index });
  } else {
    seenIds.add(spell.id);
    uniqueSpells.push(spell);
  }
});

console.log(`\n去重结果:`);
console.log(`  唯一法术: ${uniqueSpells.length}`);
console.log(`  重复条目: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log(`\n重复的法术ID（前10个）:`);
  duplicates.slice(0, 10).forEach(d => console.log(`  - ${d.id} (位置: ${d.index})`));
}

// 转换回JS格式（安全版本，处理缺失属性）
function escapeJS(str) {
  if (!str) return '';
  return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

function spellToJS(spell) {
  const lines = [];
  lines.push('  {');
  lines.push(`    id: '${escapeJS(spell.id)}',`);
  lines.push(`    nameEn: '${escapeJS(spell.nameEn)}',`);
  lines.push(`    nameZh: '${escapeJS(spell.nameZh)}',`);
  lines.push(`    level: ${spell.level},`);
  lines.push(`    school: '${escapeJS(spell.school)}',`);
  lines.push(`    components: '${escapeJS(spell.components)}',`);
  lines.push(`    castingTime: '${escapeJS(spell.castingTime)}',`);
  lines.push(`    range: '${escapeJS(spell.range)}',`);
  lines.push(`    target: '${escapeJS(spell.target)}',`);
  lines.push(`    duration: '${escapeJS(spell.duration)}',`);
  lines.push(`    savingThrow: '${escapeJS(spell.savingThrow)}',`);
  lines.push(`    spellResist: '${escapeJS(spell.spellResist)}',`);
  lines.push(`    desc: '${escapeJS(spell.desc)}',`);
  
  if (spell.arcane !== undefined) {
    lines.push(`    arcane: ${spell.arcane},`);
  }
  if (spell.divine !== undefined) {
    lines.push(`    divine: ${spell.divine},`);
  }
  
  const classEntries = Object.entries(spell.classes || {})
    .map(([c, lv]) => `      ${c}: ${lv}`)
    .join(',\n');
  lines.push(`    classes: {\n${classEntries}\n    }`);
  
  if (spell.material) {
    lines.push(`    material: '${spell.material.replace(/'/g, "\\'")}',`);
  }
  if (spell.focus) {
    lines.push(`    focus: '${spell.focus.replace(/'/g, "\\'")}',`);
  }
  if (spell.descriptor) {
    lines.push(`    descriptor: '${spell.descriptor}',`);
  }
  
  lines.push('  }');
  return lines.join('\n');
}

// 生成新的文件内容
const header = `// D&D 3.5e 法术数据库（已去重）
// 自动生成于: ${new Date().toISOString()}
// 原始条目: ${SPELLS.length}
// 去重后: ${uniqueSpells.length}

const SPELLS = [
`;

const footer = '\n];\n';

const spellsJS = uniqueSpells.map(spellToJS).join(',\n');
const newContent = header + spellsJS + footer;

// 写入文件
fs.writeFileSync(spellsFile, newContent, 'utf8');
console.log(`\n✅ 已写入清理后的文件: ${spellsFile}`);
console.log(`   条目数: ${uniqueSpells.length}`);

// 验证
try {
  const testFunc = new Function(newContent + '\nreturn SPELLS;');
  const testSpells = testFunc();
  const testIds = testSpells.map(s => s.id);
  const testUniqueIds = new Set(testIds);
  
  if (testIds.length === testUniqueIds.size) {
    console.log(`\n✅ 验证通过: 无重复条目`);
  } else {
    console.error(`\n❌ 验证失败: 仍有 ${testIds.length - testUniqueIds.size} 个重复`);
  }
  
  console.log(`   法术总数: ${testSpells.length}`);
} catch (e) {
  console.error(`\n❌ 验证失败:`, e.message);
  console.log('正在恢复备份...');
  fs.copyFileSync(backupFile, spellsFile);
}
