import React, { createContext, useEffect, useRef } from "react";
import { useUser } from "../stores/user";

interface IContext {
  isAuth: boolean;
}

export const AuthContext = createContext<IContext>({ isAuth: false });

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { init, user } = useUser();
  const ref = useRef(false);

  useEffect(() => {
    init();
    ref.current = true
  }, [init]);

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!user && ref.current
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}