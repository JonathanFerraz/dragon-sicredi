import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  background: ${props => props.theme.colorBackground2};
  border-bottom: 1px solid ${props => props.theme.colorBorders};
`;

export const Container = styled.div`
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
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover > div {
    border: 1px solid ${props => props.theme.colorSecondary};
  }

  > div {
    border: 1px solid ${props => props.theme.colorBorders};
    border-radius: 0.5rem;
    margin-left: 1rem;
    padding: 0.8rem 1rem;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 22px;
    }
  }
`;

export const MenuMobile = styled.section`
  position: absolute;
  right: 24px;
  top: calc(77% + 12px);
  width: 256px;
  padding: 0px;
  background: ${props => props.theme.colorShape};
  border: 1px solid ${props => props.theme.colorBorders};
  border-radius: 5px;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.1);
  transition: 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: 0;
  visibility: hidden;
  z-index: 99999;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  li {
    padding: 0px !important;
  }

  div {
    width: 100%;

    svg {
      margin-right: 1rem;
    }

    a {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      font-size: 16px;
      color: ${props => props.theme.colorText};
      padding: 0.8rem 1rem;
      transition: background 0.2s ease 0s;
      cursor: pointer;
      background: transparent;
      border: none;
      width: 100%;

      &:first-child() {
        padding-top: 16px;
      }
    }
  }
`;
