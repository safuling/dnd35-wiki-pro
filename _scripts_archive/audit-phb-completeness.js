/**
 * PHB 3.5e 法术完整性审计脚本
 * 对照 PHB 完整法术列表，检测 spells-data.js 中缺失的法术
 */
const fs = require('fs');
const path = require('path');

// 读取 spells-data.js
const dataPath = path.resolve(__dirname, '..', 'js', 'spells-data.js');
const dataContent = fs.readFileSync(dataPath, 'utf8');

// 提取所有法术ID
const idMatches = [...dataContent.matchAll(/"id"\s*:\s*"([^"]+)"/g)];
const existingIds = new Set(idMatches.map(m => m[1]));

// 提取所有中文名
const nameZhMatches = [...dataContent.matchAll(/"nameZh"\s*:\s*"([^"]+)"/g)];
const existingNamesZh = new Set(nameZhMatches.map(m => m[1]));

// 提取所有英文名
const nameEnMatches = [...dataContent.matchAll(/"nameEn"\s*:\s*"([^"]+)"/g)];
const existingNamesEn = new Set(nameEnMatches.map(m => m[1]));

console.log(`当前法术数据库: ${existingIds.size} 条唯一ID`);
console.log(`中文名: ${existingNamesZh.size} 个 | 英文名: ${existingNamesEn.size} 个`);
console.log('');

// PHB 3.5e 完整法术列表 (按环级)
// 参考: PHB Chapter 11: Spells
const PHB_SPELLS = {
  // ===== 术士/法师 0级 =====
  0: [
    'acid_splash', 'arcane_mark', 'dancing_lights', 'daze', 'detect_magic',
    'detect_poison', 'disrupt_undead', 'flare', 'ghost_sound', 'know_direction',
    'light', 'lullaby', 'mage_hand', 'mending', 'message',
    'open_close', 'prestidigitation', 'ray_of_frost', 'read_magic', 'resistance',
    'touch_of_fatigue'
  ],
  // ===== 1级 =====
  1: [
    'alarm', 'animate_ropes', 'burning_hands', 'cause_fear', 'change_self',
    'charm_person', 'chill_touch', 'color_spray', 'comprehend_languages', 'confusion_lesser',
    'detect_secret_doors', 'detect_undead', 'disguise_self', 'endure_elements', 'enlarge_person',
    'erase', 'expeditious_retreat', 'feather_fall', 'grease', 'hold_portal',
    'hypnotism', 'identify', 'illusory_script', 'jump', 'mage_armor',
    'magic_missile', 'magic_weapon', 'mount', 'nystuls_magic_aura', 'obscuring_mist',
    'protection_from_chaos', 'protection_from_evil', 'protection_from_good', 'protection_from_law', 'ray_of_enfeeblement',
    'reduce_person', 'remove_fear', 'shield', 'shocking_grasp', 'silent_image',
    'sleep', 'summon_monster_i', 'tenacious_phasm', 'true_strike', 'unseen_servant',
    'ventriloquism'
  ],
  // ===== 2级 =====
  2: [
    'arcane_lock', 'bears_endurance', 'blindness_deafness', 'blur', 'bulls_strength',
    'cats_grace', 'command_undead', 'continual_flame', 'darkness', 'darkvision',
    'detect_thoughts', 'eagles_splendor', 'false_life', 'flaming_sphere', 'fog_cloud',
    'foxs_cunning', 'ghoul_touch', 'glitterdust', 'gust_of_wind', 'hypnotic_pattern',
    'invisibility', 'knock', 'levitate', 'locate_object', 'magic_mouth',
    'minor_image', 'mirror_image', 'misdirection', 'obscure_object', 'owl_wisdom',
    'phantasmal_killer', 'protection_from_arrows', 'pyrotechnics', 'resist_energy', 'rope_trick',
    'scare', 'scorching_ray', 'see_invisibility', 'shatter', 'spectral_hand',
    'spider_climb', 'stinking_cloud', 'summon_monster_ii', 'summon_swarm', 'tashas_hideous_laughter',
    'touch_of_idiocy', 'web', 'whispering_wind'
  ],
  // ===== 3级 =====
  3: [
    'arcane_sight', 'blink', 'clairaudience_clairvoyance', 'daylight', 'deep_slumber',
    'dispel_magic', 'displacement', 'explosive_runes', 'fireball', 'flame_arrow',
    'fly', 'gaseous_form', 'halt_undead', 'haste', 'heroism',
    'hold_person', 'illusory_script', 'invisibility_sphere', 'keen_edge', 'leomunds_hut',
    'lightning_bolt', 'magic_circle_against_chaos', 'magic_circle_against_evil', 'magic_circle_against_good', 'magic_circle_against_law',
    'magic_weapon_greater', 'major_image', 'nondetection', 'phantom_steed', 'protection_from_energy',
    'rage', 'ray_of_exhaustion', 'remove_curse', 'secret_page', 'sepia_snake_sigil',
    'shrink_item', 'sleet_storm', 'slow', 'stinking_cloud', 'suggestion',
    'summon_monster_iii', 'tongues', 'vampiric_touch', 'water_breathing', 'wind_wall'
  ],
  // ===== 4级 =====
  4: [
    'animate_dead', 'arcane_eye', 'bestow_curse', 'black_tentacles', 'charm_monster',
    'confusion', 'contagion', 'crushing_despair', 'detect_scrying', 'dimension_door',
    'dimensional_anchor', 'enervation', 'enlarge_person_mass', 'fear', 'fire_shield',
    'fire_trap', 'freedom_of_movement', 'globe_of_invulnerability_lesser', 'hallucinatory_terrain', 'ice_storm',
    'illusionary_wall', 'invisibility_greater', 'leomunds_secure_shelter', 'locate_creature', 'minor_creation',
    'mnemonic_enhancer', 'obliterating_sphere', 'phantasmal_killer', 'polymorph', 'rainbow_pattern',
    'reduce_person_mass', 'remove_curse', 'resilient_sphere', 'scrying', 'shadow_conjuration',
    'shout', 'solid_fog', 'stone_shape', 'stone_skin', 'summon_monster_iv',
    'wall_of_fire', 'wall_of_ice', 'zone_of_silence'
  ],
  // ===== 5级 =====
  5: [
    'animal_growth', 'baleful_polymorph', 'break_enchantment', 'cloudkill', 'cone_of_cold',
    'contact_other_plane', 'dismissal', 'dominate_person', 'dream', 'fabricate',
    'false_vision', 'feeblemind', 'hold_monster', 'interposing_hand', 'leomunds_secret_chest',
    'mage_faithful_hound', 'mage_private_sanctum', 'magic_jar', 'major_creation', 'mind_fog',
    'mirage_arcana', 'nightmare', 'overland_flight', 'passwall', 'permanency',
    'persistent_image', 'planar_binding_lesser', 'prying_eyes', 'seeming', 'sending',
    'shadow_evocation', 'summon_monster_v', 'symbol_of_pain', 'symbol_of_sleep', 'telekinesis',
    'teleport', 'teleportation_circle', 'transmute_mud_to_rock', 'transmute_rock_to_mud', 'wall_of_force',
    'wall_of_stone', 'waves_of_fatigue'
  ],
  // ===== 6级 =====
  6: [
    'acid_fog', 'analyze_dweomer', 'antimagic_field', 'bear_endurance_mass', 'bears_endurance_mass',
    'black_blade_of_disaster', 'bulls_strength_mass', 'cats_grace_mass', 'chain_lightning', 'circle_of_death',
    'contingency', 'control_water', 'create_undead', 'disintegrate', 'dispel_magic_greater',
    'eagles_splendor_mass', 'eyebite', 'flesh_to_stone', 'forcecage', 'foxs_cunning_mass',
    'freezing_sphere', 'geas_quest', 'globe_of_invulnerability', 'guards_and_wards', 'heroes_feast',
    'legend_lore', 'mislead', 'move_earth', 'owl_wisdom_mass', 'permanent_image',
    'planar_binding', 'programmed_amnesia', 'repulsion', 'shadow_walk', 'stone_to_flesh',
    'suggestion_mass', 'summon_monster_vi', 'symbol_of_fear', 'sympathy', 'true_seeing',
    'undead_to_death', 'undeath_to_death', 'veil', 'wall_of_iron'
  ],
  // ===== 7级 =====
  7: [
    'arcane_sight_greater', 'banishment', 'control_undead', 'control_weather', 'delayed_blast_fireball',
    'ethereal_jaunt', 'finger_of_death', 'forcecage', 'hold_person_mass', 'insanity',
    'instant_summons', 'invisibility_mass', 'limited_wish', 'mage_magnificent_mansion', 'mage_sword',
    'phase_door', 'plane_shift', 'power_word_blind', 'prismatic_spray', 'project_image',
    'reverse_gravity', 'scrying_greater', 'sequester', 'shadow_conjuration_greater', 'spell_turning',
    'statue', 'summon_monster_vii', 'symbol_of_stunning', 'symbol_of_weakness', 'teleport_greater',
    'teleport_object', 'vision', 'waves_of_exhaustion'
  ],
  // ===== 8级 =====
  8: [
    'antipathy', 'binding', 'clone', 'demand', 'discern_location',
    'dimensional_lock', 'horrid_wilting', 'incendiary_cloud', 'iron_body', 'maze',
    'mind_blank', 'otilukes_telekinetic_sphere', 'permanency', 'polarity_reverse', 'power_word_stun',
    'prismatic_wall', 'protection_from_spells', 'scintillating_pattern', 'screen', 'shadow_evocation_greater',
    'shout_greater', 'summon_monster_viii', 'sunburst', 'symbol_of_death', 'sympathetic_vibration',
    'temporal_stasis', 'trap_the_soul'
  ],
  // ===== 9级 =====
  9: [
    'astral_projection', 'dominate_monster', 'energy_drain', 'etherealness', 'foresight',
    'freedom', 'gate', 'imprisonment', 'mage_disjunction', 'meteor_swarm',
    'power_word_kill', 'prismatic_sphere', 'refuge', 'shapechange', 'soul_bind',
    'summon_monster_ix', 'teleportation_circle', 'time_stop', 'true_polymorph', 'wail_of_the_banshee',
    'weird', 'wish'
  ]
};

// 牧师/德鲁伊法术（PHB独有，不在上面列表中的）
const CLERIC_DRUID_EXTRA = [
  // 牧师0级
  'create_water', 'cure_minor_wounds', 'detect_poison', 'guidance', 'inflict_minor_wounds',
  'mending', 'purify_food_and_drink', 'virtue',
  // 牧师1级
  'bless', 'bless_water', 'bane', 'command', 'comprehend_languages',
  'cure_light_wounds', 'deathwatch', 'detect_chaos', 'detect_evil', 'detect_good',
  'detect_law', 'divine_favor', 'doom', 'entropic_shield', 'hide_from_undead',
  'inflict_light_wounds', 'magic_stone', 'magic_weapon', 'protection_from_chaos', 'protection_from_evil',
  'protection_from_good', 'protection_from_law', 'remove_fear', 'sanctuary', 'shield_of_faith',
  // 牧师2级
  'aid', 'align_weapon', 'augury', 'bears_endurance', 'bulls_strength',
  'calm_emotions', 'consecrate', 'cure_moderate_wounds', 'darkness', 'delay_poison',
  'desecrate', 'eagles_splendor', 'enthral', 'find_traps', 'gentle_repose',
  'hold_person', 'inflict_moderate_wounds', 'make_whole', 'owl_wisdom', 'remove_paralysis',
  'resist_energy', 'restoration_lesser', 'shatter', 'silence', 'spiritual_weapon',
  'status', 'undetectable_alignment', 'zone_of_truth',
  // 牧师3级
  'animate_dead', 'bestow_curse', 'blindness_deafness', 'cloak_of_chaos', 'create_food_and_water',
  'cure_serious_wounds', 'daylight', 'deeper_darkness', 'dispel_magic', 'glyph_of_warding',
  'heal_mount', 'helping_hand', 'inflict_serious_wounds', 'invisibility_purge', 'locate_object',
  'magic_circle_against_chaos', 'magic_circle_against_evil', 'magic_circle_against_good', 'magic_circle_against_law', 'magic_vestment',
  'meld_into_stone', 'obscuring_mist', 'prayer', 'protection_from_energy', 'remove_blindness_deafness',
  'remove_curse', 'remove_disease', 'searing_light', 'speak_with_dead', 'stone_shape',
  'summon_monster_iii', 'water_walk', 'wind_wall',
  // 牧师4级
  'air_walk', 'chaos_hammer', 'control_water', 'cure_critical_wounds', 'death_ward',
  'dimensional_anchor', 'discern_lies', 'dismissal', 'divination', 'freedom_of_movement',
  'giant_vermin', 'holy_smite', 'imbue_with_spell_ability', 'inflict_critical_wounds', 'magic_weapon_greater',
  'neutralize_poison', 'order_chaos', 'planar_ally_lesser', 'poison', 'repel_vermin',
  'restoration', 'sending', 'spell_immunity', 'summon_monster_iv', 'tongues',
  'unholy_blight',
  // 牧师5级
  'break_enchantment', 'command_greater', 'commune', 'dispel_chaos', 'dispel_evil',
  'dispel_good', 'dispel_law', 'disrupting_weapon', 'flame_strike', 'heal',
  'hallow', 'inflict_light_wounds_mass', 'mark_of_justice', 'plane_shift', 'raise_dead',
  'righteous_might', 'scrying', 'slay_living', 'spell_resistance', 'summon_monster_v',
  'symbol_of_pain', 'symbol_of_sleep', 'true_seeing', 'unhallow', 'wall_of_fire',
  'wall_of_stone',
  // 牧师6级
  'animate_objects', 'antilife_shell', 'banishment', 'bears_endurance_mass', 'blade_barrier',
  'bulls_strength_mass', 'create_undead', 'cure_light_wounds_mass', 'dispel_magic_greater', 'eagles_splendor_mass',
  'find_the_path', 'forbiddance', 'geas_quest', 'glyph_of_warding_greater', 'harm',
  'heal', 'heroes_feast', 'inflict_moderate_wounds_mass', 'owl_wisdom_mass', 'planar_ally',
  'summon_monster_vi', 'symbol_of_fear', 'undeath_to_death', 'wind_walk', 'word_of_recall',
  // 牧师7级
  'blasphemy', 'cats_grace_mass', 'control_weather', 'cure_serious_wounds_mass', 'destruction',
  'dictum', 'ethereal_jaunt', 'foxs_cunning_mass', 'holy_word', 'inflict_serious_wounds_mass',
  'refuge', 'regenerate', 'repulsion', 'restoration_greater', 'scrying_greater',
  'shield_of_law', 'summon_monster_vii', 'symbol_of_stunning', 'symbol_of_weakness', 'word_of_chaos',
  // 牧师8级
  'antimagic_field', 'cloak_of_chaos', 'cure_critical_wounds_mass', 'dimensional_lock', 'discern_location',
  'earthquake', 'finger_of_death', 'fire_storm', 'holy_aura', 'inflict_critical_wounds_mass',
  'planar_ally_greater', 'shield_of_law', 'spell_immunity_greater', 'summon_monster_viii', 'symbol_of_death',
  'unholy_aura',
  // 牧师9级
  'astral_projection', 'energy_drain', 'etherealness', 'gate', 'heal_mass',
  'implosion', 'inflict_critical_wounds_mass', 'miracle', 'soul_bind', 'summon_monster_ix',
  'true_resurrection'
];

// 德鲁伊独有法术
const DRUID_EXTRA = [
  // 德鲁伊0级
  'detect_poison', 'detect_snares_and_pits', 'flare', 'guidance', 'know_direction',
  'light', 'mending', 'purify_food_and_drink', 'read_magic', 'resistance',
  'virtue',
  // 德鲁伊1级
  'calm_animals', 'charm_animal', 'cure_light_wounds', 'detect_animals_or_plants', 'detect_poison',
  'detect_snares_and_pits', 'endure_elements', 'entangle', 'faerie_fire', 'goodberry',
  'hide_from_animals', 'jump', 'longstrider', 'magic_fang', 'magic_stone',
  'obscuring_mist', 'pass_without_trace', 'produce_flame', 'shillelagh', 'speak_with_animals',
  // 德鲁伊2级
  'animal_messenger', 'animal_trance', 'barkskin', 'chill_metal', 'delay_poison',
  'flame_blade', 'flaming_sphere', 'fog_cloud', 'gust_of_wind', 'heat_metal',
  'hold_animal', 'owl_wisdom', 'reduce_animal', 'resist_energy', 'restoration_lesser',
  'shapechange_animal', 'snare', 'soften_earth_and_stone', 'spider_climb', 'summon_natures_ally_ii',
  'summon_swarm', 'tree_shape', 'warp_wood', 'wood_shape',
  // 德鲁伊3级
  'call_lightning', 'cure_moderate_wounds', 'diminish_plants', 'dominate_animal', 'greater_magic_fang',
  'meld_into_stone', 'neutralize_poison', 'plant_growth', 'poison', 'protection_from_energy',
  'quench', 'remove_disease', 'sleet_storm', 'snare', 'speak_with_plants',
  'spike_growth', 'stone_shape', 'summon_natures_ally_iii', 'water_breathing', 'wind_wall',
  // 德鲁伊4级
  'air_walk', 'antiplant_shell', 'blight', 'command_plants', 'control_water',
  'cure_serious_wounds', 'dispel_magic', 'flame_strike', 'freedom_of_movement', 'giant_vermin',
  'ice_storm', 'reincarnate', 'repel_vermin', 'rusting_grasp', 'scrying',
  'spike_stones', 'summon_natures_ally_iv', 'tree_stride', 'wall_of_fire', 'wall_of_thorns',
  // 德鲁伊5级
  'animal_growth', 'atonement', 'awaken', 'baleful_polymorph', 'call_lightning_storm',
  'commune_with_nature', 'control_winds', 'death_ward', 'hallow', 'insect_plague',
  'stoneskin', 'summon_natures_ally_v', 'transmute_mud_to_rock', 'transmute_rock_to_mud', 'tree_stride',
  'unhallow', 'wall_of_stone', 'wall_of_thorns',
  // 德鲁伊6级
  'antilife_shell', 'bear_endurance_mass', 'bulls_strength_mass', 'cure_light_wounds_mass', 'dispel_magic_greater',
  'find_the_path', 'fire_seeds', 'ironwood', 'liveoak', 'move_earth',
  'repel_wood', 'spellstaff', 'stone_tell', 'summon_natures_ally_vi', 'transport_via_plants',
  'wall_of_stone', 'wind_walk',
  // 德鲁伊7级
  'animate_plants', 'changestaff', 'control_weather', 'creeping_doom', 'cure_serious_wounds_mass',
  'fire_storm', 'heal', 'scrying_greater', 'sunbeam', 'summon_natures_ally_vii',
  'transmute_metal_to_wood', 'true_seeing', 'wind_walk',
  // 德鲁伊8级
  'animal_shapes', 'control_plants', 'cure_critical_wounds_mass', 'earthquake', 'finger_of_death',
  'repel_metal_or_stone', 'reverse_gravity', 'summon_natures_ally_viii', 'sunburst', 'whirlwind',
  'word_of_recall',
  // 德鲁伊9级
  'antipathy', 'elemental_swarm', 'foresight', 'heal_mass', 'regenerate',
  'shambler', 'shapechange', 'storm_of_vengeance', 'summon_natures_ally_ix', 'sympathy'
];

// 吟游诗人独有法术（部分与术士/法师重叠，以下为独有）
const BARD_EXTRA = [
  'cure_light_wounds', 'cure_moderate_wounds', 'cure_serious_wounds', 'cure_critical_wounds',
  'cure_light_wounds_mass', 'cure_moderate_wounds_mass', 'cure_serious_wounds_mass', 'cure_critical_wounds_mass',
  'charm_monster', 'confusion', 'crushing_despair', 'detect_secret_doors',
  'eagles_splendor', 'eagles_splendor_mass', 'good_hope', 'heroes_feast', 'heroism',
  'heroism_greater', 'hold_monster', 'hold_person', 'invisibility', 'invisibility_greater',
  'irresistible_dance', 'lullaby', 'modify_memory', 'song_of_discord', 'suggestion',
  'suggestion_mass', 'summon_monster_i', 'summon_monster_ii', 'summon_monster_iii', 'summon_monster_iv',
  'summon_monster_v', 'summon_monster_vi', 'summon_monster_vii', 'summon_monster_viii', 'summon_monster_ix',
  'sound_burst', 'shout', 'shout_greater'
];

// 游侠/圣武士法术（低级别神术）
const RANGER_PALADIN_EXTRA = [
  'cure_light_wounds', 'cure_moderate_wounds', 'cure_serious_wounds',
  'detect_poison', 'endure_elements', 'magic_fang', 'pass_without_trace',
  'resist_energy', 'bless', 'divine_favor', 'magic_weapon', 'protection_from_evil',
  'shield_of_faith', 'bulls_strength', 'eagles_splendor', 'owl_wisdom',
  'bless_weapon', 'divine_sacrifice', 'lions_roar'
];

// 合并所有PHB法术
const allPHB = new Set();
for (const level of Object.values(PHB_SPELLS)) {
  level.forEach(s => allPHB.add(s));
}
CLERIC_DRUID_EXTRA.forEach(s => allPHB.add(s));
DRUID_EXTRA.forEach(s => allPHB.add(s));
BARD_EXTRA.forEach(s => allPHB.add(s));
RANGER_PALADIN_EXTRA.forEach(s => allPHB.add(s));

console.log(`PHB 参考法术总数: ${allPHB.size}`);
console.log('');

// 检测缺失
const missing = [];
const found = [];
for (const spell of allPHB) {
  if (existingIds.has(spell)) {
    found.push(spell);
  } else {
    missing.push(spell);
  }
}

console.log(`✅ 已存在: ${found.length} 条`);
console.log(`❌ 缺失: ${missing.length} 条`);
console.log('');

if (missing.length > 0) {
  console.log('=== 缺失的 PHB 法术 ===');
  missing.sort().forEach(spell => {
    console.log(`  - ${spell}`);
  });
} else {
  console.log('🎉 所有 PHB 法术均已收录！');
}

// 检查是否有拼写变体匹配
console.log('\n=== 可能的拼写变体（已存在但ID不同）===');
for (const spell of missing) {
  // 检查是否有相似名称的已存在法术
  for (const existing of existingIds) {
    const sim = spell.replace(/_/g, '');
    const exSim = existing.replace(/_/g, '');
    if (sim === exSim || existing.includes(spell) || spell.includes(existing)) {
      console.log(`  ${spell} → 可能对应: ${existing}`);
    }
  }
}
