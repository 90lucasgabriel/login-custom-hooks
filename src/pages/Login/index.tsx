import React, { useCallback, useState, useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content } from './styles';
import AuthContext from '../../context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const { name } = useContext(AuthContext);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log('AuthContext: name', name);

      if (username === 'admin' && password === 'admin') {
        console.log('login true');
        return true;
      }

      console.log('login false');
      return false;
    },
    [username, password],
  );

  return (
    <Container>
      <Content>
        <form>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
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

        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
    </Container>
  );
};

export default Login;
