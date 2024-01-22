import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import Button from "../atoms/Button";
import WikiList from "../organisms/WikiList";
import PaginationButton from "../atoms/PaginationButton";
import { getWikiList } from "../../api/getWiki";

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
  const [wikiList, setWikiList] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limitPerPage = 5;
  // const totalPageNum = Math.ceil(wikies.length / limitPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWikiList();
        setWikiList(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(wikiList);

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
      <WikiList wikiList={wikiList} />
      {/* 페이지네이션 */}
      <PaginationButton />
    </Wrapper>
  );
}

export default WikiBoardPage;
