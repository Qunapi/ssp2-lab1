import styled from "@emotion/styled";
import { Suspense, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Tag, Tags } from "../../components/tags/Tags";
import { Header } from "../../components/header/header";
import { getBackendApi } from "../../helpers/getBackendApi";
import { MyContext } from "../../context/context";

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
  const { socket } = useContext(MyContext);

  const { id } = useParams();

  useEffect(() => {
    socket?.on("res/post", (msg) => {
      if (msg.status === "success") {
        setPost(msg.post);
      } else {
        toast.error("Error");
      }
    });

    return () => socket?.off("res/post");
  }, [socket]);

  useEffect(() => {
    socket?.emit("req/post", { id });
  }, [socket]);

  return (
    <>
      <Header></Header>
      <Suspense fallback={<h1>...Error</h1>}>
        <PostComponent post={post}></PostComponent>
      </Suspense>
    </>
  );
};
