import React, { useCallback } from 'react';

import checkedCheckboxIcon from '../../../assets/icons/success_checkbox.svg';
import { Button } from '../../../components';
import useRedirect from '../../../hooks/useRedirect';
import { Container } from './styles';

export const CompletedRegister: React.FC = () => {
  const redirect = useRedirect();

  const handleGoToLogin = useCallback(() => {
    redirect('/login');
  }, []);

  return (
    <Container>
      <img src={checkedCheckboxIcon} alt="Checked checkbox" />
      <h1>Cadastro concluído</h1>
      <p>
        Agora você faz parte da nossa plataforma. Tenha uma ótima experiência.
      </p>
      <Button variant={'solid'} onClick={handleGoToLogin}>
        Fazer login
      </Button>
    </Container>
  );
};
