import styled, { css } from 'styled-components'
import { styled as styledMui } from '@mui/system'
import { theme } from '../../styles/theme'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface MenuProps {
  $menu: boolean
}

interface SectionColorProps {
  $color: string
}

export const Header = styled.header<MenuProps>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 16px;

  ${(props) => props.$menu ? css`
    height: 100vh;
  ` : css`
    border-bottom: 1px solid ${theme.colors.grayDark};
  `}
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
`

export const NavLinks = styled.ul<MenuProps>`
  display: ${(props) => props.$menu ? 'flex' : 'none'};
  flex-direction: column;
  gap: 24px;
`

export const NavItem = styled.a`
  text-decoration: none;
  list-style: none;
  color: ${theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const LinkName = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
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
`

export const StyledMenuOpenIcon = styledMui(MenuOpenIcon)`
  font-size: 32px;
  cursor: pointer;
`

export const StyledChevronRightIcon = styledMui(ChevronRightIcon)`
  font-size: 32px;
  cursor: pointer;
`