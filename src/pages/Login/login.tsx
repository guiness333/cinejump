import React from "react";
import {
  Logo,
  LoginHeader,
  LoginForm,
  SignupDirect,
} from "../Components/Components";
import { Container } from "../Components/LoginContainer";
export const Main = () => {
  return (
    <Container width="100%" height="1000">
      <Container width="70%" height="1000">
        <Logo />
        <LoginHeader />
        <LoginForm />
      </Container>
      <Container width="30%" height="1000">
        <SignupDirect />
      </Container>
    </Container>
  );
}

export default Main;
