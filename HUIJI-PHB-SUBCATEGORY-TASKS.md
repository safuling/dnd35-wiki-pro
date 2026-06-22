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
- [x] 已补 53 个新独立详情页。
- [x] 已将“寓守于攻 / Combat Expertise”映射到已有 `feats/combat-expertise.html`，未重复建页。
- [x] 当前状态：82 个独立详情页、27 个综合页覆盖、0 个缺项。
- [ ] 后续增强：把 27 个综合页覆盖条目拆成独立详情页，并做人工术语校对。

## 专长总分类

- [x] 已确认灰机「专长」总分类规模约 1550 条，不能直接视为 PHB 缺口。
- [x] 已先完成 PHB 范围覆盖，避免扩展内容污染 PHB 判断。
- [ ] 生成全站范围 `data/huiji-feat-coverage.json`。
- [ ] 对总分类条目做来源分层：PHB、核心 3R、扩展书、未确认。
- [ ] 扩展书专长后续进入单独扩展覆盖清单，不并入 PHB 完成率。

## 执行顺序

1. [x] 抓取 4 个子分类成员列表，保存为 `data/huiji-phb-subcategories.json`。
2. [x] 生成 `data/huiji-phb-subcategory-coverage.json`。
3. [x] 补 PHB 技能缺项。
4. [x] 补 PHB 专长缺项。
5. [ ] 拆分 PHB 综合页专长。
6. [ ] 做灰机「专长」总分类来源分层。
