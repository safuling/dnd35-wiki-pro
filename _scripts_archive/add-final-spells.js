// 添加最后3个缺失的领域法术
const fs = require('fs');
const path = require('path');

console.log('=== 添加最后3个缺失的领域法术 ===\n');

// 读取现有法术数据
const spellsPath = path.join(__dirname, 'js', 'spells-data.js');
let content = fs.readFileSync(spellsPath, 'utf8');

// 备份
const backupPath = path.join(__dirname, 'js', 'spells-data.js.bak-final');
fs.writeFileSync(backupPath, content, 'utf8');
console.log(`✅ 已备份到: ${backupPath}`);

// 定义最后3个法术
const finalSpells = [
  {
    id: 'true-strike',
    nameEn: 'True Strike',
    nameZh: '真击',
    level: { war: 1 },
    school: 'divination',
    components: 'V, S',
    castingTime: '标准动作',
    range: '个人',
    target: '自己',
    duration: '见下文',
    savingThrow: '无',
    spellResist: '否',
    desc: '你的下一次武器攻击获得+20攻击加值。法术在攻击后结束（无论是否命中）。'
  },
  {
    id: 'slay-living',
    nameEn: 'Slay Living',
    nameZh: '屠生术',
    level: { evil: 5 },
    school: 'necromancy',
    components: 'V, S',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    target: '一个生物',
    duration: '瞬时',
    savingThrow: '强韧过',
    spellResist: '是',
    desc: '你对目标造成100点生命值伤害。如果目标通过强韧检定，则只受到3d6+1/等级点伤害（最大+20）。'
  },
  {
    id: 'flame-strike',
    nameEn: 'Flame Strike',
    nameZh: ' flame击',
    level: { cleric: 5, war: 5 },
    school: 'evocation',
    components: 'V, S, DF',
    castingTime: '标准动作',
    range: '近距（25英尺+5英尺/2等级）',
    area: '10英尺半径爆发',
    duration: '瞬时',
    savingThrow: '反射过半数伤害',
    spellResist: '是',
    desc: '你从天空中召唤出一道垂直的火焰柱。爆发区域内的生物受到1d6点火焰伤害/等级（最大15d6），反射过则受到半数伤害。对邪恶生物造成双倍伤害。'
  }
];

console.log(`📝 定义了 ${finalSpells.length} 个法术的数据`);

// 转换新法术为JS格式
console.log('\n📝 正在生成JS代码...');
const newSpellsJS = finalSpells.map(spell => {
  const lines = [];
  lines.push('  {');
  lines.push(`    id: '${spell.id}',`);
  lines.push(`    nameEn: '${spell.nameEn.replace(/'/g, "\\'")}',`);
  lines.push(`    nameZh: '${spell.nameZh.replace(/'/g, "\\'")}',`);
  lines.push(`    level: ${JSON.stringify(spell.level)},`);
  lines.push(`    school: '${spell.school}',`);
  lines.push(`    components: '${spell.components}',`);
  lines.push(`    castingTime: '${spell.castingTime}',`);
  lines.push(`    range: '${spell.range.replace(/'/g, "\\'")}',`);
  
  if (spell.target) {
    lines.push(`    target: '${spell.target.replace(/'/g, "\\'")}',`);
  }
  if (spell.area) {
    lines.push(`    area: '${spell.area.replace(/'/g, "\\'")}',`);
  }
  
  lines.push(`    duration: '${spell.duration.replace(/'/g, "\\'")}',`);
  lines.push(`    savingThrow: '${spell.savingThrow}',`);
  lines.push(`    spellResist: '${spell.spellResist}',`);
  
  const desc = spell.desc || '';
  const escapedDesc = desc
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
  lines.push(`    desc: '${escapedDesc}',`);
  
  lines.push('  },');
  return lines.join('\n');
}).join('\n');

// 插入到spells-data.js中（在最后的 ]; 之前）
const insertPoint = content.lastIndexOf('];');
if (insertPoint === -1) {
  console.error('❌ 无法找到插入点');
  process.exit(1);
}

const beforeInsert = content.substring(0, insertPoint);
const afterInsert = content.substring(insertPoint);

const newContent = beforeInsert + '\n' + newSpellsJS + '\n' + afterInsert;

// 写入文件
fs.writeFileSync(spellsPath, newContent, 'utf8');

console.log(`✅ 已添加 ${finalSpells.length} 个法术到: ${spellsPath}`);

// 验证
console.log('\n🔍 验证新文件...');
const vm = require('vm');
const testContent = fs.readFileSync(spellsPath, 'utf8');
const testModified = testContent.replace('const SPELLS = ', 'var SPELLS = ');

const testSandbox = {};
const testContext = vm.createContext(testSandbox);

try {
  vm.runInContext(testModified, testContext);
  const testSpells = testSandbox.SPELLS || testContext.SPELLS;
  
  if (!testSpells || !Array.isArray(testSpells)) {
    console.error('❌ 验证失败: 无法解析新文件');
    console.log('\n正在恢复备份...');
    fs.copyFileSync(backupPath, spellsPath);
    console.log('✅ 已恢复备份');
    process.exit(1);
  }
  
  const testIds = testSpells.map(s => s.id);
  const testUniqueIds = new Set(testIds);
  
  if (testIds.length !== testUniqueIds.size) {
    console.error(`❌ 验证失败: 有 ${testIds.length - testUniqueIds.size} 个重复条目`);
    console.log('\n正在恢复备份...');
    fs.copyFileSync(backupPath, spellsPath);
    console.log('✅ 已恢复备份');
    process.exit(1);
  }
  
  console.log(`✅ 验证成功: ${testSpells.length} 个法术，无重复`);
  console.log('\n=== 所有领域法术已添加完成！ ===');
  
} catch (error) {
  console.error('❌ 验证失败:', error.message);
  console.log('\n正在恢复备份...');
  fs.copyFileSync(backupPath, spellsPath);
  console.log('✅ 已恢复备份');
  process.exit(1);
}
