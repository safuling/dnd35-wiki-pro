#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
快速生成剩余核心种族页面
基于已有的人类页面模板，替换关键信息
"""

import re

# 读取人类页面作为模板
template_path = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\races\human.html"
with open(template_path, 'r', encoding='utf-8') as f:
    template = f.read()

# 种族数据
races = [
    {
        "id": "halfling",
        "name_en": "Halfling",
        "name_zh": "半身人",
        "emoji": "🧒",
        "icon": "🧒🌿🍃",
        "stat_adjustments": "力量-2，敏捷+2，体质+2",
        "size": "小型",
        "speed": "20英尺",
        "vision": "正常视觉",
        "languages": "通用语、半身人语",
        "favored_class": "漫游者（男性）、吟游诗人（女性）",
        "src_page": "20",
        "flavor": "乐观·敏捷·家庭导向",
        "intro": "半身人是费伦大陆最<strong>乐观</strong>且<strong>敏捷</strong>的种族。他们喜欢舒适的家园，但也会因为冒险精神而离开家乡。",
        "stat_table": """        <tr><td>力量（STR）</td><td><span style="color:var(--accent-red);">-2</span></td><td>近战伤害-1</td></tr>
          <tr><td>敏捷（DEX）</td><td><strong>+2</strong></td><td>远程/AC</td></tr>
          <tr><td>体质（CON）</td><td><strong>+2</strong></td><td>额外HP</td></tr>
          <tr><td>智力（INT）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>感知（WIS）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>魅力（CHA）</td><td>±0</td><td>无调整</td></tr>""",
        "special_abilities": """        <li><strong>小型体型</strong>：AC +1偏转加值，攻击+1尺寸加值。但力量-2导致近战伤害-1。</li>
          <li><strong>投掷武器娴熟</strong>：使用投掷武器（飞镖、投石索）时，不会受到小型体型的<strong>力量惩罚</strong>。</li>
          <li><strong>回避巨人+4</strong>：对抗体型为大型或更大的生物时，AC和豁免有+4种族加值。</li>
          <li><strong>攀爬/跳跃+2</strong>：种族加值，使半身人成为优秀的侦察兵。</li>
          <li><strong>偏爱职业限制</strong>：男性偏爱漫游者，女性偏爱吟游诗人。</li>""",
        "mechanics_html": """      <table class="wiki-table">
        <thead>
          <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
        </thead>
        <tbody>
          <tr><td>敏捷+2（远程/AC）</td><td>力量-2（近战伤害-1）</td><td>适合远程/技能型</td></tr>
          <tr><td>体质+2（HP+1/级）</td><td>小型体型（武器限制）</td><td>某些武器无法使用</td></tr>
          <tr><td>小型体型（AC+1/攻击+1）</td><td>——</td><td>前排生存能力强</td></tr>
        </tbody>
      </table>""",
        "prev_page": "dwarf.html",
        "prev_name": "矮人",
        "next_page": "gnome.html",
        "next_name": "侏儒"
    },
    {
        "id": "gnome",
        "name_en": "Gnome",
        "name_zh": "侏儒",
        "emoji": "🧙",
        "icon": "🧙🔮📚",
        "stat_adjustments": "力量-2，敏捷+2，智力+2",
        "size": "小型",
        "speed": "20英尺",
        "vision": "低光视觉 60英尺，黑暗视觉 60英尺",
        "languages": "通用语、侏儒语、地精语、土族语",
        "favored_class": "法师（男性）、炼金术师（女性）",
        "src_page": "22",
        "flavor": "聪明·好奇·魔力亲和",
        "intro": "侏儒是费伦大陆最<strong>聪明</strong>且<strong>好奇</strong>的种族。他们喜欢收集宝石、制作机关、研究魔法。",
        "stat_table": """        <tr><td>力量（STR）</td><td><span style="color:var(--accent-red);">-2</span></td><td>近战伤害-2</td></tr>
          <tr><td>敏捷（DEX）</td><td><strong>+2</strong></td><td>远程/AC</td></tr>
          <tr><td>体质（CON）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>智力（INT）</td><td><strong>+2</strong></td><td>法术DC+1</td></tr>
          <tr><td>感知（WIS）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>魅力（CHA）</td><td>±0</td><td>无调整</td></tr>""",
        "special_abilities": """        <li><strong>低光视觉+黑暗视觉</strong>：双重视觉能力，在昏暗和全黑环境中都能视物。</li>
          <li><strong>精通地精类语言</strong>：自动会说地精语、兽人语、土族语、黑暗语。</li>
          <li><strong>对抗地精/巨人+1</strong>：在对抗地精类（地精、兽人等）和巨人类时，攻击和伤害+1。</li>
          <li><strong>法术专精（ILLUSION）</strong>：对抗幻术系法术的豁免有<strong>+2种族加值</strong>。</li>
          <li><strong>偏爱职业限制</strong>：男性偏爱法师，女性偏爱炼金术师（非核心职业）。</li>""",
        "mechanics_html": """      <table class="wiki-table">
        <thead>
          <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
        </thead>
        <tbody>
          <tr><td>智力+2（法术DC+1）</td><td>力量-2（近战伤害-2）</td><td>最佳法师种族之一</td></tr>
          <tr><td>敏捷+2（远程/AC）</td><td>小型体型</td><td>前排易被打</td></tr>
          <tr><td>双重视觉（低光+黑暗）</td><td>——</td><td>地下探险优秀</td></tr>
        </tbody>
      </table>""",
        "prev_page": "halfling.html",
        "prev_name": "半身人",
        "next_page": "half-elf.html",
        "next_name": "半精灵"
    },
    {
        "id": "half-elf",
        "name_en": "Half-Elf",
        "name_zh": "半精灵",
        "emoji": "🧝",
        "icon": "🧝🌿🔄",
        "stat_adjustments": "无（全±0），可选择精灵或人类的偏爱职业",
        "size": "中型",
        "speed": "30英尺",
        "vision": "低光视觉 60英尺",
        "languages": "通用语、精灵语、自选1门",
        "favored_class": "任意（选择精灵或人类的偏爱职业）",
        "src_page": "24",
        "flavor": "孤独·双血统·无归属",
        "intro": "半精灵是<strong>精灵与人类的混血</strong>。他们通常<strong>被两个世界排斥</strong>——精灵认为他们'不够优雅'，人类认为他们'异类'。",
        "stat_table": """        <tr><td>力量（STR）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>敏捷（DEX）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>体质（CON）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>智力（INT）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>感知（WIS）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>魅力（CHA）</td><td>±0</td><td>无调整</td></tr>""",
        "special_abilities": """        <li><strong>无属性调整</strong>：半精灵<strong>没有任何属性调整</strong>。这是重大劣势。</li>
          <li><strong>低光视觉 60英尺</strong>：继承自精灵血统，在昏暗光线下可视物距离翻倍。</li>
          <li><strong>免疫魔法睡眠</strong>：继承自精灵血统。</li>
          <li><strong>精灵血统</strong>：对于特定职业/法术，视为<strong>精灵</strong>。</li>
          <li><strong>人类血统</strong>：对于特定职业/法术，视为<strong>人类</strong>。</li>
          <li><strong>偏爱职业：任意</strong>：半精灵可以选择<strong>任意职业</strong>作为偏爱职业。</li>""",
        "mechanics_html": """      <table class="wiki-table">
        <thead>
          <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
        </thead>
        <tbody>
          <tr><td>无兼职惩罚</td><td>无属性调整</td><td>Mechanically最弱核心种族</td></tr>
          <tr><td>低光视觉</td><td>——</td><td>夜间作战能力</td></tr>
          <tr><td>双血统认定</td><td>——</td><td>某些法术/物品的特殊互动</td></tr>
        </tbody>
      </table>""",
        "prev_page": "gnome.html",
        "prev_name": "侏儒",
        "next_page": "half-orc.html",
        "next_name": "半兽人"
    },
    {
        "id": "half-orc",
        "name_en": "Half-Orc",
        "name_zh": "半兽人",
        "emoji": "👹",
        "icon": "👹⚔️🔥",
        "stat_adjustments": "力量+2，体质+2，智力-2，魅力-2",
        "size": "中型",
        "speed": "30英尺",
        "vision": "黑暗视觉 60英尺",
        "languages": "通用语、兽人语",
        "favored_class": "野蛮人（男性）、战士（女性）",
        "src_page": "26",
        "flavor": "野蛮·直率·被排斥",
        "intro": "半兽人是<strong>兽人与人类的混血</strong>。他们通常<strong>被文明社会排斥</strong>，但也因此变得更加<strong>野蛮和直率</strong>。",
        "stat_table": """        <tr><td>力量（STR）</td><td><strong>+2</strong></td><td>近战伤害+1</td></tr>
          <tr><td>敏捷（DEX）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>体质（CON）</td><td><strong>+2</strong></td><td>额外HP</td></tr>
          <tr><td>智力（INT）</td><td><span style="color:var(--accent-red);">-2</span></td><td>技能点-1/级</td></tr>
          <tr><td>感知（WIS）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>魅力（CHA）</td><td><span style="color:var(--accent-red);">-2</span></td><td>交涉-1</td></tr>""",
        "special_abilities": """        <li><strong>力量+2/体质+2/智力-2/魅力-2</strong>：高STR/CON使半兽人成为最佳近战种族，但INT/CHA惩罚严重影响技能和交际。</li>
          <li><strong>黑暗视觉 60英尺</strong>：继承自兽人血统，在完全黑暗中可视物60英尺。</li>
          <li><strong>兽人血统</strong>：对于特定职业/法术，视为<strong>兽人</strong>。</li>
          <li><strong>偏爱职业限制</strong>：男性偏爱野蛮人，女性偏爱战士。</li>
          <li><strong>社会排斥</strong>：半兽人在文明社会中通常受到歧视。</li>""",
        "mechanics_html": """      <table class="wiki-table">
        <thead>
          <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
        </thead>
        <tbody>
          <tr><td>力量+2（近战伤害+1）</td><td>智力-2（技能点-1/级）</td><td>严重限制技能型构建</td></tr>
          <tr><td>体质+2（HP+1/级）</td><td>魅力-2（交涉-1）</td><td>外交型角色极差</td></tr>
          <tr><td>黑暗视觉 60英尺</td><td>社会排斥（DM裁定）</td><td>可能影响剧情</td></tr>
        </tbody>
      </table>""",
        "prev_page": "half-elf.html",
        "prev_name": "半精灵",
        "next_page": "human.html",
        "next_name": "人类（返回）"
    }
]

# 生成页面
def generate_race_page(race):
    html = template
    
    # 替换基本信息
    html = html.replace("人类 Human", f"{race['name_zh']} {race['name_en']}")
    html = html.replace("🧑 人类 Human", f"{race['emoji']} {race['name_zh']} {race['name_en']}")
    html = html.replace("Human", race['name_en'])
    html = html.replace("人类", race['name_zh'])
    
    # 替换信息盒子
    html = html.replace("🧑🤝🧑", race['icon'])
    html = html.replace("无（全+0）", race['stat_adjustments'])
    html = html.replace("30英尺", race['speed'])
    html = html.replace("正常视觉", race['vision'])
    html = html.replace("通用语 + 自选", race['languages'])
    html = html.replace("任意（无兼职惩罚）", race['favored_class'])
    html = html.replace("PHB p.12 · SRD", f"PHB p.{race['src_page']} · SRD")
    
    # 替换正文
    html = html.replace("最适合新手", race['flavor'])
    html = html.replace("人类是<a href=", f"{race['name_zh']}是<a href=")
    html = html.replace("人类是D&D", f"{race['name_zh']}是D&D")
    
    # 替换属性表格
    html = html.replace("""        <tr><td>力量（STR）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>敏捷（DEX）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>体质（CON）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>智力（INT）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>感知（WIS）</td><td>±0</td><td>无调整</td></tr>
          <tr><td>魅力（CHA）</td><td>±0</td><td>无调整</td></tr>""", race['stat_table'])
    
    # 替换特殊能力
    html = html.replace("""        <li><strong>额外专长（Extra Feat）</strong>：1级时，人类角色获得<strong>一个额外专长</strong>。""", 
                        f"        <li>{race['special_abilities'].split('</li>')[0]}</li>")
    
    # 写入文件
    output_path = f"C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro\\races\\{race['id']}.html"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✅ 已生成：{race['name_zh']} ({race['name_en']})")
    return True

# 主程序
if __name__ == "__main__":
    print("开始生成剩余核心种族页面...")
    for race in races:
        try:
            generate_race_page(race)
        except Exception as e:
            print(f"❌ 生成 {race['name_zh']} 失败：{e}")
    
    print("\n🎉 剩余核心种族页面生成完成！")
    print("已生成：半身人、侏儒、半精灵、半兽人")
