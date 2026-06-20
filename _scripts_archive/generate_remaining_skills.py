#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e技能页面的基础版本
已创建高质量页面：攀爬、隐匿、侦察、交涉、知识（奥术）
需要生成基础版本：剩余31个技能
"""

skills_base = [
    # (文件名, 技能名, 英文名, 关键属性, 是否训练技能, 说明)
    ("jump.html", "跳跃", "Jump", "力量", False, "跳跃更远/更高"),
    ("swim.html", "游泳", "Swim", "力量", False, "在水中移动"),
    ("escape-artist.html", "脱逃", "Escape Artist", "敏捷", False, "脱离束缚/绳索"),
    ("tumble.html", "体操", "Tumble", "敏捷", False, "翻滚/穿越威胁区域"),
    ("open-lock.html", "开锁", "Open Lock", "敏捷", True, "打开机械锁"),
    ("move-silently.html", "潜行", "Move Silently", "敏捷", False, "无声移动"),
    ("listen.html", "聆听", "Listen", "感知", False, "听到声音/接近的敌人"),
    ("sense-motive.html", "察言观色", "Sense Motive", "感知", False, "察觉谎言/隐藏意图"),
    ("survival.html", "生存", "Survival", "感知", False, "追踪/野外生存"),
    ("heal.html", "行医", "Heal", "感知", False, "治疗伤者/疾病"),
    ("intimidate.html", "威吓", "Intimidate", "魅力", False, "迫使他人合作"),
    ("perform.html", "表演", "Perform", "魅力", False, "娱乐观众"),
    ("handle-animal.html", "驯养动物", "Handle Animal", "魅力", True, "训练/指挥动物"),
    ("ride.html", "骑术", "Ride", "敏捷", False, "骑马/控制坐骑"),
    ("use-magic-device.html", "使用魔法装置", "Use Magic Device", "魅力", True, "使用卷轴/魔杖/法杖"),
    ("spellcraft.html", "法术辨识", "Spellcraft", "智力", True, "识别法术/法术效果"),
    ("appraise.html", "估价", "Appraise", "智力", False, "评估物品价值"),
    ("decipher-script.html", "解读文书", "Decipher Script", "智力", True, "解读古代/神秘文字"),
    ("forgery.html", "伪造", "Forgery", "智力", False, "伪造文件/签名"),
    ("search.html", "搜索", "Search", "智力", False, "寻找隐藏物品/机关"),
    ("disable-device.html", "禁用装置", "Disable Device", "智力", True, "拆除陷阱/装置"),
    ("knowledge-dungeoneering.html", "知识（地下城）", "Knowledge (Dungeoneering)", "智力", True, "地下城/洞穴知识"),
    ("knowledge-geography.html", "知识（地理）", "Knowledge (Geography)", "智力", True, "地理/地形知识"),
    ("knowledge-history.html", "知识（历史）", "Knowledge (History)", "智力", True, "历史/传说知识"),
    ("knowledge-local.html", "知识（地方）", "Knowledge (Local)", "智力", True, "本地/人物知识"),
    ("knowledge-nature.html", "知识（自然）", "Knowledge (Nature)", "智力", True, "自然/动物/天气知识"),
    ("knowledge-nobility.html", "知识（贵族）", "Knowledge (Nobility)", "智力", True, "贵族/皇室/纹章知识"),
    ("knowledge-religion.html", "知识（宗教）", "Knowledge (Religion)", "智力", True, "神祇/神术/教堂知识"),
    ("knowledge-the-planes.html", "知识（位面）", "Knowledge (The Planes)", "智力", True, "位面/异界生物知识"),
    ("craft.html", "手艺", "Craft", "智力", False, "制作物品"),
    ("profession.html", "专业", "Profession", "感知", True, "从事专业工作"),
]

HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name} - D&D 3.5e 中文Wiki</title>
    <link rel="stylesheet" href="../style.css">
    <style>
        .skill-header {{
            background: linear-gradient(135deg, #555 0%, #777 100%);
            color: white;
            padding: 30px;
            border-radius: 8px;
            margin-bottom: 30px;
        }}
        .ability-badge {{
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 5px 15px;
            border-radius: 20px;
            margin: 5px;
            font-weight: bold;
        }}
    </style>
</head>
<body>
    <nav class="top-nav">
        <div class="nav-brand">🐉 D&D 3.5e Wiki</div>
        <div class="nav-links">
            <a href="../index.html">首页</a>
            <a href="intro.html" class="active">技能</a>
            <a href="../spells/intro.html">法术</a>
            <a href="../races/human.html">种族</a>
            <a href="../classes/wizard.html">职业</a>
            <a href="../feats/intro.html">专长</a>
            <a href="../conflicts.html">规则冲突</a>
        </div>
    </nav>

    <div class="container">
        <div class="skill-header">
            <h1>📘 {name} ({name_en})</h1>
            <p class="subtitle">{ability}技能 · {"训练技能" if trained else "跨职业技能"}</p>
            <div>
                <span class="ability-badge">关键属性：{ability} ({ability_short})</span>
                <span class="ability-badge">调整值：1d20 + 调整值点数 + {ability}调整值</span>
            </div>
        </div>

        <div class="info-box">
            <h3>📖 技能描述</h3>
            <p>{desc}</p>
            
            <h4>调整值计算</h4>
            <p class="formula">{name}调整值 = {name}调整值点数 + {ability}调整值 + 其他调整值</p>
            
            <h4>检定条件</h4>
            <ul>
                <li><strong>动作</strong>：标准动作（Standard Action）</li>
                <li><strong>重试</strong>：可以，但某些情况下可能有DC惩罚</li>
                <li><strong>特殊</strong>：{"这是训练技能，只有训练后才能真正擅长" if trained else "这是跨职业技能，调整值上限为角色等级+3"}</li>
            </ul>
        </div>

        <div class="section">
            <h2>📊 难度等级 (DC)</h2>
            <p>基础DC：{base_dc}</p>
            <ul>
                <li><strong>简单任务</strong>：DC 0-10</li>
                <li><strong>中等任务</strong>：DC 10-20</li>
                <li><strong>困难任务</strong>：DC 20-30</li>
                <li><strong>极难任务</strong>：DC 30+</li>
            </ul>
        </div>

        <div class="section">
            <h2>📋 技能细则</h2>
            <p>{details}</p>
            
            <h3>特殊能力</h3>
            <ul>
                <li><strong>相关专长</strong>：某些专长可以提升此技能的调整值</li>
                <li><strong>种族特性</strong>：某些种族在此技能上有天生调整值</li>
                <li><strong>法术影响</strong>：某些法术可以暂时提升此技能的调整值</li>
            </ul>
        </div>

        <div class="example-box">
            <h3>💡 实战示例</h3>
            <p><strong>场景</strong>：你是一名角色（{ability} {ability_value}，{ability_adj}调整值），有X点{name}调整值。</p>
            <p><strong>总调整值</strong>：X（调整值点数）+ {ability_adj}（{ability}调整值）= +Y</p>
            <p><strong>任务</strong>：{example_task}。</p>
            <p><strong>检定</strong>：1d20 + Y = Z ≥ DC，成功！</p>
        </div>

        <div class="section">
            <h2>🎯 搭配专长</h2>
            <ul>
                <li><strong>相关专长</strong>：列出可以提升此技能的专长</li>
                <li><strong>互补技能</strong>：列出与此技能经常一起使用的其他技能</li>
            </ul>
        </div>

        <div class="conflict-box">
            <h3>⚠️ 规则冲突：{conflict_topic}</h3>
            <p><strong>冲突点</strong>：{conflict_point}</p>
            <p><strong>官方规则（PHB p.{page}）</strong>：{official_rule}</p>
            <p><strong>网络误传</strong>：{misinformation}</p>
            <p><strong>推荐处理</strong>：{recommendation}</p>
            <p class="source">📚 出处：PHB p.{page}, 3.5版 FAQ v.2.0</p>
        </div>

        <div class="info-box">
            <h3>📚 规则出处</h3>
            <ul>
                <li><strong>玩家手册 (PHB)</strong>：p.{page}，{name}技能详细描述</li>
                <li><strong>3.5版 FAQ</strong>：v.2.0，{name}相关问答</li>
            </ul>
        </div>
    </div>

    <footer class="site-footer">
        <p>🐉 D&D 3.5e 中文Wiki | 基于《玩家手册》(PHB) 规则</p>
        <p>本网站为粉丝制作，非官方作品。Dungeons & Dragons 是 Wizards of the Coast 的商标。</p>
    </footer>
</body>
</html>'''

def get_ability_info(ability):
    """获取属性信息"""
    abilities = {
        "力量": ("STR", "力量", "STR"),
        "敏捷": ("DEX", "敏捷", "DEX"),
        "体质": ("CON", "体质", "CON"),
        "智力": ("INT", "智力", "INT"),
        "感知": ("WIS", "感知", "WIS"),
        "魅力": ("CHA", "魅力", "CHA")
    }
    return abilities.get(ability, ("???", ability, "???"))

def generate_skill_html(skill_info):
    """生成单个技能HTML"""
    filename, name, name_en, ability, trained, desc = skill_info
    
    ability_short, ability_full, ability_adj = get_ability_info(ability)
    
    # 基础默认值
    base_dc = "10"
    details = f"这是{name}技能的详细描述。需要补充具体内容。"
    example_task = f"执行{name}任务"
    conflict_topic = f"{name}的规则解释"
    conflict_point = "某些细节在不同资料中有不同解释"
    official_rule = f"根据PHB，{name}的规则是..."
    misinformation = "网络上有误传..."
    recommendation = "严格按PHB执行"
    page = "未知"
    
    # 格式化
    html = HTML_TEMPLATE.format(
        name=name,
        name_en=name_en,
        ability=ability,
        ability_short=ability_short,
        ability_full=ability_full,
        ability_adj=ability_adj,
        trained=trained,
        desc=desc,
        base_dc=base_dc,
        details=details,
        example_task=example_task,
        conflict_topic=conflict_topic,
        conflict_point=conflict_point,
        official_rule=official_rule,
        misinformation=misinformation,
        recommendation=recommendation,
        page=page
    )
    
    return filename, html

def main():
    import os
    
    # 获取脚本所在目录
    script_dir = os.path.dirname(os.path.abspath(__file__))
    skills_dir = os.path.join(script_dir, "skills")
    
    # 确保skills目录存在
    os.makedirs(skills_dir, exist_ok=True)
    
    count = 0
    for skill_info in skills_base:
        filename, html = generate_skill_html(skill_info)
        filepath = os.path.join(skills_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
        
        print(f"✅ 已生成：{filename}")
        count += 1
    
    print(f"\n🎉 完成！共生成 {count} 个技能页面基础版本")

if __name__ == "__main__":
    main()
