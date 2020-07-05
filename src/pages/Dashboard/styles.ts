import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

    h1 {
      margin-bottom: 24px;
    }
    button {
      background: #0079b2;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #f2f2f2;
      font-weight: 500;
      margin-top: 16px;
      transition: background-colors 0.2s;
      &:hover {
        background: ${shade(0.2, '#0079b2')};
      }
    }
  }
`;
