import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  FormStyle,
  FiMailS,
  FiLockS,
  InputFormStyle,
  ButtonStyle,
} from "./styles";
import { useAuth } from '../../domains/Auth/Hooks';
import translate from "../../utils";
import { Error } from "../Error";

export const LoginForm: React.FC = () => {
  let history = useHistory();
  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState(String);
  const [error, setError] = useState(String);
  const { loginAuth } = useAuth();

  const handleClick = useCallback(async (event: any) => {
    event.preventDefault();
    try {
      await loginAuth({email: email, password: password});

      history.push("/home");
    } catch (err) {
      setError(translate(err));
      console.log(err);
    }
  }, [loginAuth, email, password, history]);
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
