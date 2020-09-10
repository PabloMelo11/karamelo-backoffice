import React from 'react';

import General from '../../components/General';

import { Container } from './styles';

const Users: React.FC = () => {
  return (
    <General>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Teste 1</th>
              <th>Teste 2</th>
              <th>Teste 3</th>
              <th>Teste 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
            <tr>
              <td>HI 1</td>
              <td>H2 2</td>
              <td>H3 3</td>
              <td>HI 4</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </General>
  );
};

export default Users;
