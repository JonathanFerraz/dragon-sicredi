import React, { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import axios from 'axios';
import * as Yup from 'yup';

import { Button, Input, Layout } from '../../components';
import { useToast } from '../../hooks/toast';
import useRedirect from '../../hooks/useRedirect';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, FormWrapper } from '../EditDragon/styles';

interface NewDragonProps {
  name: string;
  type: string;
  histories: string;
}

export const NewDragon: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addToast } = useToast();
  const redirect = useRedirect();
  const formRef = useRef<FormHandles | null>(null);

  const handleSubmit = async (dragon: NewDragonProps) => {
    setIsLoading(true);

    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(40, 'No máximo 40 caracteres')
          .matches(
            /^(?!\s*$)[-a-zA-Z0-9_:,.' ']/,
            'Um ou mais caracteres digitados não são permitidos!',
          )
          .required('Este campo é obrigatório!'),
        type: Yup.string()
          .max(40, 'No máximo 40 caracteres')
          .matches(
            /^(?!\s*$)[-a-zA-Z0-9_:,.' ']/,
            'Um ou mais caracteres digitados não são permitidos!',
          )
          .required('Este campo é obrigatório!'),
        histories: Yup.string()
          .max(200, 'No máximo 40 caracteres')
          .matches(
            /^(?!\s*$)[-a-zA-Z0-9_:,.' ']/,
            'Um ou mais caracteres digitados não são permitidos!',
          )
          .required('Este campo é obrigatório!'),
      });
      await schema.validate(dragon, {
        abortEarly: false,
      });

      const dataForm: NewDragonProps = {
        name: dragon.name,
        type: dragon.type,
        histories: dragon.histories,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_DRAGON_API}`,
        dataForm,
      );

      setIsLoading(false);

      if (response.status === 200 || response.status === 201) {
        setIsLoading(false);
        addToast({
          type: 'success',
          title: 'Dragão cadastrado com sucesso!',
          description:
            'O Dragão foi cadastrado. Você pode verificar o novo dragão na seção de Listagem de Dragões.',
        });
        redirect('/home');
      } else {
        setIsLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao cadastrar',
          description: `Houve um erro ao cadastrar o dragão em nosso sistema!`,
          time: 6000,
        });
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = getValidationErrors(err);
        formRef.current?.setErrors(errorMessages);
        setIsLoading(false);
        return;
      }

      console.error(err);
    }
  };

  return (
    <Layout titlePage={'Adicionar'} subHeader={true}>
      <Container>
        <h1>
          Área destinada para que você possa cadastrar novos dragões e
          compartilha-los com outras pessoas.
        </h1>
        <FormWrapper
          className="form-container"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input name="name" label="Nome" type="text" />
          <Input name="type" label="Tipo" type="text" />
          <Input name="histories" label="Descrição" type="text" />
          <div>
            <Button
              variant="solid"
              style={{ marginTop: '1rem' }}
              type="submit"
              loading={isLoading}
              loadingMessage={'Cadastrando Dragão...'}
              onClick={() => handleSubmit}
            >
              Adicionar
            </Button>
            <Button
              variant="outline"
              style={{ marginTop: '1rem' }}
              onClick={() => redirect('/home')}
            >
              Cancelar
            </Button>
          </div>
        </FormWrapper>
      </Container>
    </Layout>
  );
};
