import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as fonts from "../../styles/font";
import Button from "../atoms/Button";
import { postWiki } from "../../api/postWiki";

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
  const navigate = useNavigate();
  const [wikiPost, setWikiPost] = useState({
    title: "",
    createdAt: null,
    content: "",
  });

  function handleContentChange(e) {
    const newContent = e.target.value;
    if (newContent.length > 300) {
      alert("300자를 초과했습니다!");
      return;
    }

    setWikiPost((prev) => ({ ...prev, content: newContent }));
  }

  const handleCancel = () => {
    const confirmed = window.confirm(
      "작성을 취소하고 목록으로 돌아가시겠습니까?"
    );
    if (confirmed) {
      navigate(`/`);
    }
  };

  const handlePost = async () => {
    if (wikiPost.title === "") {
      alert("제목을 작성해주세요.");
      return;
    }

    if (wikiPost.content === "") {
      alert("본문을 작성해주세요.");
      return;
    }

    await postWiki(wikiPost);
  };

  return (
    <Wrapper>
      <PostTitle
        placeholder="강의 제목을 입력해주세요."
        onChange={(e) =>
          setWikiPost((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <PostContent
        placeholder="- 타 위키 게시글 제목이 존재할 경우 자동으로 하이퍼링크가 연결됩니다."
        onChange={handleContentChange}
        value={wikiPost.content}
      />
      <BtnWrapper>
        <Button size="normal" onClick={handleCancel}>
          취소
        </Button>
        <Button size="normal" color="blueBtn" onClick={handlePost}>
          등록
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

export default NewWikiPostPage;
