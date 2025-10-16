// usePagination.ts
import { useCallback, useEffect, useState } from 'react';
import { clamp, createPages } from '../utils/pagination';

export interface UsePaginationOptions {
  initialPage: number;
  totalPages: number;
  onPageChange?: (newPage: number) => void;
  pagesToShow?: number;
}

export function usePagination({
  initialPage,
  totalPages,
  onPageChange,
  pagesToShow = 5,
}: UsePaginationOptions) {
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  useEffect(() => {
    if (onPageChange && initialPage !== currentPage) {
      onPageChange(currentPage);
    }
  }, [currentPage, onPageChange, initialPage]);

  useEffect(() => {
    setPages(createPages(initialPage, pagesToShow, totalPages));
  }, [pagesToShow, totalPages, initialPage]);

  const prevStack = useCallback(() => {
    const first = pages[0];
    if (first <= 1) return;
    const newFirst = clamp(first - pagesToShow, 1, totalPages);
    setPages(createPages(newFirst, pagesToShow, totalPages));
    setCurrentPage(newFirst);
  }, [pages, pagesToShow, totalPages]);

  const nextStack = useCallback(() => {
    const last = pages[pages.length - 1];
    if (last >= totalPages) return;
    const newFirst = clamp(last + 1, 1, totalPages);
    setPages(createPages(newFirst, pagesToShow, totalPages));
    setCurrentPage(newFirst + pagesToShow - 1);
  }, [pages, pagesToShow, totalPages]);

  const nextPage = useCallback(() => {
    if (currentPage >= totalPages) return;
    const last = pages[pages.length - 1];
    if (currentPage === last) {
      const newFirst = clamp(pages[0] + 1, 1, totalPages - pagesToShow + 1);
      setPages(createPages(newFirst, pagesToShow, totalPages));
    }
    setCurrentPage(prev => clamp(prev + 1, 1, totalPages));
  }, [currentPage, pages, pagesToShow, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage <= 1) return;
    const first = pages[0];
    if (first === currentPage) {
      const newFirst = clamp(first - pagesToShow, 1, totalPages);
      setPages(createPages(newFirst, pagesToShow, totalPages));
    }
    setCurrentPage(prev => clamp(prev - 1, 1, totalPages));
  }, [currentPage, pages, pagesToShow, totalPages]);

  const setFirstPage = useCallback(() => {
    setPages(createPages(1, pagesToShow, totalPages));
    setCurrentPage(1);
  }, [pagesToShow, totalPages]);

  const setLastPage = useCallback(() => {
    const start = clamp(totalPages - pagesToShow + 1, 1, totalPages);
    setPages(createPages(start, pagesToShow, totalPages));
    setCurrentPage(totalPages);
  }, [pagesToShow, totalPages]);

  const setCurrentPageHandler = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    pages,
    currentPage,
    setCurrentPage: setCurrentPageHandler,
    prevPage,
    nextPage,
    prevStack,
    nextStack,
    setFirstPage,
    setLastPage,
  };
}
