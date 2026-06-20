// 生成完整的全局搜索数据文件
// 从 js/spells-data.js 中提取所有法术数据

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = 'C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro';

// 读取法术数据
function loadSpellsData() {
  const spellsFile = path.join(rootDir, 'js', 'spells-data.js');
  const SPELLS = require(spellsFile);
  return SPELLS;
}

// 生成搜索数据文件
function generateSearchData() {
  console.log('正在加载法术数据...');
  const spells = loadSpellsData();
  console.log(`已加载 ${spells.length} 个法术`);

  // 构建法术搜索数据
  const spellsSearchData = spells.map(spell => {
    // 确定法术等级页面URL
    let url = 'spells/level0.html';
    if (spell.level >= 0 && spell.level <= 9) {
      url = `spells/level${spell.level}.html`;
    }

    return {
      id: spell.id,
      nameZh: spell.nameZh,
      nameEn: spell.nameEn,
      type: 'spell',
      level: spell.level,
      school: spell.school,
      source: spell.source || 'PHB',
      url: url
    };
  });

  // 读取现有的搜索数据文件（包含职业、种族、专长等）
  const existingDataFile = path.join(rootDir, 'js', 'global-search-data.js');
  let existingContent = '';
  if (fs.existsSync(existingDataFile)) {
    existingContent = fs.readFileSync(existingDataFile, 'utf8');
  }

  // 生成新的搜索数据文件
  const output = `// 全局搜索数据索引 - D&D 3.5e 中文Wiki
// 此文件自动生成，包含完整的搜索数据
// 生成时间：${new Date().toISOString().split('T')[0]}

const GLOBAL_SEARCH_DATA = {
  // ===== 法术 (Spells) - 完整数据 =====
  spells: ${JSON.stringify(spellsSearchData, null, 2)},

  // ===== 职业 (Classes) =====
  classes: [
    { nameZh: "野蛮人", nameEn: "Barbarian", type: "class", hitDie: "d12", baseAttack: "高", saveFort: "强", saveRef: "弱", saveWill: "弱", url: "classes/barbarian.html" },
    { nameZh: "吟游诗人", nameEn: "Bard", type: "class", hitDie: "d6", baseAttack: "中", saveFort: "弱", saveRef: "弱", saveWill: "强", url: "classes/bard.html" },
    { nameZh: "牧师", nameEn: "Cleric", type: "class", hitDie: "d8", baseAttack: "中", saveFort: "强", saveRef: "弱", saveWill: "强", url: "classes/cleric.html" },
    { nameZh: "德鲁伊", nameEn: "Druid", type: "class", hitDie: "d8", baseAttack: "中", saveFort: "强", saveRef: "弱", saveWill: "强", url: "classes/druid.html" },
    { nameZh: "战士", nameEn: "Fighter", type: "class", hitDie: "d10", baseAttack: "高", saveFort: "强", saveRef: "弱", saveWill: "弱", url: "classes/fighter.html" },
    { nameZh: "武僧", nameEn: "Monk", type: "class", hitDie: "d8", baseAttack: "高", saveFort: "强", saveRef: "强", saveWill: "强", url: "classes/monk.html" },
    { nameZh: "圣武士", nameEn: "Paladin", type: "class", hitDie: "d10", baseAttack: "高", saveFort: "强", saveRef: "弱", saveWill: "弱", url: "classes/paladin.html" },
    { nameZh: "游侠", nameEn: "Ranger", type: "class", hitDie: "d8", baseAttack: "高", saveFort: "强", saveRef: "弱", saveWill: "弱", url: "classes/ranger.html" },
    { nameZh: "盗贼", nameEn: "Rogue", type: "class", hitDie: "d6", baseAttack: "中", saveFort: "弱", saveRef: "强", saveWill: "弱", url: "classes/rogue.html" },
    { nameZh: "术士", nameEn: "Sorcerer", type: "class", hitDie: "d4", baseAttack: "低", saveFort: "弱", saveRef: "弱", saveWill: "强", url: "classes/sorcerer.html" },
    { nameZh: "法师", nameEn: "Wizard", type: "class", hitDie: "d4", baseAttack: "低", saveFort: "弱", saveRef: "弱", saveWill: "强", url: "classes/wizard.html" }
  ],

  // ===== 种族 (Races) =====
  races: [
    { nameZh: "人类", nameEn: "Human", type: "race", size: "中型", speed: "30尺", abilityAdjust: "无", url: "races/human.html" },
    { nameZh: "矮人", nameEn: "Dwarf", type: "race", size: "中型", speed: "20尺", abilityAdjust: "+2体质/-2魅力", url: "races/dwarf.html" },
    { nameZh: "精灵", nameEn: "Elf", type: "race", size: "中型", speed: "30尺", abilityAdjust: "+2敏捷/-2体质", url: "races/elf.html" },
    { nameZh: "侏儒", nameEn: "Gnome", type: "race", size: "小体型", speed: "20尺", abilityAdjust: "+2魅力/-2力量", url: "races/gnome.html" },
    { nameZh: "半精灵", nameEn: "Half-Elf", type: "race", size: "中型", speed: "30尺", abilityAdjust: "无", url: "races/half-elf.html" },
    { nameZh: "半兽人", nameEn: "Half-Orc", type: "race", size: "中型", speed: "30尺", abilityAdjust: "+2力量/-2智力/-2魅力", url: "races/half-orc.html" },
    { nameZh: "半身人", nameEn: "Halfling", type: "race", size: "小体型", speed: "20尺", abilityAdjust: "+2敏捷/-2力量", url: "races/halfling.html" }
  ],

  // ===== 专长 (Feats) =====
  feats: [
    { nameZh: "顺势攻击", nameEn: "Power Attack", type: "feat", prerequisite: "力量13+", benefit: "攻击时减少攻击加值换取伤害加值", url: "feats/power-attack.html" },
    { nameZh: "精确射击", nameEn: "Precise Shot", type: "feat", prerequisite: "无", benefit: "远程攻击忽视邻近敌人引发的偏斜加值", url: "feats/precise-shot.html" },
    { nameZh: "快速射击", nameEn: "Rapid Shot", type: "feat", prerequisite: "敏捷13+", benefit: "远程攻击时额外攻击一次，攻击加值-2", url: "feats/rapid-shot.html" },
    { nameZh: "武器专注", nameEn: "Weapon Focus", type: "feat", prerequisite: "熟练所选武器", benefit: "所选武器攻击加值+1", url: "feats/weapon-focus.html" },
    { nameZh: "武器专精", nameEn: "Weapon Specialization", type: "feat", prerequisite: "武器专注、战士等级4+", benefit: "所选武器伤害加值+2", url: "feats/weapon-specialization.html" },
    { nameZh: "闪避", nameEn: "Dodge", type: "feat", prerequisite: "敏捷13+", benefit: "AC+1对抗单个敌人", url: "feats/dodge.html" },
    { nameZh: "强力重击", nameEn: "Improved Critical", type: "feat", prerequisite: "熟练所选武器", benefit: "武器重击威胁范围翻倍", url: "feats/improved-critical.html" },
    { nameZh: "猛力攻击", nameEn: "Cleave", type: "feat", prerequisite: "力量13+、顺势攻击", benefit: "击倒敌人后可立即额外攻击", url: "feats/cleave.html" },
    { nameZh: "双武器战斗", nameEn: "Two-Weapon Fighting", type: "feat", prerequisite: "无", benefit: "双持时主手-2/副手-2（原本-6/-10）", url: "feats/two-weapon-fighting.html" },
    { nameZh: "法术增威", nameEn: "Empower Spell", type: "feat", prerequisite: "施法者等级12+", benefit: "法术变量效果最大化（法术位+2）", url: "feats/empower-spell.html" },
    { nameZh: "法术极效", nameEn: "Maximize Spell", type: "feat", prerequisite: "施法者等级18+", benefit: "法术伤害骰结果固定为最大值（法术位+3）", url: "feats/maximize-spell.html" },
    { nameZh: "法术延时", nameEn: "Quicken Spell", type: "feat", prerequisite: "施法者等级10+", benefit: "法术施法时间变为自由动作（法术位+4）", url: "feats/quicken-spell.html" }
  ],

  // ===== 技能 (Skills) =====
  skills: [
    { nameZh: "估价", nameEn: "Appraise", type: "skill", keyAbility: "智力", trained: false, armorCheck: false, url: "skills/appraise.html" },
    { nameZh: "唬骗", nameEn: "Bluff", type: "skill", keyAbility: "魅力", trained: false, armorCheck: false, url: "skills/bluff.html" },
    { nameZh: "攀爬", nameEn: "Climb", type: "skill", keyAbility: "力量", trained: false, armorCheck: true, url: "skills/climb.html" },
    { nameZh: "交涉", nameEn: "Diplomacy", type: "skill", keyAbility: "魅力", trained: false, armorCheck: false, url: "skills/diplomacy.html" },
    { nameZh: "解除装置", nameEn: "Disable Device", type: "skill", keyAbility: "敏捷", trained: true, armorCheck: false, url: "skills/disable-device.html" },
    { nameZh: "脱逃", nameEn: "Escape Artist", type: "skill", keyAbility: "敏捷", trained: false, armorCheck: true, url: "skills/escape-artist.html" },
    { nameZh: "治疗", nameEn: "Heal", type: "skill", keyAbility: "感知", trained: false, armorCheck: false, url: "skills/heal.html" },
    { nameZh: "威吓", nameEn: "Intimidate", type: "skill", keyAbility: "魅力", trained: false, armorCheck: false, url: "skills/intimidate.html" },
    { nameZh: "聆听", nameEn: "Listen", type: "skill", keyAbility: "感知", trained: false, armorCheck: false, url: "skills/listen.html" },
    { nameZh: "潜行", nameEn: "Move Silently", type: "skill", keyAbility: "敏捷", trained: false, armorCheck: true, url: "skills/move-silently.html" },
    { nameZh: "搜索", nameEn: "Search", type: "skill", keyAbility: "智力", trained: false, armorCheck: false, url: "skills/search.html" },
    { nameZh: "侦察", nameEn: "Spot", type: "skill", keyAbility: "感知", trained: false, armorCheck: false, url: "skills/spot.html" },
    { nameZh: "生存", nameEn: "Survival", type: "skill", keyAbility: "感知", trained: false, armorCheck: false, url: "skills/survival.html" },
    { nameZh: "法术辨识", nameEn: "Spellcraft", type: "skill", keyAbility: "智力", trained: true, armorCheck: false, url: "skills/spellcraft.html" },
    { nameZh: "使用魔法装置", nameEn: "Use Magic Device", type: "skill", keyAbility: "魅力", trained: true, armorCheck: false, url: "skills/use-magic-device.html" }
  ],

  // ===== 怪物 (Monsters) =====
  monsters: [
    { nameZh: "灵能据点", nameEn: "Psionic Node", type: "monster", cr: 2, size: "中型", typeMonster: "构装体", url: "3r/new-monsters.html" },
    { nameZh: "火焰巨灵贵族", nameEn: "Efreeti Noble", type: "monster", cr: 10, size: "大型", typeMonster: "元素生物", url: "3r/new-monsters.html" },
    { nameZh: "暗影刺客", nameEn: "Shadow Assassin", type: "monster", cr: 7, size: "中型", typeMonster: "人型怪物", url: "3r/new-monsters.html" },
    { nameZh: "异界猎犬", nameEn: "Extraplanar Hound", type: "monster", cr: 3, size: "中型", typeMonster: "异界生物", url: "3r/new-monsters.html" },
    { nameZh: "灵能战士", nameEn: "Psionic Warrior", type: "monster", cr: 5, size: "中型", typeMonster: "人型怪物", url: "3r/new-monsters.html" },
    { nameZh: "冰霜元素", nameEn: "Ice Elemental", type: "monster", cr: 4, size: "大型", typeMonster: "元素生物", url: "3r/new-monsters.html" },
    { nameZh: "堕落祭司", nameEn: "Fallen Priest", type: "monster", cr: 5, size: "中型", typeMonster: "人型怪物", url: "3r/new-monsters.html" },
    { nameZh: "心灵术士", nameEn: "Mind Sorcerer", type: "monster", cr: 6, size: "中型", typeMonster: "人型怪物", url: "3r/new-monsters.html" },
    { nameZh: "雷电巨灵", nameEn: "Djinn Noble", type: "monster", cr: 9, size: "大型", typeMonster: "元素生物", url: "3r/new-monsters.html" },
    { nameZh: "炎魔领主", nameEn: "Balor Lord", type: "monster", cr: 12, size: "大型", typeMonster: "异界生物", url: "3r/new-monsters.html" }
  ],

  // ===== 装备 (Equipment) =====
  equipment: [
    { nameZh: "长剑", nameEn: "Longsword", type: "weapon", price: "15 gp", damage: "1d8", critical: "19-20/×2", weight: "4磅", url: "equipment/intro.html" },
    { nameZh: "短剑", nameEn: "Shortsword", type: "weapon", price: "10 gp", damage: "1d6", critical: "19-20/×2", weight: "2磅", url: "equipment/intro.html" },
    { nameZh: "巨剑", nameEn: "Greatsword", type: "weapon", price: "50 gp", damage: "2d6", critical: "19-20/×2", weight: "8磅", url: "equipment/intro.html" },
    { nameZh: "长弓", nameEn: "Longbow", type: "weapon", price: "75 gp", damage: "1d8", critical: "×3", weight: "3磅", url: "equipment/intro.html" },
    { nameZh: "轻甲", nameEn: "Light Armor", type: "armor", price: "见下表", armorBonus: "+0至+5", maxDex: "无至+8", armorCheck: "0至-6", url: "equipment/intro.html" },
    { nameZh: "中甲", nameEn: "Medium Armor", type: "armor", price: "见下表", armorBonus: "+3至+7", maxDex: "+3至+5", armorCheck: "-4至-7", url: "equipment/intro.html" },
    { nameZh: "重甲", nameEn: "Heavy Armor", type: "armor", price: "见下表", armorBonus: "+6至+11", maxDex: "+1至+3", armorCheck: "-6至-8", url: "equipment/intro.html" },
    { nameZh: "波状匕首", nameEn: "Wavy Dagger", type: "weapon", price: "30 gp", damage: "1d4", critical: "19-20/×2", weight: "1磅", url: "3r/new-equipment.html" },
    { nameZh: "精灵链甲衫", nameEn: "Elven Chain Shirt", type: "armor", price: "200 gp", armorBonus: "+5", maxDex: "+4", armorCheck: "-2", url: "3r/new-equipment.html" },
    { nameZh: "智慧头环", nameEn: "Headband of Wisdom", type: "magic_item", price: "4000 gp", bonus: "+2智慧", url: "3r/new-equipment.html" }
  ]
};

// 搜索函数
function globalSearch(query) {
  query = query.toLowerCase().trim();
  if (!query) return [];

  const results = [];
  const allData = [
    ...GLOBAL_SEARCH_DATA.spells.map(item => ({ ...item, category: "法术" })),
    ...GLOBAL_SEARCH_DATA.classes.map(item => ({ ...item, category: "职业" })),
    ...GLOBAL_SEARCH_DATA.races.map(item => ({ ...item, category: "种族" })),
    ...GLOBAL_SEARCH_DATA.feats.map(item => ({ ...item, category: "专长" })),
    ...GLOBAL_SEARCH_DATA.skills.map(item => ({ ...item, category: "技能" })),
    ...GLOBAL_SEARCH_DATA.monsters.map(item => ({ ...item, category: "怪物" })),
    ...GLOBAL_SEARCH_DATA.equipment.map(item => ({ ...item, category: "装备" }))
  ];

  return allData.filter(item => {
    const searchText = [
      item.nameZh,
      item.nameEn,
      item.category,
      item.type,
      item.school,
      item.source,
      item.prerequisite,
      item.benefit,
      item.keyAbility
    ].filter(Boolean).join(" ").toLowerCase();

    return searchText.includes(query);
  });
}

// 获取类型图标
function getTypeIcon(type) {
  const icons = {
    spell: "🔮",
    class: "⚔️",
    race: "🧝",
    feat: "⭐",
    skill: "🎯",
    monster: "👹",
    weapon: "🗡️",
    armor: "🛡️",
    shield: "🛡️",
    magic_item: "✨"
  };
  return icons[type] || "📄";
}

// 获取类别颜色
function getCategoryColor(category) {
  const colors = {
    "法术": "#9b59b6",
    "职业": "#e74c3c",
    "种族": "#2ecc71",
    "专长": "#f39c12",
    "技能": "#3498db",
    "怪物": "#e74c3c",
    "装备": "#95a5a6"
  };
  return colors[category] || "#666";
}
`;

  // 写入文件
  fs.writeFileSync(existingDataFile, output, 'utf8');
  console.log(`搜索数据文件已生成: ${existingDataFile}`);
  console.log(`包含 ${spellsSearchData.length} 个法术`);
}

// 主函数
function main() {
  try {
    generateSearchData();
    console.log('完成!');
  } catch (error) {
    console.error('错误:', error.message);
  }
}

main();
