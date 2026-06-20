# -*- coding: utf-8 -*-
"""
给更多核心法术添加规则冲突标注
处理两种格式：不带引号（id:"xxx"）和带引号（"id": "xxx"）
"""
import re

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

# 新增冲突标注的法术数据
new_conflicts = {
    'fireball': [
        {'point': '火球术在角落的反弹伤害计算', 'phbRule': '标准反射豁免减半伤害，力场反射不反弹', 'controversy': '火球在封闭空间是否对施法者造成伤害；爆炸中心在墙角时如何计算范围', 'suggestion': '严格按PHB：爆破力场反射，施法者需站在安全距离', 'source': 'PHB p.231'},
        {'point': '火球对对象和区域的区分', 'phbRule': '火球影响整个爆破区域，区域内所有生物受影响', 'controversy': '部分DM认为火球只影响区域，不影响其中的物体', 'suggestion': '火球影响区域内所有生物和可燃物体', 'source': 'PHB p.231'}
    ],
    'lightning_bolt': [
        {'point': '闪电箭在狭长空间传播', 'phbRule': '形成宽5尺、长……（视环级）的力场', 'controversy': '闪电箭在20尺宽通道中如何传播；是否会反弹', 'suggestion': '严格按PHB描述，力场沿施法者指向传播', 'source': 'PHB p.246'}
    ],
    'charm_person': [
        {'point': '魅惑效果的持续时间', 'phbRule': '1d6分钟/环（牧师1分钟/环）', 'controversy': '被魅惑者发现真相后是否立即解除；魅惑是否影响记忆', 'suggestion': '被魅惑者发现被法术影响后可做意志豁免解除', 'source': 'PHB p.210'}
    ],
    'sleep': [
        {'point': '睡眠术对已经睡眠的生物的影响', 'phbRule': '影响最多4HD的生物，额外HD无效', 'controversy': '睡眠术是否叠加；已经自然睡眠的生物是否受影响', 'suggestion': '睡眠术使目标进入魔法睡眠，自然睡眠的生物不受影响', 'source': 'PHB p.280'}
    ],
    'summon_monster_1': [
        {'point': '召唤怪物的属性值（BAB、豁免等）', 'phbRule': '怪物属性按MM标准，但HD按法术环级', 'controversy': '召唤生物的BAB、强韧/反射/意志豁免如何计算；不同来源（SRD vs 拓展书）有差异', 'suggestion': '使用SRD标准召唤怪物属性表', 'source': 'SRD Summon Monster Table'}
    ],
    'web': [
        {'point': '蛛网术的移除方式', 'phbRule': '火可以燃烧蛛网（标准动作，1d4+1轮后生效）', 'controversy': '用锐器是否可以斩断蛛网；力量检定DC多少', 'suggestion': '蛛网可用力量检定DC25移除，或用火燃烧', 'source': 'PHB p.302'}
    ],
    'mirror_image': [
        {'point': '镜影术破盾顺序', 'phbRule': '攻击者随机选一个镜像（包括真身），命中则击破一个镜像', 'controversy': '范围攻击如何破盾；镜像是否抵消魔法导弹', 'suggestion': '镜像只抵消单次攻击（包括魔法飞弹），范围攻击破所有镜像', 'source': 'PHB p.253'}
    ],
    'shield': [
        {'point': '护盾术是否应对所有力场法术', 'phbRule': '应对魔法飞弹，提供+4偏转AC', 'controversy': '护盾是否应对其他力场法术（如力量冲击）；护盾是否可以被解除', 'suggestion': '护盾只应对魔法飞弹和力场投射物，持续1轮/环', 'source': 'PHB p.279'}
    ],
    'magic_missile': [
        {'point': '魔法飞弹的自动命中', 'phbRule': '自动命中，伤害1d4+1，+1飞弹/环级以上', 'controversy': '魔法飞弹是否可以">避免"（如护盾术）；飞弹是否可以被"招架"', 'suggestion': '护盾术完全抵消魔法飞弹，其他情况下自动命中', 'source': 'PHB p.252'}
    ],
    'hold_person': [
        {'point': '定身人类的属性伤害', 'phbRule': '目标无法通过敏捷检定移动，但可正常防御', 'controversy': '定身是否阻止法术施展（需要言语/姿势成分）；定身是否影响精神行动', 'suggestion': '定身目标无法移动或执行需要运动的动作，但可施展不需运动的法术', 'source': 'PHB p.241'}
    ],
    'fly': [
        {'point': '飞行术的错误处理', 'phbRule': '机动性普通，速度60尺', 'controversy': '飞行中被击落如何坠落；飞行机动性如何影响战斗', 'suggestion': '飞行中受伤害需做平衡检定，失败则坠落', 'source': 'PHB p.227, DMG p.20'}
    ],
    'cure_light_wounds': [
        {'point': '治疗法术对死灵生物的影响', 'phbRule': '治疗法术对死灵生物造成等额伤害', 'controversy': '治疗法术的"伤害"是否触发死灵生物的特殊能力；是否可以用治疗法术攻击死灵', 'suggestion': '治疗法术可以故意瞄准死灵生物造成法术伤害', 'source': 'PHB p.220'}
    ],
    'protection_from_alignment': [
        {'point': '防护自阵营法术的同源法术问题', 'phbRule': '防护自混乱/邪恶/善良/守序，持续10分钟/环', 'controversy': '是否可以同时对多个阵营防护（如防护自邪恶+防护自混乱）；同名法术不叠加', 'suggestion': '不同变体（protection from evil vs protection from good）可叠加', 'source': 'PHB p.266'}
    ],
    'bless': [
        {'point': '祝福术的范围和移动', 'phbRule': '影响半径50尺散布内所有友方，持续1分钟/环', 'controversy': '祝福是否影响之后进入范围的友方；祝福是否影响不死生物的恐怖判定', 'suggestion': '祝福只在施展时影响范围内目标，之后移动不影响', 'source': 'PHB p.204'}
    ],
    'color_spray': [
        {'point': '彩光喷射的HD影响和豁免', 'phbRule': '影响最多4HD生物，反射 negates', 'controversy': '彩光喷射的"blindness"是否可以被治疗；不同颜色效果是否叠加', 'suggestion': '彩光喷射效果按PHB分颜色处理，blindness可用remove blindness治疗', 'source': 'PHB p.214'}
    ],
    'fire_shield': [
        {'point': '火焰护盾的反射伤害', 'phbRule': '近战攻击者受1d6火焰伤害，你获得火焰抗性', 'controversy': '反射伤害是否触发攻击者的火焰抗性；反射伤害是否可以被避免', 'suggestion': '反射伤害是法术效果，攻击者正常做火焰抗性检定', 'source': 'PHB p.231'}
    ],
    'chain_lightning': [
        {'point': '连锁闪电的目标跳跃', 'phbRule': '主要目标受1d6/环伤害，之后跳跃到附近其他目标', 'controversy': '跳跃目标数量上限；跳跃是否可以被阻挡（如角落）', 'suggestion': '跳跃最多影响CL+1个目标，跳跃距离30尺', 'source': 'PHB p.209'}
    ],
    'heal': [
        {'point': '治疗术对死灵生物和诅咒的效果', 'phbRule': '治疗3d8+CL伤害，解除所有疾病和恶心', 'controversy': '治疗术是否完全治愈所有状态；治疗术对死灵生物是否造成3d8+CL伤害', 'suggestion': '治疗术可治愈所有HP伤害和大部分负面状态，但对死灵生物造成伤害', 'source': 'PHB p.239'}
    ],
    'delayed_blast_fireball': [
        {'point': '延爆火球的延时和爆发', 'phbRule': '可延时1轮/环后爆发，或立即爆发', 'controversy': '延时期间是否可以移动火球中心；延时期间是否可以被解除', 'suggestion': '延时火球在施展时固定中心，延时期间可被解除魔法解除', 'source': 'PHB p.221'}
    ],
    'charm_monster': [
        {'point': '魅惑怪物与魅惑人类的区别', 'phbRule': '同魅惑人类但可影响任何生物', 'controversy': '魅惑怪物是否受语言限制；魅惑怪物是否影响不死生物/异界生物', 'suggestion': '魅惑怪物不受语言限制，但受目标意志豁免', 'source': 'PHB p.210'}
    ]
}

def find_spell_end(content, start_idx, is_quoted):
    """找到法术对象的结束位置（最后一个 }）"""
    depth = 1
    i = start_idx
    while i < len(content) and depth > 0:
        if content[i] == '{':
            depth += 1
        elif content[i] == '}':
            depth -= 1
        i += 1
    return i - 1  # 返回 } 的位置

def add_conflicts_to_file():
    with open(FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    added = []
    skipped = []
    
    for spell_id, conflicts in new_conflicts.items():
        # 检查是否已有 conflicts
        if f'"{spell_id}"' in content and '"conflicts"' in content[content.find(f'"{spell_id}"'):content.find(f'"{spell_id}"')+500]:
            skipped.append(spell_id + ' (已有conflicts)')
            continue
        
        # 构建 conflicts JS 文本
        conflicts_js = ',\n    conflicts: [\n'
        for c in conflicts:
            conflicts_js += '      {\n'
            conflicts_js += f'        point: "{c["point"]}",\n'
            conflicts_js += f'        phbRule: "{c["phbRule"]}",\n'
            conflicts_js += f'        controversy: "{c["controversy"]}",\n'
            conflicts_js += f'        suggestion: "{c["suggestion"]}",\n'
            conflicts_js += f'        source: "{c["source"]}"\n'
            conflicts_js += '      },\n'
        conflicts_js += '    ]'
        
        # 尝试两种格式
        # 格式1：不带引号 id:"xxx"
        pattern1 = f'{{ id:"{spell_id}"'
        idx1 = content.find(pattern1)
        
        # 格式2：带引号 "id": "xxx"
        pattern2 = f'"id": "{spell_id}"'
        idx2 = content.find(pattern2)
        
        if idx1 != -1:
            # 找到这个对象的结束位置
            # 从 idx1 开始找匹配的大括号
            end_idx = find_spell_end(content, idx1, False)
            # 在结束 } 前插入 conflicts
            # 需要找到结束 } 前的换行
            insert_pos = end_idx  # } 的位置
            # 往前找到换行
            while insert_pos > 0 and content[insert_pos] not in ['\n', '\r']:
                insert_pos -= 1
            if insert_pos > 0:
                insert_pos += 1  # 跳到换行后
            content = content[:insert_pos] + conflicts_js + '\n' + content[insert_pos:]
            added.append(spell_id + ' (格式1)')
            
        elif idx2 != -1:
            # 带引号格式，类似处理
            end_idx = find_spell_end(content, idx2, True)
            insert_pos = end_idx
            while insert_pos > 0 and content[insert_pos] not in ['\n', '\r']:
                insert_pos -= 1
            if insert_pos > 0:
                insert_pos += 1
            content = content[:insert_pos] + conflicts_js.replace('    ', '      ') + '\n' + content[insert_pos:]
            added.append(spell_id + ' (格式2)')
        else:
            skipped.append(spell_id + ' (未找到)')
    
    # 写回文件
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✅ 已添加: {len(added)} 个')
    for a in added:
        print(f'  - {a}')
    print(f'⏭ 跳过: {len(skipped)} 个')
    for s in skipped:
        print(f'  - {s}')

if __name__ == '__main__':
    add_conflicts_to_file()
