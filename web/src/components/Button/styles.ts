import { ButtonHTMLAttributes } from 'react';

import { ButtonBase, CircularProgress } from '@material-ui/core';
import { shade, transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'solid-icon' | 'outline' | undefined;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  tooltiptext?: string;
}

export const CircleProgressCustom = styled(CircularProgress)`
  &.MuiCircularProgress-colorPrimary {
    color: ${props => props.theme.colorSecondary}!important;
  }
`;

export const ButtonRipple = styled(ButtonBase)<ButtonProps>`
  color: #555 !important;
  transition: 0.3s ease-in-out !important;
  margin-left: 0rem !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.25 !important;
  text-transform: uppercase !important;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.8rem !important;
  }

  .tooltip {
    display: none;
  }

  @media (min-width: 768px) {
    .tooltip {
      display: block;
      visibility: hidden;
      background-color: ${props => props.theme.colorBackground};
      color: ${props => props.theme.colorWhite};
      border: 1px solid ${props => props.theme.colorShape};
      text-align: center;
      border-radius: 4px;
      padding: 0.4rem 1rem;
      transform: translateY(-20px);
      transition: 0.3s ease-in-out;
      opacity: 0;
      position: absolute;
      z-index: 1;
      text-transform: capitalize !important;
      font-size: 0.9rem;
      top: -105%;
      box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.1);

      &:after {
        content: '';
        position: absolute;
        bottom: -35%;
        left: 45%;
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: ${props => props.theme.colorShape} transparent transparent
          transparent;
      }
    }

    &:hover .tooltip {
      transform: translateX(0px);
      visibility: visible;
      opacity: 1;
    }
  }

  ${props =>
    props.variant === 'solid' &&
    css`
      border-radius: 0.5rem !important;
      min-width: 128px !important;
      padding: 0.9rem 2.5rem !important;
      background: ${(props: ButtonProps) =>
        props.color
          ? `${props.color}`
          : 'linear-gradient(90deg, rgba(251,169,61,1) 0%, rgba(205,46,90,1) 100%)'}!important;
      color: #fff !important;

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        background: ${props => props.theme.colorScrollbar} !important;
        color: ${props => props.theme.colorText} !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color && shade(0.2, `${props.color}`)}
    `};

  ${props =>
    props.variant === 'solid-icon' &&
    css`
      border-radius: 0.5rem !important;
      background: ${(props: ButtonProps) =>
        props.color
          ? `${props.color}`
          : 'linear-gradient(90deg, rgba(251,169,61,1) 0%, rgba(205,46,90,1) 100%)'}!important;
      color: #fff !important;
      min-width: 49px !important;
      padding: 0.7rem !important;

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        background: ${props => props.theme.colorScrollbar} !important;
        color: ${props => props.theme.colorText} !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color && shade(0.2, `${props.color}`)}
    `};

  ${props =>
    props.variant === 'outline' &&
    css`
      border-radius: 0.5rem !important;
      min-width: 128px !important;
      max-width: 224px !important;
      padding: 0.9rem 2.5rem !important;
      background: 'transparent';
      color: ${(props: ButtonProps) =>
        props.color ? `${props.color}` : 'rgba(205, 46, 90, 1)'}!important;
      border: 1px solid
        ${(props: ButtonProps) =>
          props.color ? `${props.color}` : 'rgba(205, 46, 90, 1)'}!important;
      padding: 0.85rem 2rem !important;

      &.Mui-disabled {
        cursor: not-allowed !important;
        pointer-events: none !important;
        border: 1px solid #c4c4c4 !important;
        color: #c4c4c4 !important;
      }

      &:hover {
        background: ${(props: ButtonProps) =>
          props.color
            ? transparentize(0.9, `${props.color}`)
            : transparentize(0.9, 'rgba(205, 46, 90, 1)')}!important;
      }
    `};
`;
