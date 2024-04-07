import styled, { keyframes } from 'styled-components'
import { styled as styledMui } from '@mui/system'
import { theme } from '../../styles/theme'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'

interface OptionProps {
  $active: boolean
  $color: string
}

interface NumberOptionProps {
  $active: boolean
}

const float = keyframes`
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(3%);
  }

  100% {
    transform: translateY(0%);
  }
`

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    gap: 48px;
  }
`

export const OptionsMobileContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50px;
  width: 100%;
  padding: 0px 16px;
  border-bottom: 1px solid ${theme.colors.grayDark};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileOptions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`

export const MobileOption = styled.span<OptionProps>`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  position: relative;
  transition: 0.7s color;
  color: ${(props) => props.$active ? props.$color : theme.colors.grayLight};
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;

  &:after {
    content: '';
    width: ${(props) => props.$active ? '100%' : '0px'};
    height: 2px;
    background-color: ${(props) => props.$color};
    transition: 0.7s width;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${(props) => props.$color};
  }

  &:hover::after {
    width: 100%;
  }
`

export const PlanetResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 32px 16px;
  max-width: 500px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    max-width: 1200px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

export const PlanetImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`

export const PlanetImage = styled.img`
  width: 60%;
  max-width: 300px;
  animation: ${float} 5s infinite ease;

  @media screen and (min-width: 1024px) {
    width: 100%;
    max-width: 500px;
  }
`

export const PlanetGeoImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  width: 30%;
  max-width: 150px;
  transition: 0.7s;
  cursor: pointer;

  &:hover {
    width: 175px;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    max-width: 250px;

    &:hover {
      width: 275px;
    }
  }
`

export const PlanetDescription = styled.p`
  font-size: 12px;
  text-align: center;
  color: ${theme.colors.whiteAlpha75};
  margin-bottom: 12px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    text-align: start;
  }
`

export const PlanetResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    max-width: 50%;
    gap: 32px;
  }
`

export const PlanetResumeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    max-width: 50%;
    align-items: start;
  }

  @media screen and (min-width: 1024px) {
    max-width: none;
    align-items: start;
  }
`

export const PlanetName = styled.h1`
  font-size: 42px;
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  color: ${theme.colors.white};
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const Source = styled.span`
  color: ${theme.colors.grayLight};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const WikipediaLink = styled.a`
  color: ${theme.colors.grayLight};
  font-weight: 700;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  transition: .7s;

  &:hover {
    color: ${theme.colors.white};
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 32px 16px;
  max-width: 500px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`

export const DesktopOptions = styled.div`
  display: none;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NumberOption = styled.span<NumberOptionProps>`
  font-size: 10px;
  font-weight: 700;
  color: ${(props) => props.$active ? theme.colors.whiteAlpha75 : theme.colors.grayLight};
`

export const DesktopOption = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 12px;
  width: 100%;
  border: 1px solid ${theme.colors.grayDark};
  cursor: pointer;
  background-color: ${(props) => props.$active ? props.$color : 'transparent'};
  transition: .7s ease;
`

export const StyledArrowForwardIosRoundedIcon = styledMui(ArrowForwardIosRoundedIcon)`
  font-size: 12px;
`