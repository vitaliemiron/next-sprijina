// #region Global Imports
import { createGlobalStyle } from 'styled-components';
import { theme } from '@Utils';
// #endregion Global Imports

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: ${theme.typography.htmlSize};
    scroll-behavior: smooth;
    box-sizing: border-box;
  }


  *, ::before, ::after {
    box-sizing: inherit;
  }

  button {
    background-color:transparent;
    color:inherit;
    border-width:0;
    padding:0;
    cursor:pointer;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  figure {
    margin:0;
  }

  input::-moz-focus-inner {
    border:0;
    padding:0;
    margin:0;
  }

  ul, ol, dd {
    margin:0;
    padding:0;
    list-style:none;
    padding: 1.3rem;
  }

  li {
    list-style-type: none;
    position: relative;
  }

  li::before {
    content: '•';
    position: absolute;
    left: -0.8em;      
    font-size: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    margin:0;
    font-size:inherit;
    font-weight:inherit;
  }

  cite {
    font-style:normal;
  }

  fieldset {
    border-width:0;
    padding:0;
    margin:0;
  }

  body {
    color: ${theme.colors.black.base};
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-feature-settings: "lnum";
    font-size: 1.4rem;
    line-height: 2.6rem;
    margin: 0;
  }

  p {
    margin: 0;
    line-height: 2.6rem;
    padding: 0.65rem 0 1.95rem;
  }

  a {
    color: ${theme.colors.yellow.base};

    &:hover {
      text-decoration: underline;
    }
  }
`;
