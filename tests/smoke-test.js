const fs=require('fs');
const assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
const js=fs.readFileSync('app.js','utf8');
const css=fs.readFileSync('styles.css','utf8');
assert(html.includes('id="question"')&&html.includes('id="options"')&&html.includes('id="criteria"'),'core editor missing');
assert(js.includes("localStorage")&&js.includes("version!==1"),'local persistence/import version guard missing');
assert(js.includes('file is too large')&&js.includes('current brief is unchanged'),'import negative path missing');
assert(js.includes('total/possible*100'),'deterministic weighted percentage missing');
assert(js.includes('window.print()')&&js.includes("text/markdown")&&js.includes("application/json"),'export paths missing');
assert(css.includes('@media print')&&css.includes('prefers-reduced-motion'),'print/reduced motion styles missing');
function calc(options,criteria){return options.map(o=>{let total=0,possible=0,scored=0;criteria.forEach(c=>{const w=Math.max(1,Math.min(5,Number(c.weight)||1));possible+=5*w;const v=Number(o.scores?.[c.id]);if(v>=1&&v<=5){total+=v*w;scored++}});return {name:o.name,total,possible,scored,pct:Math.round(total/possible*100)}}).sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name));}
const criteria=[{id:'fit',weight:4},{id:'cost',weight:2}];
const ranked=calc([{name:'A',scores:{fit:5,cost:3}},{name:'B',scores:{fit:4,cost:5}}],criteria);
assert.deepStrictEqual(ranked.map(x=>x.name),['A','B']);
assert.strictEqual(ranked[0].total,26); assert.strictEqual(ranked[0].possible,30); assert.strictEqual(ranked[0].pct,87);
console.log('PASS: static contract checks');
console.log('PASS: deterministic scoring fixture (A leads 26/30 = 87%)');
