import React from 'react';

import GlobalStyle from './styles/global';
import Login from './pages/Login';
import { AuthProvider } from './hooks/auth';

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
