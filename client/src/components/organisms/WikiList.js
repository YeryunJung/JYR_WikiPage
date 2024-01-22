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
      {wikiList &&
        wikiList.map((wiki) => (
          <Wiki
            key={wiki.id}
            id={wiki.id}
            title={wiki.title}
            createdAt={wiki.createdAt}
            content={wiki.content}
          />
        ))}
    </WikiWrapper>
  );
}

export default WikiList;
