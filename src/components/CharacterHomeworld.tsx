import type { ReactElement } from "react";
import type { IHomeworld } from "../types";

interface ICharacterDetailsProps {
  homeworld: IHomeworld;
}

function CharacterHomeworld({
  homeworld,
}: ICharacterDetailsProps): ReactElement {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
  } = homeworld;

  return (
    <article className="character-homeworld">
      <h3>{name}</h3>
      <p>Rotation period: {rotation_period}</p>
      <p>Orbital period: {orbital_period}</p>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>Terrain: {terrain}</p>
    </article>
  );
}

export default CharacterHomeworld;
