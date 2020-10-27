import React, { useState } from "react";
import translate, { emptyName, emptyEmail, emptyPassword } from "../../utils";
import {
  FormStyle,
  FiUserS,
  FiMailS,
  FiLockS,
  ButtonStyle,
  InputFormStyle,
} from "./styles";
import { Error } from "../Error";
import { Register } from "../../domains/User_CRUD/Register";
import { useHistory } from "react-router-dom";

export const SignupForm = () => {
  const [username, setUsername] = useState(String);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [error, setError] = useState(String);
  let history = useHistory();
  
  async function register(event: any) {
    event.preventDefault();
    if (!username) {
      setError(translate(emptyName));
    } else if (!email) {
      setError(translate(emptyEmail));
    } else if (!password) {
      setError(translate(emptyPassword));
    } else {
      try {
        let response = await Register(username, email, password);
        if (response) {
          localStorage.setItem("user", JSON.stringify(response.data));
          history.push("/home");
        }
      } catch (err) {
        setError(translate(err.response.data.message) || "");
      }
    }
  }

  return (
    <FormStyle onSubmit={register}>
      {error && <Error text={error} />}

      <FiUserS />
      <InputFormStyle
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        name="username"
        placeholder="Nome"
        type="text"
      ></InputFormStyle>
      <FiMailS />
      <InputFormStyle
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        name="email"
        placeholder="E-mail"
        type="text"
      ></InputFormStyle>
      <FiLockS />
      <InputFormStyle
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        name="password"
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
        Cadastrar
      </ButtonStyle>
    </FormStyle>
  );
};
