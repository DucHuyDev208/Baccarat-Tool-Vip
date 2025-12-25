export function trendSignal(hist){
  const last = hist.at(-1);
  let s = 1;
  for(let i=hist.length-2;i>=0;i--){
    if(hist[i] === last) s++;
    else break;
  }
  if(s >= 3 && s <= 6) return { method:'trend', pred:last };
  return null;
}
