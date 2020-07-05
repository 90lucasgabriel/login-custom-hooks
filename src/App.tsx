import React from 'react';

import GlobalStyle from './styles/global';
import Login from './pages/Login';
import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'lucas' }}>
        <Login />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};

export default App;
