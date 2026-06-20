// spells-conflicts.js
// 法术规则冲突标注数据（独立文件，不修改 spells-data.js）
//
// 用法：在 spell-detail.html 中加载此文件，
// 然后合并 conflictsData 到法术数据中

window.conflictsData = {

  // ========== 核心争议法术（第一批） ==========
  
  "lightning_bolt": [
    {
      "point": "闪电箭在封闭空间的反弹",
      "phbRule": "形成5尺宽力场，可在金属表面反射",
      "controversy": "闪电在20尺宽通道中是否填满整个通道；反射后强度是否减弱",
      "suggestion": "严格按PHB：闪电填满通道宽度，反射不减弱",
      "source": "PHB p.246"
    }
  ],
  
  "summon_monster_1": [
    {
      "point": "召唤生物的BAB和豁免计算",
      "phbRule": "使用MM标准属性，但HD=法术环级",
      "controversy": "召唤生物BAB按全BAB还是3/4；强韧/反射/意志如何计算",
      "suggestion": "使用SRD召唤怪物属性表（已明确数值）",
      "source": "SRD Summon Monster"
    }
  ],
  
  "web": [
    {
      "point": "蛛网的移除方式",
      "phbRule": "火可在1d4+1轮后烧尽蛛网",
      "controversy": "是否可用锐器斩断（标准动作+力量检定）；蛛网对大型生物效果",
      "suggestion": "蛛网HP 10/5尺立方，可用力量DC25或火焰移除",
      "source": "PHB p.302"
    }
  ],
  
  "mirror_image": [
    {
      "point": "镜影术的破盾机制",
      "phbRule": "每次被攻击时随机选择镜像（含真身）",
      "controversy": "范围攻击是否破所有镜像；镜像是否抵消多枚魔法飞弹",
      "suggestion": "范围攻击破所有镜像；每枚飞弹破一个镜像",
      "source": "PHB p.253, FAQ v2.0"
    }
  ],
  
  "shield": [
    {
      "point": "护盾术的力场免疫范围",
      "phbRule": "免疫魔法飞弹，+4偏转AC",
      "controversy": "是否免疫其他力场法术（如力场墙、力量冲击）",
      "suggestion": "只免疫魔法飞弹，不免疫其他力场法术",
      "source": "PHB p.279"
    }
  ],
  
  "magic_missile": [
    {
      "point": "魔法飞弹的自动命中规则",
      "phbRule": "自动命中，每枚1d4+1伤，+1枚/环级以上",
      "controversy": "护盾术完全抵消；「法术失败」是否影响飞弹",
      "suggestion": "护盾完全抵消；飞弹无视反射/AC",
      "source": "PHB p.252"
    }
  ],
  
  "hold_person": [
    {
      "point": "定身人类的施法限制",
      "phbRule": "无法通过敏捷检定移动",
      "controversy": "是否阻止言语/姿势成分法术；是否影响精神行动",
      "suggestion": "定身阻止需要运动的动作；可被治疗（不需运动）",
      "source": "PHB p.241"
    }
  ],
  
  "cure_light_wounds": [
    {
      "point": "治疗轻伤对死灵生物",
      "phbRule": "治疗1d8+CL HP",
      "controversy": "是否可故意对死灵施展造成伤害",
      "suggestion": "可故意对死灵生物施展造成伤害",
      "source": "PHB p.220"
    }
  ],
  
  "bless": [
    {
      "point": "祝福术的范围时效",
      "phbRule": "半径50尺，1分钟/CL",
      "controversy": "是否影响施法后进入范围的友方",
      "suggestion": "只对施展时在场目标有效",
      "source": "PHB p.204"
    }
  ],
  
  "fly": [
    {
      "point": "飞行术的错误处理",
      "phbRule": "机动性普通，速度60尺",
      "controversy": "受伤害需做平衡检定（DC=伤害值）；坠落伤害计算",
      "suggestion": "受伤害需平衡检定，失败则坠落",
      "source": "PHB p.227, DMG p.20"
    }
  ],
  
  "sleep": [
    {
      "point": "睡眠术对已经睡眠的生物",
      "phbRule": "影响最多4HD",
      "controversy": "已经自然睡眠的生物是否受影响；睡眠是否叠加",
      "suggestion": "自然睡眠生物不受影响；魔法睡眠不叠加",
      "source": "PHB p.280"
    }
  ],
  
  "charm_person": [
    {
      "point": "魅惑效果的发现与解除",
      "phbRule": "1d6分钟/CL",
      "controversy": "被魅惑者发现真相后是否立即解除",
      "suggestion": "发现后可做意志豁免解除",
      "source": "PHB p.210"
    }
  ],
  
  "color_spray": [
    {
      "point": "彩光喷射的效果治疗",
      "phbRule": "影响最多4HD，反射negates",
      "controversy": "blindness是否可被治疗",
      "suggestion": "可用remove blindness治疗",
      "source": "PHB p.214"
    }
  ],
  
  "fire_shield": [
    {
      "point": "火焰护盾的反射伤害",
      "phbRule": "近战攻击者受1d6火焰伤害",
      "controversy": "反射伤害是否触发攻击者火焰抗性",
      "suggestion": "反射伤害是法术效果，正常做抗性检定",
      "source": "PHB p.231"
    }
  ],
  
  "chain_lightning": [
    {
      "point": "连锁闪电的跳跃机制",
      "phbRule": "主要目标受1d6/CL伤，之后跳跃",
      "controversy": "跳跃目标数量上限；是否可被墙体阻挡",
      "suggestion": "跳跃最多CL+1目标，跳跃距离30尺",
      "source": "PHB p.209"
    }
  ],
  
  "heal": [
    {
      "point": "治疗术的状态治愈范围",
      "phbRule": "治疗3d8+CL伤，解所有疾病",
      "controversy": "是否治愈所有负面状态",
      "suggestion": "治愈所有HP伤害和大部分负面状态",
      "source": "PHB p.239"
    }
  ],
  
  "delayed_blast_fireball": [
    {
      "point": "延爆火球的延时机制",
      "phbRule": "可延时1轮/CL后爆发",
      "controversy": "延时期间可否移动中心；可否被解除",
      "suggestion": "施展时固定中心；延时期间可被解除魔法",
      "source": "PHB p.221"
    }
  ],
  
  "charm_monster": [
    {
      "point": "魅惑怪物的影响范围",
      "phbRule": "可影响任何生物",
      "controversy": "是否受语言限制；是否影响不死/异界生物",
      "suggestion": "不受语言限制，但受意志豁免",
      "source": "PHB p.210"
    }
  ],
  
  "protection_from_alignment": [
    {
      "point": "防护自阵营的叠加规则",
      "phbRule": "不同变体可叠加",
      "controversy": "可否同时防护多个阵营",
      "suggestion": "不同变体（evil/good/chaos/law）可叠加",
      "source": "PHB p.266"
    }
  ],
  
  "mage_armor": [
    {
      "point": "法师护甲与天然护甲叠加",
      "phbRule": "+4 AC（偏转，敏捷上限+4）",
      "controversy": "是否与自然护甲/偏转加值叠加",
      "suggestion": "可叠加（不同类型AC加值）",
      "source": "PHB p.251"
    }
  ],
  
  "displacement": [
    {
      "point": "位移术对范围攻击",
      "phbRule": "攻击者50%失手",
      "controversy": "范围攻击是否受位移影响",
      "suggestion": "范围攻击正常命中（无特定目标）",
      "source": "PHB p.223"
    }
  ],
  
  "stoneskin": [
    {
      "point": "石皮术的伤害吸收类型",
      "phbRule": "吸收10点/CL物理伤害",
      "controversy": "是否吸收能量伤害（火焰/寒冷等）",
      "suggestion": "只吸收物理伤害，不吸收能量",
      "source": "PHB p.285"
    }
  ],
  
  "enlarge_person": [
    {
      "point": "放大人类的武器缩放",
      "phbRule": "生物变大，武器不变",
      "controversy": "放大的生物能否使用自己的武器",
      "suggestion": "武器不缩放，需换武器或使用徒手",
      "source": "PHB p.226"
    }
  ],
  
  "invisibility": [
    {
      "point": "隐形术的打破条件",
      "phbRule": "攻击/施法打破隐形",
      "controversy": "移动/说话是否打破隐形",
      "suggestion": "只移动/说话不打破；攻击/施法打破",
      "source": "PHB p.245"
    }
  ],
  
  "greater_invisibility": [
    {
      "point": "高等隐形的攻击破隐",
      "phbRule": "攻击不打破隐形",
      "controversy": "范围攻击是否暴露位置",
      "suggestion": "攻击不破隐，但敌人知攻击来自何处",
      "source": "PHB p.235"
    }
  ],
  
  "dispel_magic": [
    {
      "point": "解除魔法的检定方式",
      "phbRule": "1d20+CL+精神加值 vs DC 11+法术CL",
      "controversy": "是否需要对每个法术分别检定",
      "suggestion": "标准动作解除一个法术；整轮动作解除所有",
      "source": "PHB p.223"
    }
  ],
  
  "haste": [
    {
      "point": "加速术的额外攻击",
      "phbRule": "仅限近战攻击",
      "controversy": "3.0版允许任何攻击，3.5e改仅近战",
      "suggestion": "严格3.5e规则：仅近战攻击",
      "source": "PHB p.239, 3.5e Change Log"
    }
  ],
  
  "polymorph": [
    {
      "point": "变化术的形式选择",
      "phbRule": "可变成任何动物",
      "controversy": "变化后是否获得特殊攻击/能力；HP如何计算",
      "suggestion": "获得生物所有特殊能力；HP取原HP或新形HP",
      "source": "PHB p.263, Savage Species"
    }
  ],
  
  "teleport": [
    {
      "point": "传送术的误差计算",
      "phbRule": "按熟悉程度有误差",
      "controversy": "「seen casually」的误差范围",
      "suggestion": "严格按PHB表：精确/熟悉/见过/描述",
      "source": "PHB p.293"
    }
  ],
  
  "shapechange": [
    {
      "point": "变身术的能力类型",
      "phbRule": "可获得类法术能力",
      "controversy": "是否可获得超魔/制造物品能力",
      "suggestion": "可获得类法术能力，不可获得超魔",
      "source": "PHB p.278"
    }
  ],
  
  "wish": [
    {
      "point": "许愿术的DM裁量权",
      "phbRule": "DM可解释许愿",
      "controversy": "许愿复活死者/复制法术是否安全",
      "suggestion": "许愿有33%失败率（非标准许愿）",
      "source": "PHB p.302"
    }
  ],
  
  "antimagic_field": [
    {
      "point": "反魔法场对魔法物品",
      "phbRule": "抑制所有魔法效果",
      "controversy": "魔法武器在力场内如何处理",
      "suggestion": "魔法武器变普通（失增强加值）",
      "source": "PHB / SRD"
    }
  ],
  
  "animate_dead": [
    {
      "point": "操控死尸的HD上限",
      "phbRule": "法师/术士：总HD≤CL×2；牧师：无上限",
      "controversy": "牧师无上限是否过于强大",
      "suggestion": "严格PHB：牧师无HD上限",
      "source": "PHB p.199"
    }
  ],
  
  "fireball": [
    {
      "point": "火球术在角落的反弹",
      "phbRule": "爆破力场反射",
      "controversy": "是否对施法者造成伤害",
      "suggestion": "施法者需站在安全距离",
      "source": "PHB p.231"
    }
  ],
  
  "identify": [
    {
      "point": "鉴定术的材料成分",
      "phbRule": "需100gp珍珠",
      "controversy": "材料成分耗尽是否意味着法术失败",
      "suggestion": "打断则材料耗尽，法术失败",
      "source": "PHB p.243"
    }
  ],
  
  "protection_from_energy": [
    {
      "point": "防护自能量与抵抗能量叠加",
      "phbRule": "不叠加，取更高者",
      "controversy": "免疫和抗力是否算同类效果",
      "suggestion": "不叠加，使用更高优先级",
      "source": "PHB p.266"
    }
  ],
  
  "baleful_polymorph": [
    {
      "point": "恶毒变化术的豁免",
      "phbRule": "强韧negates",
      "controversy": "是否可用「自然变化」破此法术",
      "suggestion": "强韧失败则变永久（需wish/justice恢复）",
      "source": "PHB p.203"
    }
  ],
  
  // ========== 核心争议法术（第二批） ==========
  
  "detect_magic": [
    {
      "point": "侦测魔法的持续时间与浓度判断",
      "phbRule": "3轮专注可确定物品是魔法/非魔法；3轮可确定最强奥术环级；3轮可确定属性",
      "controversy": "「确定属性」是否需要额外3轮还是同时完成；魔法溢出（7尺内多个魔法物品）如何处理",
      "suggestion": "严格PHB：每段信息需额外3轮专注；溢出时浓度最高物品优先",
      "source": "PHB p.220"
    }
  ],
  
  "read_magic": [
    {
      "point": "阅读魔法是否需要材料成分",
      "phbRule": "法术成分：V,S（无M）；但卷轴需材料认知",
      "controversy": "法师能否直接阅读卷轴（需该法术？还是需阅读魔法？）",
      "suggestion": "法师可尝试直接使用卷轴（奥术术士通常可以）；阅读魔法确保成功",
      "source": "PHB p.280"
    }
  ],
  
  "comprehend_languages": [
    {
      "point": "理解语言能否解密",
      "phbRule": "理解口头/书面语言（含魔法文字）",
      "controversy": "「魔法文字」是否包括符文/诅咒文字；能否理解密码/暗语",
      "suggestion": "仅理解语言，不解密/破译；魔法文字需阅读魔法",
      "source": "PHB p.213"
    }
  ],
  
  "endure_elements": [
    {
      "point": "忍受元素对极端环境的保护",
      "phbRule": "受环境温度影响时，获得5点环境加值",
      "controversy": "能否抵抗直接元素伤害（火球/闪电）；「环境温度」定义是否包括魔法热源",
      "suggestion": "仅环境温度，不抵抗元素法术伤害；直接伤害需抵抗能量/防护元素",
      "source": "PHB p.227"
    }
  ],
  
  "protection_from_evil": [
    {
      "point": "防护自邪恶的阵营保护机制",
      "phbRule": "对守序善良/混乱善良/中立善良生物防护防守（deflection +2, WM +2）",
      "controversy": "「善良」是否包括善良异界生物；召唤生物是否受保护（保护召唤者）",
      "suggestion": "对抗所有邪恶生物；召唤生物受保护（召唤者也在区域内）",
      "source": "PHB p.266"
    }
  ],
  
  "silence": [
    {
      "point": "无声法术区域",
      "phbRule": "半径20尺散布，区域内所有声音被消除",
      "controversy": "区域外能否听到区域内声音（单向隔音？）；无声是否阻止聆听检定",
      "suggestion": "区域内完全静音；区域外听不到区域内声音（单向隔音）",
      "source": "PHB p.280"
    }
  ],
  
  "darkness": [
    {
      "point": "黑暗术的视觉类型影响",
      "phbRule": "创造20尺半径黑暗（正常视觉无法看透）",
      "controversy": "黑暗术是否抵消光源（火把/日光）；对抗黑暗vision/ultravision如何处理",
      "suggestion": "黑暗抵消普通光源；黑暗vision可看透（除非DEEP黑暗）",
      "source": "PHB p.216"
    }
  ],
  
  "knock": [
    {
      "point": "敲击术对魔法锁的影响",
      "phbRule": "开普通锁（Open Lock +10）；对魔法锁（Knock对抗Lock DC）",
      "controversy": "能否打开「Arcane Lock」法术；是否破坏锁（永久性开启）",
      "suggestion": "对抗魔法锁（CL检定）；不破坏锁，暂时开启10分钟/环",
      "source": "PHB p.246"
    }
  ],
  
  "levitate": [
    {
      "point": "漂浮术的移动控制",
      "phbRule": "目标以20尺/轮垂直移动（需意志反抗）",
      "controversy": "漂浮目标能否水平移动（抓墙/推物）；携带重量是否影响垂直速度",
      "suggestion": "仅垂直移动；可抓墙暂停；重量不影响速度",
      "source": "PHB p.248"
    }
  ],
  
  // ========== 2级法术 ==========
  
  "resist_energy": [
    {
      "point": "抵抗能量与防护自能量的区别",
      "phbRule": "免疫指定能量类型（10点/环）",
      "controversy": "抵抗能量是否STACK防护自能量；能量SUBTYPE伤害是否都受保护",
      "suggestion": "不STACK；仅保护直接接触伤害（不含AREA/EFFECT）",
      "source": "PHB p.273"
    }
  ],
  
  "see_invisibility": [
    {
      "point": "看破隐形对虚体生物的视觉效果",
      "phbRule": "看到隐形/虚体生物（虚体呈半透明）",
      "controversy": "看到虚体是否可攻击（需CORPOREAL持武器？）；虚体攻击看破者是否受50% miss chance",
      "suggestion": "可看到虚体；攻击需CORPOREAL（或FORCE效应）；虚体攻击不受MISS CHANCE",
      "source": "PHB p.277"
    }
  ],
  
  "darkvision": [
    {
      "point": "黑暗视觉的射程与适用环境",
      "phbRule": "获得60尺黑暗视觉（见黑暗如白天）",
      "controversy": "黑暗视觉是否抵消阴影/DEEP阴影；魔法黑暗（DEEPER DARKNESS）是否抵消",
      "suggestion": "黑暗视觉抵消正常黑暗；需TRUE SEEING抵消魔法黑暗",
      "source": "PHB p.216"
    }
  ],
  
  // ========== 3级法术 ==========
  
  "fly": [
    {
      "point": "飞行术的机动性等级",
      "phbRule": "飞行速度60尺（完美机动性）",
      "controversy": "完美机动性是否允许HOVER/垂直起飞；载人（超中载）是否降低机动性",
      "suggestion": "完美机动性=HOVER+垂直；超载降为不良机动性",
      "source": "PHB p.229, MM p.13"
    }
  ],
  
  "heroism": [
    {
      "point": "英雄术的士气加值类型",
      "phbRule": "获得+2士气加值（攻击/豁免/技能）",
      "controversy": "士气加值是否STACK其他士气效应；是否抵抗恐惧",
      "suggestion": "不STACK同类士气；抵抗恐惧（MORALE免疫）",
      "source": "PHB p.239"
    }
  ],
  
  // ========== 4级法术 ==========
  
  "dimension_door": [
    {
      "point": "任意门的精准传送误差",
      "phbRule": "传送自身+接触生物（误差5尺）",
      "controversy": "是否可精确传送（看到目的地/知道坐标）；撞入固体是否伤害",
      "suggestion": "精确传送需「看过/知道」；撞入固体受10d6伤害",
      "source": "PHB p.221"
    }
  ],
  
  "enervation": [
    {
      "point": "负能量射线的等级吸取机制",
      "phbRule": "命中造成1d4负等级（强韧DC减1d4）",
      "controversy": "负等级是否立即生效；恢复方式（REST/RESTORATION）",
      "suggestion": "立即生效；24小时后可强韧恢复；RESTORATION永久恢复",
      "source": "PHB p.226"
    }
  ],
  
  // ========== 5级法术 ==========
  
  "dominate_person": [
    {
      "point": "支配人类的非消费操控",
      "phbRule": "支配目标（非消费意志力；每日1意志反抗）",
      "controversy": "能否命令自毁/违反本性；支配期间是否共享感官",
      "suggestion": "可命令自毁（需WILL DC）；不共享感官（需TELEPATHY）",
      "source": "PHB p.223"
    }
  ],
  
  "true_seeing": [
    {
      "point": "真知术的视觉穿透能力",
      "phbRule": "看破幻象/隐形/位移/投影/虚体（120尺）",
      "controversy": "是否看破「改变形态」；对灵体是否可见",
      "suggestion": "看破所有视觉欺骗；灵体需SEE INVISIBILITY+ TRUE SEEING",
      "source": "PHB p.296"
    }
  ],
  
  // ========== 6级法术 ==========
  
  "disintegrate": [
    {
      "point": "解离术的伤害类型与复活",
      "phbRule": "射线造成2d6×10伤害（强韧negate）",
      "controversy": "解离死亡是否可用RESTORATION/RAISE DEAD复活",
      "suggestion": "解离死亡需TRUE RESURRECTION（RESTORATION仅防等级吸取）",
      "source": "PHB p.221"
    }
  ],
  
  // ========== 7级法术 ==========
  
  "greater_teleport": [
    {
      "point": "高等传送的误差与限制",
      "phbRule": "精确传送（无误差；可跨位面）",
      "controversy": "是否需看过目的地；传送入固体是否自动失败",
      "suggestion": "看过/知道坐标均可；自动定位最近空位（不伤害）",
      "source": "PHB p.252"
    }
  ],
  
  "spell_turning": [
    {
      "point": "法术反转的反射机制",
      "phbRule": "反射1d4+6法术（包括已解消法术）",
      "controversy": "反射法术是否需新豁免；区域法术是否反射",
      "suggestion": "反射法术需原豁免DC；区域法术不反射（仅个人/目标法术）",
      "source": "PHB p.283"
    }
  ],
  
  // ========== 9级法术 ==========
  
  "meteor_swarm": [
    {
      "point": "流星雨的反射检定与伤害",
      "phbRule": "4个爆炸各造成2d6×10火+强韧半数",
      "controversy": "每个爆炸是否独立反射；能否用于解除力墙/石墙",
      "suggestion": "每个爆炸独立反射；可破坏非魔法结构（HP 10/寸）",
      "source": "PHB p.253"
    }
  ],
  
  "time_stop": [
    {
      "point": "时间停止的持续时间与限制",
      "phbRule": "时间停止（1d4+1动作；不可影响其他生物）",
      "controversy": "停止期间能否施法；能否移动/攻击",
      "suggestion": "可施法（时间恢复后生效）；可移动（但无法攻击）",
      "source": "PHB p.295"
    }
  ]
  
};
