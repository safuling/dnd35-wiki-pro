import json, os

# 第6批：大量补充，冲击300+总法术
new_spells = [

  # ===== 0环 再补全 =====
  {"id":"disrupt_undead_0","nameEn":"Disrupt Undead","nameZh":"击退亡灵",
   "level":0,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一个亡灵生物","duration":"立即","savingThrow":"无","spellResist":"是",
   "desc":"你对一个亡灵生物发射一道负能量波。对HD5或更少的亡灵造成1d6点伤害。对HD5以上的亡灵无效。",
   "arcane":{"wizard":0,"sorcerer":0},"divine":None,
   "classes":{"wizard":0,"sorcerer":0}},

  # ===== 4环 补全 =====
  {"id":"animate_dead_4","nameEn":"Animate Dead","nameZh":"操控死尸",
   "level":4,"school":"死灵系","subschool":"","descriptor":"[邪恶]",
   "components":"V,S,M","castingTime":"1轮","range":"近距",
   "target":"最多2HD/环的不死生物","duration":"专注 或 1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你将尸体或骸骨复活为僵尸或骷髅为你服务。你可以控制的不死生物HD总值最多2HD/环。牧师可以控制任意数量的不死生物（无HD上限）。通过魅惑不死生物法术可以增强控制。⚠️ 邪恶法术。",
   "material":"一撮骨灰（价值25gp）",
   "arcane":{"wizard":4,"sorcerer":4},"divine":{"cleric":4},
   "classes":{"wizard":4,"sorcerer":4,"cleric":4}},

  {"id":"confusion_4","nameEn":"Confusion","nameZh":"困惑术",
   "level":4,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S,M","castingTime":"1标准动作","range":"中距",
   "target":"所有在范围内的生物（最多2HD/环）","duration":"1轮/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"范围内所有生物陷入困惑（每轮随机行动：01-10=攻击最近生物；11-20=失手；21-50=全轮防御；51-70=正常行动；71-100=错误行动）。通过意志检定则不受影响。",
   "material":"三块核桃壳",
   "arcane":{"wizard":4,"sorcerer":4},"divine":None,
   "classes":{"wizard":4,"sorcerer":4}},

  {"id":"contagion_4","nameEn":"Contagion","nameZh":"传染术",
   "level":4,"school":"死灵系","subschool":"","descriptor":"[疾病][影响心灵]",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一个生物","duration":"立即","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"你需要进行远程接触攻击。命中则目标感染一种疾病（你选择）：腐热症、失水症、倦怠症、震颠症或红热症。疾病通常在1d4天后发作。",
   "arcane":{"wizard":4,"sorcerer":4},"divine":{"cleric":4},
   "classes":{"wizard":4,"sorcerer":4,"cleric":4}},

  {"id":"crushing_despair_4","nameEn":"Crushing Despair","nameZh":"粉碎绝望",
   "level":4,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵][语言依赖][听觉]",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"最多一个生物/环","duration":"1轮/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你需要成功吹奏音管（需通过演奏检定）。受术者陷入绝望，攻击检定-2、伤害-2、所有技能-2。通过意志检定则不受影响。",
   "arcane":{"bard":4},"divine":None,
   "classes":{"bard":4}},

  {"id":"lesser_planar_binding_4","nameEn":"Lesser Planar Binding","nameZh":"次级异界束缚",
   "level":4,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,M","castingTime":"1轮","range":"近距",
   "target":"一个异界生物","duration":"见描述","savingThrow":"无","spellResist":"否",
   "desc":"你召唤一个异界生物并试图与它谈判（需要魅力检定对抗DC=10+HD+异界生物魅力调整值）。成功则生物为你服务（最多1天/环）。失败则生物返回原位。消耗1000XP可以强制生物服务。",
   "material":"价值500gp的贡品（依异界生物喜好）",
   "arcane":{"wizard":4,"sorcerer":4},"divine":None,
   "classes":{"wizard":4,"sorcerer":4}},

  # ===== 5环 补全 =====
  {"id":"awaken","nameEn":"Awaken","nameZh":"唤醒术",
   "level":5,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,DF","castingTime":"24小时","range":"触碰",
   "target":"一棵树木或一只动物","duration":"永久","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你唤醒一棵树木或一只动物，赋予其智力（INT=3d6）。被唤醒的生物获得语言能力和+3d6临时生命值。动物获得2HD，树木获得4HD。被唤醒的生物对你的态度为「友善」。",
   "arcane":None,"divine":{"druid":5},
   "classes":{"druid":5}},

  {"id":"commune","nameEn":"Commune","nameZh":"通神术",
   "level":5,"school":"预言系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"10分钟","range":"个人",
   "target":"你自己","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"你与你的神祇直接交谈并获得答案。你可以问最多1个问题每施法者等级。神祇回答「是」「否」或「不知」。每天只能施展一次。",
   "material":"价值1000gp的焚香和贡品",
   "arcane":None,"divine":{"cleric":5},
   "classes":{"cleric":5}},

  {"id":"commune_with_nature","nameEn":"Commune with Nature","nameZh":"与自然交谈",
   "level":5,"school":"预言系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"10分钟","range":"个人",
   "target":"你自己","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"你与大自然交谈并获得答案。你可以问最多1个问题每施法者等级。自然回答「是」「否」或「不知」。每天只能施展一次。",
   "arcane":None,"divine":{"druid":5},
   "classes":{"druid":5}},

  {"id":"dispel_law","nameEn":"Dispel Law","nameZh":"解除守序",
   "level":5,"school":"防护系","subschool":"","descriptor":"[混乱]",
   "components":"V,S","castingTime":"1标准动作","range":"中距",
   "target":"一个生物","duration":"立即","savingThrow":"无","spellResist":"是",
   "desc":"如同解除魔法，但专门用于解除守序生物施展的法术。对守序生物造成1d6点伤害每施法者等级（最高10d6）。",
   "arcane":None,"divine":{"cleric":5},
   "classes":{"cleric":5}},

  {"id":"dream","nameEn":"Dream","nameZh":"梦境术",
   "level":5,"school":"幻术系","subschool":"梦境幻术","descriptor":"[影响心灵][语言依赖][听觉]",
   "components":"V,S","castingTime":"1分钟","range":"无限制",
   "target":"一个生物","duration":"立即","savingThrow":"无","spellResist":"是",
   "desc":"你向远方一个熟睡的生物传递信息或形象。你可以让目标做特定的梦境。如果目标通过意志检定，则不受影响。你也可以利用梦境术询问信息（目标可以回答）。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"false_vision_5","nameEn":"False Vision","nameZh":"错误视觉",
   "level":5,"school":"幻术系","subschool":"式技幻术","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"一个地点或生物","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"在目标区域创造视觉假象。任何使用预言系法术侦测目标区域的人会看到假象（通过意志检定则看穿）。",
   "material":"价值100gp的玉石粉末",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"feeblemind_5","nameEn":"Feeblemind","nameZh":"削弱心智",
   "level":5,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S","castingTime":"1标准动作","range":"中距",
   "target":"一个生物","duration":"见描述","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"目标 intellect 降到1（如同失智）。受影响生物无法进行任何需要智力的行动。通过意志检定则不受影响。可以通过移除诅咒或有限祈愿解除。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"geas_quest_5","nameEn":"Geas/Quest","nameZh":"重责/探索",
   "level":5,"school":"惑控系","subschool":"强迫","descriptor":"[语言依赖][影响心灵][听觉]",
   "components":"V,S,DF","castingTime":"1轮","range":"近距",
   "target":"一个生物","duration":"见描述","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你命令目标完成一个任务（不能明显有害）。目标必须通过意志检定否则被强迫完成任务。如果任务明显有害，目标获得新的豁免检定。目标的HD决定法术持续时间（HD12以下永久，HD12+ 1天/环）。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":{"cleric":5,"druid":5},
   "classes":{"wizard":5,"sorcerer":5,"cleric":5,"druid":5}},

  {"id":"heroes_feast","nameEn":"Heroes' Feast","nameZh":"英雄宴",
   "level":5,"school":"咒法学","subschool":"治愈","descriptor":"[正能量]",
   "components":"V,S,DF","castingTime":"1轮","range":"触碰",
   "target":"一个生物以及每施法者等级一个盟友","duration":"1小时/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者治愈全部伤害并恢复健康值全满。此外，受术者在法术持续期间对恐惧免疫，并且在攻击和伤害上获得+2士气加值。",
   "arcane":None,"divine":{"cleric":5,"druid":5},
   "classes":{"cleric":5,"druid":5}},

  {"id":"mind_fog_5","nameEn":"Mind Fog","nameZh":"心灵迷雾",
   "level":5,"school":"幻术系","subschool":"五官幻术","descriptor":"[影响心灵]",
   "components":"V,S","castingTime":"1标准动作","range":"中距",
   "target":"半径20尺散布","duration":"1轮/环","savingThrow":"无","spellResist":"否",
   "desc":"制造一片浓密的心灵迷雾。雾内所有生物受到-10警觉检定，潜行检定DC+10。法术侦测也受阻碍。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"nightmare","nameEn":"Nightmare","nameZh":"梦魇术",
   "level":5,"school":"幻术系","subschool":"梦境幻术","descriptor":"[影响心灵][邪恶]",
   "components":"V,S","castingTime":"1轮","range":"无限制",
   "target":"一个熟睡的生物","duration":"立即","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你向远方一个熟睡的生物发送梦魇。目标受到1d10点属性伤害（魅力），并且下一天疲惫（如同没睡）。如果目标通过意志检定，则不受影响。梦魇术可以杀死目标（属性降到0）。⚠️ 邪恶法术。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"prying_eyes_5","nameEn":"Prying Eyes","nameZh":"窥视之眼",
   "level":5,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,M","castingTime":"1轮","range":"近距",
   "target":"至多一打窥视之眼","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"你创造至多12只魔法眼球。每只眼球有30尺黑暗视觉，可以看穿隐形。你可以通过眼球看（使用你的正常视觉）。眼球移动速度30尺/轮。眼球有10HP，AC 18，被攻击则消失。",
   "material":"一撮猫毛",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"ransack","nameEn":"Ransack","nameZh":"洗劫术",
   "level":5,"school":"塑能系","subschool":"","descriptor":"[音波]",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一个容器或房间","duration":"1轮/环","savingThrow":"强韧过则无效","spellResist":"否",
   "desc":"你制造一阵狂暴的力场冲击波，将目标区域内的所有物品和装备震飞。区域内所有生物还需要通过强韧检定否则耳聋1d6轮。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"scrying","nameEn":"Scrying","nameZh":"远观术",
   "level":5,"school":"预言系","subschool":"","descriptor":"[影响心灵]",
   "components":"V,S,M","castingTime":"1小时","range":"见描述",
   "target":"一个生物或地点","duration":"1分钟/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"你在远处观察一个生物或地点（如同你在现场一样）。目标可以通过意志检定摆脱观察。你需要有目标的身体部分（头发、血液等）才能施展。",
   "material":"价值1000gp的水晶球、银镜或圣水盆",
   "arcane":{"wizard":5,"sorcerer":5},"divine":{"cleric":5,"druid":5},
   "classes":{"wizard":5,"sorcerer":5,"cleric":5,"druid":5}},

  {"id":"sending","nameEn":"Sending","nameZh":"传讯术",
   "level":5,"school":"咒法学","subschool":"传送","descriptor":"[语言依赖][听觉]",
   "components":"V,S","castingTime":"1标准动作","range":"无限制",
   "target":"一个生物","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"你向远方一个生物发送一条简短信息（最多25字）。目标可以立即回复（同等长度）。信息可以穿越位面（但跨位面有50%失败几率）。",
   "arcane":{"wizard":5,"sorcerer":5},"divine":{"cleric":5,"druid":5},
   "classes":{"wizard":5,"sorcerer":5,"cleric":5,"druid":5}},

  {"id":"stone_skin","nameEn":"Stone Skin","nameZh":"石肤术",
   "level":5,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"10分钟/环 或 直到被穿透","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者的皮肤变得如石头一般坚硬。受术者获得伤害减免10/魔法（每次受到的物理伤害减少10点，最低1点）。法术持续直到吸收总量达到10点伤害每施法者等级（最高150点）。",
   "material":"一块花岗岩",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},

  {"id":"summon_monster_5_full","nameEn":"Summon Monster V","nameZh":"召唤怪物Ⅴ",
   "level":5,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,F","castingTime":"1轮","range":"近距",
   "target":"见描述","duration":"1轮/环","savingThrow":"无","spellResist":"否",
   "desc":"你召唤一个CR5或更低的生物为你作战。常见选择：1个石元素、1个大型土元素、1个狂战幽灵等。",
   "focus":"一个嵌有宝石的小哨子（价值100gp）",
   "arcane":{"wizard":5,"sorcerer":5,"bard":5},"divine":{"cleric":5},
   "classes":{"wizard":5,"sorcerer":5,"bard":5,"cleric":5}},

  {"id":"transmute_mud_to_rock","nameEn":"Transmute Mud to Rock","nameZh":"泥岩互变（泥→岩）",
   "level":5,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M,DF","castingTime":"1标准动作","range":"中距",
   "target":"两个10尺散布（任选）","duration":"永久","savingThrow":"无","spellResist":"否",
   "desc":"将泥沼变为岩石（泥→岩）。泥沼区域变为困难地形变为不可通行。岩→泥版本（岩石变泥沼）让区域变为困难地形。",
   "material":"泥土和一块花岗岩",
   "arcane":{"wizard":5,"sorcerer":5},"divine":{"druid":5},
   "classes":{"wizard":5,"sorcerer":5,"druid":5}},

  {"id":"unhallow","nameEn":"Unhallow","nameZh":"污秽之地",
   "level":5,"school":"咒法学","subschool":"创造","descriptor":"[邪恶]",
   "components":"V,S,M,DF","castingTime":"24小时","range":"触碰",
   "target":"以触碰点为中心，半径40尺散布","duration":"永久","savingThrow":"见描述","spellResist":"否",
   "desc":"你将一片区域变为污秽（邪恶能量充沛）。污秽之地内的邪恶生物获得+1偏斜AC和+1强韧豁免。在污秽之地上施展神术（邪恶属性）的施法者等级+1。⚠️ 邪恶法术。",
   "material":"价值1000gp的祭坛装饰",
   "arcane":None,"divine":{"cleric":5},
   "classes":{"cleric":5}},

  {"id":"wall_of_iron","nameEn":"Wall of Iron","nameZh":"铁墙术",
   "level":5,"school":"塑能系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"中距",
   "target":"一道铁墙（最厚10尺+5尺/环，面积100平方尺/环）","duration":"永久","savingThrow":"无","spellResist":"否",
   "desc":"你创造一道铁墙。墙可以是垂直、水平或任何形状。墙的厚度由你决定（最厚10尺+5尺/环）。墙的硬度10，HP厚度每寸30点。",
   "material":"一小块铁片或铁钉",
   "arcane":{"wizard":5,"sorcerer":5},"divine":None,
   "classes":{"wizard":5,"sorcerer":5}},
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
