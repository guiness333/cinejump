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
    <Container width="100%">
      <Container width="70%">
        <Logo />
        <LoginHeader />
        <LoginForm />
      </Container>
      <Container width="30%">
        <SignupDirect />
      </Container>
    </Container>
  );
}

export default Main;
