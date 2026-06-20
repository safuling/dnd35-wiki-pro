// build-domains.js - Generate spells-domains.js from SRD domain data
const fs = require('fs');

// Load spells data
const content = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(content + '; return SPELLS;');
const SPELLS = fn();

// Build lookup: normalized English name -> spell ID
const nameToId = {};
SPELLS.forEach(s => {
  // Normalize: lowercase, remove apostrophes, commas, extra spaces
  const normalize = (name) => name.toLowerCase()
    .replace(/['',',']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  nameToId[normalize(s.nameEn)] = s.id;
  // Also index by ID for direct lookup
});

function findId(name) {
  const normalize = (n) => n.toLowerCase()
    .replace(/['',',']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  const key = normalize(name);
  if (nameToId[key]) return nameToId[key];
  
  // Try matching by replacing spaces with underscores
  const key2 = key.replace(/ /g, '_');
  if (nameToId[key2]) return nameToId[key2];
  
  // Partial match as last resort
  for (const [k, v] of Object.entries(nameToId)) {
    if (k.includes(key) || key.includes(k)) {
      return v;
    }
  }
  return null;
}

// Domain definitions: Chinese name -> { level: English spell name }
const DOMAINS = {
  "气":   { 1:"Obscuring Mist", 2:"Wind Wall", 3:"Gaseous Form", 4:"Air Walk", 5:"Control Winds", 6:"Chain Lightning", 7:"Control Weather", 8:"Whirlwind", 9:"Elemental Swarm" },
  "动物": { 1:"Calm Animals", 2:"Hold Animal", 3:"Dominate Animal", 4:"Summon Nature's Ally IV", 5:"Commune with Nature", 6:"Antilife Shell", 7:"Animal Shapes", 8:"Summon Nature's Ally VIII", 9:"Shapechange" },
  "混乱": { 1:"Protection from Law", 2:"Shatter", 3:"Magic Circle against Law", 4:"Chaos Hammer", 5:"Dispel Law", 6:"Animate Objects", 7:"Word of Chaos", 8:"Cloak of Chaos", 9:"Summon Monster IX" },
  "死亡": { 1:"Cause Fear", 2:"Death Knell", 3:"Animate Dead", 4:"Death Ward", 5:"Slay Living", 6:"Create Undead", 7:"Destruction", 8:"Create Greater Undead", 9:"Wail of the Banshee" },
  "破坏": { 1:"Inflict Light Wounds", 2:"Shatter", 3:"Contagion", 4:"Inflict Critical Wounds", 5:"Inflict Light Wounds, Mass", 6:"Harm", 7:"Disintegrate", 8:"Earthquake", 9:"Implosion" },
  "土":   { 1:"Magic Stone", 2:"Soften Earth and Stone", 3:"Stone Shape", 4:"Spike Stones", 5:"Wall of Stone", 6:"Stoneskin", 7:"Earthquake", 8:"Iron Body", 9:"Elemental Swarm" },
  "邪恶": { 1:"Protection from Good", 2:"Desecrate", 3:"Magic Circle against Good", 4:"Unholy Blight", 5:"Dispel Good", 6:"Create Undead", 7:"Blasphemy", 8:"Unholy Aura", 9:"Summon Monster IX" },
  "火":   { 1:"Burning Hands", 2:"Produce Flame", 3:"Resist Energy", 4:"Wall of Fire", 5:"Fire Shield", 6:"Fire Seeds", 7:"Fire Storm", 8:"Incendiary Cloud", 9:"Elemental Swarm" },
  "善良": { 1:"Protection from Evil", 2:"Aid", 3:"Magic Circle against Evil", 4:"Holy Smite", 5:"Dispel Evil", 6:"Blade Barrier", 7:"Holy Word", 8:"Holy Aura", 9:"Summon Monster IX" },
  "治疗": { 1:"Cure Light Wounds", 2:"Cure Moderate Wounds", 3:"Cure Serious Wounds", 4:"Cure Critical Wounds", 5:"Cure Light Wounds, Mass", 6:"Heal", 7:"Regenerate", 8:"Cure Critical Wounds, Mass", 9:"Heal, Mass" },
  "知识": { 1:"Detect Secret Doors", 2:"Detect Thoughts", 3:"Clairaudience/Clairvoyance", 4:"Divination", 5:"True Seeing", 6:"Find the Path", 7:"Legend Lore", 8:"Discern Location", 9:"Foresight" },
  "守序": { 1:"Protection from Chaos", 2:"Calm Emotions", 3:"Magic Circle against Chaos", 4:"Order's Wrath", 5:"Dispel Chaos", 6:"Hold Monster", 7:"Dictum", 8:"Shield of Law", 9:"Summon Monster IX" },
  "幸运": { 1:"Entropic Shield", 2:"Aid", 3:"Protection from Energy", 4:"Freedom of Movement", 5:"Break Enchantment", 6:"Mislead", 7:"Spell Turning", 8:"Moment of Prescience", 9:"Miracle" },
  "魔法": { 1:"Magic Aura", 2:"Identify", 3:"Dispel Magic", 4:"Imbue with Spell Ability", 5:"Spell Resistance", 6:"Antimagic Field", 7:"Spell Turning", 8:"Protection from Spells", 9:"Mage's Disjunction" },
  "植物": { 1:"Entangle", 2:"Barkskin", 3:"Plant Growth", 4:"Command Plants", 5:"Wall of Thorns", 6:"Repel Wood", 7:"Animate Plants", 8:"Control Plants", 9:"Shambler" },
  "防护": { 1:"Sanctuary", 2:"Shield Other", 3:"Protection from Energy", 4:"Spell Immunity", 5:"Spell Resistance", 6:"Antimagic Field", 7:"Repulsion", 8:"Mind Blank", 9:"Prismatic Sphere" },
  "力量": { 1:"Enlarge Person", 2:"Bull's Strength", 3:"Magic Vestment", 4:"Spell Immunity", 5:"Righteous Might", 6:"Stoneskin", 7:"Grasping Hand", 8:"Clenched Fist", 9:"Crushing Hand" },
  "太阳": { 1:"Endure Elements", 2:"Heat Metal", 3:"Searing Light", 4:"Fire Shield", 5:"Flame Strike", 6:"Fire Seeds", 7:"Sunbeam", 8:"Sunburst", 9:"Prismatic Sphere" },
  "旅行": { 1:"Longstrider", 2:"Locate Object", 3:"Fly", 4:"Dimension Door", 5:"Teleport", 6:"Find the Path", 7:"Teleport, Greater", 8:"Phase Door", 9:"Astral Projection" },
  "诡术": { 1:"Disguise Self", 2:"Invisibility", 3:"Nondetection", 4:"Confusion", 5:"False Vision", 6:"Mislead", 7:"Screen", 8:"Polymorph Any Object", 9:"Time Stop" },
  "战争": { 1:"Magic Weapon", 2:"Spiritual Weapon", 3:"Magic Vestment", 4:"Divine Power", 5:"Flame Strike", 6:"Blade Barrier", 7:"Power Word Blind", 8:"Power Word Stun", 9:"Power Word Kill" },
  "水":   { 1:"Obscuring Mist", 2:"Fog Cloud", 3:"Water Breathing", 4:"Control Water", 5:"Ice Storm", 6:"Cone of Cold", 7:"Acid Fog", 8:"Horrid Wilting", 9:"Elemental Swarm" },
};

// Build spell -> domains mapping
const spellToDomains = {};
const unmapped = [];

for (const [zhName, spells] of Object.entries(DOMAINS)) {
  for (const [level, spellName] of Object.entries(spells)) {
    const id = findId(spellName);
    if (id) {
      if (!spellToDomains[id]) spellToDomains[id] = [];
      if (!spellToDomains[id].includes(zhName)) {
        spellToDomains[id].push(zhName);
      }
    } else {
      unmapped.push(`[${zhName}] L${level}: ${spellName}`);
    }
  }
}

// Generate JS file
let js = `/*
  D&D 3.5e 领域法术映射 (Domain Spell Mapping)
  基于 d20srd.org SRD 数据自动生成

  用途：
  - 高级搜索页面按领域筛选法术
  - 法术详情页显示所属领域

  数据结构：
  spellDomains[spellId] = ["领域1", "领域2", ...]
*/

const spellDomains = {\n`;

for (const [id, domains] of Object.entries(spellToDomains)) {
  js += `  "${id}": ${JSON.stringify(domains)},\n`;
}

js += `};\n\n`;

// Domain name mappings
const DOMAIN_EN = {
  "气":"Air","动物":"Animal","混乱":"Chaos","死亡":"Death","破坏":"Destruction",
  "土":"Earth","邪恶":"Evil","火":"Fire","善良":"Good","治疗":"Healing",
  "知识":"Knowledge","守序":"Law","幸运":"Luck","魔法":"Magic","植物":"Plant",
  "防护":"Protection","力量":"Strength","太阳":"Sun","旅行":"Travel",
  "诡术":"Trickery","战争":"War","水":"Water"
};

js += `// 领域名称中英文映射\nconst DOMAIN_NAMES = {\n`;
for (const [zh, en] of Object.entries(DOMAIN_EN)) {
  js += `  "${zh}": "${en}",\n`;
}
js += `};\n\n`;

// All domains list for search page
js += `// 所有领域列表（用于搜索页面）\nconst ALL_DOMAINS = [\n`;
for (const [zh, en] of Object.entries(DOMAIN_EN)) {
  js += `  { zh: "${zh}", en: "${en}" },\n`;
}
js += `];\n`;

fs.writeFileSync('js/spells-domains.js', js);
console.log(`✅ 已生成 js/spells-domains.js`);
console.log(`   映射了 ${Object.keys(spellToDomains).length} 个法术到领域`);
console.log(`\n⚠️  未找到匹配的法术 (${unmapped.length} 个):`);
unmapped.forEach(u => console.log(`   ${u}`));
