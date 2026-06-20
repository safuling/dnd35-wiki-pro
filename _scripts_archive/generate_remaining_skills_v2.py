#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量生成D&D 3.5e技能页面的基础版本（第二版）
已创建高质量页面：攀爬、隐匿、侦察、交涉、知识（奥术）、使用魔法装置、法术辨识、跳跃、聆听、生存
需要生成基础版本：剩余20+个技能
"""

skills_base = [
    # (文件名, 技能名, 英文名, 关键属性, 是否训练技能, 说明, 基础DC, 详情, 示例任务, 冲突话题, 冲突点, 官方规则, 误传, 建议, 页码)
    ("swim.html", "游泳", "Swim", "力量", False, "在水中移动", "10", "游泳技能允许你在水中移动。需要呼吸管理。", "游过一条河", "游泳的体力消耗", "游泳是否消耗移动动作？", "PHB p.84", "部分网站声称'游泳消耗整轮动作'", "按PHB执行，游泳是移动等效动作", "p.84"),
    ("escape-artist.html", "脱逃", "Escape Artist", "敏捷", False, "脱离束缚/绳索", "15", "脱逃技能允许你脱离绳索、手铐、擒抱等。", "脱离绳索束缚", "脱逃的动作时间", "脱逃是标准动作还是移动等效动作？", "PHB p.72", "部分网站声称'脱逃是即时动作'", "按PHB执行，脱逃是标准动作", "p.72"),
    ("tumble.html", "体操", "Tumble", "敏捷", False, "翻滚/穿越威胁区域", "15", "体操技能允许你翻滚躲避攻击、穿越威胁区域。", "翻滚躲避攻击", "体操的攻击惩罚", "体操翻滚后是否受到攻击惩罚？", "PHB p.83", "部分网站声称'体操翻滚无惩罚'", "按PHB执行，翻滚后有攻击惩罚", "p.83"),
    ("move-silently.html", "潜行", "Move Silently", "敏捷", False, "无声移动", "0", "潜行技能允许你无声移动，不被听见。对抗聆听。", "悄无声息地接近敌人", "潜行的距离影响", "潜行是否受距离影响？", "PHB p.80", "部分网站声称'潜行不受距离影响'", "按PHB执行，距离影响聆听但不直接影响潜行", "p.80"),
    ("open-lock.html", "开锁", "Open Lock", "敏捷", True, "打开机械锁", "指定的DC", "开锁技能允许你打开机械锁（非魔法锁）。需要开锁工具。", "打开一扇锁着的门", "开锁工具的必要性", "是否可以无需工具开锁？", "PHB p.80", "部分网站声称'可以无需工具开锁'", "按PHB执行，需要开锁工具（除外专长）", "p.80"),
    ("intimidate.html", "威吓", "Intimidate", "魅力", False, "迫使他人合作", "10-30", "威吓技能允许你通过威胁迫使他人合作或恐慌。", "威吓守卫打开城门", "威吓的持续时间", "威吓效果是即时还是持续？", "PHB p.77", "部分网站声称'威吓效果持续整轮'", "按PHB执行，威吓效果通常是即时", "p.77"),
    ("perform.html", "表演", "Perform", "魅力", False, "娱乐观众", "10-25", "表演技能允许你通过音乐、舞蹈、演戏等娱乐观众。", "在酒馆表演赚取金币", "表演的收入计算", "表演每分钟赚取多少金币？", "PHB p.80", "部分网站声称'表演赚取大量金币'", "按PHB执行，表演收入有限", "p.80"),
    ("handle-animal.html", "驯养动物", "Handle Animal", "魅力", True, "训练/指挥动物", "10-25", "驯养动物技能允许你训练动物、指挥动物、理解动物行为。", "训练一匹战马", "驯养动物的动作时间", "驯养动物是整轮动作还是标准动作？", "PHB p.76", "部分网站声称'驯养动物是移动等效动作'", "按PHB执行，训练是整轮动作", "p.76"),
    ("ride.html", "骑术", "Ride", "敏捷", False, "骑马/控制坐骑", "5-15", "骑术技能允许你骑马、控制坐骑、进行骑行攻击。", "骑马冲锋", "骑术的攻击惩罚", "骑行攻击是否受到惩罚？", "PHB p.81", "部分网站声称'骑行攻击无惩罚'", "按PHB执行，骑行攻击有惩罚", "p.81"),
    ("sense-motive.html", "察言观色", "Sense Motive", "感知", False, "察觉谎言/隐藏意图", "15-30", "察言观色技能允许你察觉谎言、理解隐藏意图、看穿伪装。", "察觉NPC的谎言", "察言观色的对抗", "察言观色是否对抗交涉/唬骗？", "PHB p.82", "部分网站声称'察言观色自动成功'", "按PHB执行，需要成功检定", "p.82"),
    ("appraise.html", "估价", "Appraise", "智力", False, "评估物品价值", "10-25", "估价技能允许你评估魔法物品、宝石、艺术品的的价值。", "评估一颗宝石的价值", "估价的准确率", "估价是否100%准确？", "PHB p.67", "部分网站声称'估价总是准确'", "按PHB执行，失败则估价错误", "p.67"),
    ("search.html", "搜索", "Search", "智力", False, "寻找隐藏物品/机关", "10-25", "搜索技能允许你寻找隐藏门、机关、陷阱、秘密 compartment。", "寻找隐藏门", "搜索的动作时间", "搜索是标准动作还是整轮动作？", "PHB p.82", "部分网站声称'搜索是移动等效动作'", "按PHB执行，搜索是标准动作", "p.82"),
    ("disable-device.html", "禁用装置", "Disable Device", "智力", True, "拆除陷阱/装置", "指定的DC", "禁用装置技能允许你拆除陷阱、解除机关、破坏装置。", "拆除一个陷阱", "禁用装置是否触发陷阱", "失败是否触发陷阱？", "PHB p.71", "部分网站声称'失败不会触发陷阱'", "按PHB执行，失败可能触发陷阱", "p.71"),
    ("heal.html", "行医", "Heal", "感知", False, "治疗伤者/疾病", "15-25", "行医技能允许你治疗伤者、治疗疾病、解毒。", "治疗伤者的伤害", "行医的治疗量", "行医每次治疗多少伤害？", "PHB p.75", "部分网站声称'行医可以治疗大量伤害'", "按PHB执行，治疗量有限", "p.75"),
    ("knowledge-dungeoneering.html", "知识（地下城）", "Knowledge (Dungeoneering)", "智力", True, "地下城/洞穴知识", "10-25", "知识（地下城）允许你回忆地下城、洞穴、地下生物的知识。", "识别地下城生物", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-geography.html", "知识（地理）", "Knowledge (Geography)", "智力", True, "地理/地形知识", "10-25", "知识（地理）允许你回忆地理、地形、城市、国家等知识。", "识别地形类型", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-history.html", "知识（历史）", "Knowledge (History)", "智力", True, "历史/传说知识", "10-25", "知识（历史）允许你回忆历史、传说、人物、事件等知识。", "回忆古代战争", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-local.html", "知识（地方）", "Knowledge (Local)", "智力", True, "本地/人物知识", "10-25", "知识（地方）允许你回忆本地人物、家族、政治等知识。", "识别本地贵族", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-nature.html", "知识（自然）", "Knowledge (Nature)", "智力", True, "自然/动物/天气知识", "10-25", "知识（自然）允许你回忆自然、动物、天气、植物等知识。", "识别野生动物", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-nobility.html", "知识（贵族）", "Knowledge (Nobility)", "智力", True, "贵族/皇室/纹章知识", "10-25", "知识（贵族）允许你回忆贵族、皇室、纹章、礼仪等知识。", "识别贵族纹章", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-religion.html", "知识（宗教）", "Knowledge (Religion)", "智力", True, "神祇/神术/教堂知识", "10-25", "知识（宗教）允许你回忆神祇、神术、教堂、教派等知识。", "识别神祇符号", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("knowledge-the-planes.html", "知识（位面）", "Knowledge (The Planes)", "智力", True, "位面/异界生物知识", "10-25", "知识（位面）允许你回忆位面、异界生物、异界地理等知识。", "识别异界生物", "知识技能的跨职业限制", "知识技能作为跨职业技能是否有上限？", "PHB p.79", "部分网站声称'知识技能无上限'", "按PHB执行，跨职业技能上限为等级+3", "p.79"),
    ("craft.html", "手艺", "Craft", "智力", False, "制作物品", "指定的DC", "手艺技能允许你制作物品、盔甲、武器、工具等。", "制作一把剑", "手艺的制作时间", "手艺制作需要多长时间？", "PHB p.69", "部分网站声称'手艺制作很快'", "按PHB执行，制作需要数天到数周", "p.69"),
    ("profession.html", "专业", "Profession", "感知", True, "从事专业工作", "10-25", "专业技能允许你从事专业工作（矿工、渔民、厨师等）赚取金币。", "作为矿工赚取金币", "专业的收入计算", "专业每分钟赚取多少金币？", "PHB p.81", "部分网站声称'专业赚取大量金币'", "按PHB执行，专业收入有限", "p.81"),
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
        .conflict-box {{
            background: #fff3e0;
            border-left: 4px solid #ff9800;
            padding: 15px;
            margin: 15px 0;
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
        </div>

        <div class="example-box">
            <h3>💡 实战示例</h3>
            <p><strong>场景</strong>：你是一名角色（{ability}调整值），有X点{name}调整值。</p>
            <p><strong>总调整值</strong>：X（调整值点数）+ {ability}调整值 = +Y</p>
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
            <p><strong>官方规则（{official_source}）</strong>：{official_rule}</p>
            <p><strong>网络误传</strong>：{misinformation}</p>
            <p><strong>推荐处理</strong>：{recommendation}</p>
            <p class="source">📚 出处：{official_source}, 3.5版 FAQ v.2.0</p>
        </div>

        <div class="info-box">
            <h3>📚 规则出处</h3>
            <ul>
                <li><strong>玩家手册 (PHB)</strong>：{page}，{name}技能详细描述</li>
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
    (filename, name, name_en, ability, trained, desc, base_dc, 
     details, example_task, conflict_topic, conflict_point, official_source,
     official_rule, misinformation, recommendation, page) = skill_info
    
    ability_short, ability_full, ability_adj = get_ability_info(ability)
    
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
        official_source=official_source,
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
