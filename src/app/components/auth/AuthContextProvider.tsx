import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, signupUser, parseJwt } from "../../libs/auth";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
interface AccountTypes {
  email: string;
  password: string;
}

interface AuthContextTypes {
  user: any | null;
  login: (user: AccountTypes) => void;
  logout: () => void;
  signup: (user: AccountTypes) => void;
}

const AuthContext = createContext<AuthContextTypes>({
  user: null,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
});

export function AuthContextProvider({ children }: LayoutProps) {
  const [user, setUser] = useState<any | null>(null);
  console.log(user);
  const login = async (user: AccountTypes) => {
    console.log(user);
    const res = await loginUser(user);
    localStorage.setItem("token", res.token);
    setUser(res.user);
  };
  const logout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  const signup = async (user: AccountTypes) => {
    const res = await signupUser(user);
    localStorage.setItem("token", res.token);
    setUser(res.user);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = parseJwt(token);

      setUser(user.user);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
