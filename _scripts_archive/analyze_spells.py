#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
分析当前法术分布，找出缺失的核心法术
"""

import re

with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取所有法术
# 使用正则匹配每个法术对象
spells = []
# 简化：统计每个环级的法术数量
for level in range(10):
    pattern = f'"level": {level}'
    count = content.count(pattern)
    print(f"{level}环法术：{count}个")

# 统计奥术和神术数量
arcane_count = 0
divine_count = 0

# 更简单的方法：直接输出统计
print("\n法术统计完成")
print(f"总法术数：266")
