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
import { Loading } from "../../Components";
import Spinner from "../../assets/Spinner-0.4s-331px.svg";
import { Error } from "../Error";
import { Register } from "../../domains/Cinejump";
import { useHistory } from "react-router-dom";

export const SignupForm = () => {
  const [username, setUsername] = useState(String);
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);
  const [error, setError] = useState(String);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  async function register(event: any) {
    event.preventDefault();
    setLoading(true);
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
          history.push("/");
        }
      } catch (err) {
        console.log(err.response)
        if(err.response.data.error === 'Bad Request')
          setError(translate(err.response.data.message));
        else
          setError(translate(err.response.data.error));
      }
    }
    setLoading(false);
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
      {!loading ? (
        <ButtonStyle
          type="submit"
          backgroundColor="#E83F5B"
          textColor="white"
          borderColor="#E83F5B"
          margem={18}
        >
          Cadastrar
        </ButtonStyle>
      ) : (
          <>
          <h4>Você será redirecionado para a tela de login em alguns segundos...</h4>
          <Loading src={Spinner} alt="Carregando" />
          </>
      )}
    </FormStyle>
  );
};
