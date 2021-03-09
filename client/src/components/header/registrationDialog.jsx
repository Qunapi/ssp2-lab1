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

export const RegistrationDialog = ({
  registration,
  closeRegistrationDialog,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.password.value !== event.target.password2.value) {
      // eslint-disable-next-line no-alert
      alert("Passwords do not match");
      return;
    }
    closeRegistrationDialog();
  };

  return (
    <Dialog open={registration} onClose={closeRegistrationDialog}>
      <Form onSubmit={handleSubmit}>
        <TextField name="email" type="email" required label="Standard" />
        <TextField name="password" required type="password" label="Standard" />
        <TextField name="password2" required type="password" label="Standard" />
        <Submit type="submit">Submit</Submit>
      </Form>
    </Dialog>
  );
};
