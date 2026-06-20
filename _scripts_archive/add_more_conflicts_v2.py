# -*- coding: utf-8 -*-
"""
用简单可靠的方法给法术加 conflicts：直接字符串替换
每个法术对象以 }, 结束，我们在 }, 前插入 conflicts
"""
import re

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

# 冲突数据（简化版，只加1-2个冲突点）
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

def make_conflicts_text(spell_id):
    """生成 conflicts JS 文本"""
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
        content = f.read()
    
    added = []
    skipped = []
    
    for spell_id in conflicts_map.keys():
        # 检查是否已有 conflicts
        # 简单检查：在 id 后面2000字符内是否有 "conflicts"
        id_pattern1 = f'id:"{spell_id}"'
        id_pattern2 = f'"id": "{spell_id}"'
        
        idx1 = content.find(id_pattern1)
        idx2 = content.find(id_pattern2)
        
        idx = idx1 if idx1 != -1 else idx2
        if idx == -1:
            skipped.append(spell_id + ' (未找到)')
            continue
        
        # 检查是否已有 conflicts
        chunk = content[idx:idx+2000]
        if 'conflicts' in chunk:
            skipped.append(spell_id + ' (已有conflicts)')
            continue
        
        # 找到这个对象的结束 },
        # 法术对象以 }, 结束（最后一个除外，但文件里最后一个也有 ,）
        # 我们从 idx 开始，找匹配的括号
        depth = 0
        in_string = False
        escape_next = False
        end_idx = -1
        
        for i in range(idx, len(content)):
            ch = content[i]
            if escape_next:
                escape_next = False
                continue
            if ch == '\\':
                escape_next = True
                continue
            if ch == '"' and not in_string:
                in_string = True
                continue
            if ch == '"' and in_string:
                in_string = False
                continue
            if in_string:
                continue
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    end_idx = i
                    break
        
        if end_idx == -1:
            skipped.append(spell_id + ' (未找到结束)')
            continue
        
        # 在 end_idx 前插入 conflicts
        # end_idx 是 } 的位置，我们需要找到 } 前的换行
        insert_pos = end_idx
        while insert_pos > idx and content[insert_pos] not in ['\n', '\r']:
            insert_pos -= 1
        if insert_pos > idx:
            insert_pos += 1  # 跳到换行后
        
        conflicts_text = make_conflicts_text(spell_id)
        if conflicts_text:
            # 在 } 前一行插入
            # 需要给前一个字段加逗号
            # 找到前一个非空行的结尾
            prev_line_end = insert_pos - 1
            while prev_line_end > idx and content[prev_line_end] in [' ', '\t', '\n', '\r']:
                prev_line_end -= 1
            
            # 如果前一行的最后一个非空白字符不是逗号，加逗号
            if prev_line_end > idx and content[prev_line_end] != ',':
                content = content[:prev_line_end+1] + ',\n' + content[prev_line_end+1:]
                insert_pos += 2  # 补偿添加的换行
                end_idx += 2
            
            content = content[:insert_pos] + conflicts_text + '\n' + content[insert_pos:]
            added.append(spell_id)
    
    # 写回
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'[OK] Added: {len(added)} spells')
    for a in added:
        print(f'  + {a}')
    print(f'[SKIP] Skipped: {len(skipped)} spells')
    for s in skipped:
        print(f'  - {s}')

if __name__ == '__main__':
    add_conflicts()
