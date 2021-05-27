import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1312px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;

  display: flex;
  align-items: center;

  .buttonBack {
    width: 49px !important;
  }

  @media (max-width: 768px) {
    .buttonBack {
      min-width: 45px !important;
      padding: 0.5rem !important;
    }

    h3 {
      font-size: 0.9rem;
    }

    .buttonQuestion {
      min-height: 35px !important;
      padding: 0.5rem !important;
      margin-right: 0rem !important;
    }
  }
`;

export const BackBar = styled.div`
  width: 100%;
  padding: 1.5rem 0rem;
  background: ${props => props.theme.colorBackground2};

  h3 {
    font-weight: 500;
    color: ${props => props.theme.colorText};
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
  }

  h2 {
    font-weight: 500;
    color: ${props => props.theme.colorText};
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;
