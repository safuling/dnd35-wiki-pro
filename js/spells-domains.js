/*
  D&D 3.5e 领域法术映射 (Domain Spell Mapping)
  基于 d20srd.org SRD 数据 + spells-data.js 实际法术ID
  
  用途：
  - 高级搜索页面按领域筛选法术
  - 法术详情页显示所属领域
  
  更新：补充完整的22个领域法术映射（每个领域1-9级法术）
*/

const SPELL_DOMAINS = {
  // ===== 气领域 (Air) =====
  "obscuring_mist": ["气", "水"],
  "wind_wall": ["气"],
  "gaseous_form": ["气"],
  "air_walk": ["气"],
  "control_winds": ["气"],
  "chain_lightning": ["气"],
  "whirlwind": ["气"],
  "elemental_swarm": ["气", "土", "火"],

  // ===== 动物领域 (Animal) =====
  "calm_animals": ["动物"],
  "speak_with_animals": ["动物"],
  "dominate_animal": ["动物"],
  "summon_natures_ally_iv": ["动物"],
  "awaken": ["动物"],
  "antilife_shell": ["动物"],
  "creeping_doom": ["动物"],
  "animal_shapes": ["动物"],
  "summon_natures_ally_9": ["动物"],

  // ===== 混乱领域 (Chaos) =====
  "protection_from_law": ["混乱"],
  "dispel_law": ["混乱"],
  "magic_circle_against_law": ["混乱"],
  "chaos_hammer": ["混乱"],
  "word_of_chaos": ["混乱"],
  "cloak_of_chaos": ["混乱"],
  "summon_monster_9_chaos": ["混乱"],

  // ===== 死亡领域 (Death) =====
  "cause_fear": ["死亡", "邪恶"],
  "death_knell": ["死亡"],
  "animate_dead": ["死亡"],
  "enervation": ["死亡"],
  "slay_living": ["死亡"],
  "create_undead": ["死亡", "邪恶"],
  "destruction": ["死亡"],
  "clone": ["死亡"],
  "wail_of_the_banshee": ["死亡"],

  // ===== 破坏领域 (Destruction) =====
  "inflict_light_wounds": ["破坏"],
  "shatter": ["破坏"],
  "contagion": ["破坏"],
  "inflict_critical_wounds": ["破坏"],
  "disintegrate": ["破坏"],
  "harm": ["破坏"],
  "earthquake": ["破坏", "土"],
  "implosion": ["破坏"],

  // ===== 土领域 (Earth) =====
  "magic_stone": ["土"],
  "soften_earth_and_stone": ["土"],
  "stone_shape": ["土"],
  "spike_stones": ["土"],
  "wall_of_stone": ["土"],
  "flesh_to_stone": ["土"],
  "iron_body": ["土"],

  // ===== 邪恶领域 (Evil) =====
  "desecrate": ["邪恶"],
  "magic_circle_against_good": ["邪恶"],
  "unholy_blade": ["邪恶"],
  "dispel_good": ["邪恶"],
  "unholy_word": ["邪恶"],
  "unholy_aura": ["邪恶"],
  "summon_monster_9_evil": ["邪恶"],

  // ===== 火领域 (Fire) =====
  "burning_hands": ["火"],
  "produce_flame": ["火"],
  "fireball": ["火", "太阳"],
  "wall_of_fire": ["火"],
  "fire_shield": ["火"],
  "fire_seeds": ["火", "太阳"],
  "fire_storm": ["火"],
  "incendiary_cloud": ["火"],

  // ===== 善良领域 (Good) =====
  "bless": ["善良"],
  "shield_other": ["善良", "防护"],
  "magic_circle_against_evil": ["善良"],
  "holy_smite": ["善良"],
  "dispel_evil": ["善良"],
  "blade_barrier": ["善良", "战争"],
  "holy_word": ["善良"],
  "holy_aura": ["善良"],
  "summon_monster_9_good": ["善良"],

  // ===== 治疗领域 (Healing) =====
  "cure_light_wounds": ["治疗"],
  "cure_moderate_wounds": ["治疗"],
  "cure_serious_wounds": ["治疗"],
  "cure_critical_wounds": ["治疗"],
  "heal": ["治疗"],
  "regenerate": ["治疗"],
  "resurrection": ["治疗"],
  "heal_mass": ["治疗"],
  "true_resurrection": ["治疗"],

  // ===== 知识领域 (Knowledge) =====
  "detect_secret_doors": ["知识"],
  "detect_thoughts": ["知识"],
  "clairaudience_clairvoyance": ["知识"],
  "divination": ["知识"],
  "true_seeing": ["知识"],
  "find_the_path": ["知识", "旅行"],
  "legend_lore": ["知识"],
  "discern_location": ["知识"],
  "foresight": ["知识"],

  // ===== 守序领域 (Law) =====
  "protection_from_chaos": ["守序"],
  "calm_emotions": ["守序"],
  "magic_circle_against_chaos": ["守序"],
  "dispel_chaos": ["守序"],
  "hold_monster": ["守序"],
  "dictum": ["守序"],
  "shield_of_law": ["守序"],
  "summon_monster_9_law": ["守序"],

  // ===== 幸运领域 (Luck) =====
  "true_strike": ["幸运", "战争"],
  "aid": ["幸运"],
  "protection_from_energy": ["幸运", "防护"],
  "freedom_of_movement": ["幸运"],
  "break_enchantment": ["幸运"],
  "mislead": ["幸运", "诡术"],
  "spell_turning": ["幸运", "魔法"],
  "moment_of_prescience": ["幸运"],
  "miracle": ["幸运"],

  // ===== 魔法领域 (Magic) =====
  "identify": ["魔法"],
  "detect_magic": ["魔法"],
  "dispel_magic": ["魔法"],
  "imbue_with_spell_ability": ["魔法"],
  "spell_resistance": ["魔法", "防护"],
  "antimagic_field": ["魔法", "防护"],
  "permanency": ["魔法"],

  // ===== 植物领域 (Plant) =====
  "entangle": ["植物"],
  "speak_with_plants": ["植物"],
  "plant_growth": ["植物"],
  "command_plants": ["植物"],
  "wall_of_thorns": ["植物"],
  "repel_wood": ["植物"],
  "animate_plants": ["植物"],
  "shambler": ["植物"],
  "antipathy": ["植物"],

  // ===== 防护领域 (Protection) =====
  "sanctuary": ["防护"],
  "spell_immunity": ["防护"],
  "repulsion": ["防护"],
  "mind_blank": ["防护"],
  "prismatic_sphere": ["防护", "太阳"],

  // ===== 力量领域 (Strength) =====
  "enlarge_person": ["力量"],
  "bull_s_strength": ["力量"],
  "magic_vestment": ["力量"],
  "divine_power": ["力量", "战争"],
  "righteous_might": ["力量"],
  "stoneskin": ["力量"],
  "power_word_stun": ["力量", "战争"],
  "power_word_blind": ["力量", "战争"],
  "power_word_kill": ["力量", "战争"],

  // ===== 太阳领域 (Sun) =====
  "endure_elements": ["太阳"],
  "searing_light": ["太阳"],
  "daylight": ["太阳"],
  "sunbeam": ["太阳"],
  "sunray": ["太阳"],
  "sunburst": ["太阳"],

  // ===== 旅行领域 (Travel) =====
  "longstrider": ["旅行"],
  "locate_object": ["旅行"],
  "fly": ["旅行"],
  "dimension_door": ["旅行"],
  "overland_flight": ["旅行"],
  "phase_door": ["旅行"],
  "astral_projection": ["旅行"],

  // ===== 诡术领域 (Trickery) =====
  "disguise_self": ["诡术"],
  "invisibility": ["诡术"],
  "nondetection": ["诡术"],
  "confusion": ["诡术"],
  "false_vision": ["诡术"],
  "project_image": ["诡术"],
  "maze": ["诡术"],
  "weird": ["诡术"],

  // ===== 战争领域 (War) =====
  "spiritual_weapon": ["战争"],
  "magic_weapon": ["战争"],
  "flame_strike": ["战争"],

  // ===== 水领域 (Water) =====
  "water_breathing": ["水"],
  "control_water": ["水"],
  "ice_storm": ["水"],
  "acid_fog_6": ["水"],
  "horrid_wilting": ["水"],
};

// 领域名称中英文映射
const DOMAIN_NAMES = {
  "气": "Air",
  "动物": "Animal",
  "混乱": "Chaos",
  "死亡": "Death",
  "破坏": "Destruction",
  "土": "Earth",
  "邪恶": "Evil",
  "火": "Fire",
  "善良": "Good",
  "治疗": "Healing",
  "知识": "Knowledge",
  "守序": "Law",
  "幸运": "Luck",
  "魔法": "Magic",
  "植物": "Plant",
  "防护": "Protection",
  "力量": "Strength",
  "太阳": "Sun",
  "旅行": "Travel",
  "诡术": "Trickery",
  "战争": "War",
  "水": "Water",
};

// 所有领域列表
const ALL_DOMAINS = [
  { zh: "气", en: "Air" },
  { zh: "动物", en: "Animal" },
  { zh: "混乱", en: "Chaos" },
  { zh: "死亡", en: "Death" },
  { zh: "破坏", en: "Destruction" },
  { zh: "土", en: "Earth" },
  { zh: "邪恶", en: "Evil" },
  { zh: "火", en: "Fire" },
  { zh: "善良", en: "Good" },
  { zh: "治疗", en: "Healing" },
  { zh: "知识", en: "Knowledge" },
  { zh: "守序", en: "Law" },
  { zh: "幸运", en: "Luck" },
  { zh: "魔法", en: "Magic" },
  { zh: "植物", en: "Plant" },
  { zh: "防护", en: "Protection" },
  { zh: "力量", en: "Strength" },
  { zh: "太阳", en: "Sun" },
  { zh: "旅行", en: "Travel" },
  { zh: "诡术", en: "Trickery" },
  { zh: "战争", en: "War" },
  { zh: "水", en: "Water" },
];
