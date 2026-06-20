// 批量生成薄弱职业页面
const fs = require('fs');

const NAV_TEMPLATE = (prefix) => `
<nav class="navbar">
  <div class="navbar-brand">🐉 D&D 3.5e 中文Wiki</div>
  <div class="navbar-links">
    <a href="${prefix}index.html">首页</a>
    <a href="${prefix}rules.html">核心规则</a>
    <a href="${prefix}races/intro.html">种族</a>
    <a href="intro.html" class="active">职业</a>
    <a href="${prefix}spells/intro.html">法术</a>
    <a href="${prefix}feats/intro.html">专长</a>
    <a href="${prefix}skills/intro.html">技能</a>
    <a href="${prefix}equipment/intro.html">装备</a>
    <a href="${prefix}monsters/intro.html">怪物</a>
    <a href="${prefix}3r/index-v2.html" style="color:#d4a017;font-weight:600;">⚡ 3R拓展</a>
    <a href="${prefix}conflicts.html">规则冲突</a>
  </div>
</nav>`;

const SIDEBAR = (active) => `
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">核心职业</div>
      <a href="intro.html">总览</a>
      <a href="barbarian.html"${active==='barbarian'?' class="active"':''}>野蛮人</a>
      <a href="bard.html"${active==='bard'?' class="active"':''}>吟游诗人</a>
      <a href="cleric.html"${active==='cleric'?' class="active"':''}>牧师</a>
      <a href="druid.html"${active==='druid'?' class="active"':''}>德鲁伊</a>
      <a href="fighter.html"${active==='fighter'?' class="active"':''}>战士</a>
      <a href="monk.html"${active==='monk'?' class="active"':''}>武僧</a>
      <a href="paladin.html"${active==='paladin'?' class="active"':''}>圣武士</a>
      <a href="ranger.html"${active==='ranger'?' class="active"':''}>游侠</a>
      <a href="rogue.html"${active==='rogue'?' class="active"':''}>盗贼</a>
      <a href="sorcerer.html"${active==='sorcerer'?' class="active"':''}>术士</a>
      <a href="wizard.html"${active==='wizard'?' class="active"':''}>法师</a>
    </div>
  </aside>`;

const STYLE = `<style>
  .class-table { font-size:13px; width:100%; border-collapse:collapse; margin:12px 0; }
  .class-table th { background:var(--bg-table-head); padding:7px 10px; text-align:center; font-size:12px; }
  .class-table td { border:1px solid var(--border-light); padding:6px 10px; text-align:center; }
  .class-table tr:nth-child(even) { background:var(--bg-table-stripe); }
  .feature-box { background:var(--bg-card); border-left:4px solid var(--accent-gold); padding:14px 18px; margin:12px 0; border-radius:0 var(--radius) var(--radius) 0; }
  .feature-box h4 { margin:0 0 6px; color:var(--text-heading); }
  .tip-box { background:#e8f5e9; border-left:3px solid #27ae60; padding:10px 14px; margin:10px 0; font-size:14px; border-radius:0 var(--radius) var(--radius) 0; }
  .warn-box { background:#fff3e0; border-left:3px solid #ff9800; padding:10px 14px; margin:10px 0; font-size:14px; border-radius:0 var(--radius) var(--radius) 0; }
  .infobox { float:right; width:280px; background:var(--bg-infobox); border:1px solid var(--border-main); border-radius:var(--radius); padding:14px; margin:0 0 16px 20px; font-size:13px; }
  .infobox h3 { margin:0 0 10px; text-align:center; background:var(--bg-table-head); padding:8px; margin:-14px -14px 12px; border-radius:var(--radius) var(--radius) 0 0; }
  .infobox-row { display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid var(--border-light); }
  .infobox-row:last-child { border-bottom:none; }
  .ib-label { color:var(--text-subtle); }
  .ib-value { font-weight:600; }
  .spell-table { font-size:12px; width:100%; border-collapse:collapse; margin:10px 0; }
  .spell-table th { background:var(--bg-table-head); padding:5px 8px; text-align:center; }
  .spell-table td { border:1px solid var(--border-light); padding:4px 8px; text-align:center; font-size:11px; }
  .spell-table tr:nth-child(even) { background:var(--bg-table-stripe); }
</style>`;

const classes = {
  bard: {
    title: '吟游诗人 (Bard)',
    en: 'Bard',
    zh: '吟游诗人',
    color: '#8e44ad',
    hd: 'd6', bab: '中（等级×3/4）', fort: '低', ref: '中', will: '中',
    skillPts: '6 + 智力调整值',
    weapons: '简单武器，长剑，短剑，长弓，短弓，鞭子，鞭舌，投矛；轻型护甲，无盾',
    mainAttr: '魅力、敏捷、体质',
    align: '非守序阵营',
    description: `吟游诗人是学者、音乐家、魔法师和冒险者于一身的多面手。他们通过魅力施展法术，用歌声和音乐激励盟友（<strong>鼓舞能力</strong>），同时也是出色的技能专家。吟游诗人是团队的"润滑剂"——没有吟游诗人，冒险队伍会运转得更困难。`,
    tip: '适合喜欢辅助角色、技能多、法术自由但力量偏弱的玩家。吟游诗人的鼓舞歌谣对全队伤害和命中有显著加成。',
    features: [
      { name: '吟游鼓舞（Bardic Music）', desc: '每日次数=等级。各种鼓舞效果：鼓舞勇气（+1士气加值攻击/伤害/豁免，1级）、鼓舞能力（8级）、反击歌（8级）、迷人之歌（6级）等。' },
      { name: '吟游知识（Bardic Knowledge）', desc: '所有知识技能均可当作本职技能使用，即使没有受训。+等级+智力调整值的随机知识检定。' },
      { name: '自发施法', desc: '吟游诗人通过魅力施法，可以自发准备和使用任何已知法术。' },
      { name: '反制魔法（Countersong）', desc: '使用"表演"技能对抗声音/语言类法术或效果。' },
    ],
    spellTable: {
      headers: ['等级', '0环', '1环', '2环', '3环', '4环', '5环', '6环'],
      rows: [
        [1,2,0,'-','-','-','-','-'],
        [2,3,1,'-','-','-','-','-'],
        [3,3,2,0,'-','-','-','-'],
        [4,3,3,1,'-','-','-','-'],
        [5,3,3,2,0,'-','-','-'],
        [6,3,3,3,1,'-','-','-'],
        [7,4,3,3,2,0,'-','-'],
        [8,4,4,3,3,1,'-','-'],
        [9,4,4,3,3,2,'-','-'],
        [10,4,4,4,3,3,0,'-'],
        [14,4,4,4,4,4,3,1],
        [20,4,4,4,4,4,4,4],
      ]
    },
    levelTable: [
      [1,'+0','+0','+2','+2','吟游鼓舞、吟游知识、反制魔法'],
      [2,'+1','+0','+3','+3','灵活移动'],
      [3,'+2','+1','+3','+3','—'],
      [4,'+3','+1','+4','+4','—'],
      [5,'+3','+1','+4','+4','—'],
      [6,'+4','+2','+5','+5','迷人之歌（迷惑）'],
      [7,'+5','+2','+5','+5','—'],
      [8,'+6/+1','+2','+6','+6','鼓舞能力、反制歌曲'],
      [9,'+6/+1','+3','+6','+6','—'],
      [10,'+7/+2','+3','+7','+7','激励英雄气概'],
      [12,'+9/+4','+4','+8','+8','激励伟大行动'],
      [15,'+11/+6/+1','+5','+9','+9','暗示（暗示效果）'],
      [18,'+13/+8/+3','+6','+11','+11','群体魅惑'],
      [20,'+15/+10/+5','+6','+12','+12','传奇鼓舞'],
    ],
    builds: [
      '属性优先：魅力（施法/鼓舞）→ 敏捷（AC）→ 体质（HP）→ 智力（技能）',
      '推荐专长：法术专注（法术DC+1）、精巧法术（远程接触不引发借机攻击）',
      '多职业：吟游诗人1-2级获取鼓舞，之后换法师或游荡者常见',
    ],
    source: 'PHB p.29-35',
    prev: 'barbarian.html',
    prevName: '野蛮人',
    next: 'cleric.html',
    nextName: '牧师',
  },

  druid: {
    title: '德鲁伊 (Druid)',
    en: 'Druid',
    zh: '德鲁伊',
    color: '#27ae60',
    hd: 'd8', bab: '中（等级×3/4）', fort: '高', ref: '低', will: '高',
    skillPts: '4 + 智力调整值',
    weapons: '限定（棍棒/镰刀/长矛等自然武器）；轻/中型非金属护甲，木盾/藤盾',
    mainAttr: '感知、体质',
    align: '中立阵营（含中立成分）',
    description: `德鲁伊是自然的守护者，拥有强大的准备型神术、召唤野兽的能力（<strong>动物伙伴</strong>）以及变形为动物的能力（<strong>野性变形</strong>）。他们是全能型角色——既能治疗、又能控场、还能近战。`,
    tip: '德鲁伊是D&D 3.5e公认的强力职业之一，尤其到高级别时野性变形+高级别法术几乎无解。',
    features: [
      { name: '动物伙伴（Animal Companion）', desc: '1级起拥有动物伙伴，随等级提升成长。可以是狼、熊、鸟等各种动物。' },
      { name: '自然感知（Nature Sense）', desc: '知识（自然）和生存技能各+2。' },
      { name: '野生共情（Wild Empathy）', desc: '影响动物，如同社交检定，需要1分钟接近。' },
      { name: '野性变形（Wild Shape）', desc: '4级起每日变形为小型或中型动物（之后扩展到大型/微型/极小型/植物/元素/魔法野兽）。变形保留HP和智力，获得新形态的体型和自然武器。' },
      { name: '缓步穿林（Woodland Stride）', desc: '2级：穿越荆棘/生长型地形不受减速。' },
      { name: '超自然专注（Trackless Step）', desc: '3级：在野外不留下踪迹（除非主动留）。' },
      { name: '抗自然诱惑（Resist Nature\'s Lure）', desc: '4级：对仙灵法术豁免+4。' },
      { name: '净化之躯（Venom Immunity）', desc: '9级：对所有毒素免疫。' },
      { name: '千变万化（A Thousand Faces）', desc: '13级：随意变形外貌，如"改变容貌"法术。' },
      { name: '时间无感（Timeless Body）', desc: '15级：不再因年龄受到属性惩罚，无最大年龄限制（但仍可被杀死）。' },
    ],
    levelTable: [
      [1,'+0','+2','+0','+2','动物伙伴、自然感知、野生共情'],
      [2,'+1','+3','+0','+3','缓步穿林'],
      [3,'+2','+3','+1','+3','超自然专注'],
      [4,'+3','+4','+1','+4','抗仙灵诱惑、野性变形1/日（小/中型）'],
      [5,'+3','+4','+1','+4','野性变形2/日'],
      [6,'+4','+5','+2','+5','野性变形3/日（大型）'],
      [7,'+5','+5','+2','+5','野性变形4/日'],
      [8,'+6/+1','+6','+2','+6','野性变形（微型）'],
      [9,'+6/+1','+6','+3','+6','毒素免疫、野性变形（植物）'],
      [10,'+7/+2','+7','+3','+7','野性变形5/日'],
      [13,'+9/+4','+8','+4','+8','千变万化'],
      [15,'+11/+6/+1','+9','+5','+9','时间无感'],
      [20,'+15/+10/+5','+12','+6','+12',''],
    ],
    builds: [
      '属性优先：感知（施法/豁免）→ 体质（HP+强韧）→ 智力（技能）',
      '推荐专长：自然法术（穿护甲时不失败）、法术专注（强化）',
      '高级玩法：选择巨型动物变形形态最大化伤害（如大型熊或犀牛）',
      '动物伙伴+自身变形可以同时占据2个战斗位置',
    ],
    source: 'PHB p.34-40',
    prev: 'cleric.html',
    prevName: '牧师',
    next: 'fighter.html',
    nextName: '战士',
  },

  monk: {
    title: '武僧 (Monk)',
    en: 'Monk',
    zh: '武僧',
    color: '#16a085',
    hd: 'd8', bab: '中（等级×3/4）', fort: '高', ref: '高', will: '高',
    skillPts: '4 + 智力调整值',
    weapons: '手斧、短棍、匕首、双头棍、九节鞭、戟头钩、长矛、手里剑、短剑、绳镖；不穿护甲',
    mainAttr: '感知、力量/敏捷',
    align: '守序阵营',
    description: `武僧是专注于身体和精神修炼的近战专家。他们不穿护甲，但感知加值可以增加AC；拳脚随等级变强（<strong>徒手重击</strong>）；拥有<strong>多重豁免</strong>；随等级获得各种特殊能力。武僧的特色是极度多样化的特殊能力和全豁免高。`,
    tip: '武僧是复杂但有趣的职业，属性要求高（力量/敏捷/感知/体质都重要）。但高级别全豁免使其非常强韧。',
    features: [
      { name: '徒手重击（Unarmed Strike）', desc: '武僧拳脚被视为魔法武器，伤害随等级提升：1级1d6，2级1d6，4级1d8，6级1d8，8级1d10，10级1d10，12级2d6，16级2d8，20级2d10。' },
      { name: '敏捷AC（Wisdom AC Bonus）', desc: '未着护甲时，感知调整值作为AC加值（AC加值类型：感知），且无上限。' },
      { name: '连击（Flurry of Blows）', desc: '可以用整轮动作进行额外攻击，但所有攻击掷骰-2（高级别时惩罚消失）。' },
      { name: '快速移动（Fast Movement）', desc: '2级+10ft；6级+20ft；9级+30ft；12级+40ft；15级+50ft；18级+60ft' },
      { name: '静如止水（Still Mind）', desc: '3级：对控制法术豁免+2。' },
      { name: '鬼手（Ki Strike）', desc: '4级：拳脚视为魔法武器（绕过DR/魔法）；10级：混乱；16级：附魔。' },
      { name: '慢落（Slow Fall）', desc: '4级：离墙1英尺内可慢速落下20ft，每2级+10ft。' },
      { name: '净化之躯（Purity of Body）', desc: '5级：对自然疾病免疫。' },
      { name: '整体攻击（Wholeness of Body）', desc: '7级：每日治疗自身 等级×2 HP（标准动作）。' },
      { name: '飞行跃步（Leap of the Clouds）', desc: '9级：跳跃时不受跑步距离限制。' },
      { name: '心如明镜（Diamond Body）', desc: '11级：对所有毒素免疫。' },
      { name: '无量大量（Abundant Step）', desc: '12级：每日1次，如同"次元门"（传送）。' },
      { name: '不死之躯（Diamond Soul）', desc: '13级：法术抵抗 = 10+等级。' },
      { name: '无懈可击（Quivering Palm）', desc: '15级：每周1次，触摸攻击可设定延迟致死。' },
      { name: '无上空明（Timeless Body）', desc: '17级：不受年龄惩罚（同德鲁伊）。' },
      { name: '舌吐莲花（Tongue of the Sun and Moon）', desc: '17级：可与任何有语言的生物沟通。' },
      { name: '天人合一（Perfect Self）', desc: '20级：获得异界生物类型，DR 10/混乱，豁免视为具有所有种族。' },
    ],
    levelTable: [
      [1,'+0','+2','+2','+2','徒手重击(1d6)、连击(-2)、感知AC'],
      [2,'+1','+3','+3','+3','战技奖励专长、逃脱能手'],
      [3,'+2','+3','+3','+3','静如止水'],
      [4,'+3','+4','+4','+4','鬼手（魔法）、慢落(20ft)'],
      [5,'+3','+4','+4','+4','净化之躯'],
      [6,'+4','+5','+5','+5','奖励专长、连击(-0)'],
      [7,'+5','+5','+5','+5','整体攻击'],
      [8,'+6/+1','+6','+6','+6','徒手重击(1d10)'],
      [9,'+6/+1','+6','+6','+6','飞行跃步、连击(+1攻击)'],
      [10,'+7/+2','+7','+7','+7','鬼手（混乱）'],
      [11,'+8/+3','+7','+7','+7','心如明镜'],
      [12,'+9/+4','+8','+8','+8','无量大量（次元门）'],
      [13,'+9/+4','+8','+8','+8','不死之躯（SR10+级）'],
      [15,'+11/+6/+1','+9','+9','+9','无懈可击'],
      [20,'+15/+10/+5','+12','+12','+12','天人合一'],
    ],
    builds: [
      '属性优先：力量（攻击/伤害）or 敏捷（替代力量）→ 感知（AC+意志）→ 体质',
      '推荐专长：精进武艺（减少全力攻击惩罚）、发挥极限（力量攻势配合连击）',
      '不适合多职业：武僧所有特性都需要纯级别累积，分班损失极大',
      '高等级武僧：法术抵抗+全豁免高+天人合一使其对魔法非常抗性',
    ],
    source: 'PHB p.40-46',
    prev: 'fighter.html',
    prevName: '战士',
    next: 'paladin.html',
    nextName: '圣武士',
  },

  paladin: {
    title: '圣武士 (Paladin)',
    en: 'Paladin',
    zh: '圣武士',
    color: '#f39c12',
    hd: 'd10', bab: '高（等级×1）', fort: '高', ref: '低', will: '低',
    skillPts: '2 + 智力调整值',
    weapons: '全部简单+军用武器，全部护甲，盾牌',
    mainAttr: '魅力、力量、体质',
    align: '守序善良（必须）',
    description: `圣武士是善良的武士骑士，由神明赐予力量抵御邪恶。他们拥有驱散不死（<strong>驱逐不死</strong>）、神圣之恩（<strong>Lay on Hands</strong>治疗）、圣光坐骑（<strong>特殊坐骑</strong>）和以魅力加成豁免的特殊能力（<strong>神圣之美</strong>）。高级别才会施法，但法术数量少。`,
    tip: '圣武士是团队的"守护者"，特别适合扮演忠诚骑士角色。神圣之美使整个队伍受益（所有豁免+魅力调整值）。',
    features: [
      { name: '辨别邪恶（Detect Evil）', desc: '随意使用，如"辨别邪恶"法术。' },
      { name: '圣击（Smite Evil）', desc: '每日次数=1+魅力调整值（最低1）。攻击加值+魅力调整值，伤害+等级（对邪恶目标）。' },
      { name: '神圣恩泽（Lay on Hands）', desc: '每日治疗HP = 魅力调整值×等级（对不死生物则造成伤害）。' },
      { name: '神圣之美（Divine Grace）', desc: '2级：所有豁免+魅力调整值。' },
      { name: '敏锐感知（Aura of Courage）', desc: '3级：范围5英尺内盟友对恐惧效果+4豁免；自身对恐惧免疫。' },
      { name: '神圣健康（Divine Health）', desc: '3级：对所有疾病免疫（含魔法疾病）。' },
      { name: '驱逐不死（Turn Undead）', desc: '4级：如牧师（等级-3）使用驱逐不死，每日3+魅力调整值次。' },
      { name: '特殊坐骑（Special Mount）', desc: '5级：获得神圣骑乘坐骑，通常为战马，随等级成长。' },
      { name: '消除疾病（Remove Disease）', desc: '6级：每周次数=等级/3，对盟友施放"消除疾病"。' },
    ],
    levelTable: [
      [1,'+1','+2','+0','+0','辨别邪恶、圣击（1/日）、神圣恩泽'],
      [2,'+2','+3','+0','+0','神圣之美、灵活感知'],
      [3,'+3','+3','+1','+1','勇气气场、神圣健康'],
      [4,'+4','+4','+1','+1','驱逐不死（如牧师1级）'],
      [5,'+5','+4','+1','+1','特殊坐骑，施法（1环1/日）'],
      [6,'+6/+1','+5','+2','+2','消除疾病（2/周）'],
      [7,'+7/+2','+5','+2','+2','圣击（2/日）'],
      [8,'+8/+3','+6','+2','+2','—'],
      [9,'+9/+4','+6','+3','+3','消除疾病（3/周）'],
      [10,'+10/+5','+7','+3','+3','—'],
      [14,'+14/+9/+4','+9','+4','+4','圣击（3/日）'],
      [20,'+20/+15/+10/+5','+12','+6','+6',''],
    ],
    builds: [
      '属性优先：力量（战斗）→ 魅力（豁免/圣击/驱散）→ 体质（HP）→ 感知',
      '核心优势：神圣之美使全队豁免显著提升，是队伍"豁免保姆"',
      '推荐专长：武器专精、力量攻势（配合大型武器）',
      '注意：圣武士跌落善良阵营时失去所有职业能力',
    ],
    source: 'PHB p.42-46',
    prev: 'monk.html',
    prevName: '武僧',
    next: 'ranger.html',
    nextName: '游侠',
  },

  sorcerer: {
    title: '术士 (Sorcerer)',
    en: 'Sorcerer',
    zh: '术士',
    color: '#8e44ad',
    hd: 'd4', bab: '低（等级×1/2）', fort: '低', ref: '低', will: '高',
    skillPts: '2 + 智力调整值',
    weapons: '所有简单武器；无护甲无盾（有法术失败率）',
    mainAttr: '魅力（施法）、体质',
    align: '无阵营限制',
    description: `术士是天生的魔法使用者，不需要学习就拥有法术能力。他们比法师拥有<strong>更多的法术位</strong>（每日更多次数），但法术数量固定（已知法术少于法师）。术士通过<strong>魅力</strong>施法，最高施法能力来自魅力值。`,
    tip: '术士的优势是每日可施放更多法术（不需要准备）；劣势是已知法术有限，灵活性不如法师。适合喜欢"反复使用几个强力法术"的玩家。',
    features: [
      { name: '自发施法', desc: '术士不需要准备法术。任何已知法术可以随时使用，直到当日法术位耗尽。' },
      { name: '法术已知限制', desc: '每级可学法术有限（见下表），无法像法师通过法术书学习新法术，但可以每升级替换一个已知法术。' },
      { name: '法术位丰富', desc: '相同等级下，术士每日可施放的法术次数比法师多2个/环。' },
      { name: '家族魔宠（Familiar）', desc: '如同法师，可以选择一只魔宠（猫/乌鸦/鼹鼠等）提供被动加值。' },
    ],
    spellTable: {
      headers: ['术士等级', '0环', '1环', '2环', '3环', '4环', '5环', '6环', '7环', '8环', '9环'],
      note: '法术位/日（比法师多）',
      rows: [
        [1,5,3,'-','-','-','-','-','-','-','-'],
        [2,6,4,'-','-','-','-','-','-','-','-'],
        [3,6,5,3,'-','-','-','-','-','-','-'],
        [4,6,6,4,'-','-','-','-','-','-','-'],
        [5,6,6,5,3,'-','-','-','-','-','-'],
        [7,6,6,6,5,3,'-','-','-','-','-'],
        [10,6,6,6,6,6,5,3,'-','-','-'],
        [14,6,6,6,6,6,6,6,5,3,'-'],
        [18,6,6,6,6,6,6,6,6,6,5],
        [20,6,6,6,6,6,6,6,6,6,6],
      ]
    },
    levelTable: [
      [1,'+0','+0','+0','+2','魔宠、自发施法'],
      [3,'+1','+1','+1','+3','—'],
      [5,'+2','+1','+1','+4','—'],
      [7,'+3','+2','+2','+5','—'],
      [10,'+5','+3','+3','+7','—'],
      [15,'+7/+2','+5','+5','+9','—'],
      [20,'+10/+5','+6','+6','+12','—'],
    ],
    builds: [
      '属性优先：魅力（施法DC/法术位）→ 体质（HP/强韧）→ 敏捷（AC）',
      '推荐专长：法术专注（DC+1）、精通法术（增加已知法术不耗位）、快速法术',
      '法术选择建议：选择多功能法术（如法球/术士大量使用酸箭、火球、冰锥、恐惧等）',
      '与法师相比：术士更适合反复使用同一套法术；法师更灵活准备当日最优法术组合',
    ],
    source: 'PHB p.51-56',
    prev: 'rogue.html',
    prevName: '盗贼',
    next: 'wizard.html',
    nextName: '法师',
  },
};

function generateClassPage(id, data) {
  const spellSection = data.spellTable ? `
    <h2 id="spells">🪄 法术系统</h2>
    <p>${data.zh}通过<strong>魅力</strong>施法，法术位如下表（额外法术位见PHB附录）：</p>
    <table class="spell-table">
      <thead><tr>${data.spellTable.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${data.spellTable.rows.map(r=>`<tr>${r.map(v=>`<td>${v}</td>`).join('')}</tr>`).join('')}</tbody>
    </table>` : '';

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${data.title} - D&amp;D 3.5e 中文Wiki</title>
<link rel="stylesheet" href="../style.css">
${STYLE}
</head>
<body>
${NAV_TEMPLATE('../')}

<div class="layout">
${SIDEBAR(id)}

  <article class="main-content">
    <div class="infobox">
      <h3>${data.title}</h3>
      <div class="infobox-row"><span class="ib-label">生命骰</span><span class="ib-value">${data.hd}</span></div>
      <div class="infobox-row"><span class="ib-label">基础攻击加值</span><span class="ib-value">${data.bab}</span></div>
      <div class="infobox-row"><span class="ib-label">强韧豁免</span><span class="ib-value">${data.fort}</span></div>
      <div class="infobox-row"><span class="ib-label">反射豁免</span><span class="ib-value">${data.ref}</span></div>
      <div class="infobox-row"><span class="ib-label">意志豁免</span><span class="ib-value">${data.will}</span></div>
      <div class="infobox-row"><span class="ib-label">技能点/级</span><span class="ib-value">${data.skillPts}</span></div>
      <div class="infobox-row"><span class="ib-label">主要属性</span><span class="ib-value">${data.mainAttr}</span></div>
      <div class="infobox-row"><span class="ib-label">阵营限制</span><span class="ib-value">${data.align}</span></div>
    </div>

    <h1>${data.zh} <span style="font-size:0.6em;color:var(--text-subtle);">(${data.en})</span></h1>

    <h2 id="overview">📖 职业概述</h2>
    <p>${data.description}</p>
    <div class="tip-box"><strong>💡 适合的玩家：</strong>${data.tip}</div>

    <h2 id="features">🌟 职业特性</h2>
    ${data.features.map(f=>`<div class="feature-box"><h4>${f.name}</h4><p>${f.desc}</p></div>`).join('\n    ')}

    <h2 id="level-table">📊 等级成长表</h2>
    <table class="class-table">
      <thead>
        <tr><th>等级</th><th>BAB</th><th>强韧</th><th>反射</th><th>意志</th><th>特殊能力</th></tr>
      </thead>
      <tbody>
        ${data.levelTable.map(r=>`<tr>${r.map((v,i)=>`<td>${v}</td>`).join('')}</tr>`).join('\n        ')}
      </tbody>
    </table>

    ${spellSection}

    <h2 id="build">🎯 构建建议</h2>
    <ul style="margin:8px 0 0 20px;line-height:2.2;">
      ${data.builds.map(b=>`<li>${b}</li>`).join('\n      ')}
    </ul>

    <hr style="margin:40px 0;border:none;border-top:1px solid var(--border-light);">
    <p style="font-size:13px;color:#999;">
      📚 来源：${data.source} | SRD · ${data.en} |
      <a href="${data.prev}">← ${data.prevName}</a> | <a href="${data.next}">${data.nextName} →</a>
    </p>
  </article>
</div>

<footer class="site-footer" style="background:var(--bg-navbar);color:#aaa;padding:16px;text-align:center;font-size:13px;">
  <p>D&amp;D 3.5e 中文Wiki | 本网站为爱好者创作，与威世智公司无关</p>
</footer>
</body>
</html>`;
}

Object.entries(classes).forEach(([id, data]) => {
  const content = generateClassPage(id, data);
  fs.writeFileSync(`classes/${id}.html`, content, 'utf8');
  console.log(`✅ 生成 classes/${id}.html (${content.length} chars)`);
});

console.log('\n完成！');
