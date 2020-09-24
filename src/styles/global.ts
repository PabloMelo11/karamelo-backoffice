import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    color: #fff;
    background: #292534;

    .ReactModal__Overlay {
      opacity: 0;
      transition: opacity 200ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
      opacity: 1;
    }

    .ReactModal__Overlay--before-close{
      opacity: 0;
    }
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    background: 'transparent'
  }

  @media (max-width: 1280px) {
    html {
      font-size: 60.5%;
    }
  }
`;
