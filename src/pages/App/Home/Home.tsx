import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import { ReactComponent as Delete } from '../../../assets/img/delete.svg';
import { ReactComponent as Edit } from '../../../assets/img/edit.svg';
import { ReactComponent as Eye } from '../../../assets/img/eye.svg';
import { ReactComponent as Plus } from '../../../assets/img/plus.svg';
import { Button, Layout, Modal, Shimmer } from '../../../components';
import { useToast } from '../../../hooks/toast';
import useRedirect from '../../../hooks/useRedirect';
import {
  Hero,
  Container,
  Wrapper,
  Grids,
  Grid,
  ButtonAdd,
  Card,
} from './styles';

interface DataProps {
  histories: string;
  name: string;
  type: string;
}

export const Home: React.FC = () => {
  const [data, setData] = useState<DataProps | any>([]);
  const [idToDelete, setIdToDelete] = useState<number | any>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const redirect = useRedirect();
  const endpoint = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
  const { addToast } = useToast();

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(endpoint);

    setData(data);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (id: string) => {
    setIdToDelete(id);
    setShowDeleteModal(true);
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  async function deleteDragon(id: number) {
    await axios.delete(`${endpoint}/${id}`);
    addToast({
      title: 'Dragão deletado com sucesso!',
      description: 'Não será mais possível visualizar o dragão',
      type: 'success',
      time: 6000,
    });
    setShowDeleteModal(false);
    fetchData();
  }

  const newDragon = () => {
    redirect('/dragon-add');
  };

  const editDragon = (id: number) => {
    redirect(`/dragon-edit/${id}`);
  };

  const viewDragon = (id: number) => {
    redirect(`/dragon-detail/${id}`);
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        titulo={'Excluir Dragão'}
        mensagem={'Confirma a exclusão do dragão?'}
        onConfirm={() => deleteDragon(idToDelete)}
        onCancel={() => closeModal()}
        actionButtons
      />
      <Layout titlePage={'Home'}>
        <Hero>
          <Wrapper>
            <Grids>
              {data.length <= 0 ? (
                <>
                  <Grid>
                    <div>
                      <Shimmer width={'50px'} height={'30px'} />
                    </div>
                    <div>
                      <Shimmer width={'150px'} height={'30px'} />
                    </div>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid>
                    <h1>{data.length}</h1>
                    <span>Dragões cadastrados</span>
                  </Grid>
                </>
              )}
            </Grids>
            <ButtonAdd onClick={newDragon}>
              <span>
                <Plus />
              </span>
              Adicionar novo dragão
            </ButtonAdd>
          </Wrapper>
        </Hero>
        <Container>
          {data.length <= 0 ? (
            <>
              <Card>
                <div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
                <div>
                  <div>
                    <Shimmer width={'250px'} height={'30px'} />
                  </div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
              </Card>
              <Card>
                <div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
                <div>
                  <div>
                    <Shimmer width={'250px'} height={'30px'} />
                  </div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
              </Card>
              <Card>
                <div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
                <div>
                  <div>
                    <Shimmer width={'250px'} height={'30px'} />
                  </div>
                  <div>
                    <Shimmer width={'150px'} height={'30px'} />
                  </div>
                </div>
              </Card>
            </>
          ) : (
            <>
              {data.map((dragon: any, index: number) => (
                <Card key={index}>
                  <h1>{dragon.name}</h1>
                  <div>
                    <div>
                      <h1>Tipo</h1>
                      <p>{dragon.type}</p>
                    </div>
                    <div>
                      <Button
                        variant={'solid-icon'}
                        color={'#121214'}
                        tooltipText={'Visualizar Informações'}
                        onClick={() => viewDragon(dragon.id)}
                      >
                        <Eye color={'#04d361'} />
                      </Button>
                      <Button
                        variant={'solid-icon'}
                        color={'#121214'}
                        tooltipText={'Editar'}
                        onClick={() => editDragon(dragon.id)}
                      >
                        <Edit color={'rgba(251, 169, 61, 1)'} />
                      </Button>
                      <Button
                        variant={'solid-icon'}
                        color={'#121214'}
                        tooltipText={'Deletar'}
                        onClick={() =>
                          setTimeout(() => {
                            openModal(dragon.id);
                          }, 500)
                        }
                      >
                        <Delete color={'#ce4a4a'} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};
