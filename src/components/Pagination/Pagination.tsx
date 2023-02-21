import { CPagination, CPaginationItem } from "@coreui/react";
import React from "react";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  // Handles click event of a pagination item
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  // Handles click event of the previous button
  const handlePrev = () => {
    if (+currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Handles click event of the next button
  const handleNext = () => {
    if (+currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <CPagination align="center" aria-label="Page navigation example">
      {/* Previous button */}
      <CPaginationItem onClick={handlePrev} disabled={+currentPage === 1} aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {/* Pagination items */}
      {[...Array(totalPages)].map((_, i) => (
        <CPaginationItem key={i} onClick={() => handleClick(i + 1)} active={i + 1 === +currentPage}>
          {i + 1}
        </CPaginationItem>
      ))}
      {/* Next button */}
      <CPaginationItem
        onClick={handleNext}
        disabled={+currentPage === totalPages}
        aria-label="Next"
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  );
};

export default Pagination;
