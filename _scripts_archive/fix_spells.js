// 用 vm 模块解析 JS 文件并添加 conflicts
const fs = require('fs');
const vm = require('vm');

const FILE = 'C:/Users/wyb/WorkBuddy/2026-06-20-01-52-30/dnd35-wiki-pro/js/spells-data.js';
let content = fs.readFileSync(FILE, 'utf8');

// 在沙箱中执行JS，获取 spells 数组
const sandbox = { window: {} };
vm.createContext(sandbox);

// 执行文件内容（定义变量）
try {
  vm.runInContext(content, sandbox);
} catch(e) {
  console.log('vm 执行失败：', e.message);
}

// 尝试获取法术数据
let spells = sandbox.window.spellsData || sandbox.SPELLS || sandbox.spellsData;
console.log('spells:', spells ? spells.length : 'undefined');

// 如果上面不行，直接提取数组
const arrStart = content.indexOf('[');
const arrEnd = content.lastIndexOf(']') + 1;
if (arrStart >= 0 && arrEnd > arrStart) {
  const arrText = content.substring(arrStart, arrEnd);
  try {
    // 尝试用 JSON.parse（如果格式是标准JSON）
    spells = JSON.parse(arrText);
    console.log('JSON.parse 成功：', spells.length);
  } catch(e1) {
    try {
      // 尝试用 eval
      spells = eval(arrText);
      console.log('eval 成功：', spells.length);
    } catch(e2) {
      console.log('解析失败：', e2.message);
    }
  }
}

if (!spells) {
  console.log('无法解析法术数据');
  process.exit(1);
}

console.log(`共 ${spells.length} 个法术`);

// 添加 conflicts
const newConflicts = {
  antimagic_field: [
    {
      point: "反魔法力场对魔法物品的影响",
      phbRule: "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
      controversy: "魔法武器在力场内是变'普通武器'还是完全消失？",
      suggestion: "严格PHB规则：魔法武器变普通武器（失去增强加值）。",
      source: "PHB / SRD / 3.5e FAQ"
    }
  ],
  animate_dead: [
    {
      point: "操控亡灵的HD上限与控制",
      phbRule: "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
      controversy: "亡灵是否有自己的意志？是否需要'邪恶'属性？",
      suggestion: "亡灵完全服从。善良角色施展可能违反职业守则。",
      source: "PHB p.199 / DMG"
    }
  ]
};

let modified = [];
for (const spell of spells) {
  if (newConflicts[spell.id] && !spell.conflicts) {
    spell.conflicts = newConflicts[spell.id];
    modified.push(spell.id);
  }
}

console.log('已添加：', modified);

// 写回（简单方法：重新生成整个文件）
// 先检查原文件的格式（是否用 const SPELLS = ...）
const constMatch = content.match(/(const|var|let)\s+(\w+)\s*=\s*\[/);
let varName = 'SPELLS';
if (constMatch) {
  varName = constMatch[2];
}

// 重新生成文件内容
const header = content.substring(0, arrStart);
const footer = content.substring(arrEnd);

// 生成数组文本（保持原格式：如果原格式用引号字段名，就用JSON格式；否则用JS格式）
// 简单处理：用 JSON.stringify 生成，然后手动调整格式
let arrText = JSON.stringify(spells, null, 2);

// 写回
const newContent = header + arrText + footer;
fs.writeFileSync(FILE, newContent, 'utf8');
console.log('写入完成，文件大小：', newContent.length);
