import theme from './theme'

export default `
  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-regular-italic.woff2') format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lora';
    src: url('/fonts/lora-bold-italic.woff2') format('woff2');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Hind';
    src: url('/fonts/hind-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Hind';
    src: url('/fonts/hind-bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: Lora, serif;
    font-size: 17px;
    line-height: 29px;
    color: ${theme.colors.text};
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  img {
    display: block;
  }

  a {
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Lora, serif;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 28px;
    line-height: 36px;
  }

  @media (min-width: ${theme.breakpoints.tabletUp}) {
    h1 {
      font-size: 37px;
      line-height: 42px;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 31px;
  }

  @media (min-width: ${theme.breakpoints.tabletUp}) {
    h2 {
      font-size: 28px;
      line-height: 36px;
    }
  }

  h3 {
    font-size: 17px;
    line-height: 27px;
  }

  @media (min-width: ${theme.breakpoints.tabletUp}) {
    h3 {
      font-size: 20px;
      line-height: 32px;
    }
  }

  h4 {
    font-family: Hind, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }

  h5,
  h6 {
    font-size: 12px;
    line-height: 16px;
    opacity: 0.5;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;
  }

  ::selection {
    color: white;
    background-color: ${theme.colors.link};
  }

  .formatted-text h2 {
    margin-bottom: 5px;
  }

  .formatted-text a {
    border-bottom: dashed 1px;
    transition: color 0.3s, border 0.3s;
  }

  .formatted-text a:hover {
    color: ${theme.colors.link};
  }
`
