import React, { useCallback, useState, useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';
import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('admin');

  const { login } = useContext(AuthContext);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const response = login({ email, password });
      console.log('response', response);
    },
    [login, email, password],
  );

  return (
    <Container>
      <Content>
        <form>
          <h1>Login</h1>

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" onClick={e => handleSubmit(e)}>
            Entrar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
