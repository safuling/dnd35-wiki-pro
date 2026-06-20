const fs = require('fs');

// SRD法术列表（PHB中的开放内容部分）
// 这些是PHB法术中可以在SRD中找到的
const SRD_SPELLS = [
  // 0级秘法
  'Acid Splash', 'Arcane Mark', 'Dancing Lights', 'Daze', 'Detect Magic',
  'Disrupt Undead', 'Flare', 'Ghost Sound', 'Light', 'Mage Hand',
  'Mending', 'Message', 'Open/Close', 'Prestidigitation', 'Ray of Frost',
  'Read Magic', 'Resistance', 'Touch of Fatigue',
  // 0级神术
  'Create Water', 'Cure Minor Wounds', 'Detect Poison', 'Guidance',
  'Inflict Minor Wounds', 'Purify Food and Drink', 'Virtue',

  // 1级秘法
  'Alarm', 'Burning Hands', 'Cause Fear', 'Charm Person', 'Chill Touch',
  'Color Spray', 'Comprehend Languages', 'Detect Secret Doors', 'Disguise Self',
  'Endure Elements', 'Enlarge Person', 'Erase', 'Expeditious Retreat',
  'Feather Fall', 'Grease', 'Hold Portal', 'Identify', 'Jump', 'Magic Aura',
  'Magic Missile', 'Mount', 'Mage Armor', 'Obscuring Mist',
  'Protection from Alignment', 'Ray of Enfeeblement', 'Reduce Person',
  'Shield', 'Shocking Grasp', 'Silent Image', 'Sleep', 'Summon Monster I',
  'Tasha\'s Hideous Laughter', 'Unseen Servant', 'Ventriloquism',
  // 1级神术
  'Bane', 'Bless', 'Command', 'Comprehend Languages', 'Cure Light Wounds',
  'Detect Alignment', 'Detect Magic', 'Detect Poison', 'Disguise Self',
  'Doom', 'Endure Elements', 'Entropic Shield', 'Inflict Light Wounds',
  'Magic Stone', 'Magic Weapon', 'Obscuring Mist',
  'Protection from Alignment', 'Remove Fear', 'Sanctuary', 'Shield of Faith',
  'Summon Monster I', 'Summon Nature\'s Ally I',

  // 2级秘法
  'Animal Messenger', 'Animal Trance', 'Arcane Lock', 'Bear\'s Endurance',
  'Bull\'s Strength', 'Cat\'s Grace', 'Darkness', 'Darkvision',
  'Daylight', 'Death Knell', 'Delay Poison', 'Detect Thoughts',
  'Dispel Magic', 'Eagle\'s Splendor', 'False Life',
  'Fog Cloud', 'Fox\'s Cunning', 'Gentle Repose', 'Glitterdust',
  'Heroism', 'Hideous Laughter', 'Hypnotic Pattern', 'Invisibility',
  'Knock', 'Levitate', 'Locate Object',
  'Magic Mouth', 'Minor Image', 'Mirror Image', 'Misdirection',
  'Owl\'s Wisdom', 'Phantasmal Force', 'Protection from Arrows',
  'Pyrotechnics', 'Rage', 'Resist Energy', 'Scare', 'Scorching Ray',
  'See Invisibility', 'Shatter', 'Silence', 'Sound Burst',
  'Spectral Hand', 'Spider Climb', 'Summon Monster II',
  'Summon Swarm', 'Touch of Idiocy', 'Whispering Wind', 'Continual Flame',
  // 2级神术
  'Aid', 'Align Weapon', 'Bear\'s Endurance', 'Bull\'s Strength',
  'Cat\'s Grace', 'Consecrate', 'Cure Moderate Wounds', 'Delay Poison',
  'Discern Lies', 'Dispel Magic', 'Eagle\'s Splendor', 'Enthrall',
  'Find Traps', 'Flame Blade', 'Fog Cloud', 'Gentle Repose', 'Heat Metal',
  'Hold Person', 'Inflict Moderate Wounds', 'Make Whole', 'Owl\'s Wisdom',
  'Remove Paralysis', 'Resist Energy', 'Restoration Lesser',
  'Shatter', 'Shield Other', 'Silence', 'Sound Burst', 'Spiritual Weapon',
  'Status', 'Summon Monster II', 'Summon Nature\'s Ally II',
  'Warp Wood', 'Wood Shape',

  // 3级秘法
  'Arcane Sight', 'Blink', 'Clairaudience/Clairvoyance',
  'Dispel Magic', 'Displacement', 'Explosive Runes', 'Fireball',
  'Flame Arrow', 'Fly', 'Gaseous Form', 'Halt Undead',
  'Heroism Greater', 'Hold Person', 'Illusory Script', 'Invisibility Greater',
  'Keen Edge', 'Lightning Bolt', 'Magic Circle against Alignment', 'Magic Vestment',
  'Major Image', 'Nondetection', 'Phantasmal Killer', 'Protection from Energy',
  'Ray of Enfeeblement Greater', 'Scrying', 'Sculpt Sound',
  'Secret Page', 'See Invisibility', 'Sepia Snake Sigil', 'Sleet Storm',
  'Slow', 'Speak with Dead', 'Spell Immunity', 'Spike Growth',
  'Stinking Cloud', 'Suggestion', 'Summon Monster III', 'Tiny Hut',
  'Tongues', 'Vampiric Touch', 'Water Breathing', 'Wind Wall',
  // 3级神术
  'Animate Dead', 'Bestow Curse', 'Call Lightning',
  'Continual Flame', 'Create Food and Water', 'Cure Blindness/Deafness',
  'Cure Disease', 'Cure Serious Wounds', 'Daylight', 'Death Ward',
  'Deep Slumber', 'Desecrate', 'Dispel Magic', 'Displacement',
  'Flame Strike', 'Glyph of Warding', 'Heal Mount', 'Heat Metal',
  'Helping Hand', 'Inflict Serious Wounds', 'Invisibility Purge',
  'Locate Object', 'Magic Circle against Alignment', 'Magic Vestment',
  'Meld into Stone', 'Nightmare', 'Obscure Object', 'Phantasmal Killer',
  'Prayer', 'Protection from Energy', 'Remove Blindness/Deafness',
  'Remove Curse', 'Remove Disease', 'Searing Light', 'Shatter',
  'Shield of Law', 'Summon Monster III', 'Summon Nature\'s Ally III',
  'Water Breathing', 'Water Walk', 'Wind Wall',

  // 4级秘法
  'Animate Dead', 'Arcane Eye', 'Bestow Curse', 'Black Tentacles',
  'Charm Monster', 'Confusion', 'Contagion', 'Control Water',
  'Crushing Despair', 'Detect Scrying', 'Dimension Door',
  'Discern Lies', 'Dispel Magic', 'Divination', 'Dominate Person',
  'Enervation', 'Enlarge Person Mass', 'Etherealness', 'Expeditious Retreat Mass',
  'Fear', 'Fire Shield', 'Fire Trap', 'Floating Disk Permanent',
  'Globe of Invulnerability Lesser', 'Hallucinatory Terrain',
  'Ice Storm', 'Illusory Wall', 'Imprisonment', 'Insanity',
  'Legend Lore', 'Locate Creature', 'Mage Armor Greater', 'Mage Sword',
  'Major Creation', 'Minor Creation', 'Modify Memory', 'Momentary Stasis',
  'Mordenkainen\'s Faithful Hound', 'Mordenkainen\'s Private Sanctum',
  'Otiluke\'s Resilient Sphere', 'Phantasmal Killer', 'Polymorph',
  'Prismatic Spray', 'Prying Eyes', 'Ray of Enfeeblement Greater',
  'Reduce Person Mass', 'Repel Vermin', 'Scrying', 'Secure Shelter',
  'Shadow Conjuration', 'Shout', 'Shout Greater', 'Sickening Ray',
  'Solid Fog', 'Soul Bind', 'Spectral Hand', 'Spell Immunity',
  'Spell Turning', 'Statue', 'Stone Shape', 'Summon Monster IV',
  'Tenser\'s Transformation', 'Transmute Mud to Rock', 'Transmute Rock to Mud',
  'Trap the Soul', 'Wall of Fire', 'Wall of Ice', 'Wall of Stone',
  'Watery Sphere', 'Web Greater', 'Zone of Silence',
  // 4级神术
  'Air Walk', 'Antitheft Field', 'Banishment', 'Control Water',
  'Conversion', 'Cure Critical Wounds', 'Death Ward', 'Dimensional Anchor',
  'Discern Lies', 'Dispel Magic', 'Divination', 'Divine Power',
  'Dominate Person', 'Enervation', 'Exaction', 'Fear', 'Flame Strike',
  'Forbiddance', 'Freedom of Movement', 'Giant Vermin', 'Heal',
  'Holy Smite', 'Ice Storm', 'Imbue with Spell Ability',
  'Inflict Critical Wounds', 'Lesser Planar Binding', 'Mantis Leap',
  'Mark of Justice', 'Neutralize Poison', 'Order\'s Wrath',
  'Planar Ally', 'Poison', 'Power Word Stun', 'Prayer',
  'Repel Vermin', 'Restoration', 'Righteous Might', 'Sacred Guardian',
  'Scrying', 'Searing Light', 'Sending', 'Speak with Dead',
  'Spell Immunity', 'Spiritual Guardian', 'Summon Monster IV',
  'Summon Nature\'s Ally IV', 'Talisman of the Sphere', 'Tongues',
  'Unholy Blight', 'Wall of Fire', 'Wall of Stone',

  // 5级秘法
  'Animal Growth', 'Baleful Polymorph', 'Bigby\'s Interposing Hand',
  'Blight', 'Break Enchantment', 'Cloudkill', 'Contact Other Plane',
  'Control Winds', 'Creation', 'Dance of the Dead', 'Death Cloud',
  'Demand', 'Dimension Door Greater', 'Dispel Magic Greater',
  'Dominate Person', 'Dream', 'Etherealness', 'Fabricate',
  'Far Seeing', 'Find the Path', 'Flesh to Stone', 'Fly Overland',
  'Geas Lesser', 'Globe of Invulnerability', 'Guards and Wards',
  'Heroism Greater', 'Hold Monster', 'Imprisonment', 'Inflict Light Wounds Mass',
  'Interposing Hand', 'Invisibility Mass', 'Leomund\'s Secret Chest',
  'Mage\'s Magnificent Mansion', 'Mage\'s Private Sanctum', 'Major Creation',
  'Mislead', 'Modify Memory', 'Momentary Stasis', 'Mordenkainen\'s Sword',
  'Nightmare', 'Overland Flight', 'Passwall', 'Permanent Image',
  'Pierce Magic', 'Planar Binding', 'Prying Eyes Greater', 'Reincarnate',
  'Repel Wood', 'Seeming', 'Sending', 'Shadow Evocation', 'Shout Greater',
  'Siege of Stone', 'Spell Resistance', 'Spell Turning', 'Statue',
  'Stone Shape', 'Stone to Flesh', 'Summon Monster V', 'Telekinesis',
  'Teleport', 'Teleport Object', 'Transmute Mud to Rock',
  'Transmute Rock to Mud', 'Trap the Soul', 'True Seeing',
  'Unhallow', 'Vampiric Touch', 'Wall of Force', 'Wall of Iron',
  'Wall of Stone', 'Wave of Fatigue', 'Web Mass', 'Wish Limited',
  // 5级神术
  'Atonement', 'Banishment', 'Break Enchantment', 'Command Greater',
  'Commune', 'Commune with Nature', 'Cure Critical Wounds Mass',
  'Death Ward', 'Dispel Chaos/Law/Evil/Good', 'Dispel Magic Greater',
  'Divination', 'Divine Power', 'Flame Strike', 'Forbiddance',
  'Geas Lesser', 'Glyph of Warding Greater', 'Guards and Wards',
  'Heal', 'Holy Word', 'Imbue with Spell Ability', 'Inflict Critical Wounds Mass',
  'Insect Plague', 'Mark of Justice', 'Miracle', 'Mantis Leap',
  'Mind Blank', 'Mislead', 'Mountain\'s Fury', 'Neutralize Poison',
  'Planar Ally', 'Poison', 'Power Word Stun', 'Prayer',
  'Raise Dead', 'Regenerate', 'Reincarnate', 'Repel Metal or Stone',
  'Repel Wood', 'Resurrection', 'Righteous Might', 'Sacred Guardian',
  'Scrying', 'Searing Light', 'Sending', 'Shadow Walk',
  'Slay Living', 'Soul Bind', 'Speak with Dead', 'Spell Immunity Greater',
  'Spiritual Guardian', 'Stone to Flesh', 'Summon Monster V',
  'Summon Nature\'s Ally V', 'Symbol of Pain', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Teleport', 'Teleport Object', 'Tongues',
  'Transmute Rock to Mud', 'True Seeing', 'Unhallow',
  'Unholy Word', 'Wall of Stone', 'Word of Chaos',

  // 6级秘法
  'Acid Fog', 'Analyze Dweomer', 'Animate Objects', 'Anti-Life Shell',
  'Banishment', 'Bigby\'s Clenched Fist', 'Circle of Death',
  'Control Weather', 'Create Undead', 'Death Fog', 'Demand',
  'Disintegrate', 'Dismissal', 'Dispel Magic Greater',
  'Etherealness', 'Eyebite', 'Find the Path', 'Flesh to Stone',
  'Forcecage', 'Globe of Invulnerability Greater', 'Guards and Wards',
  'Hold Monster', 'Iceberg', 'Imprisonment', 'Insanity',
  'Invisibility Mass', 'Legend Lore', 'Magic Jar', 'Mass Suggestion',
  'Mordenkainen\'s Disjunction', 'Move Earth', 'Nightmare',
  'Otiluke\'s Freezing Sphere', 'Pain', 'Permanent Image', 'Planar Binding',
  'Polymorph Greater', 'Power Word Stun', 'Prismatic Spray', 'Programmed Image',
  'Project Image', 'Repel Wood', 'Shadow Walk', 'Shapechange', 'Soul Bind',
  'Spell Turning', 'Stone to Flesh', 'Suggestion Mass', 'Summon Monster VI',
  'Tasha\'s Metamorphosis', 'Tenser\'s Transformation', 'True Seeing',
  'Undeath to Death', 'Vampiric Touch', 'Veil', 'Wall of Force',
  'Wall of Iron', 'Wish', 'Word of Recall',
  // 6级神术
  'Animate Objects', 'Anti-Life Shell', 'Banishment', 'Blade Barrier',
  'Circle of Death', 'Cleanse', 'Commune', 'Commune with Nature',
  'Create Undead', 'Cure Moderate Wounds Mass', 'Cure Serious Wounds Mass',
  'Death Ward', 'Dispel Magic Greater', 'Divination', 'Divine Power',
  'Etherealness', 'Find the Path', 'Forbiddance',
  'Glyph of Warding Greater', 'Heal', 'Heal Mass', 'Heroes\' Feast',
  'Imbue with Spell Ability', 'Inflict Moderate Wounds Mass',
  'Inflict Serious Wounds Mass', 'Insect Plague', 'Iron Body',
  'Magic Circle against Alignment Greater', 'Mantis Leap', 'Mark of Justice',
  'Miracle', 'Mislead', 'Move Earth', 'Neutralize Poison',
  'Planar Ally', 'Poison', 'Power Word Stun', 'Prayer',
  'Raise Dead', 'Regenerate', 'Reincarnate', 'Repel Metal or Stone',
  'Repel Wood', 'Resurrection', 'Restoration', 'Righteous Might',
  'Sacred Guardian', 'Scrying', 'Searing Light', 'Sending', 'Shadow Walk',
  'Slay Living', 'Soul Bind', 'Speak with Dead', 'Spell Immunity Greater',
  'Spiritual Guardian', 'Stone to Flesh', 'Summon Monster VI',
  'Summon Nature\'s Ally VI', 'Symbol of Fear', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Teleport', 'Teleport Object', 'Tongues',
  'Transmute Metal to Wood', 'True Seeing', 'Unhallow', 'Undeath to Death',
  'Wall of Stone', 'Wind Walk', 'Word of Chaos',

  // 7级+
  // 为了简洁，这里只包含部分高等级法术
  // 实际使用时需要完整的列表
];

console.log('注意：这个列表不完整，只用于测试审计功能。');
console.log('实际使用时需要完整的SRD/PHB法术列表。\n');

// 读取现有法术
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 创建匹配集合
const existingIds = new Set(spells.map(s => s.id.toLowerCase()));
const existingNames = new Set(spells.map(s => s.name.toLowerCase()));

console.log('=== SRD法术完整性审计 ===\n');
console.log(`现有法术总数: ${spells.length}`);
console.log(`现有PHB法术: ${spells.filter(s => s.source === 'PHB').length}`);
console.log(`现有3R法术: ${spells.filter(s => s.source === '3R').length}`);
console.log(`\nSRD法术列表: ${SRD_SPELLS.length}个（不完整）\n`);

// 查找缺失的法术
const missing = [];
const found = [];

SRD_SPELLS.forEach(name => {
  const nameLower = name.toLowerCase();
  const id = nameLower.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  if (existingIds.has(id) || existingNames.has(nameLower)) {
    found.push(name);
  } else {
    missing.push(name);
  }
});

console.log(`✅ 已找到: ${found.length}个`);
console.log(`❌ 缺失: ${missing.length}个\n`);

if (missing.length > 0 && missing.length < 50) {
  console.log('=== 缺失的SRD法术（前50个）===');
  missing.slice(0, 50).forEach((name, i) => {
    console.log(`${i+1}. ${name}`);
  });
}

console.log('\n=== 建议 ===');
console.log('1. 这个方法使用不完整的SRD列表，结果可能不准确。');
console.log('2. 建议从可靠的来源获取完整的PHB/SRD法术列表。');
console.log('3. 可以参考：dndtools.net, dandwiki.com, 或其他D&D 3.5e资料库。');
