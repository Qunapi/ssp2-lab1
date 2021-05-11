import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import MaterialTextField from "@material-ui/core/TextField";
import { Post } from "./post/post";
import { Header } from "../../components/header/header";
import { getBackendApi } from "../../helpers/getBackendApi";

const MainComponent = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 12px;
`;

const TextField = styled(MaterialTextField)`
  width: 100%;
  max-width: 780px;
  margin-top: 12px !important;
`;

const MainCmp = ({ posts, setSearch, search }) => {
  return (
    <div>
      <Header></Header>
      <MainComponent>
        <TextField
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          label="Search"
          variant="outlined"
        />
        {posts.map((post) => (
          <Post key={`${post._id}`} post={post}></Post>
        ))}
      </MainComponent>
    </div>
  );
};

export const Main = () => {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${getBackendApi()}/post?search=${search}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      // eslint-disable-next-line no-shadow
      .then(({ posts }) => {
        setPosts(posts.reverse());
      })
      .catch((e) => console.error(e));
  }, [search]);

  return (
    <MainCmp setSearch={setSearch} posts={posts} search={search}></MainCmp>
  );
};
