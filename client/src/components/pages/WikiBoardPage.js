import { useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import Button from "../atoms/Button";
import WikiList from "../organisms/WikiList";
import PagenationButton from "../atoms/PagenationButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const BtnWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function WikiBoardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 5;
  // const totalPageNum = Math.ceil(wikies.length / limitPerPage);

  return (
    <Wrapper>
      <Header />
      {/* 새 위키 추가 버튼 */}
      <BtnWrapper>
        <Button size="big" color="blueBtn">
          위키 추가하기
        </Button>
      </BtnWrapper>
      {/* 위키 목록 */}
      <WikiList />
      {/* 페이지네이션 */}
      <PagenationButton />
    </Wrapper>
  );
}

export default WikiBoardPage;
