import CharacterInfo from "./components/CharacterInfo";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import "./App.css";
import { useEffect, useState } from "react";
import type { ICharacter, IHomeworld } from "./types";
import { fetchCharacters, fetchHomeworld } from "./api";

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<
    ICharacter | undefined
  >(undefined);
  const [homeworld, setHomeworld] = useState<IHomeworld | undefined>(undefined);
  const [isHomeworldLoading, setIsHomeworldLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCharacters().then((data) => setCharacters(data));
  }, []);

  const handleOnCharacterClick = (character: ICharacter) => {
    setIsHomeworldLoading(true);
    setSelectedCharacter(characters.find((c) => c.id === character.id));

    fetchHomeworld(character.homeworld).then((homeworld) => {
      setHomeworld(homeworld);
      setIsHomeworldLoading(false);
    });
  };
  return (
    <>
      <Header />
      <main className="main">
        <CharacterList
          characters={characters}
          onCharacterClick={handleOnCharacterClick}
        />
        <CharacterInfo
          homeworld={homeworld}
          character={selectedCharacter}
          isHomeWorldLoading={isHomeworldLoading}
        />
      </main>
    </>
  );
}

export default App;
