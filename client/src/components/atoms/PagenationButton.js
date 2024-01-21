import styled, { css } from "styled-components";
import * as fonts from "../../styles/font";

const common = css`
  ${fonts.small}
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 7px;
  margin: 2px;
`;

const PageBtn = styled.button`
  ${common}
  color: var(--silver-600);
  background-color: var(--blue-50);

  &:hover {
    ${common}
    background-color: var(--blue-100);
  }

  &:active,
  &:focus {
    ${common}
    color: var(--white);
    background-color: var(--blue-400);
  }
`;

function PagenationButton() {
  return (
    <>
      <PageBtn>1</PageBtn>
      <PageBtn>2</PageBtn>
      <PageBtn>3</PageBtn>
    </>
  );
}

export default PagenationButton;
