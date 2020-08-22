import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiCamera } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';
import Loading from '../../components/Loading';
import {
  LoadingProfile,
  LoadingProfileContent,
} from '../../components/Shimmer/LoadingProfile';

import getValidationErrors from '../../utils/getValidationsErrors';

import {
  Container,
  ContentGrid,
  ContentInformations,
  FormInformations,
  Header,
  ContentForm,
  Row,
  Divider,
  ContentMain,
  MainInformations,
  AvatarInput,
  Description,
} from './styles';

interface IProfileFormData {
  name: string;
  email: string;
  city?: string;
  cpf?: string;
  cep?: string;
  date_of_birth?: string;
  neighborhood?: string;
  number?: string;
  phone?: string;
  state?: string;
  street?: string;
  whatsapp?: string;
  password?: string;
  password_confirmation?: string;
}

interface IUserProps {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
  city?: string;
  cpf?: string;
  cep?: string;
  date_of_birth?: string;
  neighborhood?: string;
  number?: string;
  phone?: string;
  state?: string;
  street?: string;
  whatsapp?: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUserProps>({} as IUserProps);

  const { updateUser } = useAuth();
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

        const {
          name,
          email,
          cpf,
          date_of_birth,
          phone,
          whatsapp,
          cep,
          state,
          city,
          neighborhood,
          street,
          number,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          cpf,
          date_of_birth,
          phone,
          whatsapp,
          cep,
          state,
          city,
          neighborhood,
          street,
          number,
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

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/me/avatar', data).then(response => {
          updateUser(response.data);
          setUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  useEffect(() => {
    try {
      setLoading(true);
      api.get('/me').then(response => {
        setUser(response.data[0]);

        setLoading(false);
      });
    } catch {
      addToast({
        type: 'error',
        title: 'Ops...',
        description: 'Houve um erro ao  buscar seu perfil, tente novamente.',
      });
    }
  }, [addToast]);

  return (
    <Container>
      <ContentGrid>
        {loading ? (
          <LoadingProfileContent />
        ) : (
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
                    cpf: user.cpf,
                    date_of_birth: user.date_of_birth,
                    phone: user.phone,
                    whatsapp: user.whatsapp,
                    cep: user.cep,
                    state: user.state,
                    city: user.city,
                    neighborhood: user.neighborhood,
                    street: user.street,
                    number: user.number,
                  }}
                >
                  <Row>
                    <InputForm name="name" placeholder="Usuário" />
                    <InputForm name="email" placeholder="E-mail" />
                    <InputForm name="cpf" placeholder="CPF" />
                  </Row>

                  <Row>
                    <InputForm name="date_of_birth" placeholder="Nascimento" />
                    <InputForm name="phone" placeholder="Telefone" />
                    <InputForm name="whatsapp" placeholder="Whatsapp" />
                  </Row>

                  <Row style={{ marginTop: 30 }}>
                    <InputForm name="cep" placeholder="CEP" />
                    <InputForm name="state" placeholder="Estado" />
                    <InputForm name="city" placeholder="Cidade" />
                  </Row>

                  <Row>
                    <InputForm name="neighborhood" placeholder="Bairro" />
                    <InputForm name="street" placeholder="Logradouro" />
                    <InputForm name="number" placeholder="Número" />
                  </Row>

                  <Row style={{ marginTop: 30 }}>
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
        )}

        {loading ? (
          <LoadingProfile />
        ) : (
          <ContentMain>
            <ContentInformations>
              <MainInformations>
                <AvatarInput>
                  <img src={user.avatar_url} alt={user.name} />
                  <label htmlFor="avatar">
                    <FiCamera />
                    <input
                      type="file"
                      id="avatar"
                      onChange={handleAvatarChange}
                    />
                  </label>
                </AvatarInput>

                <Description>
                  <h6>{user.name}</h6>
                </Description>
              </MainInformations>
            </ContentInformations>
          </ContentMain>
        )}
      </ContentGrid>
    </Container>
  );
};

export default Profile;
