import loginAPI from "../../../services/loginAPI";
import Response from './ResponseLogin';
export const LoginAuth = async (
  email: String,
  password: String
): Promise<Response> => {
  let response = loginAPI.post(`/auth`, {
    email: email,
    password: password,
  });
  return (await response).data;
};
