import { useState, type ReactNode } from "react";
import { pageSize } from "../constants";
import type { ICharacter } from "../types";
import Character from "./Character";
import Loader from "./Loader";

interface CharacterListProps {
  characters: ICharacter[];
  onCharacterClick: (character: ICharacter) => void;
}

function CharacterList({ characters, onCharacterClick }: CharacterListProps) {
function CharacterList() {
  return <section className="characters-list">Character List</section>;
  const loading: boolean = !characters.length;

  const renderCharacters = (): ReactNode => {
    if (loading) return <Loader />;

    return characters
      .map((c) => (
        <Character
          character={c}
          key={c.id}
          onCharacterClick={onCharacterClick}
        />
      ))
  };

  return (
    <section id="charcters-list" className="g-card">
      <header>
        <h2>Character List</h2>
      </header>
      <ul className="characters">{renderCharacters()}</ul>
    </section>
  );
}

export default CharacterList;
