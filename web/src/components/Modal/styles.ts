import styled, { keyframes } from 'styled-components';

const modalEnter = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;

  transition: 0.4s ease-in-out;

  visibility: hidden;
  opacity: 0;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colorShape};
  max-width: 600px;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  max-height: 70%;
  overflow: auto;
  min-width: 450px;
  max-width: 50%;

  transition: 0.3s ease-in-out;
  animation: ${modalEnter} 0.6s ease-in-out;

  border: 1px solid ${props => props.theme.colorBorders};

  @media (max-width: 768px) {
    min-width: unset;
    max-width: 100%;
    width: 100%;
    margin: 0rem 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  margin: 2px;

  button svg {
    transition: 0.3s ease-in-out;
    opacity: 0.5;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.12);

    button svg {
      opacity: 1;
    }
  }
`;

export const Body = styled.main`
  padding: 1rem 0rem;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    max-width: 450px;
  }

  p {
    max-width: 450px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
