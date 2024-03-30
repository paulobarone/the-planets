import styled from 'styled-components'
import { styled as styledMui } from '@mui/system'
import { theme } from '../../styles/theme'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface MenuProps {
  $menu: boolean
}

interface NavItemProps {
  $color: string
  $active: boolean
}

interface SectionColorProps {
  $color: string
}

export const Header = styled.header<MenuProps>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 16px;
  height: ${(props) => props.$menu ? '100vh' : 'auto'};
  border-bottom: ${(props) => !props.$menu ? `1px solid ${theme.colors.grayDark}` : 'none'};

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    min-height: 75px;
    padding: 0px 32px;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  font-size: 32px;
  font-family: ${theme.fonts.secondary};
  text-transform: uppercase;
  vertical-align: text-top;
  margin-top: -5px;
`

export const NavLinks = styled.ul<MenuProps>`
  display: ${(props) => props.$menu ? 'flex' : 'none'};
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`

export const NavItem = styled.a<NavItemProps>`
  text-decoration: none;
  list-style: none;
  color: ${(props) => props.$active ? props.$color : theme.colors.white};
  border-bottom: 1px solid ${theme.colors.grayDark};
  padding: 12px 16px;
  cursor: pointer;
  transition: .7s;

  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1024px) {
    position: relative;
    border-bottom: none;
    padding: 0px;
    font-size: 14px;
    transition: 0.7s color;

    &:after {
      content: '';
      width: ${(props) => props.$active ? '100%' : '0px'};
      height: 3px;
      background-color: ${(props) => props.$color};
      transition: 0.7s width;
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      color: ${(props) => props.$color};
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Circle = styled.div<SectionColorProps>`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background-color: ${(props) => props.$color};
`

export const StyledMenuIcon = styledMui(MenuIcon)`
  font-size: 32px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const StyledMenuOpenIcon = styledMui(MenuOpenIcon)`
  font-size: 32px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const StyledChevronRightIcon = styledMui(ChevronRightIcon)`
  font-size: 32px;
  cursor: pointer;
`