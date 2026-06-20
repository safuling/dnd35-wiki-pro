#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 在法术弹窗中添加"查看完整详情"链接
with open('intro.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 查找并替换弹窗末尾部分
old_str = '''    </div>
  `;
  document.getElementById('spellModal').classList.add('active');
}'''

new_str = '''    </div>
    <div style="margin-top:16px;text-align:center;">
      <a href="spell-detail.html?id=${s.id}" style="color:var(--accent);font-weight:600;text-decoration:none;padding:8px 16px;background:var(--bg-main);border-radius:6px;border:1px solid var(--accent);display:inline-block;">📖 查看完整详情</a>
    </div>
  `;
  document.getElementById('spellModal').classList.add('active');
}'''

if old_str in content:
    content = content.replace(old_str, new_str)
    with open('intro.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('[OK] 已更新 intro.html，添加查看完整详情链接')
else:
    print('[WARN] 未找到匹配字符串，尝试其他方法')
    # 打印附近的字符以调试
    idx = content.find('spellModal').classList.add')
    if idx > 0:
        print(f"找到位置 {idx}，附近内容：")
        print(repr(content[idx-50:idx+100]))
