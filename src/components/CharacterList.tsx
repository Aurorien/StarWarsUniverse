import { useState, type ReactNode } from "react";
import { pageSize } from "../constants";
import type { ICharacter } from "../types";
import Character from "./Character";
import Loader from "./Loader";
import Pagination from "./Pagination";

interface CharacterListProps {
  characters: ICharacter[];
  onCharacterClick: (character: ICharacter) => void;
}

function CharacterList({ characters, onCharacterClick }: CharacterListProps) {
  const [page, setPage] = useState<number>(0);
  const pageCount = Math.ceil(characters.length / pageSize);
  const loading: boolean = !characters.length;

  const renderCharacters = (): ReactNode => {
    if (loading) return <Loader />;

    const start = page * pageSize;
    const end = start + pageSize;

    return characters
      .map((c) => (
        <Character
          character={c}
          key={c.id}
          onCharacterClick={onCharacterClick}
        />
      ))
      .slice(start, end);
  };

  const handleOnPrevious = () =>
    setPage((previous) => Math.max(previous - 1, 0));
  const handleOnNext = () =>
    setPage((previous) => Math.min(previous + 1, pageCount - 1));

  return (
    <section id="charcters-list" className="g-card">
      <header>
        <h2>Character List</h2>
      </header>
      <ul className="characters">{renderCharacters()}</ul>
      <Pagination
        currentPage={page}
        pageCount={pageCount}
        loading={loading}
        previous={handleOnPrevious}
        next={handleOnNext}
      />
    </section>
  );
}

export default CharacterList;
