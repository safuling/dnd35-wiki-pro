import json, os

# 第5批：大量补充，目标300+总法术
new_spells = [

  # ===== 0环 补全 =====
  {"id":"mending_0","nameEn":"Mending","nameZh":"修理术",
   "level":0,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"10尺",
   "target":"一件破损物品","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"你可以修复一件破损的非魔法物品（破损程度不超过1平方寸）。修理术无法修复魔法物品或已解体的物品。",
   "arcane":{"wizard":0,"sorcerer":0},
   "divine":{"cleric":0,"druid":0},
   "classes":{"wizard":0,"sorcerer":0,"cleric":0,"druid":0}},

  {"id":"touch_of_fatigue_0","nameEn":"Touch of Fatigue","nameZh":"触碰疲劳",
   "level":0,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一个生物","duration":"1轮/环","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"需要近战接触攻击。命中则目标受到-2体质惩罚（强韧过则无效）。法术持续期间目标每轮可以做强韧检定以解除。",
   "arcane":{"wizard":0,"sorcerer":0},"divine":None,
   "classes":{"wizard":0,"sorcerer":0}},

  # ===== 3环 补全 =====
  {"id":"caster_level","nameEn":"Caster Level","nameZh":"施法者等级",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你的有效施法者等级提升+1d4+1（最高不超过你的HD）。对奥术和神术都有效。",
   "arcane":{"wizard":3,"sorcerer":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3}},

  {"id":"daylight_3","nameEn":"Daylight","nameZh":"昼明术",
   "level":3,"school":"咒法学","subschool":"创造","descriptor":"[光]",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的物品（最多3立方尺）或生物","duration":"10分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"目标物品或被生物携带的物品（或生物本身）周围60尺半径内充满明亮光线（如同日光）。昼明术可以抵消黑暗术和深化黑暗术。",
   "arcane":{"wizard":3,"sorcerer":3},"divine":{"cleric":3,"druid":3},
   "classes":{"wizard":3,"sorcerer":3,"cleric":3,"druid":3}},

  {"id":"deep_slumber","nameEn":"Deep Slumber","nameZh":"深眠术",
   "level":3,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S,M","castingTime":"1标准动作","range":"中距",
   "target":"最多10HD的生物","duration":"1小时/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"如同睡眠术，但影响HD更高的生物（最多10HD总值）。受影响生物陷入昏迷。通过意志检定则不受影响。",
   "material":"一小撮沙子、一朵雏菊和一块生肉",
   "arcane":{"wizard":3,"sorcerer":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3}},

  {"id":"dispel_magic_3","nameEn":"Dispel Magic","nameZh":"解除魔法",
   "level":3,"school":"防护系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"中距",
   "target":"一个生物、物品或法术效果","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"尝试解除一个生物、物品或区域上的法术效果。需要进行施法者等级检定（d20+施法者等级）对抗DC11+施法者等级。也可以尝试解除区域内所有法术。",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":{"cleric":3,"druid":3,"paladin":3},
   "classes":{"wizard":3,"sorcerer":3,"bard":3,"cleric":3,"druid":3,"paladin":3}},

  {"id":"displacement","nameEn":"Displacement","nameZh":"移位术",
   "level":3,"school":"幻术系","subschool":"式技幻术","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"1轮/环","savingThrow":"无","spellResist":"否",
   "desc":"你的图像移位（如同失手50%）。攻击者对你攻击时视为有隐蔽（50%失手几率）。真知术可以看穿移位术。",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3,"bard":3}},

  {"id":"explosive_runes","nameEn":"Explosive Runes","nameZh":"爆裂符文",
   "level":3,"school":"咒法学","subschool":"创造","descriptor":"[火][土]",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"一个接触的表面","duration":"1天/环或直到触发","savingThrow":"见描述","spellResist":"否",
   "desc":"在表面绘制爆裂符文。触发时造成1d6点火焰和强酸伤害每施法者等级（最高10d6）。触发条件由你设定（如「陌生人触碰」）。反射过则减半。",
   "material":"火药、硫磺和强酸（价值50gp）",
   "arcane":{"wizard":3,"sorcerer":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3}},

  {"id":"fly_3","nameEn":"Fly","nameZh":"飞行术",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,F","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得飞行速度60尺（良好机动性）。受术者可以进行冲刺和俯冲。如果法术终止时受术者在空中，他会缓慢坠落（见羽落术）。",
   "focus":"一根轻羽毛或一小片羽毛",
   "arcane":{"wizard":3,"sorcerer":3},"divine":{"cleric":3,"druid":3},
   "classes":{"wizard":3,"sorcerer":3,"cleric":3,"druid":3}},

  {"id":"gaseous_form_3","nameEn":"Gaseous Form","nameZh":"气化形体",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"S,M","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你变成气体状态。你可以飞行（速度10尺，不良机动性），穿过裂缝和缝隙。你在气化状态下无法攻击或施法（除了一直持续的法术）。风吹可以移动你。",
   "material":"一小块纱布和一根稻草",
   "arcane":{"wizard":3,"sorcerer":3},"divine":{"druid":3},
   "classes":{"wizard":3,"sorcerer":3,"druid":3}},

  {"id":"haste_3","nameEn":"Haste","nameZh":"加速术",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"近距",
   "target":"一个生物以及每施法者等级一个盟友（所有目标都在范围内）","duration":"1轮/级","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得以下受益：移动速度翻倍、获得一次额外的部分动作每轮（不能用于施法）、+1闪避加值AC、反射豁免+1。加速术是超自然速度，不影响持续时间型法术。",
   "material":"一小撮切下的肉桂皮",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":{"cleric":3,"druid":3},
   "classes":{"wizard":3,"sorcerer":3,"bard":3,"cleric":3,"druid":3}},

  {"id":"heroism_3","nameEn":"Heroism","nameZh":"英雄术",
   "level":3,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一个生物","duration":"10分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得+2士气加值对抗恐惧效果、+2士气加值所有攻击检定和技能检定。",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3,"bard":3}},

  {"id":"hold_person_3","nameEn":"Hold Person","nameZh":"定身人类",
   "level":3,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S,F","castingTime":"1标准动作","range":"中距",
   "target":"一个人形生物","duration":"1轮/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"目标被定身（无法行动，但可以进行豁免检定每轮）。目标生命值降到0以下则法术终止。如果目标受到30点以上伤害，法术终止。",
   "focus":"一个小的人偶，用象牙制成（价值50gp）",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":{"cleric":3},
   "classes":{"wizard":3,"sorcerer":3,"bard":3,"cleric":3}},

  {"id":"invisibility_sphere_3","nameEn":"Invisibility Sphere","nameZh":"隐形之球",
   "level":3,"school":"幻术系","subschool":"式技幻术","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"个人",
   "target":"10尺半径散布，以你为中心","duration":"1分钟/环或直到发动攻击","savingThrow":"无","spellResist":"否",
   "desc":"你和10尺内的所有盟友变得隐形。如果任何受术者发动攻击，只有该受术者失去隐形。真知术可以看穿。",
   "material":"一根睫毛粘在麦秆上",
   "arcane":{"wizard":3,"sorcerer":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3}},

  {"id":"keen_edge_3","nameEn":"Keen Edge","nameZh":"锋锐之锋",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"一把挥击或射弹武器","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"目标武器获得「锋锐」特性（重击威胁范围翻倍）。如果是魔法武器，锋锐效果与之叠加。",
   "material":"两块磨刀石",
   "arcane":None,"divine":{"cleric":3},
   "classes":{"cleric":3}},

  {"id":"lightning_bolt_3","nameEn":"Lightning Bolt","nameZh":"闪电箭",
   "level":3,"school":"塑能系","subschool":"","descriptor":"[电击]",
   "components":"V,S,M","castingTime":"1标准动作","range":"0尺",
   "target":"一道闪电（最长100尺+10尺/环）","duration":"立即","savingThrow":"反射过则减半","spellResist":"是",
   "desc":"你发射一道闪电。闪电对路径上所有生物造成1d6点电击伤害每施法者等级（最高10d6）。如果你在室内或狭窄区域施放，闪电会反射（造成额外50%伤害）。通过反射检定则伤害减半。金属护甲不会给予对闪电的额外防护。",
   "material":"一小块琥珀、水晶或玻璃法器",
   "arcane":{"wizard":3,"sorcerer":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3}},

  {"id":"magic_weapon_3","nameEn":"Magic Weapon","nameZh":"魔法武器",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"每施法者等级一把武器（最多+5把）","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"目标武器获得+1增强加值。每3环额外+1加值（6环+2，9环+3）。魔法武器可以伤害伤害减免需要魔法武器的生物。",
   "arcane":None,"divine":{"cleric":3,"paladin":3},
   "classes":{"cleric":3,"paladin":3}},

  {"id":"protection_from_energy_3","nameEn":"Protection from Energy","nameZh":"防护自能量",
   "level":3,"school":"防护系","subschool":"","descriptor":"",
   "components":"V,S,DF","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"10分钟/环或直到能量吸收总量达到12点/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得对一种能量类型（强酸/寒冷/电击/火焰/音波）的防护。受术者免疫该类型能量造成的伤害，直至吸收总量达到12点伤害每施法者等级（最高60点）。",
   "arcane":{"wizard":3,"sorcerer":3},"divine":{"cleric":3,"druid":3,"ranger":2},
   "classes":{"wizard":3,"sorcerer":3,"cleric":3,"druid":3,"ranger":2}},

  {"id":"suggestion_3","nameEn":"Suggestion","nameZh":"暗示术",
   "level":3,"school":"惑控系","subschool":"强迫","descriptor":"[语言依赖][影响心灵][听觉]",
   "components":"V,M","castingTime":"1标准动作","range":"近距",
   "target":"一个生物","duration":"1小时/环或直到完成任务","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你向目标提出一个合理的建议（不超过1轮可以说完的句子）。目标会尝试完成你建议的行动（如果建议明显有害，目标可以获得新的豁免检定）。暗示术无法强迫目标执行明显有害的行动。",
   "material":"一小块蛇舌草和一块蜂窝",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3,"bard":3}},

  {"id":"summon_monster_3_full","nameEn":"Summon Monster III","nameZh":"召唤怪物Ⅲ",
   "level":3,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,F","castingTime":"1轮","range":"近距",
   "target":"见描述","duration":"1轮/环","savingThrow":"无","spellResist":"否",
   "desc":"召唤一个CR3或更低的生物为你作战。常见选择：1个大地元素、1个中型火焰元素、1个电子版皮克精等。",
   "focus":"一个嵌有宝石的小哨子（价值100gp）",
   "arcane":{"wizard":3,"sorcerer":3,"bard":3},"divine":{"cleric":3},
   "classes":{"wizard":3,"sorcerer":3,"bard":3,"cleric":3}},

  {"id":"water_breathing_3","nameEn":"Water Breathing","nameZh":"水下呼吸",
   "level":3,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,DF","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物（最多每施法者等级一个）","duration":"2小时/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者可以在水下呼吸（如同在空气里一样）。如果法术终止时受术者在水下，他会开始溺水。",
   "arcane":{"wizard":3,"sorcerer":3},"divine":{"cleric":3,"druid":3,"ranger":3},
   "classes":{"wizard":3,"sorcerer":3,"cleric":3,"druid":3,"ranger":3}},

  {"id":"wind_wall_3","nameEn":"Wind Wall","nameZh":"风墙术",
   "level":3,"school":"塑能系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"近距",
   "target":"一道风墙（最长10尺+10尺/环，高10尺）","duration":"1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你创造一道强劲的风墙。风墙可以偏转远程攻击（弓箭、弩箭等）和气体/呼吸法术（如云击、毒云）。风吹向你的选择方向（可以每轮以一个标准动作改变方向）。",
   "material":"一把扇子或风车玩具",
   "arcane":{"wizard":3,"sorcerer":3,"druid":3},"divine":None,
   "classes":{"wizard":3,"sorcerer":3,"druid":3}},
]

fpath = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()

marker = "\n];"
if marker in content:
    insert_pos = content.index(marker)
    entries = ',\n  '.join(json.dumps(sp, ensure_ascii=False, indent=2) for sp in new_spells)
    new_content = content[:insert_pos] + ',\n  ' + entries + content[insert_pos:]
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"成功追加 {len(new_spells)} 个法术")
    print(f"新文件行数：{len(new_content.splitlines())}")
else:
    print("未找到 ]; 标记")
