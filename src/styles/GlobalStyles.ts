import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: black;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.white};

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.grayDark};
      border-radius: 20px;
    }
  }

  a {
    text-decoration: none;
  }
`