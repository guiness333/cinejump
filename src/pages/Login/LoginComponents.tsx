import React from "react";
import {
  LogoStyle,
  LoginHeaderStyle,
  InputFormStyle,
  AiOutlineMailS,
  RiLockPasswordLineS,
  FormStyle,
  ButtonStyle,
  Message,
  GuestPanel,
} from "./loginStyle";

import logo from "../../assets/Logo-red.svg";

export const Logo = () => {
  return <LogoStyle src={logo}></LogoStyle>;
};
export const LoginHeader = () => {
  return <LoginHeaderStyle>Login</LoginHeaderStyle>;
};
export const LoginForm = () => {
  return (
    <FormStyle onSubmit={() => alert("Login")}>
      <AiOutlineMailS />
      <InputFormStyle placeholder="E-mail" type="text"></InputFormStyle>
      <RiLockPasswordLineS />
      <InputFormStyle placeholder="Senha" type="password"></InputFormStyle>
      <ButtonStyle
        type="submit"
        backgroundColor="#E83F5B"
        textColor="white"
        borderColor="#E83F5B"
        margem={18}
      >
        ENTRAR
      </ButtonStyle>
    </FormStyle>
  );
};
export const SignupDirect = () => {
  return (
    <GuestPanel >
      <Message><h1>Olá, visitante!</h1></Message>
      <Message>Cadastre-se e conheça as vantagens do Cinejump</Message>
      <ButtonStyle
        type="submit"
        backgroundColor="#E83F5B"
        textColor="white"
        borderColor="white"
        margem={25}
      >
        CRIAR CONTA
      </ButtonStyle>
    </GuestPanel>
  );
};
