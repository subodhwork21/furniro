"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  user: any;
  loginUser: (email: string, password: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loginUser: async () => null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);

  const loginUser = useCallback(async (email: string, password: string) => {
    try {
      const res = await fetch("/api/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      setUser(data.email); // Save the user data in the state
      return { token: data.token, email: data.email };
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
