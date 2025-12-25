import { history, add, undo } from './data/storage.js';
import { decisionEngine } from './engine/decisionEngine.js';
import { renderAICore } from './ui/aiCore.js';
import { renderAIReason } from './ui/aiReason.js';
import { renderModules } from './ui/aiModules.js';

function render(){
  const d = decisionEngine(history);
  renderAICore(d);
  renderAIReason(d);
  renderModules(d);

  const h = document.getElementById('history');
  h.innerHTML = history.map(x=>`<span>${x}</span>`).join('');
}

document.getElementById('btnB').onclick = ()=>{ add('B'); render(); };
document.getElementById('btnP').onclick = ()=>{ add('P'); render(); };
document.getElementById('btnUndo').onclick = ()=>{ undo(); render(); };

render();
