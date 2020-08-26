import React from "react";
import {
  Logo,
  Header,
  LoginForm,
  SignupDirect,
} from "../Components/Components";
import { Container } from "../Components/LoginContainer";
export const Main = () => {
  return (
    <Container width="100%">
      <Container width="70%">
        <Logo />
        <Header />
        <LoginForm />
      </Container>
      <Container width="30%">
        <SignupDirect />
      </Container>
    </Container>
  );
}

export default Main;
