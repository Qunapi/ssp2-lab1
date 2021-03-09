import styled from "@emotion/styled";
import { useContext } from "react";
import { ThemeProvider } from "@emotion/react";
import Card from "@material-ui/core/Card";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Header } from "../../components/header/header";
import { theme } from "../theme";
import { getBackendApi } from "../../helpers/getBackendApi";
import { MyContext } from "../../context/context";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const FileInput = styled.input`
  margin-top: 8px;
`;

const Submit = styled(Button)`
  height: 32px !important;
  background: ${(props) => {
    return props.theme.palette.secondary;
  }} !important;
  color: white !important;
  margin-top: 16px !important;
`;

export const CreatePost = () => {
  const { login, setLogin } = useContext(MyContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const tags = event.target.tags.value.split(",");
    formData.append("header", event.target.header.value);
    formData.append("content", event.target.content.value);
    formData.append("date", new Date());
    formData.append("description", event.target.description.value);
    formData.append("tags", tags);
    formData.append("img", event.target.file.files[0]);
    formData.append("user", login);

    await fetch(`${getBackendApi()}/post`, {
      method: "post",
      body: formData,
      credentials: "include",
    });

    toast.success("Post created");
  };

  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Main>
        <Card>
          <Form onSubmit={onSubmit} method="POST" encType="multipart/form-data">
            <TextField
              name="header"
              placeholder="header"
              label="header"
              required
            ></TextField>
            <TextField
              name="content"
              placeholder="content"
              label="content"
              required
            ></TextField>
            <TextField
              name="description"
              placeholder="description"
              label="description"
              required
            ></TextField>
            <TextField
              name="tags"
              placeholder="tags"
              label="tags"
              required
            ></TextField>
            <FileInput name="file" type="file" required></FileInput>
            <Submit type="submit">Submit</Submit>
          </Form>
        </Card>
      </Main>
    </ThemeProvider>
  );
};
