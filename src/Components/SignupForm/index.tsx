import React from 'react';
import {FormStyle, FiUserS, FiMailS, FiLockS, ButtonStyle, InputFormStyle} from './styles';
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