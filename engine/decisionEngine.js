import { detectTableState } from './tableState.js';
import { checkerBlock } from './checker.js';
import { trendSignal } from './trend.js';
import { mirrorSignal } from './mirror.js';
import { patternSignal } from './pattern.js';

export function decisionEngine(hist){
  const table = detectTableState(hist);

  if(table === 'NOISE' && checkerBlock(hist))
    return { action:'WAIT', reasonCode:'NOISE_BLOCK' };

  const t = trendSignal(hist);
  if(t) return { action:'PLAY', ...t, reasonCode:'STABLE_TREND' };

  const p = patternSignal(hist);
  if(p) return { action:'PLAY', ...p, reasonCode:'STABLE_PATTERN' };

  return { action:'WAIT', reasonCode:'UNKNOWN' };
}
