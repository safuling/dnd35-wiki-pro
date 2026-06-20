#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 按行号给 JSON 格式的法术加 conflicts 字段

import json

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# antimagic_field 的 conflicts
am_conflicts = [
    {
        "point": "反魔法力场对魔法物品的影响",
        "phbRule": "抑制所有魔法效果，包括魔法物品、法术、类法术能力。",
        "controversy": "魔法武器在力场内是变'普通武器'还是完全消失？'+1长剑'变'1d8伤害长剑'还是'1d8伤害普通长剑'？",
        "suggestion": "严格PHB规则：魔法武器变普通武器（失去增强加值，但基础伤害骰保留）。",
        "source": "PHB / SRD / 3.5e FAQ v2.0"
    },
    {
        "point": "反魔法力场与法术抗力",
        "phbRule": "法术抗力在反魔法力场内无效（因为所有魔法效果被抑制）。",
        "controversy": "如果生物在力场外有魔法效果（如增益法术），进入力场后效果是否被抑制？",
        "suggestion": "进入力场的生物的魔法效果被抑制；离开力场后恢复。",
        "source": "PHB / SRD"
    }
]

# animate_dead 的 conflicts  
ad_conflicts = [
    {
        "point": "操控亡灵的HD上限与控制",
        "phbRule": "总HD不能超过施法者等级×2。亡灵服从施法者命令。",
        "controversy": "亡灵是否有自己的意志？是否需要'邪恶'属性？",
        "suggestion": "亡灵完全服从（无意志）。善良角色施展可能违反职业守则（DM判定）。",
        "source": "PHB p.199 / DMG"
    }
]

def insert_conflicts(lines, end_line_idx, conflicts_arr):
    """
    在 end_line_idx（指向 }, 或 } 所在行）之前插入 conflicts 字段。
    JSON格式：字段名带引号。
    返回新的 lines。
    """
    # end_line_idx 指向 }, 或 } 所在行
    # 我们需要在那一行的 } 之前插入
    # 但 }, 或 } 可能在行末，我们需要把这一行拆开
    
    end_line = lines[end_line_idx]
    # end_line 类似 "},\n" 或 "}\n"
    # 我们需要找到 } 的位置
    # 简单方法：在 end_line_idx 位置插入新行（把 end_line 后移）
    # 先在前一行末尾加逗号，然后插入 conflicts，然后保留 end_line
    
    # 找到前一行的末尾（不带换行）
    prev_idx = end_line_idx - 1
    while prev_idx >= 0 and lines[prev_idx].strip() == '':
        prev_idx -= 1
    
    # 在前一行末尾加逗号（如果没有）
    prev_line = lines[prev_idx]
    if not prev_line.rstrip().endswith(','):
        lines[prev_idx] = prev_line.rstrip() + ',\n'
    
    # 构建 conflicts 文本
    conf_lines = []
    conf_lines.append('  "conflicts": [\n')
    for i, c in enumerate(conflicts_arr):
        conf_lines.append('    {\n')
        fields = []
        fields.append(("point", c["point"]))
        if c.get("phbRule"):
            fields.append(("phbRule", c["phbRule"]))
        if c.get("controversy"):
            fields.append(("controversy", c["controversy"]))
        if c.get("suggestion"):
            fields.append(("suggestion", c["suggestion"]))
        if c.get("source"):
            fields.append(("source", c["source"]))
        for j, (k, v) in enumerate(fields):
            comma = ',' if j < len(fields) - 1 else ''
            conf_lines.append(f'      "{k}": {json.dumps(v, ensure_ascii=False)}{comma}\n')
        conf_lines.append('    }')
        if i < len(conflicts_arr) - 1:
            conf_lines[-1] += ','
        conf_lines.append('\n')
    conf_lines.append('  ]\n')
    
    # 插入到 end_line_idx 位置（在 end_line 之前）
    lines[end_line_idx:end_line_idx] = conf_lines
    
    return lines

# 处理 antimagic_field（结束于 line 3458，0-indexed 是 3457）
# 注意：之前读取时 line 3458 是 }, 所在行（1-indexed）
# Python 的 0-indexed：line 3458 (1-indexed) = index 3457
# 但这是我之前读取时的行号，现在文件可能已修改（我加了11个法术的 conflicts）
# 所以需要重新找位置

# 重新找 antimagic_field 的结束行
def find_obj_end_line(lines, spell_id):
    """找法术对象的结束行号（0-indexed）"""
    in_obj = False
    depth = 0
    for i, line in enumerate(lines):
        if f'"id": "{spell_id}"' in line:
            in_obj = True
            depth = 1  # 已经算上 { （但这一行可能没有 {，下一行才有）
            # 实际上这一行有 { （因为格式是 { "id": ... }）
            # 但 { 可能在这一行，也可能在上一行
            # 简单方法：从这一行开始数 {
            depth = line.count('{') - line.count('}')
            continue
        if in_obj:
            depth += line.count('{') - line.count('}')
            if depth == 0:
                return i  # 这一行是 }, 所在行
    return -1

# 找结束行
am_end = find_obj_end_line(lines, "antimagic_field")
ad_end = find_obj_end_line(lines, "animate_dead")

print(f"antimagic_field 结束行: {am_end} (1-indexed: {am_end+1})")
print(f"animate_dead 结束行: {ad_end} (1-indexed: {ad_end+1})")

if am_end >= 0:
    # 检查是否已有 conflicts
    obj_lines = lines[am_end-50:am_end]  # 向前找50行
    has_conflicts = any('"conflicts"' in l for l in obj_lines)
    if not has_conflicts:
        lines = insert_conflicts(lines, am_end, am_conflicts)
        print("已添加 conflicts → antimagic_field")
        # 重新找 ad_end（因为行号可能变了）
        ad_end = find_obj_end_line(lines, "animate_dead")
    else:
        print("antimagic_field 已有 conflicts，跳过")

if ad_end >= 0:
    obj_lines = lines[ad_end-50:ad_end]
    has_conflicts = any('"conflicts"' in l for l in obj_lines)
    if not has_conflicts:
        lines = insert_conflicts(lines, ad_end, ad_conflicts)
        print("已添加 conflicts → animate_dead")
    else:
        print("animate_dead 已有 conflicts，跳过")

# 写回
with open(FILE, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("完成！")
