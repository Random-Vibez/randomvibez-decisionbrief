const fs=require('fs');
const assert=require('assert');
const vm=require('vm');
const html=fs.readFileSync('index.html','utf8');
const js=fs.readFileSync('app.js','utf8');
const css=fs.readFileSync('styles.css','utf8');
assert(html.includes('id="question"')&&html.includes('id="options"')&&html.includes('id="criteria"'),'core editor missing');
assert((html.match(/<button\b/g)||[]).length===(html.match(/<button\b[^>]*type="button"/g)||[]).length,'all static buttons must declare type=button');
assert(js.includes('localStorage')&&js.includes('input.version!==1'),'local persistence/import version guard missing');
assert(js.includes('file is too large')&&js.includes('current brief is unchanged'),'import negative path missing');
assert(js.includes('Missing scores are incomplete evidence'),'incomplete evidence warning missing');
assert(js.includes('Current entered leader'),'non-authoritative leader language missing');
assert(js.includes('type="button"')&&js.includes('normalize(JSON.parse(r.result))'),'dynamic button/import normalization missing');
assert(js.includes('window.print()')&&js.includes("text/markdown")&&js.includes("application/json"),'export paths missing');
assert(css.includes('@media print')&&css.includes('prefers-reduced-motion'),'print/reduced motion styles missing');

const elements=new Map();
const element=id=>elements.get(id)||{value:'',textContent:'',innerHTML:''};
const context={window:{},document:{querySelector:id=>element(id),addEventListener:()=>{},createElement:()=>({click(){}})},localStorage:{getItem:()=>null,setItem(){}},setTimeout,clearTimeout,console};
context.window=context;
vm.runInNewContext(js,context,{filename:'app.js'});
const {normalize,scoreOptions}=context.DecisionBrief;
const base={version:1,question:'Q',deadline:'',nextAction:'',unknowns:'',mind:'',criteria:[{id:'fit',name:'Fit',weight:4},{id:'cost',name:'Cost',weight:2},{id:'risk',name:'Risk',weight:1}],options:[{id:'a',name:'A',note:'',url:'',scores:{fit:5,cost:3}},{id:'b',name:'B',note:'',url:'',scores:{fit:4,cost:5}}]};
const normalized=normalize(base);
assert(normalized,'valid fixture should normalize');
assert.strictEqual(JSON.stringify(normalized.options[0].scores),JSON.stringify({fit:5,cost:3}));
for(const bad of [
  {...base,version:2},
  {...base,options:[{...base.options[0],id:'a'},{...base.options[1],id:'a'}]},
  {...base,criteria:base.criteria.map(c=>c.id==='fit'?{...c,weight:0}:c)},
  {...base,options:base.options.map(o=>o.id==='a'?{...o,scores:{fit:6}}:o)},
  {...base,options:base.options.map(o=>o.id==='a'?{...o,scores:{unknown:3}}:o)},
  {...base,options:base.options.map(o=>o.id==='a'?{...o,name:42}:o)},
]) assert.strictEqual(normalize(bad),null,'malformed import must be rejected');
const ranked=scoreOptions(normalized.options,normalized.criteria);
assert.deepStrictEqual(ranked.map(x=>x.name),['A','B']);
assert.strictEqual(ranked[0].total,26);
assert.strictEqual(ranked[0].possible,30);
assert.strictEqual(ranked[0].pct,87);
assert.strictEqual(ranked[0].scored,2);
assert.strictEqual(ranked[0].coverage,67);
const incomplete=scoreOptions([{id:'a',name:'A',scores:{fit:5}},{id:'b',name:'B',scores:{fit:4}}],normalized.criteria);
assert.strictEqual(incomplete[0].pct,100,'score is calculated only among scored criteria');
assert.strictEqual(incomplete[0].coverage,33,'coverage is reported separately');
console.log('PASS: static contract checks');
console.log('PASS: validation rejects malformed IDs, weights, scores, types, and versions');
console.log('PASS: deterministic scoring fixture (A leads 26/30 = 87%, 67% coverage)');
