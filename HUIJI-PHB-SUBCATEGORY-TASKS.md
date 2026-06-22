# 灰机 PHB 子分类覆盖任务清单

来源：灰机 DND3R「分类:玩家手册规则」下的 4 个子分类。  
最近更新：2026-06-23。

说明：这些子分类是二级索引，不等同于 PHB 规则正文。页面拆分、译名差异和索引层级差异不写入 `conflicts.html`；只有真实规则来源冲突才进入规则冲突页。

## 玩家手册边栏

- [x] 已抓取并核验 17 个边栏名称。
- [x] 已建立本地索引：`rules-phb-sidebars.html`。
- [x] 17 / 17 已映射到本地规则页、职业页、技能页或法术列表入口。
- [x] 已写入搜索索引：`PHB边栏覆盖索引`。

## 玩家手册技能

- [x] 已抓取并核验 36 个 PHB 技能。
- [x] 已生成 `data/huiji-phb-skill-coverage.json`。
- [x] 已补缺项：`skills/balance.html`、`skills/concentration.html`、`skills/knowledge.html`、`skills/speak-language.html`、`skills/tumble.html`。
- [x] 已将 36 个 PHB 技能写入 `js/global-search-data.js`。
- [x] 当前缺口：0。

## 玩家手册专长

- [x] 已抓取并核验 109 个 PHB 专长。
- [x] 已生成并更新 `data/huiji-phb-feat-coverage.json`。
- [x] 已新增 `feats/phb-feats.html` 覆盖索引。
- [x] 已补 79 个独立详情页；其中 53 个来自缺页批次，26 个来自综合页拆分。
- [x] 已将“寓守于攻 / Combat Expertise”映射到已有 `feats/combat-expertise.html`，未重复建页。
- [x] 已将“灵活 / Mobility”作为“灵活移动 / Mobility”的别名映射到 `feats/mobility.html`，未重复建页。
- [x] 当前状态：109 个独立详情页、0 个综合页覆盖、0 个缺项。
- [x] 已生成 `data/phb-feat-page-audit.json` 做结构校对。

## 专长总分类

- [x] 已确认灰机「专长」总分类规模 1550 条，不能直接视为 PHB 缺口。
- [x] 已通过浏览器 API 读取 1550 个页面分类字段。
- [x] 已生成 `data/huiji-feat-page-categories.json`。
- [x] 已生成全站范围 `data/huiji-feat-coverage.json`。
- [x] 已标记 PHB：109 条。
- [x] 已标记核心 3R 非 PHB：14 条。
- [x] 已标记核心 3R/扩展书重叠：1 条。
- [x] 已标记 3R 官方扩展：1426 条。
- [x] 未确认来源：0 条。

## 执行顺序

1. [x] 抓取 4 个子分类成员列表，保存为 `data/huiji-phb-subcategories.json`。
2. [x] 生成 `data/huiji-phb-subcategory-coverage.json`。
3. [x] 补 PHB 技能缺项。
4. [x] 补 PHB 专长缺项。
5. [x] 拆分 PHB 综合页专长。
6. [x] 做灰机「专长」总分类来源分层。
