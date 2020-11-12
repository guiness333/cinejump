import LoginCredentials from './LoginCredentials';

export default interface ContextData {
  user: object;
  loginAuth(loginCredentials: LoginCredentials): Promise<void>;
  logout(): void;
}