import React, { useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components';
import { Container } from './styles';

export const NotFound: React.FC = () => {
  const history = useHistory();

  const handleGoToLanding = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <FiXCircle size={100} color={'#ce4a4a'} />
      <h1>Página não encontrada!</h1>
      <p>
        Não achamos a página que você está procurando, mas você pode voltar
        apertando o botão abaixo.
      </p>
      <Button
        variant={'solid'}
        style={{ marginTop: '2rem' }}
        onClick={handleGoToLanding}
      >
        Voltar
      </Button>
    </Container>
  );
};
