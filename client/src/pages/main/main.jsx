import styled from "@emotion/styled";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { Post } from "./post/post";
import { Header } from "../../components/header/header";
import { MyContext } from "../../context/context";

const MainComponent = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const post1 = {
  id: 1,
  header: "Header",
  content: `Многие компании активно переносят свои данные в облако, обеспечивая тем самым гибкость и масштабируемость своих приложений. Но те, кто впервые пробуют облачные технологии, нередко сталкиваются с проблемой выбора правильного облачного хранилища под конкретную задачу. Какой тип диска подключить? Когда использовать объектное хранилище, а когда файловое? Какие преимущества и недостатки у каждого из них в облаке? Как можно использовать их совместно, чтобы улучшить утилизацию ресурсов?

  Я Хамзет Шогенов, архитектор облачной платформы Mail.ru Cloud Solutions, расскажу о системах хранения данных, доступных на нашей платформе, подробно остановлюсь на их технических характеристиках и оптимальных вариантах использования.
  
  `,
  author: "Author",
  date: new Date(),
  description: `Многие компании активно переносят свои данные в облако, обеспечивая тем самым гибкость и масштабируемость своих приложений. Но те, кто впервые пробуют облачные технологии, нередко сталкиваются с проблемой выбора правильного облачного хранилища под конкретную задачу. Какой тип диска подключить? Когда использовать объектное хранилище, а когда файловое? Какие преимущества и недостатки у каждого из них в облаке? Как можно использовать их совместно, чтобы улучшить утилизацию ресурсов?
  Я, Хамзет Шогенов, архитектор облачной платформы Mail.ru Cloud Solutions, расскажу о системах хранения данных, доступных на нашей платформе, подробно остановлюсь на их технических характеристиках и оптимальных вариантах использования.`,
  tags: ["tag1", "tag2"],
  img: "1.jpg",
};

const MainCmp = ({ posts }) => {
  return (
    <div>
      <Header></Header>
      <MainComponent>
        {posts.map((post) => (
          <Post key={`${post._id}`} post={post}></Post>
        ))}
      </MainComponent>
    </div>
  );
};

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const { socket } = useContext(MyContext);

  useEffect(() => {
    socket?.on("res/posts", (msg) => {
      if (msg.status === "success") {
        setPosts(msg.posts);
      } else {
        toast.error("Error");
      }
    });

    return () => socket?.off("res/posts");
  }, [socket]);

  useEffect(() => {
    socket?.emit("req/posts", {});
  }, [socket]);

  return <MainCmp posts={posts}></MainCmp>;
};
