# 修复JS文件：在最后一个原有法术后添加逗号

with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 精确替换：在 "}\n\n  // ===== 第7批追加" 前加逗号
old = '}\n\n  // ===== 第7批追加：6环法术 ====='
new = '},\n\n  // ===== 第7批追加：6环法术 ====='

if old in content:
    content = content.replace(old, new, 1)
    print("找到匹配，已修复")
else:
    print("未找到精确匹配，尝试其他方法...")
    # 手动查找
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if line.strip() == '}' and i < len(lines) - 3:
            if '第7批追加' in lines[i+3]:
                lines[i] = '},'
                print(f"已修复第 {i+1} 行")
                break
    content = '\n'.join(lines)

with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成，正在验证...")
