#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e技能页面
"""

skills_data = [
    # (文件名, 中文名, 英文名, 关键属性, 防具防碍, 本职职业)
    ("open-lock", "开锁", "Open Lock", "敏捷", "否", "游荡者"),
    ("disable-device", "解除机关", "Disable Device", "智力", "否", "游荡者"),
    ("escape-artist", "脱逃", "Escape Artist", "敏捷", "是", "游荡者、吟游诗人"),
    ("search", "搜索", "Search", "智力", "否", "游荡者、游侠"),
    ("bluff", "欺瞒", "Bluff", "魅力", "否", "吟游诗人、术士、魅影"),
    ("disguise", "易容", "Disguise", "魅力", "否", "吟游诗人、术士"),
    ("gather-information", "收集信息", "Gather Information", "魅力", "否", "吟游诗人、术士"),
    ("handle-animal", "驯养动物", "Handle Animal", "魅力", "否", "德鲁伊、圣武士、游侠"),
    ("heal", "治疗", "Heal", "感知", "否", "德鲁伊、圣武士"),
    ("sense-motive", "察言观色", "Sense Motive", "感知", "否", "德鲁伊、圣武士"),
    ("appraise", "估价", "Appraise", "智力", "否", "吟游诗人、武僧"),
    ("perform", "表演", "Perform", "魅力", "否", "吟游诗人"),
    ("ride", "骑术", "Ride", "敏捷", "是", "圣武士、游侠"),
    ("use-rope", "使用绳索", "Use Rope", "敏捷", "否", "游荡者、游侠"),
    ("sleight-of-hand", "巧手", "Sleight of Hand", "敏捷", "否", "游荡者"),
    ("craft", "工艺", "Craft", "智力", "否", "所有职业"),
    ("profession", "专业", "Profession", "感知", "否", "所有职业"),
    ("forgery", "伪造", "Forgery", "智力", "否", "吟游诗人、术士"),
    ("decipher-script", "解读文书", "Decipher Script", "智力", "否", "吟游诗人、术士"),
]

html_template = """<!DOCTYPE html>
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
      <a href="../classes/intro.html">职业</a>
      <a href="../races/intro.html">种族</a>
      <a href="intro.html">技能</a>
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
  <h3>技能导航</h3>
  <ul>
    <li><a href="intro.html">技能总览</a></li>
    <li><a href="climb.html">攀爬</a></li>
    <li><a href="swim.html">游泳</a></li>
    <li><a href="jump.html">跳跃</a></li>
    <li><a href="hide.html">隐匿</a></li>
    <li><a href="move-silently.html">潜行</a></li>
    <li><a href="spot.html">侦察</a></li>
    <li><a href="listen.html">聆听</a></li>
    <li><a href="survival.html">生存</a></li>
    <li><a href="diplomacy.html">交涉</a></li>
    <li><a href="intimidate.html">威吓</a></li>
    <li><a href="spellcraft.html">法术辨识</a></li>
    <li><a href="knowledge-arcana.html">知识（奥术）</a></li>
    <li><a href="use-magic-device.html">使用魔法装置</a></li>
    <li><a href="{filename}.html" class="active">{name_zh}</a></li>
  </ul>
</aside>

<article class="main-content">
  <div class="page-header">
    <h1>{name_zh} <span class="skill-en">({name_en})</span></h1>
    <div class="page-meta">
      <span class="skill-key">关键属性：{key_attr}</span>
      <span class="armor-check">防具防碍：{armor_check}</span>
    </div>
  </div>

  <div class="infobox">
    <div class="infobox-title">{name_zh} ({name_en})</div>
    <div class="infobox-content">
      <div><span class="label">关键属性</span><span class="value">{key_attr}</span></div>
      <div><span class="label">防具防碍</span><span class="value">{armor_check}</span></div>
      <div><span class="label">可否智力加速</span><span class="value">否</span></div>
      <div><span class="label">本职职业</span><span class="value">{class_list}</span></div>
    </div>
  </div>

  <h2>技能描述</h2>
  <p>{description}</p>

  <h2>技能检定</h2>
  <p>{check_description}</p>

  <h2>特殊说明</h2>
  <ul>
    {special_notes}
  </ul>

  <h2>实战示例</h2>
  <div class="examples">
    <h3>示例：基础使用</h3>
    <p>一个角色尝试使用{name_zh}技能。DC通常由DM设定，基于任务难度。</p>
  </div>

  <h2>规则冲突</h2>
  <div class="conflict-box">
    <div class="conflict-title">⚠️ 规则冲突标注</div>
    <div class="conflict-content">
      <p>本技能在不同资料源中基本一致，但存在一些细则差异：</p>
      <ul>
        <li><strong>PHB规则</strong>：标准规则，适用于大多数情况。</li>
        <li><strong>拓展规则</strong>：某些拓展书可能添加额外用法或调整DC。</li>
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
</html>"""

def generate_skill_page(skill):
    filename, name_zh, name_en, key_attr, armor_check, class_list = skill
    
    # 根据技能类型生成描述
    descriptions = {
        "开锁": "开锁技能让你能打开锁住的门、箱子和其它装置。",
        "解除机关": "解除机关技能让你能解除陷阱和其它危险装置。",
        "脱逃": "脱逃技能让你能从绳索、手铐、擒抱或其它束缚中逃脱。",
        "搜索": "搜索技能让你能找到隐藏的门、陷阱、秘密隔间和其它被遮掩的东西。",
        "欺瞒": "欺瞒技能让你能通过撒谎、隐瞒真相或误导来欺骗他人。",
        "易容": "易容技能让你能改变自己的外貌来冒充他人。",
        "收集信息": "收集信息技能让你能从闲聊和谣言中收集信息。",
        "驯养动物": "驯养动物技能让你能训练动物、指挥动物伙伴和骑乘动物。",
        "治疗": "治疗技能让你能稳定垂死的人、治疗伤口和疾病。",
        "察言观色": "察言观色技能让你能察觉他人的谎言、隐瞒的情绪和真实意图。",
        "估价": "估价技能让你能判断物品的价值和品质。",
        "表演": "表演技能让你能通过歌唱、演奏乐器、演戏或其它娱乐形式来取悦观众。",
        "骑术": "骑术技能让你能骑乘、控制战斗中的坐骑。",
        "使用绳索": "使用绳索技能让你能捆绑、固定、设置和快速解开绳索。",
        "巧手": "巧手技能让你能进行小偷小摸、换牌、和其它需要灵巧手指的动作。",
        "工艺": "工艺技能让你能创建、修复或识别物品。",
        "专业": "专业技能让你能在特定职业中谋生。",
        "伪造": "伪造技能让你能复制文件、签名和其它物品。",
        "解读文书": "解读文书技能让你能解读古老的文献、密码和魔法书写。",
    }
    
    description = descriptions.get(name_zh, f"{name_zh}技能让你能进行相关行动。")
    
    check_descriptions = {
        "开锁": "开锁检定对抗锁的DC。简单锁DC 15，困难锁DC 25，大师级锁DC 35。",
        "解除机关": "解除机关检定对抗陷阱的DC。简单陷阱DC 15，复杂陷阱DC 25。",
        "脱逃": "脱逃检定对抗束缚的DC或擒抱者的脱逃DC。",
        "搜索": "搜索检定对抗隐藏物品的DC。通常DC 15-25。",
        "欺瞒": "欺瞒检定是对抗检定，对抗听者的察言观色检定。",
        "易容": "易容检定对抗观察者的感知检定。",
        "收集信息": "收集信息检定DC取决于信息的隐秘程度。通常DC 10-20。",
        "驯养动物": "驯养动物检定DC取决于任务的复杂性。简单任务DC 10，复杂任务DC 20。",
        "治疗": "治疗检定DC 15来稳定垂死的人，DC 20来治疗疾病。",
        "察言观色": "察言观色检定对抗目标的欺瞒检定。",
        "估价": "估价检定DC 10判断物品价值（±10%），DC 20判断稀有度。",
        "表演": "表演检定取决于观众和表演类型。DC 10取悦普通观众，DC 20取悦挑剔观众。",
        "骑术": "骑术检定通常在坐骑受惊或战斗中进行。DC 5-20。",
        "使用绳索": "使用绳索检定DC取决于任务。捆绑DC 10，快速解开DC 15。",
        "巧手": "巧手检定DC取决于任务。偷取小物品DC 15，换牌DC 20。",
        "工艺": "工艺检定DC取决于制作物品。简单物品DC 10，复杂物品DC 20。",
        "专业": "专业检定通常DC 15来判断你是否在本周工作中表现出色。",
        "伪造": "伪造检定对抗观察者的辨识检定。DC 15普通文件，DC 25完美伪造。",
        "解读文书": "解读文书检定DC 20解读普通古代文献，DC 30解读魔法文书。",
    }
    
    check_description = check_descriptions.get(name_zh, f"{name_zh}检定由DM设定DC。")
    
    special_notes = {
        "开锁": "<li><strong>工具要求</strong>：需要盗贼工具。没有工具受-4罚值。</li>\n    <li><strong>时间</strong>：打开普通锁需要1轮（6秒）。</li>",
        "解除机关": "<li><strong>工具要求</strong>：需要盗贼工具。没有工具受-4罚值。</li>\n    <li><strong>风险</strong>：失败可能触发陷阱。</li>",
        "脱逃": "<li><strong>缚绳</strong>：挣脱绳索需要脱逃检定（DC 15-25）。</li>\n    <li><strong>擒抱</strong>：从擒抱中逃脱需要脱逃检定对抗擒抱者。",
        "搜索": "<li><strong>时间</strong>：搜索一个5尺方格需要1轮（6秒）。</li>\n    <li><strong>重试</strong>：可以重试，但每次重试需要1轮。</li>",
        "欺瞒": "<li><strong>对抗</strong>：与目标的察言观色检定对抗。</li>\n    <li><strong>惩罚</strong>：被发现撒谎会导致关系恶化。</li>",
        "易容": "<li><strong>时间</strong>：进行易容需要1d4×10分钟。</li>\n    <li><strong>熟悉度</strong>：伪装成熟悉的人受-4罚值。</li>",
        "收集信息": "<li><strong>时间</strong>：收集信息需要1d4小时。</li>\n    <li><strong>地点</strong>：在酒馆、市场等地方更容易收集信息。</li>",
        "驯养动物": "<li><strong>时间</strong>：训练动物需要每周训练。</li>\n    <li><strong>天性</strong>：某些动物有天性（如猎犬+4搜查）。</li>",
        "治疗": "<li><strong>稳定</strong>：稳定垂死的人需要1轮（6秒）。</li>\n    <li><strong>长期治疗</strong>：长期治疗需要每天治疗检定。</li>",
        "察言观色": "<li><strong>时间</strong>：通常需要1轮观察。</li>\n    <li><strong>对抗</strong>：与目标的欺瞒检定对抗。</li>",
        "估价": "<li><strong>时间</strong>：估价一件物品需要1轮（6秒）。</li>\n    <li><strong>专业知识</strong>：对不同类型物品估价可能需要专业知识。</li>",
        "表演": "<li><strong>时间</strong>：表演需要至少1轮。</li>\n    <li><strong>收入</strong>：成功的表演可以赚取金钱。</li>",
        "骑术": "<li><strong>防具</strong>：马用防甲会对骑术检定造成防碍。</li>\n    <li><strong>控制</strong>：控制受惊的坐骑需要骑术检定。</li>",
        "使用绳索": "<li><strong>捆绑</strong>：捆绑需要1轮，目标可以脱逃检定挣脱。</li>\n    <li><strong>特殊绳索</strong>：蛛丝绳等特殊绳索可能有特殊用法。</li>",
        "巧手": "<li><strong>对抗</strong>：偷取物品时，对抗目标的感知检定。</li>\n    <li><strong>光线</strong>：在昏暗光线下+2，在黑暗中+4。</li>",
        "工艺": "<li><strong>类型</strong>：工艺有多种类型（锻造、木工、制皮等）。</li>\n    <li><strong>时间</strong>：制作物品需要数天到数周。</li>",
        "专业": "<li><strong>类型</strong>：专业有多种类型（士兵、律师、厨师等）。</li>\n    <li><strong>收入</strong>：成功的专业检定可以赚取金钱。</li>",
        "伪造": "<li><strong>时间</strong>：伪造文件需要1d4小时到数天。</li>\n    <li><strong>样本</strong>：有样本可以+4。</li>",
        "解读文书": "<li><strong>时间</strong>：解读一份文书需要1d4小时到数天。</li>\n    <li><strong>语言</strong>：需要懂相关语言。</li>",
    }
    
    special_notes_str = special_notes.get(name_zh, "<li><strong>基本规则</strong>：按照玩家手册相关描述进行。</li>")
    
    html_content = html_template.format(
        filename=filename,
        name_zh=name_zh,
        name_en=name_en,
        key_attr=key_attr,
        armor_check=armor_check,
        class_list=class_list,
        description=description,
        check_description=check_description,
        special_notes=special_notes_str
    )
    
    return html_content

def main():
    import os
    
    output_dir = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\skills"
    
    for skill in skills_data:
        filename = skill[0]
        filepath = os.path.join(output_dir, f"{filename}.html")
        
        html_content = generate_skill_page(skill)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"[OK] 已生成：{skill[1]} ({skill[2]})")
    
    print(f"\n[Done] 批量生成完成！共生成 {len(skills_data)} 个技能页面")

if __name__ == "__main__":
    main()
