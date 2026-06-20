const fs = require('fs');
const path = require('path');

const FILE = 'C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro\\js\\spells-data.js';

// 读取文件
let content = fs.readFileSync(FILE, 'utf8');

// 提取数组文本（找到第一个 [ 和最后一个 ]）
const startBracket = content.indexOf('[');
const endBracket = content.lastIndexOf(']') + 1;

if (startBracket < 0 || endBracket <= 0) {
  console.log('无法找到数组');
  process.exit(1);
}

const arrText = content.substring(startBracket, endBracket);

// 用 eval 解析数组（安全环境）
const data = eval(arrText);
console.log(`解析到 ${data.length} 个法术`);

// 添加 conflicts
const newConflicts = {
  antimagic_field: [
    {
      point: "反魔法力场对魔法物品的影响",
      phbRule: "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
      controversy: "魔法武器在力场内是变'普通武器'还是完全消失？'+1长剑'变'1d8伤害长剑'还是'1d8伤害普通长剑'？",
      suggestion: "严格PHB规则：魔法武器变普通武器（失去增强加值，但基础伤害骰保留）。",
      source: "PHB / SRD / 3.5e FAQ v2.0"
    }
  ],
  animate_dead: [
    {
      point: "操控亡灵的HD上限与控制",
      phbRule: "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
      controversy: "亡灵是否有自己的意志？是否需要'邪恶'属性？",
      suggestion: "亡灵完全服从（无意志）。善良角色施展可能违反职业守则（DM判定）。",
      source: "PHB p.199 / DMG"
    }
  ]
};

let modified = [];
for (const spell of data) {
  if (newConflicts[spell.id] && !spell.conflicts) {
    spell.conflicts = newConflicts[spell.id];
    modified.push(spell.id);
  }
}

console.log('已添加 conflicts：', modified);

// 写回（保持原格式）
// 问题：原文件格式不统一，直接用 JSON.stringify 会改变格式
// 解决：在原文件中做字符串替换

// 对于每个修改的法术，在原文中找到对应位置插入 conflicts
for (const spell_id of modified) {
  const spell = data.find(s => s.id === spell_id);
  
  // 在原文中找到这个法术的对象
  // 构造 conflicts 的文本
  const conflictsText = ',\n  "conflicts": ' + JSON.stringify(spell.conflicts, null, 2).split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n');
  
  // 找到法术对象的结束位置
  const idPattern = spell_id.includes('"') ? spell_id : '"' + spell_id + '"';
  let searchStr = '"id": ' + idPattern;
  let idx = content.indexOf(searchStr);
  if (idx < 0) {
    searchStr = 'id:"' + spell_id + '"';
    idx = content.indexOf(searchStr);
  }
  
  if (idx < 0) {
    console.log(`找不到法术 ${spell_id}`);
    continue;
  }
  
  // 从 idx 开始找对象的结束 }
  let depth = 0;
  let pos = idx;
  // 找到 {
  while (pos < content.length && content[pos] !== '{') pos++;
  depth = 1;
  pos++;
  
  while (pos < content.length && depth > 0) {
    const ch = content[pos];
    if (ch === '{') depth++;
    else if (ch === '}') depth--;
    pos++;
  }
  
  const endPos = pos; // 指向 } 后面的位置
  
  // 在 endPos 之前插入 conflictsText
  // 但需要在 } 之前插入，即在 arrText 中的 } 之前
  // endPos 是指向 } 后面位置的，所以 } 在 endPos-1
  const beforeEnd = content.substring(0, endPos - 1);
  const afterEnd = content.substring(endPos - 1);
  
  // beforeEnd 的末尾可能有空白，需要去掉
  const trimmed = beforeEnd.trimEnd();
  const spaces = beforeEnd.substring(trimmed.length);
  
  content = trimmed + conflictsText + '\n' + spaces + afterEnd;
  
  console.log(`已写入 ${spell_id}`);
}

// 写回文件
fs.writeFileSync(FILE, content, 'utf8');
console.log('完成！');
