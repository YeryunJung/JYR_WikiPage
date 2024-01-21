import styled from "styled-components";
import Header from "../organisms/Header";
import Button from "../atoms/Button";
import WikiList from "../organisms/WikiList";

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
  return (
    <Wrapper>
      <Header />
      <BtnWrapper>
        <Button size="big" color="blueBtn">
          위키 추가하기
        </Button>
      </BtnWrapper>
      <WikiList />
    </Wrapper>
  );
}

export default WikiBoardPage;
