import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';

import {
  Container,
  ContentGrid,
  ContentInformations,
  FormInformations,
  Header,
  ContentForm,
  Row,
  ContentMain,
} from './styles';

interface IProfileFormData {
  name: string;
  email: string;
  password?: string;
  password_confirmation?: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, updateUser } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IProfileFormData) => {
      try {
        const { name, email, password, password_confirmation } = data;

        const formData = {
          name,
          email,
          ...(password
            ? {
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('me', formData);

        updateUser(response.data);

        if (formRef.current !== null) {
          formRef.current.clearField('password');
          formRef.current.clearField('password_confirmation');
        }

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informação do perfil foram atualizados com sucesso.',
        });
      } catch (err) {
        addToast({
          title: 'Ops...',
          type: 'error',
          description:
            'Ocorreu um erro ao tentar atualizar seu perfil, tente novamente.',
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <ContentGrid>
        <ContentInformations>
          <FormInformations>
            <Header>
              <h4>Edite seu perfil</h4>
              <p>Complete as informações do perfil</p>
            </Header>

            <ContentForm>
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={{
                  name: user.name,
                  email: user.email,
                }}
              >
                <Row>
                  <InputForm name="name" placeholder="Usuário" />
                  <InputForm name="email" placeholder="E-mail" />
                </Row>

                <Row>
                  <InputForm
                    type="password"
                    name="password"
                    placeholder="Senha"
                  />
                  <InputForm
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmação de senha"
                  />
                </Row>

                <ButtonForm type="submit">Atualizar</ButtonForm>
              </Form>
            </ContentForm>
          </FormInformations>
        </ContentInformations>

        <ContentMain />
      </ContentGrid>
    </Container>
  );
};

export default Profile;
