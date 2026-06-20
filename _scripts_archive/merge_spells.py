import json
import re

# 读取新法术JSON
with open('new_spells_7.json', 'r', encoding='utf-8') as f:
    new_spells = json.load(f)

# 读取现有JS文件
with open('js/spells-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找到数组结束位置
end_marker = '];'
end_pos = content.rfind(end_marker)
if end_pos == -1:
    print("错误：找不到数组结束标记 '];'")
    exit(1)

# 构建JS对象字符串
spell_strings = []
for spell in new_spells:
    # 构建每个法术的JS对象
    lines = []
    lines.append('{')
    lines.append(f'  "id": "{spell["id"]}",')
    lines.append(f'  "nameEn": "{spell["nameEn"]}",')
    lines.append(f'  "nameZh": "{spell["nameZh"]}",')
    lines.append(f'  "level": {spell["level"]},')
    
    # school
    school_map = {
        "conjuration": "conjuration",
        "transmutation": "transmutation", 
        "enchantment": "enchantment",
        "evocation": "evocation",
        "illusion": "illusion",
        "necromancy": "necromancy",
        "divination": "divination",
        "abjuration": "abjuration"
    }
    lines.append(f'  "school": "{spell["school"]}",')
    
    # subSchool (optional)
    if "subSchool" in spell:
        lines.append(f'  "subSchool": "{spell["subSchool"]}",')
    
    # components
    lines.append(f'  "components": "{spell["components"]}",')
    lines.append(f'  "castingTime": "{spell["castingTime"]}",')
    lines.append(f'  "range": "{spell["range"]}",')
    
    # target/area/effect (optional)
    if "target" in spell:
        lines.append(f'  "target": "{spell["target"]}",')
    if "area" in spell:
        lines.append(f'  "area": "{spell["area"]}",')
    if "effect" in spell:
        lines.append(f'  "effect": "{spell["effect"]}",')
    
    lines.append(f'  "duration": "{spell["duration"]}",')
    lines.append(f'  "savingThrow": "{spell["savingThrow"]}",')
    lines.append(f'  "spellResist": "{spell["spellResist"]}",')
    lines.append(f'  "desc": "{spell["desc"]}",')
    
    # material (optional)
    if "material" in spell:
        lines.append(f'  "material": "{spell["material"]}",')
    
    # focus (optional)
    if "focus" in spell:
        lines.append(f'  "focus": "{spell["focus"]}",')
    
    # arcane (optional)
    if spell.get("arcane"):
        arcane_str = json.dumps(spell["arcane"], ensure_ascii=False)
        lines.append(f'  "arcane": {arcane_str},')
    else:
        lines.append('  "arcane": null,')
    
    # divine (optional)
    if spell.get("divine"):
        divine_str = json.dumps(spell["divine"], ensure_ascii=False)
        lines.append(f'  "divine": {divine_str},')
    else:
        lines.append('  "divine": null,')
    
    # classes
    classes_str = json.dumps(spell["classes"], ensure_ascii=False)
    lines.append(f'  "classes": {classes_str}')
    
    lines.append('}')
    spell_strings.append('\n'.join(lines))

# 插入到数组末尾（在 '];' 之前）
# 需要在最后一个现有法术后加逗号
insert_pos = end_pos  # 指向 '];' 的位置
spells_text = ',\n'.join(spell_strings)

# 在 '];' 前插入新法术
new_content = content[:insert_pos] + ',\n' + spells_text + '\n' + content[insert_pos:]

# 写回文件
with open('js/spells-data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"成功追加 {len(new_spells)} 个法术")
print("新法术：")
for spell in new_spells:
    print(f"  - {spell['nameZh']} ({spell['nameEn']}) - 环级{spell['level']}")
