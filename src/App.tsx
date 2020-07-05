import React from 'react';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Login />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
