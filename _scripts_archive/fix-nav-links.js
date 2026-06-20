// 修复所有页面中的断链导航
const fs = require('fs');
const path = require('path');

// 需要修复的替换映射
const replacements = [
  // 子目录页面（../前缀）中的旧链接
  { from: '../rules/intro.html', to: '../rules.html' },
  { from: '"../rules/intro.html"', to: '"../rules.html"' },
  // 根目录页面中的旧链接（srd-reference.html / errata.html 等死链处理）
  { from: 'href="srd-reference.html"', to: 'href="about.html"' },
  { from: 'href="errata.html"', to: 'href="conflicts.html"' },
];

// 需要处理的目录
const dirs = [
  'classes', 'races', 'skills', 'feats', 'spells', 'equipment', 'monsters', '3r', '.'
];

let totalFixed = 0;

dirs.forEach(dir => {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
  files.forEach(file => {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    let modified = false;
    replacements.forEach(r => {
      if (content.includes(r.from)) {
        content = content.split(r.from).join(r.to);
        modified = true;
        console.log(`  Fixed: ${r.from} → ${r.to} in ${fp}`);
      }
    });
    if (modified) {
      fs.writeFileSync(fp, content, 'utf8');
      totalFixed++;
    }
  });
});

console.log(`\n✅ 修复完成，共更新 ${totalFixed} 个文件`);
