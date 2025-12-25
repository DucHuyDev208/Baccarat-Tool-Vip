export const history = [];

export function add(r){ history.push(r); }
export function undo(){ history.pop(); }
