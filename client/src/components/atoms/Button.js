import styled, { css } from "styled-components";
import * as fonts from "../../styles/font";

const blueBtn = css`
  color: var(--white);
  background-color: var(--blue-400);

  &:hover {
    background-color: var(--blue-500);
  }
`;

const big = css`
  width: 220px;
  height: 70px;
`;

const normal = css`
  width: 100px;
  height: 55px;
  font-size: 20px;
`;

const sizes = { big, normal };

const ButtonStyle = styled.button`
  border-radius: 20px;
  border: none;
  ${fonts.btnText}
  ${(props) => (props.size ? sizes[props.size] : "")}
  ${(props) =>
    props.color
      ? blueBtn
      : css`
          color: var(--black);
          background-color: var(--white);
          border: 1.2px solid var(--silver-100);
          &:hover {
            background-color: var(--silver-50);
          }
        `}
`;

function Button({ children, ...props }) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default Button;
