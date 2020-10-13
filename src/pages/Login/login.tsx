import React from "react";
import {
  Logo,
  LoginHeader,
  LoginForm,
  SignupDirect,
} from "../../Components";
import { Container } from "../../Components";
export const Main = () => {
  return (
    <Container width="100%" height="1000">
      <Container width="70%" height="1000">
        <Logo color={"#E83F5B"}/>
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
