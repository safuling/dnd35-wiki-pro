# -*- coding: utf-8 -*-
"""
简单可靠的方法：给指定法术加 conflicts
用法：在 each spell object 的 classes 行后插入 conflicts
"""
import re
import subprocess

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

# 要添加的法术和冲突数据
spells_to_add = {
    'lightning_bolt': [
        {'point': '闪电箭在狭长空间传播', 'phbRule': '形成宽5尺的力场', 'controversy': '闪电箭在通道中如何传播', 'suggestion': '严格按PHB描述', 'source': 'PHB p.246'},
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
    'cure_light_wounds': [
        {'point': '治疗法术对死灵生物', 'phbRule': '造成等额伤害', 'controversy': '是否触发特殊能力', 'suggestion': '可以故意瞄准死灵生物', 'source': 'PHB p.220'},
    ],
    'bless': [
        {'point': '祝福术的范围', 'phbRule': '半径50尺', 'controversy': '是否影响之后进入范围的友方', 'suggestion': '只在施展时影响', 'source': 'PHB p.204'},
    ],
    'fly': [
        {'point': '飞行术的错误处理', 'phbRule': '机动性普通', 'controversy': '飞行中被击落如何坠落', 'suggestion': '受伤害需做平衡检定', 'source': 'PHB p.227'},
    ],
    'heal': [
        {'point': '治疗术对死灵生物', 'phbRule': '造成3d8+CL伤害', 'controversy': '是否完全治愈所有状态', 'suggestion': '治愈所有HP伤害和负面状态', 'source': 'PHB p.239'},
    ],
}

def make_conflicts_text(spell_id):
    """生成 conflicts JS 文本"""
    conflicts = spells_to_add.get(spell_id, [])
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
    lines.append('    ],')
    return '\n'.join(lines)

# 读取文件
with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

added = []
skipped = []

# 处理每个法术
for spell_id, conflicts in spells_to_add.items():
    # 找到法术所在行
    spell_line = -1
    for i, line in enumerate(lines):
        if f'id:"{spell_id}"' in line or f'"id": "{spell_id}"' in line:
            spell_line = i
            break
    
    if spell_line == -1:
        skipped.append(spell_id + ' (not found)')
        continue
    
    # 检查是否已有 conflicts
    has_conflicts = False
    for i in range(spell_line, min(spell_line + 50, len(lines))):
        if 'conflicts' in lines[i]:
            has_conflicts = True
            break
    
    if has_conflicts:
        skipped.append(spell_id + ' (already has conflicts)')
        continue
    
    # 找到 classes 行（法术对象的倒数第二行或第三行）
    # 简单方法：从 spell_line 开始搜，找到 "classes:" 或 '"classes"' 行
    class_line = -1
    for i in range(spell_line, min(spell_line + 50, len(lines))):
        if 'classes:' in lines[i] or '"classes"' in lines[i]:
            class_line = i
            break
    
    if class_line == -1:
        skipped.append(spell_id + ' (no classes line found)')
        continue
    
    # 在 class_line 后插入 conflicts（需要给 class_line 加逗号，然后插入）
    # 检查 class_line 是否已有逗号
    if not lines[class_line].rstrip().endswith(','):
        lines[class_line] = lines[class_line].rstrip() + ',\n'
    
    # 插入 conflicts 行
    conflicts_text = make_conflicts_text(spell_id)
    if conflicts_text:
        insert_lines = conflicts_text.split('\n')
        for j, iline in enumerate(insert_lines):
            lines.insert(class_line + 1 + j, iline + '\n')
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

# 验证
result = subprocess.run(['node', '-c', FILE], capture_output=True, text=True)
if result.returncode == 0:
    print('\n[OK] JS syntax OK')
else:
    print(f'\n[ERROR] JS syntax error:')
    print(result.stderr)
