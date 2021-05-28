import { Form as UnformForm } from '@unform/web';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1312px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 3rem;

  > h1 {
    margin-top: 2rem;
    max-width: 600px;
    color: ${props => props.theme.colorText};
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 28px;
    }
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

    &:nth-child(4) {
      display: flex;
      justify-content: flex-end;
    }

    button {
      &:nth-child(2) {
        margin-left: 1rem !important;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;
