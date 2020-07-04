import React from 'react';

import GlobalStyle from './styles/global';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
