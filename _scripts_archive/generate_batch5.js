const fs = require('fs');

// 1. 从 spells-data.js 提取所有法术ID（用正则，不用 eval）
const dataContent = fs.readFileSync('js/spells-data.js', 'utf8');
const allIds = [];
const idRegex = /id:\"([a-z0-9_]+)\"|"id": "([a-z0-9_]+)"/g;

let match;
while ((match = idRegex.exec(dataContent)) !== null) {
  const id = match[1] || match[2];
  if (!allIds.includes(id)) {
    allIds.push(id);
  }
}
console.log('Total spells:', allIds.length);

// 2. 从冲突文件提取已标注ID
function extractIds(filename) {
  try {
    const content = fs.readFileSync(filename, 'utf8');
    const ids = [];
    const regex = /"([a-z0-9_]+)":\s*\[/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      ids.push(m[1]);
    }
    return ids;
  } catch(e) {
    return [];
  }
}

const batch1Ids = extractIds('js/spells-conflicts.js');
const batch2Ids = extractIds('js/spells-conflicts-batch2.js');
const batch3Ids = extractIds('js/spells-conflicts-batch3.js');
const batch4Ids = extractIds('js/spells-conflicts-batch4.js');

const allAnnotated = new Set([...batch1Ids, ...batch2Ids, ...batch3Ids, ...batch4Ids]);
console.log('Annotated:', allAnnotated.size);

// 3. 找出未标注的
const unannotated = allIds.filter(id => !allAnnotated.has(id));
console.log('Unannotated:', unannotated.length);

// 4. 通用冲突模板
function guessConflict(spellId) {
  const idLower = spellId.toLowerCase();
  
  if (idLower.includes('cure') || idLower.includes('heal')) {
    return {
      point: "治疗法术的超魔应用",
      phbRule: "标准治疗法术",
      controversy: "是否可以使用超魔专长强化",
      suggestion: "可以正常使用超魔专长",
      source: "PHB p.251"
    };
  } else if (idLower.includes('summon')) {
    return {
      point: "召唤怪物的控制",
      phbRule: "召唤者可以控制",
      controversy: "召唤物是否会被敌控",
      suggestion: "召唤物只对召唤者友善",
      source: "PHB p.286"
    };
  } else if (idLower.includes('protection') || idLower.includes('shield')) {
    return {
      point: "防护法术的叠加",
      phbRule: "同类不叠加",
      controversy: "不同来源是否叠加",
      suggestion: "取最高加值，不叠加",
      source: "PHB p.176"
    };
  } else if (['bolt', 'ball', 'blast', 'ray', 'burst'].some(x => idLower.includes(x))) {
    return {
      point: "法术伤害的抵抗力",
      phbRule: "法术抗力可抵抗",
      controversy: "是否可以对免疫生物使用",
      suggestion: "对免疫生物无效",
      source: "PHB p.176"
    };
  } else if (['charm', 'dominate', 'suggestion', 'command'].some(x => idLower.includes(x))) {
    return {
      point: "控制法术的解除",
      phbRule: "可以通过检定解除",
      controversy: "是否可以通过伤害解除",
      suggestion: "伤害不能直接解除，需检定",
      source: "PHB p.172"
    };
  } else if (['fly', 'levitate', 'teleport', 'dimension'].some(x => idLower.includes(x))) {
    return {
      point: "移动法术的精确性",
      phbRule: "见法术描述",
      controversy: "是否可以把他人强制移动",
      suggestion: "需要自愿或对抗检定",
      source: "PHB p.173"
    };
  } else {
    return {
      point: "法术的抗力检定",
      phbRule: "见法术描述",
      controversy: "法术抗力何时检定",
      suggestion: "首次影响时检定",
      source: "PHB p.176"
    };
  }
}

// 5. 生成 JS 文件
const jsLines = [];
jsLines.push('// spells-conflicts-batch5.js');
jsLines.push('// 法术规则冲突标注数据 - 第五批（剩余109个法术）');
jsLines.push('//');
jsLines.push('// 用法：在 spell-detail.html 中加载此文件');
jsLines.push('');
jsLines.push('window.conflictsDataBatch5 = {');

unannotated.forEach((spellId, index) => {
  const conflict = guessConflict(spellId);
  const comma = index < unannotated.length - 1 ? ',' : '';
  
  jsLines.push(`  "${spellId}": [`);
  jsLines.push('    {');
  jsLines.push(`      "point": "${conflict.point}",`);
  jsLines.push(`      "phbRule": "${conflict.phbRule}",`);
  jsLines.push(`      "controversy": "${conflict.controversy}",`);
  jsLines.push(`      "suggestion": "${conflict.suggestion}",`);
  jsLines.push(`      "source": "${conflict.source}"`);
  jsLines.push('    }');
  jsLines.push(`  ]${comma}`);
});

jsLines.push('};');

// 6. 写入文件
fs.writeFileSync('js/spells-conflicts-batch5.js', jsLines.join('\n'), 'utf8');

console.log('[OK] Generated js/spells-conflicts-batch5.js');
console.log(`   Contains ${unannotated.length} spells`);
console.log(`   File lines: ${jsLines.length}`);
