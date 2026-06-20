#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""检查未标注冲突的法术 + 统计覆盖率（修正版）"""

import re

# 1. 从 spells-data.js 提取所有法术ID（去重）
with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到数组范围
start = content.find('[')
end = content.rfind(']') + 1
arr_text = content[start:end]

# 提取所有 id（两种格式）
all_ids1 = re.findall(r'id:"([a-z0-9_]+)"', arr_text)
all_ids2 = re.findall(r'"id": "([a-z0-9_]+)"', arr_text)
all_ids = list(set(all_ids1 + all_ids2))  # 去重
print(f'Total unique spells: {len(all_ids)}')

# 2. 从冲突文件提取已标注ID（去重）
annotated = set()
files = [
    'js/spells-conflicts.js',
    'js/spells-conflicts-batch2.js',
    'js/spells-conflicts-batch3.js',
    'js/spells-conflicts-batch4.js',
    'js/spells-conflicts-batch5.js'
]

for fname in files:
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            c = f.read()
        # 提取 "spell_id": [ 格式的ID
        ids = re.findall(r'"([a-z0-9_]+)":\s*\[', c)
        print(f'{fname}: {len(ids)} entries (unique: {len(set(ids))})')
        annotated.update(ids)
    except Exception as e:
        print(f'Error reading {fname}: {e}')

print(f'\nTotal annotated (unique): {len(annotated)}')
print(f'Remaining unannotated: {len(all_ids) - len(annotated)}')
print(f'Coverage: {len(annotated)/len(all_ids)*100:.1f}%')

# 3. 找出未标注的
unannotated = [id for id in all_ids if id not in annotated]
print(f'\n=== Unannotated spells (first 30) ===')
for i, id in enumerate(unannotated[:30]):
    print(f'{i+1}. {id}')
print(f'\n... total {len(unannotated)} unannotated')
