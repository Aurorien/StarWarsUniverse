export interface ICharacter {
  id: number;
  name: string;
  gender: string;
  skin_color: string;
  hair_color: string;
  height: string;
  eye_color: string;
  mass: string;
  homeworld: number;
  birth_year: string;
  species_id: number;
}

export interface IHomeworld {
  id: number;
  climate: string;
  surface_water: string;
  name: string;
  diameter: string;
  rotation_period: string;
  terrain: string;
  gravity: string;
  orbital_period: string;
  population: string;
}
