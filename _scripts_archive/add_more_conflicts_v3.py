# -*- coding: utf-8 -*-
"""
简单方法：直接用字符串替换给法术加 conflicts
在每个法术的 classes: {...} 行后插入 conflicts
"""
import re

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

# 冲突数据
conflicts_map = {
    'fireball': [
        {'point': '火球术在角落的反弹伤害计算', 'phbRule': '标准反射豁免减半伤害', 'controversy': '火球在封闭空间是否对施法者造成伤害', 'suggestion': '严格按PHB：施法者需站在安全距离', 'source': 'PHB p.231'},
    ],
    'lightning_bolt': [
        {'point': '闪电箭在狭长空间传播', 'phbRule': '形成宽5尺的力场', 'controversy': '闪电箭在通道中如何传播', 'suggestion': '严格按PHB描述', 'source': 'PHB p.246'},
    ],
    'charm_person': [
        {'point': '魅惑效果的持续时间', 'phbRule': '1d6分钟/环', 'controversy': '被魅惑者发现真相后是否立即解除', 'suggestion': '发现后可做意志豁免解除', 'source': 'PHB p.210'},
    ],
    'sleep': [
        {'point': '睡眠术对已经睡眠的生物', 'phbRule': '影响最多4HD', 'controversy': '已经自然睡眠的生物是否受影响', 'suggestion': '自然睡眠的生物不受影响', 'source': 'PHB p.280'},
    ],
    'summon_monster_1': [
        {'point': '召唤怪物的属性值', 'phbRule': '按MM标准', 'controversy': 'BAB、豁免如何计算', 'suggestion': '使用SRD标准表', 'source': 'SRD'},
    ],
    'web': [
        {'point': '蛛网术的移除方式', 'phbRule': '火可以燃烧蛛网', 'controversy': '用锐器是否可以斩断', 'suggestion': '蛛网可用力量检定DC25移除', 'source': 'PHB p.302'},
    ],
    'mirror_image': [
        {'point': '镜影术破盾顺序', 'phbRule': '攻击者随机选一个镜像', 'controversy': '范围攻击如何破盾', 'suggestion': '范围攻击破所有镜像', 'source': 'PHB p.253'},
    ],
    'shield': [
        {'point': '护盾术是否应对所有力场', 'phbRule': '应对魔法飞弹', 'controversy': '是否应对其他力场法术', 'suggestion': '只应对魔法飞弹', 'source': 'PHB p.279'},
    ],
    'magic_missile': [
        {'point': '魔法飞弹的自动命中', 'phbRule': '自动命中', 'controversy': '是否可以避免', 'suggestion': '护盾术完全抵消', 'source': 'PHB p.252'},
    ],
    'hold_person': [
        {'point': '定身人类的属性伤害', 'phbRule': '无法移动', 'controversy': '是否阻止法术施展', 'suggestion': '无法执行需要运动的动作', 'source': 'PHB p.241'},
    ],
    'fly': [
        {'point': '飞行术的错误处理', 'phbRule': '机动性普通', 'controversy': '飞行中被击落如何坠落', 'suggestion': '受伤害需做平衡检定', 'source': 'PHB p.227'},
    ],
    'cure_light_wounds': [
        {'point': '治疗法术对死灵生物', 'phbRule': '造成等额伤害', 'controversy': '是否触发特殊能力', 'suggestion': '可以故意瞄准死灵生物', 'source': 'PHB p.220'},
    ],
    'protection_from_alignment': [
        {'point': '防护自阵营同名法术', 'phbRule': '不同变体可叠加', 'controversy': '是否可以同时防护多个阵营', 'suggestion': '不同变体可叠加', 'source': 'PHB p.266'},
    ],
    'bless': [
        {'point': '祝福术的范围', 'phbRule': '半径50尺', 'controversy': '是否影响之后进入范围的友方', 'suggestion': '只在施展时影响', 'source': 'PHB p.204'},
    ],
    'color_spray': [
        {'point': '彩光喷射的豁免', 'phbRule': '反射 negates', 'controversy': 'blindness是否可治疗', 'suggestion': '可用remove blindness治疗', 'source': 'PHB p.214'},
    ],
    'fire_shield': [
        {'point': '火焰护盾的反射伤害', 'phbRule': '攻击者受1d6伤害', 'controversy': '是否触发火焰抗性', 'suggestion': '攻击者正常做抗性检定', 'source': 'PHB p.231'},
    ],
    'chain_lightning': [
        {'point': '连锁闪电的跳跃', 'phbRule': '跳跃到附近目标', 'controversy': '跳跃是否可被阻挡', 'suggestion': '跳跃距离30尺', 'source': 'PHB p.209'},
    ],
    'heal': [
        {'point': '治疗术对死灵生物', 'phbRule': '造成3d8+CL伤害', 'controversy': '是否完全治愈所有状态', 'suggestion': '治愈所有HP伤害和负面状态', 'source': 'PHB p.239'},
    ],
    'delayed_blast_fireball': [
        {'point': '延爆火球的延时', 'phbRule': '可延时1轮/环', 'controversy': '是否可以移动中心', 'suggestion': '施展时固定中心', 'source': 'PHB p.221'},
    ],
    'charm_monster': [
        {'point': '魅惑怪物的影响', 'phbRule': '可影响任何生物', 'controversy': '是否受语言限制', 'suggestion': '不受语言限制', 'source': 'PHB p.210'},
    ],
}

def make_conflicts_js(spell_id):
    """生成 conflicts JS 文本（不带引号格式）"""
    conflicts = conflicts_map.get(spell_id, [])
    if not conflicts:
        return None
    
    lines = []
    lines.append('    conflicts: [')
    for c in conflicts:
        lines.append('      {')
        lines.append(f'        point: "{c["point"]}",')
        lines.append(f'        phbRule: "{c["phbRule"]}",')
        lines.append(f'        controversy: "{c["controversy"]}",')
        lines.append(f'        suggestion: "{c["suggestion"]}",')
        lines.append(f'        source: "{c["source"]}"')
        lines.append('      },')
    lines.append('    ]')
    return '\n'.join(lines)

def add_conflicts():
    with open(FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # 处理每个法术
    added = []
    skipped = []
    
    # 从后往前处理（避免行号偏移问题）
    for spell_id in reversed(list(conflicts_map.keys())):
        # 找到法术所在行
        spell_line = -1
        for i, line in enumerate(lines):
            if f'id:"{spell_id}"' in line or f'"id": "{spell_id}"' in line:
                spell_line = i
                break
        
        if spell_line == -1:
            skipped.append(spell_id + ' (not found)')
            continue
        
        # 检查是否已有 conflicts（从 spell_line 开始搜20行）
        has_conflicts = False
        for i in range(spell_line, min(spell_line + 30, len(lines))):
            if 'conflicts' in lines[i]:
                has_conflicts = True
                break
        
        if has_conflicts:
            skipped.append(spell_id + ' (already has conflicts)')
            continue
        
        # 找到法术对象的结束 }（从 spell_line 开始搜，找匹配的括号）
        depth = 0
        end_line = -1
        for i in range(spell_line, len(lines)):
            depth += lines[i].count('{') - lines[i].count('}')
            if depth == 0 and i > spell_line:
                end_line = i
                break
        
        if end_line == -1:
            skipped.append(spell_id + ' (no end found)')
            continue
        
        # 在 end_line 前插入 conflicts
        # end_line 是 } 所在的行，我们需要在 } 前一行插入
        conflicts_js = make_conflicts_js(spell_id)
        if conflicts_js:
            # 给前一行的 classes: {...} 加逗号（如果还没有）
            prev_line = end_line - 1
            while prev_line >= spell_line and lines[prev_line].strip() == '':
                prev_line -= 1
            
            if prev_line >= spell_line and not lines[prev_line].rstrip().endswith(','):
                lines[prev_line] = lines[prev_line].rstrip() + ',\n'
            
            # 插入 conflicts 行
            insert_lines = conflicts_js.split('\n')
            for j, iline in enumerate(insert_lines):
                lines.insert(end_line + j, iline + '\n')
            
            added.append(spell_id)
    
    # 写回
    with open(FILE, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    
    print(f'[OK] Added: {len(added)} spells')
    for a in added:
        print(f'  + {a}')
    print(f'[SKIP] Skipped: {len(skipped)} spells')
    for s in skipped:
        print(f'  - {s}')

if __name__ == '__main__':
    add_conflicts()
