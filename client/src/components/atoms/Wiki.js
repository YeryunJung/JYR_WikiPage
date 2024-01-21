import styled from "styled-components";
import * as fonts from "../../styles/font";

const Post = styled.li`
  width: 1000px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: 15px;
  padding: 0 40px;
  background-color: var(--blue-50);
`;

const PostTitle = styled.div`
  ${fonts.normal}
`;

const PostDate = styled.div`
  ${fonts.small}
`;

function Wiki() {
  return (
    <Post>
      <PostTitle>파이썬 기초 강좌</PostTitle>
      <PostDate>2023-12-23</PostDate>
    </Post>
  );
}

export default Wiki;
