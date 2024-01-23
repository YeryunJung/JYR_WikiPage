import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: var(--blue-600);
`;

const AutoHyperlinks = ({ text, linkArray }) => {
  linkArray.forEach((el) => console.log(decodeURIComponent(el)));

  const createLink = (word, index) => {
    if (linkArray.includes(word)) {
      return (
        <StyledLink to={`/${word}`}>{decodeURIComponent(word)}</StyledLink>
      );
    }
    return <span key={index}>{decodeURIComponent(word)}</span>;
  };

  const pattern = new RegExp(`\\b(${linkArray.join("|")})\\b`, "gi");
  const splitText = text.split(pattern);

  return <>{splitText.map((word, index) => createLink(word, index))}</>;
};

export default AutoHyperlinks;
