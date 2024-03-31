import { Dispatch, SetStateAction } from 'react'

export interface PlanetContextValue {
  planet: PlanetTypes;
  setPlanet: Dispatch<SetStateAction<PlanetTypes>>;
}

export interface PlanetTypes {
  name: string;
  path: string;
  sectionColor: string;
  overview: PlanetSection;
  structure: PlanetSection;
  surface: PlanetSection & { geo: string };
  info: InfoItem[];
}

type PlanetSection = {
  content: string;
  source: string;
  image: string;
}

type InfoItem = {
  name: string;
  value: string;
}