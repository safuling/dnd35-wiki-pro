const fs = require('fs');

// Load all spells
const lines = fs.readFileSync('all_spells.txt', 'utf8').split('\n');
const idToName = {};
const nameToId = {};
lines.forEach(line => {
  const parts = line.split(' | ');
  if (parts.length >= 2) {
    const id = parts[0];
    const en = parts[1];
    idToName[id] = en;
    nameToId[en.toLowerCase()] = id;
  }
});

function searchId(enName) {
  const key = enName.toLowerCase();
  // 策略1: 直接匹配
  if (nameToId[key]) return nameToId[key];
  // 策略2: 包含匹配
  for (const [en, id] of Object.entries(nameToId)) {
    if (en.includes(key) || key.includes(en)) return id;
  }
  return null;
}

// 22个领域法术（正确的英文名称）
const DOMAIN_SPELLS = {
  "气":   [ "Obscuring Mist","Wind Wall","Gaseous Form","Air Walk","Control Winds","Chain Lightning","Control Weather","Whirlwind","Elemental Swarm" ],
  "动物": [ "Calm Animals","Hold Animal","Dominate Animal","Summon Nature's Ally IV","Commune with Nature","Antilife Shell","Animal Shapes","Summon Nature's Ally VIII","Shapechange" ],
  "混乱": [ "Protection from Law","Shatter","Magic Circle against Law","Chaos Hammer","Dispel Law","Animate Objects","Word of Chaos","Cloak of Chaos","Summon Monster IX" ],
  "死亡": [ "Cause Fear","Death Knell","Animate Dead","Death Ward","Slay Living","Create Undead","Destruction","Create Greater Undead","Wail of the Banshee" ],
  "破坏": [ "Inflict Light Wounds","Shatter","Contagion","Inflict Critical Wounds","Inflict Light Wounds, Mass","Harm","Disintegrate","Earthquake","Implosion" ],
  "土":   [ "Magic Stone","Soften Earth and Stone","Stone Shape","Spike Stones","Wall of Stone","Stoneskin","Earthquake","Iron Body","Elemental Swarm" ],
  "邪恶": [ "Protection from Good","Desecrate","Magic Circle against Good","Unholy Blight","Dispel Good","Create Undead","Blasphemy","Unholy Aura","Summon Monster IX" ],
  "火":   [ "Burning Hands","Produce Flame","Resist Energy","Wall of Fire","Fire Shield","Fire Seeds","Fire Storm","Incendiary Cloud","Elemental Swarm" ],
  "善良": [ "Protection from Evil","Aid","Magic Circle against Evil","Holy Smite","Dispel Evil","Blade Barrier","Holy Word","Holy Aura","Summon Monster IX" ],
  "治疗": [ "Cure Light Wounds","Cure Moderate Wounds","Cure Serious Wounds","Cure Critical Wounds","Cure Light Wounds, Mass","Heal","Regenerate","Cure Critical Wounds, Mass","Heal, Mass" ],
  "知识": [ "Detect Secret Doors","Detect Thoughts","Clairaudience/Clairvoyance","Divination","True Seeing","Find the Path","Legend Lore","Discern Location","Foresight" ],
  "守序": [ "Protection from Chaos","Calm Emotions","Magic Circle against Chaos","Order's Wrath","Dispel Chaos","Hold Monster","Dictum","Shield of Law","Summon Monster IX" ],
  "幸运": [ "Entropic Shield","Aid","Protection from Energy","Freedom of Movement","Break Enchantment","Mislead","Spell Turning","Moment of Prescience","Miracle" ],
  "魔法": [ "Magic Aura","Identify","Dispel Magic","Imbue with Spell Ability","Spell Resistance","Antimagic Field","Spell Turning","Protection from Spells","Mage's Disjunction" ],
  "植物": [ "Entangle","Bark-skin","Plant Growth","Command Plants","Wall of Thorns","Repel Wood","Animate Plants","Control Plants","Shambler" ],
  "防护": [ "Sanctuary","Shield Other","Protection from Energy","Spell Immunity","Spell Resistance","Antimagic Field","Repulsion","Mind Blank","Prismatic Sphere" ],
  "力量": [ "Enlarge Person","Bull's Strength","Magic Vestment","Spell Immunity","Righteous Might","Stoneskin","Grasping Hand","Clenched Fist","Crushing Hand" ],
  "太阳": [ "Endure Elements","Heat Metal","Searing Light","Fire Shield","Flame Strike","Fire Seeds","Sunbeam","Sunburst","Prismatic Sphere" ],
  "旅行": [ "Longstrider","Locate Object","Fly","Dimension Door","Teleport","Find the Path","Teleport, Greater","Phase Door","Astral Projection" ],
  "诡术": [ "Disguise Self","Invisibility","Nondetection","Confusion","False Vision","Mislead","Screen","Polymorph Any Object","Time Stop" ],
  "战争": [ "Magic Weapon","Spiritual Weapon","Magic Vestment","Divine Power","Flame Strike","Blade Barrier","Power Word Blind","Power Word Stun","Power Word Kill" ],
  "水":   [ "Obscuring Mist","Fog Cloud","Water Breathing","Control Water","Ice Storm","Cone of Cold","Acid Fog","Horrid Wilt","Elemental Swarm" ],
};

// 建立正确映射
const result = {};
const unmapped = [];
for (const [domain, spells] of Object.entries(DOMAIN_SPELLS)) {
  spells.forEach((name, i) => {
    const id = searchId(name);
    if (id) {
      if (!result[id]) result[id] = [];
      if (!result[id].includes(domain)) result[id].push(domain);
    } else {
      unmapped.push(`[${domain}] L${i+1}: ${name}`);
    }
  });
}

// 输出结果
console.log(`\n=== 映射结果 ===`);
console.log(`成功映射: ${Object.keys(result).length} 个法术`);
console.log(`未找到: ${unmapped.length} 个法术\n`);

if (unmapped.length > 0) {
  console.log('=== 未找到的法术 ===');
  unmapped.forEach(u => console.log('  ' + u));
}

// 生成 JS 文件内容
const DOMAIN_NAMES = {
  "气":"Air","动物":"Animal","混乱":"Chaos","死亡":"Death","破坏":"Destruction",
  "土":"Earth","邪恶":"Evil","火":"Fire","善良":"Good","治疗":"Healing",
  "知识":"Knowledge","守序":"Law","幸运":"Luck","魔法":"Magic","植物":"Plant",
  "防护":"Protection","力量":"Strength","太阳":"Sun","旅行":"Travel",
  "诡术":"Trickery","战争":"War","水":"Water"
};

let js = `/*
  D&D 3.5e 领域法术映射 (Domain Spell Mapping)
  基于 d20srd.org SRD 数据 + spells-data.js 实际法术ID

  用途：
  - 高级搜索页面按领域筛选法术
  - 法术详情页显示所属领域
*/

const SPELL_DOMAINS = {\n`;

for (const [id, domains] of Object.entries(result)) {
  js += `  "${id}": ${JSON.stringify(domains)},\n`;
}

js += `};\n\n`;
js += `// 领域名称中英文映射\nconst DOMAIN_NAMES = {\n`;
for (const [zh, en] of Object.entries(DOMAIN_NAMES)) {
  js += `  "${zh}": "${en}",\n`;
}
js += `};\n\n`;
js += `// 所有领域列表\nconst ALL_DOMAINS = [\n`;
for (const [zh, en] of Object.entries(DOMAIN_NAMES)) {
  js += `  { zh: "${zh}", en: "${en}" },\n`;
}
js += `];\n`;

fs.writeFileSync('js/spells-domains.js', js, 'utf8');
console.log('\n✅ 已生成 js/spells-domains.js');
