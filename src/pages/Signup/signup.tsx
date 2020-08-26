import React from "react";
import {
  Logo,
  SignupForm,
  LoginDirect,
  SignupHeader
} from "../Components/Components";
import { Container } from "../Components/LoginContainer";
function Main() {
  return (
    <Container width="100%">
      <Container width="30%">
        <LoginDirect />
      </Container>
      <Container width="70%">
        <Logo />
        <SignupHeader />
        <SignupForm />
      </Container>
    </Container>
  );
}

export default Main;
