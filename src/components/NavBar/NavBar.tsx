import { Circle, Header, LeftSide, Logo, NavItem, NavLinks, NavOptions, StyledChevronRightIcon, StyledMenuIcon, StyledMenuOpenIcon } from './NavBar.style'
import { useContext, useEffect, useState } from 'react'
import { planets } from '../../data/planets'
import PlanetContext from '../../contexts/PlanetContext'

export default function NavBar() {
  const { planet, setPlanet } = useContext(PlanetContext)
  const [menu, setMenu] = useState(false)
  const windowWidth = window.innerWidth

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

  const handleCurrentPlanet = (index: number) => {
    setPlanet(planets[index])
    setTimeout(() => {
      setMenu(false)
    }, 700)
  }

  return (
    <Header $menu={menu}>
      <NavOptions>
        <Logo>The Planets</Logo>
        {menu ? <StyledMenuOpenIcon onClick={handleMenu} /> : 
          <StyledMenuIcon onClick={handleMenu} />
        }
      </NavOptions>
      <NavLinks $menu={menu}>
        {windowWidth < 1024 ? planets.map((item, index) => (
          <NavItem $active={planet.path === item.path} key={index} $color={item.sectionColor} onClick={() => handleCurrentPlanet(index)}>
            <LeftSide>
              <Circle $color={item.sectionColor} />
              {item.name}
            </LeftSide>
            <StyledChevronRightIcon />
          </NavItem>
        )) : planets.map((item, index) => (
          <NavItem $active={planet.path === item.path} $color={item.sectionColor} key={index} onClick={() => handleCurrentPlanet(index)}>
            {item.name}
          </NavItem>
        ))}
      </NavLinks>
    </Header>
  )
}