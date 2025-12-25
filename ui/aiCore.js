export function renderAICore(decision){
  const el = document.getElementById('aiCore');
  el.className = 'ai-core';

  if(decision.action === 'WAIT'){
    el.textContent = 'WAIT';
    el.classList.add('wait');
    return;
  }

  el.textContent = decision.pred === 'B' ? 'BANKER' : 'PLAYER';
  el.classList.add(decision.pred === 'B' ? 'banker' : 'player');
}
