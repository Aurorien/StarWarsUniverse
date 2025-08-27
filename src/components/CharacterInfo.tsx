import type { ReactNode } from "react";
import type { ICharacter, IHomeworld } from "../types";
import CharacterDetails from "./CharacterDetails";
import CharacterHomeworld from "./CharacterHomeworld";
import Loader from "./Loader";

interface ICharacterInfoProps {
  character?: ICharacter;
  homeworld?: IHomeworld;
  isHomeWorldLoading: boolean;
}

function CharacterInfo({
  character,
  homeworld,
  isHomeWorldLoading,
}: ICharacterInfoProps) {
  console.log("character", character);
  console.log("homeworld", homeworld);

  const renderHomeworld = (): ReactNode => {
    if (isHomeWorldLoading) return <Loader />;
    if (!homeworld) return <p>No homeworld.</p>;
    return <CharacterHomeworld homeworld={homeworld} />;
  };

  return (
    <section className="character-info">
      <header>
        <h2>Character Info</h2>
      </header>
      <div>
        {!character ? (
          <p>No character selected.</p>
        ) : (
          <>
            <CharacterDetails character={character} />
            {renderHomeworld()}
          </>
        )}
      </div>
    </section>
  );
}

export default CharacterInfo;
