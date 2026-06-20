// 清理spells-data.js中的重复条目
const fs = require('fs');
const path = require('path');

console.log('=== 开始清理重复法术条目 ===\n');

// 读取文件
const filePath = path.join(__dirname, 'js', 'spells-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// 备份
const backupPath = path.join(__dirname, 'js', 'spells-data.js.bak-clean');
fs.writeFileSync(backupPath, content, 'utf8');
console.log(`✅ 已备份到: ${backupPath}`);

// 方法：使用Node.js的vm模块来正确解析JS文件
const vm = require('vm');

// 创建一个上下文来运行JS代码
const sandbox = { const: {}, let: {}, var: {} };
const context = vm.createContext(sandbox);

// 修改内容，使其可以在vm中运行
// 将 `const SPELLS = [...]` 改为 `SPELLS = [...]` 并添加到全局
let modifiedContent = content.replace('const SPELLS = ', 'var SPELLS = ');

try {
  // 在沙箱中运行代码
  vm.runInContext(modifiedContent, context);
  
  // 获取SPELLS数组
  const spells = sandbox.SPELLS || context.SPELLS;
  
  if (!spells || !Array.isArray(spells)) {
    console.error('❌ 无法解析SPELLS数组');
    process.exit(1);
  }
  
  console.log(`📊 总条目数: ${spells.length}`);
  
  // 去除重复ID（保留第一个出现的）
  const seenIds = new Set();
  const uniqueSpells = [];
  const duplicates = [];
  
  spells.forEach((spell, index) => {
    if (!spell || !spell.id) {
      console.warn(`⚠️  第${index + 1}个条目缺少ID，跳过`);
      return;
    }
    
    if (seenIds.has(spell.id)) {
      duplicates.push(spell.id);
    } else {
      seenIds.add(spell.id);
      uniqueSpells.push(spell);
    }
  });
  
  console.log(`✅ 唯一法术数: ${uniqueSpells.length}`);
  console.log(`⚠️  重复条目数: ${duplicates.length}`);
  
  if (duplicates.length > 0) {
    console.log(`\n重复的法术ID（前20个）:`);
    duplicates.slice(0, 20).forEach(id => console.log(`  - ${id}`));
    if (duplicates.length > 20) {
      console.log(`  ... 还有 ${duplicates.length - 20} 个`);
    }
  }
  
  // 转换回JS格式
  console.log('\n📝 正在生成JS代码...');
  
  const lines = [];
  lines.push('// D&D 3.5e 法术数据库');
  lines.push('// 自动生成于: ' + new Date().toISOString());
  lines.push('// 法术数量: ' + uniqueSpells.length);
  lines.push('');
  lines.push('const SPELLS = [');
  
  uniqueSpells.forEach(spell => {
    lines.push('  {');
    lines.push(`    id: '${spell.id}',`);
    lines.push(`    nameEn: '${spell.nameEn.replace(/'/g, "\\'")}',`);
    lines.push(`    nameZh: '${spell.nameZh.replace(/'/g, "\\'")}',`);
    lines.push(`    level: ${JSON.stringify(spell.level)},`);
    lines.push(`    school: '${spell.school}',`);
    lines.push(`    components: '${spell.components}',`);
    lines.push(`    castingTime: '${spell.castingTime}',`);
    lines.push(`    range: '${spell.range.replace(/'/g, "\\'")}',`);
    
    // target可能有特殊字符
    const target = spell.target || '';
    lines.push(`    target: '${target.replace(/'/g, "\\'")}',`);
    
    lines.push(`    duration: '${spell.duration.replace(/'/g, "\\'")}',`);
    lines.push(`    savingThrow: '${spell.savingThrow}',`);
    lines.push(`    spellResist: '${spell.spellResist}',`);
    
    // desc可能有换行和引号
    const desc = spell.desc || '';
    const escapedDesc = desc
      .replace(/\\/g, '\\\\')
      .replace(/'/g, "\\'")
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r');
    lines.push(`    desc: '${escapedDesc}',`);
    
    // 条件属性
    if (spell.material) {
      lines.push(`    material: '${spell.material.replace(/'/g, "\\'")}',`);
    }
    
    if (spell.arcane === true) {
      lines.push(`    arcane: true,`);
    }
    
    if (spell.divine === true) {
      lines.push(`    divine: true,`);
    }
    
    if (spell.classes && Array.isArray(spell.classes)) {
      lines.push(`    classes: ${JSON.stringify(spell.classes)},`);
    }
    
    lines.push('  },');
  });
  
  lines.push('];');
  lines.push('');
  
  // 写入文件
  const output = lines.join('\n');
  fs.writeFileSync(filePath, output, 'utf8');
  
  console.log(`✅ 已写入清理后的数据: ${filePath}`);
  console.log(`   原始大小: ${(content.length / 1024).toFixed(2)} KB`);
  console.log(`   清理后大小: ${(output.length / 1024).toFixed(2)} KB`);
  console.log(`   减少了: ${((content.length - output.length) / 1024).toFixed(2)} KB`);
  
  // 验证
  console.log('\n🔍 验证清理后的文件...');
  
  const testContent = fs.readFileSync(filePath, 'utf8');
  const testModified = testContent.replace('const SPELLS = ', 'var SPELLS = ');
  
  const testSandbox = {};
  const testContext = vm.createContext(testSandbox);
  
  try {
    vm.runInContext(testModified, testContext);
    const testSpells = testSandbox.SPELLS || testContext.SPELLS;
    
    if (!testSpells || !Array.isArray(testSpells)) {
      console.error('❌ 验证失败: 无法解析清理后的文件');
      process.exit(1);
    }
    
    const testIds = testSpells.map(s => s.id);
    const testUniqueIds = new Set(testIds);
    
    if (testIds.length !== testUniqueIds.size) {
      console.error(`❌ 验证失败: 仍有 ${testIds.length - testUniqueIds.size} 个重复条目`);
      process.exit(1);
    }
    
    console.log(`✅ 验证成功: ${testSpells.length} 个法术，无重复`);
    console.log('\n=== 清理完成 ===');
    
  } catch (error) {
    console.error('❌ 验证失败:', error.message);
    console.log('\n正在恢复备份...');
    fs.copyFileSync(backupPath, filePath);
    console.log('✅ 已恢复备份');
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ 解析失败:', error.message);
  console.log('\n使用备用方法...');
  
  // 备用方法：使用正则表达式提取所有spell对象
  console.log('正在使用正则表达式解析...');
  
  // 这个方法不太可靠，但可以作为备用
  console.error('❌ 备用方法未实现，请手动检查文件');
  process.exit(1);
}
