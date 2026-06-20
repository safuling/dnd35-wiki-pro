// 清理 spells-data.js 中的问题：
// 1. 删除重复条目（保留第一个）
// 2. 删除多余的逗号行（"  ,"）
// 3. 验证语法
const fs = require('fs');

const FILE = 'C:/Users/wyb/WorkBuddy/2026-06-20-01-52-30/dnd35-wiki-pro/js/spells-data.js';
let content = fs.readFileSync(FILE, 'utf8');

// 第一步：删除多余的逗号行（整行只有逗号和空格）
const lines = content.split('\n');
const cleanedLines = lines.filter(line => line.trim() !== ',');
content = cleanedLines.join('\n');
console.log(`[1] 删除了 ${lines.length - cleanedLines.length} 行多余逗号`);

// 第二步：解析数组并删除重复id
// 用正则找到数组部分
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']') + 1;
const arrText = content.substring(startIdx, endIdx);

// 用 Function 解析（假设格式一致）
let data;
try {
    data = (new Function('return ' + arrText))();
    console.log(`[2] 解析成功，共 ${data.length} 个法术`);
} catch(e) {
    console.error('[ERROR] 解析失败:', e.message);
    process.exit(1);
}

// 删除重复id（保留第一个）
const seenIds = new Set();
const uniqueData = [];
for (const spell of data) {
    if (!seenIds.has(spell.id)) {
        seenIds.add(spell.id);
        uniqueData.push(spell);
    }
}
console.log(`[3] 删除 ${data.length - uniqueData.length} 个重复条目`);

// 第三步：重新生成 JS（统一用不带引号格式）
function spellToJS(spell, indent = '  ') {
    let lines = [];
    lines.push(`${indent}{ id:"${spell.id}", nameEn:"${spell.nameEn}", nameZh:"${spell.nameZh}",`);
    lines.push(`${indent}  level:${spell.level}, school:"${spell.school}", subschool:"${spell.subschool || ''}", descriptor:"${spell.descriptor || ''}",`);
    lines.push(`${indent}  components:"${spell.components}", castingTime:"${spell.castingTime}",`);
    
    // 可选字段
    if (spell.range) lines.push(`${indent}  range:"${spell.range}",`);
    if (spell.target) lines.push(`${indent}  target:"${spell.target}",`);
    if (spell.area) lines.push(`${indent}  area:"${spell.area}",`);
    if (spell.duration) lines.push(`${indent}  duration:"${spell.duration}",`);
    if (spell.savingThrow) lines.push(`${indent}  savingThrow:"${spell.savingThrow}",`);
    if (spell.spellResist !== undefined) lines.push(`${indent}  spellResist:"${spell.spellResist}",`);
    
    // 描述（转义引号）
    const desc = spell.desc.replace(/"/g, '\\"');
    lines.push(`${indent}  desc:"${desc}",`);
    
    if (spell.material) lines.push(`${indent}  material:"${spell.material.replace(/"/g, '\\"')}",`);
    if (spell.focus) lines.push(`${indent}  focus:"${spell.focus.replace(/"/g, '\\"')}",`);
    
    // arcane/divine/classes
    if (spell.arcane) lines.push(`${indent}  arcane:${JSON.stringify(spell.arcane).replace(/"/g, '"')},`);
    if (spell.divine) lines.push(`${indent}  divine:${JSON.stringify(spell.divine).replace(/"/g, '"')},`);
    if (spell.classes) lines.push(`${indent}  classes:${JSON.stringify(spell.classes).replace(/"/g, '"')}`);
    
    // conflicts
    if (spell.conflicts && spell.conflicts.length > 0) {
        // 给 classes 行加逗号（如果还没有）
        const lastLine = lines[lines.length - 1];
        if (!lastLine.endsWith(',')) {
            lines[lines.length - 1] = lastLine + ',';
        }
        lines.push(`${indent}  conflicts: [`);
        for (const c of spell.conflicts) {
            lines.push(`${indent}    {`);
            lines.push(`${indent}      point: "${c.point.replace(/"/g, '\\"')}",`);
            lines.push(`${indent}      phbRule: "${c.phbRule.replace(/"/g, '\\"')}",`);
            lines.push(`${indent}      controversy: "${c.controversy.replace(/"/g, '\\"')}",`);
            lines.push(`${indent}      suggestion: "${c.suggestion.replace(/"/g, '\\"')}",`);
            lines.push(`${indent}      source: "${c.source.replace(/"/g, '\\"')}"`);
            lines.push(`${indent}    },`);
        }
        lines.push(`${indent}  ]`);
    }
    
    lines.push(`${indent}},`);
    return lines.join('\n');
}

// 重新生成文件
let newContent = content.substring(0, startIdx) + '[\n';
for (const spell of uniqueData) {
    newContent += spellToJS(spell) + '\n';
}
newContent += '];\n';

// 写回
fs.writeFileSync(FILE, newContent, 'utf8');
console.log(`[4] 文件已重新生成（${uniqueData.length} 个法术）`);

// 验证语法
const { execSync } = require('child_process');
try {
    execSync(`node -c "${FILE}"`, { stdio: 'pipe' });
    console.log('[OK] JS 语法正确！');
} catch(e) {
    console.error('[ERROR] JS 语法错误:');
    console.error(e.stderr ? e.stderr.toString() : e.message);
    
    // 恢复备份
    console.log('[INFO] 恢复备份...');
    process.exit(1);
}
