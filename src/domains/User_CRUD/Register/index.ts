import loginAPI from "../../../services/loginAPI";
import Response from "../Response";
export const Register = async (
  username: String,
  email: String,
  password: String
): Promise<Response> => {
  let response = loginAPI.post(`/users`, {
    name: username,
    email: email,
    password: password,
  });
  return response;
};
