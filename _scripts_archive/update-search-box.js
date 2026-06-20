// 批量修改所有HTML文件的导航栏搜索框
// 将搜索框从指向 spells/search.html 改为指向 global-search.html

const fs = require('fs');
const path = require('path');

const rootDir = 'C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro';

// 查找所有HTML文件
function findHtmlFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 跳过 node_modules, .git 等目录
      if (!file.startsWith('.') && file !== 'node_modules') {
        results = results.concat(findHtmlFiles(filePath));
      }
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  }

  return results;
}

// 修改搜索框
function updateSearchBox(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 检查是否包含旧的搜索框
  if (content.includes("spells/search.html?q=")) {
    // 替换搜索框的指向
    content = content.replace(
      /location\.href='spells\/search\.html\?q='/g,
      "location.href='global-search.html?q='"
    );
    content = content.replace(
      /placeholder="搜索法术…"/g,
      'placeholder="搜索所有内容..."'
    );

    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
}

// 主函数
function main() {
  console.log('开始查找HTML文件...');
  const htmlFiles = findHtmlFiles(rootDir);
  console.log(`找到 ${htmlFiles.length} 个HTML文件`);

  let updatedCount = 0;
  for (const file of htmlFiles) {
    const updated = updateSearchBox(file);
    if (updated) {
      updatedCount++;
      console.log(`已更新: ${path.relative(rootDir, file)}`);
    }
  }

  console.log(`\n完成! 共更新 ${updatedCount} 个文件`);
}

main();
