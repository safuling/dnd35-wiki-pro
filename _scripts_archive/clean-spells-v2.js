// 清理spells-data.js中的重复法术条目（使用JSON中间格式）
const fs = require('fs');
const util = require('util');

const spellsFile = 'js/spells-data.js';
const backupFile = 'js/spells-data.js.bak4';

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

// 去重
const seenIds = new Set();
const uniqueSpells = [];
const duplicates = [];

SPELLS.forEach((spell, index) => {
  if (!spell || !spell.id) {
    console.warn(`警告: 条目 ${index} 缺少id，跳过`);
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

// 使用util.inspect转换为可阅读的JS格式
function serializeSpell(spell) {
  const lines = ['  {'];
  
  // 基本属性
  lines.push(`    id: '${String(spell.id).replace(/'/g, "\\'")}',`);
  lines.push(`    nameEn: '${String(spell.nameEn || '').replace(/'/g, "\\'")}',`);
  lines.push(`    nameZh: '${String(spell.nameZh || '').replace(/'/g, "\\'")}',`);
  lines.push(`    level: ${spell.level},`);
  lines.push(`    school: '${String(spell.school || '').replace(/'/g, "\\'")}',`);
  lines.push(`    components: '${String(spell.components || '').replace(/'/g, "\\'")}',`);
  lines.push(`    castingTime: '${String(spell.castingTime || '').replace(/'/g, "\\'")}',`);
  lines.push(`    range: '${String(spell.range || '').replace(/'/g, "\\'")}',`);
  lines.push(`    target: '${String(spell.target || '').replace(/'/g, "\\'")}',`);
  lines.push(`    duration: '${String(spell.duration || '').replace(/'/g, "\\'")}',`);
  lines.push(`    savingThrow: '${String(spell.savingThrow || '').replace(/'/g, "\\'")}',`);
  lines.push(`    spellResist: '${String(spell.spellResist || '').replace(/'/g, "\\'")}',`);
  lines.push(`    desc: '${String(spell.desc || '').replace(/'/g, "\\'").replace(/\n/g, '\\n')}',`);
  
  // 布尔属性
  if (spell.arcane !== undefined) {
    lines.push(`    arcane: ${spell.arcane},`);
  }
  if (spell.divine !== undefined) {
    lines.push(`    divine: ${spell.divine},`);
  }
  
  // classes对象
  if (spell.classes && typeof spell.classes === 'object') {
    const classEntries = Object.entries(spell.classes)
      .map(([c, lv]) => `      ${c}: ${lv}`)
      .join(',\n');
    lines.push(`    classes: {\n${classEntries}\n    },`);
  }
  
  // 可选属性
  if (spell.material) {
    lines.push(`    material: '${String(spell.material).replace(/'/g, "\\'")}',`);
  }
  if (spell.focus) {
    lines.push(`    focus: '${String(spell.focus).replace(/'/g, "\\'")}',`);
  }
  if (spell.descriptor) {
    lines.push(`    descriptor: '${String(spell.descriptor).replace(/'/g, "\\'")}',`);
  }
  if (spell.xpCost) {
    lines.push(`    xpCost: '${String(spell.xpCost).replace(/'/g, "\\'")}',`);
  }
  
  // 移除最后一个逗号
  const lastLine = lines[lines.length - 1];
  if (lastLine.endsWith(',')) {
    lines[lines.length - 1] = lastLine.slice(0, -1);
  }
  
  lines.push('  }');
  return lines.join('\n');
}

// 生成新文件内容
const header = `// D&D 3.5e 法术数据库（已去重）
// 自动生成于: ${new Date().toISOString()}
// 原始条目: ${SPELLS.length}
// 去重后: ${uniqueSpells.length}

const SPELLS = [
`;

const footer = '\n];
';

const spellsJS = uniqueSpells.map(serializeSpell).join(',\n');
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
    console.log(`   法术总数: ${testSpells.length}`);
  } else {
    console.error(`\n❌ 验证失败: 仍有 ${testIds.length - testUniqueIds.size} 个重复`);
    console.log('正在恢复备份...');
    fs.copyFileSync(backupFile, spellsFile);
  }
} catch (e) {
  console.error(`\n❌ 验证失败:`, e.message);
  console.log('正在恢复备份...');
  fs.copyFileSync(backupFile, spellsFile);
}
