# DND 3.5e 中文 Wiki — 交接任务清单

**项目路径：** `C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\`
**Git 仓库：** 已在项目目录下 `git init`，首次提交 `443063e`（314 文件，191,092 行）
**分支：** `master`
**更新日期：** 2026-06-21

---

## 一、项目概况

这是一个 DND 3.5e（3R）中文 Wiki 静态 HTML 站点，参考基准为 dndlogs.com（3R 核心规则 CHM）和 dnd3r.huijiwiki.com。标准结构为 PHB/DMG/MM 共 13 大章节。

**技术栈：** 纯静态 HTML + CSS + JavaScript，无构建工具、无框架。公共样式在 `style.css`，数据文件在 `js/` 目录。

**当前覆盖率：约 75-80%**（上一轮从 35-40% 提升至此）

### 目录结构

```
dnd35-wiki-pro/
├── index.html           # 首页
├── style.css            # 全站样式（:root 变量在这里定义）
├── rules.html           # 核心规则
├── conflicts.html       # 规则冲突
├── rules-adventure.html # 冒险（新建）
├── rules-combat.html    # 战斗（新建）
├── rules-companions.html# 伙伴系统（新建）
├── rules-deities.html   # 神祇与阵营（新建）
├── rules-planes.html    # 位面宇宙（新建）
├── rules-variants.html  # 规则变体（新建）
├── global-search.html   # 全站搜索
├── about.html           # 关于页
├── progress-report.html # 进度报告
├── js/
│   ├── spells-data.js           # 法术主数据库（542 条）
│   ├── spells-domains.js        # 领域映射（旧版，连字符 ID）
│   ├── spells-domains-updated.js# 领域映射（新版，下划线 ID，应使用此文件）
│   ├── spells-conflicts.js      # 法术冲突数据
│   ├── spells-conflicts-batch2~5.js  # 冲突数据批次（batch2-5 为空对象存根）
│   └── global-search-data.js    # 搜索索引数据
├── classes/       # 11 核心职业 + 进阶职业总览 + 15 独立进阶 + NPC 职业
├── races/         # 7 核心种族（intro + 7 个独立页）
├── skills/        # 35 个技能 + 共效页面
├── feats/         # 28 个专长独立页 + 总览 + 列表页
├── equipment/     # 装备总览 + 魔法物品 + 武器详述
├── monsters/      # 怪物总览 + 经典怪物 + 龙类
├── spells/        # 法术系统（按环分级 level0-9 + 搜索/比较/收藏）
├── 3r/            # 旧版 3R 页面（10 个文件，可能是早期版本）
└── _scripts_archive/  # 归档的构建/调试脚本（不影响站点运行）
```

### 关键 JS 数据文件说明

| 文件 | 用途 | 已知问题 |
|------|------|----------|
| `spells-data.js` | 法术主数据库，542 条唯一法术 | 仍有少量重复可能未清干净 |
| `spells-domains.js` | 旧版领域映射（连字符 ID 格式） | **不应被页面加载**，已被 updated 版替代 |
| `spells-domains-updated.js` | 新版领域映射（下划线 ID） | 这是应该使用的版本 |
| `spells-conflicts-batch2~5.js` | 冲突数据批次文件 | 目前都是空对象 `window.conflictsDataBatchN = {}` |
| `global-search-data.js` | 全站搜索索引 | 数据应与 spells-data.js 保持同步 |

---

## 二、已完成的工作

### 技术修复（全部完成）

| # | 问题 | 修复方式 |
|---|------|----------|
| 1 | 23 页引用不存在的 search.js | 移除 `<script>` 标签 |
| 2 | spells-conflicts.js 系列文件缺失 | 从 .bak 恢复 + 创建 batch2-5 空存根 |
| 3 | 76 个侧边栏断链 | 批量替换 `../feats.html` → `../feats/intro.html` 等 |
| 4 | SPELL_DOMAINS 常量重复声明 | 保留 updated 版，旧版不再被加载 |
| 5 | 351 处引用未定义 CSS 短变量 | 在 `:root` 添加 7 个别名 |
| 6 | 59 页 `.site-footer` 无样式 | 在 style.css 添加 `.site-footer` 选择器 |
| 7 | 法术 ID 格式不统一 + 拼写错误 | 统一为下划线，修复 `cure_modarate_wounds` |
| 8 | index.html `. Rule-box` 无效选择器 | 改为 `.Rule-box` |
| 9 | rules.html `<article>` 标签不一致 | 改为 `<main>` |
| 10 | 冗余文件未清理 | 12 个 .bak + 测试页 + pycache 移入 `_scripts_archive/` |

### 内容创建（27 个新页面）

| 页面 | 大小 | 说明 |
|------|------|------|
| `rules-adventure.html` | 71KB | 地下城/野外/城市/陷阱/宝藏/环境危害 |
| `rules-planes.html` | 57KB | 大轮宇宙学，17 个外层位面 |
| `rules-combat.html` | 71KB | 战斗动作/25 种状态/DR/SR/特殊能力 |
| `rules-companions.html` | 40KB | 动物伙伴/魔宠/座骑/炼狱仆役/部属 |
| `rules-deities.html` | 21KB | 阵营九宫格/20 核心神/神格等级 |
| `rules-variants.html` | 29KB | 属性/XP/战斗/魔法/技能变体规则 |
| `equipment/magic-items.html` | 63KB | DMG 第7章：附魔/奇物/制造规则 |
| `equipment/weapons-detail.html` | 62KB | 简易/军用/异种武器表/特殊材料 |
| `classes/prestige-intro.html` | 15KB | 15 进阶职业总览对比表 |
| `classes/npc-classes.html` | 16KB | 5 个 NPC 职业 |
| `classes/prestige-*.html` (x15) | ~180KB | 15 个独立进阶职业完整页面 |
| `monsters/classic-monsters.html` | 34KB | 12 类怪物分类统计表 |
| `monsters/dragons.html` | 34KB | 10 真龙/12 年龄层完整成长表 |
| `feats/feat-list.html` | 54KB | 61 专长分 4 类 |
| `skills/skill-synergy.html` | 48KB | 32 条共效关系 + 16 缺失技能卡片 |

### 数据质量修正

- `races/halfling.html`：移除错误的 CON+2（PHB：仅 +2 DEX, -2 STR）
- `races/gnome.html`：移除错误的 DEX+2 和 INT+2（PHB：仅 +2 CON, -2 STR）
- `races/half-orc.html`：移除无根据的性别区分偏好职业（PHB：统一为野蛮人）
- `js/spells-data.js`：修复 `cure_modarate_wounds` 拼写，删除 `flame-strike` 重复项和 `cure_moderate_wounds` 重复项，最终 542 条
- `js/global-search-data.js`：同步修复拼写和去重

---

## 三、剩余任务清单

### P1 — 高优先级（影响功能或数据准确性）

#### 任务 1：法术数据深度去重与质量审计
- **现状：** `spells-data.js` 名义上 542 条，但项目内部报告自相矛盾（AUDIT-REPORT 说 415，TODO.md 说 544，PROJECT-STATUS 说 585 其中 213 重复）
- **需要做的：**
  1. 逐条审计 `spells-data.js`，用脚本检测 nameZh / nameEn 重复项
  2. 对比 dndlogs.com 法术大全确认遗漏的核心法术
  3. 确保 `global-search-data.js` 与 `spells-data.js` 完全同步
  4. 输出真实的法术数量和完成度统计
- **参考文件：** `js/spells-data.js`、`js/global-search-data.js`、`PROJECT-STATUS.md`
- **预计工作量：** 中

#### 任务 2：清理旧版 spells-domains.js
- **现状：** `spells-domains.js`（旧版连字符 ID）和 `spells-domains-updated.js`（新版下划线 ID）同时存在，虽然已确保页面只加载 updated 版，但旧文件仍在目录中造成混淆
- **需要做的：**
  1. 确认没有任何页面仍然 `<script src>` 引用旧版 `spells-domains.js`
  2. 如果确认无引用，将旧版移入 `_scripts_archive/` 或重命名为 `.old`
  3. 考虑将 `spells-domains-updated.js` 重命名为 `spells-domains.js`（需要先更新所有引用它的 HTML 页面）
- **预计工作量：** 小

#### 任务 3：填充 spells-conflicts-batch2~5.js 数据
- **现状：** 四个批次文件都是空对象存根 `window.conflictsDataBatchN = {}`
- **需要做的：**
  1. 参考 dndlogs.com 的法术冲突数据填充这些文件
  2. 或者如果 `spells-conflicts.js` 已包含所有冲突数据，则移除 batch2-5 的空存根并更新 `spell-detail.html` 的 `<script>` 引用
- **参考文件：** `js/spells-conflicts.js`、`spells/spell-detail.html`
- **预计工作量：** 中

### P2 — 中优先级（内容补全）

#### 任务 4：种族扩展内容（#22）
- **现状：** 7 核心种族已完善，但缺少扩展种族（歌利亚 Goliath、徽民 Illumian 等来自 Races of Stone/Wild/Destiny 的种族）
- **需要做的：**
  1. 新建 `races/expanded-races.html` 或逐个创建扩展种族页面
  2. 补充每个种族的属性加值、种族特性、Favored Class、LA 调整值
  3. 参考 dndlogs.com 扩展大全 v2.4
- **预计工作量：** 中

#### 任务 5：魔法物品详细分类
- **现状：** `equipment/magic-items.html` 有概览但不够细
- **需要做的：**
  1. 按 DMG 第 7 章拆分子页面：武器/防具附魔、奇物（按身体部位）、戒指、法杖、权杖、药水、卷轴、魔杖
  2. 补充特殊魔法物品和神器
  3. 补充智能物品和诅咒物品
- **预计工作量：** 大（DMG 第 7 章内容极多）

#### 任务 6：怪物条目大幅补充
- **现状：** `monsters/classic-monsters.html` 和 `dragons.html` 覆盖 12 类怪物，但 MM 有数百种怪物
- **需要做的：**
  1. 按字母 A-Z 或按 CR 创建独立怪物条目页
  2. 优先补全高 CR 经典怪物：恶魔领主、魔鬼大公、夺心魔、眼魔、巨人系列
  3. 补充怪物模板（天界/炼狱/模板生物）
- **预计工作量：** 极大（MM 是最厚的书）

#### 任务 7：专长描述细化
- **现状：** `feats/feat-list.html` 有 61 个专长，但 feats/ 目录下只有 28 个独立页面
- **需要做的：**
  1. 为 feat-list 中列出但没有独立页面的专长创建页面
  2. 补充怪物专长（Monster Feats）
  3. 补充物品制造专长的详细制造规则
- **预计工作量：** 中

#### 任务 8：冒险章节细化
- **现状：** `rules-adventure.html` 是单页概览
- **需要做的：**
  1. 拆分子页面：地下城探索、野外生存、城市冒险、陷阱大全、宝藏表
  2. 补充环境危害、天候规则的详细数值表
- **预计工作量：** 中

#### 任务 9：位面章节细化
- **现状：** `rules-planes.html` 有 17 个外层位面概览
- **需要做的：**
  1. 为重要位面创建独立详情页（如九层地狱、无底深渊、七丘天堂山）
  2. 补充内层位面（四大元素位面）的详细内容
  3. 补充位面旅行规则和位面特性表
- **预计工作量：** 中

### P3 — 低优先级（优化与完善）

#### 任务 10：统一导航栏样式
- **现状：** 根目录页面用现代顶部 navbar，子目录页面用旧版侧边栏，两种风格不统一
- **需要做的：** 设计并实施统一的导航组件，或至少确保两种布局的视觉风格一致
- **预计工作量：** 中

#### 任务 11：添加图片资源
- **现状：** 整个项目没有任何图片（无 `images/` 目录，HTML 中无 `<img>` 标签）
- **需要做的：** 添加 DND 风格的装饰图片、图标、分类插图
- **预计工作量：** 视资源获取情况而定

#### 任务 12：清理项目内部报告文件
- **现状：** 根目录有多个自相矛盾的审计/进度文件：`AUDIT-REPORT.md`、`CONTENT-AUDIT-REPORT.md`、`TODO.md`、`PROJECT-STATUS.md`、`PROGRESS.md`、`PROGRESS-2026-06-20.md`、`TODO-2026-06-20.md`、`TODO-FINAL-2026-06-20.md`
- **需要做的：** 合并为一个准确的进度文件，删除过时的报告
- **预计工作量：** 小

#### 任务 13：清理 `3r/` 旧版页面
- **现状：** `3r/` 目录有 10 个旧版页面（index.html、index-v2.html、new-classes/races/spells/feats/equipment/monsters.html、optional-rules.html、resources-tools.html），与主站内容重复
- **需要做的：** 确认这些页面是否还有用，如无则移入 `_scripts_archive/` 或删除
- **预计工作量：** 小

#### 任务 14：创建 search.js 或移除引用
- **现状：** 上一轮已移除了 23 处对 search.js 的引用，但 `global-search.html` 的搜索功能是独立的内联实现。如果将来想恢复搜索，需要创建 `search.js`
- **需要做的：** 评估是否需要独立的 search.js，如需要则实现
- **预计工作量：** 小-中

---

## 四、已知数据冲突记录

以下为与参考站 dndlogs.com 对比发现的差异，需人工判断取舍：

| 编号 | 冲突项 | 当前状态 | 说明 |
|------|--------|----------|------|
| C1 | 半身人属性加值 | ✅ 已修正 | 移除了错误的 CON+2 |
| C2 | 侏儒属性加值 | ✅ 已修正 | 移除了错误的 DEX+2 和 INT+2 |
| C3 | 半兽人偏好职业 | ✅ 已修正 | 移除了无根据的性别区分 |
| C4 | 猛力攻击描述深度不足 | ⏳ 待改进 | 参考站有完整 BAB 对应表 |
| C5 | 法术数量统计矛盾 | ⏳ 待审计 | 各报告文件数据自相矛盾 |
| C6 | Witch 职业未收录 | ℹ️ 可选 | 来自 Dragon Magazine，非核心 |
| C7 | 法术拼写/ID 不一致 | ✅ 已修复 | `cure_moderate_wounds` 拼写已修正 |

---

## 五、技术注意事项

### CSS 变量体系
`style.css :root` 中定义了两套变量名：
- 长名：`--accent-red`、`--border-main`、`--bg-page` 等（旧版）
- 短名别名：`--accent`、`--border`、`--text`、`--bg`、`--text-muted`、`--shadow`、`--accent-glow`（上一轮新增，供 global-search/spells/3r 页面使用）

新增 CSS 变量时应同时提供长短两种名称以兼容所有页面。

### 页面模板模式
- **根目录页面**（index.html, rules.html, conflicts.html 等）：使用 `<nav>` 顶部导航栏 + `<main>` + `.footer`
- **子目录页面**（classes/*.html, skills/*.html 等）：使用 `.layout` > `aside.sidebar` + `main.main-content`

### 脚本引用注意
- `spells-domains.js` 和 `spells-domains-updated.js` **不能同时加载**，否则 `const SPELL_DOMAINS` 会报 SyntaxError
- `spells-conflicts-batch2~5.js` 目前都是空存根，加载不会报错但也没有实际数据

### Git 注意
- 项目级 `.git` 在 `dnd35-wiki-pro/` 目录下
- C:/ 根目录另有一个 `.git`（属于其他用途），操作时注意 `cd` 到项目目录再执行 git 命令
- Git 用户配置：`user.name=Local User`、`user.email=user@local`

---

## 六、参考资源

| 资源 | URL | 说明 |
|------|-----|------|
| dndlogs.com | https://www.dndlogs.com/ | 可访问，CHM 格式的 3R 核心规则 |
| dnd3r.huijiwiki.com | https://dnd3r.huijiwiki.com/ | 被 Cloudflare 拦截，需要浏览器访问 |
| PHB 3.5e | — | 玩家手册，核心规则权威来源 |
| DMG 3.5e | — | 城主手册，进阶职业/魔法物品/冒险规则 |
| MM 3.5e | — | 怪物图鉴，所有怪物条目 |

---

## 七、快速启动指引

新 agent 接手时的操作顺序建议：

1. **阅读本文件**（HANDOFF-TASKS.md）了解全局
2. **阅读 AUDIT-ISSUE-LIST.md** 了解详细的审查结论和每项修复状态
3. **从 P1 任务开始**（法术数据去重、domains 文件清理、conflicts 数据填充）
4. **再做 P2 内容补全**（按 种族扩展 → 魔法物品 → 怪物 → 专长 的优先级）
5. **最后做 P3 优化**（导航统一、图片、旧文件清理）

所有新建 HTML 页面应遵循现有模板结构（子目录用侧边栏布局），CSS 变量使用短名别名体系。
