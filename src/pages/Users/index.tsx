import React, { useEffect, useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { useUsers } from '../../hooks/users';

import General from '../../components/General';
import ModalCreateUser from './ModalCreateUser';

import { ModalHandles } from './ModalCreateUser';

import {
  Container,
  ContentTable,
  UserAvatar,
  Footer,
  ButtonNext,
  FirstPage,
  SecundaryPage,
  ButtonPrevious,
} from './styles';

const Users: React.FC = () => {
  const history = useHistory();
  const modalRef = useRef<ModalHandles>(null);

  const {
    users,
    page,
    lastPage,
    handleGetAllUsers,
    handleNextPage,
    handlePreviousPage,
    handleChangePageByNumber,
  } = useUsers();

  const formattedStatus = useCallback((status: string): string => {
    if (status === 'active') {
      return 'Ativo';
    }
    return 'Inativo';
  }, []);

  const handleDetailsUser = useCallback(
    (userID: number) => {
      history.push(`/general/${userID}/users`);
    },
    [history],
  );

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  useEffect(() => {
    handleGetAllUsers();
  }, [handleGetAllUsers]);

  return (
    <General triggerDone={handleOpenModal}>
      <Container>
        <ContentTable>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.length > 0 &&
                users.map(user => (
                  <tr
                    key={user.id}
                    title="Clique para ver os detalhes."
                    onClick={() => handleDetailsUser(user.id)}
                  >
                    <td>{user.id}</td>
                    <td>
                      <UserAvatar src={user.avatar_url} alt="avatar" />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{formattedStatus(user.status)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </ContentTable>

        <Footer>
          <ButtonPrevious
            title="Página anterior"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            <IoIosArrowBack size={32} />
          </ButtonPrevious>

          <FirstPage
            title="Página 1"
            background={page !== 1}
            onClick={() => handleChangePageByNumber(1)}
          >
            1
          </FirstPage>

          <SecundaryPage
            title="Página 2"
            background={page !== 2}
            onClick={() => handleChangePageByNumber(2)}
          >
            2
          </SecundaryPage>

          <ButtonNext
            title="Próxima página"
            onClick={handleNextPage}
            disabled={page === lastPage}
          >
            <IoIosArrowForward size={32} />
          </ButtonNext>
        </Footer>
      </Container>
      <ModalCreateUser ref={modalRef} />
    </General>
  );
};

export default Users;
