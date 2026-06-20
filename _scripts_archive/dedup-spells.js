// 法术数据去重脚本
// 规则：以英文名（小写、去空格）为唯一键，保留下划线格式 ID 的条目
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');

// ===== 1. 读取 spells-data.js =====
const spellsDataContent = fs.readFileSync(path.join(projectRoot, 'js/spells-data.js'), 'utf8');
const spellsMatch = spellsDataContent.match(/const SPELLS = (\[[\s\S]*?\]);/);
if (!spellsMatch) { console.error('无法解析 SPELLS'); process.exit(1); }
const spells = eval(spellsMatch[1]);

// ===== 2. 读取 global-search-data.js =====
const searchContent = fs.readFileSync(path.join(projectRoot, 'js/global-search-data.js'), 'utf8');

// ===== 3. 去重 =====
function normalizeEn(nameEn) {
  return nameEn.toLowerCase().trim().replace(/['']/g, "'");
}

// 按英文名分组
const groups = {};
spells.forEach((spell, idx) => {
  const key = normalizeEn(spell.nameEn);
  if (!groups[key]) groups[key] = [];
  groups[key].push({ ...spell, _idx: idx });
});

// 评分函数：分数越高越优先保留
function scoreEntry(s) {
  let score = 0;
  // 下划线 ID 优先（无连字符）
  if (!s.id.includes('-')) score += 100;
  // 无 _N 后缀
  if (!/_[0-9]+$/.test(s.id)) score += 50;
  // 无 _full 后缀
  if (!s.id.endsWith('_full')) score += 25;
  // 有完整描述
  if (s.desc && s.desc.length > 20) score += 10;
  // 来源为 PHB 优先
  if (s.source === 'PHB') score += 5;
  // 有更多字段
  const fields = ['components', 'castingTime', 'range', 'target', 'duration', 'savingThrow', 'spellResist', 'material', 'desc'];
  fields.forEach(f => { if (s[f]) score += 1; });
  // 正确的环级（对比标准 PHB，某些 _5 后缀是错误环级）
  // searing_light 应该是 3 环
  return score;
}

const kept = [];
const removed = [];
const dedupLog = [];

Object.entries(groups).forEach(([key, entries]) => {
  if (entries.length === 1) {
    kept.push(entries[0]);
    return;
  }
  
  // 多条目：选评分最高的
  entries.sort((a, b) => scoreEntry(b) - scoreEntry(a));
  const winner = entries[0];
  kept.push(winner);
  
  entries.slice(1).forEach(loser => {
    removed.push(loser);
    dedupLog.push({
      kept: winner.id,
      removed: loser.id,
      nameEn: winner.nameEn,
      nameZh: winner.nameZh,
      reason: loser.id.includes('-') ? '连字符ID' : 
              /_[0-9]+$/.test(loser.id) || loser.id.endsWith('_full') ? '后缀副本' :
              '重复条目'
    });
  });
});

// ===== 4. 修复已知拼写错误 =====
const spellingFixes = {
  'grater_teleport': 'greater_teleport',    // grater → greater
  'explosive_run': 'explosive_runes',        // run → runes
  'stone_skin': 'stoneskin',                 // DND 标准是 stoneskin（一个词）
  'hez': 'heal',                             // 明显拼写错误
};

const idFixLog = [];
kept.forEach(s => {
  if (spellingFixes[s.id]) {
    idFixLog.push(`${s.id} → ${spellingFixes[s.id]}`);
    s.id = spellingFixes[s.id];
  }
  // 修复 _0 后缀（0 环法术的多余后缀）
  if (/^(.+)_0$/.test(s.id)) {
    const baseId = s.id.replace(/_0$/, '');
    // 检查是否已经有同名无后缀的条目
    const existing = kept.find(x => x.id === baseId && x !== s);
    if (!existing) {
      s.id = baseId;
    }
  }
});

// 修复中文译名不一致（统一到 PHB 标准译名）
const nameZhFixes = {
  'cure_light_wounds': '治疗轻伤',
  'cure_moderate_wounds': '治疗中度伤',
  'cure_serious_wounds': '治疗重伤',
  'cure_critical_wounds': '治疗危重伤',
  'cure_moderate_wounds_mass': '群体治疗中度伤',
  'cure_light_wounds_mass': '群体治疗轻伤',
  'heal_mass': '群体治疗术',
  'heal': '医疗术',
  'inflict_light_wounds': '造成轻伤',
  'inflict_moderate_wounds': '造成中度伤',
  'inflict_serious_wounds': '造成重伤',
  'inflict_critical_wounds': '造成危重伤',
  'enlarge_person': '人类变大',
  'reduce_person': '人类变小',
  'stoneskin': '石肤术',
  'power_word_stun': '律令震慑',
  'power_word_blind': '律令目盲',
  'power_word_kill': '律令死亡',
  'bulls_strength': '公牛之力',
  'cats_grace': '猫之优雅',
  'bears_endurance': '熊之坚韧',
  'eagles_splendor': '鹰之威仪',
  'foxs_cunning': '狐之狡黠',
  'owls_wisdom': '枭之智慧',
  'protection_from_energy': '防护能量',
  'animate_dead': '操纵死尸',
  'break_enchantment': '破除结界',
  'geas_quest': '指示术/探索任务',
  'live_oak': '活化橡树',
  'fire_seeds': '火种术',
  'incendiary_cloud': '焚云术',
  'holy_aura': '神圣灵光',
  'unholy_aura': '邪秽灵光',
  'freedom_of_movement': '行动自如',
  'discern_lies': '辨知谎言',
  'prismatic_sphere': '虹光法球',
  'unseen_servant': '隐形仆役',
  'true_strike': '克敌机先',
  'silent_image': '无声幻影',
  'mount_spell': '召唤坐骑',
  'mount': '召唤坐骑',
  'flare': '闪光术',
  'searing_light': '灼热光辉',
  'explosive_runes': '爆裂符文',
  'greater_teleport': '高等传送术',
};

kept.forEach(s => {
  if (nameZhFixes[s.id]) {
    s.nameZh = nameZhFixes[s.id];
  }
});

// 按环级和英文名排序
kept.sort((a, b) => {
  if (a.level !== b.level) return a.level - b.level;
  return a.nameEn.localeCompare(b.nameEn);
});

// ===== 5. 输出报告 =====
console.log('===== 去重报告 =====\n');
console.log(`原始条目: ${spells.length}`);
console.log(`移除条目: ${removed.length}`);
console.log(`保留条目: ${kept.length}`);
console.log(`\n拼写修复: ${idFixLog.length}`);
idFixLog.forEach(l => console.log(`  ${l}`));

console.log(`\n去重明细 (${dedupLog.length} 条):`);
const byReason = {};
dedupLog.forEach(d => {
  byReason[d.reason] = (byReason[d.reason] || 0) + 1;
});
Object.entries(byReason).forEach(([r, c]) => console.log(`  ${r}: ${c}`));

// ===== 6. 写入新文件 =====
function formatSpell(s) {
  const clean = { ...s };
  delete clean._idx;
  const lines = ['  {'];
  const keys = ['id', 'nameEn', 'nameZh', 'level', 'school', 'components', 'castingTime', 'range', 'target', 'duration', 'savingThrow', 'spellResist', 'desc', 'material', 'source'];
  keys.forEach(k => {
    if (clean[k] !== undefined) {
      const val = typeof clean[k] === 'number' ? clean[k] : JSON.stringify(clean[k]);
      lines.push(`    "${k}": ${val},`);
    }
  });
  // 移除最后一个逗号
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push('  }');
  return lines.join('\n');
}

const newSpellsJs = `const SPELLS = [\n${kept.map(formatSpell).join(',\n')}\n];\n`;
fs.writeFileSync(path.join(projectRoot, 'js/spells-data.js'), newSpellsJs, 'utf8');
console.log(`\n✅ 已写入 js/spells-data.js (${kept.length} 条)`);

// ===== 7. 同步 global-search-data.js =====
// 使用行号定位法术数组区间，更稳健
const searchLines = searchContent.split('\n');
let spellsStartLine = -1;
let spellsEndLine = -1;
let bracketDepth = 0;
let inSpellsArray = false;

for (let i = 0; i < searchLines.length; i++) {
  const line = searchLines[i];
  if (spellsStartLine === -1 && /^\s*spells:\s*\[/.test(line)) {
    spellsStartLine = i;
    inSpellsArray = true;
    bracketDepth = 1;
    // 检查是否同一行结束
    for (const ch of line.substring(line.indexOf('[') + 1)) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }
    if (bracketDepth === 0) { spellsEndLine = i; break; }
    continue;
  }
  if (inSpellsArray) {
    for (const ch of line) {
      if (ch === '[') bracketDepth++;
      if (ch === ']') bracketDepth--;
    }
    if (bracketDepth === 0) { spellsEndLine = i; break; }
  }
}

console.log(`\nglobal-search-data.js 法术数组: 行 ${spellsStartLine+1} ~ ${spellsEndLine+1}`);

const searchSpellEntries = kept.map(s => {
  return `  {\n    "id": "${s.id}",\n    "nameZh": "${s.nameZh}",\n    "nameEn": "${s.nameEn}",\n    "type": "spell",\n    "level": ${s.level},\n    "school": "${s.school}",\n    "source": "${s.source}",\n    "url": "spells/level${s.level}.html"\n  }`;
});

if (spellsStartLine >= 0 && spellsEndLine >= 0) {
  const before = searchLines.slice(0, spellsStartLine);
  const after = searchLines.slice(spellsEndLine + 1);
  const newSpellsSection = `  // ===== 法术 (Spells) - 完整数据（已去重） =====\n  spells: [\n${searchSpellEntries.join(',\n')}\n  ],`;
  const newSearchJs = [...before, newSpellsSection, ...after].join('\n');
  fs.writeFileSync(path.join(projectRoot, 'js/global-search-data.js'), newSearchJs, 'utf8');
  console.log(`✅ 已同步 js/global-search-data.js (法术部分 ${searchSpellEntries.length} 条)`);
} else {
  console.log(`⚠ 无法定位 global-search-data.js 中的法术数组，请手动同步`);
}

// ===== 8. 最终统计 =====
const levelCounts = {};
kept.forEach(s => { levelCounts[s.level] = (levelCounts[s.level] || 0) + 1; });
console.log(`\n===== 最终统计 =====`);
console.log(`总计: ${kept.length} 条唯一法术`);
for (let i = 0; i <= 9; i++) {
  console.log(`  ${i}环: ${levelCounts[i] || 0}`);
}
