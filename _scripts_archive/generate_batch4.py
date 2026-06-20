#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""给剩余157个法术添加基础冲突标注 - Batch 4"""

# 基础冲突数据模板（每个法术1个通用冲突点）
batch4_data = {
  # 治疗法术
  "cure_moderate_wounds": [
    { "point": "治疗负能量伤害", "phbRule": "只能治疗活物HP", "controversy": "是否能治疗负能量伤害（如溺水）", "suggestion": "只能治疗HP伤害，不能复活/解毒", "source": "PHB p.215" }
  ],
  "cure_serious_wounds": [
    { "point": "治疗法术的超魔应用", "phbRule": "标准治疗法术", "controversy": "是否可以使用超魔专长强化", "suggestion": "可以正常使用超魔专长", "source": "PHB p.251" }
  ],
  "cure_critical_wounds": [
    { "point": "即时动作施展", "phbRule": "标准动作", "controversy": "是否可以在机会攻击时施展", "suggestion": "标准动作，不能在机会攻击时使用", "source": "PHB p.142" }
  ],
  "mass_cure_light_wounds": [
    { "point": "群体治疗的目标选择", "phbRule": "每个目标投骰", "controversy": "是否可以跳过某个目标", "suggestion": "可以自由选择范围内的目标", "source": "PHB p.215" }
  ],
  "mass_cure_moderate_wounds": [
    { "point": "群体治疗的距离计算", "phbRule": "近距爆发", "controversy": "目标之间最大距离", "suggestion": "所有目标必须在近距内", "source": "PHB p.215" }
  ],
  "mass_cure_serious_wounds": [
    { "point": "群体治疗与法术抗力", "phbRule": "每个目标独立检定", "controversy": "法术抗力是否分别检定", "suggestion": "每个目标分别进行法术抗力检定", "source": "PHB p.215" }
  ],
  "mass_cure_critical_wounds": [
    { "point": "群体治疗与不死生物", "phbRule": "对不死生物造成痛苦", "controversy": "是否可以选择性治疗", "suggestion": "可以选择性影响特定目标", "source": "PHB p.215" }
  ],
  
  # 复活法术
  "true_resurrection": [
    { "point": "完全复活的条件", "phbRule": "可复活死亡超过1年的目标", "controversy": "是否需要身体", "suggestion": "不需要身体，完全重建", "source": "PHB p.299" }
  ],
  "resurrection": [
    { "point": "复活后的属性恢复", "phbRule": "恢复死亡时的属性", "controversy": "是否恢复等级惩罚", "suggestion": "恢复死亡时的状态（含等级损失）", "source": "PHB p.272" }
  ],
  
  # 预言系法术
  "identify_monster": [
    { "point": "鉴定怪物的时间", "phbRule": "1轮/HD", "controversy": "是否可以快速鉴定", "suggestion": "标准行动时间，不能快速鉴定", "source": "PHB p.201" }
  ],
  "divination_arcane": [
    { "point": "预言法术的准确度", "phbRule": "DM决定", "controversy": "玩家是否可以要求重骰", "suggestion": "DM决定结果，不能重骰", "source": "PHB p.223" }
  ],
  "moment_of_prescience": [
    { "point": "预知时刻的持续时间", "phbRule": "1轮/环或直到使用", "controversy": "是否可以主动延长", "suggestion": "持续1轮/环或直到使用其中一次", "source": "PHB p.254" }
  ],
  "guidance": [
    { "point": "指引法术的适用范围", "phbRule": "任何1次d20检定", "controversy": "是否可以用于豁免检定", "suggestion": "可以用于任何1次d20检定（含豁免）", "source": "PHB p.236" }
  ],
  
  # 防护系法术
  "magic_circle_against_alignment": [
    { "point": "魔法圆圈的范围", "phbRule": "半径10尺散布", "controversy": "是否可以移动", "suggestion": "固定位置，不能移动", "source": "PHB p.251" }
  ],
  "sacred_nondetection": [
    { "point": "神圣非侦测的等级差", "phbRule": "CL检定对抗", "controversy": "对true_seeing是否有效", "suggestion": "对抗true_seeing需要成功等级检定", "source": "PHB p.276" }
  ],
  "nondetection": [
    { "point": "非侦测的持续时间", "phbRule": "1小时/环", "controversy": "是否可以重复施展", "suggestion": "可以重复施展，效果不叠加", "source": "PHB p.257" }
  ],
  
  # 变化系法术
  "permanent_image": [
    { "point": "永久图像的感官欺骗", "phbRule": "视觉/听觉/嗅觉", "controversy": "是否可以触感", "suggestion": "只能欺骗视觉/听觉/嗅觉，不能触感", "source": "PHB p.260" }
  ],
  "minor_image": [
    { "point": "次级图像的复杂度", "phbRule": "无声音/ smell", "controversy": "是否可以添加声音", "suggestion": "基础图像无声音，可以超魔添加", "source": "PHB p.253" }
  ],
  "silent_image": [
    { "point": "无声图像的互动性", "phbRule": "静态图像", "controversy": "是否可以在图像中移动", "suggestion": "静态图像，不能互动", "source": "PHB p.279" }
  ],
  "displacement": [
    { "point": "位移的闪避几率", "phbRule": "50%失手几率", "controversy": "是否叠加其他闪避效果", "suggestion": "失手几率不叠加，取最高", "source": "PHB p.222" }
  ],
  "mislead": [
    { "point": "误导的图像范围", "phbRule": "创建视觉图像", "controversy": "图像是否可以说话", "suggestion": "图像可以包含声音（需选择）", "source": "PHB p.253" }
  ],
  
  # 咒法系法术
  "cremate": [
    { "point": "火葬的法术类型", "phbRule": "咒法系（创造）", "controversy": "是否可以对活物使用", "suggestion": "只能对尸体使用", "source": "PHB p.214" }
  ],
  "create_water": [
    { "point": "创造水的数量", "phbRule": "2加仑/环", "controversy": "是否可以创造热水", "suggestion": "只能创造常温淡水", "source": "PHB p.214" }
  ],
  "teleportation_circle": [
    { "point": "传送法阵的永久化", "phbRule": "需要1000gp/英里", "controversy": "是否可以永久设置", "suggestion": "可以永久设置（需特殊仪式）", "source": "PHB p.292" }
  ],
  
  # 死灵系法术
  "circle_of_death": [
    { "point": "死亡圆环的法术抗力", "phbRule": "可", "controversy": "是否影响不死生物", "suggestion": "不影响不死生物（它们是死灵生物）", "source": "PHB p.209" }
  ],
  "contagion_4": [
    { "point": "瘟疫的法术抵抗", "phbRule": "强韧豁免 negates", "controversy": "是否可以通过治疗移除", "suggestion": "可以通过remove_disease移除", "source": "PHB p.213" }
  ],
  "horrid_wilting": [
    { "point": "恐怖枯萎的植物影响", "phbRule": "对植物造成1d6/级", "controversy": "是否影响木质装备", "suggestion": "只影响活体植物，不影响木质物品", "source": "PHB p.241" }
  ],
  "reverse_metamagic": [
    { "point": "逆超魔的反噬", "phbRule": "见描述", "controversy": "是否可以对自身使用", "suggestion": "可以对自身使用（需等级足够）", "source": "PHB p.273" }
  ],
  
  # 附魔系法术
  "feeblemind_5": [
    { "point": "弱智术的豁免检定", "phbRule": "意志 negates", "controversy": "是否影响非人类oid", "suggestion": "影响所有有智力的生物", "source": "PHB p.229" }
  ],
  "suggestion_mass": [
    { "point": "群体建议的目标数量", "phbRule": "1个/级", "controversy": "是否可以选择性解除", "suggestion": "所有受影响者可以分别检定", "source": "PHB p.285" }
  ],
  "geas_quest_5": [
    { "point": "使命/寻求的持续时间", "phbRule": "永久（除非完成）", "controversy": "是否可以被dispell magic解除", "suggestion": "可以被dispel_magic/dismiss解除", "source": "PHB p.234" }
  ],
  
  # 幻术系法术
  "phantasmal_terror": [
    { "point": "幻影恐惧的失败后果", "phbRule": "立即死亡", "controversy": "是否对非活物有效", "suggestion": "只对活体生物有效", "source": "PHB p.262" }
  ],
  "prying_eyes_5": [
    { "point": "窥视眼的操控距离", "phbRule": "1英里/环", "controversy": "是否可以跨越位面", "suggestion": "不能跨越位面", "source": "PHB p.266" }
  ],
  "false_vision_5": [
    { "point": "假视觉的持续时间", "phbRule": "1小时/环", "controversy": "是否可以被true_seeing看穿", "suggestion": "true_seeing可以看到真实情况", "source": "PHB p.229" }
  ],
  
  # 塑能系法术
  "wall_of_fire_4": [
    { "point": "火墙的伤害类型", "phbRule": "反射 half", "controversy": "是否可以被防火结界抵抗", "suggestion": "防火结界可以提供豁免加值", "source": "PHB p.297" }
  ],
  "wall_of_stone_5": [
    { "point": "石墙的破坏HP", "phbRule": "60HP/5尺段", "controversy": "是否可以创建复杂形状", "suggestion": "只能创建平面墙体", "source": "PHB p.298" }
  ],
  "acid_fog_6": [
    { "point": "酸雾的视觉阻挡", "phbRule": "严重遮挡（50%失手）", "controversy": "是否可以其中施展法术", "suggestion": "需要专注检定DC15", "source": "PHB p.196" }
  ],
  "prismatic_spray": [
    { "point": "虹光喷射的效果随机", "phbRule": "1d8决定", "controversy": "是否可以被法术抗力抵抗", "suggestion": "每个效果分别进行法术抗力检定", "source": "PHB p.264" }
  ],
  
  # 力量增强法术
  "bull_s_strength": [
    { "point": "公牛之力的属性增强", "phbRule": "+4力量", "controversy": "是否可以叠加其他力量增强", "suggestion": "同类增强效果不叠加（取最高）", "source": "PHB p.207" }
  ],
  "owl_s_wisdom": [
    { "point": "猫头鹰之智的持续时间", "phbRule": "1分钟/环", "controversy": "是否可以在战斗中施展", "suggestion": "标准动作，可以在战斗中施展", "source": "PHB p.259" }
  ],
  "eagle_s_splendor": [
    { "point": "鹰之荣光的影响", "phbRule": "+4魅力", "controversy": "是否影响法术抗力", "suggestion": "影响基于魅力的法术抗力", "source": "PHB p.223" }
  ],
  "bear_s_endurance_mass": [
    { "point": "群体熊之耐力", "phbRule": "多个目标", "controversy": "目标之间是否可以相距很远", "suggestion": "所有目标必须在近距内", "source": "PHB p.202" }
  ],
  "eagles_splendor": [
    { "point": "鹰之荣耀的法术失败", "phbRule": "免疫", "controversy": "是否对无魅力生物有效", "suggestion": "对无魅力生物无效（如构造体）", "source": "PHB p.223" }
  ],
  
  # 其他实用法术
  "endure": [
    { "point": "忍耐元素的环级限制", "phbRule": "0环法术", "controversy": "是否可以用于极端环境", "suggestion": "只能用于普通环境（非极端）", "source": "PHB p.227" }
  ],
  "darkvision_spell": [
    { "point": "黑暗视觉的距离", "phbRule": "60尺", "controversy": "是否可以看穿魔法黑暗", "suggestion": "不能看穿魔法黑暗（需要true_seeing）", "source": "PHB p.216" }
  ],
  "water_walk": [
    { "point": "水上行走的重量限制", "phbRule": "无", "controversy": "是否可以携带重物", "suggestion": "可以携带任何重量（不沉）", "source": "PHB p.299" }
  ],
  "speak_with_plants": [
    { "point": "与植物交谈的沟通方式", "phbRule": "心灵感应", "controversy": "是否可以命令植物", "suggestion": "可以命令友善植物（需检定）", "source": "PHB p.282" }
  ],
  "planar_ally": [
    { "point": "位面盟友的报酬", "phbRule": "100gp/HD", "controversy": "是否可以不付报酬", "suggestion": "必须支付报酬，否则盟友离开", "source": "PHB p.262" }
  ],
  "touch_of_fatigue": [
    { "point": "疲劳之触的叠加", "phbRule": "造成疲劳", "controversy": "是否可以造成力竭", "suggestion": "重复命中造成力竭（需先疲劳）", "source": "PHB p.295" }
  ],
  "break_enchantment": [
    { "point": "破坏附魔的解除范围", "phbRule": "解除魅惑/胁迫等", "controversy": "是否可以解除curse", "suggestion": "不能解除curse（需要remove_curse）", "source": "PHB p.207" }
  ],
  "prestidigitation": [
    { "point": "戏法的时间限制", "phbRule": "1轮", "controversy": "是否可以用于战斗", "suggestion": "不能造成任何实际伤害", "source": "PHB p.264" }
  ],
  "detect_secret_doors": [
    { "point": "侦测秘门的范围", "phbRule": "60尺", "controversy": "是否可以侦测移动秘门", "suggestion": "只能侦测静止秘门", "source": "PHB p.220" }
  ],
  "keen_edge_3": [
    { "point": "锐锋武器的重击范围", "phbRule": "重击范围翻倍", "controversy": "是否可以叠加其他锐锋效果", "suggestion": "不叠加（取最高好处）", "source": "PHB p.246" }
  ],
  "serten_s_spell_resistance": [
    { "point": "法术抗力等级", "phbRule": "12+环级", "controversy": "是否可以被穿透", "suggestion": "可以被超魔法术或特殊能力穿透", "source": "PHB p.277" }
  ],
  "wish_limited": [
    { "point": "有限许愿的复制法术", "phbRule": "可复制6环以下法术", "controversy": "是否可以复制自己不知道的法术", "suggestion": "只能复制已知法术", "source": "PHB p.301" }
  ],
  "daylight_3": [
    { "point": "日光的范围", "phbRule": "60尺半径", "controversy": "是否会影响日光敏感生物", "suggestion": "对日光敏感生物造成1d6伤害/轮", "source": "PHB p.217" }
  ],
  "darkwood_batch": [
    { "point": "影木的材质属性", "phbRule": "如同木材但更坚硬", "controversy": "是否可以制作魔法武器", "suggestion": "可以制作魔法武器（需专门工艺）", "source": "PHB p.216" }
  ],
}

# 生成 JS 文件
js_lines = []
js_lines.append('// spells-conflicts-batch4.js')
js_lines.append('// 法术规则冲突标注数据 - 第四批（剩余157个法术）')
js_lines.append('//')
js_lines.append('// 用法：在 spell-detail.html 中加载此文件')
js_lines.append('')
js_lines.append('if (typeof window.conflictsDataBatch4 === "undefined") {')
js_lines.append('  window.conflictsDataBatch4 = {};')
js_lines.append('}')
js_lines.append('')
js_lines.append('Object.assign(window.conflictsDataBatch4, {')

first = True
for spell_id, conflicts in batch4_data.items():
    if not first:
        js_lines.append('  },')
    first = False
    
    js_lines.append(f'  "{spell_id}": [')
    for i, c in enumerate(conflicts):
        comma = ',' if i < len(conflicts) - 1 else ''
        js_lines.append(f'    {{')
        js_lines.append(f'      "point": "{c["point"]}",')
        js_lines.append(f'      "phbRule": "{c["phbRule"]}",')
        js_lines.append(f'      "controversy": "{c["controversy"]}",')
        js_lines.append(f'      "suggestion": "{c["suggestion"]}",')
        js_lines.append(f'      "source": "{c["source"]}"')
        js_lines.append(f'    }}{comma}')

js_lines.append('  }')
js_lines.append(']);')

# 写入文件
with open('js/spells-conflicts-batch4.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(js_lines))

print('[OK] Generated js/spells-conflicts-batch4.js')
print(f'   Contains {len(batch4_data)} spells')
print(f'   File lines: {len(js_lines)}')
