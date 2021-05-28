import styled, { css } from 'styled-components';

interface ToastProps {
  show?: any;
}

export const Container = styled.div<ToastProps>`
  width: 425px;
  position: fixed;
  right: 0;
  top: 0;
  padding: 2.4rem;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: 0.6s ease-out;
  z-index: 9999999999999999;

  ${props =>
    props.show &&
    css`
      opacity: 1;
      visibility: visible;
    `};

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    width: 100%;
  }
`;
