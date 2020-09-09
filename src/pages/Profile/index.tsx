import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import cepApi from 'cep-promise';
import * as Yup from 'yup';
import { FiCamera } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';

import MainModal from '../../components/MainModal';
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
  const cepRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [cityApi, setCityApi] = useState('');
  const [stateApi, setStateApi] = useState('');
  const [neighborhoodApi, setNeighborhoodApi] = useState('');
  const [streetApi, setStreetApi] = useState('');

  const { updateUser } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: IProfileFormData) => {
      try {
        setLoadingSubmit(true);
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
        setUser(response.data);

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

        setLoadingSubmit(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          setLoadingSubmit(false);
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

        setLoadingSubmit(false);
      }
    },
    [addToast, updateUser],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        if (e.target.files) {
          const data = new FormData();

          data.append('avatar', e.target.files[0]);

          const response = await api.patch('me/avatar', data);

          updateUser(response.data);
          setUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar atualizado!',
          });
        }
      } catch {
        addToast({
          type: 'error',
          title: 'Erro ao atualizar avatar!',
        });
      }
    },
    [addToast, updateUser],
  );

  const handleSearchCEP = useCallback(
    (event: string): void => {
      const cep = event.replace('-', '').replace('_', '').trim();

      if (cep.length === 8) {
        cepApi(cep)
          .then(response => {
            setCityApi(response.city);
            setStateApi(response.state);
            setNeighborhoodApi(response.neighborhood);
            setStreetApi(response.street);
          })
          .catch(() => {
            addToast({
              type: 'error',
              title: 'Ops...',
              description: 'CEP inválido, tente novamente.',
            });
          });
      }
    },
    [addToast],
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
        description: 'Houve um erro ao buscar seu perfil, tente novamente.',
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
            <MainModal
              title="Edite seu perfil"
              subtitle="Complete as informações do perfil"
            >
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
                    <InputForm name="name" placeholder="Usuário" mask="" />
                    <InputForm name="email" placeholder="E-mail" mask="" />
                    <InputForm
                      name="cpf"
                      placeholder="CPF"
                      mask="999.999.999-99"
                    />
                  </Row>

                  <Row>
                    <InputForm
                      name="date_of_birth"
                      placeholder="Nascimento"
                      mask="99/99/9999"
                    />
                    <InputForm
                      name="phone"
                      placeholder="Telefone"
                      mask="(99) 99999-9999"
                    />
                    <InputForm
                      name="whatsapp"
                      placeholder="Whatsapp"
                      mask="(99) 99999-9999"
                    />
                  </Row>

                  <Row style={{ marginTop: 30 }}>
                    <InputForm
                      name="cep"
                      placeholder="CEP"
                      mask="99999-999"
                      onChange={event => handleSearchCEP(event.target.value)}
                    />
                    <InputForm
                      name="state"
                      placeholder="UF"
                      mask=""
                      value={stateApi || user.state}
                    />
                    <InputForm
                      name="city"
                      placeholder="Cidade"
                      mask=""
                      value={cityApi || user.city}
                    />
                  </Row>

                  <Row>
                    <InputForm
                      name="neighborhood"
                      placeholder="Bairro"
                      mask=""
                      value={neighborhoodApi || user.neighborhood}
                    />
                    <InputForm
                      name="street"
                      placeholder="Logradouro"
                      mask=""
                      value={streetApi || user.street}
                    />
                    <InputForm name="number" placeholder="Número" mask="" />
                  </Row>

                  <Row style={{ marginTop: 30 }}>
                    <InputForm
                      type="password"
                      name="password"
                      placeholder="Senha"
                      mask=""
                    />
                    <InputForm
                      type="password"
                      name="password_confirmation"
                      placeholder="Confirmação de senha"
                      mask=""
                    />
                  </Row>

                  <ButtonForm type="submit">
                    {loadingSubmit ? <Loading /> : 'Atualizar'}
                  </ButtonForm>
                </Form>
              </ContentForm>
            </MainModal>
          </ContentInformations>
        )}

        {loading ? (
          <LoadingProfile />
        ) : (
          <ContentMain>
            <ContentInformations>
              <MainModal hasImage>
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
              </MainModal>
            </ContentInformations>
          </ContentMain>
        )}
      </ContentGrid>
    </Container>
  );
};

export default Profile;
