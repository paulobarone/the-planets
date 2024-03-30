import styled from 'styled-components'
import { starsBackground } from './starsBackground'

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.black};

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    height: 2px;
    width: 2px;
    box-shadow: ${starsBackground};
    border-radius: 90px;
    background: white;
  }
`