import React from 'react';
import { useHistory } from "react-router-dom";
import {GuestPanel, Message, ButtonStyle} from './styles';
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
        <Message>
          Para se manter conectado, faça login com suas credenciais
        </Message>
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