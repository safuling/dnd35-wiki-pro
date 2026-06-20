const fs = require('fs');

// 读取法术数据
const c = fs.readFileSync('js/spells-data.js', 'utf8');
const fn = new Function(c + '; return SPELLS');
let spells = fn();

// 检查是否已存在
const existingIds = new Set(spells.map(s => s.id));
const existingNames = new Set(spells.map(s => (s.nameEn || '').toLowerCase()));

const summon4Id = 'summon_monster_4';
const summon4Name = 'Summon Monster IV';

if (existingIds.has(summon4Id) || existingNames.has(summon4Name.toLowerCase())) {
  console.log('⚠️  Summon Monster IV 已存在，跳过添加。');
  process.exit(0);
}

// Summon Monster IV 法术数据
const summon4 = {
  id: summon4Id,
  nameEn: summon4Name,
  nameZh: '召唤怪物Ⅳ',
  level: 4,
  school: '咒法系',
  components: 'V,S,F',
  castingTime: '1轮',
  range: '近距',
  target: '见描述',
  duration: '1轮/环',
  savingThrow: '无',
  spellResist: '否',
  desc: '你召唤一个CR4或更低的生物为你作战。常见选择：1个石巨人、1个大型土元素、1个大型水元素、1个仲裁者、1个死灵虫等。召唤物出现后会攻击你的敌人。如果你在法术持续期间失去意识或死亡，召唤物消失。',
  source: 'PHB'
};

// 添加到数组
spells.push(summon4);

// 写回文件
const output = 'const SPELLS = ' + JSON.stringify(spells, null, 2) + ';\n';
fs.writeFileSync('js/spells-data.js', output, 'utf8');

console.log('✅ 已添加 Summon Monster IV 法术！');
console.log(`当前法术总数: ${spells.length}`);
console.log(`PHB法术: ${spells.filter(s => s.source === 'PHB').length}`);
console.log(`3R法术: ${spells.filter(s => s.source === '3R').length}`);
