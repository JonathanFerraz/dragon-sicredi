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
`;

export const Hero = styled.div`
  width: 100%;
  height: 170px;
  background: ${props => props.theme.colorBackground2};
`;

export const Grids = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
`;

export const Grid = styled.div`
  width: 220px;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(251, 169, 61, 1) 0%,
    rgba(205, 46, 90, 1) 100%
  );
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;

  span {
    background: rgba(255, 255, 255, 0.3);
    width: 30px;
    height: 30px;
    border-radius: 0.5rem;
    margin-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 20px;
      fill: #fff;
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
`;
