import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from '../..';
import { ReactComponent as ArrowLeft } from '../../../assets/img/arrow_left.svg';
import { RoutesPaths } from '../../../routes';
import { Container, BackBar } from './styles';

interface BackBarProps {
  title?: string;
  titlePage?: string;
}

export const SubHeader: React.FC<BackBarProps> = ({
  title,
  titlePage,
  children,
}) => {
  const history = useHistory();
  const location = useLocation();

  function back() {
    if (location.pathname.match('/listar')) {
      history.push(RoutesPaths.home);
    } else {
      history.goBack();
    }
  }

  // const capitalizeFirstLetter = (str: string) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  // };

  return (
    <>
      <BackBar>
        <Container>
          <Button
            variant="solid-icon"
            color="#121214"
            className={'buttonBack'}
            style={{ marginRight: '1rem' }}
            onClick={() =>
              setTimeout(() => {
                back();
              }, 500)
            }
          >
            <ArrowLeft width={28} color={'rgba(205, 46, 90, 1)'} />
          </Button>
          <h3>Voltar</h3>
          {children}
        </Container>
      </BackBar>
    </>
  );
};
