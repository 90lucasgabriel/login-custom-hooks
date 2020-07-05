import React, { createContext, useCallback } from 'react';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  login(loginCredentials: LoginCredentials): boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(({ email, password }): boolean => {
    if (email === 'admin@example.com' && password === 'admin') {
      return true;
    }

    return false;
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'lucas', login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
