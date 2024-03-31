import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid ${theme.colors.grayDark};
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  @media screen and (min-width: 1024px) {
    padding: 24px;
  }
`

export const InfoName = styled.h2`
  color: ${theme.colors.grayLight};
  font-size: 8px;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`

export const InfoValue = styled.span`
  color: ${theme.colors.white};
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${theme.fonts.secondary};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`