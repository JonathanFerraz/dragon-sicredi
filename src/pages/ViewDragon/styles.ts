import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1312px;
  height: 66vh;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

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

export const CardBackground = styled.div`
  width: 100%;
  background: ${props => props.theme.colorShape};
  border-radius: 0.5rem;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  border-bottom: 1px solid ${props => props.theme.colorBorders};
  transition: 0.3s ease-in-out;

  &:last-child {
    border-bottom: 0px solid ${props => props.theme.colorBorders};
  }

  &:hover {
    background: ${props => props.theme.colorShape};
  }

  p {
    display: flex;
  }
`;

export const Capitalize = styled.div`
  text-transform: capitalize;
  margin-left: 4px;
`;
