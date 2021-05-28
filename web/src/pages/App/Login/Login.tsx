import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ReactComponent as Logo } from '../../../assets/logo/dragon_logo.svg';
import { Button, Input } from '../../../components';
import { useToast } from '../../../hooks/toast';
import { useAuth } from '../../../hooks/useAuth';
import getValidationErrors from '../../../utils/getValidationErrors';
import { Container, Grids, Grid, FormWrapper, Options } from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const [loginRequestLoading, setLoginRequestLoading] = useState(false);
  const formRef = useRef<FormHandles | null>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { signIn, user } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, []);

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
          <div>
            <div>
              <Logo />
            </div>
            <h1>Faça seu login na plataforma</h1>
          </div>
        </Grid>
        <Grid>
          <FormWrapper ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input name="email" label="E-mail" type="email" />
              <Input name="password" label="Senha" type="password" />
              <Button
                type={'submit'}
                variant={'solid'}
                style={{ width: '100%' }}
              >
                ENTRAR
              </Button>
              <Options>
                <span>
                  Não tem uma conta?<Link to="/register">Registre-se</Link>
                </span>
              </Options>
            </div>
          </FormWrapper>
        </Grid>
      </Grids>
    </Container>
  );
};
