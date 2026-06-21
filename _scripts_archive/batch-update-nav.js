/**
 * Batch update script for DND 3.5e Wiki site-wide optimizations
 * 1. Add "更多规则" dropdown to all navbars
 * 2. Fix search URLs (spells/search.html → global-search.html)
 * 3. Fix 3r/index-v2.html styling inconsistencies
 */
const fs = require('fs');
const path = require('path');

const root = '.';
let stats = {
  dropdownAdded: 0,
  searchFixed: 0,
  threeRFixed: false,
  skipped: 0
};

function getAllHtmlFiles(dir) {
  let results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (item.isDirectory()) {
      if (item.name.startsWith('_') || item.name === 'node_modules') continue;
      results = results.concat(getAllHtmlFiles(path.join(dir, item.name)));
    } else if (item.name.endsWith('.html')) {
      results.push(path.join(dir, item.name));
    }
  }
  return results;
}

const allFiles = getAllHtmlFiles(root);
console.log(`Found ${allFiles.length} HTML files to process\n`);

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  const isSubdir = file.includes(path.sep);
  const prefix = isSubdir ? '../' : '';

  // === 1. Add dropdown to navbar ===
  if (content.includes('<div class="navbar-links"') && !content.includes('nav-dropdown')) {
    const dropdownHTML =
      '    <div class="nav-dropdown">\n' +
      '      <span class="drop-trigger">\u66F4\u591A\u89C4\u5219 \u25BE</span>\n' +
      '      <div class="nav-dropdown-content">\n' +
      '        <a href="' + prefix + 'rules-adventure.html">\uD83D\uDDFA\uFE0F \u5192\u9669</a>\n' +
      '        <a href="' + prefix + 'rules-planes.html">\uD83C\uDF0C \u4F4D\u9762\u4E0E\u5B87\u5B99\u5B66</a>\n' +
      '        <a href="' + prefix + 'rules-combat.html">\u2694\uFE0F \u6218\u6597\u8BE6\u8FF0</a>\n' +
      '        <a href="' + prefix + 'rules-deities.html">\uD83D\uDE4F \u795E\u7957\u4E0E\u9635\u8425</a>\n' +
      '        <a href="' + prefix + 'rules-companions.html">\uD83D\uDC3E \u4F19\u4F34\u7CFB\u7EDF</a>\n' +
      '        <a href="' + prefix + 'rules-variants.html">\uD83D\uDD04 \u89C4\u5219\u53D8\u4F53</a>\n' +
      '        <div class="drop-divider"></div>\n' +
      '        <a href="' + prefix + 'equipment/magic-items.html">\uD83D\uDC8E \u9B54\u6CD5\u7269\u54C1</a>\n' +
      '        <a href="' + prefix + 'domains/intro.html">\u2728 \u9886\u57DF\u7CFB\u7EDF</a>\n' +
      '        <a href="' + prefix + 'dm/intro.html">\uD83C\uDFB2 DM\u5DE5\u5177</a>\n' +
      '      </div>\n' +
      '    </div>';

    // Insert dropdown right before </div> that closes navbar-links
    // The pattern: find the 规则冲突 link, then insert after the next line
    const conflictPattern = /(<a href="[^"]*(?:3r\/index-v2\.html|3r%2Findex-v2\.html)"[^>]*>[^<]*<\/a>\s*\n)(\s*<a href="[^"]*conflicts\.html"[^>]*>[^<]*<\/a>)/;
    const match = content.match(conflictPattern);
    if (match) {
      // Insert dropdown after conflicts link
      const afterConflict = /(conflicts\.html"[^>]*>[^<]*<\/a>)/;
      content = content.replace(afterConflict, '$1\n' + dropdownHTML);
      stats.dropdownAdded++;
    } else {
      console.log(`  WARN: Could not find insertion point for dropdown in ${file}`);
    }
  }

  // === 2. Fix search URLs ===
  // Root-level pages that incorrectly use spells/search.html
  if (!isSubdir && content.includes("location.href='spells/search.html'")) {
    content = content.replace(/location\.href='spells\/search\.html'/g, "location.href='global-search.html'");
    stats.searchFixed++;
  }
  // Subdirectory pages that use ../spells/search.html → ../global-search.html
  if (isSubdir && content.includes("location.href='../spells/search.html'")) {
    content = content.replace(/location\.href='\.\.\/spells\/search\.html'/g, "location.href='../global-search.html'");
    stats.searchFixed++;
  }

  // === 3. Fix 3r/index-v2.html ===
  if (file.endsWith('3r' + path.sep + 'index-v2.html')) {
    // Add missing emoji to brand
    content = content.replace(
      '>D&D 3.5e 中文Wiki</div>',
      '>🐉 D&D 3.5e 中文Wiki</div>'
    );
    // Fix the active 3R link styling
    content = content.replace(
      /<a href="[^"]*3r\/index-v2\.html" class="active">3R拓展<\/a>/,
      '<a href="../3r/index-v2.html" class="active" style="color:#d4a017;font-weight:600;">⚡ 3R拓展</a>'
    );
    stats.threeRFixed = true;
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  } else {
    stats.skipped++;
  }
}

console.log('\n=== Results ===');
console.log(`Dropdown added to: ${stats.dropdownAdded} files`);
console.log(`Search URLs fixed: ${stats.searchFixed} files`);
console.log(`3R index fixed: ${stats.threeRFixed}`);
console.log(`Skipped (no changes): ${stats.skipped} files`);
