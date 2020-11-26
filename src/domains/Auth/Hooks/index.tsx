import React, { createContext, useState, useContext, useCallback } from "react";
import ContextData from "../types/Contextdata";
import AuthState from "../types/AuthState";
import api from "../../../services/loginAPI";

export const AuthContext = createContext<ContextData>({} as ContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const loginAuth = useCallback(async ({email, password}): Promise<void> => {
      let response = await api.post(`/auth`, {
        email: email,
        password: password,
      });

      const { token, user } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    },[]);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loginAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): ContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider.');
    }
  
    return context;
}

export { AuthProvider, useAuth };
