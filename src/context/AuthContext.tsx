import React, { createContext, useCallback } from 'react';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  name?: string;
  avatarUrl?: string;
}

interface AuthContextData {
  name: string;
  login(loginCredentials: LoginCredentials): LoginResponse;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const login = useCallback(({ email, password }): LoginResponse => {
    let response: LoginResponse;

    if (email === 'admin@example.com' && password === 'admin') {
      response = {
        success: true,
        name: 'User Full Name',
        avatarUrl:
          'https://gravatar.com/avatar/f5938e040ad9f0b8f2748b439e13495a',
      };

      return response;
    }

    response = { success: false };

    return response;
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'lucas', login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
