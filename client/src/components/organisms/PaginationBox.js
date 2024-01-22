import styled from "styled-components";
import PaginationButton from "../atoms/PaginationButton";
// import { ReactComponent as LeftArrow } from "../../../public/icons/left-pagination-arrow.svg";
// import { ReactComponent as RightArrow } from "../../../public/icons/right-pagination-arrow.svg";

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
    setCurrentPage(currentPage + 1);
  }

  function goToPrevPage() {
    setCurrentPage(currentPage - 1);
  }

  console.log(totalPageNum, pageList);

  return (
    <Wrapper>
      {pageList.length > 0 &&
        pageList.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => setCurrentPage(page)}
            pageNum={page}
          />
        ))}
    </Wrapper>
  );
}

export default PaginationBox;
