export function renderModules(decision){
  const box = document.getElementById('aiModules');
  box.className = 'ai-modules';
  box.innerHTML = '';

  ['trend','mirror','pattern','checker'].forEach(m=>{
    const d = document.createElement('div');
    d.className = 'ai-module' + (decision.method === m ? ' active':'');
    d.textContent = m.toUpperCase();
    box.appendChild(d);
  });
}
