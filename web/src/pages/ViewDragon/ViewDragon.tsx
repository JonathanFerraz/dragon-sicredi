import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import { Layout, Shimmer } from '../../components';
import { DateFormatter } from '../../utils/dataFormat';
import { Container, CardBackground, List, Capitalize } from './styles';

interface DragonProps {
  name: string;
  type: string;
  histories: string;
  createdAt: Date;
}

interface ParamsProps {
  id: string;
}

export const ViewDragon: React.FC = () => {
  const { id } = useParams<ParamsProps>();
  const [data, setData] = useState<DragonProps | any>();

  const fetchData = async () => {
    const { data } = await axios.get<DragonProps>(
      `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`,
    );
    setData(data);
  };

  const date = new Date(data?.createdAt) as any;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout titlePage={'Detalhes'} subHeader={true}>
      <Container>
        <h1>
          Área destinada para que você possa visualizar o dragão e ver todas as
          suas características.
        </h1>

        <CardBackground>
          {!data ? (
            <>
              <List>
                <p>
                  Nome do dragão: <Shimmer width={'200px'} height={'20px'} />
                </p>
              </List>
              <List>
                <p>
                  Tipo do dragão: <Shimmer width={'200px'} height={'20px'} />
                </p>
              </List>
              <List>
                <p>
                  Descrição do dragão:{' '}
                  <Shimmer width={'200px'} height={'20px'} />
                </p>
              </List>
              <List>
                <p>
                  Data de criação: <Shimmer width={'200px'} height={'20px'} />
                </p>
              </List>
            </>
          ) : (
            <>
              <List>
                <p>
                  Nome do dragão: <b>&nbsp;{data?.name}</b>
                </p>
              </List>
              <List>
                <p>
                  Tipo do dragão:{' '}
                  <b>
                    <Capitalize> &nbsp;{data?.type} </Capitalize>
                  </b>
                </p>
              </List>
              <List>
                <p>
                  Descrição do dragão:{' '}
                  <b>
                    <Capitalize> &nbsp;{data?.histories} </Capitalize>
                  </b>
                </p>
              </List>
              <List>
                <p>
                  Data de criação: <b>&nbsp;{DateFormatter(date)}</b>
                </p>
              </List>
            </>
          )}
        </CardBackground>
      </Container>
    </Layout>
  );
};
