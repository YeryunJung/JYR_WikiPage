import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import * as fonts from "../../styles/font";
import Button from "../atoms/Button";
import { getWikiDetail } from "../../api/getWikiDetail";
import { getWikiTitleList } from "../../api/getWikiTitleList";
import AutoHyperlinks from "../../utils/AutoHyperlinks";

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

const PostTitle = styled.h1`
  ${fonts.title}
  width: 60%;
  height: 60px;
  border: none;
  padding: 5px;
  margin: 10px;
  color: var(--black);
  text-align: left;
`;

const PostContent = styled.div`
  ${fonts.small}
  width: 60%;
  height: 500px;
  border: 1.5px solid var(--silver-100);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  color: var(--black);
  text-align: left;
`;

const BtnWrapper = styled.div`
  width: 60%;
  height: 70px;
  display: flex;
  justify-content: right;
  text-align: center;
  margin: 5px 10px;

  & > a {
    margin-left: 10px;
  }
`;

function WikiDetailPage() {
  const { title } = useParams();
  const [wiki, setWiki] = useState(null);
  const [wikiTitleList, setWikiTitleList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWikiDetail(title);
        const titleData = await getWikiTitleList(title);
        const encodedTitle = titleData.map((title) =>
          encodeURIComponent(title)
        );
        setWiki(data);
        setWikiTitleList(encodedTitle);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [title]);

  return (
    <Wrapper>
      {wiki && wikiTitleList ? (
        <>
          <PostTitle data-cy="wikiTitle">{wiki.title}</PostTitle>
          <PostContent data-cy="wikiContent">
            <AutoHyperlinks
              text={encodeURIComponent(wiki.content)}
              linkArray={wikiTitleList}
            />
          </PostContent>
          <BtnWrapper>
            <Link to={"/"}>
              <Button size="normal" test-id="goToListBtn">
                목록으로
              </Button>
            </Link>
            <Link to={`/update/${encodeURIComponent(wiki.title)}`}>
              <Button size="normal" color="blueBtn" test-id="updateBtn">
                수정
              </Button>
            </Link>
          </BtnWrapper>
        </>
      ) : (
        <p>loading... </p>
      )}
    </Wrapper>
  );
}

export default WikiDetailPage;
