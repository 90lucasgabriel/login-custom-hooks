import React, { createContext, useCallback, useState, useContext } from 'react';

interface AuthState {
  token: string;
  user: object;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  login(loginCredentials: LoginCredentials): void;
  logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@LoginHook:token');
    const user = localStorage.getItem('@LoginHook:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(({ email, password }): void => {
    let response = {} as AuthState;

    if (email === 'admin@example.com' && password === 'admin') {
      response = {
        token: 'user-token',
        user: {
          id: 'user-id',
          name: 'User Full Name',
          email: 'admin@example.com',
          avatarUrl:
            'https://gravatar.com/avatar/f5938e040ad9f0b8f2748b439e13495a',
        },
      };
    }

    const { token, user } = response;

    localStorage.setItem('@LoginHook:token', token);
    localStorage.setItem('@LoginHook:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@LoginHook:token');
    localStorage.removeItem('@LoginHook:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
