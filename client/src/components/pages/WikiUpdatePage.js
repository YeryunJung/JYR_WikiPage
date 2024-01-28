import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import * as fonts from "../../styles/font";
import Button from "../atoms/Button";
import { getWikiDetail } from "../../api/getWikiDetail";
import { getWikiTitleList } from "../../api/getWikiTitleList";
import { updateWikiDetail } from "../../api/updateWikiDetail";

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
  background-color: var(--silver-50);
`;

const PostTitle = styled.input`
  ${fonts.title}
  width: 60%;
  height: 60px;
  border: none;
  padding: 5px;
  margin: 10px;
  border-radius: 10px;
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
  border: none;
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

function WikiUpdatePage() {
  const navigate = useNavigate();
  const { title } = useParams();
  const [wikiPost, setWikiPost] = useState(null);
  const [wikiTitleList, setWikiTitleList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWikiDetail(title);
        setWikiPost(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const fetchTitleList = async () => {
      try {
        const titleList = await getWikiTitleList(title);
        setWikiTitleList(titleList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTitleList();
  }, [title]);

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
      "수정을 취소하고 게시글로 돌아가시겠습니까?"
    );
    if (confirmed) {
      navigate(`/${encodeURIComponent(title)}`);
    }
  };

  const handleUpdate = async () => {
    const trimmedTitle = wikiPost.title.trim();

    if (wikiTitleList.includes(trimmedTitle)) {
      alert(
        "이미 등록된 위키 제목을 사용하실 수 없습니다. 제목을 변경해주세요."
      );
      return;
    }

    if (trimmedTitle === "") {
      alert("제목을 작성해주세요.");
      return;
    }

    if (wikiPost.content === "") {
      alert("본문을 작성해주세요.");
      return;
    }

    try {
      await updateWikiDetail(wikiPost.id, { ...wikiPost, title: trimmedTitle });
      alert("수정이 완료되었습니다.");
      navigate(`/${encodeURIComponent(trimmedTitle)}`);
    } catch (error) {
      alert("수정이 정상적으로 완료되지 않았습니다. 다시 시도해주세요");
      console.error(error);
      navigate(`/${encodeURIComponent(trimmedTitle)}`);
    }
  };

  return (
    <Wrapper>
      {wikiPost && (
        <>
          <PostTitle
            placeholder="강의 제목을 입력해주세요."
            onChange={(e) =>
              setWikiPost((prev) => ({ ...prev, title: e.target.value }))
            }
            value={wikiPost.title}
            data-cy="updateTitleInput"
          />
          <PostContent
            placeholder="- 타 위키 게시글 제목이 존재할 경우 자동으로 하이퍼링크가 연결됩니다."
            onChange={handleContentChange}
            value={wikiPost.content}
            data-cy="updateContentTextarea"
          />
          <BtnWrapper>
            <Button size="normal" onClick={handleCancel}>
              취소
            </Button>
            <Button size="normal" color="blueBtn" onClick={handleUpdate}>
              수정 완료
            </Button>
          </BtnWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default WikiUpdatePage;
