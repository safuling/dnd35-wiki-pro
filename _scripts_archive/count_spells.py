import re

with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 统计法术数量 (查找 "id:" 字段)
spells = re.findall(r'"id":\s*"([^"]+)"', content)
print(f'当前法术数量: {len(spells)}')
print('\n按环级统计:')
for level in range(10):
    count = len([s for s in spells if f'"level": {level}' in content and f'"id"' in content])
    # 更精确的统计
print('(需要更精确统计，稍后处理)')

# 显示最后10个法术
print('\n最后10个法术:')
for s in spells[-10:]:
    print(f'  - {s}')
