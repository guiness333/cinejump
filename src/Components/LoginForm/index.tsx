import React from 'react';
import { useHistory } from "react-router-dom";
import {FormStyle, FiMailS, FiLockS, InputFormStyle, ButtonStyle} from './styles';

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