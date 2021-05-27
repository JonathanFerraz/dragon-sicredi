import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1312px;
  height: 100%;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const FooterPage = styled.footer`
  background: ${props => props.theme.colorBackground2};
  padding: 3rem 0rem;
  border-top: 1px solid ${props => props.theme.colorBorders};

  @media (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;

export const FooterIcon = styled.div`
  padding: 0.3rem 0;
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
