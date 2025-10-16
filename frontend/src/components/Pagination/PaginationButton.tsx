interface PaginationButtonProps {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

export function PaginationButton({ active, disabled, onClick, children, ariaLabel }: PaginationButtonProps) {
  const baseClasses = `
    min-h-9.5 min-w-9.5 flex justify-center items-center border py-2 px-3 text-sm
    first:rounded-s-lg last:rounded-e-lg focus:outline-hidden disabled:opacity-50
    disabled:pointer-events-none
  `;
  const theme = active
    ? `bg-gray-200 text-gray-800 border-gray-200 focus:bg-gray-300
       dark:bg-neutral-600 dark:border-neutral-700 dark:text-white dark:focus:bg-neutral-500`
    : `border-gray-200 text-gray-800 hover:bg-gray-100 focus:bg-gray-100
       dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`;

  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={`${baseClasses} ${theme}`}
    >
      {children}
    </button>
  );
}
