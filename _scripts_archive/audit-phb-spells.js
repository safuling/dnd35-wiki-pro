const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// D&D 3.5e PHB 完整法术列表（英文名称，尽可能全）
// 来源：Player's Handbook v.3.5 标准法术列表
const PHB_SPELLS = [
  // === 0级 奥术戏法 ===
  'Acid Splash','Daze','Detect Magic','Disrupt Undead','Flare','Light','Mage Hand','Mending',
  'Message','Open/Close','Ray of Frost','Read Magic','Touch of Fatigue',
  // === 0级 神术戏法 ===
  'Create Water','Cure Minor Wounds','Detect Poison','Guidance','Inflict Minor Wounds',
  'Purify Food and Drink','Resistance','Virtue',
  // === 1级 奥术 ===
  'Alarm','Endure Elements','Hold Portal','Identify','Magic Aura','Magic Missile',
  'Shield','Shocking Grasp','Silvery Strings','Sleep',
  'Feather Fall','Jump','Mage Armor','Mount','Unseen Servant',
  'Charm Person','Hypnotism','Color Spray',
  'Cure Light Wounds','Detect Evil','Divine Favor','Doom','Inflict Light Wounds',
  'Magic Stone','Protection from Evil','Sanctuary','Shield of Faith','True Strike',
  // === 1级 神术 ===
  'Bless','Command','Comprehend Languages','Detect Chaosity','Remove Fear',
  // === 2级 奥术 ===
  'Acid Arrow','Darkness','Detect Thoughts','Knock','Levitate','Misdirection',
  'See Invisibility','Spider Climb','Summon Monster II','Web','Whispering Wind',
  'Blur','Darkvision','Eagle\'s Splendor','False Life','Ghoul Touch','Invisibility',
  'Mirror Image','See Invisibility',
  'Cat\'s Grace','Fox\'s Cunning','Owl\'s Wisdom','Bear\'s Endurance','Bull\'s Strength',
  'Alter Self','Rope Trick','Continual Flame','Enthrall','Heroism','Suggestion',
  // === 2级 神术 ===
  'Calm Emotions','Consecrate','Delay Poison','Eagle\'s Splendor','Remove Paralysis',
  'Resist Energy','Daylight','Heat Metal','Protection from Arrows','Shatter','Silence',
  'Sound Burst','Spiritual Weapon','Summon Monster II','Wind Wall',
  // === 3级 奥术 ===
  'Arcane Sight','Clairaudience/Clairvoyance','Dispel Magic','Displacement','Fireball',
  'Flame Arrow','Fly','Haste','Heroism','Hold Person','Invisibility (Greater)',
  'Lightning Bolt','Phantasmal Killer','Protection from Energy','Suggestion','Summon Monster III',
  'Tongues','Water Breathing','Daylight',
  'Cure Moderate Wounds','Prayer','Magic Vestment','Summon Monster III','Wind Wall',
  'Call Lightning','Plant Growth','Speak with Animals','Stone Shape','Water Walk',
  'Remove Blindness/Deafness','Remove Curse',
  // === 4级 奥术 ===
  'Arcane Eye','Confusion','Dimension Door','Enervation','Evard\'s Black Tentacles',
  'Fear','Lesser Globe of Invulnerability','Locate Creature','Modify Memory','Polymorph',
  'Scrying','Secure Shelter','Shadow Conjuration','Summon Monster IV','Wall of Fire',
  'Wall of Ice','Zone of Silence',
  'Charm Monster','Crushing Despair','Geas (Lesser)','Hold Monster','Shout',
  'Control Water','Cure Serious Wounds','Death Ward','Dimensional Anchor','Divine Power',
  'Fire Shield','Freedom of Movement','Giant Vermin','Imbue with Spell Ability',
  'Spell Immunity','Spell Resistance','Summon Monster IV','Tongues','Unholy Blight',
  // === 5级 奥术 ===
  'Baleful Polymorph','Breath Weapon','Contact Other Plane','Dominate Person',
  'Dream','Fabricate','False Vision','Hold Monster','Mind Fog','Mage\'s Private Sanctum',
  'Overland Flight','Passwall','Permanent Image','Polymorph','Prying Eyes','Seeming',
  'Sending','Summon Monster V','Telekinesis','Teleport','Transmute Mud to Rock',
  'Transmute Rock to Mud','Wall of Force','Wall of Stone',
  'Atonement','Battlecry','Break Enchantment','Command (Greater)','Cure Critical Wounds',
  'Death Ward','Dispel Evil','Flame Strike','Raise Dead','Righteous Might','Spell Resistance',
  'Summon Monster V','True Seeing','Unhallow',
  // === 6级 奥术 ===
  'Acid Fog','Analyze Dweomer','Animate Objects','Antimagic Field','Contingency',
  'Control Weather','Create Magen','Disintegrate','Eyebite','Flesh to Stone',
  'Geas/Quest','Glassee','Guards and Wards','Legend Lore','Mislead',
  'Move Earth','Otiluke\'s Freezing Sphere','Planar Ally','Prying Eyes (Greater)',
  'Shadow Walk','Stone to Flesh','Suggestion (Mass)','Summon Monster VI',
  'True Sight','Undeath to Death','Veil','Wall of Iron','Wall of Stone',
  'Banishment','Bless (Mass)','Create Undead','Heal','Heroes\' Feast',
  'Spell Immunity (Mass)','Summon Monster VI','Sword of State','Wind Walk','Word of God',
  // === 7级 奥术 ===
  'Arcane Sight (Greater)','Control Magic','Demand','Dictum','Forceage','Finger of Death',
  'Hold Person (Mass)','Insanity','Mage\'s Sword','Phase Door','Power Word Blind',
  'Prismatic Spray','Project Image','Scrying (Greater)','Simulacrum',
  'Spell Turning','Summon Monster VII','Teleport Object','Visions of Death','Wish (Limited)',
  'Blasphemy','Control Undead','Destruction','Dictum','Etherealness','Holy Word',
  'Implosion','Power Word Kill','Power Word Stun','Restoration (Greater)',
  'Resurrection','Word of God',
  // === 8级 奥术 ===
  'Antimagic Field (Greater)','Binding','Clone','Demand','Dimension Door (Greater)',
  'Discern Location','Finger of Death (Mass)','Glassee (Permanent)','Incendiary Cloud',
  'Maze','Mind Blank','Moment of Prescience','Polymorph (Greater)','Power Word Blind (Mass)',
  'Prismatic Wall','Prying Eyes (Permanent)','Scintilating Sphere','Screen','Shadow Evocation',
  'Simulacrum (Greater)','Spell Resistance (Greater)','Succesive Life','Summon Monster VIII',
  'Sunburst','Sympathy','Temporal Stasis','Trap the Soul','Teleport (Greater)',
  'Wild Thomas',
  // === 9级 奥术 ===
  'Astral Projection','Foresight','Freedom','Imprisonment','Mage\'s Disjunction',
  'Meteor Swarm','Power Word Kill','Prismatic Sphere','Shapechange','Soul Bind',
  'Summon Monster IX','Teleport (Mass)','Time Stop','Wail of the Banshee','Weird',
  'Wish','Word of Truth'
];

const spellSet = new Set(spells.map(s => s.nameEn));
const missing = PHB_SPELLS.filter(n => !spellSet.has(n));
const extra = spellSet.size - PHB_SPELLS.length; // 近似值

console.log('=== PHB 法术齐全度检查 ===');
console.log('PHB 标准法术数:', PHB_SPELLS.length);
console.log('当前项目法术数:', spells.length);
console.log('');
console.log('❌ 缺失的 PHB 法术（', missing.length, '个）:');
missing.forEach(n => console.log('  -', n));
console.log('');
console.log('📊 非 PHB 法术（3R/拓展）约:', spells.length - PHB_SPELLS.length + missing.length, '个');
console.log('');
console.log('建议：将 PHB 法术标记 source:"PHB"，3R 法术标记 source:"3R"');
