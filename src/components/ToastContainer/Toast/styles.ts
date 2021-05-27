import { animated } from 'react-spring';

import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription?: number;
}

const containerTypeVariations = {
  info: css`
    background: ${props => props.theme.colorSupport};
    color: ${props => props.theme.colorWhite};
  `,

  success: css`
    background: ${props => props.theme.colorGreen};
    color: ${props => props.theme.colorBlack};
  `,

  error: css`
    background: ${props => props.theme.colorRed};
    color: ${props => props.theme.colorWhite};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 100%;

  position: relative;
  padding: 1rem 2.6rem 1rem 1rem;
  border-radius: 0.2rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 0.5rem;
  }

  ${props => containerTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }

      button {
        top: 18px;
      }
    `}
`;
