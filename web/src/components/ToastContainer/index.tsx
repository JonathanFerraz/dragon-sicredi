import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransitions = useTransition(
    messages,
    (message: { id: any }) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <>
      <Container show={messages.length ? true : false}>
        {messageWithTransitions.map(({ item, key, props }) => (
          <Toast key={key} toast={item} style={props}></Toast>
        ))}
      </Container>
    </>
  );
};

export default ToastContainer;
