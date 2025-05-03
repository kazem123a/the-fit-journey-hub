
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToPage: (pageNumber: number) => void;
}

const BlogPagination = ({ 
  currentPage, 
  totalPages, 
  goToPreviousPage, 
  goToNextPage, 
  goToPage 
}: BlogPaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12">
      <Pagination dir="rtl">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={goToPreviousPage} 
              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          
          {/* عرض الأرقام للصفحات الأولى */}
          {[...Array(Math.min(3, totalPages))].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          
          {/* إذا كان هناك أكثر من 6 صفحات، أضف علامة الحذف */}
          {totalPages > 6 && currentPage < totalPages - 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          
          {/* عرض صفحات إضافية قريبة من الصفحة الحالية */}
          {totalPages > 3 && currentPage > 3 && currentPage < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink 
                isActive={true}
                onClick={() => {}}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          )}
          
          {/* عرض الصفحة الأخيرة دائمًا إذا كان هناك أكثر من 3 صفحات */}
          {totalPages > 3 && (
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === totalPages}
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}
          
          <PaginationItem>
            <PaginationNext 
              onClick={goToNextPage}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
