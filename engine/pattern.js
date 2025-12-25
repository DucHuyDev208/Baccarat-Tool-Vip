export function patternSignal(hist){
  if(hist.length < 12) return null;
  return { method:'pattern', pred: hist.at(-1) };
}
