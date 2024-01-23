import { Link } from "react-router-dom";
import styled from "styled-components";
import Wiki from "../atoms/Wiki";

const WikiWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
`;

function WikiList({ wikiList }) {
  const latestWikiList = wikiList
    ? [...wikiList].sort((a, b) => b.createdAt - a.createdAt)
    : null;

  return (
    <WikiWrapper>
      {latestWikiList ? (
        latestWikiList.map((latestWikiList) => (
          <Link
            key={latestWikiList.id}
            to={`/${encodeURIComponent(latestWikiList.title)}`}
          >
            <Wiki
              key={latestWikiList.id}
              id={latestWikiList.id}
              title={latestWikiList.title}
              createdAt={latestWikiList.createdAt}
              content={latestWikiList.content}
            />
          </Link>
        ))
      ) : (
        <p>아직 위키가 등록되지 않았습니다. 위키를 추가해보세요!</p>
      )}
    </WikiWrapper>
  );
}

export default WikiList;
