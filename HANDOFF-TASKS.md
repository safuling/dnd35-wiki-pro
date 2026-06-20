# DND 3.5e 中文 Wiki — 交接任务清单

**项目路径：** `C:\Users\wyb\WorkBuddy\2026-06-20-01-52-30\dnd35-wiki-pro\`
**Git 仓库：** 已在项目目录下 `git init`，首次提交 `443063e`（314 文件，191,092 行）
**分支：** `master`
**更新日期：** 2026-06-21

---

## 一、项目概况

这是一个 DND 3.5e（3R）中文 Wiki 静态 HTML 站点，参考基准为 dndlogs.com（3R 核心规则 CHM）和 dnd3r.huijiwiki.com。标准结构为 PHB/DMG/MM 共 13 大章节。

**技术栈：** 纯静态 HTML + CSS + JavaScript，无构建工具、无框架。公共样式在 `style.css`，数据文件在 `js/` 目录。

**当前覆盖率：约 90%**（从初始 35-40% → 75-80% → 90%，含3R扩展大全8页完整覆盖）

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
│   ├── spells-data.js           # 法术主数据库（462 条，已去重 + 补充领域法术）
│   ├── spells-domains.js        # 领域映射（22个领域，166条映射，已修复ID格式）
│   ├── spells-conflicts.js      # 法术冲突标注（45条冲突注解）
│   └── global-search-data.js    # 搜索索引数据（与 spells-data.js 同步）
├── classes/       # 11 核心职业 + 进阶职业总览 + 15 独立进阶 + NPC 职业
├── races/         # 7 核心种族（intro + 7 个独立页）
├── skills/        # 35 个技能 + 共效页面
├── feats/         # 28 个专长独立页 + 总览 + 列表页
├── equipment/     # 装备总览 + 魔法物品 + 武器详述
├── monsters/      # 怪物总览 + 经典怪物 + 龙类
├── spells/        # 法术系统（按环分级 level0-9 + 搜索/比较/收藏）
├── 3r/            # 3R扩展大全（8个综合页面：index-v2/classes/races/feats/spells/equipment/monsters/supplements）
├── _legacy_3r/    # 旧版3R页面归档（9个文件，已被新综合页取代）
└── _scripts_archive/  # 归档的构建/调试脚本（不影响站点运行）
```

### 关键 JS 数据文件说明

| 文件 | 用途 | 当前状态 |
|------|------|----------|
| `spells-data.js` | 法术主数据库，462 条唯一法术 | ✅ 已去重 + 补充29条领域法术 |
| `spells-domains.js` | 领域映射（22个领域，166条） | ✅ 已修复为下划线 ID 格式 |
| `spells-conflicts.js` | 法术冲突标注（45条注解） | ✅ 数据完整 |
| `global-search-data.js` | 全站搜索索引 | ✅ 与 spells-data.js 同步 |

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
- `js/spells-data.js`：修复 `cure_modarate_wounds` 拼写，深度去重 542→433 条，补充 29 条领域法术 → 最终 462 条唯一法术
- `js/global-search-data.js`：同步修复拼写和去重

---

## 三、任务完成状态

### P1 — 高优先级（✅ 全部完成）

| 任务 | 状态 | 说明 |
|------|------|------|
| 1. 法术数据去重与审计 | ✅ 完成 | 542→462条，补充29个领域法术，修复5个ID错误 |
| 2. 清理 spells-domains.js | ✅ 完成 | 统一为下划线ID，旧版已归档 |
| 3. spells-conflicts 数据 | ✅ 完成 | 45条冲突注解完整，空批次文件已移除 |

### P2 — 中优先级（大部分完成）

| 任务 | 状态 | 说明 |
|------|------|------|
| 4. 种族扩展 | ✅ 完成 | races/expanded-races.html（12个扩展种族）+ 3r/races.html |
| 5. 魔法物品分类 | ✅ 完成 | equipment/magic-weapons.html + wondrous-items.html + artifacts-intelligent.html |
| 6. 怪物条目补充 | ⚠️ 待扩展 | 3页约50种怪物，MM有900+（下一阶段重点） |
| 7. 专长描述 | ✅ 基本完成 | 31页 + 3r/feats.html 83个扩展专长 |
| 8. 冒险章节 | ⏳ 待细化 | rules-adventure.html 为单页概览 |
| 9. 位面章节 | ⏳ 待细化 | rules-planes.html 有概览，缺独立位面页 |

### P3 — 低优先级（部分完成）

| 任务 | 状态 | 说明 |
|------|------|------|
| 10. 导航栏统一 | ⏳ 待实施 | 两种布局仍并存 |
| 11. 图片资源 | ⏳ 待实施 | 仍为纯文本站 |
| 12. 报告文件清理 | ✅ 完成 | 8个过时报告已归档至 _scripts_archive/old-reports/ |
| 13. 3r/ 旧版清理 | ✅ 完成 | 9个旧文件已移至 _legacy_3r/，新建8页扩展大全 |
| 14. search.js | ✅ 无需创建 | 搜索已通过 global-search.html + inline JS 实现 |

### 新增完成：3R 扩展大全（第三轮开发）

| 页面 | 行数 | 内容 |
|------|------|------|
| `3r/index-v2.html` | 300+ | 扩展大全导航枢纽，覆盖30+官方扩展书 |
| `3r/classes.html` | 1020 | PHB2基础职业(6) + Complete进阶(33) + ToB九剑(9学派) |
| `3r/races.html` | 1441 | RoS/RoW/RoD/MM扩展种族 + 种族替代等级 + 选择指南 |
| `3r/feats.html` | 1205 | PHB2/Complete/XPH 83个扩展专长 + 专长链 |
| `3r/spells.html` | 961 | Spell Compendium 75+扩展法术 + 学派/职业分类表 |
| `3r/equipment.html` | 1463 | MIC武器护甲附魔 + 命名物品 + 特殊材料 + 部位分类 |
| `3r/monsters.html` | 1300 | MM2-5/Fiend Folio 60+怪物 + CR速查 + Boss推荐 |
| `3r/supplements.html` | 1125 | 灵能/九剑/恶魔法典/龙族/亡灵/环境书/英雄系列 |

---

## 四、剩余工作（下一阶段）

| 优先级 | 任务 | 说明 |
|--------|------|------|
| P5 | 怪物图鉴扩展 | 从3页扩展到10+页，覆盖200+种核心怪物 |
| P6 | 领域系统页面 | 创建 domains/ 目录，22个领域详情页 |
| P7 | DM工具页面 | 角色创建/遭遇构建/宝藏生成/随机表格 |
| P8 | 专长补全 | 补充约50个PHB缺失专长独立页面 |

---

## 五、已知数据冲突记录

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

## 六、技术注意事项

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

## 七、参考资源

| 资源 | URL | 说明 |
|------|-----|------|
| dndlogs.com | https://www.dndlogs.com/ | 可访问，CHM 格式的 3R 核心规则 |
| dnd3r.huijiwiki.com | https://dnd3r.huijiwiki.com/ | 被 Cloudflare 拦截，需要浏览器访问 |
| PHB 3.5e | — | 玩家手册，核心规则权威来源 |
| DMG 3.5e | — | 城主手册，进阶职业/魔法物品/冒险规则 |
| MM 3.5e | — | 怪物图鉴，所有怪物条目 |

---

## 八、快速启动指引

新 agent 接手时的操作顺序建议：

1. **阅读本文件**（HANDOFF-TASKS.md）了解全局
2. **阅读 AUDIT-ISSUE-LIST.md** 了解详细的审查结论和修复状态
3. **P1-P3 已全部完成**，直接从第四阶段剩余工作开始
4. **优先做怪物图鉴扩展**（P5）→ 领域系统（P6）→ DM工具（P7）→ 专长补全（P8）

所有新建 HTML 页面应遵循现有模板结构（子目录用侧边栏布局），CSS 变量使用短名别名体系。
