import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import NavBar from './components/NavBar/NavBar'
import { GlobalStyles } from './styles/GlobalStyles'
import Background from './components/Background/Background'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Background>
          <NavBar />
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
