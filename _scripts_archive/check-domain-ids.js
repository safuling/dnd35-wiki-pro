const fs = require('fs');

// Load valid IDs
const lines = fs.readFileSync('all_spells.txt', 'utf8').split('\n');
const validIds = new Set();
const idToName = {};
lines.forEach(line => {
  const parts = line.split(' | ');
  if (parts.length >= 2) {
    validIds.add(parts[0]);
    idToName[parts[0]] = parts[1];
  }
});

console.log(`Loaded ${validIds.size} valid spell IDs\n`);

// All unique IDs used in spells-domains.js
const jsContent = fs.readFileSync('js/spells-domains.js', 'utf8');
const idRegex = /"([a-z][a-z0-9_]*)"\s*:/g;
let match;
const usedIds = new Set();
while ((match = idRegex.exec(jsContent)) !== null) {
  usedIds.add(match[1]);
}

console.log(`Found ${usedIds.size} IDs in spells-domains.js\n`);
console.log('=== Missing IDs ===');
let missingCount = 0;
usedIds.forEach(id => {
  if (!validIds.has(id)) {
    console.log(`  MISSING: ${id}`);
    missingCount++;
  }
});
if (missingCount === 0) console.log('  (none)');
console.log(`\nTotal missing: ${missingCount}/${usedIds.size}`);
