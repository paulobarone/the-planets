export interface PlanetTypes {
  name: string;
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