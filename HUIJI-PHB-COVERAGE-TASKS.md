# 灰机 PHB 内容结构覆盖任务清单

对比来源：灰机 DND3R「分类:玩家手册规则」  
URL：https://dnd3r.huijiwiki.com/wiki/分类:玩家手册规则  
读取日期：2026-06-22  
最近更新：2026-06-23  
读取方式：通过应用内浏览器/API 抓取分类结构、子分类成员、页面字段和专长分类字段。

## 当前结论

灰机页面包含四层结构：书籍信息框、PHB 主导航模板、出版物导航模板、分类页本体。本站与灰机页面拆分不同，因此本清单按“本地落点是否存在”判断覆盖；译名、拆页和导航层级差异只记为结构映射，不写入规则冲突页。

## 已完成覆盖矩阵

- [x] PHB 分类页本体：57 / 57 已映射，缺口 0。数据文件：`data/huiji-phb-category-coverage.json`。
- [x] PHB 子分类列表：4 / 4 已抓取并建矩阵。数据文件：`data/huiji-phb-subcategories.json`、`data/huiji-phb-subcategory-coverage.json`。
- [x] 玩家手册边栏：17 / 17 已映射，入口：`rules-phb-sidebars.html`。
- [x] 玩家手册技能：36 / 36 已覆盖，缺口 0。
- [x] 玩家手册专长：109 / 109 已覆盖，109 项独立详情页、0 项综合页覆盖、缺口 0。入口：`feats/phb-feats.html`。
- [x] PHB 七核心种族导航：已新增 `races/phb-races.html`，并从 `rules-character.html`、`races/intro.html`、`rules-phb.html` 接入。
- [x] PHB 职业法术列表：已重建职业法术页和搜索数据；当前只剩 `Enlarge Person, Greater / 高等人类变巨术` 作为来源冲突候选，记录于 `conflicts.html#c19`。
- [x] 全站搜索：已扩展 `js/global-search-data.js`，覆盖 PHB 技能、PHB 专长、PHB 边栏/结构索引。
- [x] PHB 专长页结构校对：已生成 `data/phb-feat-page-audit.json`，109 / 109 页面存在并含先决条件、效果与 PHB 来源字段。
- [x] 灰机“专长”总分类来源分层：已读取 1550 个页面分类字段并生成 `data/huiji-feat-coverage.json`；未确认来源 0。
- [x] 非 PHB 扩展边界：已建立 `3R-OFFICIAL-EXPANSION-COVERAGE-TASKS.md`，扩展内容不并入 PHB 缺口。

## 非 PHB 后续范围

以下不属于当前 PHB 覆盖缺口；本轮已建立可见分类和专长来源矩阵：

- [x] DMG 当前可见分类矩阵：`data/huiji-dmg-coverage.json`。
- [x] MM 当前可见分类矩阵：`data/huiji-mm-coverage.json`。
- [x] 3R 官方扩展专长来源矩阵：`data/huiji-feat-coverage.json`。
- [x] 规则冲突复核策略已落实：当前批次新增内容没有新规则冲突；疑似来源冲突仅保留 `conflicts.html#c19`。

## 执行记录

- [x] 2026-06-22：建立 `rules-phb.html`，按灰机 PHB 分类结构做本地覆盖矩阵。
- [x] 2026-06-23：抓取 4 个子分类成员，建立 `HUIJI-PHB-SUBCATEGORY-TASKS.md`。
- [x] 2026-06-23：补齐 PHB 技能页与搜索索引，技能缺口清零。
- [x] 2026-06-23：补齐职业法术列表与详情匹配；疑似非 PHB/SRD 的 `Enlarge Person, Greater` 写入规则冲突页。
- [x] 2026-06-23：新增 `rules-phb-sidebars.html`，边栏 17 / 17 映射完成。
- [x] 2026-06-23：新增 `feats/phb-feats.html`，并补 79 个 PHB 专长详情页；PHB 专长独立页覆盖 109 / 109。
- [x] 2026-06-23：生成 `data/huiji-feat-page-categories.json`、`data/huiji-feat-coverage.json` 与 `3R-OFFICIAL-EXPANSION-COVERAGE-TASKS.md`，完成专长总分类来源分层。

## 验证记录

- [x] JS 语法检查通过：`js/global-search-data.js`、`js/spells-data.js`、`js/spells-domains.js`。
- [x] JSON 解析通过：PHB 分类、子分类、技能、专长覆盖数据。
- [x] 全站静态链接检查通过。
- [x] 替换字符检查通过：相关 HTML/JS/JSON/MD 未发现 `U+FFFD`。
