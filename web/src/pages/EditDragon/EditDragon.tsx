import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';

import { FormHandles } from '@unform/core';
import axios from 'axios';
import * as Yup from 'yup';

import { Button, Input, Layout } from '../../components';
import { useToast } from '../../hooks/toast';
import useRedirect from '../../hooks/useRedirect';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, FormWrapper } from './styles';

interface EditDragonProps {
  name: string;
  type: string;
  histories: string;
}

interface ParamsProps {
  id: string;
}

export const EditDragon: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<ParamsProps>();
  const { addToast } = useToast();
  const redirect = useRedirect();
  const formRef = useRef<FormHandles | null>(null);

  const [model, setModel] = useState<EditDragonProps>({
    name: '',
    type: '',
    histories: '',
  });

  const handleSubmit = useCallback(
    async (dragon: EditDragonProps) => {
      setIsLoading(true);

      setModel({
        name: dragon.name,
        type: dragon.type,
        histories: dragon.histories,
      });

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

        const response = await axios.put(
          `${process.env.REACT_APP_DRAGON_API}/${id}`,
          model,
        );

        setIsLoading(false);

        if (response.status === 200 || response.status === 201) {
          setIsLoading(false);
          addToast({
            type: 'success',
            title: 'Dragão editado com sucesso!',
            description:
              'O Dragão foi editado. Você pode verificar o novo dragão na seção de Listagem de Dragões.',
          });
          redirect('/home');
        } else {
          setIsLoading(false);
          addToast({
            type: 'error',
            title: 'Erro ao Editar',
            description: `Houve um erro ao editar o dragão em nosso sistema!`,
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
    },
    [model],
  );

  async function findManual(id: string) {
    const response = await axios.get<EditDragonProps>(
      `${process.env.REACT_APP_DRAGON_API}/${id}`,
    );
    setModel({
      name: response.data.name,
      type: response.data.type,
      histories: response.data.histories,
    });
  }

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      findManual(id);
    }
  }, [id]);

  return (
    <Layout titlePage={'Editar'} subHeader={true}>
      <Container>
        <h1>
          Área destinada para que você possa editar os dragões e atualiza-los
          para as outras pessoas.
        </h1>
        <FormWrapper
          className="form-container"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input
            name="name"
            label="Nome"
            type="text"
            value={model.name}
            filled={true}
            autoFocus={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e)}
          />
          <Input
            name="type"
            label="Tipo"
            type="text"
            value={model.type}
            filled={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e)}
          />
          <Input
            name="histories"
            label="Descrição"
            type="text"
            value={model.histories}
            filled={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue(e)}
          />
          <div>
            <Button
              variant="solid"
              style={{ marginTop: '1rem' }}
              type="submit"
              loading={isLoading}
              loadingMessage={'Editando Dragão...'}
            >
              Editar
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
