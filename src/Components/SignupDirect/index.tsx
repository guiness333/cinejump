import React from 'react';
import { useHistory } from "react-router-dom";
import {GuestPanel, Message, ButtonStyle} from './styles';

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