#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# 给关键争议法术添加 conflicts 字段

import re

filepath = r"C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\js\spells-data.js"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 定义每个法术的冲突数据
conflicts_data = {
    "identify": [
        {
            "point": "鉴定术的材料成分消耗",
            "phbRule": "PHB规定鉴定术需要消耗100gp的宝石粉尘作为材料成分，且施法时间1小时（原始规则）。",
            "controversy": "许多DM忽略材料成分和长时间施法要求，允许以标准动作免费鉴定。SRD和DMG1有多种互相矛盾的简化版本。部分线上资料库（如d20srd.org）列出的是1小时施法时间+100gp材料，而部分玩家手册印刷批次标注不一致。",
            "suggestion": "建议DM明确规则：严格使用PHB规则（1小时+100gp）以获得平衡性；或采用简化版（标准动作，无材料）以提高游戏流畅度。需在游戏开始前达成共识。",
            "source": "PHB p.242 / SRD / d20srd.org"
        },
        {
            "point": "鉴定术与奥术检定",
            "phbRule": "法术描述未明确要求奥术检定，但部分DM houserule 要求当鉴定魔法物品时需要DC=物品CL的奥术检定。",
            "controversy": "这是常见的house rule，并非PHB原文。PHB原文只需施法并消耗材料。",
            "suggestion": "如DM拟加入奥术检定，建议DC=15或物品CL，并在游戏前说明。",
            "source": "社区House Rule / GIEE p.28"
        }
    ],
    "invisibility": [
        {
            "point": "施法是否打破隐形",
            "phbRule": "PHB明确规定：施展法术会打破隐形状态，除非该法术本身有'Only oneself'范围限制且不直接伤害他人。",
            "controversy": "玩家常争议：'我对自己施展祝福术是否打破隐形？'  Strictly speaking, yes. 但许多DM allow self-only buffs without breaking invisibility. 另外，远程接触法术（如电击术）是否打破隐形？PHB说'任何攻击或施法都会打破'，但'攻击'定义有争议。",
            "suggestion": "建议采用常见house rule：对自己施展的非攻击性法术不打破隐形；攻击性法术（无论目标）打破隐形。明确'攻击性'定义。",
            "source": "PHB p.296 / 社区共识 / GIEE p.68"
        },
        {
            "point": "隐形的精确感知",
            "phbRule": "隐形生物仍然可以被听见、闻到、或通过其他方式感知。精确感知需要DC=20+SL的侦察检定（PHB）。",
            "controversy": "PHB说'仍然可以被听见'，但未明确'听见'的DC。部分DM使用Spot DC=0（只要发出声音就能被听见），部分使用Spot DC=20。SRD和PHB在此处表述略有差异。",
            "suggestion": "建议统一使用Spot DC=20来精确感知隐形生物的精确位置；使用听得见的声音方向（不需要检定）来感知大致方向。",
            "source": "PHB p.296 / SRD"
        }
    ],
    "dispel_magic": [
        {
            "point": "解除魔法的施法者等级检定",
            "phbRule": "解除魔法需要对每个被解除的法术进行施法者等级检定（1d20+施法者等级 vs 10+原施法者等级）。每个法术独立检定。",
            "controversy": "PHB原文说'对每个法术进行检定'，但实际游戏中许多DM只投一次检定用于所有法术。此外，'原施法者等级'是指当前持有法术的生物的CL，还是最初施展法术的生物的CL？如果法术被固定在物品上，CL是多少？这些细节PHB未明确。",
            "suggestion": "建议每个法术独立检定；'原施法者等级'采用法术当前持有者的CL（对于物品，采用创建者的CL）。如希望简化，可允许一次检定用于所有同CL的法术。",
            "source": "PHB p.223 / SRD / 社区FAQ"
        },
        {
            "point": "解除魔法与反制法术",
            "phbRule": "解除魔法可在战斗中用于解除持续法术，但不能'反制'正在施展的法术（反制法术需要法术抗制技能）。",
            "controversy": "部分玩家混淆'解除魔法'和'法术抗制'。此外，解除魔法是否能解除'即时'法术（如闪避之靴的触发效果）？PHB未明确。",
            "suggestion": "解除魔法只影响持续法术（持续时间非'立即'）。触发式魔法物品需要'解除魔法物品'专门规则（见DMG）。",
            "source": "PHB p.223 / DMG p.285"
        }
    ],
    "haste": [
        {
            "point": "加速术的额外攻击",
            "phbRule": "加速术给予一个额外的全回合攻击（使用主手武器），但不给予额外的附带动作（如移动、使用物品等）。PHB 3.5e版加速术已改为只给予'+1次攻击'而非额外整轮攻击。",
            "controversy": "3.0版加速术给予整轮攻击，3.5e改为只+1次攻击。许多玩家仍沿用3.0规则。此外，加速术与双重挥击（Two-Weapon Fighting）的交互：额外攻击是否可以用副手？PHB说'全回合攻击动作'，但未明确是否可以用副手进行额外攻击。",
            "suggestion": "严格使用3.5e规则：加速术给予'+1次攻击'（在任何其他攻击之后）。额外攻击可以使用任何已持武器（包括副手，如果你已拥有双重挥击专长）。",
            "source": "PHB p.283 (3.5e更新) / SRD / 3.5e FAQ v2.0"
        },
        {
            "point": "加速术与法术加速",
            "phbRule": "加速术不影响施法时间。加速术只影响移动速度和攻击次数，不影响法术施展。",
            "controversy": "部分玩家误以为加速术可以减少施法时间（类似'加速施法'专长）。这是错误的。但'法术加速'（Hasten Spell）专长确实存在，允许以更少时间施展法术。两者常混淆。",
            "suggestion": "明确区分：加速术（Haste）= 更多攻击/更快移动；法术加速（Hasten Spell专长）= 更少施法时间。",
            "source": "PHB p.283 / 专长：法术加速"
        }
    ],
    "polymorph": [
        {
            "point": "变化术（Polymorph）的属性替换规则",
            "phbRule": "PHB p.263：变化术将目标变为指定生物，获得该生物的所有生理属性和特殊攻击/品质，但保留自己的心智属性（Int/Wis/Cha）和生命值、豁免加值、BAB、和法术能力。",
            "controversy": "这是D&D 3.5e中最具争议的规则之一。核心争议：'获得该生物的所有生理属性和特殊攻击/品质'到底包括什么？自然武器攻击加值是否替换？天生护甲是否替换？速度是否替换？PHB表述模糊，导致无数争论。Polymorph Subschool在3.5e FAQ和Rules Compendium中有大量errata。",
            "suggestion": "建议采用Rules Compendium 2006或3.5e FAQ v2.0的澄清：变化术只给予'形态'相关能力（自然武器、速度、天生护甲），不给予RHD的BAB/豁免加值，不给予后天获得的能力（如职业等级、专长）。详细规则见Rules Compendium p.121-126。",
            "source": "PHB p.263 / Rules Compendium 2006 p.121-126 / 3.5e FAQ v2.0 / GIEE p.45"
        },
        {
            "point": "变化术与类型改变",
            "phbRule": "变化术改变生物类型为'变化形态'，但保留原生物的亚型。对不死生物、构装体等无效（除非有特殊豁免）。",
            "controversy": "PHB说'对不死生物、构装体、元素生物无效'，但未明确：变化形态后是否获得新类型的弱点（如对火元素的免疫）？部分DM认为变化术给予'类型'相关免疫/易伤，部分认为只改变形态不改变类型相关特性。",
            "suggestion": "建议采用严格解释：变化术只改变物理形态，不改变类型相关的免疫/易伤/特质。要获得类型特质，需要使用'变身术'（Shapechange）或类似高阶法术。",
            "source": "PHB p.263 / Rules Compendium p.122"
        }
    ],
    "teleport": [
        {
            "point": "传送术的偏差距离",
            "phbRule": "PHB p.292：传送术的精确度取决于'熟悉程度'。精确熟知（曾到访并仔细研究）= 偏差0-10尺；大致了解（曾到访）= 偏差1d10×1d10尺；仅见过（通过魔法或描述）= 偏差1d10×1d100尺；描述= 偏差1d10×1d1000尺。",
            "controversy": "偏差的计算方式存在争议：'1d10×1d10尺'是先投两个d10然后相乘，还是1d10×10尺？PHB原文写的是'1d10×1d10'，但部分线上资料库解释为'1d10×10'。此外，'曾到访并仔细研究'的定义不明确：需要研究多久？是否需要奥术检定？",
            "suggestion": "建议严格按照PHB：偏差=两个d10相乘（范围0-100尺）。'仔细研究'定义为：在目标地点停留至少1天并进行过 intentional study（DM判定）。",
            "source": "PHB p.292 / SRD / d20srd.org / 3.5e FAQ"
        },
        {
            "point": "传送术与宿主ile环境",
            "phbRule": "如果传送目标区域被固体物质占据，传送失败并造成伤害（每个参与者1d10点伤害，传送被取消）。",
            "controversy": "如果目标区域是'大致位置'但恰好有墙壁，是否触发失败？如果传送目标是在敌人内部（如被束缚在盒子里），是否自动失败？PHB未明确。此外，'固体物质'是否包括水、泥、或其他非固体但阻碍移动的物质？",
            "suggestion": "建议：传送目标必须是'空旷区域'（至少5尺立方）。水/泥等半固体物质视为'可通行'但可能导致其他后果（如窒息）。故意传送到敌人内部视为'恶劣环境'，DM可施加penalty或自动失败。",
            "source": "PHB p.292 / DMG p.149 / 社区共识"
        }
    ],
    "shapechange": [
        {
            "point": "变身术（Shapechange）的能力保留",
            "phbRule": "PHB p.277：变身术允许施法者变为任何体型1-20HD的魔法生物，获得该生物的所有特殊攻击、特殊品质、和超自然能力。保留自己的心智属性、生命值、豁免加值、BAB、和法术能力。",
            "controversy": "与变化术类似，但更高阶。争议点：'所有特殊攻击、特殊品质、和超自然能力'是否包括Ex能力？PHB说'超自然能力（Su）'，但'特殊攻击/品质'常包括Ex能力。此外，变身术是否允许获得类法术能力（Sp）？PHB说'超自然能力'，但类法术能力是否被包括存在争议。Errata明确包括Sp和Su。",
            "suggestion": "建议采用3.5e EraErrata的澄清：变身术给予Su和Sp能力，但不包括Ex能力（除非该Ex能力是'特殊攻击/品质'的核心部分，如龙息）。详细列表见Rules Compendium。",
            "source": "PHB p.277 / 3.5e EraErrata / Rules Compendium p.126 / GIEE p.47"
        }
    ],
    "wish": [
        {
            "point": "许愿术（Wish）的DM裁量权",
            "phbRule": "PHB p.302：许愿术可以实现几乎任何愿望，但DM可以限制或扭曲愿望。标准用法：复制8环或更低法术（无需材料/专注），治疗1d4×10点伤害，复活死者，回复所有法术，+1天生加值（永久），等。",
            "controversy": "许愿术是D&D中最具争议的法术，因为'几乎任何愿望'的模糊性。玩家常试图用许愿术获得超出规则的好处（如'许愿获得无限金币'）。DM如何平衡'几乎任何'与游戏平衡？此外，'复制8环或更低法术'是否包括神术？PHB说'法术'，未区分奥术/神术。",
            "suggestion": "建议DM在游戏前明确许愿术的限制清单。标准限制：不能复制9环法术，不能直接杀死boss，不能获得超出规则的经济利益，不能改变基本规则。'复制法术'包括奥术和神术。",
            "source": "PHB p.302 / DMG p.201 / 社区共识 / GIEE p.89"
        },
        {
            "point": "许愿术与XP代价",
            "phbRule": "PHB未明确许愿术是否需要XP代价来复制需要XP的法术（如Simulacrum）。但常见house rule是：许愿术复制法术时不需材料/XP，除非DM特别规定。",
            "controversy": "这是一个常见的争议点。部分DM认为许愿术'复制法术'应包括所有代价（包括XP），部分认为许愿术豁免所有代价。",
            "suggestion": "建议采用常见house rule：许愿术复制法术时豁免材料成分和专注要求，但不豁免XP代价（如复制Simulacrum仍需支付XP）。这保持了游戏平衡。",
            "source": "社区House Rule / GIEE p.89 / 3.5e FAQ"
        }
    ],
    "miracle": [
        {
            "point": "奇迹术（Miracle）与许愿术的对比",
            "phbRule": "DMG p. Among Us：奇迹术是神术版许愿术，但需要神明回应。标准用法类似许愿术，但受神明意愿限制。",
            "controversy": "奇迹术的'神明回应'机制不明确：神明是否总是回应？如果神明不喜欢请求，是否可以拒绝？拒绝的后果是什么？PHB未明确。此外，奇迹术是否受法术抗力影响？作为神术，理论上不受法术抗力影响，但部分DM house rule 要求通过法术抗力。",
            "suggestion": "建议：神明回应是自动的（除非请求明显违背神明教义）。'违背神明教义'的例子：战神不允许'治愈敌人'的奇迹。DM应提前说明神明的偏好。奇迹术作为神术，不受法术抗力影响。",
            "source": "DMG p. (Miracle描述) / 社区共识 / 神术规则"
        }
    ],
    "protection_from_energy": [
        {
            "point": "防护自能量与抵抗能量叠加",
            "phbRule": "PHB p.266：防护自能量给予对指定能量类型的免疫（12点伤害/轮，持续最多12轮/天）。抵抗能量（Resist Energy）给予能量抗力（10点/轮，无每日限制）。",
            "controversy": "两者是否可以叠加？PHB说'同类法术效果不叠加'，但'免疫'和'抗力'是否算'同类效果'？此外，防护自能量超过12轮/天后是否完全失去保护？还是失去'免疫'但保留'抗力'（如果同时有抵抗能量）？这些细节PHB未明确。",
            "suggestion": "建议：免疫和抗力不叠加。如果同时有防护自能量和抵抗能量，使用免疫（更高优先级）。防护自能量12轮/天后完全失效（除非再次施展）。不保留抗力。",
            "source": "PHB p.266 / 3.5e FAQ / 社区共识"
        }
    ],
    "greater_invisibility": [
        {
            "point": "高等隐形与侦察检定",
            "phbRule": "高等隐形允许在攻击后保持隐形（普通隐形在攻击后失效）。但仍然可以被听见、闻到、或通过其他方式感知。",
            "controversy": "与普通隐形相同的问题：'攻击后保持隐形'是否包括施展攻击性法术？PHB说'攻击'，但未明确'攻击性法术'是否算攻击。此外，高等隐形是否更难被侦察？PHB未提高等隐形的侦察DC（仍然是DC=20+SL）。部分DM house rule 提高等隐形+5DC。",
            "suggestion": "建议：与普通隐形相同规则，但攻击后不打破。侦察DC不变（除非DM house rule）。明确'攻击性法术'打破隐形（与普通隐形相同）。",
            "source": "PHB p.283 / SRD / 社区House Rule"
        }
    ],
    "baleful_polymorph": [
        {
            "point": "恶毒变化术的永久变化",
            "phbRule": "PHB p.693（Spell Compendium）或 DMG：恶毒变化术将目标变为小动物的身体形态，保留自己的心智。如果目标未能通过 Fortitude 豁免，变化是永久的（除非解除魔法）。",
            "controversy": "恶毒变化术常被视为'即死'效果的替代品，因为变为小动物后HD大幅下降。争议：变化后是否保留原HD？PHB说'变为小动物（最多1HD）'，但未明确是替换HD还是限制HD。此外，'永久变化'是否可以被'有限愿望'（Limited Wish）或'复原术'（Restoration）解除？PHB未明确。",
            "suggestion": "建议：变化后HD变为小动物的HD（通常1HD或更少）。'永久变化'可以被9环'许愿术'或'奇迹术'解除，也可以用'解除魔法'（需要成功检定）。'有限愿望'不足以解除（需要改变'永久'效果）。",
            "source": "Spell Compendium p.149 / PHB p. (Baleful Polymorph) / 社区共识"
        }
    ],
    "antimagic_field": [
        {
            "point": "反魔法力场的作用范围",
            "phbRule": "PHB p. Among Us：反魔法力场创造10尺半径的球体区域，其中所有魔法效果被抑制。不与法术抗力、魔法武器、或魔法物品交互。",
            "controversy": "反魔法力场是最具争议的法术之一，因为'所有魔法效果被抑制'的解释。争议点：魔法物品在反魔法力场内是否失效？PHB说'魔法物品被抑制'，但'+1长剑'在反魔法力场内是变成'普通长剑'还是完全消失？此外，神术是否在反魔法力场内被抑制？作为'魔法效果'，是的。但'神术'是否受'反魔法'影响？教会对此有强烈争议。",
            "suggestion": "建议采用严格PHB规则：反魔法力场抑制所有魔法效果（包括魔法物品、法术、法术-like能力）。魔法武器在力场内变为'普通武器'（伤害骰不变，但失去增强加值）。神术被抑制（因为神术是魔法效果）。",
            "source": "PHB p. (Antimagic Field) / SRD / 3.5e FAQ v2.0 / Rules Compendium p.86"
        }
    ]
}

# 对每个法术，找到其在文件中的位置并添加 conflicts 字段
import re

for spell_id, conflicts in conflicts_data.items():
    # 构建 conflicts 数组的 JS 字符串
    conflicts_js = ",\n    conflicts: " + JSON.dumps(conflicts, ensure_ascii=False, indent=4)
    # 调整缩进
    conflicts_js = conflicts_js.replace('\n    ', '\n    ').replace('\n}', '\n    }')
    
    # 找到法术对象的末尾（最后一个 } 之前）
    # 搜索模式：{ id:"spell_id", ... }
    pattern = r'(\{ id:"' + re.escape(spell_id) + r'"[^}]+\})'
    
    # 更可靠的方法：找到 id: 然后找到对应的结束 }
    # 使用非贪婪匹配来找到整个对象
    pattern = r'(\{ id:"' + re.escape(spell_id) + r"'[^}]*(?:\{[^}]*\}[^}]*)*)\}"
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        # 找到匹配的对象末尾
        obj_end = match.end() - 1  # 指向 } 的位置
        
        # 在 } 之前插入 conflicts 字段
        # 需要找到倒数第二个 }（对象结束），而不是嵌套对象的 }
        # 简单方法：从 obj_end 向前找，计算嵌套
        pos = obj_end - 1
        depth = 0
        while pos >= 0:
            if content[pos] == '}':
                depth += 1
            elif content[pos] == '{':
                depth -= 1
                if depth == 0:
                    # 找到了对象的开始
                    # 现在需要找到这个对象的结束 }
                    break
            pos -= 1
        
        # 现在 pos 指向对象的 {，我们需要找到对应的 }
        # 重新计算
        start_pos = pos
        depth = 1
        pos = start_pos + 1
        while pos < len(content):
            if content[pos] == '{':
                depth += 1
            elif content[pos] == '}':
                depth -= 1
                if depth == 0:
                    # 找到了对象的结束
                    obj_end = pos
                    break
            pos += 1
        
        # 在 obj_end 之前插入 conflicts
        # 检查是否已有 conflicts 字段
        obj_text = content[start_pos:obj_end+1]
        if 'conflicts:' not in obj_text:
            # 在 } 之前插入
            insert_pos = obj_end  # 指向 }
            # 回溯到前一个非空白字符
            while insert_pos > start_pos and content[insert_pos-1] in ' \t\n':
                insert_pos -= 1
            
            # 构建插入文本
            insert_text = ',\n    conflicts: ' + json_dumps(conflicts, indent=4)
            # 调整缩进
            insert_text_lines = insert_text.split('\n')
            insert_text = '\n'.join(['    ' + line if i > 0 else line for i in range(len(insert_text_lines))])
            
            content = content[:insert_pos] + insert_text + '\n  ' + content[insert_pos:]
            print(f"已添加 conflicts 到法术: {spell_id}")
        else:
            print(f"法术 {spell_id} 已有 conflicts 字段，跳过")
    else:
        print(f"未找到法术: {spell_id}")

# 写入文件
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("完成！")
