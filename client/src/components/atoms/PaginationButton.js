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

  /* 현재 페이지일 경우 탭 선택 활성화 */
  &.active {
    ${common}
    color: var(--white);
    background-color: var(--blue-400);
  }

  /* 화살표 버튼일 경우 항상 탭 선택 비활성화 */
  &.no-active {
    &:active,
    &:focus {
      ${common}
      color: var(--silver-600);
      background-color: var(--blue-50);
    }

    /* 첫 페이지 또는 마지막 페이지일 경우 비활성화 */
    &:disabled {
      ${common}
      background-color: var(--silver-50);
      cursor: default;
    }
  }
`;

function PaginationButton({ pageNum, onClick, noActive, isActive, disabled }) {
  return (
    <>
      <PageBtn
        className={`${noActive ? "no-active" : ""} ${isActive ? "active" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {pageNum}
      </PageBtn>
    </>
  );
}

export default PaginationButton;
