const fs = require('fs');

// 完整的PHB法术列表（玩家手册标准法术）
// 来源：D&D 3.5e PHB 法术列表
const PHB_SPELLS = [
  // ===== 0级法术 (Cantrips) =====
  // 秘法
  'Acid Splash', 'Arcane Mark', 'Dancing Lights', 'Daze', 'Detect Magic',
  'Disrupt Undead', 'Flare', 'Ghost Sound', 'Light', 'Mage Hand',
  'Mending', 'Message', 'Open/Close', 'Prestidigitation', 'Ray of Frost',
  'Read Magic', 'Resistance', 'Touch of Fatigue',
  // 神术
  'Create Water', 'Cure Minor Wounds', 'Detect Poison', 'Detect Magic',
  'Guidance', 'Inflict Minor Wounds', 'Light', 'Mending',
  'Purify Food and Drink', 'Read Magic', 'Resistance', 'Virtue',

  // ===== 1级法术 =====
  // 秘法
  'Alarm', 'Animate Rope', 'Burning Hands', 'Cause Fear', 'Charm Person',
  'Chill Touch', 'Color Spray', 'Comprehend Languages', 'Confusion, Lesser',
  'Daze Monster', 'Detect Secret Doors', 'Disguise Self', 'Endure Elements',
  'Enlarge Person', 'Erase', 'Expeditious Retreat', 'Eye of the Sea',
  'Feather Fall', 'Grease', 'Hold Portal', 'Identify', 'Jump', 'Magic Aura',
  'Magic Missile', 'Mount', 'Mage Armor', 'Nystul\'s Magic Aura',
  'Obscuring Mist', 'Protection from Alignment', 'Ray of Enfeeblement',
  'Reduce Person', 'Shield', 'Shocking Grasp', 'Silent Image', 'Sleep',
  'Summon Monster I', 'Tasha\'s Hideous Laughter', 'True Strike',
  'Unseen Servant', 'Ventriloquism',
  // 神术
  'Bane', 'Bless', 'Bless Water', 'Command', 'Comprehend Languages',
  'Cure Light Wounds', 'Curse Water', 'Detect Alignment', 'Detect Magic',
  'Detect Poison', 'Disguise Self', 'Divination', 'Doom', 'Endure Elements',
  'Entropic Shield', "Eyes of the Avoral'", 'Invisibility to Animals',
  'Inflict Light Wounds', 'Magic Stone', 'Magic Weapon', 'Obscuring Mist',
  'Protection from Alignment', 'Remove Fear', 'Sanctuary', 'Shield of Faith',
  'Summon Monster I', 'Summon Nature\'s Ally I',

  // ===== 2级法术 =====
  // 秘法
  'Animal Messenger', 'Animal Trance', 'Arcane Lock', 'Bear\'s Endurance',
  'Bull\'s Strength', 'Cat\'s Grace', 'Darkness', 'Darkvision',
  'Daylight', 'Death Knell', 'Delay Poison', 'Detect Thoughts',
  'Disappear', 'Dispel Magic', 'Eagle\'s Splendor', 'False Life',
  'Fog Cloud', 'Fox\'s Cunning', 'Gentle Repose', 'Glitterdust',
  'Heroism', 'Hideous Laughter', 'Hypnotic Pattern', 'Invisibility',
  'Knock', 'Leomund\'s Trap', 'Levitate', 'Locate Object',
  'Magic Mouth', 'Minor Image', 'Mirror Image', 'Misdirection',
  'Owl\'s Wisdom', 'Phantasmal Force', 'Protection from Arrows',
  'Pyrotechnics', 'Rage', 'Resist Energy', 'Scare', 'Scorching Ray',
  'See' Invisibility', 'Shatter', 'Silence', 'Sound Burst',
  'Spectral Hand', 'Spider Climb', 'Summon Monster II',
  'Summon Swarm', 'Tasha\'s Malignant Sending', 'Touch of Idiocy',
  'Whispering Wind', 'Continual Flame',
  // 神术
  'Aid', 'Align Weapon', 'Bear\'s Endurance', 'Bull\'s Strength',
  'Cat\'s Grace', 'Consecrate', 'Cure Moderate Wounds', 'Darksight',
  'Death Knell', 'Delay Poison', 'Discern Lies', 'Dispel Magic',
  'Eagle\'s Splendor', 'Enthrall', 'Find Traps', 'Flame Blade',
  'Fog Cloud', 'Gentle Repose', 'Ghoul Touch', 'Heat Metal',
  'Hold Person', 'Inflict Moderate Wounds', 'Make Whole', 'Owl\'s Wisdom',
  'Remove Paralysis', 'Resist Energy', 'Restoration, Lesser',
  'Shatter', 'Shield Other', 'Silence', 'Sound Burst', 'Spiritual Weapon',
  'Status', 'Summon Monster II', 'Summon Nature\'s Ally II',
  'Undetectable Alignment', 'Warp Wood', 'Wood Shape',

  // ===== 3级法术 =====
  // 秘法
  'Arcane Sight', 'Blink', 'Burning Gaze', 'Clairaudience/Clairvoyance',
  'Countermagic', 'Cure Serious Wounds', 'Dimensional Anchor',
  'Dispel Magic', 'Displacement', 'Distract', 'Empower Spell',
  'Explosive Runes', 'Fireball', 'Flame Arrow', 'Fly', 'Gaseous Form',
  'Giant Vermin', 'Halt Undead', 'Heroism, Greater', 'Hold Person',
  'Illusory Script', 'Invisibility, Greater', 'Keen Edge',
  'Lightning Bolt', 'Magic Circle against Alignment', 'Magic Vestment',
  'Major Image', 'Nondetection', 'Phantasmal Killer', 'Planar Binding, Lesser',
  'Poison', 'Project Image', 'Protection from Energy', 'Rary\'s Mnemonic Enhancer',
  'Ray of Enfeeblement, Greater', 'Scrying', 'Sculpt Sound',
  'Secret Page', 'See' Invisibility', 'Sepia Snake Sigil', 'Sleet Storm',
  'Slow', 'Speak with Dead', 'Spell Immunity', 'Spike Growth',
  'Stinking Cloud', 'Suggestion', 'Summon Monster III', 'Tiny Hut',
  'Tongues', 'Vampiric Touch', 'Wall of Stone', 'Water Breathing',
  'Wind Wall',
  // 神术
  'Animate Dead', 'Bestow Curse', 'Blasphemy', 'Call Lightning',
  'Celestial Bloodline', 'Continual Flame', 'Create Food and Water',
  'Cure Blindness/Deafness', 'Cure Disease', 'Cure Serious Wounds',
  'Darkness', 'Daylight', 'Death Ward', 'Deep Slumber', 'Desecrate',
  'Dispel Magic', 'Displacement', 'Domination', 'Flame Strike',
  'Foresight', 'Glyph of Warding', 'Heal Mount', 'Heat Metal',
  'Helping Hand', 'Inflict Serious Wounds', 'Invisibility Purge',
  'Locate Object', 'Magic Circle against Alignment', 'Magic Vestment',
  'Meld into Stone', 'Nightmare', 'Obscure Object', 'Phantasmal Killer',
  'Planar Ally, Lesser', 'Poison', 'Prayer', 'Protection from Energy',
  'Remove Blindness/Deafness', 'Remove Curse', 'Remove Disease',
  'Searing Light', 'Shatter', 'Shield of Law', 'SJunmon Monster III',
  'Summon Nature\'s Ally III', 'Water Breathing', 'Water Walk',
  'Wind Wall', 'Wish, Limited',

  // ===== 4级法术 =====
  // 秘法
  'Animate Dead', 'Arcane Eye', 'Bestow Curse', 'Black Tentacles',
  'Charm Monster', 'Confusion', 'Contagion', 'Control Water',
  'Crushing Despair', 'Detect Scrying', 'Dimension Door',
  'Discern Lies', 'Dispel Magic', 'Divination', 'Dominate Person',
  'Enervation', 'Enlarge Person, Mass', 'Etherealness', 'Expeditious Retreat, Mass',
  'Fear', 'Fire Shield', 'Fire Trap', 'Floating Disk, Permanent',
  'Globe of Invulnerability, Lesser', 'Hallucinatory Terrain',
  'Ice Storm', 'Illusory Wall', 'Imprisonment', 'Insanity',
  'Invisibility, Greater', 'Legend Lore', 'Locate Creature',
  'Mage Armor, Greater', 'Mage Sword', 'Major Creation',
  'Minor Creation', 'Modify Memory', 'Momentary Stasis',
  'Mordenkainen\'s Faithful Hound', 'Mordenkainen\'s Private Sanctum',
  'Mordenkainen\'s Sword', 'Otiluke\'s Resilient Sphere',
  'Otiluke\'s Telekinetic Sphere', 'Phantasmal Killer', 'Polymorph',
  'Prismatic Spray', 'Prying Eyes', 'Ray of Enfeeblement, Greater',
  'Reduce Person, Mass', 'Repel Vermin', 'Scrying', 'Secure Shelter',
  'Shadow Conjuration', 'Shout', 'Shout, Greater', 'Sickening Ray',
  'Solid Fog', 'Soul Bind', 'Spectral Hand', 'Spell Immunity',
  'Spell Turning', 'Statue', 'Stone Shape', 'Summon Monster IV',
  'Tenser\'s Transformation', 'Transmute Mud to Rock', 'Transmute Rock to Mud',
  'Trap the Soul', 'Wall of Fire', 'Wall of Ice', 'Wall of Stone',
  'Watery Sphere', 'Web, Greater', 'Zone of Silence',
  // 神术
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

  // ===== 5级法术 =====
  // 秘法
  'Animal Growth', 'Baleful Polymorph', 'Bigby\'s Interposing Hand',
  'Blight', 'Break Enchantment', 'Cloudkill', 'Contact Other Plane',
  'Control Winds', 'Creation', 'Cure Light Wounds, Mass',
  'Dance of the Dead', 'Death Cloud', 'Demand', 'Dimension Door, Greater',
  'Dispel Magic, Greater', 'Dominate Person', 'Dream', 'Elemental Body',
  'Etherealness', 'Fabricate', 'Faerie Fire', 'Far Hand', 'Far Seeing',
  'Find the Path', 'Flesh to Stone', 'Floating Disk, Permanent',
  'Fly, Overland', 'Fool\'s Speech', 'Geas, Lesser', 'Glassteel',
  'Globe of Invulnerability', 'Guards and Wards', 'Heroism, Greater',
  'Hold Monster', 'Imprisonment', 'Inflict Light Wounds, Mass',
  'Interposing Hand', 'Invisibility, Mass', 'Leomund\'s Secret Chest',
  'Mage\'s Faithful Hound', 'Mage\'s Lucubration', 'Mage\'s Magnificent Mansion',
  'Mage\'s Private Sanctum', 'Major Creation', 'Mislead', 'Modify Memory',
  'Momentary Stasis', 'Moral Dilemma', 'Mordenkainen\'s Disjunction',
  'Mordenkainen\'s Sword', 'Mount, Phantom', 'Nightmare', 'Nystul\'s Crystal Dagger',
  'Overland Flight', 'Passwall', 'Permanent Image', 'Pierce Magic',
  'Planar Binding', 'Prying Eyes, Greater', 'Rary\'s Mnemonic Enhancer',
  'Ray of Enfeeblement, Greater', 'Reincarnate', 'Repel Wood',
  'Seeming', 'Sending', 'Shadow Evocation', 'Shout, Greater',
  'Shuffle', 'Sickening Ray', 'Siege of Stone', 'Silence',
  'Skill School', 'Soul Bind', 'Spectral Hand', 'Spell Resistance',
  'Spell Turning', 'Statue', 'Stone Shape', 'Stone to Flesh',
  'Summon Monster V', 'Telekinesis', 'Teleport', 'Teleport Object',
  'Transmute Mud to Rock', 'Transmute Rock to Mud', 'Trap the Soul',
  'True Seeing', 'Unhallow', 'Vampiric Touch', 'Wall of Force',
  'Wall of Iron', 'Wall of Stone', 'Wave of Fatigue', 'Web, Mass',
  'Wish, Limited', 'Wood Shape',
  // 神术
  'Atonement', 'Banishment', 'Break Enchantment', 'Command, Greater',
  'Commune', 'Commune with Nature', 'Cure Critical Wounds, Mass',
  'Death Ward', 'Dispel Chaos/Law/Evil/Good', 'Dispel Magic, Greater',
  'Divination', 'Divine Power', 'Flame Strike', 'Forbiddance',
  'Geas, Lesser', 'Glyph of Warding, Greater', 'Guards and Wards',
  'Heal', 'Holy Word', 'Imbue with Spell Ability', 'Inflict Critical Wounds, Mass',
  'Insect Plague', 'Mark of Justice', 'Miracle', 'Mantis Leap',
  'Mind Blank', 'Mislead', 'Mountain\'s Fury', 'Neutralize Poison',
  'Planar Ally', 'Poison', 'Power Word Stun', 'Prayer',
  'Raise Dead', 'Regenerate', 'Reincarnate', 'Repel Metal or Stone',
  'Repel Wood', 'Resurrection', 'Righteous Might', 'Sacred Guardian',
  'Scrying', 'Searing Light', 'Sending', 'Shadow Walk',
  'Slay Living', 'Soul Bind', 'Speak with Dead', 'Spell Immunity, Greater',
  'Spiritual Guardian', 'Stone to Flesh', 'Summon Monster V',
  'Summon Nature\'s Ally V', 'Symbol of Pain', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Telekinesis', 'Teleport', 'Teleport Object',
  'Tongues', 'Transmute Rock to Mud', 'True Seeing', 'Unhallow',
  'Unholy Word', 'Wall of Stone', 'Word of Chaos',

  // ===== 6级法术 =====
  // 秘法
  'Acid Fog', 'Analyze Dweomer', 'Animate Objects', 'Anti-Life Shell',
  'Banishment', 'Bigby\'s Clenched Fist', 'Circle of Death',
  'Control Weather', 'Create Undead', 'Daze Monster, Mass',
  'Death Fog', 'Demand', 'Disintegrate', 'Dismissal', 'Dispel Magic, Greater',
  'Etherealness', 'Eyebite', 'Find the Path', 'Flesh to Stone',
  'Forcecage', 'Globe of Invulnerability, Greater', 'Guards and Wards',
  'Heal', 'Heroism, Greater', 'Hold Monster', 'Iceberg', 'Illusory Dragon',
  'Imprisonment', 'Insanity', 'Invisibility, Mass', 'Legend Lore',
  'Mage\'s Lucubration', 'Mage\'s Magnificent Mansion', 'Mage\'s Sword',
  'Magic Jar', 'Mass Suggestion', 'Mend Wounds', 'Mind Fog',
  'Mislead', 'Momentary Stasis', 'Mordenkainen\'s Disjunction',
  'Move Earth', 'Nightmare', 'Nystul\'s Crystal Dagger', 'Otiluke\'s Freezing Sphere',
  'Pain', 'Permanent Image', 'Planar Binding', 'Polymorph, Greater',
  'Power Word Stun', 'Prismatic Spray', 'Programmed Image', 'Project Image',
  'Repel Wood', 'Shadow Walk', 'Shapechange', 'Soul Bind',
  'Spell Turning', 'Stone to Flesh', 'Suggestion, Mass', 'Summon Monster VI',
  'Tasha\'s Metamorphosis', 'Tenser\'s Transformation', 'True Seeing',
  'Undeath to Death', 'Vampiric Touch', 'Veil', 'Wall of Force',
  'Wall of Iron', 'Wish', 'Word of Recall',
  // 神术
  'Animate Objects', 'Anti-Life Shell', 'Banishment', 'Banishment, Greater',
  'Blade Barrier', 'Blight', 'Circle of Death', 'Cleanse', 'Commune',
  'Commune with Nature', 'Create Undead', 'Cure Moderate Wounds, Mass',
  'Cure Serious Wounds, Mass', 'Death Ward', 'Dispel Magic, Greater',
  'Divination', 'Divine Power', 'Etherealness', 'Find the Path',
  'Forbiddance', 'Glyph of Warding, Greater', 'Heal', 'Heal, Mass',
  'Heat Metal', 'Helping Hand', 'Heroes\' Feast', 'Imbue with Spell Ability',
  'Inflict Moderate Wounds, Mass', 'Inflict Serious Wounds, Mass',
  'Insect Plague', 'Iron Body', 'Magic Circle against Alignment, Greater',
  'Mantis Leap', 'Mark of Justice', 'Miracle', 'Mislead',
  'Move Earth', 'Neutralize Poison', 'Planar Ally', 'Poison',
  'Power Word Stun', 'Prayer', 'Raise Dead', 'Regenerate',
  'Reincarnate', 'Repel Metal or Stone', 'Repel Wood', 'Resurrection',
  'Restoration', 'Resurrection', 'Righteous Might', 'Sacred Guardian',
  'Scrying', 'Searing Light', 'Sending', 'Shadow Walk',
  'Slay Living', 'Soul Bind', 'Speak with Dead', 'Spell Immunity, Greater',
  'Spiritual Guardian', 'Stone to Flesh', 'Summon Monster VI',
  'Summon Nature\'s Ally VI', 'Symbol of Fear', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Teleport', 'Teleport Object', 'Tongues',
  'Transmute Metal to Wood', 'True Seeing', 'Unhallow', 'Undeath to Death',
  'Wall of Stone', 'Wind Walk', 'Word of Chaos',

  // ===== 7级法术 =====
  // 秘法
  'Arcane Sight, Greater', 'Bigby\'s Grasping Hand', 'Control Magic',
  'Control Undead', 'Demand', 'Destruction', 'Dictum', 'Disintegrate',
  'Dismissal', 'Dispel Magic, Greater', 'Divination', 'Drawmij\'s Instant Summons',
  'Etherealness', 'Finger of Death', 'Forcecage', 'Grasping Hand',
  'Greater Scrying', 'Guards and Wards', 'Hold Person, Mass',
  'Insanity', 'Instant Summons', 'Invisibility, Mass', 'Legend Lore',
  'Limited Wish', 'Mage\'s Sword', 'Magic Mirror', 'Mantle, Prismatic',
  'Mordenkainen\'s Lucubration', 'Mordenkainen\'s Magnificent Mansion',
  'Mordenkainen\'s Sword', 'Phase Door', 'Power Word Stun',
  'Prismatic Spray', 'Programmed Image', 'Project Image', 'Reality Revision',
  'Resurrection', 'Reverse Gravity', 'Scrying, Greater', 'Sequester',
  'Shadow Walk', 'Shapechange', 'Simulacrum', 'Spell Turning',
  'Statue', 'Stone to Flesh', 'Suggestion, Mass', 'Summon Monster VII',
  'Teleport, Greater', 'Teleport Object', 'Temporal Stasis',
  'Time Stop', 'Transmute Metal to Wood', 'True Seeing', 'Visions of Death',
  'Wish', 'Word of Chaos', 'Word of Recall',
  // 神术
  'Animate Objects', 'Anti-Life Shell', 'Banishment', 'Blade Barrier',
  'Circle of Death', 'Cleanse', 'Commune', 'Commune with Nature',
  'Control Undead', 'Cure Light Wounds, Mass', 'Death Ward',
  'Destruction', 'Dictum', 'Dispel Magic, Greater', 'Divination',
  'Divine Power', 'Etherealness', 'Find the Path', 'Forbiddance',
  'Glyph of Warding, Greater', 'Heal', 'Heal, Mass', 'Heat Metal',
  'Helping Hand', 'Heroes\' Feast', 'Holy Word', 'Imbue with Spell Ability',
  'Inflict Light Wounds, Mass', 'Insect Plague', 'Iron Body',
  'Mantis Leap', 'Mark of Justice', 'Miracle', 'Mislead',
  'Move Earth', 'Neutralize Poison', 'Planar Ally', 'Poison',
  'Power Word Stun', 'Prayer', 'Raise Dead', 'Regenerate',
  'Reincarnate', 'Repel Metal or Stone', 'Repel Wood', 'Resurrection',
  'Restoration', 'Righteous Might', 'Sacred Guardian', 'Scrying, Greater',
  'Searing Light', 'Sending', 'Shadow Walk', 'Slay Living',
  'Soul Bind', 'Speak with Dead', 'Spell Immunity, Greater',
  'Spiritual Guardian', 'Stone to Flesh', 'Summon Monster VII',
  'Summon Nature\'s Ally VII', 'Symbol of Fear', 'Symbol of Pain',
  'Symbol of Persuasion', 'Symbol of Sleep', 'Teleport', 'Teleport Object',
  'Time Stop', 'Tongues', 'Transmute Metal to Wood', 'True Seeing',
  'Unhallow', 'Undeath to Death', 'Wall of Stone', 'Wind Walk',
  'Word of Chaos', 'Word of Recall',

  // ===== 8级法术 =====
  // 秘法
  'Antimagic Field', 'Binding', 'Bigby\'s Clenched Fist', 'Blight',
  'Clone', 'Create Greater Undead', 'Dazing Ray', 'Death Cloud',
  'Demand', 'Destruction', 'Discern Location', 'Dismantle',
  'Dispel Magic, Greater', 'Divination', 'Dominate Person', 'Etherealness',
  'Finger of Death', 'Fire Storm', 'Foresight', 'Glassteel',
  'Globe of Invulnerability, Greater', 'Guards and Wards', 'Hellfire',
  'Hold Monster', 'Horrid Wilting', 'Iceberg', 'Imprisonment',
  'Incendiary Cloud', 'Insanity', 'Invisibility, Mass', 'Irresistible Dance',
  'Legend Lore', 'Limited Wish', 'Maddening Whispers', 'Mantle, Prismatic',
  'Mass Charm', 'Maze', 'Mind Blank', 'Mirage Arcana', 'Momentary Stasis',
  'Mordenkainen\'s Disjunction', 'Mordenkainen\'s Lucubration',
  'Mordenkainen\'s Magnificent Mansion', 'Mordenkainen\'s Sword',
  'Move Earth', 'Nightmare', 'Otiluke\'s Telekinetic Sphere',
  'Phase Door', 'Planar Binding, Greater', 'Polymorph, Greater',
  'Power Word Blind', 'Prismatic Wall', 'Programmed Image', 'Project Image',
  'Protection from Spells', 'Reality Revision', 'Reverse Gravity',
  'Scintillating Pattern', 'Screen', 'Searing Light', 'Shapechange',
  'Simulacrum', 'Soul Bind', 'Spell Immunity, Greater', 'Spell Turning',
  'Statue', 'Stone to Flesh', 'Summon Monster VIII', 'Sunburst',
  'Sympathy', 'Temporal Stasis', 'Time Stop', 'Trap the Soul',
  'True Seeing', 'Undeath to Death', 'Visions of Death', 'Wall of Prismatic',
  'Wish', 'Word of Chaos',
  // 神术
  'Antimagic Field', 'Blessing of the Gods', 'Blight', 'Changestaff',
  'Clone', 'Control Weather', 'Create Greater Undead', 'Cure Critical Wounds, Mass',
  'Death Ward', 'Destruction', 'Discern Location', 'Dispel Magic, Greater',
  'Divination', 'Divine Power', 'Earthquake', 'Etherealness', 'Finger of Death',
  'Fire Storm', 'Forbiddance', 'Foresight', 'Glyph of Warding, Greater',
  'Hallow', 'Heal', 'Heal, Mass', 'Heat Metal', 'Holy Aura',
  'Imbue with Spell Ability', 'Incendiary Cloud', 'Inflict Critical Wounds, Mass',
  'Iron Body', 'Mantis Leap', 'Mark of Justice', 'Miracle',
  'Momentary Stasis', 'Moonwell', 'Move Earth', 'Neutralize Poison',
  'Planar Ally', 'Poison', 'Power Word Blind', 'Prayer', 'Prismatic Wall',
  'Raise Dead', 'Regenerate', 'Reincarnate', 'Repel Metal or Stone',
  'Resurrection', 'Restoration', 'Righteous Might', 'Sacred Guardian',
  'Scouring of the Land', 'Scrying, Greater', 'Searing Light', 'Sending',
  'Shadow Walk', 'Slay Living', 'Soul Bind', 'Speak with Dead',
  'Spell Immunity, Greater', 'Spiritual Guardian', 'Storm of Vengeance',
  'Summon Monster VIII', 'Summon Nature\'s Ally VIII', 'Sunburst',
  'Symbol of Death', 'Symbol of Insanity', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Sympathy', 'Temporal Stasis', 'Time Stop',
  'Transmute Metal to Wood', 'True Seeing', 'Unhallow', 'Undeath to Death',
  'Unholy Aura', 'Whirlwind', 'Wind Walk', 'Word of Chaos',

  // ===== 9级法术 =====
  // 秘法
  'Astral Projection', 'Bigby\'s Crushing Hand', 'Binding', 'Clenched Fist',
  'Control Weather', 'Crushing Hand', 'Damnation', 'Dazing Ray',
  'Demand', 'Destruction', 'Discern Location', 'Disjunction',
  'Dispel Magic, Greater', 'Dominate Monster', 'Dream, Ethereal',
  'Etherealness', 'Energy Drain', 'Enslave', 'Etherealness', 'Falling',
  'Fiery Body', 'Find the Path', 'Foresight', 'Freedom', 'Grasping Hand',
  'Greedy Grasp', 'Guards and Wards', 'Gust of Wind, Greater',
  'Hasteness', 'Heal', 'Hellfire', 'Hold Monster', 'Holy Aura',
  'Imprisonment', 'Incendiary Cloud', 'Insanity', 'Invoke Miracle',
  'Invisibility, Mass', 'Iron Body', 'Kindle Emotions', 'Legend Lore',
  'Limited Wish', 'Maddening Whispers', 'Mantle, Prismatic',
  'Mass Charm', 'Maze', 'Mind Blank', 'Mirage Arcana', 'Miracle',
  'Momentary Stasis', 'Mordenkainen\'s Disjunction',
  'Mordenkainen\'s Lucubration', 'Mordenkainen\'s Magnificent Mansion',
  'Mordenkainen\'s Sword', 'Move Earth', 'Nagging Spirits',
  'Nightmare', 'Otiluke\'s Telekinetic Sphere', 'Overwhelming Presence',
  'Panic', 'Phase Door', 'Planar Binding, Greater', 'Polymorph, Greater',
  'Power Word Kill', 'Prismatic Sphere', 'Prismatic Wall',
  'Programmed Image', 'Project Image', 'Protection from Spells',
  'Prying Eyes, Greater', 'Rampant Vortex', 'Reality Revision',
  'Reverse Gravity', 'Scintillating Pattern', 'Screen', 'Searing Light',
  'Shapechange', 'Shivering Touch', 'Simulacrum', 'Slay Living',
  'Soul Bind', 'Spell Immunity, Greater', 'Spell Engine', 'Spell Turning',
  'Statue', 'Stone to Flesh', 'Storm of Vengeance', 'Summon Monster IX',
  'Sunburst', 'Sympathy', 'Temporal Stasis', 'Time Stop',
  'Trap the Soul', 'True Resurrection', 'Undeath to Death',
  'Unholy Aura', 'Visions of Death', 'Wall of Prismatic', 'Wish',
  'Word of Chaos',
  // 神术
  'Antimagic Field', 'Astral Projection', 'Blessing of the Gods', 'Blight',
  'Changestaff', 'Clone', 'Control Weather', 'Create Greater Undead',
  'Cure Critical Wounds, Mass', 'Damage', 'Darkbolt', 'Death Ward',
  'Destruction', 'Discern Location', 'Dispel Magic, Greater', 'Divination',
  'Divine Power', 'Dominate Monster', 'Earthquake', 'Etherealness',
  'Elemental Swarm', 'Energy Drain', 'Etherealness', 'Finger of Death',
  'Fire Storm', 'Foresight', 'Glyph of Warding, Greater', 'Hallow',
  'Heal', 'Heal, Mass', 'Heat Metal', 'Heavens\'s Lightning', 'Holy Aura',
  'Holy Word', 'Imbue with Spell Ability', 'Implosion', 'Incendiary Cloud',
  'Inflict Critical Wounds, Mass', 'Iron Body', 'Mantis Leap',
  'Mark of Justice', 'Miracle', 'Momentary Stasis', 'Moonwell',
  'Move Earth', 'Murderous Ether', 'Neutralize Poison', 'Overwhelming Presence',
  'Planar Ally', 'Poison', 'Power Word Kill', 'Prayer', 'Prismatic Wall',
  'Raise Dead', 'Regenerate', 'Reincarnate', 'Repel Metal or Stone',
  'Resurrection', 'Restoration', 'Righteous Might', 'Sacred Guardian',
  'Scouring of the Land', 'Scrying, Greater', 'Searing Light', 'Sending',
  'Shadow Walk', 'Slay Living', 'Soul Bind', 'Speak with Dead',
  'Spell Immunity, Greater', 'Spiritual Guardian', 'Storm of Vengeance',
  'Summon Monster IX', 'Summon Nature\'s Ally IX', 'Sunburst',
  'Symbol of Death', 'Symbol of Insanity', 'Symbol of Persuasion',
  'Symbol of Sleep', 'Sympathy', 'Temporal Stasis', 'Time Stop',
  'Transmute Metal to Wood', 'True Seeing', 'True Resurrection',
  'Unhallow', 'Undeath to Death', 'Unholy Aura', 'Whirlwind',
  'Wind Walk', 'Word of Chaos', 'Wish'
];

// 读取现有法术
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
const spells = fn();

// 创建现有法术ID的Set（用于匹配）
const existingIds = new Set(spells.map(s => s.id.toLowerCase()));
const existingNames = new Set(spells.map(s => s.name.toLowerCase()));

console.log('=== PHB法术完整性审计 ===\n');
console.log(`现有法术总数: ${spells.length}`);
console.log(`现有PHB法术: ${spells.filter(s => s.source === 'PHB').length}`);
console.log(`现有3R法术: ${spells.filter(s => s.source === '3R').length}`);
console.log(`\nPHB标准法术列表: ${PHB_SPELLS.length}个\n`);

// 查找缺失的法术
const missing = [];
const found = [];

PHB_SPELLS.forEach(name => {
  // 尝试多种匹配方式
  const nameLower = name.toLowerCase();
  const id = nameLower.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  // 检查ID或名称是否匹配
  if (existingIds.has(id) || existingNames.has(nameLower)) {
    found.push(name);
  } else {
    missing.push(name);
  }
});

console.log(`✅ 已找到: ${found.length}个`);
console.log(`❌ 缺失: ${missing.length}个\n`);

if (missing.length > 0) {
  console.log('=== 缺失的PHB法术 ===');
  missing.forEach((name, i) => {
    console.log(`${i+1}. ${name}`);
  });

  // 按等级分组
  console.log('\n=== 按等级分类缺失法术 ===');
  const byLevel = {};
  missing.forEach(name => {
    // 简单判断等级（根据法术名称推测，实际需要更精确的分类）
    let level = '未知';
    // 这里需要更准确的分类，暂时省略
    if (!byLevel[level]) byLevel[level] = [];
    byLevel[level].push(name);
  });

  Object.keys(byLevel).sort().forEach(level => {
    console.log(`\n${level}:`);
    byLevel[level].forEach(name => console.log(`  - ${name}`));
  });
}

// 保存缺失法术列表
fs.writeFileSync('missing-phb-spells.json', JSON.stringify(missing, null, 2));
console.log(`\n缺失法术列表已保存到 missing-phb-spells.json`);
