import React from "react";
import {
  Logo,
  LoginHeader,
  LoginForm,
  SignupDirect,
} from "../Login/LoginComponents";
import { Container } from "../Login/LoginContainer";
function Main() {
  return (
    <Container width="100%">
      <Container width="30%">
        <SignupDirect />
      </Container>
      <Container width="70%">
        <Logo />
        <LoginHeader />
        <LoginForm />
      </Container>
    </Container>
  );
}

export default Main;
