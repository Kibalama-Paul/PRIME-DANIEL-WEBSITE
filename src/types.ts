export type ActiveModal = 'none' | 'get-started' | 'build-yours' | 'explore-models' | 'models' | 'pricing' | 'services' | 'contact';

export interface VehicleSpec {
  id: string;
  name: string;
  tagline: string;
  acceleration: string;
  topSpeed: string;
  range: string;
  startingPrice: string;
  colors: { name: string; hex: string }[];
  image: string;
}
