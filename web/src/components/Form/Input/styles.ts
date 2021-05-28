import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: string;
  isFocused: boolean;
  isFilled: boolean;
  filled?: any;
  hasValueInProps: boolean;
  hasError: boolean;
}

interface ErrorMessageProps {
  hasError: boolean;
}

export const InputContainer = styled.div`
  display: block;
  margin: 1rem 0rem;
`;

export const InputGroup = styled.label<ContainerProps>`
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  position: relative;
  display: flex;
  cursor: text;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  width: 100%;
  height: 72px;
  padding: 4px 12px;
  background: ${props => props.theme.colorBackground};

  ${props =>
    props.hasError &&
    css`
      border: 2px solid ${props => props.theme.colorRed};
      animation: shake 0.82s ease-out;
    `}
  ${props =>
    props.hasValueInProps &&
    css`
      cursor: not-allowed;
    `};

  label {
    position: absolute;
    bottom: 26px;
    left: 24px;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    color: ${props => props.theme.colorText};
    font-weight: 500;
    pointer-events: none;
  }

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 20%;
    width: 2px;
    border-radius: 8px;
    height: 60%;
    background: linear-gradient(
      180deg,
      rgba(251, 169, 61, 1) 0%,
      rgba(205, 46, 90, 1) 100%
    );
    transform: scale(0, 0);
    transition: transform 0.3s ease-out;
  }

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      &:before {
        transform: scale(1, 1);
      }

      label {
        color: ${props => props.theme.colorText};
        transform: translateX(-7px) translateY(-0.85rem) scale(0.75);
        pointer-events: none;
      }
    `}

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin-top: 15px;

    input {
      flex: 1;
      background: transparent;
      border: 0;
      margin-bottom: 4px;
      font-size: 16px;
      padding: 11px 8px 8px 9px;
      color: ${props => props.theme.colorText};
      background: ${props => props.theme.colorBackground};

      ${props =>
        props.hasValueInProps &&
        css`
          color: ${props => props.theme.colorText};
        `};
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 130px;
`;

export const ToggleView = styled.button`
  background: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  margin-top: -11px;

  svg {
    color: #fba93d;
  }
`;

export const ErrorMessage = styled.div<ErrorMessageProps>`
  position: relative;
  display: block;
  height: fit-content !important;
  background: transparent !important;
  margin-top: 0.4rem;
  transition: 0.3s ease-in-out;

  > div {
    display: block;
    color: ${props => props.theme.colorRed};
    font-style: italic;
    font-size: 0.75rem;
    text-transform: normal;
    pointer-events: none;
    user-select: none;
  }
`;
