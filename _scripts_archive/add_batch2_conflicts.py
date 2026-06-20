#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
给 spells-conflicts.js 追加更多法术的冲突标注
在第二批数据前插入（在最后一个法术和 }; 之间）
"""

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-conflicts.js"

# 第二批法术冲突数据（30个）
new_conflicts = r"""
  
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
      "suggestion": "法师可尝试直接使用卷轴（奥术术士USUALLY可以）；阅读魔法确保成功",
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
      "suggestion": "对抗所有邪恶生物；召唤生物受保护（DUCTION）",
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
      "phbRule": "开普通锁（OPEN LOCK +10）；对魔法锁（KNOCK对抗LOCK DC）",
      "controversy": "能否打开「LOCKED」法术（如ARCANE LOCK）；是否破坏锁（永久性开启）",
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
  
  "locate_object": [
    {
      "point": "定位物品对已知物品的描述要求",
      "phbRule": "找到特定物品（需看过/知道）",
      "controversy": "「知道」是否需精确描述（名称/外观）；能否定位「我的钥匙」（无精确描述）",
      "suggestion": "需精确描述（名称或外观）；DM可允许模糊描述（有误差）",
      "source": "PHB p.248"
    }
  ],
  
  // ========== 2级法术 ==========
  
  "resist_energy": [
    {
      "point": "抵抗能量与防护自能量的区别",
      "phbRule": "免疫指定能量类型（10点/环）",
      "controversy": "抵抗能量是否STACK防护自能量；能量SUBTYPE伤害（ACID/COLD/FIRE）是否都受保护",
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
  
  "owl_wisdom": [
    {
      "point": "猫头鹰智慧的属性增强类型",
      "phbRule": "增强 Wisdom +4（含技能/豁免）",
      "controversy": "增强是否有TYPE（ENHANCEMENT）；是否受ANTIMAGIC FIELD影响",
      "suggestion": "属ENHANCEMENT效应；受AMF影响；二环后可用PERMANENCY",
      "source": "PHB p.259"
    }
  ],
  
  "cat_grace": [
    {
      "point": "猫之优雅对技能的影响",
      "phbRule": "增强 Dexterity +4（含AC/反射/技能）",
      "controversy": "增强是否影响远程攻击加值（DEX组件）；是否影响先攻（DEX MOD）",
      "suggestion": "影响所有DEX相关数值；先攻/反射/AC/远程攻击都受影响",
      "source": "PHB p.208"
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
      "controversy": "士气加值是否STACK其他士气效应（如BARDIC MUSIC）；是否抵抗恐惧",
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
      "controversy": "负等级是否立即生效（ -1 HD/攻击/豁免）；恢复方式（REST/RESTORATION）",
      "suggestion": "立即生效；24小时后可强韧恢复；RESTORATION永久恢复",
      "source": "PHB p.226"
    }
  ],
  
  "stoneshape": [
    {
      "point": "塑石术对石材的塑形精度",
      "phbRule": "塑形石头（最大10立方尺/环）",
      "controversy": "能否造复杂形状（门/锁/机械）；是否影响石材结构强度",
      "suggestion": "可造门/窗/阶梯；结构强度不变（需CRAFT检查）",
      "source": "PHB p.285"
    }
  ],
  
  // ========== 5级法术 ==========
  
  "dominate_person": [
    {
      "point": "支配人类的非消费操控",
      "phbRule": "支配目标（非消费意志力；每日1意志反抗）",
      "controversy": "能否命令自毁/违反本性；支配期间是否共享感官（听得见对话？）",
      "suggestion": "可命令自毁（需WILL DC）；不共享感官（需TELEPATHY）",
      "source": "PHB p.223"
    }
  ],
  
  "mind_fog": [
    {
      "point": "心神雾的智力属性影响",
      "phbRule": "云雾内生物Int降为1（ -4意志）",
      "controversy": "Int=1是否影响专长/法术（需INT prerequisites）；是否影响记忆",
      "suggestion": "失去需INT的专长/法术；记忆不受影响（LONG-TERM）",
      "source": "PHB p.253"
    }
  ],
  
  "overland_flight": [
    {
      "point": "陆地飞行与飞行术的区别",
      "phbRule": "飞行速度40尺（完美机动性；1小时/环）",
      "controversy": "是否需专注维持；被击中/失意识是否坠落",
      "suggestion": "不须专注；失意识坠落（除非PERMANENT）",
      "source": "PHB p.259"
    }
  ],
  
  "wall_of_force": [
    {
      "point": "力墙术的不可摧毁性",
      "phbRule": "创造力场墙（不可摧毁；无法穿透）",
      "controversy": "DISINTEGRATE是否破坏力墙；ANTIMAGIC FIELD是否抑制力墙",
      "suggestion": "DISINTEGRATE破坏力墙；AMF抑制（墙消失）",
      "source": "PHB p.298"
    }
  ],
  
  // ========== 6级法术 ==========
  
  "disintegrate": [
    {
      "point": "解离术的伤害类型与复活",
      "phbRule": "射线造成2d6×10伤害（强韧negate）",
      "controversy": "解离死亡是否可用RESTORATION/RAISE DEAD复活；仅TRUE RESURRECTION/REINCARNATE",
      "suggestion": "解离死亡需TRUE RESURRECTION（RESTORATION仅防等级吸取）",
      "source": "PHB p.221"
    }
  ],
  
  "legend_lore": [
    {
      "point": "传奇学识的获取信息深度",
      "phbRule": "获取传说/物品/地点的信息（需1d10×10分钟）",
      "controversy": "「知道名字」是否足够（需看过高/接触过？）；能否获取秘密（如真名/弱点）",
      "suggestion": "需接触/研究过；DM控制信息深度（平衡性）",
      "source": "PHB p.247"
    }
  ],
  
  "true_seeing": [
    {
      "point": "真知术的视觉穿透能力",
      "phbRule": "看破幻象/隐形/位移/投影/虚体（120尺）",
      "controversy": "是否看破「改变形态」（如POLYMORPH/SHAPECANGER）；对灵体是否可见",
      "suggestion": "看破所有视觉欺骗；灵体需SEE INVISIBILITY+ TRUE SEEING",
      "source": "PHB p.296"
    }
  ],
  
  // ========== 7级法术 ==========
  
  "greater_teleport": [
    {
      "point": "高等传送的误差与限制",
      "phbRule": "精确传送（无误差；可跨位面）",
      "controversy": "是否需看过目的地（还是知道坐标即可）；传送入固体是否自动失败",
      "suggestion": "看过/知道坐标均可；自动定位最近空位（不伤害）",
      "source": "PHB p.252"
    }
  ],
  
  "spell_turning": [
    {
      "point": "法术反转的反射机制",
      "phbRule": "反射1d4+6法术（包括已解消法术）",
      "controversy": "反射法术是否需新豁免（原施法者过豁免）；区域法术是否反射",
      "suggestion": "反射法术需原豁免DC；区域法术不反射（仅个人/目标法术）",
      "source": "PHB p.283"
    }
  ],
  
  "reverse_gravity": [
    {
      "point": "反向重力的坠落伤害",
      "phbRule": "反转重力（1轮/环；坠落伤害同正常）",
      "controversy": "反转期间施法是否需要CON检查（掉落中施法）；飞行生物是否不受影响",
      "suggestion": "掉落中施法需CON DC15；飞行生物不受影响（除非地面反转）",
      "source": "PHB p.274"
    }
  ],
  
  // ========== 8级法术 ==========
  
  "maze": [
    {
      "point": "迷宫的脱困DC与限制",
      "phbRule": "目标陷入迷宫（DC20 INT脱困；1d10+2轮）",
      "controversy": "脱困后是否返回原位置；能否用「任意门/传送」直接脱困",
      "suggestion": "脱困返回原位置；任意门可脱困（MAZE非GLOBALLY BINDING）",
      "source": "PHB p.249"
    }
  ],
  
  "moment_of_prescience": [
    {
      "point": "先知时刻的使用时机",
      "phbRule": "获得+1d20洞察加值（单次攻击/豁免/检定）",
      "controversy": "是否可多次使用（每个CRITICAL MOMENT）；是否STACK其他洞察加值",
      "suggestion": "单次使用；不STACK同类洞察（取最高）",
      "source": "PHB p.255"
    }
  ],
  
  "power_word_stun": [
    {
      "point": "震撼言语的HP阈值",
      "phbRule": "HP≤150则震晕（4d4轮）；151-300则震骇（2d4轮）",
      "controversy": "临时HP是否计入（如AID/MASS HEAL）；伤害后阈值变化是否实时生效",
      "suggestion": "临时HP不计入（仅当前HP）；实时生效（伤害后可能降阈值）",
      "source": "PHB p.264"
    }
  ],
  
  // ========== 9级法术 ==========
  
  "meteor_swarm": [
    {
      "point": "流星雨的反射检定与伤害",
      "phbRule": "4个爆炸各造成2d6×10火+强韧半数",
      "controversy": "每个爆炸是否独立反射（4次检定）；能否用于解除力墙/石墙",
      "suggestion": "每个爆炸独立反射；可破坏非魔法结构（HP 10/寸）",
      "source": "PHB p.253"
    }
  ],
  
  "time_stop": [
    {
      "point": "时间停止的持续时间与限制",
      "phbRule": "时间停止（1d4+1动作；不可影响其他生物）",
      "controversy": "停止期间能否施法（法术在时间恢复后生效）；能否移动/攻击（无目标）",
      "suggestion": "可施法（时间恢复后生效）；可移动（但无法攻击）",
      "source": "PHB p.295"
    }
  ],
  
  "imprisonment": [
    {
      "point": "监禁术的解除方式",
      "phbRule": "囚禁目标（仅WISH/FREEDOM/MIRACLE解除）",
      "controversy": "「永久监禁」是否可追踪（LEGEND LORE/LOCATE CREATURE）；异界监禁是否可PLANESHIFT逃脱",
      "suggestion": "可追踪（需LEGEND LORE）；异界监禁不可PLANESHIFT（单独位面）",
      "source": "PHB p.245"
    }
  ]
  
};
"""

def main():
    with open(FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到 `};` 的位置
    idx = content.rfind('};')
    if idx == -1:
        print("[ERROR] 找不到 };")
        return
    
    # 在 `};` 之前插入新数据（注意加逗号）  
    # 需要找到最后一个法术的结束 ] 然后加逗号
    # 简化：直接在 }; 前插入（文件末尾应该有逗号和换行）
    
    # 检查 }; 前是否有逗号
    before = content[:idx].rstrip()
    if not before.endswith(','):
        # 需要加逗号
        new_content = content[:idx].rstrip() + ',' + new_conflicts + '\n' + content[idx:]
    else:
        # 已有逗号，直接插入
        new_content = content[:idx] + new_conflicts + '\n' + content[idx:]
    
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("[OK] 已追加30个法术的冲突标注")
    print("[INFO] 请运行 node -c 验证语法")

if __name__ == '__main__':
    main()
