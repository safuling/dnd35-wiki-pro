# -*- coding: utf-8 -*-
"""
批量修复 conflicts 后的缺少逗号问题
查找所有 "    ]\n    arcane:" 或 "    ]\n    classes:" 并加逗号
"""
import re

FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# 查找所有 "    ]\n    " 后面跟着字段名的情况（说明缺少逗号）
# 模式：](换行)(空格)字段名:
pattern = r'    \]\n    (?=[a-z])'
replacement = '    ],\n    '

count = 0
new_content = ''
i = 0
while i < len(content):
    # 查找 "    ]\n    "
    if content[i:i+7] == '    ]\n' and i+7 < len(content) and content[i+7:i+11] == '    ':
        # 检查下一行是否以字段名开头（小写字母）
        if i+11 < len(content) and content[i+11].islower():
            # 需要加逗号
            new_content += '    ],'
            i += 7  # 跳过 "    ]\n"
            count += 1
            continue
    new_content += content[i]
    i += 1

if count > 0:
    with open(FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'[OK] Fixed {count} missing commas')
else:
    print('[INFO] No missing commas found')

# 验证语法
import subprocess
result = subprocess.run(['node', '-c', FILE], capture_output=True, text=True)
if result.returncode == 0:
    print('[OK] JS syntax OK')
else:
    print(f'[ERROR] JS syntax error:\n{result.stderr}')
