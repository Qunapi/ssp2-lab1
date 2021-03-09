import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { Tag, Tags } from "../../components/tags/Tags";
import { post1 } from "../main/main";
import { theme } from "../theme";
import { Header } from "../../components/header/header";
import { getBackendApi } from "../../helpers/getBackendApi";

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const Container = styled.main`
  display: flex;
  max-width: 780px;
  flex-direction: column;
  margin-top: 20px;
`;

const ArticleHeader = styled.h1`
  margin: 8px 0;
`;

const Img = styled.img``;

const Content = styled.div`
  margin: 8px 0px;
`;

const Author = styled.div`
  color: ${(props) => props.theme.font.primary};
`;

export const PostComponent = ({ post }) => {
  console.log({ post });
  return (
    <Main>
      <Container>
        <ArticleHeader>{post.header}</ArticleHeader>
        <Tags>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Img src={`${getBackendApi()}/${post.img}`}></Img>
        <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
        <Author>{post.author}</Author>
      </Container>
    </Main>
  );
};

export const Post = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <PostComponent post={post1}></PostComponent>
    </ThemeProvider>
  );
};
