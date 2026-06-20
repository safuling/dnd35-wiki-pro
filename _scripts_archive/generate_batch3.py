#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成第三批法术冲突标注数据（15个）
输出格式完美的JS代码，手动粘贴到 spells-conflicts.js
"""

conflicts_batch3 = {
    "burning_hands": [
        {
            "point": "燃烧之手的扇形面积与反射",
            "phbRule": "创造15尺锥形火焰（1d4火伤害+强韧半数）",
            "controversy": "锥形是否填满整个15尺（还是仅边缘）；反射失败是否全伤害",
            "suggestion": "锥形填满15尺；反射失败受全伤害（无半数）",
            "source": "PHB p.207"
        }
    ],
    
    "entangle": [
        {
            "point": "纠缠术的地面要求与移除",
            "phbRule": "使20尺 spread 内地面植被缠绕（movement减半）",
            "controversy": "无植被地面是否无效；火焰能否烧毁植被（解除纠缠）",
            "suggestion": "需植被地面；火焰可烧毁（HP 10/5尺立方）",
            "source": "PHB p.227"
        }
    ],
    
    "sound_burst": [
        {
            "point": "音爆术的眩晕持续时间",
            "phbRule": "20尺爆发音波（1d8声波+眩晕1轮）",
            "controversy": "眩晕是否影响动作（整轮无法行动）；沉默/耳聋是否免疫",
            "suggestion": "眩晕整轮无法行动；耳聋免疫（需听到声音）",
            "source": "PHB p.281"
        }
    ],
    
    "summon_monster_i": [
        {
            "point": "召唤怪物I的生物选择",
            "phbRule": "召唤1个CR 1/2或1/3生物（列表任选）",
            "controversy": "能否召唤多个弱小生物（如4只CR 1/4）；生物是否立即行动",
            "suggestion": "仅1个生物；生物立即行动（需命令）",
            "source": "SRD Summon Monster"
        }
    ],
    
    # ========== 2级法术 ==========
    
    "acid_arrow": [
        {
            "point": "酸箭的持续伤害",
            "phbRule": "射线造成2d4酸伤害+1d4下一轮",
            "controversy": "持续伤害是否每轮强韧减半；酸伤是否影响装备（护甲/武器）",
            "suggestion": "持续伤害不减半；不影响装备（仅HP）",
            "source": "PHB p.196"
        }
    ],
    
    "bull_strength": [
        {
            "point": "公牛力量与猫之优雅的叠加",
            "phbRule": "增强 Strength +4（临时属性）",
            "controversy": "同类型增强是否叠加（如斗篷+2+公牛+4=+6？）；是否受Antimagic Field影响",
            "suggestion": "不叠加同类型；受AMF影响（属魔法增强）",
            "source": "PHB p.206"
        }
    ],
    
    "delay_poison": [
        {
            "point": "延时毒药对魔法毒药的效果",
            "phbRule": "毒素/疾病延迟1小时/环（之后生效）",
            "controversy": "能否延迟魔法毒药（如Malyass Root Paste）；延迟期间是否可解毒",
            "suggestion": "可延迟魔法毒药；延迟期间可解毒（永久解除）",
            "source": "PHB p.218"
        }
    ],
    
    "misdirection": [
        {
            "point": "错误指向的侦测误导",
            "phbRule": "使侦测法术指向另一目标",
            "controversy": "能否误导「侦测思想/侦测谎言」；误导是否需持续专注",
            "suggestion": "仅误导探测法术（含侦测思想）；不须专注（持续）",
            "source": "PHB p.253"
        }
    ],
    
    "spider_climb": [
        {
            "point": "蜘蛛攀爬的表面积要求",
            "phbRule": "获得攀爬速度20尺（墙/天花板）",
            "controversy": "光滑表面（冰/玻璃）是否影响；携带重量是否降低速度",
            "suggestion": "不受影响（黏附任何表面）；重量不影响（魔法效应）",
            "source": "PHB p.283"
        }
    ],
    
    # ========== 3级法术 ==========
    
    "suggestion": [
        {
            "point": "暗示术的命令合理性",
            "phbRule": "命令目标执行合理行动（意志negate）",
            "controversy": "「合理」定义（DM裁量）；能否命令自毁/跳崖",
            "suggestion": "DM判断合理性；不可命令明显自毁（除非魔法控制）",
            "source": "PHB p.286"
        }
    ],
    
    "displacement": [
        {
            "point": "位移术的50% miss chance机制",
            "phbRule": "攻击者50% miss（看似在别处）",
            "controversy": "范围攻击是否受50% miss；精准攻击（如Sniping）是否不受影响",
            "suggestion": "范围攻击不受miss；精准攻击不受影响（需看到真身）",
            "source": "PHB p.222"
        }
    ],
    
    # ========== 4级法术 ==========
    
    "confusion": [
        {
            "point": "困惑术的意志豁免与持续",
            "phbRule": "目标困惑（1d10动作表；意志negate）",
            "controversy": "困惑是否影响法术施展（随机法术？）；每日一次新豁免",
            "suggestion": "困惑影响所有动作（含施法）；每日一次新豁免（DC同）",
            "source": "PHB p.213"
        }
    ],
    
    "fear": [
        {
            "point": "恐惧术的逃遁机制",
            "phbRule": "目标恐慌逃遁（意志negate）",
            "controversy": "逃遁是否可控制（如朝安全方向）；恐慌期间是否可施法（需concentration DC）",
            "suggestion": "不可控制（随机方向）；恐慌可施法（需DC 20 concentration）",
            "source": "PHB p.229"
        }
    ],
    
    "stone_skin": [
        {
            "point": "石肤术的伤害吸收上限",
            "phbRule": "吸收钝击/穿刺/挥砍伤害（10点/环）",
            "controversy": "吸收是否包括魔法武器；吸收上限是否受修复（如Wall of Stone）",
            "suggestion": "包括魔法武器；不可修复（一次性吸收）",
            "source": "PHB p.285"
        }
    ],
    
    # ========== 5级法术 ==========
    
    "cloudkill": [
        {
            "point": "死云术的HD优先击杀",
            "phbRule": "20尺 spread 毒云（HD最低者先受影响）",
            "controversy": "HD相同如何决定；毒云是否影响虚体/不死生物",
            "suggestion": "HD相同则随机；不影响虚体/不死（需呼吸）",
            "source": "PHB p.212"
        }
    ],
    
    "hold_monster": [
        {
            "point": "定身怪物的类型限制",
            "phbRule": "定身1个生物（强韧negate；每轮新豁免）",
            "controversy": "是否影响构装/元素/虚体；定身是否可施法（需concentration）",
            "suggestion": "影响所有生物（含构装/元素）；定身可施法（需DC 20）",
            "source": "PHB p.241"
        }
    ]
}

# 生成JS代码
print("  // ========== 核心争议法术（第三批） ==========\n")

for spell_id, conflicts in conflicts_batch3.items():
    print(f'  "{spell_id}": [')
    for i, c in enumerate(conflicts):
        comma = ',' if i < len(conflicts) - 1 else ''
        print(f'    {{')
        print(f'      "point": "{c["point"]}",')
        print(f'      "phbRule": "{c["phbRule"]}",')
        print(f'      "controversy": "{c["controversy"]}",')
        print(f'      "suggestion": "{c["suggestion"]}",')
        print(f'      "source": "{c["source"]}"')
        print(f'    }}{comma}')
    print(f'  ],')
    print()

print("\n将以上代码复制到 spells-conflicts.js 的 `};` 之前（记得加逗号）")
