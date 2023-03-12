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
  login: (user: AccountTypes) => Promise<void>;
  logout: () => void;
  signup: (user: AccountTypes) => Promise<void>;
}

const AuthContext = createContext<AuthContextTypes>({
  user: null,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
});

export function AuthContextProvider({ children }: LayoutProps) {
  const [user, setUser] = useState<any | null>(null);
  async function login(user: AccountTypes) {
    const res = await loginUser(user);
    localStorage.setItem("token", res.token);
    setUser(res.user);
  }
  async function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  async function signup(user: AccountTypes) {
    const res = await signupUser(user);
    localStorage.setItem("token", res.token);
    setUser(res.createdUser);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
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
