export function checkerBlock(hist){
  return hist.slice(-4).join('') === 'BPBP' ||
         hist.slice(-4).join('') === 'PBPB';
}
