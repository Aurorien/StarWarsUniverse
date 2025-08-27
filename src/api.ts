import type { ICharacter, IHomeworld } from "./types";

export const fetchCharacters = async (): Promise<ICharacter[]> => {
  const res = await fetch("https://swapi.online/api/characters");
  const characters = (await res.json()) as ICharacter[];
  return characters;
};

export const fetchHomeworld = async (
  homeworldId: number
): Promise<IHomeworld> => {
  const res = await fetch(`https://swapi.online/api/planets/${homeworldId}`);
  const homeworld = (await res.json()) as IHomeworld;
  return homeworld;
};
