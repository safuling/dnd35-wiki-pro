const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const r3Dir = path.join(rootDir, '3r');

const files = fs.readdirSync(r3Dir).filter(f => f.endsWith('.html'));

let count = 0;
for (const file of files) {
  const filePath = path.join(r3Dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 检查是否已有 style.css 引用
  if (content.includes('style.css')) {
    console.log(`  [跳过] ${file} - 已有 style.css`);
    continue;
  }
  
  // 在 <style> 标签之前插入 style.css 链接
  // 这样内联样式优先级更高，保留3R暗色主题
  const linkTag = '<link rel="stylesheet" href="../style.css">\n  ';
  if (content.includes('<style>')) {
    content = content.replace('<style>', linkTag + '<style>');
  } else {
    content = content.replace('</head>', linkTag + '\n</head>');
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  [添加] ${file} - 已添加 style.css`);
  count++;
}

console.log(`\n✅ 为 ${count} 个3R页面添加了 style.css 引用`);
