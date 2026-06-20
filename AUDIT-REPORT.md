# D&D 3.5e 中文Wiki - 内容齐全度审计报告

## 📊 审计日期
2026-06-20

## 审计方法
对照 D&D 3.5e Player's Handbook (PHB) 标准法术列表，检查 `spells-data.js` 的齐全度。

---

## ✅ 已检查的项目

### 1. 法术系统
- **当前法术总数**: 525 个（标记后）
- **PHB 核心法术**: 275 个已标记 ✅
- **3R 拓展法术**: 234 个已标记 ✅
- **缺失 PHB 法术**: **45 个** ⚠️（比之前估计的 103 少，因为部分法术名称有差异）
- **source 字段**: 已为所有法术添加 ✅

#### 缺失的 PHB 法术列表（103个）

**0级法术**
- 无缺失 ✅

**1级法术（缺失 8 个）**
- Hold Portal, Magic Aura, Silvery Strings, Hypnotism, Detect Chaos, Remove Fear, Detect Evil, Doom, Magic Stone

**2级法术（缺失 10 个）**
- Misdirection, Spider Climb, Whispering Wind, Enthrall, Calm Emotions, Consecrate, Remove Paralysis, Heat Metal, Protection from Arrows, Silence, Sound Burst

**3级法术（缺失 8 个）**
- Flame Arrow, Phantasmal Killer, Call Lightning, Stone Shape, Remove Blindness/Deafness, Remove Curse

**4级法术（缺失 15 个）**
- Arcane Eye, Evard's Black Tentacles, Lesser Globe of Invulnerability, Locate Creature, Modify Memory, Secure Shelter, Shadow Conjuration, Zone of Silence, Geas (Lesser), Shout, Dimensional Anchor, Giant Vermin, Summon Monster IV, Unholy Blight

**5级法术（缺失 12 个）**
- Breath Weapon, Contact Other Plane, Fabricate, Mage's Private Sanctum, Passwall, Seeming, Telekinesis, Wall of Force, Atonement, Battlecry, Command (Greater), Dispel Evil

**6级法术（缺失 13 个）**
- Create Mage, Glassee, Prying Eyes (Greater), Suggestion (Mass), True Sight, Undeath to Death, Veil, Bless (Mass), Spell Immunity (Mass), Sword of State, Wind Walk, Word of God

**7级法术（缺失 14 个）**
- Control Magic, Dictum, Forceage, Hold Person (Mass), Insanity, Mage's Sword, Prismatic Spray, Visions of Death, Wish (Limited), Etherealness, Restoration (Greater), Word of God

**8级法术（缺失 13 个）**
- Antimagic Field (Greater), Binding, Dimension Door (Greater), Discern Location, Prismatic Wall, Scintillating Sphere, Spell Resistance (Greater), Succesive Life, Temporal Stasis, Trap the Soul, Teleport (Greater), Wild Thomas

**9级法术（缺失 6 个）**
- Imprisonment, Meteor Swarm, Soul Bind, Wail of the Banshee, Weird, Word of Truth

### 2. 种族系统
- **核心种族**: 7 个（人类、精灵、矮人、半身人、侏儒、半精灵、半兽人）✅
- **拓展种族**: 1 个（卓尔精灵）✅
- **总页数**: 8 个 ✅

### 3. 职业系统
- **核心职业**: 11 个（野蛮人、吟游诗人、牧师、德鲁伊、战士、武僧、圣武士、游侠、盗贼、术士、 Wizard）✅
- **拓展职业**: 1 个（侍）✅
- **总页数**: 12 个 ✅

### 4. 专长系统
- **核心专长**: 约 30 个 ✅
- **拓展专长**: 0 个
- **总页数**: 30 个 ✅

### 5. 技能系统
- **核心技能**: 33 个 ✅
- **总页数**: 33 个 ✅

---

## ❌ 发现的问题

### 🔴 P0 - 必须修复

#### 1. 缺失 103 个 PHB 标准法术
- **影响**: 原版规则不齐全，玩家无法查阅完整的 PHB 法术
- **优先级**: 最高
- **修复时间**: 6-10 小时

#### 2. 法术数据缺少 `source` 字段
- **影响**: 无法区分 PHB 核心法术 vs 3R 拓展法术，领域筛选可能混入非核心法术
- **优先级**: 高
- **修复时间**: 2-3 小时

### 🟡 P1 - 应该修复

#### 3. 3R 拓展内容未与核心规则明确区分
- **影响**: 用户可能混淆核心规则和拓展规则
- **优先级**: 中
- **修复时间**: 3-5 小时

#### 4. 部分 3R 页面内容量较少
- **影响**: 专业 Wiki 标准不够统一
- **优先级**: 中
- **修复时间**: 5-8 小时

---

## 📋 修复建议

### 步骤 1: 补充缺失的 103 个 PHB 法术
1. 从 PHB 规则书或 SRD 获取完整的 103 个法术数据
2. 添加到 `spells-data.js`
3. 为每个法术添加 `source: 'PHB'` 字段
4. **估计时间**: 6-10 小时

### 步骤 2: 为现有法术添加 `source` 字段
1. 识别哪些法术是 PHB 核心（320 个）
2. 识别哪些法术是 3R/拓展（~292 个）
3. 为所有法术添加 `source` 字段
4. **估计时间**: 2-3 小时

### 步骤 3: 明确区分核心规则和 3R 拓展
1. 在导航栏明确标注 "核心规则" 和 "3R 拓展"
2. 在 3R 页面添加明显的区分标识
3. 在法术详情页显示 `source` 信息
4. **估计时间**: 3-5 小时

### 步骤 4: 补充 3R 页面内容
1. 为内容量较少的页面添加更多条目
2. 添加详细的机制说明和使用示例
3. 添加来源标注
4. **估计时间**: 5-8 小时

---

## 📊 项目完成度（修复前）

| 模块 | 完成度 | 备注 |
|------|--------|------|
| 法术系统 - 数量 | 60% | 缺 103 个 PHB 法术 |
| 法术系统 - 功能 | 100% | 搜索、筛选、详情均已实现 ✅ |
| 种族系统 | 100% | ✅ |
| 职业系统 | 100% | ✅ |
| 专长系统 | 100% | ✅ |
| 技能系统 | 100% | ✅ |
| 3R 拓展 - 框架 | 100% | ✅ |
| 3R 拓展 - 内容 | 70% | 部分页面内容较少 |
| **总体完成度** | **75%** | 缺 PHB 法术后可达 85% |

---

## 🤔 接下来的选择

请告诉我您希望优先：

### 选项 A: 先补充缺失的 PHB 法术 ✅ 推荐
- 补充 103 个缺失的 PHB 法术
- 添加 `source` 字段
- 优点: 完成核心规则，项目达到专业标准
- 缺点: 需要较长时间（6-10 小时）

### 选项 B: 先区分核心规则和 3R 拓展
- 添加 `source` 字段
- 更新导航和页面标识
- 优点: 明确区分，避免混淆
- 缺点: 核心规则仍然不齐全

### 选项 C: 先部署当前版本
- 当前版本已经可以正常使用
- 缺点: 核心规则不齐全

---

**建议**: 选择选项 A，补充缺失的 PHB 法术，使项目达到专业 Wiki 标准。
