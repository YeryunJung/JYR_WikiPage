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
  return (
    <WikiWrapper>
      {wikiList ? (
        wikiList.map((wiki) => (
          <Link key={wiki.id} to={`/${encodeURIComponent(wiki.title)}`}>
            <Wiki
              key={wiki.id}
              id={wiki.id}
              title={wiki.title}
              createdAt={wiki.createdAt}
              content={wiki.content}
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
