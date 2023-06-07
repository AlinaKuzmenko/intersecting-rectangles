import { IRectangle } from './types.ts';

export function areIntersecting(r1: IRectangle, r2: IRectangle) {
  return !((r1.x0 > r2.x1 || r1.x1 < r2.x0) && (r1.y0 > r2.y1 || r1.y1 < r2.y0));
}

export function isValid(r1: IRectangle, r2: IRectangle): boolean {
  const r1IsValid = (r1.x0 < r1.x1) && (r1.y0 < r1.y1);
  const r2IsValid = (r2.x0 < r2.x1) && (r2.y0 < r2.y1);
  return r1IsValid && r2IsValid;
}
