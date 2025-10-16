export const createPages = (
  start: number,
  pagesToShow: number,
  totalPages: number
) =>
  Array.from({ length: pagesToShow }, (_, i) => start + i).filter(
    page => page >= 1 && page <= totalPages
  );

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));
