import React, { useCallback, useRef, useState } from 'react';
import Loader from 'react-loader-spinner';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import getValidationErrors from '../../utils/getValidationsErrors';

import { Container, Content, Background } from './styles';

interface ISignInFormData {
  name: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const { name, password } = data;

        await signIn({
          name,
          password,
        });

        setLoading(false);
      } catch (err) {
        setLoading(false);

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Karamelo" />

        <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <h1>Faça seu logon</h1>

          <Input
            containerStyle={{ background: 'rgba(0, 0, 0, 0.1)' }}
            borderColor="primary"
            style={{ color: '#f4ede8' }}
            name="name"
            icon={FiUser}
            placeholder="Usuário"
            autoComplete="off"
            mask=""
          />

          <Input
            containerStyle={{ marginTop: 8, background: 'rgba(0, 0, 0, 0.1)' }}
            borderColor="primary"
            style={{ color: '#f4ede8' }}
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            autoComplete="off"
            mask=""
          />

          <Button type="submit">{loading ? <Loading /> : 'Entrar'}</Button>

          {/* <a href="forgot">Esqueci minha senha</a> */}
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
