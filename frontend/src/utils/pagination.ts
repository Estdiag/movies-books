function blockOf(number: number, blockSize: number) {
  return Math.ceil(number / blockSize);
}
export const createPages = (
  start: number,
  pagesToShow: number,
  totalPages: number
) => {
  const arrayFrom = blockOf(start, pagesToShow) * pagesToShow - pagesToShow + 1;

  return Array.from({ length: pagesToShow }, (_, i) => arrayFrom + i).filter(
    page => page >= 1 && page <= totalPages
  );
};

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));
