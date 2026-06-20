// fix-domains.js - Fix domain spell IDs by fuzzy matching against spells-data.js
const fs = require('fs');

// Load spells data
const content = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(content + '; return SPELLS;');
const SPELLS = fn();

const validIds = new Set(SPELLS.map(s => s.id));

// Helper: fuzzy find spell ID by English name
function fuzzyFindId(enName) {
  const target = enName.toLowerCase().replace(/['', ', ', '']/g, '').replace(/\s+/g, ' ').trim();
  
  // Try exact match on nameEn
  let found = SPELLS.find(s => 
    s.nameEn.toLowerCase().replace(/['', ', ', '']/g, '').replace(/\s+/g, ' ').trim() === target
  );
  if (found) return found.id;
  
  // Try replacing spaces with underscores
  const targetUnderscore = target.replace(/ /g, '_');
  found = SPELLS.find(s => s.id === targetUnderscore);
  if (found) return found.id;
  
  // Try partial match
  found = SPELLS.find(s => 
    s.nameEn.toLowerCase().includes(target.split(' ')[0]) &&
    s.nameEn.toLowerCase().includes(target.split(' ').slice(-1)[0])
  );
  if (found) return found.id;
  
  return null;
}

// Domain spell mappings to fix (English name -> need to find correct ID)
const DOMAIN_SPELLS = [
  // Air
  { domain: "气", level: 1, name: "Obscuring Mist" },
  { domain: "气", level: 4, name: "Air Walk" },
  { domain: "气", level: 5, name: "Control Winds" },
  // Animal
  { domain: "动物", level: 1, name: "Calm Animals" },
  { domain: "动物", level: 2, name: "Hold Animal" },
  { domain: "动物", level: 3, name: "Dominate Animal" },
  // Chaos
  { domain: "混乱", level: 2, name: "Shatter" },
  { domain: "混乱", level: 4, name: "Chaos Hammer" },
  { domain: "混乱", level: 8, name: "Cloak of Chaos" },
  // Death
  { domain: "死亡", level: 2, name: "Death Knell" },
  { domain: "死亡", level: 8, name: "Create Greater Undead" },
  // Earth
  { domain: "土", level: 8, name: "Iron Body" },
  // Evil
  { domain: "邪恶", level: 2, name: "Desecrate" },
  { domain: "邪恶", level: 4, name: "Unholy Blight" },
  { domain: "邪恶", level: 7, name: "Blasphemy" },
  // Fire
  { domain: "火", level: 2, name: "Produce Flame" },
  { domain: "火", level: 3, name: "Resist Energy" },
  // Good
  { domain: "善良", level: 4, name: "Holy Smite" },
  { domain: "善良", level: 6, name: "Blade Barrier" },
  { domain: "善良", level: 7, name: "Holy Word" },
  // Healing
  { domain: "治疗", level: 8, name: "Cure Critical Wounds, Mass" },
  { domain: "治疗", level: 9, name: "Heal, Mass" },
  // Knowledge
  { domain: "知识", level: 2, name: "Detect Thoughts" },
  { domain: "知识", level: 8, name: "Discern Location" },
  // Law
  { domain: "守序", level: 2, name: "Calm Emotions" },
  { domain: "守序", level: 4, name: "Order's Wrath" },
  { domain: "守序", level: 8, name: "Shield of Law" },
  // Luck
  { domain: "幸运", level: 1, name: "Entropic Shield" },
  { domain: "幸运", level: 8, name: "Moment of Prescience" },
  // Magic
  { domain: "魔法", level: 1, name: "Magic Aura" },
  { domain: "魔法", level: 4, name: "Imbue with Spell Ability" },
  { domain: "魔法", level: 8, name: "Protection from Spells" },
  { domain: "魔法", level: 9, name: "Mage's Disjunction" },
  // Plant
  { domain: "植物", level: 2, name: "Bark-skin" },
  { domain: "植物", level: 5, name: "Wall of Thorns" },
  { domain: "植物", level: 7, name: "Animate Plants" },
  { domain: "植物", level: 8, name: "Control Plants" },
  { domain: "植物", level: 9, name: "Shambler" },
  // Protection
  { domain: "防护", level: 1, name: "Sanctuary" },
  { domain: "防护", level: 2, name: "Shield Other" },
  { domain: "防护", level: 4, name: "Spell Immunity" },
  { domain: "防护", level: 8, name: "Mind Blank" },
  // Strength
  { domain: "力量", level: 3, name: "Magic Vestment" },
  { domain: "力量", level: 5, name: "Righteous Might" },
  { domain: "力量", level: 7, name: "Grasping Hand" },
  { domain: "力量", level: 8, name: "Clenched Fist" },
  { domain: "力量", level: 9, name: "Crushing Hand" },
  // Sun
  { domain: "太阳", level: 3, name: "Searing Light" },
  { domain: "太阳", level: 7, name: "Sunbeam" },
  // Travel
  { domain: "旅行", level: 1, name: "Longstrider" },
  { domain: "旅行", level: 2, name: "Locate Object" },
  { domain: "旅行", level: 7, name: "Teleport, Greater" },
  { domain: "旅行", level: 8, name: "Phase Door" },
  { domain: "旅行", level: 9, name: "Astral Projection" },
  // Trickery
  { domain: "诡术", level: 1, name: "Disguise Self" },
  { domain: "诡术", level: 7, name: "Screen" },
  { domain: "诡术", level: 8, name: "Polymorph Any Object" },
  // War
  { domain: "战争", level: 2, name: "Spiritual Weapon" },
  { domain: "战争", level: 3, name: "Magic Vestment" },
  { domain: "战争", level: 4, name: "Divine Power" },
  { domain: "战争", level: 7, name: "Power Word Blind" },
  { domain: "战争", level: 8, name: "Power Word Stun" },
  { domain: "战争", level: 9, name: "Power Word Kill" },
  // Water
  { domain: "水", level: 2, name: "Fog Cloud" },
  { domain: "水", level: 6, name: "Cone of Cold" },
  { domain: "水", level: 7, name: "Acid Fog" },
  { domain: "水", level: 8, name: "Horrid Wilting" },
];

console.log('Finding correct IDs for domain spells...\n');
const fixes = [];

DOMAIN_SPELLS.forEach(item => {
  const id = fuzzyFindId(item.name);
  if (id) {
    console.log(`  [${item.domain}] L${item.level}: "${item.name}" -> ${id}`);
    fixes.push({ domain: item.domain, level: item.level, id });
  } else {
    console.log(`  [${item.domain}] L${item.level}: "${item.name}" -> NOT FOUND`);
  }
});

console.log(`\nFound ${fixes.length}/${DOMAIN_SPELLS.length} correct IDs`);

// Now update spells-domains.js
let js = fs.readFileSync('js/spells-domains.js', 'utf8');

// For each fix, add the correct ID to the spellDomains mapping
const addLines = [];
fixes.forEach(f => {
  // Check if this ID is already in spellDomains
  const regex = new RegExp(`"${f.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s*:\\s*\\[`);
  if (!regex.test(js)) {
    // Add new entry
    addLines.push(`  "${f.id}": ["${f.domain}"],`);
  } else {
    // Update existing entry to add this domain
    console.log(`  ID ${f.id} already in mapping, needs manual update`);
  }
});

if (addLines.length > 0) {
  // Insert before the closing };
  const insertPos = js.indexOf('};');
  const before = js.substring(0, insertPos);
  const after = js.substring(insertPos);
  js = before + addLines.join('\n') + '\n' + after;

  fs.writeFileSync('js/spells-domains.js', js, 'utf8');
  console.log(`\nUpdated js/spells-domains.js with ${addLines.length} new spell->domain mappings`);
} else {
  console.log('\nNo new mappings to add');
}
