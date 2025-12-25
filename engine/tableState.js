export function detectTableState(hist){
  if(hist.length < 6) return 'UNKNOWN';
  let alt = 0;
  for(let i=1;i<hist.length;i++){
    if(hist[i] !== hist[i-1]) alt++;
  }
  if(alt / hist.length > 0.6) return 'NOISE';
  return 'STABLE';
}
