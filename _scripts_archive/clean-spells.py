#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
清理spells-data.js中的重复法术条目
方法：直接处理文本，提取每个法术对象，按ID去重，然后重新组合
"""

import re
import sys

spells_file = 'js/spells-data.js'
backup_file = 'js/spells-data.js.bak5'

# 读取文件
with open(spells_file, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"文件大小: {len(content)} 字符")

# 备份
with open(backup_file, 'w', encoding='utf-8') as f:
    f.write(content)
print(f"已备份到: {backup_file}")

# 提取SPELLS数组的内容
# 找到 "const SPELLS = [" 和最后的 "];"
match = re.search(r'const SPELLS\s*=\s*\[([\s\S]*?)\];\s*$', content)
if not match:
    print("错误: 无法找到SPELLS数组！")
    sys.exit(1)

spells_text = match.group(1)
print(f"SPELLS数组内容长度: {len(spells_text)} 字符")

# 使用正则表达式分割各个法术对象
# 每个法术对象以 "  {" 开始（可能有缩进）
spell_pattern = re.compile(r'\s*\{\s*\n\s*id:')
spell_blocks = spell_pattern.split(spells_text)

# 第一个块是空或注释，忽略
if spell_blocks[0].strip() in ('', ',', ',\n', '\n', ',\n\n'):
    spell_blocks = spell_blocks[1:]
else:
    # 如果第一个块不是空的，它可能是数组开头到第一个对象之间的内容
    print(f"警告: 第一个块不是空的: {spell_blocks[0][:100]}...")

print(f"\n找到 {len(spell_blocks)} 个法术块")

# 恢复每个块的开头（split时去掉了 "  {" 部分）
spell_objects = []
for i, block in enumerate(spell_blocks):
    # 添加回开头
    full_block = '  {' + block
    
    # 提取id
    id_match = re.search(r"id:\s*['\"]([^'\"]+)['\"]", full_block)
    if id_match:
        spell_id = id_match.group(1)
        spell_objects.append({
            'id': spell_id,
            'text': full_block,
            'index': i
        })
    else:
        print(f"警告: 块 {i} 没有找到id")

print(f"成功解析 {len(spell_objects)} 个法术对象")

# 去重（保留第一个出现的）
seen_ids = {}
unique_objects = []
duplicates = []

for obj in spell_objects:
    if obj['id'] in seen_ids:
        duplicates.append(obj)
    else:
        seen_ids[obj['id']] = True
        unique_objects.append(obj)

print(f"\n去重结果:")
print(f"  唯一法术: {len(unique_objects)}")
print(f"  重复条目: {len(duplicates)}")

if duplicates:
    print(f"\n重复的法术（前10个）:")
    for dup in duplicates[:10]:
        print(f"  - {dup['id']} (第{dup['index']}个)")

# 重新组合文件
header = """// D&D 3.5e 法术数据库（已去重）
// 自动生成于: 2026-06-20
// 原始条目: {} 
// 去重后: {}

const SPELLS = [
""".format(len(spell_objects), len(unique_objects))

footer = '\n];\n'

# 组合法术文本
spells_text_new = ',\n'.join([obj['text'] for obj in unique_objects])

new_content = header + spells_text_new + footer

# 写入文件
with open(spells_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\n✅ 已写入清理后的文件: {spells_file}")
print(f"   条目数: {len(unique_objects)}")

# 验证
print("\n验证文件...")
try:
    with open(spells_file, 'r', encoding='utf-8') as f:
        test_content = f.read()
    
    # 检查基本结构
    if 'const SPELLS = [' in test_content and '];' in test_content:
        print("  ✅ 文件结构正确")
    
    # 统计id数量
    ids_found = re.findall(r"id:\s*['\"]([^'\"]+)['\"]", test_content)
    unique_ids = set(ids_found)
    
    print(f"  找到 {len(ids_found)} 个id")
    print(f"  唯一id: {len(unique_ids)}")
    
    if len(ids_found) == len(unique_ids):
        print("  ✅ 无重复条目")
    else:
        print(f"  ⚠️ 仍有 {len(ids_found) - len(unique_ids)} 个重复")
        
except Exception as e:
    print(f"  ❌ 验证失败: {e}")
    print("正在恢复备份...")
    with open(backup_file, 'r', encoding='utf-8') as f:
        backup_content = f.read()
    with open(spells_file, 'w', encoding='utf-8') as f:
        f.write(backup_content)
    print("  已恢复备份")

print("\n完成！")
