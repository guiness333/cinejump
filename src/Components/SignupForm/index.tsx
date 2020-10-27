import React, { useState } from "react";
//import hash from '../../utils';
import {
  FormStyle,
  FiUserS,
  FiMailS,
  FiLockS,
  ButtonStyle,
  InputFormStyle,
} from "./styles";
import Response from "./dtos/Response";
import loginAPI from "../../services/loginAPI";
import { Error } from "../Error";
import { useHistory } from "react-router-dom";

export const SignupForm = () => {
  let history = useHistory();
  const [username, setUsername] = useState(String);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [error, setError] = useState(String);

  async function register(event: any) {
    event.preventDefault();
    try {
      let response: Response = await loginAPI.post(`/users`, {
        name: username,
        email: email,
        password: password,
      });
      if(response){
        localStorage.setItem("user", JSON.stringify(response.data));
        history.push("/home");
      }
    } catch (err) {
      setError('Verifique se os dados estão preenchidos corretamente!')
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
