import { css } from "styled-components";

export const global = css`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  text-rendering: optimizelegibility;
`;

export const title = css`
  font-size: 48px;
  font-weight: bold;
`;

export const subtitle = css`
  font-size: 32px;
`;

export const small = css`
  ${global}
  font-size: 20px;
`;

export const normal = css`
  ${global}
  font-size: 28px;
`;

export const btnText = css`
  ${global}
  font-size: 28px;
  font-weight: bold;
`;
