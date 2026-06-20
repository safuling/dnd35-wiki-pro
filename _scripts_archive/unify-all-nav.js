/**
 * 统一所有页面的顶部导航栏
 * 标准模板: 🐉 D&D 3.5e 中文Wiki
 * 链接: 首页|核心规则|法术|职业|种族|专长|技能|装备|怪物|⚡3R拓展|规则冲突
 */
const fs = require('fs');
const path = require('path');

// ===== 标准导航模板 =====
function makeNavbar(isRoot, activeSection) {
  const p = isRoot ? '' : '../';
  
  const links = [
    { href: p + 'index.html',           label: '首页',     key: 'home' },
    { href: p + 'rules.html',           label: '核心规则', key: 'rules' },
    { href: p + 'spells/intro.html',    label: '法术',     key: 'spells' },
    { href: p + 'classes/intro.html',   label: '职业',     key: 'classes' },
    { href: p + 'races/intro.html',     label: '种族',     key: 'races' },
    { href: p + 'feats/intro.html',     label: '专长',     key: 'feats' },
    { href: p + 'skills/intro.html',    label: '技能',     key: 'skills' },
    { href: p + 'equipment/intro.html', label: '装备',     key: 'equipment' },
    { href: p + 'monsters/intro.html',  label: '怪物',     key: 'monsters' },
  ];

  const searchHref = p + 'spells/search.html';
  
  let linksHtml = links.map(l => {
    const cls = l.key === activeSection ? ' class="active"' : '';
    return `    <a href="${l.href}"${cls}>${l.label}</a>`;
  }).join('\n');

  linksHtml += `\n    <a href="${p}3r/index-v2.html" style="color:#d4a017;font-weight:600;">⚡ 3R拓展</a>`;
  linksHtml += `\n    <a href="${p}conflicts.html"${activeSection === 'conflicts' ? ' class="active"' : ''}>规则冲突</a>`;

  return `<nav class="navbar">
  <div class="navbar-brand">🐉 D&D 3.5e 中文Wiki</div>
  <div class="navbar-links" id="mainNav">
${linksHtml}
  </div>
  <div class="navbar-search">
    <input type="text" placeholder="搜索法术…" id="searchInput" onkeydown="if(event.key==='Enter')location.href='${searchHref}?q='+encodeURIComponent(this.value)">
    <button onclick="location.href='${searchHref}?q='+encodeURIComponent(document.getElementById('searchInput').value)">搜索</button>
  </div>
  <button class="mobile-menu-btn" onclick="document.getElementById('mainNav').classList.toggle('mobile-open')" aria-label="菜单">☰</button>
</nav>`;
}

// ===== 确定页面深度和激活区域 =====
function detectPageInfo(filePath, rootDir) {
  const rel = path.relative(rootDir, filePath).replace(/\\/g, '/');
  const parts = rel.split('/');
  
  // 确定深度
  const isRoot = parts.length === 1; // e.g., "index.html"
  
  // 确定激活区域
  let active = 'home';
  const filename = parts[parts.length - 1];
  const dirname = parts.length > 1 ? parts[0] : null;
  
  if (filename === 'index.html') {
    active = dirname || 'home';
    if (dirname === '3r') active = '3r';
  }
  if (filename === 'rules.html') active = 'rules';
  if (filename === 'conflicts.html') active = 'conflicts';
  if (filename === 'about.html') active = 'about';
  if (dirname === 'spells') active = 'spells';
  if (dirname === 'classes') active = 'classes';
  if (dirname === 'races') active = 'races';
  if (dirname === 'feats') active = 'feats';
  if (dirname === 'skills') active = 'skills';
  if (dirname === 'equipment') active = 'equipment';
  if (dirname === 'monsters') active = 'monsters';
  if (dirname === '3r') active = '3r';
  
  return { isRoot, active };
}

// ===== 处理单个文件 =====
function processFile(filePath, rootDir) {
  let content = fs.readFileSync(filePath, 'utf8');
  const { isRoot, active } = detectPageInfo(filePath, rootDir);
  const newNav = makeNavbar(isRoot, active);
  const relPath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  
  let changed = false;
  
  // Pattern 1: <nav class="navbar">...</nav> (现代导航栏)
  const navRegex = /<nav class="navbar">[\s\S]*?<\/nav>/;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, newNav);
    changed = true;
    console.log(`  [navbar替换] ${relPath} (active: ${active})`);
  }
  
  // Pattern 2: <header class="site-header">...</header> (feats/skills旧模式)
  const headerRegex = /<header class="site-header">[\s\S]*?<\/header>/;
  if (!changed && headerRegex.test(content)) {
    content = content.replace(headerRegex, newNav);
    changed = true;
    console.log(`  [header替换] ${relPath} (active: ${active})`);
  }
  
  // Pattern 3: 页面有 sidebar-only 导航 (<nav class="sidebar">) 但没有顶部 navbar
  const sidebarRegex = /<nav class="sidebar">/;
  if (!changed && sidebarRegex.test(content)) {
    // 在 <body> 之后插入标准 navbar
    content = content.replace(/(<body[^>]*>)/, '$1\n' + newNav);
    changed = true;
    console.log(`  [sidebar→navbar] ${relPath} (active: ${active})`);
  }
  
  // Pattern 4: 完全没有导航条，但有 <body> 标签
  if (!changed && /<body[^>]*>/.test(content)) {
    content = content.replace(/(<body[^>]*>)/, '$1\n' + newNav);
    changed = true;
    console.log(`  [新增navbar] ${relPath} (active: ${active})`);
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } else {
    console.log(`  [跳过] ${relPath} - 无匹配模式`);
    return false;
  }
}

// ===== 主逻辑 =====
const rootDir = process.cwd();

// 获取所有 .html 文件，排除某些目录
function getAllHtmlFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_scripts_archive' || entry.name === '__pycache__' || 
          entry.name === '.workbuddy' || entry.name === 'images' || entry.name === 'js') continue;
      results.push(...getAllHtmlFiles(fullPath));
    } else if (entry.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

console.log('🔧 开始统一全站导航…\n');

const files = getAllHtmlFiles(rootDir);
let count = 0;
let skipped = 0;

for (const file of files) {
  if (processFile(file, rootDir)) count++;
  else skipped++;
}

console.log(`\n✅ 完成！更新了 ${count} 个文件，跳过了 ${skipped} 个文件`);
