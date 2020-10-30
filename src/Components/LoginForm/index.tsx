import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginAuth } from "../../domains/User_CRUD";
import {
  FormStyle,
  FiMailS,
  FiLockS,
  InputFormStyle,
  ButtonStyle,
} from "./styles";
import translate from "../../utils";
import { Error } from "../Error";

export const LoginForm = () => {
  let history = useHistory();
  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState(String);
  const [error, setError] = useState(String);

  async function handleClick(event: any) {
    event.preventDefault();
    try {
      let response = await LoginAuth(email, password);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('Logou')
        history.push("/home");
        
      }
    } catch (err) {
      setError(translate(err.response.data.message));
    }
  }
  return (
    <FormStyle onSubmit={handleClick}>
      {error && <Error text={error} />}
      <FiMailS />
      <InputFormStyle
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
        type="text"
      ></InputFormStyle>
      <FiLockS />
      <InputFormStyle
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Senha"
        type="password"
      ></InputFormStyle>
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
