import { createContext } from 'react'
import { PlanetContextValue } from '../types/planetTypes'
import { planets } from '../data/planets'

export const PlanetContext = createContext<PlanetContextValue>({ 
  planet: planets[0], 
  setPlanet: () => {} 
})

export default PlanetContext