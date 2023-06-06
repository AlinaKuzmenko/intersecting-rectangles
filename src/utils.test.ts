import { areIntersecting } from './utils.ts';
import { IRectangle } from './types.ts';

const INTERSECTING_RECTANGLE_PAIRS: IRectangle[][] = [
  [{ x0: 0, x1: 4, y0: 0, y1: 4 }, { x0: 0, x1: 4, y0: 0, y1: 4 }, ],
  [{ x0: 0, x1: 4, y0: 0, y1: 4 }, { x0: 3, x1: 6, y0: 2, y1: 3 }, ],
  [{ x0: 2, x1: 3, y0: 5, y1: 6 }, { x0: 0, x1: 4, y0: 0, y1: 4 }, ],
  [{ x0: 2, x1: 3, y0: 4, y1: 5 }, { x0: 4, x1: 7, y0: 2, y1: 4 }, ],
];
const NON_INTERSECTING_RECTANGLE_PAIRS: IRectangle[][] = [
  [{ x0: 0, x1: 4, y0: 0, y1: 4 }, { x0: 5, x1: 8, y0: 5, y1: 8 }, ],
  [{ x0: 5, x1: 6, y0: 0, y1: 4 }, { x0: 1, x1: 2, y0: 5, y1: 8 }, ],
  [{ x0: 4, x1: 4, y0: 4, y1: 6 }, { x0: 5, x1: 6, y0: 1, y1: 3 }, ],
  [{ x0: 3, x1: 5, y0: 8, y1: 10 }, { x0: 1, x1: 2, y0: 4, y1: 6 }, ],
];

INTERSECTING_RECTANGLE_PAIRS.forEach((pair: IRectangle[], index) => {
  test(`test intersecting rectangles: ${index + 1} pair`, () => {
    const result = areIntersecting(pair[0], pair[1]);
    expect(result).toBe(true);
  });
})

NON_INTERSECTING_RECTANGLE_PAIRS.forEach((pair: IRectangle[], index) => {
  test(`test non-intersecting rectangles: ${index + 1} pair`, () => {
    const result = areIntersecting(pair[0], pair[1]);
    expect(result).toBe(false);
  });
})
