import styled from 'styled-components';

export const Container = styled.div`
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
  animation: 0.5s ease 0s 1 normal none running fade;

  position: relative;
  max-width: 1120px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colorBackground};

  h1 {
    margin: 20px 0;
    color: ${props => props.theme.colorText};
    font-weight: 500;
    font-size: 48px;
    width: 100%;
    text-align: center;
  }
  p {
    max-width: 350px;
    text-align: center;
    color: ${props => props.theme.colorText};
  }
`;
