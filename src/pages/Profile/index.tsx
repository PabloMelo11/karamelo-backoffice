import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';
import Loading from '../../components/Loading';

import getValidationErrors from '../../utils/getValidationsErrors';

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

  const [loading, setLoading] = useState(false);

  const { user, updateUser } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IProfileFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Usuário obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string(),
          password_confirmation: Yup.string()
            .when('password', {
              is: value => !!value.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

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

        setLoading(false);
      } catch (err) {
        console.log(err.response);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          setLoading(false);
          return;
        }

        if (formRef.current !== null) {
          formRef.current.clearField('password');
          formRef.current.clearField('password_confirmation');
        }

        addToast({
          title: 'Ops...',
          type: 'error',
          description: `${err.response.data.error}`,
        });

        setLoading(false);
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

                <ButtonForm type="submit">
                  {loading ? <Loading /> : 'Atualizar'}
                </ButtonForm>
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
