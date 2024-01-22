import styled from "styled-components";
import PaginationButton from "../atoms/PaginationButton";
import { ReactComponent as LeftArrow } from "../../icons/left-pagination-arrow.svg";
import { ReactComponent as RightArrow } from "../../icons/right-pagination-arrow.svg";

const Wrapper = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
`;

function PaginationBox({
  totalPageNum,
  limitPerPage,
  setCurrentPage,
  currentPage,
}) {
  const pageList = [];

  for (let i = 1; i <= totalPageNum; i++) {
    pageList.push(i);
  }

  function goToNextPage() {
    if (currentPage < totalPageNum) {
      setCurrentPage(currentPage + 1);
    }
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <Wrapper>
      <PaginationButton
        pageNum={<LeftArrow />}
        noActive
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      />
      {pageList &&
        pageList.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => setCurrentPage(page)}
            pageNum={page}
            isActive={page === currentPage}
          />
        ))}
      <PaginationButton
        pageNum={<RightArrow />}
        noActive
        onClick={goToNextPage}
        disabled={currentPage === totalPageNum}
      />
    </Wrapper>
  );
}

export default PaginationBox;
