const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, text) => fs.writeFileSync(path.join(root, file), text, 'utf8');

const SPELLS = new Function(`${read('js/spells-data.js')}; return SPELLS;`)();
const classData = JSON.parse(read('data/huiji-class-spell-lists.json'));
const classNames = {
  bard: { zh: '吟游诗人', en: 'Bard', file: 'class-bard.html' },
  cleric: { zh: '牧师', en: 'Cleric', file: 'class-cleric.html' },
  druid: { zh: '德鲁伊', en: 'Druid', file: 'class-druid.html' },
  paladin: { zh: '圣武士', en: 'Paladin', file: 'class-paladin.html' },
  ranger: { zh: '巡林客', en: 'Ranger', file: 'class-ranger.html' },
  sorcererWizard: { zh: '术士/法师', en: 'Sorcerer/Wizard', file: 'class-sorcerer-wizard.html' },
};

const arcaneKeys = new Set(['bard', 'sorcererWizard']);
const divineKeys = new Set(['cleric', 'druid', 'paladin', 'ranger']);
const slug = (value) => String(value || '')
  .toLowerCase()
  .replace(/&/g, ' and ')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim()
  .replace(/\s+/g, ' ');

const spellByName = new Map();
for (const spell of SPELLS) {
  const key = slug(spell.nameEn);
  if (!spellByName.has(key)) spellByName.set(key, spell);
}

const aliases = new Map([
  ['deeper darkness', 'deep darkness'],
  ['mass cure serious wounds', 'cure serious wounds mass'],
  ['mass inflict serious wounds', 'inflict serious wounds mass'],
  ['invisibility greater', 'greater invisibility'],
  ['scrying greater', 'greater scrying'],
  ['planar ally lesser', 'lesser planar ally'],
  ['restoration greater', 'greater restoration'],
  ['cure critical wounds mass', 'mass cure critical wounds'],
  ['planar ally greater', 'greater planar ally'],
  ['magic fang greater', 'greater magic fang'],
  ['planar binding lesser', 'lesser planar binding'],
  ['transformation', 'tenser s transformation'],
  ['invisibility mass', 'mass invisibility'],
  ['teleport greater', 'greater teleport'],
]);

function findSpell(nameEn) {
  const key = slug(nameEn);
  return spellByName.get(key) || spellByName.get(aliases.get(key));
}

for (const spell of SPELLS) {
  delete spell.classLevels;
  delete spell.arcane;
  delete spell.divine;
}

const missing = { generatedAt: new Date().toISOString(), count: 0, byClass: {} };
let matched = 0;
for (const page of classData.pages) {
  const rows = [];
  for (const row of page.rows) {
    const spell = findSpell(row.nameEn);
    if (spell) {
      spell.classLevels ||= {};
      spell.classLevels[page.key] = row.level;
      matched += 1;
    } else {
      rows.push({ level: row.level, nameZh: row.nameZh, nameEn: row.nameEn, school: row.school });
    }
  }
  if (rows.length) {
    missing.byClass[page.key] = { count: rows.length, items: rows };
    missing.count += rows.length;
  }
}

for (const spell of SPELLS) {
  if (!spell.classLevels) continue;
  const ordered = {};
  for (const key of Object.keys(classNames)) {
    if (Object.hasOwn(spell.classLevels, key)) ordered[key] = spell.classLevels[key];
  }
  spell.classLevels = ordered;

  const arcane = {};
  const divine = {};
  for (const [key, level] of Object.entries(ordered)) {
    if (arcaneKeys.has(key)) arcane[classNames[key].zh] = level;
    if (divineKeys.has(key)) divine[classNames[key].zh] = level;
  }
  if (Object.keys(arcane).length) spell.arcane = arcane;
  if (Object.keys(divine).length) spell.divine = divine;
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const pageStyle = '.class-spell-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:18px 0}.summary-card{background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius);padding:12px}.summary-card strong{display:block;font-size:22px;color:var(--text-heading)}.level-nav{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 22px}.level-nav a{border:1px solid var(--border-light);border-radius:var(--radius);padding:6px 10px;text-decoration:none}.spell-table{width:100%;border-collapse:collapse;margin:12px 0 24px}.spell-table th{background:var(--bg-table-head);color:var(--text-heading);border:1px solid var(--border-main);padding:8px 10px;text-align:left}.spell-table td{border:1px solid var(--border-light);padding:8px 10px;vertical-align:top}.spell-table tr:nth-child(even){background:var(--bg-table-stripe)}.name-en{display:block;color:var(--text-subtle);font-size:13px;margin-top:2px}.missing-tag{display:inline-block;margin-top:4px;border:1px solid #f4d03f;background:#fef9e7;color:#9a6a00;border-radius:999px;padding:1px 8px;font-size:12px}.spell-level-section h2 small{font-size:13px;color:var(--text-subtle);font-weight:400}';

function classNav(activeKey) {
  return Object.entries(classNames)
    .map(([key, info]) => `<a href="${info.file}"${key === activeKey ? ' class="active"' : ''}>${esc(info.zh)}法术</a>`)
    .join('') + '<a href="class-missing.html">待补条目</a>';
}

function shell({ title, activeKey, sidebar, content }) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${esc(title)} - D&D 3.5e 中文Wiki</title><link rel="stylesheet" href="../style.css"><style>${pageStyle}</style></head>
<body><nav class="navbar"><div class="navbar-brand">D&D 3.5e 中文Wiki</div><div class="navbar-links" id="mainNav"><a href="../index.html">首页</a><a href="../rules.html">核心规则</a><a href="intro.html" class="active">法术</a><a href="../classes/intro.html">职业</a><a href="../rules-phb.html">PHB矩阵</a></div><div class="navbar-search"><input id="searchInput" placeholder="搜索所有内容..." onkeydown="if(event.key==='Enter')location.href='../global-search.html?q='+encodeURIComponent(this.value)"><button onclick="location.href='../global-search.html?q='+encodeURIComponent(document.getElementById('searchInput').value)">搜索</button></div><button class="mobile-menu-btn" onclick="document.getElementById('mainNav').classList.toggle('mobile-open')" aria-label="菜单">☰</button></nav>
<div class="layout"><aside class="sidebar">${sidebar || `<div class="sidebar-section"><div class="sidebar-title">职业法术</div>${classNav(activeKey)}</div><div class="sidebar-section"><div class="sidebar-title">相关页面</div><a href="intro.html">法术总览</a><a href="search.html">法术搜索</a><a href="../rules-magic-phb.html#spell-lists">PHB法术列表入口</a></div>`}</aside>
<main class="main-content">${content}</main></div><script src="../js/search.js"></script></body>
</html>
`;
}

function renderClassPage(page) {
  const info = classNames[page.key];
  const groups = new Map();
  for (const row of page.rows) {
    if (!groups.has(row.level)) groups.set(row.level, []);
    groups.get(row.level).push(row);
  }
  const localCount = page.rows.length - (missing.byClass[page.key]?.count || 0);
  const levelNav = [...groups.keys()].sort((a, b) => a - b).map((level) => `<a href="#level-${level}">${level}级</a>`).join('');
  const sections = [...groups.entries()].sort((a, b) => a[0] - b[0]).map(([level, rows]) => {
    const body = rows.map((row) => {
      const spell = findSpell(row.nameEn);
      if (spell) {
        return `<tr><td><a href="spell-detail.html?id=${esc(spell.id)}"><strong>${esc(row.nameZh || spell.nameZh)}</strong><br><span class="name-en">${esc(row.nameEn || spell.nameEn)}</span></a></td><td>${esc(row.school || spell.school || '')}</td><td>已匹配本地法术</td></tr>`;
      }
      return `<tr><td><strong>${esc(row.nameZh)}</strong><br><span class="name-en">${esc(row.nameEn)}</span><span class="missing-tag">待补条目</span></td><td>${esc(row.school || '')}</td><td>本地尚无详情页</td></tr>`;
    }).join('\n');
    return `<section class="spell-level-section" id="level-${level}"><h2>${esc(info.zh)}${level}级法术 <small>${rows.length}项</small></h2><table class="spell-table"><thead><tr><th>法术</th><th>学派</th><th>本地状态</th></tr></thead><tbody>${body}</tbody></table></section>`;
  }).join('\n');

  const content = `<div class="breadcrumb"><a href="../index.html">首页</a> &gt; <a href="intro.html">法术</a> &gt; <span>${esc(info.zh)}法术</span></div><h1>${esc(info.zh)}法术</h1><p>本页按灰机 DND3R《玩家手册》职业法术列表结构整理，只抽取法术名、英文名、学派和环级映射；法术说明仍以本地法术详情页为准。</p><div class="class-spell-summary"><div class="summary-card"><strong>${page.rows.length}</strong><span>列表记录</span></div><div class="summary-card"><strong>${localCount}</strong><span>已匹配本地条目</span></div><div class="summary-card"><strong>${missing.byClass[page.key]?.count || 0}</strong><span>待补法术条目</span></div></div><div class="level-nav">${levelNav}</div>${sections}`;
  return shell({ title: `${info.zh}法术`, activeKey: page.key, content });
}

function renderMissingPage() {
  const sidebar = `<div class="sidebar-section"><div class="sidebar-title">职业法术</div>${Object.values(classNames).map((info) => `<a href="${info.file}">${esc(info.zh)}法术</a>`).join('')}<a href="class-missing.html" class="active">待补条目</a></div>`;
  const blocks = Object.entries(classNames).map(([key, info]) => {
    const items = missing.byClass[key]?.items || [];
    const rows = items.length
      ? items.map((row) => `<tr><td>${row.level}</td><td><strong>${esc(row.nameZh)}</strong><br><span class="name-en">${esc(row.nameEn)}</span></td><td>${esc(row.school || '')}</td></tr>`).join('\n')
      : '<tr><td colspan="3">无待补条目</td></tr>';
    return `<section class="spell-level-section"><h2>${esc(info.zh)} <small>${items.length}项</small></h2><table class="spell-table"><thead><tr><th>等级</th><th>法术</th><th>学派</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join('\n');
  const content = `<div class="breadcrumb"><a href="../index.html">首页</a> &gt; <a href="intro.html">法术</a> &gt; <span>待补条目</span></div><h1>待补职业法术条目</h1><p>本页列出灰机职业法术表中仍未匹配到本地详情页的项目，用作后续逐项补齐清单。</p><div class="class-spell-summary"><div class="summary-card"><strong>${missing.count}</strong><span>总待补条目</span></div><div class="summary-card"><strong>${matched}</strong><span>已匹配记录</span></div></div>${blocks}`;
  return shell({ title: '待补职业法术条目', sidebar, content });
}

write('js/spells-data.js', `const SPELLS = ${JSON.stringify(SPELLS, null, 2)};\n`);
write('data/huiji-class-spell-missing.json', `${JSON.stringify(missing, null, 2)}\n`);
for (const page of classData.pages) write(`spells/${classNames[page.key].file}`, renderClassPage(page));
write('spells/class-missing.html', renderMissingPage());

const GLOBAL_SEARCH_DATA = new Function(`${read('js/global-search-data.js')}; return GLOBAL_SEARCH_DATA;`)();
const spellEntries = SPELLS.map((spell) => ({
  id: spell.id,
  nameZh: spell.nameZh,
  nameEn: spell.nameEn,
  type: 'spell',
  level: spell.level ?? null,
  school: spell.school || '',
  source: spell.source || '',
  url: `spells/spell-detail.html?id=${spell.id}`,
}));
const classEntries = Object.entries(classNames).map(([key, info]) => ({
  id: `class_spells_${key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)}`,
  nameZh: `${info.zh}法术`,
  nameEn: `${info.en} Spells`,
  type: 'spell_list',
  level: null,
  school: '职业法术',
  source: 'PHB',
  url: `spells/${info.file}`,
}));
classEntries.push({
  id: 'class_spells_missing',
  nameZh: '待补职业法术条目',
  nameEn: 'Missing Class Spell Details',
  type: 'spell_list',
  level: null,
  school: '职业法术',
  source: 'PHB',
  url: 'spells/class-missing.html',
});
GLOBAL_SEARCH_DATA.spells = [...spellEntries, ...classEntries];
write('js/global-search-data.js', `const GLOBAL_SEARCH_DATA = ${JSON.stringify(GLOBAL_SEARCH_DATA, null, 2)};\n`);

console.log(JSON.stringify({
  spells: SPELLS.length,
  matched,
  missing: missing.count,
  byClass: Object.fromEntries(Object.entries(missing.byClass).map(([key, value]) => [key, value.count])),
  searchSpells: GLOBAL_SEARCH_DATA.spells.length,
}, null, 2));
