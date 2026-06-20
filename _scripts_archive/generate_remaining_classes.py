#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e剩余核心职业页面
"""

classes_data = [
    {
        "filename": "paladin",
        "name_zh": "圣武士",
        "name_en": "Paladin",
        "type": "中等职业",
        "hit_die": "d10",
        "ba": "高（+3/4级）",
        "fort": "高",
        "ref": "低",
        "will": "低",
        "skill_pts": "2+智力调整值",
        "skills": "专注、工艺、治疗、知识（宗教）、专业、骑术",
        "description": "圣武士是正义的 champion，擅长近战、治疗和施展神术。他们有崇高的道德准则，并能施展治疗法术和审判邪恶的法术。",
        "special_abilities": [
            ("神圣阵式", "1级时，圣武士能施展神圣阵式（舞蹈、勇气、保护、力量）。"),
            ("疾病免疫", "3级时，圣武士对疾病免疫。"),
            ("治疗之手", "2级时，每天能施展治疗之手（治疗量=圣武士等级×魅力调整值）。"),
            ("审判邪恶", "5级时，每天能审判邪恶（额外伤害对抗邪恶异界生物）。"),
        ],
        "recommended_races": ["人类", "矮人", "金龙血脉"],
        "recommended_attributes": ["力量", "魅力", "体质"],
        "multiclass": ["战士/圣武士", "圣武士/牧师"]
    },
    {
        "filename": "druid",
        "name_zh": "德鲁伊",
        "name_en": "Druid",
        "type": "中等职业",
        "hit_die": "d8",
        "ba": "中（+3/4级）",
        "fort": "高",
        "ref": "低",
        "will": "高",
        "skill_pts": "4+智力调整值",
        "skills": "专注、知识（自然）、聆听、生存、侦察、游泳等",
        "description": "德鲁伊是大自然的守护者，擅长变形、施展神术和使用自然武器。他们能变形成动物，并施展德鲁伊法术列表中的法术。",
        "special_abilities": [
            ("变形", "5级时，德鲁伊能变形成动物（每日次数=德鲁伊等级/2）。"),
            ("自然之友", "1级时，德鲁伊对动物和植物生物获得+4阵营检定加值。"),
            ("抗火/抗寒", "18级时，获得抗火10和抗寒10。"),
            ("千面", "13级时，能变形成元素（空气、土、火、水）。"),
        ],
        "recommended_races": ["人类", "精灵", "木精灵"],
        "recommended_attributes": ["感知", "体质", "力量"],
        "multiclass": ["德鲁伊/游侠", "德鲁伊/牧师"]
    },
    {
        "filename": "bard",
        "name_zh": "吟游诗人",
        "name_en": "Bard",
        "type": "中等职业",
        "hit_die": "d6",
        "ba": "低（+3/4级）",
        "fort": "低",
        "ref": "高",
        "will": "高",
        "skill_pts": "6+智力调整值",
        "skills": "全部技能（吟游诗人是所有技能的本职业）",
        "description": "吟游诗人是全能者，擅长表演、技能和法术。他们能使用音乐施展法术，并能通过表演增强队友。",
        "special_abilities": [
            ("法术", "吟游诗人从1级开始能施展法术（吟游诗人法术列表）。"),
            ("吟游诗歌", "1级时，吟游诗人能通过表演施展特殊能力（如勇气、治愈、绝望）。"),
            ("知识精通", "吟游诗人对所有知识技能有+2加值。"),
            ("偷袭", "吟游诗人不能施展偷袭，但某些进阶职业可以。"),
        ],
        "recommended_races": ["人类", "精灵", "半身人"],
        "recommended_attributes": ["魅力", "敏捷", "智力"],
        "multiclass": ["吟游诗人/术士", "吟游诗人/盗贼"]
    },
    {
        "filename": "monk",
        "name_zh": "武僧",
        "name_en": "Monk",
        "type": "中等职业",
        "hit_die": "d8",
        "ba": "高（+3/4级）",
        "fort": "高",
        "ref": "高",
        "will": "高",
        "skill_pts": "4+智力调整值",
        "skills": "专注、逃脱、隐藏、知识（奥术）、聆听、表演、平衡等",
        "description": "武僧是东方武术的大师，擅长徒手攻击、移动和特殊能力。他们不使用武器和防甲，依靠身体训练。",
        "special_abilities": [
            ("徒手攻击", "1级时，武僧的徒手攻击造成1d6伤害（小型1d4，大型1d8）。"),
            ("移动", "武僧获得+10英尺移动速度（5级+20，9级+30）。"),
            ("敏感", "1级时，武僧对毒素免疫，对催眠免疫。"),
            ("震拳", "1级时，武僧能施展震拳（麻痹对手）。"),
        ],
        "recommended_races": ["人类", "矮人", "精灵"],
        "recommended_attributes": ["敏捷", "感知", "力量"],
        "multiclass": ["武僧/游荡者", "武僧/圣武士"]
    },
    {
        "filename": "barbarian",
        "name_zh": "野蛮人",
        "name_en": "Barbarian",
        "type": "中等职业",
        "hit_die": "d12",
        "ba": "高（+3/4级）",
        "fort": "高",
        "ref": "低",
        "will": "低",
        "skill_pts": "4+智力调整值",
        "skills": "聆听、生存、游泳、直觉、骑术",
        "description": "野蛮人是野性的战士，擅长狂暴、近战和生存。他们在狂暴时获得额外力量和体质，但战后疲劳。",
        "special_abilities": [
            ("狂暴", "1级时，野蛮人能狂暴（每天次数=1+体质调整值）。"),
            ("直觉闪避", "2级时，野蛮人对夹击和潜伏免疫。"),
            ("不屈意志", "3级时，野蛮人在强韧检定上获得+4加值。"),
            ("快速移动", "5级时，野蛮人获得+10英尺移动速度。"),
        ],
        "recommended_races": ["人类", "半兽人", "半身人"],
        "recommended_attributes": ["力量", "体质", "敏捷"],
        "multiclass": ["野蛮人/战士", "野蛮人/游侠"]
    },
    {
        "filename": "sorcerer",
        "name_zh": "术士",
        "name_en": "Sorcerer",
        "type": "施法职业",
        "hit_die": "d4",
        "ba": "低（+1/2级）",
        "fort": "低",
        "ref": "低",
        "will": "高",
        "skill_pts": "2+智力调整值",
        "skills": "专注、知识（奥术）、法术辨识、使用魔法装置",
        "description": "术士是天生施法者，法术来自血脉。他们能自发施放法术（不需准备），但法术选择有限。",
        "special_abilities": [
            ("自发施法", "术士能自发施放法术（每天法术位=等级+魅力调整值）。"),
            ("法术 known", "术士知道有限数量的法术（随等级提升）。"),
            ("血脉能力", "某些术士有血脉能力（如龙脉、地脉等）。"),
            ("熟悉", "术士能获得熟悉（如猫、乌鸦、老鼠等）。"),
        ],
        "recommended_races": ["人类", "精灵", "半精灵"],
        "recommended_attributes": ["魅力", "体质", "敏捷"],
        "multiclass": ["术士/法师", "术士/吟游诗人"]
    }
]

html_template = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{name_zh} - D&D 3.5e Wiki</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<header class="site-header">
  <div class="header-inner">
    <a href="../index.html" class="site-logo">D&D 3.5e Wiki</a>
    <nav class="site-nav">
      <a href="../index.html">首页</a>
      <a href="intro.html">职业</a>
      <a href="../races/intro.html">种族</a>
      <a href="../skills/intro.html">技能</a>
      <a href="../feats/intro.html">专长</a>
      <a href="../spells/intro.html">法术</a>
      <a href="../equipment/intro.html">装备</a>
      <a href="../rules/intro.html">规则</a>
      <a href="../conflicts.html">规则冲突</a>
    </nav>
  </div>
</header>

<main>
<aside class="sidebar">
  <h3>职业导航</h3>
  <ul>
    <li><a href="intro.html">职业总览</a></li>
    <li><a href="fighter.html">战士</a></li>
    <li><a href="wizard.html">法师</a></li>
    <li><a href="cleric.html">牧师</a></li>
    <li><a href="rogue.html">盗贼</a></li>
    <li><a href="ranger.html">游侠</a></li>
    <li><a href="paladin.html">圣武士</a></li>
    <li><a href="druid.html">德鲁伊</a></li>
    <li><a href="bard.html">吟游诗人</a></li>
    <li><a href="monk.html">武僧</a></li>
    <li><a href="barbarian.html">野蛮人</a></li>
    <li><a href="sorcerer.html">术士</a></li>
  </ul>
</aside>

<article class="main-content">
  <div class="page-header">
    <h1>{name_zh} <span class="class-en">({name_en})</span></h1>
    <div class="page-meta">
      <span class="class-type">{type}</span>
      <span class="hit-die">生命骰：{hit_die}</span>
    </div>
  </div>

  <div class="infobox">
    <div class="infobox-title">{name_zh} ({name_en})</div>
    <div class="infobox-content">
      <div><span class="label">生命骰</span><span class="value">{hit_die}</span></div>
      <div><span class="label">基础攻击加值</span><span class="value">{ba}</span></div>
      <div><span class="label">强韧豁免</span><span class="value">{fort}</span></div>
      <div><span class="label">反射豁免</span><span class="value">{ref}</span></div>
      <div><span class="label">意志豁免</span><span class="value">{will}</span></div>
      <div><span class="label">职业技能</span><span class="value">技能点数：{skill_pts}</span></div>
      <div><span class="label">本职技能</span><span class="value">{skills}</span></div>
    </div>
  </div>

  <h2>职业描述</h2>
  <p>{description}</p>

  <h2>核心能力</h2>
  {special_abilities}

  <h2>推荐种族</h2>
  <ul>
    {recommended_races}
  </ul>

  <h2>推荐属性</h2>
  <ol>
    {recommended_attributes}
  </ol>

  <h2>多职业建议</h2>
  <ul>
    {multiclass}
  </ul>

  <h2>规则冲突</h2>
  <div class="conflict-box">
    <div class="conflict-title">⚠️ 规则冲突标注</div>
    <div class="conflict-content">
      <p>本职业在不同资料源中基本一致，但存在一些细则差异：</p>
      <ul>
        <li><strong>PHB规则</strong>：标准规则，适用于大多数情况。</li>
        <li><strong>拓展规则</strong>：某些拓展书可能添加额外能力或变体规则。</li>
      </ul>
      <p><strong>建议</strong>：以PHB规则为准，DM可选择是否采用拓展规则。</p>
    </div>
  </div>

  <div class="rule-source">
    <strong>规则出处：</strong>《玩家手册》相关页码
  </div>
</article>
</main>

<footer class="site-footer">
  <p>D&D 3.5e Wiki | 本网站为爱好者创作，与威世智公司无关</p>
</footer>

<script src="../search.js"></script>
</body>
</html>'''

def generate_class_page(cls):
    # 生成特殊能力部分
    special_abilities_html = "<ul>"
    for name, desc in cls["special_abilities"]:
        special_abilities_html += f"<li><strong>{name}</strong>：{desc}</li>"
    special_abilities_html += "</ul>"
    
    # 生成推荐种族
    recommended_races_html = ""
    for race in cls["recommended_races"]:
        recommended_races_html += f"<li><strong>{race}</strong>：适合{cls['name_zh']}的种族。</li>"
    
    # 生成推荐属性
    recommended_attributes_html = ""
    for i, attr in enumerate(cls["recommended_attributes"], 1):
        recommended_attributes_html += f"<li><strong>{attr}</strong>：{cls['name_zh']}的核心属性。</li>"
    
    # 生成多职业建议
    multiclass_html = ""
    for mc in cls["multiclass"]:
        multiclass_html += f"<li><strong>{mc}</strong>：常见的多职业组合。</li>"
    
    # 填充模板
    html_content = html_template.format(
        name_zh=cls["name_zh"],
        name_en=cls["name_en"],
        type=cls["type"],
        hit_die=cls["hit_die"],
        ba=cls["ba"],
        fort=cls["fort"],
        ref=cls["ref"],
        will=cls["will"],
        skill_pts=cls["skill_pts"],
        skills=cls["skills"],
        description=cls["description"],
        special_abilities=special_abilities_html,
        recommended_races=recommended_races_html,
        recommended_attributes=recommended_attributes_html,
        multiclass=multiclass_html
    )
    
    return html_content

def main():
    import os
    
    output_dir = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\classes"
    
    for cls in classes_data:
        filename = cls["filename"]
        filepath = os.path.join(output_dir, f"{filename}.html")
        
        html_content = generate_class_page(cls)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"[OK] 已生成：{cls['name_zh']} ({cls['name_en']})")
    
    print(f"\n[Done] 批量生成完成！共生成 {len(classes_data)} 个职业页面")

if __name__ == "__main__":
    main()
