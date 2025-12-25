export function mirrorSignal(hist){
  if(hist.length < 8) return null;
  const a = hist.at(-1), b = hist.at(-2);
  if(a !== b) return { method:'mirror', pred:a === 'B'?'P':'B' };
  return null;
}
