'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const searchParams = useSearchParams();

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams as URLSearchParams);

    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }

    const queryString = params.toString();
    return queryString ? `?${queryString}` : '';
  };

  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    const maxVisiblePagesMobile = 3;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const maxPages = isMobile ? maxVisiblePagesMobile : maxVisiblePages;

    if (totalPages <= maxPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const half = Math.floor(maxPages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxPages - 1);

    if (end - start + 1 < maxPages) {
      start = Math.max(1, end - maxPages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();
  const showFirstPage = visiblePages[0] > 1;
  const showLastPage = visiblePages[visiblePages.length - 1] < totalPages;
  const showFirstEllipsis = visiblePages[0] > 2;
  const showLastEllipsis =
    visiblePages[visiblePages.length - 1] < totalPages - 1;

  return (
    <div className="flex items-center justify-center mt-4 sm:mt-6 px-2">
      <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide max-w-full">
        {currentPage > 1 && (
          <Link
            href={createPageUrl(currentPage - 1)}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 md:w-auto md:h-auto border-2 sm:border-4 rounded-lg font-bold shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] transition bg-green-400 border-purple-500 text-black hover:bg-green-500 flex-shrink-0"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
            <span className="hidden md:inline ml-1">Prev</span>
          </Link>
        )}

        {showFirstPage && (
          <>
            <Link
              href={createPageUrl(1)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:px-4 md:py-2 md:w-auto md:h-auto border-2 sm:border-4 rounded-lg font-bold shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] transition bg-yellow-100 border-purple-500 text-black hover:bg-green-200 flex-shrink-0 text-xs sm:text-sm md:text-base"
            >
              1
            </Link>
            {showFirstEllipsis && (
              <span className="text-purple-700 font-bold px-1 sm:px-2 flex-shrink-0">
                ...
              </span>
            )}
          </>
        )}

        {visiblePages.map((page) => (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={`
							flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:px-4 md:py-2 md:w-auto md:h-auto
							border-2 sm:border-4 rounded-lg font-bold flex-shrink-0
							shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] transition
							text-xs sm:text-sm md:text-base
							${
                page === currentPage
                  ? 'bg-purple-500 border-green-400 text-white transform scale-105'
                  : 'bg-yellow-100 border-purple-500 text-black hover:bg-green-200 hover:scale-105'
              }
						`}
          >
            {page}
          </Link>
        ))}

        {showLastPage && (
          <>
            {showLastEllipsis && (
              <span className="text-purple-700 font-bold px-1 sm:px-2 flex-shrink-0">
                ...
              </span>
            )}
            <Link
              href={createPageUrl(totalPages)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:px-4 md:py-2 md:w-auto md:h-auto border-2 sm:border-4 rounded-lg font-bold shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] transition bg-yellow-100 border-purple-500 text-black hover:bg-green-200 flex-shrink-0 text-xs sm:text-sm md:text-base"
            >
              {totalPages}
            </Link>
          </>
        )}

        {currentPage < totalPages && (
          <Link
            href={createPageUrl(currentPage + 1)}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:px-3 md:py-2 md:w-auto md:h-auto border-2 sm:border-4 rounded-lg font-bold shadow-[2px_2px_0_0_#000] sm:shadow-[3px_3px_0_0_#000] transition bg-green-400 border-purple-500 text-black hover:bg-green-500 flex-shrink-0"
          >
            <span className="hidden md:inline mr-1">Next</span>
            <ChevronRight size={16} className="sm:w-5 sm:h-5" />
          </Link>
        )}
      </div>
    </div>
  );
}
