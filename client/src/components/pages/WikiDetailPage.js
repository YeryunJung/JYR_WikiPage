import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import * as fonts from "../../styles/font";
import { getWikiDetail } from "../../api/getWikiDetail";
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

const PostTitle = styled.h1`
  ${fonts.title}
  width: 60%;
  height: 45px;
  border: none;
  padding: 5px;
  margin: 10px 10px 20px 10px;
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

  & > button {
    margin-left: 10px;
  }
`;

function WikiDetailPage() {
  const { title } = useParams();
  const [wiki, setWiki] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWikiDetail(title);
        setWiki(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [title]);

  function handleUpdate() {}

  return (
    <Wrapper>
      {wiki ? (
        <>
          <PostTitle>{wiki.title}</PostTitle>
          <PostContent>{wiki.content}</PostContent>
          <BtnWrapper>
            <Link to={`/update/${encodeURIComponent(wiki.title)}`}>
              <Button size="normal" color="blueBtn">
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
