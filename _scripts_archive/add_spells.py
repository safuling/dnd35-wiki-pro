import json, os

# 新增法术数据（PHB 0~2环 补充）
new_spells = [
  # ===== 0环 补充 =====
  {"id":"touch_of_fatigue","nameEn":"Touch of Fatigue","nameZh":"触碰疲劳",
   "level":0,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一个生物","duration":"1轮/环","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"你需要成功近战接触攻击。命中则目标受到-2体质惩罚（强韧过则无效）。如果法术持续到下一轮，目标在轮末再做一次强韧检定以解除。",
   "arcane":{"wizard":0,"sorcerer":0},"divine":None,
   "classes":{"wizard":0,"sorcerer":0}},

  # ===== 1环 补充 =====
  {"id":"charm_animal","nameEn":"Charm Animal","nameZh":"魅惑动物",
   "level":1,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一只动物","duration":"1小时/环","savingThrow":"意志过则无效","spellResist":"是",
   "desc":"使一只动物视你为值得信赖的伙伴（不会执行明显有害行动）。通过意志检定则无效。伤害可解除魅惑。",
   "arcane":None,"divine":{"druid":1,"ranger":1},
   "classes":{"druid":1,"ranger":1}},

  {"id":"detect_undead","nameEn":"Detect Undead","nameZh":"侦测亡灵",
   "level":1,"school":"预言系","subschool":"","descriptor":"",
   "components":"V,S,DF","castingTime":"1标准动作","range":"60尺",
   "target":"锥形区域或你本人","duration":"专注，最长1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"感知60尺内的亡灵生物。首轮感知是否存在，次轮感知数量，第三轮感知类型（僵尸/骷髅/吸血鬼等）。",
   "arcane":None,"divine":{"cleric":1,"paladin":1},
   "classes":{"cleric":1,"paladin":1}},

  {"id":"endure","nameEn":"Endure","nameZh":"忍受术",
   "level":1,"school":"防护系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得+2耐力加值在所有强韧豁免上，以及+2偏斜加值AC（对抗恐惧效果）。",
   "arcane":None,"divine":{"cleric":1,"paladin":1},
   "classes":{"cleric":1,"paladin":1}},

  {"id":"enlarge_person","nameEn":"Enlarge Person","nameZh":"人体增大",
   "level":1,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"中距",
   "target":"一个人类生物","duration":"1分钟/环","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"目标体型增大一级（如中型→大型），获得+2体质（HP增加）、-2敏捷（AC-2）、近战武器伤害+2。",
   "material":"一小撮铁粉",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"feather_fall","nameEn":"Feather Fall","nameZh":"羽落术",
   "level":1,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"见描述","range":"近距",
   "target":"你以及最多每施法者等级一个盟友（都在范围内）","duration":"1轮/等级","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者缓慢坠落（60尺/轮），不会受坠落伤害。施法时间为即时动作（反应施法）。法术持续1轮/等级。",
   "material":"一小撮鹅毛或一根羽毛",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"jump","nameEn":"Jump","nameZh":"跳跃术",
   "level":1,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者跳跃距离翻倍（长按跳跃距离×3）。受术者在跳跃检定上获得+10加值。",
   "material":"蚱蜢腿",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"mage_armor","nameEn":"Mage Armor","nameZh":"法师护甲",
   "level":1,"school":"防护系","subschool":"","descriptor":"[力场]",
   "components":"V,S,F","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1小时/环","savingThrow":"意志过则无害","spellResist":"否",
   "desc":"受术者获得+4护甲加值（无敏捷上限，无防具训练需求）。如果受术者已有护甲，则取较高者。法师护甲和护甲术不叠加。",
   "focus":"一块皮革",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"mount_spell","nameEn":"Mount","nameZh":"坐骑术",
   "level":1,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,M","castingTime":"1轮","range":"近距",
   "target":"一只坐骑（如马、狼等）","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"召唤一只温和的坐骑为你服务。坐骑出现在你附近。你可以指定坐骑种类（马、驹、狼等）。",
   "material":"一小撮燕麦",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"protection_from_evil","nameEn":"Protection from Evil","nameZh":"防护自邪恶",
   "level":1,"school":"防护系","subschool":"","descriptor":"",
   "components":"V,S,DF","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1分钟/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得：+2偏斜AC对抗指定阵营生物；无法被该阵营生物自然恐吓；该阵营生物无法用触碰攻击命中你（需通过施法者等级检定）；受术者对精神影响的豁免+2对抗该阵营生物。有五个版本：防护自（混乱/邪恶/善良/守序/反制）。",
   "arcane":{"wizard":1,"sorcerer":1},"divine":{"cleric":1,"paladin":1},
   "classes":{"wizard":1,"sorcerer":1,"cleric":1,"paladin":1}},

  {"id":"ray_of_enfeeblement","nameEn":"Ray of Enfeeblement","nameZh":"衰弱射线",
   "level":1,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一道射线","duration":"1小时/环","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"需要进行远程接触攻击。命中则目标受到-1d6力量惩罚（强韧过则无效）。",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"shocking_grasp","nameEn":"Shocking Grasp","nameZh":"电击爪",
   "level":1,"school":"塑能系","subschool":"","descriptor":"[电击]",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一道近战接触攻击","duration":"立即","savingThrow":"无","spellResist":"是",
   "desc":"需要进行近战接触攻击。命中则造成1d6点电击伤害+每施法者等级1点（最高+5）。",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"silent_image","nameEn":"Silent Image","nameZh":"无声幻象",
   "level":1,"school":"幻术系","subschool":"五官幻术","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"长距 (400尺+40尺/环)",
   "target":"一个幻象（5立方尺/环）","duration":"专注","savingThrow":"意志过则识破","spellResist":"否",
   "desc":"创造一个无声音的五官幻象。幻象可以移动（以一个标准动作）。观察者需要意志检定来识破。",
   "material":"一小块羊毛",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"true_strike","nameEn":"True Strike","nameZh":"必中术",
   "level":1,"school":"预言系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"见描述","savingThrow":"无","spellResist":"否",
   "desc":"你的下一次攻击检定获得+20洞察加值。加值在你攻击后或轮末消失。",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  {"id":"unseen_servant","nameEn":"Unseen Servant","nameZh":"无形侍者",
   "level":1,"school":"咒法学","subschool":"召唤","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"近距",
   "target":"一个无形侍者","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"创造一个无形的、漂浮的力场侍者。侍者可以执行简单的体力任务（搬运、开门、清洁等），但无法攻击或施法。侍者力量10，移动速度15尺。",
   "material":"一根线和一块木屑",
   "arcane":{"wizard":1,"sorcerer":1},"divine":None,
   "classes":{"wizard":1,"sorcerer":1}},

  # ===== 2环 补充 =====
  {"id":"alter_self","nameEn":"Alter Self","nameZh":"变化自我",
   "level":2,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"10分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你变化为自己的体型同类生物（如人类变人类，精灵变精灵）。你获得新形态的基本物理属性（性别、年龄、种族特征），但保留自己的属性值、技能、豁免等。无法获得特殊攻击或能力。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"arcane_lock","nameEn":"Arcane Lock","nameZh":"奥术锁",
   "level":2,"school":"防护系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一个门、窗户或物品","duration":"永久","savingThrow":"无","spellResist":"否",
   "desc":"目标被魔法锁住。需要DC30的开启检定或法术辨识DC（11+施法者等级）才能解除。敲击法术可以暂时解锁2d6轮。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"darkvision_spell","nameEn":"Darkvision","nameZh":"黑暗视觉",
   "level":2,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"触碰",
   "target":"触碰的生物","duration":"1小时/环","savingThrow":"意志过则无害","spellResist":"是（无害）",
   "desc":"受术者获得60尺黑暗视觉（可以看穿黑暗和魔法黑暗）。",
   "material":"一小块干鲨鱼肝",
   "arcane":{"wizard":2,"sorcerer":2},"divine":{"druid":2},
   "classes":{"wizard":2,"sorcerer":2,"druid":2}},

  {"id":"false_life","nameEn":"False Life","nameZh":"虚假生命",
   "level":2,"school":"死灵系","subschool":"","descriptor":"[负能量]",
   "components":"V,S","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"你获得1d10点临时生命值（临时HP）。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"ghoul_touch","nameEn":"Ghoul Touch","nameZh":"食尸鬼之触",
   "level":2,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一个生物","duration":"1d6+2轮","savingThrow":"强韧过则无效","spellResist":"是",
   "desc":"需要进行近战接触攻击。命中则目标瘫痪（强韧过则无效）。瘫痪生物每轮结束时可以做强韧检定以恢复。周围10尺内的生物（不包括你）如果看到该目标会感到恶心（恶心效果）。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"knock","nameEn":"Knock","nameZh":"开锁术",
   "level":2,"school":"咒法学","subschool":"","descriptor":"",
   "components":"V","castingTime":"1标准动作","range":"中距",
   "target":"一个门、箱子或锁","duration":"立即","savingThrow":"无","spellResist":"否",
   "desc":"自动打开一个被锁住或关上的门/箱子。可以解除奥术锁（需要进行施法者等级检定对抗DC）。也可以解除非魔法锁（如普通挂锁）。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"levitate","nameEn":"Levitate","nameZh":"漂浮术",
   "level":2,"school":"变化系","subschool":"","descriptor":"",
   "components":"V,S,F","castingTime":"1标准动作","range":"中距",
   "target":"你或最多每施法者等级100磅的物品","duration":"1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你（或目标物品）缓慢上升或下降（最高20尺/轮）。你可以水平移动（伴随风力，最高20尺/轮）。如果你漂浮时受到攻击，你无法并行攻击。",
   "focus":"一小块皮革或一块铁片（拴在绳上）",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"minor_image","nameEn":"Minor Image","nameZh":"小幅幻象",
   "level":2,"school":"幻术系","subschool":"五官幻术","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"长距",
   "target":"一个幻象（5立方尺/环）","duration":"专注","savingThrow":"意志过则识破","spellResist":"否",
   "desc":"创造一幅有声、有气味、有温度的幻象。观察者需要意志检定来识破。你可以使幻象移动（以一个标准动作）。小幅幻象不需要持续专注（但移动需要专注）。",
   "material":"一小块羊毛",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"rope_trick","nameEn":"Rope Trick","nameZh":"绳索戏法",
   "level":2,"school":"咒法学","subschool":"创造","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"触碰",
   "target":"一条绳索（最高60尺）","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"你使一条绳索竖立并向其顶端打开一个异次元入口。最多可以躲藏8个中型生物。入口从外面看不见。你可以拉绳索使入口关闭（之后再拉重新打开）。法术终止时，入口内的所有生物被弹出。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},

  {"id":"see_invisibility","nameEn":"See Invisibility","nameZh":"识破隐形",
   "level":2,"school":"预言系","subschool":"","descriptor":"",
   "components":"V,S,M","castingTime":"1标准动作","range":"个人",
   "target":"你自己","duration":"1小时/环","savingThrow":"无","spellResist":"否",
   "desc":"你可以看穿隐形和移位术。可以看到60尺内的隐形生物（如同正常视觉）。识破隐形不会让你看穿幻术或黑暗。",
   "material":"一撮龙谭粉或许愿尘",
   "arcane":{"wizard":2,"sorcerer":2},"divine":{"cleric":2,"druid":2},
   "classes":{"wizard":2,"sorcerer":2,"cleric":2,"druid":2}},

  {"id":"spectral_hand","nameEn":"Spectral Hand","nameZh":"幽灵之手",
   "level":2,"school":"死灵系","subschool":"","descriptor":"",
   "components":"V,S","castingTime":"1标准动作","range":"近距",
   "target":"一只幽灵手","duration":"1分钟/环","savingThrow":"无","spellResist":"否",
   "desc":"你创造一只幽灵手。你可以通过这只手施展需要接触的法术（远程接触攻击，距离同法术射程）。幽灵手有50%失手几率（失手则法术浪费）。",
   "arcane":{"wizard":2,"sorcerer":2},"divine":None,
   "classes":{"wizard":2,"sorcerer":2}},
]

fpath = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"
with open(fpath, 'r', encoding='utf-8') as f:
    content = f.read()

# 找到 ]; 并插入新法术（在 ]; 之前加逗号+新内容）
marker = "\n];"
if marker in content:
    insert_pos = content.index(marker)
    entries = ',\n'.join(json.dumps(sp, ensure_ascii=False, indent=2) for sp in new_spells)
    new_content = content[:insert_pos] + ',\n' + entries + content[insert_pos:]
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"成功追加 {len(new_spells)} 个法术")
    print(f"新文件行数：{len(new_content.splitlines())}")
else:
    print("未找到数组结束标记，请手动检查")
