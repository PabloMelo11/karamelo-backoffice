import React, {
  useCallback,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Modal from 'react-modal';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { RiCloseCircleLine } from 'react-icons/ri';

import api from '../../../services/api';

import { useToast } from '../../../hooks/toast';
import { useUsers } from '../../../hooks/users';

import Input from '../../../components/Input';
import ButtonForm from '../../../components/ButtonForm';
import Loading from '../../../components/Loading';
import styles from '../../../styles/modal/styles';

import getValidationErrors from '../../../utils/getValidationsErrors';

import { Container, Header, Content, Row } from './styles';

interface IUserFormData {
  name: string;
  email: string;
  password: string;
}

export interface ModalHandles {
  openModal(): void;
}

const ModalCreateUser: React.ForwardRefRenderFunction<ModalHandles> = (
  props,
  ref,
) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { handleAddNewUser } = useUsers();

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

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
          password_confirmation: Yup.string()
            .when('password', {
              is: value => !!value.length,
              then: Yup.string()
                .required('Campo obrigatório')
                .min(6, 'Mínimo 6 caracteres'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
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

        const response = await api.post('users', formData);

        handleAddNewUser(response.data);

        addToast({
          type: 'success',
          title: 'Usuário cadastrado',
        });

        setLoadingSubmit(false);
        closeModal();
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
    [addToast, closeModal, handleAddNewUser],
  );

  return (
    <Container>
      <Modal
        isOpen={open}
        closeTimeoutMS={500}
        shouldCloseOnEsc={!false}
        shouldCloseOnOverlayClick={!false}
        ariaHideApp={false}
        style={styles}
      >
        <Header>
          <h1>Novo usuário</h1>
          <button type="button" onClick={closeModal}>
            <RiCloseCircleLine size={32} />
          </button>
        </Header>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <Row>
              <div className="container">
                <span>Usuário</span>
                <Input
                  name="name"
                  placeholder="Usuário"
                  mask=""
                  borderColor="blue"
                  autoComplete="off"
                />
              </div>

              <div className="container">
                <span>E-mail</span>
                <Input
                  name="email"
                  placeholder="E-mail"
                  mask=""
                  borderColor="blue"
                  autoComplete="off"
                />
              </div>

              <div className="container">
                <span>Senha</span>
                <Input
                  type="password"
                  name="password"
                  placeholder="Senha"
                  mask=""
                  borderColor="blue"
                  autoComplete="off"
                />
              </div>

              <div className="container">
                <span>Confirmação de senha</span>
                <Input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirmação de senha"
                  mask=""
                  borderColor="blue"
                  autoComplete="off"
                />
              </div>
            </Row>

            <div className="button-save">
              <ButtonForm type="submit" background="blue">
                {loadingSubmit ? <Loading /> : 'Salvar'}
              </ButtonForm>
            </div>
          </Form>
        </Content>
      </Modal>
    </Container>
  );
};

export default forwardRef(ModalCreateUser);
