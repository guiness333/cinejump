import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import {
  FormStyle,
  FiMailS,
  FiLockS,
  InputFormStyle,
  ButtonStyle,
} from "./styles";
import { Loading } from "../../Components";
import { useAuth } from "../../domains/Auth/Hooks";
import translate, { emptyEmail, emptyPassword } from "../../utils";
import { Error } from "../Error";
import Spinner from "../../assets/Spinner-0.4s-331px.svg";

export const LoginForm: React.FC = () => {
  let history = useHistory();
  const [password, setPassword] = useState(String);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(String);
  const [error, setError] = useState(String);
  const { loginAuth } = useAuth();

  const handleClick = useCallback(
    async (event: any) => {
      event.preventDefault();
      setLoading(true);
      if (!email) {
        setError(translate(emptyEmail));
      } else if (!password) {
        setError(translate(emptyPassword));
      } else {
        try {
          await loginAuth({ email: email, password: password });

          history.push("/home");
        } catch (err) {
          if(err.response)
            setError(translate(err.response.data.message));
          else{
            setError(translate(''));
          }
        }
      }
      setLoading(false);
    },
    [loginAuth, email, password, history]
  );
  return (
    <FormStyle onSubmit={handleClick}>
      <Error text={error} />
      <FiMailS />
      <InputFormStyle
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
        type="text"
       />
      <FiLockS />
      <InputFormStyle
        value={password}
        onChange={(event) => setPassword(event.target.value)}
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
          ENTRAR
        </ButtonStyle>
      ) : (
        <Loading src={Spinner} alt="Carregando" />
      )}
    </FormStyle>
  );
};
