import React, { useContext } from "react";
import styled from "@emotion/styled";
import Button from "@material-ui/core/Button";
import { Popover } from "@material-ui/core";
import { UseDialog } from "../../hooks/useDialog";
import { LoginDialog } from "./loginDialog";
import { RegistrationDialog } from "./registrationDialog";
import { MyContext } from "../../context/context";

const Container = styled.div`
  padding: 8px;
`;

const ActionButton = styled(Button)``;

const LogoutActions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserPopover = ({ popover, closePopover }) => {
  const [loginDialog, closeLoginDialog, openLoginDialog] = UseDialog();
  const [
    registrationDialog,
    closeRegistrationDialog,
    openRegistrationDialog,
  ] = UseDialog();

  const { login, setLogin } = useContext(MyContext);

  const isLogged = !!login;

  const handleLogout = () => {
    setLogin({ da: Math.random() });
  };

  const handleLogin = () => {
    openLoginDialog();
  };

  const handleRegister = () => {
    openRegistrationDialog();
  };

  return (
    <Popover
      disableScrollLock
      anchorEl={popover}
      keepMounted
      open={Boolean(popover)}
      onClose={closePopover}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Container>
        {isLogged ? (
          <ActionButton onClick={handleLogout}>Logout</ActionButton>
        ) : (
          <LogoutActions>
            <ActionButton onClick={handleLogin}>Login</ActionButton>
            <ActionButton onClick={handleRegister}>Register</ActionButton>
          </LogoutActions>
        )}
      </Container>
      <LoginDialog
        closeLoginDialog={closeLoginDialog}
        loginDialog={loginDialog}
      ></LoginDialog>
      <RegistrationDialog
        registration={registrationDialog}
        closeRegistrationDialog={closeRegistrationDialog}
      ></RegistrationDialog>
    </Popover>
  );
};
