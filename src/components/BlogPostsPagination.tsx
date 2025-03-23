import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const BlogPostsPagination = ({
  pagination,
  basePath = "/?page=",
  numSiblingPages = 2,
}: {
  basePath?: string;
  numSiblingPages?: number;
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalPosts: number;
  };
}) => {
  const prevPage = pagination.page > 1 ? pagination.page - 1 : null;
  const nextPage = pagination.page < pagination.totalPages ? pagination.page + 1 : null;

  return (
    <Pagination>
      <PaginationContent>
        {prevPage && (
          <PaginationItem>
            <PaginationPrevious href={`${basePath}${prevPage}`} />
          </PaginationItem>
        )}
        {pagination.page > 3 && (
          <>
            <PaginationItem>
              <PaginationLink href={`${basePath}1`}>1</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}
        {Array.from({ length: pagination.totalPages }, (_, index) => index + 1)
          .filter(
            (pageNumber) =>
              Math.abs(pagination.page - pageNumber) <= numSiblingPages
          )
          .map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`${basePath}${pageNumber}`}
                isActive={pageNumber === pagination.page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
        {pagination.page < pagination.totalPages - 2 && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink href={`${basePath}${pagination.totalPages}`}>
                {pagination.totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {nextPage && (
          <PaginationItem>
            <PaginationNext href={`${basePath}${nextPage}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
