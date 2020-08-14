import React, { useCallback, useRef, useContext } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationsErrors';

import { Container, Content, Background } from './styles';

interface ISignInFormData {
  name: string;
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, user } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Usuário obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        const { name, password } = data;

        signIn({
          name,
          password,
        });
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Karamelo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="name" icon={FiMail} placeholder="Usuário" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
