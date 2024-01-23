import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../organisms/Header";
import Button from "../atoms/Button";
import WikiList from "../organisms/WikiList";
import PaginationBox from "../organisms/PaginationBox";
import { getWikiList } from "../../api/getWikiList";

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
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [currentWikies, setCurrentWikies] = useState(null);
  const limitPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWikiList();
        setWikiList(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (wikiList) {
      const totalPageNum = Math.ceil(wikiList.length / limitPerPage);
      const firstWikiIndex = (currentPage - 1) * limitPerPage;
      const lastWikiIndex = firstWikiIndex + limitPerPage;
      const currentWikies = wikiList.slice(firstWikiIndex, lastWikiIndex);

      setTotalPageNum(totalPageNum);
      setCurrentWikies(currentWikies);
    }
  }, [currentPage, wikiList]);

  console.log(totalPageNum);

  return (
    <Wrapper>
      <Header />
      {/* 새 위키 추가 버튼 */}
      <BtnWrapper>
        <Link to="/write">
          <Button size="big" color="blueBtn">
            위키 추가하기
          </Button>
        </Link>
      </BtnWrapper>
      {/* 위키 목록 */}
      <WikiList wikiList={currentWikies} />
      {/* 페이지네이션 */}
      <PaginationBox
        totalPageNum={totalPageNum}
        limitPerPage={limitPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Wrapper>
  );
}

export default WikiBoardPage;
