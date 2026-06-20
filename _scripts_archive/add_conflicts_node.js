// Node.js 脚本：给指定法术添加 conflicts 字段
// 用法：node add_conflicts_node.js

const fs = require('fs');
const path = require('path');

const FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js";

// 读取文件
let content = fs.readFileSync(FILE, 'utf8');

// 我们需要解析 spells-data.js 中的数据
// 文件格式：const SPELLS = [ ... ]; 或 var spellsData = [ ... ];
// 我们用 eval 来解析（在安全环境下）
// 但更安全的做法是：把文件内容包装成 JS 模块来解析

// 方法：在内容前后加括号使其变成表达式，然后用 Function 解析
let data;
try {
  // 尝试解析：文件可能直接是数组，或者是 const SPELLS = [...]
  // 我们用正则提取数组部分
  const match = content.match(/\[\s*\{/);
  if (!match) {
    console.log("无法找到数组开始位置");
    process.exit(1);
  }
  
  // 找到数组开始位置，然后从那里解析
  // 但更简单的方法是：把内容变成一个 JS 表达式
  const wrapped = content + '; return SPELLS;';
  const fn = new Function(wrapped);
  data = fn();
  console.log(`成功解析 ${data.length} 个法术`);
} catch(e) {
  console.log("解析失败：", e.message);
  process.exit(1);
}

// 冲突数据
const newConflicts = {
  "antimagic_field": [
    {
      point: "反魔法力场对魔法物品的影响",
      phbRule: "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
      controversy: "魔法武器在力场内是变'普通武器'还是完全消失？'+1长剑'变'1d8伤害长剑'还是'1d8伤害普通长剑'？",
      suggestion: "严格PHB规则：魔法武器变普通武器（失去增强加值，但基础伤害骰保留）。",
      source: "PHB / SRD / 3.5e FAQ v2.0"
    },
    {
      point: "反魔法力场与法术抗力",
      phbRule: "法术抗力在反魔法力场内无效（因为所有魔法效果被抑制）。",
      controversy: "如果生物在力场外有魔法效果（如增益法术），进入力场后效果是否被抑制？",
      suggestion: "进入力场的生物的魔法效果被抑制；离开力场后恢复。",
      source: "PHB / SRD"
    }
  ],
  "animate_dead": [
    {
      point: "操控亡灵的HD上限与控制",
      phbRule: "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
      controversy: "亡灵是否有自己的意志？是否需要'邪恶'属性？",
      suggestion: "亡灵完全服从（无意志）。善良角色施展可能违反职业守则（DM判定）。",
      source: "PHB p.199 / DMG"
    }
  ]
};

// 添加 conflicts
let modified = [];
for (const spell of data) {
  if (newConflicts[spell.id]) {
    if (!spell.conflicts) {
      spell.conflicts = newConflicts[spell.id];
      modified.push(spell.id);
    }
  }
}

console.log("已添加 conflicts 的法术：", modified);

// 写回文件
// 需要把 data 转回 JS 格式
// 问题：原文件格式不统一（有的字段名带引号，有的不带）
// 我们需要保持原格式

// 简单方法：在原文件中做字符串替换
// 对每个添加了 conflicts 的法术，在文件中找到它并替换

for (const spell_id of modified) {
  const spell = data.find(s => s.id === spell_id);
  
  // 在文件中找到这个法术的位置
  // 构造 conflicts 的 JS 文本
  const confText = '\n    conflicts: ' + JSON.stringify(spell.conflicts, null, 4)
    .replace(/\n/g, '\n    ')  // 缩进
    + '\n  ';
  
  // 找到法术对象在文件中的位置并替换
  // 找到 }, 之前（对象结束位置）
  const idPattern = JSON.stringify(spell_id);
  const searchPattern = `"id": ${idPattern}`;
  let idx = content.indexOf(searchPattern);
  if (idx < 0) {
    // 尝试不带引号的格式
    const searchPattern2 = `id:"${spell_id}"`;
    idx = content.indexOf(searchPattern2);
    if (idx < 0) {
      console.log(`找不到法术 ${spell_id}`);
      continue;
    }
  }
  
  // 从 idx 开始找对象的结束 }
  let depth = 0;
  let inStr = false;
  let pos = idx;
  // 先找到 { 
  while (pos < content.length && content[pos] !== '{') pos++;
  depth = 1;
  pos++;
  while (pos < content.length && depth > 0) {
    const ch = content[pos];
    if (ch === '"' && !inStr) { inStr = true; pos++; continue; }
    if (ch === '"' && inStr) { inStr = false; pos++; continue; }
    if (!inStr) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
    }
    pos++;
  }
  // pos 现在是 } 的下一个位置
  const endPos = pos - 1; // } 的位置
  
  // 在 endPos 之前插入 conflicts
  // 但需要先加逗号
  let insertPos = endPos;
  while (insertPos > idx && content[insertPos-1] === ' ') insertPos--;
  
  // 检查前一个字符是否是换行
  if (content[insertPos-1] === '\n') insertPos--;
  
  // 插入
  const before = content.substring(0, insertPos);
  const after = content.substring(insertPos);
  
  // 在 before 末尾加逗号（如果需要）
  let newBefore = before;
  if (!newBefore.endsWith(',') && !newBefore.endsWith(',\n')) {
    newBefore = newBefore + ',\n';
  }
  
  content = newBefore + '    conflicts: ' + JSON.stringify(spell.conflicts, null, 2).replace(/\n/g, '\n    ') + '\n  ' + after;
  
  console.log(`已写入 conflicts → ${spell_id}`);
}

// 写回
fs.writeFileSync(FILE, content, 'utf8');
console.log("完成！");
