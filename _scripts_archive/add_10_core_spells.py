# -*- coding: utf-8 -*-
"""
批量给法术加 conflicts - 简化版
只处理不带引号格式（id:"xxx"），这是大部分法术的格式
"""
import subprocess

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

# 10个核心法术的冲突数据（高质量、有真实争议）
conflicts_data = {
    'lightning_bolt': [
        {'point': '闪电箭在封闭空间的反弹', 'phbRule': '形成5尺宽、长视CL的力场，可反射', 'controversy': '闪电箭在20尺宽通道中是否填满整个通道；反射后是否损失强度', 'suggestion': '严格PHB：闪电填满通道宽度，反射后强度不减', 'source': 'PHB p.246'},
    ],
    'summon_monster_1': [
        {'point': '召唤生物的BAB和豁免', 'phbRule': '使用MM标准，但HD=法术环级', 'controversy': '召唤生物的BAB按HD全BAB还是3/4 BAB；强韧/反射/意志按何计算', 'suggestion': '使用SRD召唤表（已明确BAB/豁免/攻击加值）', 'source': 'SRD Summon Monster'},
    ],
    'web': [
        {'point': '蛛网的移除方式', 'phbRule': '火可在1d4+1轮后烧尽蛛网', 'controversy': '是否可以用锐器斩断（标准动作+力量检定）；蛛网对大型生物效果', 'suggestion': '蛛网HP 10/5尺立方，可用力量DC25或火焰移除', 'source': 'PHB p.302'},
    ],
    'mirror_image': [
        {'point': '镜影破盾机制', 'phbRule': '每次被攻击时随机选一个镜像（含真身）', 'controversy': '范围攻击是否破所有镜像；镜像是否抵消魔法飞弹（多枚）', 'suggestion': '范围攻击破所有镜像；每枚飞弹破一个镜像', 'source': 'PHB p.253, FAQ v2.0'},
    ],
    'shield': [
        {'point': '护盾术的力场免疫', 'phbRule': '免疫魔法飞弹，+4偏转AC', 'controversy': '护盾是否免疫其他力场法术（如「力场墙」「力量冲击」）', 'suggestion': '只免疫魔法飞弹，不免疫其他力场', 'source': 'PHB p.279'},
    ],
    'magic_missile': [
        {'point': '魔法飞弹的自动命中', 'phbRule': '自动命中，每枚1d4+1伤，+1枚/环级以上', 'controversy': '护盾术完全抵消；「法术失败」是否影响飞弹', 'suggestion': '护盾完全抵消；飞弹无视反射/AC', 'source': 'PHB p.252'},
    ],
    'hold_person': [
        {'point': '定身人类的施法限制', 'phbRule': '无法通过敏捷检定移动', 'controversy': '定身是否阻止言语/姿势成分法术；定身目标是否可以被治疗', 'suggestion': '定身阻止需要运动的动作；可以被治疗（不需运动）', 'source': 'PHB p.241'},
    ],
    'cure_light_wounds': [
        {'point': '治疗轻伤对死灵', 'phbRule': '治疗1d8+CL HP', 'controversy': '治疗法术对死灵生物造成等额伤害（是否允许故意瞄准）', 'suggestion': '可以故意对死灵施展治疗法术造成伤害', 'source': 'PHB p.220'},
    ],
    'bless': [
        {'point': '祝福的范围时效', 'phbRule': '半径50尺，1分钟/CL', 'controversy': '祝福是否影响施法后进入范围的友方；祝福是否影响不死生物恐怖判定', 'suggestion': '只对施展时在场的目标有效', 'source': 'PHB p.204'},
    ],
    'fly': [
        {'point': '飞行错误处理', 'phbRule': '机动性普通，速度60尺', 'controversy': '飞行中受伤害需做平衡检定（DC=伤害值）；坠落伤害如何计算', 'suggestion': '受伤害需平衡检定，失败则坠落（PHB p.227, DMG p.20）', 'source': 'PHB p.227'},
    ],
}

def find_spell_object(content, spell_id):
    """找到法术对象的开始和结束索引，返回 (start, end) 或 None"""
    # 格式1: id:"xxx"
    idx1 = content.find(f'id:"{spell_id}"')
    # 格式2: "id": "xxx"
    idx2 = content.find(f'"id": "{spell_id}"')
    
    idx = idx1 if idx1 != -1 else idx2
    if idx == -1:
        return None
    
    # 找到匹配的大括号
    depth = 0
    in_string = False
    escape = False
    start = idx
    # 往前找到 { 
    while start > 0 and content[start] != '{':
        start -= 1
    if content[start] != '{':
        return None
    
    depth = 1
    i = start + 1
    while i < len(content) and depth > 0:
        ch = content[i]
        if escape:
            escape = False
        elif ch == '\\':
            escape = True
        elif ch == '"' and not in_string:
            in_string = True
        elif ch == '"' and in_string:
            in_string = False
        elif not in_string:
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
        i += 1
    
    if depth == 0:
        return (start, i)  # i 是 } 后一个字符的位置
    return None

def make_conflicts_js(conflicts_list):
    """生成 conflicts 字段的 JS 文本"""
    lines = []
    lines.append('    conflicts: [')
    for c in conflicts_list:
        lines.append('      {')
        lines.append(f'        point: "{c["point"]}",')
        lines.append(f'        phbRule: "{c["phbRule"]}",')
        lines.append(f'        controversy: "{c["controversy"]}",')
        lines.append(f'        suggestion: "{c["suggestion"]}",')
        lines.append(f'        source: "{c["source"]}"')
        lines.append('      },')
    lines.append('    ]')
    return '\n'.join(lines)

def main():
    with open(FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    added = []
    skipped = []
    errors = []
    
    for spell_id, conflicts_list in conflicts_data.items():
        result = find_spell_object(content, spell_id)
        if result is None:
            skipped.append(f'{spell_id} (not found)')
            continue
        
        start, end = result
        
        # 检查是否已有 conflicts
        obj_text = content[start:end]
        if 'conflicts' in obj_text:
            skipped.append(f'{spell_id} (already has conflicts)')
            continue
        
        # 在 end-1 位置（} 前）插入 conflicts
        # end 是 } 后一个字符，所以 end-1 是 }
        # 需要找到 } 前的换行
        insert_pos = end - 1  # } 的位置
        while insert_pos > start and content[insert_pos] not in ['\n', '\r']:
            insert_pos -= 1
        if insert_pos > start:
            insert_pos += 1  # 跳到换行后
        
        conflicts_js = make_conflicts_js(conflicts_list)
        
        # 给前一行的最后一个字段加逗号
        # 找到 insert_pos 前的非空行
        prev_line_end = insert_pos - 1
        while prev_line_end > start and content[prev_line_end] in [' ', '\t', '\n', '\r']:
            prev_line_end -= 1
        
        if prev_line_end > start and content[prev_line_end] != ',':
            # 需要加逗号，但注意：如果前一行是 "..." 或 {...} 则需要加逗号
            # 简单处理：在 prev_line_end 后加逗号和换行
            content = content[:prev_line_end+1] + ',\n' + content[prev_line_end+1:]
            insert_pos += 2  # 补偿添加的字符
            end += 2
        
        # 插入 conflicts
        content = content[:insert_pos] + conflicts_js + '\n' + content[insert_pos:]
        added.append(spell_id)
    
    # 写回
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'[OK] Added: {len(added)}')
    for a in added:
        print(f'  + {a}')
    print(f'[SKIP] Skipped: {len(skipped)}')
    for s in skipped:
        print(f'  - {s}')
    
    # 验证语法
    result = subprocess.run(['node', '-c', FILE], capture_output=True, text=True)
    if result.returncode == 0:
        print('\n[OK] JS syntax OK')
    else:
        print(f'\n[ERROR] JS syntax error:')
        print(result.stderr)
        errors.append('syntax error')
    
    return len(errors) == 0

if __name__ == '__main__':
    success = main()
    if not success:
        print('\n请恢复备份并检查错误')
