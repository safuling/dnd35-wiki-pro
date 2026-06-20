#!/usr/bin/env python3
# 打印指定法术的完整对象文本
import sys

FILE = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

def find_obj(content, spell_id):
    # 找法术对象的开始和结束位置
    for pattern in [f'"id": "{spell_id}"', f'id:"{spell_id}"']:
        idx = content.find(pattern)
        if idx >= 0:
            break
    else:
        return None
    
    # 找匹配的 }
    pos = idx
    depth = 0
    in_str = False
    while pos < len(content):
        ch = content[pos]
        if ch == '\\' and in_str:
            pos += 2
            continue
        if ch == '"' and not in_str:
            in_str = True
        elif ch == '"' and in_str:
            in_str = False
        elif not in_str:
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    end = pos
                    return content[idx:end+1]
        pos += 1
    return None

for sid in ["antimagic_field", "animate_dead"]:
    obj = find_obj(content, sid)
    if obj:
        print(f"=== {sid} ===")
        print(obj)
        print()
    else:
        print(f"未找到: {sid}")
