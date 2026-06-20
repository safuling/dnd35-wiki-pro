/**
 * 修复 spells-data.js 中的重复法术条目
 * 解析 SPELLS 数组，移除重复ID的条目（保留第一个）
 */

const fs = require('fs');
const filePath = 'js/spells-data.js';

// 读取文件
const content = fs.readFileSync(filePath, 'utf8');

// 使用 Function 构造器解析 SPELLS 数组
// 需要处理 const 声明
const SPELLS = new Function(content + '\nreturn SPELLS;')();

console.log(`解析得到 ${SPELLS.length} 个条目`);

// 检查重复
const seenIds = new Map(); // id -> index
const duplicates = [];

SPELLS.forEach((spell, index) => {
  if (seenIds.has(spell.id)) {
    duplicates.push({
      id: spell.id,
      index: index,
      previousIndex: seenIds.get(spell.id)
    });
  } else {
    seenIds.set(spell.id, index);
  }
});

console.log(`唯一ID数: ${seenIds.size}`);
console.log(`重复条目数: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log('\n重复条目:');
  duplicates.forEach(d => {
    console.log(`  索引 ${d.index}: ${d.id} (首次出现在 ${d.previousIndex})`);
  });
  
  // 移除重复条目（从后往前删，避免索引偏移）
  const indicesToRemove = duplicates.map(d => d.index).sort((a, b) => b - a);
  indicesToRemove.forEach(idx => {
    SPELLS.splice(idx, 1);
  });
  
  console.log(`\n已移除 ${duplicates.length} 个重复条目`);
  console.log(`剩余 ${SPELLS.length} 个条目`);
  
  // 重新生成文件内容
  let output = content.slice(0, content.indexOf('const SPELLS = ['));
  output += 'const SPELLS = [\n';
  
  SPELLS.forEach((spell, idx) => {
    output += '  {\n';
    output += `    id: "${spell.id}",\n`;
    output += `    nameEn: "${spell.nameEn}",\n`;
    output += `    nameZh: "${spell.nameZh}",\n`;
    output += `    level: ${spell.level},\n`;
    output += `    school: "${spell.school}",\n`;
    if (spell.subschool) output += `    subschool: "${spell.subschool}",\n`;
    if (spell.descriptor) output += `    descriptor: "${spell.descriptor}",\n`;
    output += `    components: "${spell.components}",\n`;
    output += `    castingTime: "${spell.castingTime}",\n`;
    output += `    range: "${spell.range}",\n`;
    output += `    target: "${spell.target}",\n`;
    output += `    duration: "${spell.duration}",\n`;
    output += `    savingThrow: "${spell.savingThrow}",\n`;
    output += `    spellResist: "${spell.spellResist}",\n`;
    output += `    desc: "${spell.desc.replace(/"/g, '\\"')}",\n`;
    if (spell.material) output += `    material: "${spell.material.replace(/"/g, '\\"')}",\n`;
    if (spell.focus) output += `    focus: "${spell.focus.replace(/"/g, '\\"')}",\n`;
    if (spell.xpCost) output += `    xpCost: "${spell.xpCost}",\n`;
    
    // arcane
    if (spell.arcane) {
      const entries = Object.entries(spell.arcane).map(([k, v]) => `${k}:${v}`).join(', ');
      output += `    arcane: {${entries}},\n`;
    } else {
      output += `    arcane: null,\n`;
    }
    
    // divine
    if (spell.divine) {
      const entries = Object.entries(spell.divine).map(([k, v]) => `${k}:${v}`).join(', ');
      output += `    divine: {${entries}},\n`;
    } else {
      output += `    divine: null,\n`;
    }
    
    // classes
    const classEntries = Object.entries(spell.classes).map(([k, v]) => `${k}:${v}`).join(', ');
    output += `    classes: {${classEntries}}\n`;
    
    output += '  }';
    if (idx < SPELLS.length - 1) output += ',';
    output += '\n';
  });
  
  output += '];\n\n';
  output += '// 用法示例：\n';
  output += '// 获取所有3环法术：SPELLS.filter(s => s.level === 3)\n';
  output += '// 获取所有奥术法术：SPELLS.filter(s => s.arcane !== null)\n';
  output += '// 获取所有神术法术：SPELLS.filter(s => s.divine !== null)\n';
  
  // 写回文件（先备份）
  const backupPath = filePath + '.bak';
  fs.copyFileSync(filePath, backupPath);
  console.log(`\n已备份原文件到: ${backupPath}`);
  
  fs.writeFileSync(filePath, output);
  console.log(`已重写文件: ${filePath}`);
  console.log(`法术总数: ${SPELLS.length}`);
  
} else {
  console.log('没有重复条目，无需修复');
}
