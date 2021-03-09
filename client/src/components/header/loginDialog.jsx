import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Dialog } from "@material-ui/core";
import { getBackendApi } from "../../helpers/getBackendApi";
import { MyContext } from "../../context/context";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Submit = styled(Button)`
  height: 32px !important;
  background: ${(props) => {
    return props.theme.palette.secondary;
  }} !important;
  color: white !important;
  margin-top: 8px !important;
`;

export const LoginDialog = ({ loginDialog, closeLoginDialog }) => {
  const { setLogin } = useContext(MyContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${getBackendApi()}/user/auth`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: event.target.login.value,
        password: event.target.password.value,
      }),
      credentials: "include",
    });

    const data = await response.json();
    if (data) {
      setLogin({ ...data.user });
      closeLoginDialog();
      toast.success("Logged in");
    } else {
      toast.error("Auth error");
    }
  };

  return (
    <Dialog open={loginDialog} onClose={closeLoginDialog}>
      <Form onSubmit={handleSubmit}>
        <TextField type="email" required name="login" label="Standard" />
        <TextField name="password" required type="password" label="Standard" />
        <Submit type="submit">Submit</Submit>
      </Form>
    </Dialog>
  );
};
