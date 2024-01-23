import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWikiDetail } from "../../api/getWikiDetail";

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
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

  return (
    <Wrapper>
      {wiki ? (
        <>
          <h1>{wiki.title}</h1>
        </>
      ) : (
        <p>loading... </p>
      )}
    </Wrapper>
  );
}

export default WikiDetailPage;
