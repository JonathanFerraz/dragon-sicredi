import React, { useState, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ReactComponent as Back } from '../../../assets/img/arrow_left.svg';
import { ReactComponent as Logo } from '../../../assets/img/dragon-logo-text.svg';
import { Button, Input } from '../../../components';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/useAuth';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Container, Grids, Grid, FormWrapper, Options } from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const Register: React.FC = () => {
  const [loginRequestLoading, setLoginRequestLoading] = useState(false);
  const formRef = useRef<FormHandles | null>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        if (loginRequestLoading) {
          return;
        }
        setLoginRequestLoading(true);
        const { email, password } = data;

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Insira um email válido.'),
          password: Yup.string()
            .min(2, 'Curto demais')
            .required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email, password });

        setLoginRequestLoading(false);

        addToast({
          title: 'Login realizado com sucesso!',
          type: 'success',
        });

        history.push('/home');
      } catch (error) {
        setLoginRequestLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Algo deu errado',
          description:
            'Algo deu errado durante o login, cheque suas credenciais e tente novamente',
          type: 'error',
        });
      }
    },
    [signIn, history, addToast, loginRequestLoading],
  );

  return (
    <Container>
      <Grids>
        <Grid>
          <FormWrapper ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input name="name" label="Nome" type="text" />
              <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Senha" type="password" />
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
            <h1>Mais de 3 mil de pessoas já estão cadastradas</h1>
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
