import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Dialog } from "@material-ui/core";

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
  const handleSubmit = (event) => {
    closeLoginDialog();
    event.preventDefault();
  };

  return (
    <Dialog open={loginDialog} onClose={closeLoginDialog}>
      <Form onSubmit={handleSubmit}>
        <TextField id="standard-basic" type="email" required label="Standard" />
        <TextField
          id="standard-basic"
          required
          type="password"
          label="Standard"
        />
        <Submit type="submit">Submit</Submit>
      </Form>
    </Dialog>
  );
};
