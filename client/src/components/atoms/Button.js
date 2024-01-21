import styled, { css } from "styled-components";
import * as fonts from "../../styles/font";

const blueBtn = css`
  color: var(--white);
  background-color: var(--blue-400);
`;

const big = css`
  width: 220px;
  height: 70px;
`;

const normal = css`
  width: 160px;
  height: 70px;
`;

const sizes = { big, normal };

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: none;
  ${fonts.btnText}
  ${(props) => (props.size ? sizes[props.size] : "")}
  ${(props) =>
    props.color
      ? blueBtn
      : css`
          color: var(--black);
          background-color: var(--blue-50);
        `}
  cursor: pointer;
`;

function Button({ children, ...props }) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}

export default Button;
