import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as fonts from "../../styles/font";
import Button from "../atoms/Button";
import { postWiki } from "../../api/postWiki";
import { getWikiTitleList } from "../../api/getWikiTitleList";

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
    if (newContent.length > 500) {
      alert("500자를 초과했습니다!");
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
    const trimmedTitle = wikiPost.title.trim();

    if (trimmedTitle === "") {
      alert("제목을 작성해주세요.");
      return;
    }

    if (wikiPost.content === "") {
      alert("본문을 작성해주세요.");
      return;
    }

    try {
      const titleList = await getWikiTitleList();

      if (titleList) {
        // 중복 제목 확인
        if (titleList.includes(trimmedTitle)) {
          alert(
            "이미 등록된 위키 제목을 사용하실 수 없습니다. 제목을 변경해주세요."
          );
          return;
        } else {
          try {
            await postWiki({ ...wikiPost, title: trimmedTitle });
            alert("성공적으로 위키가 등록되었습니다!");
            navigate("/");
          } catch (error) {
            console.error(error);
            alert("위키 등록에 에러가 발생했습니다! 다시 시도해 주세요.");
          }
        }
      }
    } catch (error) {
      console.error(error);
      alert("위키 글제목 중복확인에 실패했습니다! 다시 시도해 주세요.");
    }
  };

  return (
    <Wrapper>
      <PostTitle
        placeholder="강의 제목을 입력해주세요."
        onChange={(e) =>
          setWikiPost((prev) => ({ ...prev, title: e.target.value }))
        }
        data-cy="newTitleInput"
      />
      <PostContent
        placeholder="- 타 위키 게시글 제목이 존재할 경우 자동으로 하이퍼링크가 연결됩니다."
        onChange={handleContentChange}
        value={wikiPost.content}
        data-cy="newContentTextarea"
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
