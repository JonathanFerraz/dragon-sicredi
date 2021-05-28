import { Form as UnformForm } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
  }

  position: relative;
  max-width: 1312px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  animation: 0.5s ease 0s 1 normal none running fade;
`;

export const Grids = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;

  &:nth-of-type(1) {
    order: 2;
    margin-bottom: 4rem;
  }

  &:nth-of-type(2) {
    order: 1;
  }

  > div {
    display: flex;
    flex-direction: column;

    > div > svg {
      width: 150px;
      margin-bottom: 2rem;

      @media (max-width: 500px) {
        width: 120px;
        margin-bottom: 1rem;
      }
    }

    h1 {
      color: ${props => props.theme.colorWhite};
      margin-bottom: 24px;
      font-size: 54px;
      line-height: 64px;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 36px;
        line-height: 52px;
      }

      @media (max-width: 500px) {
        font-size: 28px;
        line-height: 38px;
      }
    }
  }

  a {
    margin-top: 2rem;
    margin-left: -0.5rem;
    display: flex;
    color: ${props => props.theme.colorSecondary};

    span {
      margin-top: -0.1rem;
    }
  }

  @media (max-width: 1200px) {
    padding: 0px;
  }

  @media (max-width: 992px) {
    height: unset;
  }
`;

export const FormWrapper = styled(UnformForm)`
  width: 100%;
  background-color: ${props => props.theme.colorShape};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 65px;

  > div {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;
