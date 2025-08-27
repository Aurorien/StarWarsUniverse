import type { ReactNode } from "react";
import Button from "./Button";
import Icon from "./Icon";
import Loader from "./Loader";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  loading: boolean;
  previous: () => void;
  next: () => void;
}

function Pagination({
  currentPage,
  pageCount,
  loading,
  previous,
  next,
}: PaginationProps) {
  const renderPagination = (): ReactNode => {
    if (loading) return <Loader small />;

    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };
  return (
    <section>
      <Button
        disabled={currentPage === 1 ? true : undefined}
        onClick={previous}
      >
        <Icon icon="label_important" direction="left" />
      </Button>
      <p>{renderPagination()}</p>
      <Button
        disabled={currentPage === pageCount ? true : undefined}
        onClick={next}
      >
        <Icon icon="label_important" direction="right" />
      </Button>
    </section>
  );
}

export default Pagination;
