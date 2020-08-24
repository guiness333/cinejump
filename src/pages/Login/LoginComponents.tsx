import React from "react";
import {
  LogoStyle,
  LoginHeaderStyle,
  InputFormStyle,
  AiOutlineMailS,
  RiLockPasswordLineS,
  FormStyle,
} from "./loginStyle";

import logo from "../../assets/Logo-red.svg";

export const Logo = () => {
  return <LogoStyle src={logo}></LogoStyle>;
};
export const LoginHeader = () => {
  return <LoginHeaderStyle>Login</LoginHeaderStyle>;
};
export const InputForm = () => {
  return (
    <FormStyle onSubmit={() => alert('Login')}>
        <AiOutlineMailS />
        <InputFormStyle placeholder="E-mail" type="text"></InputFormStyle>
        <RiLockPasswordLineS />
        <InputFormStyle placeholder="Senha" type="password"></InputFormStyle>
        <button type="submit">Teste</button>
    </FormStyle>
  );
};
