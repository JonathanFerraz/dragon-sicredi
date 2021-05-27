import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colorScrollbarBackground};
  }

  ::-webkit-scrollbar {
    width: 6px;
    background: ${props => props.theme.colorScrollbarBackground};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colorScrollbar};
  }

  // Selection color

  ::-moz-selection {
    color: ${props => props.theme.colorWhite};
    background: ${props => props.theme.colorSecondary};
  }

  ::selection {
    color: ${props => props.theme.colorWhite};
    background: ${props => props.theme.colorSecondary};
  }

  body {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colorScrollbar} ${props =>
  props.theme.colorScrollbarBackground};
    font-size: .9rem;
    line-height: 1.42857143;
    margin: 0;
    background: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    min-height: 100%;
    text-rendering: optimizeLegibility;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #app {
    font-family: Roboto, sans-serif;
    background: ${props => props.theme.colorBackground};
    color: ${props => props.theme.colorText};
    height: 100%;
  }


  img {
    border-style: none;
  }

  /* Texts */

  a {
    text-decoration: none;
    background-color: transparent
  }

  a:not([href]):not([tabindex]),
  a:not([href]):not([tabindex]):focus,
  a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
  }

  a:not([href]):not([tabindex]):focus {
    outline: 0
  }

  li {
    list-style: none
  }

  /* Inputs and Buttons */

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 30px #121214 inset;
    box-shadow: 0 0 0px 30px #121214 inset;
    -webkit-text-fill-color: #a8a8b3 !important;
  }


  input[type="password"]::-ms-reveal,
  input[type="password"]::-ms-clear {
    display: none;
  }

  textarea,
  input,
  button {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: none;
    border: none;
  }

  button {
    cursor: pointer
  }
`;
