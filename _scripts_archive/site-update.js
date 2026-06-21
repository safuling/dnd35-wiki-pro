/**
 * Comprehensive site optimization script
 * 1. Add dropdown CSS to style.css
 * 2. Add "更多规则" dropdown to all navbars
 * 3. Fix search URLs (spells/search → global-search) across all pages
 * 4. Fix 3r/index-v2.html styling
 * 5. Update feat sidebars: add category links to Format B, restructure Format C
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();

// Helper: recursively get all .html files
function getAllHtml(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      if (item.name.startsWith('_') || item.name === 'node_modules') continue;
      results = results.concat(getAllHtml(path.join(dir, item.name)));
    } else if (item.name.endsWith('.html')) {
      results.push(path.join(dir, item.name));
    }
  }
  return results;
}

// Helper: build dropdown HTML with given prefix
function dropdownHTML(prefix) {
  return `    <div class="nav-dropdown">
      <span class="drop-trigger">更多规则 ▾</span>
      <div class="nav-dropdown-content">
        <a href="${prefix}rules-adventure.html">🗺️ 冒险</a>
        <a href="${prefix}rules-planes.html">🌌 位面与宇宙学</a>
        <a href="${prefix}rules-combat.html">⚔️ 战斗详述</a>
        <a href="${prefix}rules-deities.html">🙏 神祇与阵营</a>
        <a href="${prefix}rules-companions.html">🐾 伙伴系统</a>
        <a href="${prefix}rules-variants.html">🔄 规则变体</a>
        <div class="drop-divider"></div>
        <a href="${prefix}equipment/magic-items.html">💎 魔法物品</a>
        <a href="${prefix}domains/intro.html">✨ 领域系统</a>
        <a href="${prefix}dm/intro.html">🎲 DM工具</a>
      </div>
    </div>`;
}

// Standard sidebar for feat pages
function featSidebar(activePage) {
  const links = [
    { href: 'intro.html', label: '总览', key: 'intro' },
    { href: 'feat-list.html', label: '📋 专长详细列表', key: 'feat-list' },
    { href: 'combat.html', label: '战斗专长', key: 'combat' },
    { href: 'spell-feats.html', label: '施法专长', key: 'spell-feats' },
    { href: 'general.html', label: '通用专长', key: 'general' },
    { href: 'metamagic.html', label: '超魔专长', key: 'metamagic' },
    { href: 'item.html', label: '物品制造专长', key: 'item' },
    { href: 'divine.html', label: '神术专长', key: 'divine' },
  ];
  const coreFeats = [
    { href: 'power-attack.html', label: '猛力攻击', key: 'power-attack' },
    { href: 'cleave.html', label: '顺劈斩', key: 'cleave' },
    { href: 'weapon-focus.html', label: '武器专攻', key: 'weapon-focus' },
    { href: 'dodge.html', label: '闪避', key: 'dodge' },
    { href: 'iron-will.html', label: '钢铁意志', key: 'iron-will' },
  ];

  let html = '<aside class="sidebar">\n';
  html += '  <div class="sidebar-section">\n';
  html += '    <div class="sidebar-title">专长分类</div>\n';
  for (const l of links) {
    const cls = l.key === activePage ? ' class="active"' : '';
    html += `    <a href="${l.href}"${cls}>${l.label}</a>\n`;
  }
  html += '  </div>\n';
  html += '  <div class="sidebar-section">\n';
  html += '    <div class="sidebar-title">核心专长</div>\n';
  for (const l of coreFeats) {
    const cls = l.key === activePage ? ' class="active"' : '';
    html += `    <a href="${l.href}"${cls}>${l.label}</a>\n`;
  }
  html += '  </div>\n';
  html += '</aside>\n';
  return html;
}

let stats = {
  cssUpdated: false,
  dropdownAdded: 0,
  searchFixed: 0,
  threeRFixed: false,
  featSidebarB: 0,
  featSidebarC: 0,
  skipped: 0,
};

// ============ 1. Update style.css ============
const cssFile = path.join(root, 'style.css');
let css = fs.readFileSync(cssFile, 'utf8');
if (!css.includes('.nav-dropdown')) {
  const dropdownCSS = `
/* --- 导航栏下拉菜单 --- */
.nav-dropdown {
  position: relative;
  display: inline-block;
}
.nav-dropdown > .drop-trigger {
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;
  color: #ddd;
  font-size: 14px;
  text-decoration: none;
  background: none;
  border: none;
  font-family: inherit;
  transition: background 0.2s;
}
.nav-dropdown > .drop-trigger:hover {
  background: rgba(255,255,255,0.12);
  text-decoration: none;
}
.nav-dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #2c2c2c;
  min-width: 180px;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  z-index: 1000;
  padding: 6px 0;
}
.nav-dropdown:hover .nav-dropdown-content {
  display: block;
}
.nav-dropdown-content a {
  display: block;
  padding: 8px 16px;
  color: #ddd;
  font-size: 13px;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 0;
}
.nav-dropdown-content a:hover {
  background: rgba(255,255,255,0.1);
  color: var(--accent-gold);
}
.nav-dropdown-content .drop-divider {
  border-top: 1px solid rgba(255,255,255,0.08);
  margin: 4px 0;
}
`;
  // Insert before the first @media query
  const mediaIdx = css.indexOf('@media');
  if (mediaIdx > 0) {
    css = css.slice(0, mediaIdx) + dropdownCSS + '\n' + css.slice(mediaIdx);
  } else {
    css += '\n' + dropdownCSS;
  }
  fs.writeFileSync(cssFile, css, 'utf8');
  stats.cssUpdated = true;
}

// ============ 2-4. Process all HTML files ============
const allFiles = getAllHtml(root);
console.log(`Processing ${allFiles.length} HTML files...\n`);

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const relPath = path.relative(root, file);
  const isSubdir = relPath.includes(path.sep);
  const prefix = isSubdir ? '../' : '';

  // --- 2. Add dropdown to navbar ---
  if (content.includes('<div class="navbar-links"') && !content.includes('nav-dropdown')) {
    // Find the closing tag of navbar-links div
    // Insert dropdown before </div> that closes navbar-links
    const nlMatch = content.match(/(<div class="navbar-links"[^>]*>)([\s\S]*?)(\n  <\/div>)/);
    if (nlMatch) {
      const before = nlMatch[1];
      const inner = nlMatch[2];
      const after = nlMatch[3];
      content = content.replace(
        nlMatch[0],
        before + inner + '\n' + dropdownHTML(prefix) + after
      );
      stats.dropdownAdded++;
    }
  }

  // --- 3. Fix search URLs ---
  // Root pages: spells/search.html → global-search.html
  if (!isSubdir && content.includes("location.href='spells/search.html'")) {
    content = content.replace(/location\.href='spells\/search\.html'/g, "location.href='global-search.html'");
    stats.searchFixed++;
  }
  // Subdirectory pages: ../spells/search.html → ../global-search.html
  if (isSubdir && content.includes("location.href='../spells/search.html'")) {
    content = content.replace(/location\.href='\.\.\/spells\/search\.html'/g, "location.href='../global-search.html'");
    stats.searchFixed++;
  }

  // --- 4. Fix 3r/index-v2.html ---
  if (relPath === path.join('3r', 'index-v2.html')) {
    // Add missing emoji to brand
    if (content.includes('>D&D 3.5e 中文Wiki</div>')) {
      content = content.replace('>D&D 3.5e 中文Wiki</div>', '>🐉 D&D 3.5e 中文Wiki</div>');
    }
    // Fix active 3R link styling
    content = content.replace(
      /<a href="[^"]*3r\/index-v2\.html" class="active">3R拓展<\/a>/,
      '<a href="../3r/index-v2.html" class="active" style="color:#d4a017;font-weight:600;">⚡ 3R拓展</a>'
    );
    stats.threeRFixed = true;
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
}

// ============ 5. Update feat sidebars ============
const featsDir = path.join(root, 'feats');
const featFiles = fs.readdirSync(featsDir).filter(f => f.endsWith('.html'));

// Pages that already have the correct new sidebar (category pages + intro + feat-list)
const skipPages = ['intro.html', 'feat-list.html', 'combat.html', 'general.html', 
  'metamagic.html', 'item.html', 'spell-feats.html', 'divine.html'];

for (const fname of featFiles) {
  if (skipPages.includes(fname)) continue;
  
  const fpath = path.join(featsDir, fname);
  let content = fs.readFileSync(fpath, 'utf8');
  let original = content;
  const activePage = fname.replace('.html', '');

  if (content.includes('<div class="sidebar-title">专长分类</div>')) {
    // Format B: has sidebar with sidebar-title, missing 3 links
    // Add feat-list, item, divine links
    if (!content.includes('item.html') || !content.includes('divine.html') || !content.includes('feat-list.html')) {
      const sidebarLinks = [
        { href: 'intro.html', label: '总览' },
        { href: 'feat-list.html', label: '📋 专长详细列表' },
        { href: 'combat.html', label: '战斗专长' },
        { href: 'spell-feats.html', label: '施法专长' },
        { href: 'general.html', label: '通用专长' },
        { href: 'metamagic.html', label: '超魔专长' },
        { href: 'item.html', label: '物品制造专长' },
        { href: 'divine.html', label: '神术专长' },
      ];
      
      // Find the 专长分类 section and replace its links
      const sectionMatch = content.match(/(<div class="sidebar-title">专长分类<\/div>\n)((?:\s*<a href="[^"]*">[^<]*<\/a>\n)*)/);
      if (sectionMatch) {
        let newLinks = '';
        for (const l of sidebarLinks) {
          const cls = l.href.replace('.html', '') === activePage ? ' class="active"' : '';
          newLinks += `    <a href="${l.href}"${cls}>${l.label}</a>\n`;
        }
        content = content.replace(sectionMatch[0], sectionMatch[1] + newLinks);
        stats.featSidebarB++;
      }
    }
  } else if (content.includes('<h3>专长导航</h3>')) {
    // Format B-old: has <h3>专长导航</h3> with <ul> list
    // Replace entire sidebar section with new format
    const sidebarMatch = content.match(/<aside class="sidebar">[\s\S]*?<\/aside>/);
    if (sidebarMatch) {
      const newSidebar = featSidebar(activePage);
      content = content.replace(sidebarMatch[0], newSidebar.trim());
      stats.featSidebarB++;
    }
  } else if (content.includes('<h3>专长概要</h3>') && content.includes('<div class="container">')) {
    // Format C: no sidebar, single-column layout
    // Add sidebar by restructuring
    
    // 1. Replace <div class="container"> with layout + sidebar + main
    const sidebarHTML = featSidebar(activePage);
    content = content.replace(
      '<div class="container">',
      '<div class="layout">\n' + sidebarHTML + '\n<main class="main-content">\n'
    );
    
    // 2. Add closing </main> before the footer
    // The container's closing </div> is right before <footer
    content = content.replace(
      /(\s*)<footer class="main-footer">/,
      '\n</main>\n</div>\n\n  <footer class="main-footer">'
    );
    
    // 3. Remove the old <nav class="main-nav">...</nav> if present
    content = content.replace(/\s*<nav class="main-nav">[\s\S]*?<\/nav>\s*\n/, '\n');
    
    stats.featSidebarC++;
  }

  if (content !== original) {
    fs.writeFileSync(fpath, content, 'utf8');
  }
}

console.log('\n=== Results ===');
console.log(`CSS updated: ${stats.cssUpdated}`);
console.log(`Dropdown added: ${stats.dropdownAdded} files`);
console.log(`Search URLs fixed: ${stats.searchFixed} files`);
console.log(`3R index fixed: ${stats.threeRFixed}`);
console.log(`Feat sidebars (Format B) updated: ${stats.featSidebarB}`);
console.log(`Feat sidebars (Format C) restructured: ${stats.featSidebarC}`);
