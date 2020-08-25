import React from "react";
import {
  LogoStyle,
  LoginHeaderStyle,
  InputFormStyle,
  AiOutlineMailS,
  RiLockPasswordLineS,
  FormStyle,
  ButtonStyle,
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
    <FormStyle onSubmit={() => alert('Login')}>
        <AiOutlineMailS />
        <InputFormStyle placeholder="E-mail" type="text"></InputFormStyle>
        <RiLockPasswordLineS />
        <InputFormStyle placeholder="Senha" type="password"></InputFormStyle>
        <ButtonStyle type="submit">ENTRAR</ButtonStyle>
    </FormStyle>
  );
};
export const SignupDirect = () => {
  
}
