import styled from "styled-components";
import * as fonts from "../../styles/font";

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px 40px 20px;
`;

const SubTitle = styled.div`
  ${fonts.normal}
`;

const Title = styled.div`
  margin-top: 12px;
  ${fonts.title}
`;

function Header() {
  return (
    <Wrapper>
      <SubTitle>코딩허브 위키에 오신 것을 환영합니다</SubTitle>
      <Title>어떤 강의에 대해 알고 싶으신가요?</Title>
    </Wrapper>
  );
}

export default Header;
