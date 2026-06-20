#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
正确使用 D&D 3.5e SRD 领域法术名称，生成 spells-domains.js
从 all_spells.txt 中读取已有法术，进行模糊匹配
"""

import re
import json

# 读取所有法术 ID 和英文名称
id_to_en = {}
en_to_id = {}

with open('all_spells.txt', 'r', encoding='utf-8') as f:
    for line in f:
        parts = line.strip().split(' | ')
        if len(parts) >= 2:
            sid = parts[0]
            en = parts[1]
            id_to_en[sid] = en
            en_to_id[en.lower()] = sid
            # 也建立无空格/无撇号的索引
            key = en.lower().replace("'", "").replace(" ", "_")
            en_to_id[key] = sid

def find_id(correct_name):
    """
    根据正确的英文法术名查找 ID
    匹配策略：
    1. 直接匹配（小写）
    2. 替换空格为下划线
    3. 移除撇号后匹配
    """
    name = correct_name.strip()
    # 策略1: 直接匹配
    key = name.lower()
    if key in en_to_id:
        return en_to_id[key]
    # 策略2: 空格变下划线
    key2 = key.replace(" ", "_")
    if key2 in en_to_id:
        return en_to_id[key2]
    # 策略3: 移除撇号
    key3 = key.replace("'", "")
    if key3 in en_to_id:
        return en_to_id[key3]
    key4 = key3.replace(" ", "_")
    if key4 in en_to_id:
        return en_to_id[key4]
    # 策略4: 部分匹配
    for k, vid in en_to_id.items():
        # k 是 lowercase English name
        if name.lower() in k or k in name.lower():
            return vid
    return None

# ===== D&D 3.5e SRD 正确的22个领域法术列表 =====
# 英文名称使用 D&D 3.5e 标准拼写
DOMAINS = {
    "气": {
        1: "Obscuring Mist",
        2: "Wind Wall",
        3: "Gaseous Form",
        4: "Air Walk",
        5: "Control Winds",
        6: "Chain Lightning",
        7: "Control Weather",
        8: "Whirlwind",
        9: "Elemental Swarm",
    },
    "动物": {
        1: "Calm Animals",
        2: "Hold Animal",
        3: "Dominate Animal",
        4: "Summon Nature's Ally IV",
        5: "Commune with Nature",
        6: "Antilife Shell",
        7: "Animal Shapes",
        8: "Summon Nature's Ally VIII",
        9: "Shapechange",
    },
    "混乱": {
        1: "Protection from Law",
        2: "Shatter",
        3: "Magic Circle against Law",
        4: "Chaos Hammer",
        5: "Dispel Law",
        6: "Animate Objects",
        7: "Word of Chaos",
        8: "Cloak of Chaos",
        9: "Summon Monster IX",
    },
    "死亡": {
        1: "Cause Fear",
        2: "Death Knell",
        3: "Animate Dead",
        4: "Death Ward",
        5: "Slay Living",
        6: "Create Undead",
        7: "Destruction",
        8: "Create Greater Undead",
        9: "Wail of the Banshee",
    },
    "破坏": {
        1: "Inflict Light Wounds",
        2: "Shatter",
        3: "Contagion",
        4: "Inflict Critical Wounds",
        5: "Inflict Light Wounds, Mass",
        6: "Harm",
        7: "Disintegrate",
        8: "Earthquake",
        9: "Implosion",
    },
    "土": {
        1: "Magic Stone",
        2: "Soften Earth and Stone",
        3: "Stone Shape",
        4: "Spike Stones",
        5: "Wall of Stone",
        6: "Stoneskin",
        7: "Earthquake",
        8: "Iron Body",
        9: "Elemental Swarm",
    },
    "邪恶": {
        1: "Protection from Good",
        2: "Desecrate",
        3: "Magic Circle against Good",
        4: "Unholy Blight",
        5: "Dispel Good",
        6: "Create Undead",
        7: "Blasphemy",
        8: "Unholy Aura",
        9: "Summon Monster IX",
    },
    "火": {
        1: "Burning Hands",
        2: "Produce Flame",
        3: "Resist Energy",
        4: "Wall of Fire",
        5: "Fire Shield",
        6: "Fire Seeds",
        7: "Fire Storm",
        8: "Incendiary Cloud",
        9: "Elemental Swarm",
    },
    "善良": {
        1: "Protection from Evil",
        2: "Aid",
        3: "Magic Circle against Evil",
        4: "Holy Smite",
        5: "Dispel Evil",
        6: "Blade Barrier",
        7: "Holy Word",
        8: "Holy Aura",
        9: "Summon Monster IX",
    },
    "治疗": {
        1: "Cure Light Wounds",
        2: "Cure Moderate Wounds",
        3: "Cure Serious Wounds",
        4: "Cure Critical Wounds",
        5: "Cure Light Wounds, Mass",
        6: "Heal",
        7: "Regenerate",
        8: "Cure Critical Wounds, Mass",
        9: "Heal, Mass",
    },
    "知识": {
        1: "Detect Secret Doors",
        2: "Detect Thoughts",
        3: "Clairaudience/Clairvoyance",
        4: "Divination",
        5: "True Seeing",
        6: "Find the Path",
        7: "Legend Lore",
        8: "Discern Location",
        9: "Foresight",
    },
    "守序": {
        1: "Protection from Chaos",
        2: "Calm Emotions",
        3: "Magic Circle against Chaos",
        4: "Order's Wrath",
        5: "Dispel Chaos",
        6: "Hold Monster",
        7: "Dictum",
        8: "Shield of Law",
        9: "Summon Monster IX",
    },
    "幸运": {
        1: "Entropic Shield",
        2: "Aid",
        3: "Protection from Energy",
        4: "Freedom of Movement",
        5: "Break Enchantment",
        6: "Mislead",
        7: "Spell Turning",
        8: "Moment of Prescience",
        9: "Miracle",
    },
    "魔法": {
        1: "Magic Aura",
        2: "Identify",
        3: "Dispel Magic",
        4: "Imbue with Spell Ability",
        5: "Spell Resistance",
        6: "Antimagic Field",
        7: "Spell Turning",
        8: "Protection from Spells",
        9: "Mage's Disjunction",
    },
    "植物": {
        1: "Entangle",
        2: "Bark-skin",  # 注意：实际ID可能是 barkskin
        3: "Plant Growth",
        4: "Command Plants",
        5: "Wall of Thorns",
        6: "Repel Wood",
        7: "Animate Plants",
        8: "Control Plants",
        9: "Shambler",
    },
    "防护": {
        1: "Sanctuary",
        2: "Shield Other",
        3: "Protection from Energy",
        4: "Spell Immunity",
        5: "Spell Resistance",
        6: "Antimagic Field",
        7: "Repulsion",
        8: "Mind Blank",
        9: "Prismatic Sphere",
    },
    "力量": {
        1: "Enlarge Person",
        2: "Bull's Strength",
        3: "Magic Vestment",
        4: "Spell Immunity",
        5: "Righteous Might",
        6: "Stoneskin",
        7: "Grasping Hand",
        8: "Clenched Fist",
        9: "Crushing Hand",
    },
    "太阳": {
        1: "Endure Elements",
        2: "Heat Metal",
        3: "Searing Light",
        4: "Fire Shield",
        5: "Flame Strike",
        6: "Fire Seeds",
        7: "Sunbeam",
        8: "Sunburst",
        9: "Prismatic Sphere",
    },
    "旅行": {
        1: "Longstrider",
        2: "Locate Object",
        3: "Fly",
        4: "Dimension Door",
        5: "Teleport",
        6: "Find the Path",
        7: "Teleport, Greater",
        8: "Phase Door",
        9: "Astral Projection",
    },
    "诡术": {
        1: "Disguise Self",
        2: "Invisibility",
        3: "Nondetection",
        4: "Confusion",
        5: "False Vision",
        6: "Mislead",
        7: "Screen",
        8: "Polymorph Any Object",
        9: "Time Stop",
    },
    "战争": {
        1: "Magic Weapon",
        2: "Spiritual Weapon",
        3: "Magic Vestment",
        4: "Divine Power",
        5: "Flame Strike",
        6: "Blade Barrier",
        7: "Power Word Blind",
        8: "Power Word Stun",
        9: "Power Word Kill",
    },
    "水": {
        1: "Obscuring Mist",
        2: "Fog Cloud",
        3: "Water Breathing",
        4: "Control Water",
        5: "Ice Storm",
        6: "Cone of Cold",
        7: "Acid Fog",
        8: "Horrid Wilting",
        9: "Elemental Swarm",
    },
}

# 建立 法术ID -> 领域列表 映射
spell_to_domains = {}
unmapped = []

for domain_zh, levels in DOMAINS.items():
    for lvl, spell_name in levels.items():
        sid = find_id(spell_name)
        if sid:
            if sid not in spell_to_domains:
                spell_to_domains[sid] = []
            if domain_zh not in spell_to_domains[sid]:
                spell_to_domains[sid].append(domain_zh)
        else:
            unmapped.append((domain_zh, lvl, spell_name))

# 生成 JS 文件
lines = []
lines.append("/*")
lines.append("  D&D 3.5e 领域法术映射 (Domain Spell Mapping)")
lines.append("  基于 d20srd.org SRD 数据")
lines.append("")
lines.append("  用途：")
lines.append("  - 高级搜索页面按领域筛选法术")
lines.append("  - 法术详情页显示所属领域")
lines.append("")
lines.append("  数据结构：")
lines.append('  spellDomains[spellId] = ["领域1", "领域2", ...]')
lines.append("*/")
lines.append("")
lines.append("const spellDomains = {")

for sid in sorted(spell_to_domains.keys()):
    doms = spell_to_domains[sid]
    lines.append(f'  "{sid}": {json.dumps(doms, ensure_ascii=False)},')

lines.append("};")
lines.append("")

# 领域名称中英文映射
domain_en = {
    "气": "Air", "动物": "Animal", "混乱": "Chaos", "死亡": "Death",
    "破坏": "Destruction", "土": "Earth", "邪恶": "Evil", "火": "Fire",
    "善良": "Good", "治疗": "Healing", "知识": "Knowledge", "守序": "Law",
    "幸运": "Luck", "魔法": "Magic", "植物": "Plant", "防护": "Protection",
    "力量": "Strength", "太阳": "Sun", "旅行": "Travel",
    "诡术": "Trickery", "战争": "War", "水": "Water",
}

lines.append("// 领域名称中英文映射")
lines.append("const DOMAIN_NAMES = {")
for zh in sorted(domain_en.keys()):
    lines.append(f'  "{zh}": "{domain_en[zh]}",')
lines.append("};")
lines.append("")

# 所有领域列表
lines.append("// 所有领域列表（用于搜索页面下拉菜单）")
lines.append("const ALL_DOMAINS = [")
for zh in sorted(domain_en.keys()):
    lines.append(f'  {{ zh: "{zh}", en: "{domain_en[zh]}" }},')
lines.append("];")
lines.append("")

output = "\n".join(lines) + "\n"

with open('js/spells-domains.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Done: js/spells-domains.js generated")
print(f"  Mapped {len(spell_to_domains)} spells to domains")
print(f"  Total: {len(DOMAINS)} domains")
if unmapped:
    print(f"\nUnmapped spells ({len(unmapped)}):")
    for zh, lvl, name in unmapped:
        print(f"  [{zh}] L{lvl}: {name}")
else:
    print("\nAll domain spells successfully matched!")
