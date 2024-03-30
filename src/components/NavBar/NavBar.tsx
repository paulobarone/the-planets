import { Circle, Header, LeftSide, LinkName, Logo, NavItem, NavLinks, NavOptions, StyledChevronRightIcon, StyledMenuIcon, StyledMenuOpenIcon } from './NavBar.style'
import { useEffect, useState } from 'react'
import { planets } from '../../data/planets'

export default function NavBar() {
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  useEffect(() => {
    if(menu) {
      document.body.style.overflowY = 'hidden'
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [menu])

  return (
    <Header $menu={menu}>
      <NavOptions>
        <Logo>The Planets</Logo>
        {menu ? <StyledMenuOpenIcon onClick={handleMenu} /> : 
          <StyledMenuIcon onClick={handleMenu} />
        }
      </NavOptions>
      <NavLinks $menu={menu}>
        {planets.map((item, index) => (
          <NavItem href={item.path} key={index}>
            <LeftSide>
              <Circle $color={item.sectionColor} />
              <LinkName>{item.name}</LinkName>
            </LeftSide>
            <StyledChevronRightIcon />
          </NavItem>
        ))}
      </NavLinks>
    </Header>
  )
}