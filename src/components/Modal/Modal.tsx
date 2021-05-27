import React, { useEffect } from 'react';

import { ReactComponent as CloseIcon } from '../../assets/img/close.svg';
import Button from '../Button';
import { Overlay, Wrapper, Header, Body, Footer } from './styles';

interface ModalContainerProps {
  id?: string;
  onConfirm?: any;
  onCancel?: any;
  titulo?: string;
  mensagem?: any;
  bodyBottom?: any;
  show: boolean;
  actionButtons?: boolean;
  onClick?: any;
}

export const Modal: React.FC<ModalContainerProps> = ({
  id = 'modal',
  show,
  titulo,
  mensagem,
  bodyBottom,
  onConfirm,
  onCancel = () => {},
  children,
  actionButtons,
}) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false);

    return () => {
      window.removeEventListener('keydown', onEscKeyDown, false);
    };
  }, []);

  const onEscKeyDown = (e: any) => {
    if (e.key === 'Escape') onCancel();
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.id === id) {
      onCancel();
    }
  };

  return (
    <Overlay
      id={id}
      role="dialog"
      onClick={handleOutsideClick}
      className={show ? 'active' : ''}
    >
      {show && (
        <Wrapper>
          <Header>
            <Button
              style={{
                padding: '0rem!important',
                minWidth: 'unset!important',
              }}
              onClick={() =>
                setTimeout(() => {
                  onCancel();
                }, 500)
              }
            >
              <CloseIcon />
            </Button>
          </Header>
          <Body>
            {titulo ? <h1>{titulo}</h1> : null}
            {mensagem ? <p>{mensagem}</p> : null}
            {children}
          </Body>
          {bodyBottom && (
            <>
              <Footer style={{ marginTop: '0rem' }}>{bodyBottom}</Footer>
            </>
          )}
          {actionButtons ? (
            <Footer>
              <>
                <Button
                  variant="solid"
                  type="submit"
                  style={{ width: '100%', marginRight: '1rem' }}
                  onClick={() =>
                    setTimeout(() => {
                      onConfirm();
                    }, 500)
                  }
                >
                  Sim, confirmar
                </Button>
                <Button
                  variant="outline"
                  color={'#C71F37'}
                  type="submit"
                  style={{ width: '40%' }}
                  onClick={() =>
                    setTimeout(() => {
                      onCancel();
                    }, 500)
                  }
                >
                  Agora não
                </Button>
              </>
            </Footer>
          ) : null}
        </Wrapper>
      )}
    </Overlay>
  );
};
