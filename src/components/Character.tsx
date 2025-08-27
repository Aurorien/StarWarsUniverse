import type { ReactElement } from "react";
import type { ICharacter } from "../types";

interface ICharacterProps {
  character: ICharacter;
  onCharacterClick: (character: ICharacter) => void;
}

function Character({
  character,
  onCharacterClick,
}: ICharacterProps): ReactElement {
  const { name } = character;

  return (
    <li className="character" onClick={() => onCharacterClick}>
      {name}
    </li>
  );
}

export default Character;
