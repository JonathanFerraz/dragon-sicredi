import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  flex: 1;
  box-sizing: border-box;
`;

export const Wrapper = styled.section`
  position: relative;

  @media (max-width: 768px) {
    padding-bottom: 3rem;
  }
`;
