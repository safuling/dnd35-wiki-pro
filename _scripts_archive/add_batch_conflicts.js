// 给更多核心法术添加规则冲突标注
// 用法：node add_batch_conflicts.js
const fs = require('fs');
const path = require('path');

const FILE = 'C:/Users/wyb/WorkBuddy/2026-06-20-01-52-30/dnd35-wiki-pro/js/spells-data.js';

// 读取文件
let content = fs.readFileSync(FILE, 'utf8');

// 新增冲突数据（第二批：60个核心法术）
const newConflicts = {
  // === 召唤系 ===
  'summon_monster_2': [
    { point: '召唤怪物II的属性', phbRule: '使用SRD标准属性表', controversy: '召唤生物HP/攻击加值是否随法术环级提升', suggestion: '严格按SRD召唤表，不随意提升', source: 'SRD' }
  ],
  'summon_monster_3': [
    { point: '召唤怪物III的HD上限', phbRule: 'CL 5以下有效', controversy: '召唤多只弱怪 vs 一只强怪的选择', suggestion: 'DM决定召唤列表', source: 'SRD' }
  ],
  'summon_nature_ally_1': [
    { point: '召唤自然盟友的法术抗力', phbRule: '无SR', controversy: '自然盟友是否可以被驱散', suggestion: '自然盟友视为召唤生物，可被彀散', source: 'PHB' }
  ],
  
  // === 治疗/伤害法术 ===
  'cure_moderate_wounds': [
    { point: '治疗中体力的触及距离', phbRule: '触碰', controversy: '是否可以通过武器/护甲施展', suggestion: '需要通过接触', source: 'PHB p.220' }
  ],
  'cure_serious_wounds': [
    { point: '治疗重击伤害', phbRule: '治疗3d8+CL', controversy: '是否可以治疗重击的永久伤害', suggestion: '需要regenerate法术', source: 'PHB' }
  ],
  'inflict_light_wounds': [
    { point: '造成伤害法术的反射', phbRule: '无反射', controversy: '死灵系法术是否可以被法术抗力抵抗', suggestion: '死灵系法术受法术抗力影响', source: 'PHB' }
  ],
  
  // === 防护系 ===
  'mage_armor': [
    { point: '法师护甲与常规护甲', phbRule: '提供+4AC（敏捷上限+4）', controversy: '法师护甲是否能和自然护甲/偏转加值叠加', suggestion: '可以叠加（不同AC类型）', source: 'PHB p.251' }
  ],
  'shield_of_faith': [
    { point: '信仰之盾的偏转类型', phbRule: '+2偏转AC', controversy: '是否可以与护盾术叠加', suggestion: '不同法术不同加值类型可叠加', source: 'PHB' }
  ],
  'death_ward': [
    { point: '死亡守卫对即死效果', phbRule: '免疫即死', controversy: '是否免疫力量吸取（能源吸取）', suggestion: '只免疫即死，不免疫属性吸取', source: 'PHB p.222' }
  ],
  
  // === 塑能系 ===
  'wall_of_fire': [
    { point: '火墙的厚度和持续时间', phbRule: '1尺厚，1轮/CL', controversy: '火墙是否可以被物理攻击破坏', suggestion: '火墙是魔法力场，只能被解除魔法或持续伤害破坏', source: 'PHB p.300' }
  ],
  'wall_of_force': [
    { point: '力场墙的穿透', phbRule: '无法被通常手段穿透', controversy: '力场墙是否阻挡视线/音效', suggestion: '力场墙透明，阻挡一切物理效果', source: 'PHB p.300' }
  ],
  'wall_of_ice': [
    { point: '冰墙的融化', phbRule: '被火球/火焰箭融化', controversy: '冰墙是否可以被钝击破坏', suggestion: '冰墙有HP，可被攻击破坏', source: 'PHB p.300' }
  ],
  
  // === 变化系 ===
  'enlarge_person': [
    { point: '放大人类的武器缩放', phbRule: '生物变大，武器不变', controversy: '放大的生物是否能使用自己的武器（变小了）', suggestion: '武器不缩放，需换武器或使用徒手', source: 'PHB p.226' }
  ],
  'reduce_person': [
    { point: '缩小人类的伤害骰', phbRule: '变小，伤害骰变小', controversy: '缩小的生物是否失去力量加值', suggestion: '体型变化影响力量/敏捷', source: 'PHB p.272' }
  ],
  'displacement': [
    { point: '位移术的破盾', phbRule: '攻击者有50%失手', controversy: '范围攻击是否受位移影响', suggestion: '范围攻击正常命中（无特定目标）', source: 'PHB p.223' }
  ],
  'stoneskin': [
    { point: '石皮术的伤害吸收次数', phbRule: '吸收10点/CL伤害', controversy: '是否吸收所有伤害类型（火焰/寒冷等）', suggestion: '吸收所有物理伤害，不吸收能量伤害', source: 'PHB p.285' }
  ],
  
  // === 预言系 ===
  'detect_magic': [
    { point: '侦测魔法的浓度判断', phbRule: '3轮专注判断强度', controversy: '是否可以检测到魔法物品的具体效果', suggestion: '只能检测有/无/强度/类型', source: 'PHB p.222' }
  ],
  'detect_evil': [
    { point: '侦测邪恶的穿透力场', phbRule: '穿透1尺/级石材', controversy: '是否可以穿透力场墙', suggestion: '不能穿透力场墙（完全阻挡）', source: 'PHB p.222' }
  ],
  'locate_object': [
    { point: '定位物品的范围限制', phbRule: '每40尺半径1个目标', controversy: '是否可以看到物品的具体位置', suggestion: '可以看到方向，但需要侦察检定找具体位置', source: 'PHB p.248' }
  ],
  
  // === 幻术系 ===
  'hypnotic_pattern': [
    { point: '催眠图纹的HD上限', phbRule: '最多6HD', controversy: '是否影响无心智生物', suggestion: '影响心灵效果，无心智免疫', source: 'PHB p.243' }
  ],
  'invisibility_sphere': [
    { point: '隐形灵光的范围移动', phbRule: '半径10尺散布', controversy: '范围移动时是否打破隐形', suggestion: '范围移动不打破，但攻击/施法会', source: 'PHB p.245' }
  ],
  'silent_image': [
    { point: '无声影像的互动', phbRule: '影像可以被触碰破坏', controversy: '无声影像是否阻挡音效/光线', suggestion: '只是视觉影像，不阻挡其他感官', source: 'PHB p.279' }
  ],
  'major_image': [
    { point: '高等影像的感官欺骗', phbRule: '可以模拟声音/气味', controversy: '高等影像是否可以被真知术看穿', suggestion: '真知术可以看穿幻术', source: 'PHB p.250' }
  ],
  'project_image': [
    { point: '投射影像的远程交互', phbRule: '可以在任意距离交互', controversy: '投射影像是否可以使用法术', suggestion: '影像可以使用法术（需有材料成分）', source: 'PHB p.266' }
  ],
  
  // === 死灵系 ===
  'death_knell': [
    { point: '丧钟对HD上限', phbRule: 'HD小于CL', controversy: '丧钟是否对玩家角色使用', suggestion: '可以对任何生物使用', source: 'PHB p.221' }
  ],
  'enervation': [
    { point: '能源吸取的等级丧失', phbRule: '1d4负等级', controversy: '负等级是否可以通过回复法术治愈', suggestion: '需要通过restoration或 miracles', source: 'PHB p.226' }
  ],
  'ghoul_touch': [
    { point: '食尸鬼触碰的麻痹', phbRule: '1d6+2轮麻痹', controversy: '麻痹是否影响施法（需要言语/姿势）', suggestion: '麻痹阻止所有动作', source: 'PHB p.235' }
  ],
  'poison': [
    { point: '毒药法术的强韧豁免', phbRule: '初级强韧negates', controversy: '毒药是否可以被医疗技能治疗', suggestion: '需要治疗法术或医疗检定', source: 'PHB p.262' }
  ],
  'spectral_hand': [
    { point: '幽灵手的使用范围', phbRule: '中距', controversy: '幽灵手是否可以被攻击', suggestion: '幽灵手是力场，免疫物理攻击', source: 'PHB p.284' }
  ],
  'wave_of_fatigue': [
    { point: '疲劳波的HD上限', phbRule: 'CL×2 HD', controversy: '疲劳是否叠加', suggestion: '疲劳和力竭不同，不叠加', source: 'PHB p.301' }
  ],
  
  // === 惑控系 ===
  'dominate_person': [
    { point: '操控人类的指令', phbRule: '远程操控', controversy: '被操控者是否知道自己被操控', suggestion: '不知道（除非DM告知）', source: 'PHB p.224' }
  ],
  'dominate_monster': [
    { point: '操控怪物的类型限制', phbRule: '任何生物', controversy: '是否可以操控异界生物/元素生物', suggestion: '可以，但需要注意生物特殊能力', source: 'PHB p.224' }
  ],
  'suggestion': [
    { point: '建议的合理请求', phbRule: '必须合理', controversy: '什么算"合理"', suggestion: 'DM裁定，通常是不违反目标核心价值观', source: 'PHB p.286' }
  ],
  'mass_suggestion': [
    { point: '群体建议的目标数量', phbRule: 'CL×2 HD', controversy: '群体建议是否影响所有目标', suggestion: '每个目标独立做豁免', source: 'PHB p.252' }
  ],
  
  // === 咒法系 ===
  'create_water': [
    { point: '造水的水量', phbRule: '2加仑/环', controversy: '造水是否可以在生物体内创造', suggestion: '不可以（需要接触目标）', source: 'PHB p.216' }
  ],
  'endure_elements': [
    { point: ' endure_elements的温度范围', phbRule: '±50°F', controversy: '是否可以在极端环境（熔岩/虚空）生存', suggestion: '只调整温度，不提供呼吸/压力保护', source: 'PHB p.226' }
  ],
  'purify_food_drink': [
    { point: '净化饮食的毒素移除', phbRule: '移除所有毒素/细菌', controversy: '是否移除魔法毒素', suggestion: '移除自然毒素，不移除魔法毒素', source: 'PHB p.268' }
  ],
  'create_food_water': [
    { point: '造粮造水的营养价值', phbRule: '够3人食用', controversy: '造出的食物是否可以被用来献祭/仪式', suggestion: 'DM裁定', source: 'PHB p.216' }
  ],
  
  // === 通用争议法术 ===
  'dimension_door': [
    { point: '任意门的错误传送', phbRule: '5%-80%错误率', controversy: '是否可以精确传送到异次元', suggestion: '不能（需要plane shift）', source: 'PHB p.222' }
  ],
  'passwall': [
    { point: '穿墙术的墙体厚度', phbRule: '最多10尺厚', controversy: '穿墙后墙体是否恢复原状', suggestion: '法术结束后墙体恢复', source: 'PHB p.259' }
  ],
  'phase_door': [
    { point: '相位门的次数限制', phbRule: '无限次', controversial: '相位门是否可以被追踪', suggestion: '相位门留下永久通道（可被dispel magic关闭）', source: 'PHB p.261' }
  ],
  'teleport_without_error': [
    { point: '无错误传送的准确定位', phbRule: '精确', controversy: '是否需要看过目标地点', suggestion: '需要"seen casually"或更好', source: 'PHB p.293' }
  ],
  
  // === 高阶法术 ===
  'power_word_kill': [
    { point: '杀伤言灵的HD上限', phbRule: '50HD以下即死', controversy: '杀伤言灵是否对boss级生物使用', suggestion: 'HD≤50即死，>50无效', source: 'PHB p.264' }
  ],
  'power_word_stun': [
    { point: '眩晕言灵的HD上限', phbRule: '150HD以下', controversy: '眩晕是否可以被强韧豁免抵抗', suggestion: '不可以（言灵无豁免）', source: 'PHB p.264' }
  ],
  'implosion': [
    { point: '内爆的伤害类型', phbRule: '1d6/CL（最大20d6）', controversy: '内爆是否影响非生命体', suggestion: '只影响活体生物', source: 'PHB p.244' }
  ],
  'wail_of_the_banshee': [
    { point: '报丧女妖之嚎的影响范围', phbRule: '半径40尺', controversy: '是否影响施法者自己', suggestion: '不影响施法者', source: 'PHB p.299' }
  ],
  'weird': [
    { point: '恐怖法术的即死判定', phbRule: '意志失败则死', controversy: '恐怖是否可以被重生术复活', suggestion: '可以（即死可被复活）', source: 'PHB p.301' }
  ],
  
  // === 牧师领域法术 ===
  'aid': [
    { point: '援助术的临时HP', phbRule: '+1d8临时HP', controversy: '临时HP是否可以被治疗法术恢复', suggestion: '临时HP不被治疗影响', source: 'PHB p.197' }
  ],
  'prayer': [
    { point: '祈祷术的加值类型', phbRule: '+1命中/伤害/豁免', controversy: '祈祷是否影响技能检定', suggestion: '只影响攻击/伤害/豁免/AC', source: 'PHB p.265' }
  ],
  'remove_curse': [
    { point: '移除诅咒的范围', phbRule: '触碰', controversy: '是否可以移除魔法物品诅咒', suggestion: '可以（需要施法者等级≥物品CL）', source: 'PHB p.272' }
  ],
  'remove_disease': [
    { point: '移除疾病对天然疾病', phbRule: '治愈所有疾病', controversy: '是否治愈魔法疾病', suggestion: '治愈所有疾病（天然+魔法）', source: 'PHB p.272' }
  ],
  'restoration': [
    { point: '复原术的属性恢复', phbRule: '恢复1d4属性', controversy: '是否可以恢复永久属性吸取', suggestion: '可以（需要greater restoration恢复全部）', source: 'PHB p.273' }
  ],
  'true_seeing': [
    { point: '真知术的穿透幻术', phbRule: '看穿所有幻术', controversy: '真知术是否需要专注', suggestion: '需要专注（标准动作每轮）', source: 'PHB p.296' }
  ],
  'zone_of_truth': [
    { point: '真言域的豁免', phbRule: '意志negates', controversy: '失败者是否知道自己不能说谎', suggestion: '知道（但无法说谎）', source: 'PHB p.306' }
  ],
  
  // === 德鲁伊法术 ===
  'entangle': [
    { point: '缠绕的脱身方式', phbRule: '力量DC20或逃脱DC20', controversy: '缠绕是否可以被切割/燃烧', suggestion: '可以（植物，HP 10/5尺立方）', source: 'PHB p.226' }
  ],
  'goodberry': [
    { point: '善良浆果的治疗量', phbRule: '每个治疗1HP', controversy: '善良浆果是否可以治愈重击', suggestion: '只治愈HP，不治愈重击', source: 'PHB p.237' }
  ],
  'obscuring_mist': [
    { point: '遮蔽雾的视线阻挡', phbRule: '阻挡视线', controversy: '是否阻挡音效/嗅觉', suggestion: '只阻挡视线', source: 'PHB p.258' }
  ],
  'produce_flame': [
    { point: '产焰的远程攻击', phbRule: '远程接触攻击', controversy: '产焰是否可以被双持', suggestion: '产焰是法术，不是武器', source: 'PHB p.266' }
  ],
  'speak_with_animals': [
    { point: '与动物交谈的语言', phbRule: '可以交流', controversy: '动物是否有足够智力交谈', suggestion: '动物有有限智力，可以简单交流', source: 'PHB p.283' }
  ],
  'barkskin': [
    { point: '树皮之肤的自然护甲', phbRule: '+2AC（最大+5）', controversy: '是否可以与护甲/天生护甲叠加', suggestion: '与自然护甲叠加（不同类型）', source: 'PHB p.203' }
  ],
  'flame_blade': [
    { point: '火焰刀的攻击方式', phbRule: '近战接触攻击', controversy: '火焰刀是否可以使用双手', suggestion: '可以使用双手（伤害+50%）', source: 'PHB p.231' }
  ],
  'heat_metal': [
    { point: '加热金属对穿戴者', phbRule: '每轮2d6伤害', controversy: '脱掉护甲是否需要动作', suggestion: '脱护甲需要全回合动作', source: 'PHB p.239' }
  ],
  'spike_growth': [
    { point: '尖刺生长的移动困难', phbRule: '移动减半', controversy: '是否影响飞行生物', suggestion: '不影响飞行/游泳', source: 'PHB p.285' }
  ],
  'warp_wood': [
    { point: '弯木对木制物品', phbRule: '弯折', controversial: '是否影响木制武器/盾牌', suggestion: '可以破坏木制物品（HP 10/寸）', source: 'PHB p.300' }
  ],
  'animals_growth': [
    { point: '动物成长的数量', phbRule: '每环1只', controversy: '是否影响已经成型的动物', suggestion: '影响任何动物（包括召唤生物）', source: 'PHB p.199' }
  ],
  'cure_critical_wounds': [
    { point: '治疗重击伤害', phbRule: '4d8+CL', controversy: '是否治愈断肢/器官损伤', suggestion: '需要regenerate法术', source: 'PHB p.220' }
  ],
  'neutralize_poison': [
    { point: '中和毒素的范围', phbRule: '触碰', controversy: '是否可以中和环境毒素（气体/液体）', suggestion: '只影响生物体内的毒素', source: 'PHB p.257' }
  ],
  'plant_growth': [
    { point: '植物生长的土壤要求', phbRule: '需要土壤', controversial: '是否可以在沙漠/雪地使用', suggestion: '不可以（需要土壤）', source: 'PHB p.262' }
  ],
  'wind_wall': [
    { point: '风墙的弹道偏转', phbRule: '偏转弹道/箭矢', controversy: '是否偏转魔法飞弹', suggestion: '不偏转魔法飞弹（力场）', source: 'PHB p.303' }
  ],
  'animal_shapes': [
    { point: '动物形态的变化限制', phbRule: '变成动物', controversy: '是否保留法术能力', suggestion: '变化后失去法术能力（除非自然能力）', source: 'PHB p.199' }
  ],
  'liveoak': [
    { point: '活橡树的HP', phbRule: 'HD×10', controversy: '活橡树是否可以被驱散', suggestion: '是召唤生物，可被驱散', source: 'PHB p.248' }
  ],
  'shambler': [
    { point: '蹒跚者的数量', phbRule: '1d4+2', controversy: '蹒跚者是否受指挥官影响', suggestion: '完全服从施法者', source: 'PHB p.277' }
  ]
};

// 辅助函数：给法术对象添加conflicts
function addConflictsToSpell(spellId, conflicts) {
  // 找到法术对象
  const patterns = [
    new RegExp(`(\\n  \\{\\s*id:"${spellId}"[\\s\\S]*?)(,\\s*\\n  \\})(?=\\s*,|\\s*\\])`, 'm'),
    new RegExp(`(\\n  \\{\\s*"id": "${spellId}"[\\s\\S]*?)(,\\s*\\n  \\})(?=\\s*,|\\s*\\])`, 'm')
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      const conflictsJs = `,\n    conflicts: ${JSON.stringify(conflicts, null, 6).replace(/\n/g, '\n    ')}`;
      content = content.replace(match[1], match[1] + conflictsJs);
      return true;
    }
  }
  return false;
}

// 由于正则复杂，改用逐行处理
// 重新实现：读取为行数组，逐行处理

console.log('开始处理...');
let addedCount = 0;
let skippedCount = 0;

// 由于直接字符串操作容易出错，我改用另一个方法：
// 找到每个法术的classes行，在其后插入conflicts

// 为了简单可靠，我直接生成要插入的JS文本，然后手动插入
// 但这样还是容易出错

// 所以我换一个方法：先把所有冲突数据写到一个单独的文件，
// 然后用手动编辑的方式给每个法术加conflicts

// 实际上，考虑到时间，我直接输出需要手动添加的内容，
// 然后让用户决定是否继续

console.log('此方法复杂，换用Python脚本处理...');

// 实际上是想在Node里完成，但字符串处理太复杂
// 所以我写一个Python脚本来完成这个任务

process.exit(0);
