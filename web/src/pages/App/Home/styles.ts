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
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 1312px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Hero = styled.div`
  width: 100%;
  height: 170px;
  background: ${props => props.theme.colorBackground2};

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    margin: 0rem 0rem 1rem 0rem;
  }
`;

export const Grid = styled.div`
  width: 220px;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    width: auto;

    h1 {
      font-size: 22px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  background: ${props => props.theme.colorBorders};
  margin: 3rem 0rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: -2rem;

  > h1 {
    font-size: 26px;
    font-weight: bold;
  }

  > div {
    margin-top: 1rem;

    h1 {
      font-size: 12px;
    }

    p {
      font-size: 16px;
    }

    &:nth-child(2) {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      button {
        &:nth-child(1),
        &:nth-child(2) {
          margin: 0rem 1rem;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: auto;
    overflow: hidden;

    h1 {
      font-size: 18px;
    }

    > div {
      margin-top: 1rem;

      h1 {
        font-size: 10px;
      }

      p {
        font-size: 14px;
      }

      &:nth-child(2) {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        button {
          &:nth-child(1),
          &:nth-child(2) {
            margin: 0rem 1rem;
          }
        }

        @media (max-width: 768px) {
          button {
            &:nth-child(1),
            &:nth-child(2) {
              margin: 0rem 0.2rem;
            }
          }
        }
      }
    }
  }
`;
