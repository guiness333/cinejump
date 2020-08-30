import React from "react";
import {
  LogoStyle,
  LoginHeaderStyle,
  InputFormStyle,
  FiLockS,
  FiMailS,
  FiUserS,
  FormStyle,
  ButtonStyle,
  Message,
  GuestPanel,
  Header,
} from "./Styles";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Logo-red.svg";

export const Logo = () => {
  return <LogoStyle src={logo}></LogoStyle>;
};
export const LoginHeader = () => {
  return <LoginHeaderStyle>Login</LoginHeaderStyle>;
};
export const SignupHeader = () => {
  return <LoginHeaderStyle>Criar Conta</LoginHeaderStyle>;
};
export const LoginForm = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
    <FormStyle onSubmit={handleClick}>
      <FiMailS />
      <InputFormStyle placeholder="E-mail" type="text"></InputFormStyle>
      <FiLockS />
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
export const SignupForm = () => {
  return (
    <FormStyle onSubmit={() => alert("Criar conta")}>
      <FiUserS />
      <InputFormStyle placeholder="Nome" type="text"></InputFormStyle>
      <FiMailS />
      <InputFormStyle placeholder="E-mail" type="text"></InputFormStyle>
      <FiLockS />
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
  let history = useHistory();
  function handleClick() {
    history.push("/signup");
  }
  return (
    <GuestPanel>
      <Message>
        <h1>Olá, visitante!</h1>
      </Message>
      <Message>Cadastre-se e conheça as vantagens do Cinejump</Message>
      <ButtonStyle
        onClick={handleClick}
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
export const LoginDirect = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <GuestPanel>
      <Message>
        <h1>Bem-vindo, Jumper</h1>
      </Message>
      <Message>Para se manter conectado, faça login com suas credenciais</Message>
      <ButtonStyle
        onClick={handleClick}
        backgroundColor="#E83F5B"
        textColor="white"
        borderColor="white"
        margem={25}
      >
        LOGIN
      </ButtonStyle>
    </GuestPanel>
  );
};

export const HeaderBackground = () => {
  return (
    <Header />
  )
}