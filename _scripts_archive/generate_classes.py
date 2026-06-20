#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e核心职业页面（基础版本）
包含：战士、牧师、盗贼、游侠、圣武士、德鲁伊、吟游诗人、武僧、野蛮人、术士
"""

# 职业数据
classes_data = {
    "fighter": {
        "name_en": "Fighter",
        "name_zh": "战士",
        "emoji": "⚔️",
        "HD": "d10",
        "BAB": "高（每级+1）",
        "fort": "高",
        "ref": "低",
        "will": "低",
        "skills": "2 + INT调整值",
        "armor": "所有护甲和盾牌",
        "weapons": "所有武器（简单/军用/异种）",
        "spell_type": "无施法能力",
        "spell_attr": "无",
        "intro": "战士是D&D 3.5e中<strong>最纯粹的近战专家</strong>。他们擅长各种武器和护甲，拥有最高的Base Attack Bonus（BAB）。",
        "key_features": [
            "擅长所有护甲和武器",
            "高Base Attack Bonus（每级+1）",
            "每2级获得1个额外专长（1级起）",
            "可开启多个进阶职业（武器大师、决斗家等）"
        ]
    },
    "cleric": {
        "name_en": "Cleric",
        "name_zh": "牧师",
        "emoji": "⛪",
        "HD": "d8",
        "BAB": "中（每级+3/4）",
        "fort": "高",
        "ref": "低",
        "will": "高",
        "skills": "2 + INT调整值",
        "armor": "中型护甲、重型护甲、盾牌",
        "weapons": "简单武器、军用锤类",
        "spell_type": "神术（ Prepared）",
        "spell_attr": "感知（WIS）",
        "intro": "牧师是D&D 3.5e中<strong>最全面的中等职业</strong>。他们既能战斗，又能施展神术，还能治疗队友。",
        "key_features": [
            "施展神术（依赖感知）",
            "选择领域（Domain）获得额外法术和能力",
            "擅长中型/重型护甲和盾牌",
            "每日施展法术次数取决于感知调整值"
        ]
    },
    "rogue": {
        "name_en": "Rogue",
        "name_zh": "盗贼",
        "emoji": "🗡️",
        "HD": "d6",
        "BAB": "低（每级+3/4）",
        "fort": "低",
        "ref": "高",
        "will": "低",
        "skills": "8 + INT调整值（最多技能点）",
        "armor": "轻型护甲",
        "weapons": "简单武器、手弩、短剑、细剑",
        "spell_type": "无施法能力（部分变体有）",
        "spell_attr": "无",
        "intro": "盗贼是D&D 3.5e中<strong>最灵活的技能型角色</strong>。他们擅长潜行、开锁、解除陷阱、偷窃。",
        "key_features": [
            "最多技能点（8 + INT调整值）",
            "偷袭（Sneak Attack）：每1-2级+1d6伤害",
            "擅长反射豁免",
            "可以使用技能\"使用魔法装置\"使用法术卷轴"
        ]
    },
    "ranger": {
        "name_en": "Ranger",
        "name_zh": "游侠",
        "emoji": "🏹",
        "HD": "d8",
        "BAB": "高（每级+1）",
        "fort": "高",
        "ref": "低",
        "will": "低",
        "skills": "6 + INT调整值",
        "armor": "轻型护甲、中型护甲、盾牌（非双手）",
        "weapons": "简单武器、军用武器（部分）",
        "spell_type": "神术（Prepared，4级起）",
        "spell_attr": "感知（WIS）",
        "intro": "游侠是D&D 3.5e中<strong>最全面的野外专家</strong>。他们擅长弓箭、双武器、追踪、生存。",
        "key_features": [
            "双武器战斗（无惩罚）",
            "选择宿敌（Favored Enemy）获得攻击/技能加值",
            "4级起施展神术（依赖感知）",
            "擅长野外技能（生存、聆听、侦察）"
        ]
    },
    "paladin": {
        "name_en": "Paladin",
        "name_zh": "圣武士",
        "emoji": "🛡️",
        "HD": "d10",
        "BAB": "高（每级+1）",
        "fort": "高",
        "ref": "低",
        "will": "高",
        "skills": "2 + INT调整值",
        "armor": "所有护甲和盾牌",
        "weapons": "简单武器、军用武器",
        "spell_type": "神术（Prepared，4级起）",
        "spell_attr": "感知（WIS）",
        "intro": "圣武士是D&D 3.5e中<strong>最受尊敬的职业</strong>。他们必须保持守序善良阵营，对抗邪恶，保护无辜。",
        "key_features": [
            "必须守序善良阵营",
            "每日施展神术（4级起，依赖感知）",
            "圣疗（Lay on Hands）：治疗接触目标",
            "挑战邪恶（Smite Evil）：每日数次+2攻击/伤害"
        ]
    },
    "druid": {
        "name_en": "Druid",
        "name_zh": "德鲁伊",
        "emoji": "🌿",
        "HD": "d8",
        "BAB": "中（每级+3/4）",
        "fort": "高",
        "ref": "低",
        "will": "高",
        "skills": "4 + INT调整值",
        "armor": "轻型护甲、中型护甲（非金属）",
        "weapons": "简单武器（部分）、长棍、弯刀",
        "spell_type": "神术（Prepared）",
        "spell_attr": "感知（WIS）",
        "intro": "德鲁伊是D&D 3.5e中<strong>最自然的施法者</strong>。他们崇拜自然，能变身动物，施展神术。",
        "key_features": [
            "施展神术（依赖感知）",
            "变身（Wild Shape）：5级起变身动物",
            "动物伙伴（Animal Companion）",
            "不能穿金属护甲或使用金属盾牌"
        ]
    },
    "bard": {
        "name_en": "Bard",
        "name_zh": "吟游诗人",
        "emoji": "🎵",
        "HD": "d6",
        "BAB": "低（每级+1/2）",
        "fort": "低",
        "ref": "高",
        "will": "低",
        "skills": "6 + INT调整值",
        "armor": "轻型护甲、盾牌（非精通）",
        "weapons": "简单武器、长剑、细剑、短弓、长弓",
        "spell_type": "奥术（Spontaneous，依赖法术Known）",
        "spell_attr": "魅力（CHA）",
        "intro": "吟游诗人是D&D 3.5e中<strong>最全面的辅助施法者</strong>。他们用音乐施展奥术，能鼓舞队友，干扰敌人。",
        "key_features": [
            "施展奥术（依赖魅力，Spontaneous）",
            "吟游诗人知识（Bardic Knowledge）",
            "鼓舞（Inspire Courage）：队友攻击/伤害/豁免+1",
            "擅长多种技能"
        ]
    },
    "monk": {
        "name_en": "Monk",
        "name_zh": "武僧",
        "emoji": "🥋",
        "HD": "d8",
        "BAB": "中（每级+3/4）",
        "fort": "高",
        "ref": "高",
        "will": "高",
        "skills": "4 + INT调整值",
        "armor": "无护甲（穿护甲失去特殊能力）",
        "weapons": "简单武器、特殊武僧武器",
        "spell_type": "无施法能力",
        "spell_attr": "无",
        "intro": "武僧是D&D 3.5e中<strong>最独特的职业</strong>。他们不穿护甲，不用武器（或用特殊武僧武器），靠徒手战斗。",
        "key_features": [
            "徒手攻击（Flurry of Blows）",
            "AC加值（不穿护甲）",
            "高超徒手攻击（Unarmed Strike）伤害骰成长",
            "缓慢倒地（Slow Fall）、超度运动（Evade）等能力"
        ]
    },
    "barbarian": {
        "name_en": "Barbarian",
        "name_zh": "野蛮人",
        "emoji": "🪓",
        "HD": "d12（最高HP）",
        "BAB": "高（每级+1）",
        "fort": "高",
        "ref": "低",
        "will": "低",
        "skills": "4 + INT调整值",
        "armor": "中型护甲、轻型护甲、盾牌",
        "weapons": "简单武器、军用武器（部分）",
        "spell_type": "无施法能力",
        "spell_attr": "无",
        "intro": "野蛮人是D&D 3.5e中<strong>最野蛮的近战职业</strong>。他们来自蛮荒部落，擅长狂暴、重击。",
        "key_features": [
            "狂暴（Rage）：每日数次+4力量/-2AC/+2意志豁免",
            "最高生命骰（d12）",
            "快速移动（Fast Movement）：速度+10英尺",
            "不守序阵营无法获得狂暴能力"
        ]
    },
    "sorcerer": {
        "name_en": "Sorcerer",
        "name_zh": "术士",
        "emoji": "🔥",
        "HD": "d4",
        "BAB": "低（每级+1/2）",
        "fort": "低",
        "ref": "低",
        "will": "高",
        "skills": "2 + INT调整值",
        "armor": "无（穿甲施法失败）",
        "weapons": "简单武器",
        "spell_type": "奥术（Spontaneous，依赖法术Known）",
        "spell_attr": "魅力（CHA）",
        "intro": "术士是D&D 3.5e中<strong>最天生的奥术施法者</strong>。他们天生就有魔法血统，无需学习。",
        "key_features": [
            "施展奥术（依赖魅力，Spontaneous）",
            "知晓法术列表（Spells Known）有限",
            "每日法术量比法师多",
            "血统（Bloodline）：10级起获得血统能力"
        ]
    }
}

# HTML模板（简化版）
html_template = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{name_zh} {name_en} - D&D 3.5e 中文Wiki</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>

<nav class="navbar">
  <div class="navbar-brand">🐉 D&D 3.5e 中文Wiki</div>
  <div class="navbar-links">
    <a href="../index.html">首页</a>
    <a href="../races/intro.html">种族</a>
    <a href="intro.html" class="active">职业</a>
    <a href="../spells/intro.html">法术</a>
    <a href="../feats/intro.html">专长</a>
    <a href="../skills/intro.html">技能</a>
    <a href="../equipment/intro.html">装备</a>
    <a href="../conflicts.html">规则冲突</a>
  </div>
</nav>

<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">核心职业</div>
      <a href="intro.html">总览</a>
      <a href="barbarian.html">野蛮人</a>
      <a href="bard.html">吟游诗人</a>
      <a href="cleric.html">牧师</a>
      <a href="druid.html">德鲁伊</a>
      <a href="fighter.html">战士</a>
      <a href="monk.html">武僧</a>
      <a href="paladin.html">圣武士</a>
      <a href="ranger.html">游侠</a>
      <a href="rogue.html">盗贼</a>
      <a href="sorcerer.html">术士</a>
      <a href="wizard.html">法师</a>
    </div>
  </aside>

  <main class="main-content">
    <div class="infobox">
      <div class="infobox-title">{emoji} {name_zh} {name_en}</div>
      <table class="infobox-table">
        <tr><td>HD</td><td>{HD}</td></tr>
        <tr><td>BAB</td><td>{BAB}</td></tr>
        <tr><td>强韧</td><td>{fort}</td></tr>
        <tr><td>反射</td><td>{ref}</td></tr>
        <tr><td>意志</td><td>{will}</td></tr>
        <tr><td>技能点</td><td>{skills}</td></tr>
        <tr><td>擅长护甲</td><td>{armor}</td></tr>
        <tr><td>擅长武器</td><td>{weapons}</td></tr>
        <tr><td>施法类型</td><td>{spell_type}</td></tr>
        <tr><td>施法属性</td><td>{spell_attr}</td></tr>
        <tr><td>来源</td><td>PHB p.{page}</td></tr>
      </table>
    </div>

    <h1>{name_zh}（{name_en}）</h1>
    <p class="toc-desc">
      <span class="badge badge-core">核心职业</span>
      <span class="badge badge-class">PHB</span>
    </p>
    <p>{intro}</p>

    <h2>📊 职业特性</h2>
    <div class="Rule-box">
      <h3>关键特性</h3>
      <ul>
        {features_html}
      </ul>
    </div>

    <h2>⚙️ 机制分析</h2>
    <div class="Rule-box">
      <p><strong>优势：</strong>{advantages}</p>
      <p><strong>劣势：</strong>{disadvantages}</p>
      <p><strong>评价：</strong>{evaluation}</p>
    </div>

    <h2>🔄 多职业建议</h2>
    <div class="section-grid">
      {multiclass_html}
    </div>

    <h2>🎭 角色扮演建议</h2>
    <div class="Rule-box">
      <p>{rp_tips}</p>
    </div>

    <h2>📚 数据来源</h2>
    <ul>
      <li>📘 <strong>PHB（玩家手册）3.5版</strong> —— {name_zh}职业特性</li>
      <li>📘 <strong>SRD 3.5</strong> · Classes → {name_en} —— 开放式游戏规则</li>
    </ul>

  </main>
</div>

<div class="footer">
  <p>🐉 龙与地下城 3.5版 中文Wiki | {name_zh}职业详细页</p>
</div>
</body>
</html>'''

# 生成页面
def generate_class_page(class_id, data):
    """生成单个职业页面"""
    
    # 处理关键特性HTML
    features_html = ""
    for feature in data["key_features"]:
        features_html += f"<li>{feature}</li>\n        "
    
    # 处理多职业建议HTML
    multiclass_html = f"""      <div class="section-card">
        <h3>{data['name_zh']} / 法师</h3>
        <p>经典组合。{data['name_zh']}提供近战，法师提供远程火力。</p>
      </div>
      <div class="section-card">
        <h3>{data['name_zh']} / 牧师</h3>
        <p>平衡组合。{data['name_zh']}提供战斗，牧师提供治疗和辅助。</p>
      </div>"""
    
    # 根据职业特点填写优劣势
    if class_id == "fighter":
        advantages = "最高BAB、最多专长、擅长所有护甲武器"
        disadvantages = "低豁免（反射/意志）、少技能点"
        evaluation = "最适合新手的职业，简单粗暴。"
        rp_tips = "战士通常<strong>忠诚、勇敢、纪律严明</strong>。他们可能是雇佣兵、骑士、守卫。"
    elif class_id == "cleric":
        advantages = "神术全面、高意志豁免、擅长护甲"
        disadvantages = "中BAB、技能点少"
        evaluation = "最全面的中等职业，适合任何队伍。"
        rp_tips = "牧师通常<strong>虔诚、无私、守护者</strong>。他们信仰特定神祇，遵循教义。"
    elif class_id == "rogue":
        advantages = "最多技能点、偷袭伤害、高反射豁免"
        disadvantages = "低HP（d6）、低BAB"
        evaluation = "最灵活的技能型角色，适合喜欢非战斗解决的玩家。"
        rp_tips = "盗贼通常<strong>狡猾、灵活、机会主义</strong>。他们可能是小偷、间谍、探险家。"
    else:
        advantages = "多样能力"
        disadvantages = "特定限制"
        evaluation = "根据构建不同而有很大差异。"
        rp_tips = f"{data['name_zh']}的性格因玩家构建而异。"
    
    # 页码映射（简化）
    page_map = {
        "barbarian": "24",
        "bard": "26",
        "cleric": "30",
        "druid": "32",
        "fighter": "38",
        "monk": "40",
        "paladin": "42",
        "ranger": "46",
        "rogue": "50",
        "sorcerer": "52"
    }
    
    # 填充模板
    html_content = html_template.format(
        name_zh=data["name_zh"],
        name_en=data["name_en"],
        emoji=data["emoji"],
        HD=data["HD"],
        BAB=data["BAB"],
        fort=data["fort"],
        ref=data["ref"],
        will=data["will"],
        skills=data["skills"],
        armor=data["armor"],
        weapons=data["weapons"],
        spell_type=data["spell_type"],
        spell_attr=data["spell_attr"],
        page=page_map[class_id],
        intro=data["intro"],
        features_html=features_html,
        advantages=advantages,
        disadvantages=disadvantages,
        evaluation=evaluation,
        multiclass_html=multiclass_html,
        rp_tips=rp_tips
    )
    
    # 写入文件
    filename = f"C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro\\classes\\{class_id}.html"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print(f"✅ 已生成：{data['name_zh']} ({data['name_en']})")
    return True

# 主程序
if __name__ == "__main__":
    print("开始生成核心职业页面（基础版本）...")
    
    # 跳过已存在的法师页面
    for class_id in classes_data:
        if class_id == "wizard":
            print(f"⏭️ 跳过：法师（已存在高质量版本）")
            continue
        try:
            generate_class_page(class_id, classes_data[class_id])
        except Exception as e:
            print(f"❌ 生成 {classes_data[class_id]['name_zh']} 失败：{e}")
    
    print("\n🎉 核心职业页面生成完成！")
    print("已生成：战士、牧师、盗贼、游侠、圣武士、德鲁伊、吟游诗人、武僧、野蛮人、术士")
    print("注意：法师页面已存在（高质量版本），未覆盖。")
