import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import NavBar from './components/NavBar/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Background from './components/Background/Background'
import Planet from './components/Planet/Planet'
import PlanetContext from './contexts/PlanetContext'
import { planets } from './data/planets'
import { useState } from 'react'
import { PlanetTypes } from './types/planetTypes'

function App() {
  const [planet, setPlanet] = useState<PlanetTypes>(planets[0])

  return (
    <PlanetContext.Provider value={{ planet, setPlanet }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Background>
            <NavBar />
            <Planet />
          </Background>
        </ThemeProvider>
      </BrowserRouter>
    </PlanetContext.Provider>
  )
}

export default App
