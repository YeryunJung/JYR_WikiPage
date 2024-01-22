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

function WikiList({wikiList}) {
  return (
    <WikiWrapper>
      <Wiki></Wiki>
      <Wiki></Wiki>
      <Wiki></Wiki>
      <Wiki></Wiki>
      <Wiki></Wiki>
    </WikiWrapper>
  );
}

export default WikiList;
