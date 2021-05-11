import styled from "@emotion/styled";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Tag, Tags } from "../../components/tags/Tags";
import { Header } from "../../components/header/header";
import { getBackendApi } from "../../helpers/getBackendApi";

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 12px;
`;

const Container = styled.div`
  display: flex;
  max-width: 780px;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const ArticleHeader = styled.h1`
  margin: 8px 0;
`;

const Img = styled.img`
  width: 100%;
`;

const Content = styled.div`
  margin: 8px 0px;
`;

const Author = styled.div`
  color: ${(props) => props.theme.font.primary};
`;

export const PostComponent = ({ post }) => {
  if (!post) {
    return null;
  }
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
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`${getBackendApi()}/post/${id}`, { credentials: "include" })
      .then((response) => response.json())
      // eslint-disable-next-line no-shadow
      .then(({ post }) => {
        setPost(post);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <Header></Header>
      <Suspense fallback={<h1>helo</h1>}>
        <PostComponent post={post}></PostComponent>
      </Suspense>
    </>
  );
};
