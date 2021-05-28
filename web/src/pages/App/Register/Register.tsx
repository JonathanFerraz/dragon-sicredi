import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ReactComponent as Back } from '../../../assets/icons/arrow_left.svg';
import { ReactComponent as Logo } from '../../../assets/logo/dragon_logo.svg';
import { Button, Input } from '../../../components';
import { useToast } from '../../../hooks/toast';
import useRedirect from '../../../hooks/useRedirect';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Container, Grids, Grid, FormWrapper } from './styles';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [loginRequestLoading, setLoginRequestLoading] = useState(false);
  const formRef = useRef<FormHandles | null>(null);
  const redirect = useRedirect();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterProps) => {
      try {
        if (loginRequestLoading) {
          return;
        }
        setLoginRequestLoading(true);
        const { name, email, password } = data;

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(2, 'Curto demais')
            .max(30, 'Longo demais')
            .required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um Email valido'),
          password: Yup.string()
            .oneOf(
              [Yup.ref('passwordConfirmation'), null],
              'As senhas não são iguais',
            )
            .min(6, 'No mínimo 6 dígitos'),
          passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não são iguais')
            .min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          name,
          email,
          password,
        });

        setLoginRequestLoading(false);

        redirect('/completed-register');
      } catch (error) {
        setLoginRequestLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        const { message: errorMessage } = error.response.data;

        if (errorMessage === 'Email already taken') {
          addToast({
            title: 'E-mail já em uso',
            description:
              'O E-mail que você inseriu já está em uso, tente novamente com um outro email',
            type: 'error',
          });
          return;
        } else {
          addToast({
            title: 'Algo deu errado',
            description:
              'Algo deu errado durante a criação de sua conta, tente novamente',
            type: 'error',
          });
        }
      }
    },
    [addToast, loginRequestLoading],
  );

  return (
    <Container>
      <Grids>
        <Grid>
          <FormWrapper ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input
                name="name"
                label="Nome"
                type="text"
                data-testid={'name-test'}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                data-testid={'email-test'}
              />
              <Input
                name="password"
                label="Senha"
                type="password"
                data-testid={'password-test'}
              />
              <Input
                name="passwordConfirmation"
                label="Confirmar senha"
                type="password"
              />
              <Button
                type={'submit'}
                variant={'solid'}
                style={{ width: '100%' }}
              >
                Cadastrar
              </Button>
            </div>
          </FormWrapper>
        </Grid>
        <Grid>
          <div>
            <div>
              <Logo />
            </div>
            <h1>Mais de 3 mil pessoas já estão cadastradas</h1>
            <p>
              Junte-se a milhares de pessoas e entenda mais sobre os mais
              diversos dragões.
            </p>
            <Link to={'/login'}>
              <span>
                <Back width={'24px'} />
              </span>
              Voltar para login
            </Link>
          </div>
        </Grid>
      </Grids>
    </Container>
  );
};
