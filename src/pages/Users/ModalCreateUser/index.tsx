import React, { useCallback, useState, useRef } from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { RiCloseCircleLine } from 'react-icons/ri';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';

import InputForm from '../../../components/InputForm';
import ButtonForm from '../../../components/ButtonForm';

import getValidationErrors from '../../../utils/getValidationsErrors';

import { Container, Header, Content, Row } from './styles';

interface ModalCreateUserProps {
  isVisible: boolean;
  triggerClose(): void;
}

interface IUserFormData {
  name: string;
  email: string;
  password: string;
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000050',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    border: '0',
    transform: 'translate(-50%, -50%)',
    width: '600px',
  },
};

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({
  isVisible = false,
  triggerClose = () => {},
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handleSubmit = useCallback(
    async (data: IUserFormData) => {
      try {
        setLoadingSubmit(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Usuário obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Mínimo 6 caracteres'),
          // password_confirmation: Yup.string()
          //   .when('password', {
          //     is: value => !!value.length,
          //     then: Yup.string()
          //       .required('Campo obrigatório')
          //       .min(6, 'Mínimo 6 caracteres'),
          //     otherwise: Yup.string(),
          //   })
          //   .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        const formData = {
          name,
          email,
          password,
          status: 'active',
        };

        await api.post('users', formData);

        addToast({
          type: 'success',
          title: 'Usuário cadastrado',
        });

        setLoadingSubmit(false);
        triggerClose();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          setLoadingSubmit(false);

          return;
        }

        addToast({
          title: 'Ops...',
          type: 'error',
          description: `${err.response.data.error}`,
        });

        setLoadingSubmit(false);
      }
    },
    [addToast, triggerClose],
  );

  return (
    <Container>
      <Modal
        isOpen={isVisible}
        style={customStyles}
        closeTimeoutMS={500}
        shouldCloseOnEsc
      >
        <Header>
          <span>Novo usuário</span>
          <button type="button" onClick={() => triggerClose()}>
            <RiCloseCircleLine size={28} />
          </button>
        </Header>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <Row>
              <InputForm
                name="name"
                placeholder="Usuário"
                mask=""
                color="red"
                autoComplete="off"
              />

              <InputForm
                name="email"
                placeholder="E-mail"
                mask=""
                color="red"
                autoComplete="off"
              />
            </Row>

            <Row>
              <InputForm
                type="password"
                name="password"
                placeholder="Senha"
                mask=""
                color="red"
                autoComplete="off"
              />
              <InputForm
                type="password"
                name="password_confirmation"
                placeholder="Confirmação de senha"
                mask=""
                color="red"
                autoComplete="off"
              />
            </Row>

            <div>
              <ButtonForm type="submit" background="red">
                Salvar
              </ButtonForm>
            </div>
          </Form>
        </Content>
      </Modal>
    </Container>
  );
};

export default ModalCreateUser;
