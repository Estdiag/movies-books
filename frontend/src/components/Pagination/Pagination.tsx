import { usePagination, type UsePaginationOptions } from "../../hooks/usePagination";
import { PaginationButton } from "./PaginationButton";

export function Pagination({ initialPage,
  totalPages,
  onPageChange,
}: UsePaginationOptions) {
  const {
    pages,
    currentPage,
    setCurrentPage,
    prevPage,
    nextPage,
    prevStack,
    nextStack,
    setFirstPage,
    setLastPage,
  } = usePagination({
    initialPage,
    totalPages,
    onPageChange,

  });

  return (
    <div className="grid justify-center sm:flex sm:justify-between sm:items-center gap-1">
      <nav className="flex items-center -space-x-px" aria-label="Pagination">
        <PaginationButton disabled={currentPage === 1} onClick={prevPage} ariaLabel="Previous">
          <span className="material-symbols-rounded !text-[18px]">chevron_left</span>
        </PaginationButton>

        {pages[0] !== 1 && (
          <PaginationButton onClick={setFirstPage}>1</PaginationButton>
        )}


        <PaginationButton disabled={pages[0] === 1} onClick={prevStack}>
          <span className="text-xs">•••</span>
        </PaginationButton>

        {pages.map(page => (
          <PaginationButton
            key={page}
            active={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </PaginationButton>
        ))}


        <PaginationButton
          disabled={pages[pages.length - 1] === totalPages}
          onClick={nextStack}
        >
          <span className="text-xs">•••</span>
        </PaginationButton>

        {pages[pages.length - 1] < totalPages && (
          <PaginationButton onClick={setLastPage}>{totalPages}</PaginationButton>
        )}

        <PaginationButton disabled={currentPage === totalPages} onClick={nextPage} ariaLabel="Next">
          <span className="material-symbols-rounded !text-[18px]">chevron_right</span>
        </PaginationButton>
      </nav>


      {/* <div className="flex justify-center sm:justify-start items-center gap-x-2">
        <span className="text-sm text-gray-800 dark:text-white">Go to</span>
        <input
          type="number"
          className="min-h-9.5 py-2 px-2.5 w-12 border-gray-200 rounded-lg text-sm text-center
          focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700
          dark:text-neutral-400 dark:focus:ring-neutral-600"
          onKeyDown={e => {
            if (e.key === "Enter") {
              const page = Number((e.target as HTMLInputElement).value);
              if (page >= 1 && page <= totalPages) setCurrentPage(page);
            }
          }}
        />
        <span className="text-sm text-gray-800 dark:text-white">page</span>
      </div> */}
    </div>
  );
}
