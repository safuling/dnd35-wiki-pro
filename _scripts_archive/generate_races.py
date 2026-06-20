#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e核心种族页面
生成：矮人、半身人、侏儒、半精灵、半兽人
"""

# 种族数据定义
races_data = {
    "dwarf": {
        "name_en": "Dwarf",
        "name_zh": "矮人",
        "emoji": "🧔",
        "icon": "🧔⛏️🍺",
        "stat_adjustments": {
            "STR": "+0",
            "DEX": "±0",
            "CON": "+2",
            "INT": "±0",
            "WIS": "+2",
            "CHA": "-2"
        },
        "stat_note": "体质+2/感知+2/魅力-2。矮人是最肉搏的施法种族之一。",
        "size": "中型",
        "speed": "20英尺（穿轻型/中型/重型装甲时无减值）",
        "vision": "黑暗视觉 60英尺",
        "languages": "通用语、矮人语",
        "favored_class": "战士（男性）、牧师（女性）",
        "special_abilities": [
            ("体质+2/感知+2/魅力-2", "高HP/高意志豁免，但魅力相关技能（交涉、威吓）有惩罚。"),
            ("黑暗视觉 60英尺", "在完全黑暗中可视物60英尺。这是矮人的核心优势。"),
            ("石头cunning", "在与石头相关的侦察/聆听检定时，矮人可获得特殊加值（DMG p.15）。"),
            ("对抗毒药+2", "种族加值，使矮人成为优秀的探险者。"),
            ("对抗法术+2", "对抗法师/牧师法术的豁免有+2种族加值。"),
            ("精通地精类语言", "自动会说地精语、兽人语、土族语、黑暗语。"),
            ("偏爱职业限制", "男性偏爱战士，女性偏爱牧师。选择其他职业会触发兼职惩罚。")
        ],
        "mechanics_analysis": """
        <h3>矮人的优劣对比</h3>
        <table class="wiki-table">
          <thead>
            <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
          </thead>
          <tbody>
            <tr><td>体质+2（HP+1/级）</td><td>魅力-2（交涉-1）</td><td>优秀的坦克</td></tr>
            <tr><td>感知+2（意志+1）</td><td>速度20英尺</td><td>地图移动较慢</td></tr>
            <tr><td>黑暗视觉 60英尺</td><td>——</td><td>地下探险必备</td></tr>
            <tr><td>多种抗性（+2毒/法术）</td><td>偏爱职业限制</td><td>兼职惩罚风险</td></tr>
          </tbody>
        </table>
        <p><strong>结论：</strong>矮人是最适合<strong>前排坦克</strong>的种族（战士、圣武士、牧师）。
        魅力-2对施法者（牧师）不利，但可以通过高魅力弥补。</p>
        """,
        "multiclass_tips": [
            ("矮人战士 / 牧师", "经典组合。战士提供近战，牧师提供治疗和辅助法术。"),
            ("矮人圣武士", "矮人圣武士因体质+2而极其耐久。"),
            ("矮人游荡者", "⚠️ 需慎重，因为游荡者依赖敏捷/魅力。")
        ],
        "roleplay_tips": "矮人通常<strong>固执、保守、重视荣誉</strong>。他们寿命长达350年，但性格却比精灵更接地气。",
        "names_example": {
            "male": "索林（Thorin）、巴林（Balin）、杜瓦林（Dwalin）",
            "female": "迪斯（Dis）、盖尔（Gair）、希尔妲（Hilda）",
            "surname": " Oakenshield、铁炉、石盾"
        },
        "conflicts": [
            ("关于速度20英尺的装甲惩罚", "PHB规定'穿轻型/中型/重型装甲时无速度惩罚'，但某些DM会house rule '穿重型装甲速度变为15英尺'。"),
            ("关于'石头cunning'的触发条件", "SRD未明确说明何时给予加值，需DM裁定。")
        ]
    },
    
    "halfling": {
        "name_en": "Halfling",
        "name_zh": "半身人",
        "emoji": "🧒",
        "icon": "🧒🌿🍃",
        "stat_adjustments": {
            "STR": "-2",
            "DEX": "+2",
            "CON": "+2",
            "INT": "±0",
            "WIS": "±0",
            "CHA": "±0"
        },
        "stat_note": "力量-2/敏捷+2/体质+2。半身人是优秀的远程射手和漫游者。",
        "size": "小型",
        "speed": "20英尺",
        "vision": "正常视觉",
        "languages": "通用语、半身人语",
        "favored_class": "漫游者（男性）、吟游诗人（女性）",
        "special_abilities": [
            ("力量-2/敏捷+2/体质+2", "虚弱但灵活耐久。小型体型有AC+1和攻击+1的奖励。"),
            ("小型体型", "AC +1偏转加值，攻击+1尺寸加值。但力量-2导致近战伤害-1。"),
            ("投掷武器娴熟", "半身人在使用投掷武器（飞镖、投石索）时，不会受到小型体型的<strong>力量惩罚</strong>。"),
            ("回避巨人+4", "对抗体型为大型或更大的生物时，AC和豁免有+4种族加值。"),
            ("攀爬/跳跃+2", "种族加值，使半身人成为优秀的侦察兵。"),
            ("偏爱职业限制", "男性偏爱漫游者，女性偏爱吟游诗人。选择其他职业会触发兼职惩罚。")
        ],
        "mechanics_analysis": """
        <h3>半身人的优劣对比</h3>
        <table class="wiki-table">
          <thead>
            <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
          </thead>
          <tbody>
            <tr><td>敏捷+2（远程/AC）</td><td>力量-2（近战伤害-1）</td><td>适合远程/技能型</td></tr>
            <tr><td>体质+2（HP+1/级）</td><td>小型体型（武器限制）</td><td>某些武器无法使用</td></tr>
            <tr><td>小型体型（AC+1/攻击+1）</td><td>——</td><td>前排生存能力强</td></tr>
            <tr><td>回避巨人+4", "——</td><td>对抗大型生物有效</td></tr>
          </tbody>
        </table>
        <p><strong>结论：</strong>半身人是最适合<strong>远程射手</strong>和<strong>漫游者</strong>的种族。
        力量-2在近战中很痛，但远程攻击不受影响。</p>
        """,
        "multiclass_tips": [
            ("半身人漫游者 / 战士", "漫游者提供技能，战士提供近战生存。"),
            ("半身人吟游诗人", "魅力种族+0，但吟游诗人依赖魅力，需高ROLL。"),
            ("半身人术士", "不错选择，体质+2提供额外HP。")
        ],
        "roleplay_tips": "半身人通常<strong>乐观、好奇、热爱家庭</strong>。他们喜欢舒适的生活，但也会因为冒险精神而离开家乡。",
        "names_example": {
            "male": "佛罗多（Frodo）、山姆（Samwise）、梅里（Meriadoc）",
            "female": "罗丝（Rosie）、戴西（Daisy）、玛丽（Mari）",
            "surname": "花园、袋底、绿坡"
        },
        "conflicts": [
            ("关于小型体型的武器限制", "PHB规定'小型生物无法使用大型武器'，但某些宽松DM允许。"),
            ("关于'投掷武器娴熟'的范围", "SRD明确为'投石索和飞镖'，但某些DM扩展到所有投掷武器。")
        ]
    },
    
    "gnome": {
        "name_en": "Gnome",
        "name_zh": "侏儒",
        "emoji": "🧙",
        "icon": "🧙🔮📚",
        "stat_adjustments": {
            "STR": "-2",
            "DEX": "+2",
            "CON": "±0",
            "INT": "+2",
            "WIS": "±0",
            "CHA": "±0"
        },
        "stat_note": "力量-2/敏捷+2/智力+2。侏儒是最聪明的核心种族，适合法师和发明家。",
        "size": "小型",
        "speed": "20英尺",
        "vision": "低光视觉 60英尺，黑暗视觉 60英尺",
        "languages": "通用语、侏儒语、地精语、土族语",
        "favored_class": "法师（男性）、炼金术师（女性）",
        "special_abilities": [
            ("力量-2/敏捷+2/智力+2", "脆弱但聪明。智力+2使侏儒成为最佳法师种族之一。"),
            ("低光视觉+黑暗视觉", "双重视觉能力，在昏暗和全黑环境中都能视物。"),
            ("精通地精类语言", "自动会说地精语、兽人语、土族语、黑暗语。"),
            ("对抗地精/巨人+1", "在对抗地精类（地精、兽人等）和巨人类时，攻击和伤害+1。"),
            ("法术专精（ILLUSION）", "侏儒在对抗幻术系法术的豁免上，有<strong>+2种族加值</strong>。"),
            ("偏爱职业限制", "男性偏爱法师，女性偏爱炼金术师（非核心职业，需DM许可）。")
        ],
        "mechanics_analysis": """
        <h3>侏儒的优劣对比</h3>
        <table class="wiki-table">
          <thead>
            <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
          </thead>
          <tbody>
            <tr><td>智力+2（法术DC+1）</td><td>力量-2（近战伤害-1）</td><td>最佳法师种族之一</td></tr>
            <tr><td>敏捷+2（远程/AC）</td><td>小型体型</td><td>前排易被打</td></tr>
            <tr><td>双重视觉（低光+黑暗）</td><td>——</td><td>地下探险优秀</td></tr>
            <tr><td>对抗幻术+2", "——</td><td>对抗法师有效</td></tr>
          </tbody>
        </table>
        <p><strong>结论：</strong>侏儒是最适合<strong>法师</strong>的种族之一（智力+2）。
        但力量-2使他们在近战中极其脆弱，需保持距离。</p>
        """,
        "multiclass_tips": [
            ("侏儒法师 / 战士", "经典组合。法师提供火力，战士提供近战生存。"),
            ("侏儒法师 / 炼金术师", "需DM许可，专注于药剂和魔法物品制作。"),
            ("侏儒吟游诗人", "智力+2有助于技能点分配。")
        ],
        "roleplay_tips": "侏儒通常<strong>好奇、发明家、热爱宝石</strong>。他们喜欢收集宝石、制作机关、研究魔法。",
        "names_example": {
            "male": "宾克斯（Binks）、科博（Kobal）、奥兹韦尔（Ozweld）",
            "female": "贝琳达（Belinda）、卡米拉（Camilla）、蒂娜（Tina）",
            "surname": "宝石、齿轮、火花"
        },
        "conflicts": [
            ("关于'炼金术师'是否为官方职业", "PHB中无炼金术师职业，这是某些扩展书（如Complete Adventurer）的内容。"),
            ("关于'对抗幻术+2'是否叠加'法术抗性'", "SRD未明确，但一般认为二者独立计算。")
        ]
    },
    
    "half-elf": {
        "name_en": "Half-Elf",
        "name_zh": "半精灵",
        "emoji": "🧝",
        "icon": "🧝🌿🔄",
        "stat_adjustments": {
            "STR": "±0",
            "DEX": "+2",
            "CON": "±0",
            "INT": "±0",
            "WIS": "±0",
            "CHA": "+2"
        },
        "stat_note": "精灵父母+人类父母的混合。无属性调整（全±0），但可选择精灵或人类的<strong>偏爱职业</strong>。",
        "size": "中型",
        "speed": "30英尺",
        "vision": "低光视觉 60英尺（继承自精灵血统）",
        "languages": "通用语、精灵语、自选1门",
        "favored_class": "任意（选择精灵或人类的偏爱职业）",
        "special_abilities": [
            ("无属性调整", "与人类的'全±0'不同，半精灵<strong>没有任何属性调整</strong>。这是重大劣势。"),
            ("低光视觉 60英尺", "继承自精灵血统，在昏暗光线下可视物距离翻倍。"),
            ("免疫魔法睡眠", "继承自精灵血统。"),
            ("精灵血统", "对于特定职业/法术，视为<strong>精灵</strong>（如'精灵感动'法术）。"),
            ("人类血统", "对于特定职业/法术，视为<strong>人类</strong>（如'人类动机'法术）。"),
            ("偏爱职业：任意", "半精灵可以选择<strong>任意职业</strong>作为偏爱职业，无需担心兼职惩罚。")
        ],
        "mechanics_analysis": """
        <h3>半精灵的优劣对比</h3>
        <table class="wiki-table">
          <thead>
            <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
          </thead>
          <tbody>
            <tr><td>无兼职惩罚</td><td>无属性调整</td><td>Mechanically最弱核心种族</td></tr>
            <tr><td>低光视觉</td><td>——</td><td>夜间作战能力</td></tr>
            <tr><td>双血统认定</td><td>——</td><td>某些法术/物品的特殊互动</td></tr>
          </tbody>
        </table>
        <p><strong>结论：</strong>半精灵是Mechanically<strong>最弱</strong>的核心种族。
        没有属性调整意味着没有优势。但"无兼职惩罚"和"双血统"在某些RP情境中可能有用。</p>
        """,
        "multiclass_tips": [
            ("半精灵法师 / 战士", "无兼职惩罚，适合多职业。"),
            ("半精灵吟游诗人", "魅力+2（如果有）会很好，但半精灵无魅力调整。"),
            ("半精灵游侠", "低光视觉有助于夜间巡逻。")
        ],
        "roleplay_tips": "半精灵通常<strong>被两个世界排斥</strong>——精灵认为他们"不够优雅"，人类认为他们"异类"。这种孤独感是角色扮演的宝藏。",
        "names_example": {
            "male": "索兰德（Solaundra）、艾拉斯卓（Alustriel，注：此为高等精灵名）",
            "female": "戴娜瑟（Dynaheir）、崔斯特（Drizzt，注：此为男性卓尔名）",
            "surname": "通常采用人类姓氏，或弃姓（被社会排斥）"
        },
        "conflicts": [
            ("关于'无属性调整'是否过于惩罚性", "某些DM会house rule '半精灵获得魅力+2'，以平衡。"),
            ("关于'双血统认定'的具体触发条件", "SRD未明确列举，需DM裁定。")
        ]
    },
    
    "half-orc": {
        "name_en": "Half-Orc",
        "name_zh": "半兽人",
        "emoji": "👹",
        "icon": "👹⚔️🔥",
        "stat_adjustments": {
            "STR": "+2",
            "DEX": "±0",
            "CON": "+2",
            "INT": "-2",
            "WIS": "±0",
            "CHA": "-2"
        },
        "stat_note": "力量+2/体质+2/智力-2/魅力-2。半兽人是纯粹的<strong>近战机器</strong>。",
        "size": "中型",
        "speed": "30英尺",
        "vision": "黑暗视觉 60英尺（继承自兽人血统）",
        "languages": "通用语、兽人语",
        "favored_class": "野蛮人（男性）、战士（女性）",
        "special_abilities": [
            ("力量+2/体质+2/智力-2/魅力-2", "高STR/CON使半兽人成为最佳近战种族，但INT/CHA惩罚严重影响技能和交际。"),
            ("黑暗视觉 60英尺", "继承自兽人血统，在完全黑暗中可视物60英尺。"),
            ("兽人血统", "对于特定职业/法术，视为<strong>兽人</strong>（如'命令兽人'法术）。"),
            ("偏爱职业限制", "男性偏爱野蛮人，女性偏爱战士。选择其他职业会触发兼职惩罚。"),
            ("社会排斥", "半兽人在文明社会中通常受到歧视，这会影响交际检定（DM裁定）。")
        ],
        "mechanics_analysis": """
        <h3>半兽人的优劣对比</h3>
        <table class="wiki-table">
          <thead>
            <tr><th>优势</th><th>劣势</th><th>评价</th></tr>
          </thead>
          <tbody>
            <tr><td>力量+2（近战伤害+1）</td><td>智力-2（技能点-1/级）</td><td>严重限制技能型构建</td></tr>
            <tr><td>体质+2（HP+1/级）</td><td>魅力-2（交涉-1）</td><td>外交型角色极差</td></tr>
            <tr><td>黑暗视觉 60英尺</td><td>社会排斥（DM裁定）</td><td>可能影响剧情</td></tr>
          </tbody>
        </table>
        <p><strong>结论：</strong>半兽人是<strong>纯粹的近战机器</strong>。适合战士、野蛮人、圣武士。
        但智力-2/魅力-2使他们在技能和交际方面极其糟糕。</p>
        """,
        "multiclass_tips": [
            ("半兽人战士 / 野蛮人", "经典组合。双重攻击加值。"),
            ("半兽人圣武士", "⚠️ 需慎重，因为圣武士需要魅力（施法能力）。"),
            ("半兽人游荡者", "❌ 不推荐，游荡者依赖技能和魅力。")
        ],
        "roleplay_tips": "半兽人通常<strong>野蛮、直率、被社会排斥</strong>。他们可能试图证明自己"不是怪物"，或者接受自己的"野兽本性"。",
        "names_example": {
            "male": "格鲁姆（Grom）、什克（Shhk）、玛格（Mag）",
            "female": "莎卡（Shaka）、乌拉（Ula）、泽拉（Zella）",
            "surname": "通常只有氏族名（如"血斧"、"碎骨"），或无姓氏"
        },
        "conflicts": [
            ("关于'社会排斥'的规则化处理", "PHB未明确说明，某些DM会施加"魅力相关检定-2"的惩罚。"),
            ("关于'兽人血统'与'人类血统'的优先级", "SRD未明确，需DM裁定。")
        ]
    }
}

# HTML模板
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
    <a href="intro.html" class="active">种族</a>
    <a href="../classes/intro.html">职业</a>
    <a href="../spells/intro.html">法术</a>
    <a href="../feats/intro.html">专长</a>
    <a href="../skills/intro.html">技能</a>
    <a href="../equipment/intro.html">装备</a>
    <a href="../monsters/intro.html">怪物</a>
    <a href="../conflicts.html">规则冲突</a>
  </div>
  <div class="navbar-search">
    <input type="text" placeholder="搜索...">
    <button>搜索</button>
  </div>
</nav>

<div class="layout">
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-title">种族</div>
      <a href="intro.html">总览</a>
      <a href="human.html">人类 Human</a>
      <a href="elf.html">精灵 Elf</a>
      <a href="dwarf.html">矮人 Dwarf</a>
      <a href="halfling.html">半身人 Halfling</a>
      <a href="gnome.html">侏儒 Gnome</a>
      <a href="half-elf.html">半精灵 Half-elf</a>
      <a href="half-orc.html">半兽人 Half-orc</a>
    </div>
  </aside>

  <main class="main-content">

    <!-- 信息盒子 -->
    <div class="infobox">
      <div class="infobox-title">{emoji} {name_zh} {name_en}</div>
      <div class="infobox-subtitle">Dungeons & Dragons 3.5e</div>
      <div class="infobox-img" style="padding:20px;font-size:64px;opacity:0.3;">{icon}</div>
      <table class="infobox-table">
        <tr><td>体型</td><td>{size}</td></tr>
        <tr><td>属性调整</td><td>{stat_summary}</td></tr>
        <tr><td>速度</td><td>{speed}</td></tr>
        <tr><td>视力</td><td>{vision}</td></tr>
        <tr><td>语言</td><td>{languages}</td></tr>
        <tr><td>偏爱职业</td><td>{favored_class}</td></tr>
        <tr><td>挑战等级</td><td>1（1级角色）</td></tr>
        <tr><td>来源</td><td>PHB p.{page} · SRD</td></tr>
      </table>
    </div>

    <h1>{name_zh}（{name_en}）</h1>
    <p class="toc-desc">
      <span class="badge badge-core">核心种族</span>
      <span class="badge badge-race">PHB p.{page}</span>
      <span class="badge badge-note">{flavor_text}</span>
    </p>
    <p>{intro_text}</p>

    <div class="toc">
      <div class="toc-title">📋 目录</div>
      <ol>
        <li><a href="#traits">种族特性</a></li>
        <li><a href="#mechanics">机制分析</a></li>
        <li><a href="#multiclass">多职业建议</a></li>
        <li><a href="#roleplay">角色扮演建议</a></li>
        <li><a href="#names">姓名习惯</a></li>
        <li><a href="#conflicts">规则冲突</a></li>
        <li><a href="#source">数据来源</a></li>
      </ol>
    </div>

    <h2 id="traits">📊 种族特性</h2>
    <div class="Rule-box">
      <h3>属性调整</h3>
      <table class="wiki-table">
        <thead>
          <tr><th>属性</th><th>调整值</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr><td>力量（STR）</td><td>{str_adj}</td><td>{str_desc}</td></tr>
          <tr><td>敏捷（DEX）</td><td>{dex_adj}</td><td>{dex_desc}</td></tr>
          <tr><td>体质（CON）</td><td>{con_adj}</td><td>{con_desc}</td></tr>
          <tr><td>智力（INT）</td><td>{int_adj}</td><td>{int_desc}</td></tr>
          <tr><td>感知（WIS）</td><td>{wis_adj}</td><td>{wis_desc}</td></tr>
          <tr><td>魅力（CHA）</td><td>{cha_adj}</td><td>{cha_desc}</td></tr>
        </tbody>
      </table>
      <p><strong>{stat_note}</strong></p>
    </div>

    <div class="Rule-box">
      <h3>独有种族特性</h3>
      <ol>
        {special_abilities_html}
      </ol>
    </div>

    <h2 id="mechanics">⚙️ 机制分析</h2>
    <div class="Rule-box">
      {mechanics_analysis}
    </div>

    <h2 id="multiclass">🔄 多职业建议</h2>
    <p>{multiclass_intro}</p>
    <div class="section-grid">
      {multiclass_cards_html}
    </div>

    <h2 id="roleplay">🎭 角色扮演建议</h2>
    <div class="Rule-box">
      <h3>{name_zh}的性格特点</h3>
      <p>{roleplay_tips}</p>
    </div>

    <h2 id="names">📛 姓名习惯</h2>
    <p>{name_intro}</p>
    <table class="wiki-table">
      <thead>
        <tr><th>性别</th><th>示例姓名</th><th>说明</th></tr>
      </thead>
      <tbody>
        <tr><td>男性</td><td>{male_names}</td><td>——</td></tr>
        <tr><td>女性</td><td>{female_names}</td><td>——</td></tr>
        <tr><td>姓氏</td><td>{surnames}</td><td>——</td></tr>
      </tbody>
    </table>

    <h2 id="conflicts">⚠️ 规则冲突</h2>
    {conflicts_html}

    <h2 id="source">📚 数据来源</h2>
    <ul>
      <li>📘 <strong>PHB（玩家手册）3.5版</strong> p.{page} —— {name_zh}种族特性</li>
      <li>📘 <strong>SRD 3.5</strong> · Races → {name_en} —— 开放式游戏规则</li>
      <li>📗 <strong>DMG（城主手册）3.5版</strong> p.173 —— 兼职惩罚规则</li>
    </ul>

    <hr style="margin:40px 0;border:none;border-top:1px solid var(--border-light);">
    <p style="font-size:13px;color:#999;">
      <strong>导航：</strong> <a href="{prev_page}">← 上一页：{prev_name}</a> | <a href="{next_page}">下一页：{next_name} →</a>
    </p>

  </main>
</div>

<div class="footer">
  <p>🐉 龙与地下城 3.5版 中文Wiki | {name_zh}种族详细页 | 数据来源：SRD 3.5 · PHB</p>
</div>
</body>
</html>'''

# 生成页面
def generate_race_page(race_id, data):
    """生成单个种族页面"""
    
    # 处理属性调整表格
    stat_map = data["stat_adjustments"]
    stat_descs = {
        "STR": "无调整" if stat_map["STR"] == "±0" else ("优势" if "+" in stat_map["STR"] else "劣势"),
        "DEX": "无调整" if stat_map["DEX"] == "±0" else ("优势" if "+" in stat_map["DEX"] else "劣势"),
        "CON": "无调整" if stat_map["CON"] == "±0" else ("优势" if "+" in stat_map["CON"] else "劣势"),
        "INT": "无调整" if stat_map["INT"] == "±0" else ("优势" if "+" in stat_map["INT"] else "劣势"),
        "WIS": "无调整" if stat_map["WIS"] == "±0" else ("优势" if "+" in stat_map["WIS"] else "劣势"),
        "CHA": "无调整" if stat_map["CHA"] == "±0" else ("优势" if "+" in stat_map["CHA"] else "劣势")
    }
    
    # 处理特殊能力HTML
    special_abilities_html = ""
    for ability, desc in data["special_abilities"]:
        special_abilities_html += f"<li><strong>{ability}</strong>：{desc}</li>\n"
    
    # 处理多职业卡片HTML
    multiclass_cards_html = ""
    for title, desc in data["multiclass_tips"]:
        multiclass_cards_html += f"""      <div class="section-card">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
"""
    
    # 处理规则冲突HTML
    conflicts_html = ""
    for conflict_title, conflict_desc in data["conflicts"]:
        conflicts_html += f"""    <div class="conflict-preview">
      <h3>{conflict_title}</h3>
      <p>{conflict_desc}</p>
    </div>
"""
    
    # 页码映射
    page_map = {
        "dwarf": "18",
        "halfling": "20",
        "gnome": "22",
        "half-elf": "24",
        "half-orc": "26"
    }
    
    # 导航映射
    nav_map = {
        "dwarf": ("elf.html", "精灵", "halfling.html", "半身人"),
        "halfling": ("dwarf.html", "矮人", "gnome.html", "侏儒"),
        "gnome": ("halfling.html", "半身人", "half-elf.html", "半精灵"),
        "half-elf": ("gnome.html", "侏儒", "half-orc.html", "半兽人"),
        "half-orc": ("half-elf.html", "半精灵", "human.html", "人类（返回）")
    }
    
    prev_page, prev_name, next_page, next_name = nav_map[race_id]
    
    # 填充模板
    html_content = html_template.format(
        name_zh=data["name_zh"],
        name_en=data["name_en"],
        emoji=data["emoji"],
        icon=data["icon"],
        size=data["size"],
        stat_summary=data["stat_note"].split("。")[0] if "。" in data["stat_note"] else data["stat_note"],
        speed=data["speed"],
        vision=data["vision"],
        languages=data["languages"],
        favored_class=data["favored_class"],
        page=page_map[race_id],
        flavor_text=data["flavor_text"] if "flavor_text" in data else "核心种族",
        intro_text=data["intro_text"] if "intro_text" in data else f"{data['name_zh']}是D&D 3.5e的核心种族之一。",
        str_adj=stat_map["STR"],
        str_desc=stat_descs["STR"],
        dex_adj=stat_map["DEX"],
        dex_desc=stat_descs["DEX"],
        con_adj=stat_map["CON"],
        con_desc=stat_descs["CON"],
        int_adj=stat_map["INT"],
        int_desc=stat_descs["INT"],
        wis_adj=stat_map["WIS"],
        wis_desc=stat_descs["WIS"],
        cha_adj=stat_map["CHA"],
        cha_desc=stat_descs["CHA"],
        stat_note=data["stat_note"],
        special_abilities_html=special_abilities_html,
        mechanics_analysis=data["mechanics_analysis"],
        multiclass_intro=data["multiclass_intro"] if "multiclass_intro" in data else "根据种族特性，以下是一些建议的多职业组合：",
        multiclass_cards_html=multiclass_cards_html,
        roleplay_tips=data["roleplay_tips"],
        name_intro=data["name_intro"] if "name_intro" in data else "姓名习惯因文化背景而异。",
        male_names=data["names_example"]["male"],
        female_names=data["names_example"]["female"],
        surnames=data["names_example"]["surname"],
        conflicts_html=conflicts_html,
        prev_page=prev_page,
        prev_name=prev_name,
        next_page=next_page,
        next_name=next_name
    )
    
    # 写入文件
    filename = f"C:\\Users\\wyb\\WorkBuddy\\2026-06-20-01-52-30\\dnd35-wiki-pro\\races\\{race_id}.html"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    print(f"✅ 已生成：{filename}")
    return True

# 主程序
if __name__ == "__main__":
    print("开始生成核心种族页面...")
    
    # 为每个种族添加缺失的字段
    races_data["dwarf"]["flavor_text"] = "坚韧·忠诚·嗜酒"
    races_data["dwarf"]["intro_text"] = "矮人是费伦大陆最<strong>坚韧</strong>且<strong>忠诚</strong>的种族之一。他们居住在山脉下的宏伟洞穴城市中，以锻造技艺和战斗 prowess 著称。在D&D 3.5e中，矮人以其<strong>高体质</strong>和<strong>多种抗性</strong>成为优秀的战士和牧师。"
    races_data["dwarf"]["multiclass_intro"] = "矮人的<strong>体质+2/感知+2</strong>使他们成为优秀的<strong>前排坦克</strong>。但<strong>偏爱职业限制</strong>（男性战士/女性牧师）使多职业变得复杂。"
    
    races_data["halfling"]["flavor_text"] = "乐观·敏捷·家庭导向"
    races_data["halfling"]["intro_text"] = "半身人是费伦大陆最<strong>乐观</strong>且<strong>敏捷</strong>的种族。他们喜欢舒适的家园，但也会因为冒险精神而离开家乡。在D&D 3.5e中，半身人以其<strong>敏捷+2</strong>和<strong>小型体型优势</strong>成为优秀的远程射手和漫游者。"
    races_data["halfling"]["multiclass_intro"] = "半身人的<strong>敏捷+2/体质+2</strong>使他们成为优秀的<strong>远程射手</strong>和<strong>技能型角色</strong>。但<strong>力量-2</strong>在近战中很痛。"
    
    races_data["gnome"]["flavor_text"] = "聪明·好奇·魔力亲和"
    races_data["gnome"]["intro_text"] = "侏儒是费伦大陆最<strong>聪明</strong>且<strong>好奇</strong>的种族。他们喜欢收集宝石、制作机关、研究魔法。在D&D 3.5e中，侏儒以其<strong>智力+2</strong>成为最佳法师种族之一，同时也是优秀的炼金术师和发明家。"
    races_data["gnome"]["multiclass_intro"] = "侏儒的<strong>智力+2</strong>使他们成为优秀的<strong>法师</strong>。但<strong>力量-2</strong>使他们在近战中极其脆弱，需保持距离。"
    
    races_data["half-elf"]["flavor_text"] = "孤独·双血统·无归属"
    races_data["half-elf"]["intro_text"] = "半精灵是<strong>精灵与人类的混血</strong>。他们通常<strong>被两个世界排斥</strong>——精灵认为他们'不够优雅'，人类认为他们'异类'。在D&D 3.5e中，半精灵是Mechanically<strong>最弱</strong>的核心种族（无属性调整），但'无兼职惩罚'和'双血统'在某些情境中可能有用。"
    races_data["half-elf"]["multiclass_intro"] = "半精灵的<strong>无兼职惩罚</strong>使他们适合多职业。但<strong>无属性调整</strong>意味着没有优势，需谨慎构建角色。"
    
    races_data["half-orc"]["flavor_text"] = "野蛮·直率·被排斥"
    races_data["half-orc"]["intro_text"] = "半兽人是<strong>兽人与人类的混血</strong>。他们通常<strong>被文明社会排斥</strong>，但也因此变得更加<strong>野蛮和直率</strong>。在D&D 3.5e中，半兽人是纯粹的<strong>近战机器</strong>（力量+2/体质+2），但<strong>智力-2/魅力-2</strong>使他们在技能和交际方面极其糟糕。"
    races_data["half-orc"]["multiclass_intro"] = "半兽人的<strong>力量+2/体质+2</strong>使他们成为优秀的<strong>近战角色</strong>。但<strong>智力-2/魅力-2</strong>严重限制技能和交际型构建。"
    
    # 生成所有种族页面
    for race_id in ["dwarf", "halfling", "gnome", "half-elf", "half-orc"]:
        generate_race_page(race_id, races_data[race_id])
    
    print("\n🎉 所有核心种族页面生成完成！")
    print("已生成：矮人、半身人、侏儒、半精灵、半兽人")
