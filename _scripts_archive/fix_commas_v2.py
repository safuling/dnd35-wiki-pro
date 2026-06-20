# -*- coding: utf-8 -*-
"""
批量修复 conflicts 后的缺少逗号问题
方法：找到所有 conflicts 数组的结束 ]，如果后面还有字段，则加逗号
"""
FILE = r'C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js'

with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 处理：查找 "    ]," 或 "    ]" 后面跟着字段的情况
fixed = 0
new_lines = []
i = 0
while i < len(lines):
    line = lines[i]
    # 如果这一行是 "    ]," 或 "    ]"（后面可能没逗号）
    # 并且下一行是字段名（如 "    arcane:"）
    if line.strip() == '],':
        # 已有逗号，没问题
        new_lines.append(line)
        i += 1
    elif line.strip() == ']':
        # 缺少逗号，检查下一行
        if i + 1 < len(lines) and lines[i+1].strip() and not lines[i+1].strip().startswith('}'):
            # 下一行是字段，需要加逗号
            new_lines.append('    ],\n')
            fixed += 1
            i += 1
            continue
        else:
            new_lines.append(line)
            i += 1
    else:
        new_lines.append(line)
        i += 1

if fixed > 0:
    with open(FILE, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f'[OK] Fixed {fixed} missing commas')
else:
    print('[INFO] No missing commas found')

# 验证
import subprocess
result = subprocess.run(['node', '-c', FILE], capture_output=True, text=True)
if result.returncode == 0:
    print('[OK] JS syntax OK')
else:
    # 提取错误行号
    import re
    match = re.search(r'line (\d+)', result.stderr)
    if match:
        line_no = int(match.group(1))
        print(f'[ERROR] Line {line_no}: {result.stderr.split(chr(10))[0]}')
    else:
        print(f'[ERROR] {result.stderr}')
