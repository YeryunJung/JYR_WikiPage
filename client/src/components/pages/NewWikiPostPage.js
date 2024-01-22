import styled, { css } from "styled-components";
import * as fonts from "../../styles/font";
import Button from "../atoms/Button";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  overflow: hidden;
`;

const PostTitle = styled.input`
  ${fonts.title}
  width: 60%;
  height: 45px;
  border: none;
  padding: 5px;
  margin: 10px 10px 20px 10px;
  color: var(--black);
  text-align: left;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--silver-300);
  }
`;

const PostContent = styled.textarea`
  ${fonts.small}
  width: 60%;
  height: 500px;
  border: 1.5px solid var(--silver-100);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: var(--black);
  resize: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: var(--silver-300);
  }
`;

const BtnWrapper = styled.div`
  width: 60%;
  height: 70px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 5px 10px;

  & > button {
    margin-left: 10px;
  }
`;

function NewWikiPostPage() {
  return (
    <Wrapper>
      <PostTitle placeholder="강의 제목을 입력해주세요." />
      <PostContent placeholder="- 타 위키 게시글 제목이 존재할 경우 자동으로 하이퍼링크가 연결됩니다." />
      <BtnWrapper>
        <Button size="normal">취소</Button>
        <Button size="normal" color="blueBtn">
          등록
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

export default NewWikiPostPage;
