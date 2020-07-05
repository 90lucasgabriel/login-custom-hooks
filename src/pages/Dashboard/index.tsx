import React, { useCallback, useEffect } from 'react';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log('user', user);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>

        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </Content>
    </Container>
  );
};

export default Login;
