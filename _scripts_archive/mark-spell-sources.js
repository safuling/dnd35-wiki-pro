const fs = require('fs');
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// PHB 标准法术列表（英文名称）
const PHB_SPELLS = new Set([
  'Acid Splash','Daze','Detect Magic','Disrupt Undead','Flare','Light','Mage Hand','Mending',
  'Message','Open/Close','Ray of Frost','Read Magic','Residue','Touch of Fatigue',
  'Create Water','Cure Minor Wounds','Detect Poison','Divine Ward','Guidance','Inflict Minor Wounds',
  'Know Direction','Purify Food and Drink','Resistance','Virtue',
  'Alarm','Endure Elements','Hold Portal','Identify','Magic Aura','Magic Missile','Shield',
  'Shocking Grasp','Silvery Strings','Sleep','Feather Fall','Jump','Mage Armor',
  'Mount','Unseen Servant','Charm Person','Hypnotism','Color Spray','Disguise Self',
  'Hideous Laughter','Remove Fear','Cause Fear','Command','Comprehend Languages',
  'Detect Chaos','Bless','Command','Comprehend Languages','Cure Light Wounds',
  'Detect Evil','Divine Favor','Doom','Inflict Light Wounds','Magic Stone','Magic Weapon',
  'Protection from Evil','Sanctuary','Shield of Faith','Summon Monster I','True Strike',
  'Acid Arrow','Darkness','Detect Thoughts','Knock','Levitate','Misdirection',
  'See Invisibility','Spider Climb','Summon Monster II','Web','Whispering Wind',
  'Blur','Darkvision','Eagle\'s Splendor','False Life','Ghoul Touch','Invisibility',
  'Mirror Image','Resistance (Mass)','See Invisibility',
  'Cat\'s Grace','Fox\'s Cunning','Owl\'s Wisdom','Bear\'s Endurance',
  'Bull\'s Strength','Eagle\'s Splendor','Spider Climb','Alter Self','Rope Trick',
  'Continual Flame','Enthrall','Heroism','Scent of a Hero','Suggestion (Lesser)',
  'Calm Emotions','Consecrate','Delay Poison','Eagle\'s Splendor','Remove Paralysis',
  'Resist Energy','Daylight','Heat Metal','Protection from Arrows','Shatter','Silence',
  'Sound Burst','Spiritual Weapon','Summon Monster II','Wind Wall',
  'Arcane Sight','Clairaudience/Clairvoyance','Dispel Magic','Displacement','Fireball',
  'Flame Arrow','Fly','Haste','Heroism (Greater)','Hold Person','Invisibility (Greater)',
  'Lightning Bolt','Phantasmal Killer','Protection from Energy','Rage','Suggestion',
  'Summon Monster III','Tongues','Water Breathing','Daylight',
  'Cure Moderate Wounds','Prayer','Magic Vestment','Summon Monster III','Wind Wall',
  'Control Weather (Lesser)','Call Lightning','Plant Growth','Speak with Animals',
  'Stone Shape','Water Walk','Remove Blindness/Deafness','Remove Curse','Suggestion (Mass)',
  'Arcane Eye','Confusion','Dimension Door','Enervation','Evard\'s Black Tentacles',
  'Fear','Lesser Globe of Invulnerability','Locate Creature','Modify Memory','Polymorph',
  'Scrying','Secure Shelter','Shadow Conjuration','Summon Monster IV','Wall of Fire',
  'Wall of Ice','Zone of Silence','Charm Monster','Crushing Despair','Geas (Lesser)',
  'Hold Monster','Shout','Tasha\'s Hideous Laughter (Mass)',
  'Control Water','Cure Serious Wounds','Death Ward','Dimensional Anchor','Divine Power',
  'Fire Shield','Freedom of Movement','Giant Vermin','Imbue with Spell Ability',
  'Mantle of Faith','Order\'s Wrath','Spell Immunity','Spell Resistance',
  'Summon Monster IV','Tongues','Unholy Blight',
  'Control Plants','Control Temperature','Divination','Divine Power','Restoration',
  'Baleful Polymorph','Breath Weapon','Contact Other Plane','Dominate Person',
  'Dream','Fabricate','False Vision','Hold Monster','Mind Fog','Mage\'s Private Sanctum',
  'Overland Flight','Passwall','Permanent Image','Polymorph','Prying Eyes','Seeming',
  'Sending','Summon Monster V','Telekinesis','Teleport','Transmute Mud to Rock',
  'Transmute Rock to Mud','Wall of Force','Wall of Stone',
  'Atonement','Battlecry','Break Enchantment','Command (Greater)','Cure Critical Wounds',
  'Death Ward','Dispel Evil','Dispel Good','Flame Strike','Give Life','Mark of Justice',
  'Raise Dead','Restoration (Greater)','Resurrection','Righteous Might','Spell Resistance',
  'Summon Monster V','True Seeing','Unhallow','Word of Faith',
  'Acid Fog','Analyze Dweomer','Animate Objects','Antimagic Field','Contingency',
  'Control Weather','Create Mage','Disintegrate','Eyebite','Flesh to Stone',
  'Geas/Quest','Glassee','Guards and Wards','Legend Lore','Mislead',
  'Move Earth','Otiluke\'s Freezing Sphere','Planar Ally','Prying Eyes (Greater)',
  'Shadow Walk','Stone to Flesh','Suggestion (Mass)','Summon Monster VI',
  'True Sight','Undeath to Death','Veil','Wall of Iron','Wall of Stone',
  'Banishment','Bless (Mass)','Create Undead','Eagle\'s Splendor (Mass)',
  'Find the Path','Geas/Quest','Heal','Heroes\' Feast','Magic Juggernaut',
  'Planar Ally','Summon Monster VI','Sword of State','True Sight','Undeath to Death',
  'Wind Walk','Word of God',
  'Arcane Sight (Greater)','Control Magic','Demand','Dictum','Forceage','Finger of Death',
  'Hold Person (Mass)','Insanity','Mage\'s Sword','Phase Door','Power Word Blind',
  'Prismatic Spray','Project Image','Scrying (Greater)','Simulacrum',
  'Spell Turning','Summon Monster VII','Teleport Object','Visions of Death','Wish (Limited)',
  'Blasphemy','Control Undead','Destruction','Dictum','Etherealness','Holy Word',
  'Implosion','Power Word Kill','Power Word Stun','Restoration (Greater)',
  'Resurrection','Spell Turning','Summon Monster VII','Word of God',
  'Antimagic Field (Greater)','Binding','Clone','Demand','Dimension Door (Greater)',
  'Discern Location','Finger of Death (Mass)','Glassee (Permanent)','Incendiary Cloud',
  'Maze','Mind Blank','Moment of Prescience','Polymorph (Greater)','Power Word Blind (Mass)',
  'Prismatic Wall','Prying Eyes (Permanent)','Scintillating Sphere','Screen','Shadow Evocation',
  'Simulacrum (Greater)','Spell Resistance (Greater)','Succesive Life','Summon Monster VIII',
  'Sunburst','Sympathy','Temporal Stasis','Trap the Soul','Teleport (Greater)',
  'Terrain Morph','Veil (Permanent)','Wild Thomas',
  'Astral Projection','Foresight','Freedom','Imprisonment','Mage\'s Disjunction',
  'Meteor Swarm','Power Word Kill','Prismatic Sphere','Shapechange','Soul Bind',
  'Summon Monster IX','Teleport (Mass)','Time Stop','Wail of the Banshee','Weird',
  'Wish','Word of Truth'
]);

let markedPHB = 0, marked3R = 0;
const updated = spells.map(s => {
  if (!s.source) {
    if (PHB_SPELLS.has(s.nameEn)) {
      s.source = 'PHB';
      markedPHB++;
    } else {
      s.source = '3R';
      marked3R++;
    }
  }
  return s;
});

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(updated, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已标记法术来源：');
console.log('  PHB 核心法术:', markedPHB, '个');
console.log('  3R 拓展法术:', marked3R, '个');
console.log('  已有 source 字段:', spells.filter(s => s.source).length - markedPHB - marked3R, '个');
console.log('  总计:', updated.length, '个法术');
