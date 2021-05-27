import React from 'react';
import { Link as LinkScroll } from 'react-scroll';

import { ReactComponent as ArrowUp } from '../../assets/img/arrow_up.svg';
import Button from '../Button';
import { FooterPage, Container, FooterContent } from './styles';

export const Footer: React.FC = () => {
  return (
    <FooterPage>
      <Container>
        <FooterContent>
          <p>Todos os Direitos Reservados</p>

          <LinkScroll
            to="headerPage"
            spy={true}
            smooth={'easeInOutQuart'}
            offset={-70}
            duration={1000}
          >
            <Button variant={'solid-icon'} color={'#121214'}>
              <ArrowUp width={24} style={{ color: 'rgba(205, 46, 90, 1)' }} />
            </Button>
          </LinkScroll>
        </FooterContent>
      </Container>
    </FooterPage>
  );
};
