import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";


export const SectionWithPagination = ({ items, page, setPage, itemsPerPage, renderItem, className }) => {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={`mt-12 ${className}`}>
      {items.length === 0 ? (
        <div className="bg-white rounded-lg p-6 text-center text-slate-500">
          No items found
        </div>
      ) : (
        <>
        {
          renderItem(paginatedItems)
        }
          

          {totalPages > 1 && (
            <PaginationControls
              currentPage={page}
              totalPages={totalPages}
              onPrev={() => setPage(p => Math.max(1, p - 1))}
              onNext={() => setPage(p => Math.min(totalPages, p + 1))}
              className="mt-8"
            />
          )}
        </>
      )}
    </section>
  );
};

export const PaginationControls = ({ currentPage, totalPages, onPrev, onNext, className }) => (
  <div className={`flex justify-center items-center gap-4 ${className}`}>
    <button
      onClick={onPrev}
      disabled={currentPage === 1}
      className="px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <span className="text-slate-700 text-sm">
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={onNext}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bg-white border border-slate-300 rounded-md text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
);