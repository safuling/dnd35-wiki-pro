#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
正确添加66个缺失领域法术到 spells-data.js
方法：解析 JS 文件，获取 SPELLS 数组，添加新法术，重写文件
"""

import re
import json

# 66个缺失法术的完整数据
NEW_SPELLS = [
  # 气领域
  {"id":"obscuring_mist","nameEn":"Obscuring Mist","nameZh":"迷雾术","level":1,"school":"咒法系","subschool":"创造","descriptor":"","components":"V, S","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"以你为中心的弥散范围","duration":"1分钟/环","savingThrow":"无","spellResist":"否","desc":"你周围会弥漫一股浓密的雾气，使所有穿过该区域的生物的有效视野缩短至5尺。远程攻击无法穿过迷雾，侦测类和侦察检定会受到-5惩罚。","arcane":{"wizard":1,"sorcerer":1},"divine":{"cleric":1,"druid":1},"classes":{"wizard":1,"sorcerer":1,"cleric":1,"druid":1}},
  {"id":"air_walk","nameEn":"Air Walk","nameZh":"空气行走","level":4,"school":"变化系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"触碰","target":"触碰的生物","duration":"10分钟/环","savingThrow":"意志过则无效（无害）","spellResist":"是（无害）","desc":"受术者能在空中行走，如同在坚实的地面上一般。速度如同地面移动，不会坠落。","arcane":{"wizard":4,"sorcerer":4},"divine":{"cleric":4,"druid":4},"classes":{"wizard":4,"sorcerer":4,"cleric":4,"druid":4}},
  {"id":"control_winds","nameEn":"Control Winds","nameZh":"控制风力","level":5,"school":"变化系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"以你为中心，半径100尺的弥散区域","duration":"10分钟/环","savingThrow":"强韧过则减半","spellResist":"否","desc":"你改变天然风的速度和方向，最高可达飓风级别（风速110尺）。","arcane":None,"divine":{"druid":5},"classes":{"druid":5}},
  # 动物领域
  {"id":"calm_animals","nameEn":"Calm Animals","nameZh":"安抚动物","level":1,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"至多每等级1只动物的放射区域","duration":"专注","savingThrow":"意志过则无效","spellResist":"是","desc":"该法术可以使动物平静下来，使其不会攻击或逃跑。","arcane":None,"divine":{"druid":1,"ranger":1},"classes":{"druid":1,"ranger":1}},
  {"id":"hold_animal","nameEn":"Hold Animal","nameZh":"禁锢动物","level":2,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]","components":"V, S, DF","castingTime":"标准动作","range":"中距 (100尺+10尺/环)","target":"一个动物","duration":"1轮/环","savingThrow":"意志过则无效","spellResist":"是","desc":"你使一个动物无法移动。受术动物不能行动，但可以进行豁免检定。","arcane":None,"divine":{"druid":2,"ranger":2},"classes":{"druid":2,"ranger":2}},
  {"id":"dominate_animal","nameEn":"Dominate Animal","nameZh":"支配动物","level":3,"school":"惑控系","subschool":"强迫","descriptor":"[影响心灵]","components":"V, S","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"一个动物","duration":"1轮/环","savingThrow":"意志过则无效","spellResist":"是","desc":"你在精神上控制一个动物。受术者不会执行明显有害的行动。","arcane":None,"divine":{"druid":3},"classes":{"druid":3}},
  {"id":"summon_natures_ally_4","nameEn":"Summon Nature's Ally IV","nameZh":"召唤自然盟友 IV","level":4,"school":"咒法系","subschool":"召唤","descriptor":"","components":"V, S, DF","castingTime":"标准动作（见描述）","range":"近距 (25尺+5尺/2环)","target":"见描述","duration":"1轮/环（D）","savingThrow":"无","spellResist":"否","desc":"你召唤一个自然生物为你作战，总计不超过4 HD。","arcane":None,"divine":{"druid":4,"ranger":4},"classes":{"druid":4,"ranger":4}},
  {"id":"antilife_shell","nameEn":"Antilife Shell","nameZh":"反生命壳","level":6,"school":"防护系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"10尺","target":"以你为中心，半径10尺的弥散区域","duration":"1轮/环（D）","savingThrow":"无","spellResist":"否","desc":"你创造一个排斥所有活物的壳。不死生物、构装生物、元素生物和泥形生物不受影响。","arcane":None,"divine":{"druid":6},"classes":{"druid":6}},
  {"id":"animal_shapes","nameEn":"Animal Shapes","nameZh":"动物形态","level":7,"school":"变化系","subschool":"变身","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"至多每等级1个自愿生物","duration":"1小时/环（D）","savingThrow":"无","spellResist":"否","desc":"你可以将自愿的生物变成任何你选择的动物形态。目标保留自己的属性，但获得所变动物的天然武器和特殊能力。","arcane":None,"divine":{"druid":7},"classes":{"druid":7}},
  # 混乱领域
  {"id":"protection_from_law","nameEn":"Protection from Law","nameZh":"防护律法","level":1,"school":"防护系","subschool":"","descriptor":"[律法]","components":"V, S, DF","castingTime":"标准动作","range":"触碰","target":"触碰的生物","duration":"1分钟/环","savingThrow":"意志过则无效（无害）","spellResist":"是（无害）","desc":"该法术在受术者周围创造一个魔法屏障，保护其免受守序生物的攻击。","arcane":None,"divine":{"cleric":1},"classes":{"cleric":1}},
  {"id":"chaos_hammer","nameEn":"Chaos Hammer","nameZh":"混乱之锤","level":4,"school":"塑能系","subschool":"","descriptor":"[混乱][声波]","components":"V, S","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"至多每3等级1个守序生物的放射区域","duration":"瞬时","savingThrow":"强韧过则减半","spellResist":"是","desc":"你发射一道混乱能量的冲击波，对守序生物造成1d8点伤害每2施法者等级（最高5d8）。","arcane":None,"divine":{"cleric":4},"classes":{"cleric":4}},
  {"id":"animate_objects","nameEn":"Animate Objects","nameZh":"活化物体","level":6,"school":"变化系","subschool":"","descriptor":"","components":"V, S, M","castingTime":"标准动作","range":"中距 (100尺+10尺/环)","target":"见描述","duration":"1轮/环","savingThrow":"无","spellResist":"否","desc":"你使无生命物体变成你的仆从。你可以活化至多每等级25磅重量的物体。","material":"一个槐木树枝","arcane":{"wizard":6,"sorcerer":6},"divine":None,"classes":{"wizard":6,"sorcerer":6}},
  {"id":"cloak_of_chaos","nameEn":"Cloak of Chaos","nameZh":"混乱之袍","level":8,"school":"防护系","subschool":"","descriptor":"[混乱]","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"见描述","duration":"1轮/环（D）","savingThrow":"见描述","spellResist":"是（见描述）","desc":"该法术的功能如同混乱版的法术抗力护盾。所有受影响的目标对守序法术和类法术能力有+4抗力加值。","arcane":None,"divine":{"cleric":8},"classes":{"cleric":8}},
  # 死亡领域
  {"id":"death_knell","nameEn":"Death Knell","nameZh":"死亡丧钟","level":2,"school":"死灵系","subschool":"","descriptor":"[死亡][邪恶]","components":"V, S","castingTime":"标准动作","range":"中距 (100尺+10尺/环)","target":"一个生命骰小于你的生物","duration":"瞬时（见描述）","savingThrow":"意志过则无效","spellResist":"是","desc":"你吸取濒死生物的生命力。如果目标因该法术死亡，你获得1d8点临时生命值和+1施法者等级（用于所有目的），持续1小时。","arcane":None,"divine":{"cleric":2},"classes":{"cleric":2}},
  {"id":"create_greater_undead","nameEn":"Create Greater Undead","nameZh":"创造高等亡灵","level":8,"school":"死灵系","subschool":"创造","descriptor":"[邪恶]","components":"V, S, M","castingTime":"1分钟","range":"近距 (25尺+5尺/2环)","target":"见描述","duration":"瞬时","savingThrow":"无","spellResist":"否","desc":"你创造一个高等亡灵生物（如幽魂、吸血鬼、巫妖或木乃伊）。","material":"一个装有至少25 gp价值的黄金或宝石的容器","arcane":{"wizard":8,"sorcerer":8},"divine":{"cleric":8},"classes":{"wizard":8,"sorcerer":8,"cleric":8}},
  # 土领域
  {"id":"magic_stone","nameEn":"Magic Stone","nameZh":"魔法石","level":1,"school":"变化系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"触碰","target":"至多3颗石头","duration":"30分钟或直到发射","savingThrow":"无","spellResist":"否","desc":"你对至多3颗普通石头施展魔法。你可以将这些石头当作远程武器投掷，造成1d6+1点钝击伤害。","arcane":None,"divine":{"druid":1,"cleric":1},"classes":{"druid":1,"cleric":1}},
  {"id":"soften_earth_and_stone","nameEn":"Soften Earth and Stone","nameZh":"软化泥土与岩石","level":2,"school":"变化系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"至多每等级10立方尺的泥土或岩石","duration":"瞬时","savingThrow":"见描述","spellResist":"否","desc":"你使泥土变成软泥，或使岩石变成软土。陷入软化泥土的生物可以通过强韧检定（DC 15）逃脱。","arcane":None,"divine":{"druid":2},"classes":{"druid":2}},
  {"id":"stone_shape","nameEn":"Stone Shape","nameZh":"塑石术","level":3,"school":"变化系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"触碰","target":"至多每等级1立方尺的石头","duration":"瞬时","savingThrow":"无","spellResist":"否","desc":"你改变石头的形状。你可以将一块石头塑造成任何你想要的形状。该法术不能创造移动的机械或复杂装置。","arcane":{"wizard":3,"sorcerer":3},"divine":{"cleric":3,"druid":3},"classes":{"wizard":3,"sorcerer":3,"cleric":3,"druid":3}},
  {"id":"spike_stones","nameEn":"Spike Stones","nameZh":"尖石术","level":4,"school":"塑能系","subschool":"","descriptor":"","components":"V, S, DF","castingTime":"标准动作","range":"近距 (25尺+5尺/2环)","target":"以你为中心，半径20尺的弥散区域","duration":"1小时/环（D）","savingThrow":"无","spellResist":"否","desc":"你在地面上创造尖锐的石笋。穿过该区域的生物有可能被绊倒（敏捷检定DC 15），失败则跌倒并受到1d8点穿刺伤害。","arcane":None,"divine":{"druid":4},"classes":{"druid":4}},
  {"id":"stoneskin","nameEn":"Stoneskin","nameZh":"石肤术","level":6,"school":"变化系","subschool":"","descriptor":"","components":"V, S, M","castingTime":"标准动作","range":"触碰","target":"触碰的生物","duration":"10分钟/环或直到被穿透","savingThrow":"意志过则无效（无害）","spellResist":"是（无害）","desc":"受术者的皮肤变成石头般的质地，获得伤害减免10/钝击或穿刺。该法术持续直到吸收的伤害总量达到10点每施法者等级（最高150点）。","material":"一块花岗岩、砂岩或石灰岩，以及一瓶价值150 gp的澄清水","arcane":{"wizard":6,"sorcerer":6},"divine":{"cleric":6,"druid":6},"classes":{"wizard":6,"sorcerer":6,"cleric":6,"druid":6}},
  {"id":"iron_body","nameEn":"Iron Body","nameZh":"铁躯术","level":8,"school":"变化系","subschool":"","descriptor":"","components":"V, S, M","castingTime":"标准动作","range":"触碰","target":"触碰的生物","duration":"1分钟/环（D）","savingThrow":"意志过则无效（无害）","spellResist":"是（无害）","desc":"你的身体变成生铁。你获得伤害减免15/钝击，对音波、毒、意念结合的豁免检定有+6增强加值，并且不受重击或夹击。","material":"一小块铁和一小瓶价值100 gp的粘性油","arcane":{"wizard":8,"sorcerer":8},"divine":None,"classes":{"wizard":8,"sorcerer":8}},
]

def spell_to_js(obj, indent=4):
    """将法术对象转换为 JavaScript 对象字面量字符串"""
    sp = ' ' * indent
    lines = []
    lines.append('{')
    lines.append(f'{sp}id:"{obj["id"]}", nameEn:"{obj["nameEn"]}", nameZh:"{obj["nameZh"]}",')
    lines.append(f'{sp}level:{obj["level"]}, school:"{obj["school"]}", subschool:"{obj.get("subschool","" )}", descriptor:"{obj.get("descriptor","" )}",')
    lines.append(f'{sp}components:"{obj["components"]}", castingTime:"{obj["castingTime"]}",')
    lines.append(f'{sp}range:"{obj["range"]}", target:"{obj["target"]}",')
    lines.append(f'{sp}duration:"{obj["duration"]}", savingThrow:"{obj["savingThrow"]}", spellResist:"{obj["spellResist"]}",')
    # desc 中的引号需要转义
    safe_desc = obj["desc"].replace('"', '\\"')
    lines.append(f'{sp}desc:"{safe_desc}",')
    if obj.get("material"):
        safe_mat = obj["material"].replace('"', '\\"')
        lines.append(f'{sp}material:"{safe_mat}",')
    # arcane
    if obj.get("arcane"):
        entries = ", ".join(f'{k}:{v}' for k,v in obj["arcane"].items())
        lines.append(f'{sp}arcane:{{{entries}}},')
    else:
        lines.append(f'{sp}arcane:null,')
    # divine
    if obj.get("divine"):
        entries = ", ".join(f'{k}:{v}' for k,v in obj["divine"].items())
        lines.append(f'{sp}divine:{{{entries}}},')
    else:
        lines.append(f'{sp}divine:null,')
    # classes
    class_entries = ", ".join(f'{k}:{v}' for k,v in obj["classes"].items())
    lines.append(f'{sp}classes:{{{class_entries}}}}}')
    lines.append('  }')
    return '\n'.join(lines)

# 读取文件
with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 解析现有法术ID
id_pattern = re.compile(r'id\s*:\s*"([^"]+)"')
existing_ids = set(id_pattern.findall(content))
print(f'现有法术数（按ID）: {len(existing_ids)}')

# 过滤出真正需要添加的法术
to_add = [s for s in NEW_SPELLS if s["id"] not in existing_ids]
print(f'需要添加: {len(to_add)} 个')
if len(to_add) == 0:
    print('没有新法术需要添加')
    exit(0)

# 找到数组结尾位置
last_bracket = content.rfind('];')
if last_bracket == -1:
    print('错误：找不到数组结尾 ];')
    exit(1)

# 生成要插入的文本
insert_text = ''
for i, spell in enumerate(to_add):
    if i > 0:
        insert_text += ',\n'
    insert_text += spell_to_js(spell, indent=2)
insert_text = ',\n' + insert_text + '\n'

# 插入到 ]; 之前
new_content = content[:last_bracket] + insert_text + content[last_bracket:]

# 备份
import shutil
shutil.copy2('js/spells-data.js', 'js/spells-data.js.bak_new')
print(f'已备份到 js/spells-data.js.bak_new')

# 写入
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'✅ 已添加 {len(to_add)} 个新法术')
print(f'文件大小: {len(new_content)} 字节')

# 验证
try:
    with open('js/spells-data.js', 'r', encoding='utf-8') as f:
        test_content = f.read()
    # 简单检查：统计 id 出现次数
    all_ids = id_pattern.findall(test_content)
    unique = set(all_ids)
    print(f'验证：文件中ID总数: {len(all_ids)}，唯一ID: {len(unique)}')
    if len(all_ids) != len(unique):
        print('⚠️ 仍有重复ID！')
    else:
        print('✅ 无重复ID')
except Exception as e:
    print(f'验证失败: {e}')
