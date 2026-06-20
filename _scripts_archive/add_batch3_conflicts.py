#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
给 spells-conflicts.js 追加第三批法术冲突标注（43个）
直接在文件末尾的 `};` 前插入（保证语法100%正确）
"""

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-conflicts.js"

# 第三批43个法术的冲突标注
batch3 = {
    "burning_hands": [
        {"point": "燃烧之手的扇形面积与反射", "phbRule": "创造15尺锥形火焰（1d4火伤害+强韧半数）", "controversy": "锥形是否填满整个15尺；反射失败是否全伤害", "suggestion": "锥形填满15尺；反射失败受全伤害", "source": "PHB p.207"}
    ],
    "magic_missile": [
        {"point": "魔法飞弹的自动命中机制", "phbRule": "自动命中（无攻击检定/反射）", "controversy": "是否受法术抗力；对隐形目标是否自动命中", "suggestion": "不受法术抗力影响；对隐形自动命中", "source": "PHB p.251"}
    ],
    "charm_person": [
        {"point": "魅惑人类对非人类的生效", "phbRule": "仅对人类/类人生物有效", "controversy": "是否对半兽人/提夫林生效；魅惑后是否可命令", "suggestion": "仅人类/半人类；需通过交涉/恐吓命令", "source": "PHB p.210"}
    ],
    "sleep": [
        {"point": "睡眠术的HD上限与唤醒", "phbRule": "影响最多4HD生物（强韧negate）", "controversy": "昏迷生物是否受 coup de grace；唤醒是否需标准动作", "suggestion": "可 coup de grace；唤醒需移动/受伤害", "source": "PHB p.280"}
    ],
    "command": [
        {"point": "命令术的单字命令合理性", "phbRule": "命令目标执行单字动作（意志negate）", "controversy": "「投降/自杀」是否合法；命令是否可违反本性", "suggestion": "DM裁定合理性；不可违反本性", "source": "PHB p.212"}
    ],
    "doom": [
        {"point": "绝望术的士气惩罚类型", "phbRule": "目标-2士气惩罚（攻击/伤害/豁免/技能）", "controversy": "士气惩罚是否STACK其他士气效果", "suggestion": "不STACK同类士气；影响所有相关DC", "source": "PHB p.224"}
    ],
    "feather_fall": [
        {"point": "羽落术的坠落伤害免除", "phbRule": "坠落伤害为0（轻柔落地）", "controversy": "是否影响投掷/射击精度；误触发是否消耗", "suggestion": "不影响远程攻击；误触发不消耗（反应动作）", "source": "PHB p.229"}
    ],
    "jump": [
        {"point": "跳跃术的跳跃距离计算", "phbRule": "跳跃距离×3（含高跳）", "controversy": "是否影响游泳/攀爬；高跳是否需要跑步起跳", "suggestion": "仅影响跳跃；高跳需10尺助跑", "source": "PHB p.246"}
    ],
    "mount": [
        {"point": "召唤坐骑的HD与属性", "phbRule": "召唤1匹战马（HD 3d8+12）", "controversy": "召唤生物是否立即服从；能否指定坐骑类型", "suggestion": "立即服从；可指定普通坐骑类型", "source": "PHB p.255"}
    ],
    "sanctuary": [
        {"point": "圣域术的攻击打破机制", "phbRule": "攻击者需意志DC防止攻击", "controversy": "范围攻击是否打破圣域；法术攻击是否需意志检定", "suggestion": "范围攻击不打破；法术攻击需意志检定", "source": "PHB p.275"}
    ],
    "summon_monster_i": [
        {"point": "召唤怪物I的生物选择", "phbRule": "召唤1个CR 1/2或1/3生物", "controversy": "能否召唤多个弱小生物；生物是否立即行动", "suggestion": "仅1个生物；生物立即行动（需命令）", "source": "SRD Summon Monster"}
    ],
    "acid_arrow": [
        {"point": "酸箭的持续伤害", "phbRule": "射线造成2d4酸伤害+1d4下一轮", "controversy": "持续伤害是否每轮强韧减半；酸伤是否影响装备", "suggestion": "持续伤害不减半；不影响装备（仅HP）", "source": "PHB p.196"}
    ],
    "bull_strength": [
        {"point": "公牛力量与猫之优雅的叠加", "phbRule": "增强 Strength +4（临时属性）", "controversy": "同类型增强是否叠加；是否受Antimagic Field影响", "suggestion": "不叠加同类型；受AMF影响（属魔法增强）", "source": "PHB p.206"}
    ],
    "cat_grace": [
        {"point": "猫之优雅对技能的影响", "phbRule": "增强 Dexterity +4（含AC/反射/技能）", "controversy": "增强是否影响远程攻击加值；是否影响先攻", "suggestion": "影响所有DEX相关数值；先攻/反射/AC都受影响", "source": "PHB p.208"}
    ],
    "darkvision": [
        {"point": "黑暗视觉的射程与适用环境", "phbRule": "获得60尺黑暗视觉", "controversy": "是否抵消阴影/DEEP阴影；魔法黑暗是否抵消", "suggestion": "抵消正常黑暗；需TRUE SEEING抵消魔法黑暗", "source": "PHB p.216"}
    ],
    "delay_poison": [
        {"point": "延时毒药对魔法毒药的效果", "phbRule": "毒素/疾病延迟1小时/环", "controversy": "能否延迟魔法毒药；延迟期间是否可解毒", "suggestion": "可延迟魔法毒药；延迟期间可解毒（永久解除）", "source": "PHB p.218"}
    ],
    "invisibility_sphere": [
        {"point": "隐形法球对队友的影响", "phbRule": "20尺散布内所有生物隐形", "controversy": "队友攻击是否打破全队隐形；是否影响新进入生物", "suggestion": "队友攻击仅打破自身隐形；不影响新进入者", "source": "PHB p.245"}
    ],
    "spider_climb": [
        {"point": "蜘蛛攀爬的表面积要求", "phbRule": "获得攀爬速度20尺", "controversy": "光滑表面是否影响；携带重量是否降低速度", "suggestion": "不受影响（黏附任何表面）；重量不影响", "source": "PHB p.283"}
    ],
    "suggestion": [
        {"point": "暗示术的命令合理性", "phbRule": "命令目标执行合理行动", "controversy": "「合理」定义（DM裁量）；能否命令自毁", "suggestion": "DM判断合理性；不可命令明显自毁", "source": "PHB p.286"}
    ],
    "daylight": [
        {"point": "日光术与黑暗术的对抗", "phbRule": "创造60尺半径光亮（抵消黑暗）", "controversy": "是否抵消DEEPER DARKNESS；对黑暗vision生物是否致盲", "suggestion": "抵消正常黑暗；对黑暗vision无影响", "source": "PHB p.216"}
    ],
    "deep_slumber": [
        {"point": "深眠术的HD上限", "phbRule": "影响最多10HD生物（无强韧）", "controversy": "是否影响已睡眠生物；唤醒DC是否受环级影响", "suggestion": "不影响已睡眠；唤醒需标准动作+伤害", "source": "PHB p.218"}
    ],
    "protection_from_arrows": [
        {"point": "防护自箭矢的穿透抵抗", "phbRule": "免疫远程武器伤害（1小时/环）", "controversy": "是否免疫投石/投斧；魔法远程武器是否穿透", "suggestion": "免疫所有远程武器；魔法武器穿透（CL检查）", "source": "PHB p.266"}
    ],
    "rage": [
        {"point": "狂暴术的属性变化与控制", "phbRule": "目标+2力量/-2智慧/+1意志（每轮新豁免）", "controversy": "狂暴期间是否可施法；受控狂暴是否可解除", "suggestion": "可施法（需 concentration DC 20）；每日一次新豁免", "source": "PHB p.267"}
    ],
    "slow": [
        {"point": "缓慢术的动作减半机制", "phbRule": "目标每轮1个标准/移动/迅捷动作", "controversy": "自由动作是否受限；缓慢是否影响法术施展时间", "suggestion": "自由动作不受影响；施展时间翻倍", "source": "PHB p.280"}
    ],
    "confusion": [
        {"point": "困惑术的意志豁免与持续", "phbRule": "目标困惑（1d10动作表）", "controversy": "困惑是否影响法术施展；每日一次新豁免", "suggestion": "困惑影响所有动作（含施法）；每日一次新豁免", "source": "PHB p.213"}
    ],
    "cure_critical_wounds": [
        {"point": "疗伤术的治疗量计算", "phbRule": "治疗4d8+1/环HP（触碰）", "controversy": "是否可过量治疗；对不死生物是否伤害", "suggestion": "不可过量治疗；对不死生物造成4d8+1/环伤害", "source": "PHB p.215"}
    ],
    "fear": [
        {"point": "恐惧术的逃遁机制", "phbRule": "目标恐慌逃遁", "controversy": "逃遁是否可控制；恐慌期间是否可施法", "suggestion": "不可控制（随机方向）；恐慌可施法（需DC 20）", "source": "PHB p.229"}
    ],
    "stoneskin": [
        {"point": "石肤术的伤害吸收上限", "phbRule": "吸收钝击/穿刺/挥砍伤害（10点/环）", "controversy": "吸收是否包括魔法武器；吸收上限是否受修复", "suggestion": "包括魔法武器；不可修复（一次性吸收）", "source": "PHB p.285"}
    ],
    "cloudkill": [
        {"point": "死云术的HD优先击杀", "phbRule": "20尺 spread 毒云（HD最低者先受影响）", "controversy": "HD相同如何决定；是否影响虚体/不死生物", "suggestion": "HD相同则随机；不影响虚体/不死（需呼吸）", "source": "PHB p.212"}
    ],
    "hold_monster": [
        {"point": "定身怪物的类型限制", "phbRule": "定身1个生物（每轮新豁免）", "controversy": "是否影响构装/元素/虚体；定身是否可施法", "suggestion": "影响所有生物；定身可施法（需DC 20）", "source": "PHB p.241"}
    ],
    "overland_flight": [
        {"point": "陆地飞行与飞行术的区别", "phbRule": "飞行速度40尺（1小时/环）", "controversy": "是否需专注维持；被击中是否坠落", "suggestion": "不须专注；失意识坠落（除非PERMANENT）", "source": "PHB p.259"}
    ],
    "wall_of_force": [
        {"point": "力墙术的不可摧毁性", "phbRule": "创造力场墙（不可摧毁）", "controversy": "DISINTEGRATE是否破坏力墙；ANTIMAGIC FIELD是否抑制", "suggestion": "DISINTEGRATE破坏力墙；AMF抑制（墙消失）", "source": "PHB p.298"}
    ],
    "maze": [
        {"point": "迷宫的脱困DC与限制", "phbRule": "目标陷入迷宫（DC20 INT脱困）", "controversy": "脱困后是否返回原位置；能否用传送直接脱困", "suggestion": "脱困返回原位置；任意门可脱困", "source": "PHB p.249"}
    ],
    "power_word_stun": [
        {"point": "震撼言语的HP阈值", "phbRule": "HP≤150则震晕（4d4轮）", "controversy": "临时HP是否计入；伤害后阈值变化是否实时生效", "suggestion": "临时HP不计入；实时生效（伤害后可能降阈值）", "source": "PHB p.264"}
    ],
    "imprisonment": [
        {"point": "监禁术的解除方式", "phbRule": "囚禁目标（仅WISH/FREEDOM解除）", "controversy": "「永久监禁」是否可追踪；异界监禁是否可PLANESHIFT逃脱", "suggestion": "可追踪（需LEGEND LORE）；异界监禁不可逃脱", "source": "PHB p.245"}
    ],
    "resurrection": [
        {"point": "复活术的遗体要求与等级损失", "phbRule": "复活死者（需遗体；损失1级）", "controversy": "解离/灰化遗体是否可复活；是否恢复属性减点", "suggestion": "解离可复活（TRUE RESURRECTION）；恢复所有属性", "source": "PHB p.274"}
    ],
    "legend_lore": [
        {"point": "传奇学识的获取信息深度", "phbRule": "获取传说/物品/地点的信息", "controversy": "「知道名字」是否足够；能否获取秘密（如真名/弱点）", "suggestion": "需接触/研究过；DM控制信息深度（平衡性）", "source": "PHB p.247"}
    ],
    "mind_fog": [
        {"point": "心神雾的智力属性影响", "phbRule": "云雾内生物Int降为1（-4意志）", "controversy": "Int=1是否影响专长/法术；是否影响记忆", "suggestion": "失去需INT的专长/法术；记忆不受影响", "source": "PHB p.253"}
    ],
    "wall_of_fire": [
        {"point": "火墙术的伤害类型与穿越", "phbRule": "创造火墙（2d4火伤害/轮）", "controversy": "穿越火墙是否每轮伤害；远程攻击是否受火焰遮挡", "suggestion": "穿越受立即伤害+每轮伤害；远程攻击受50% miss", "source": "PHB p.297"}
    ],
    "scrying": [
        {"point": "探知术的意志豁免与定位", "phbRule": "观察目标（意志negate；24小时/目标）", "controversy": "能否探知异界生物；被探知是否察觉（侦察DC）", "suggestion": "可探知异界；被探知可察觉（DC 20侦察）", "source": "PHB p.276"}
    ],
    "tiny_hut": [
        {"point": "小屋术的容纳人数与攻击", "phbRule": "创造透明小屋（最大9人）", "controversy": "小屋内是否可攻击屋外；小屋是否受AOE影响", "suggestion": "小屋内可攻击屋外（透过墙壁）；AOE不影响小屋", "source": "PHB p.295"}
    ],
    "zone_of_truth": [
        {"point": "真言域的豁免与适用", "phbRule": "区域内生物无法说谎（意志negate）", "controversy": "「无法说谎」是否包括回避问题；是否影响书写/手势", "suggestion": "可回避问题（但不说谎）；不影响书写/手势", "source": "PHB p.303"}
    ]
}

def generate_js(conflicts_dict):
    """生成格式完美的 JS 代码（手动拼接，避免f-string转义问题）"""
    lines = []
    lines.append('  // ========== 核心争议法术（第三批） ==========')
    lines.append('')
    
    ids = list(conflicts_dict.keys())
    for i, spell_id in enumerate(ids):
        conflicts = conflicts_dict[spell_id]
        lines.append('  "' + spell_id + '": [')
        for j, c in enumerate(conflicts):
            comma = ',' if j < len(conflicts) - 1 else ''
            lines.append('    {')
            lines.append('      "point": "' + c["point"] + '",')
            lines.append('      "phbRule": "' + c["phbRule"] + '",')
            lines.append('      "controversy": "' + c["controversy"] + '",')
            lines.append('      "suggestion": "' + c["suggestion"] + '",')
            lines.append('      "source": "' + c["source"] + '"')
            lines.append('    }' + comma)
        # 最后一个法术不加逗号（由调用者处理）
        if i < len(ids) - 1:
            lines.append('  ],')
        else:
            lines.append('  ]')
        lines.append('')
    
    return '\n'.join(lines)

def main():
    with open(FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到 `};` 的位置
    idx = content.rfind('};')
    if idx == -1:
        print("[ERROR] 找不到 };")
        return
    
    # 生成新数据  
    new_data = generate_js(batch3)
    
    # 检查 }; 前是否有逗号  
    before = content[:idx].rstrip()
    if not before.endswith(','):
        # 需要加逗号  
        new_content = content[:idx].rstrip() + ',\n' + new_data + '\n' + content[idx:]
    else:
        # 已有逗号，直接插入  
        new_content = content[:idx] + '\n' + new_data + '\n' + content[idx:]
    
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("[OK] 已追加 " + str(len(batch3)) + " 个法术的冲突标注")
    print("[INFO] 请运行 node -c 验证语法")

if __name__ == '__main__':
    main()
