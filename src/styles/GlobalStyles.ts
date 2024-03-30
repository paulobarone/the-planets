import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  html {
    background-color: black;
    scroll-behavior: smooth
  }

  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.white};
  }

  a {
    text-decoration: none;
  }
`