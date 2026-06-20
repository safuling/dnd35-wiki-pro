# -*- coding: utf-8 -*-
"""
用正则表达式批量修复 conflicts 后的缺少逗号问题
"""
import re
import subprocess

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# 查找 "    ]\n    fields:" 的模式（] 后换行然后字段名）
# 注意：字段名是小写字母开头
pattern = r'(?m)^    \]\n    (?=[a-z])'
replacement = '    ],\n    '

new_content, count = re.subn(pattern, replacement, content)

if count > 0:
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'[OK] Fixed {count} missing commas')
else:
    print('[INFO] No missing commas found (pattern 1)')
    
    # 尝试其他模式：] 后有多行空行然后字段名
    pattern2 = r'(?m)^    \]\n(\s*\n)*    (?=[a-z])'
    def repl2(m):
        return m.group(0).replace(']\n', '],\n', 1)
    new_content2, count2 = re.subn(pattern2, repl2, content)
    if count2 > 0:
        with open(FILE, 'w', encoding='utf-8') as f:
            f.write(new_content2)
        print(f'[OK] Fixed {count2} missing commas (pattern 2)')

# 验证
result = subprocess.run(['node', '-c', FILE], capture_output=True, text=True)
if result.returncode == 0:
    print('[OK] JS syntax OK')
else:
    # 提取错误行号
    match = re.search(r':(\d+)\n', result.stderr)
    if match:
        line_no = int(match.group(1))
        print(f'[ERROR] Line {line_no}: {result.stderr.split(chr(10))[0]}')
        
        # 显示错误行附近内容
        with open(FILE, 'r', encoding='utf-8') as f:
            all_lines = f.readlines()
        start = max(0, line_no - 5)
        end = min(len(all_lines), line_no + 3)
        print('--- Context ---')
        for i in range(start, end):
            print(f'{i+1}: {all_lines[i]}', end='')
    else:
        print(f'[ERROR] {result.stderr}')
