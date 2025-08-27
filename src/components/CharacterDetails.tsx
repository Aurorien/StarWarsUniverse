import type { ReactElement } from "react";
import type { ICharacter } from "../types";

interface CharacterDetailsProps {
  character: ICharacter;
}

function CharacterDetails({ character }: CharacterDetailsProps): ReactElement {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = character;

  return (
    <article className="character-details">
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>
    </article>
  );
}

export default CharacterDetails;
