# 修复JS文件语法错误：在最后一个原有法术和新法术之间添加逗号

with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到 "];" 的位置
end_marker = '];'
end_pos = content.rfind(end_marker)

# 向前找到最后一个 "}" (即最后一个原有法术的结束)
# 在最后一个 "}" 后面添加逗号
# 策略：找到 "}\n\n  // =====" 这样的模式，在 "}" 后加逗号

import re

# 模式：}\n\n  // ===== 第7批追加
pattern = r'}(\n\n  // ===== 第7批追加)'
replacement = r'},\1'

new_content = re.sub(pattern, replacement, content)

if new_content == content:
    print("未找到需要修复的模式，尝试其他方法...")
    # 手动查找并修复
    # 找到最后一处 "}\n\n  // ====="
    lines = content.split('\n')
    for i in range(len(lines) - 3):
        if lines[i].strip() == '}' and lines[i+2].strip().startswith('// ===== 第7批追加'):
            lines[i] = '},'
            print(f"在第 {i+1} 行添加了逗号")
            break
    new_content = '\n'.join(lines)
else:
    print("已通过正则修复")

# 写回文件
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("语法修复完成，正在验证...")

# 验证语法
import subprocess
result = subprocess.run(['node', '-c', 'js/spells-data.js'], capture_output=True, text=True)
if result.returncode == 0:
    print("✓ JS语法正确！")
else:
    print("✗ JS语法仍有错误：")
    print(result.stderr)
