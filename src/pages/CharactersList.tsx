import React from "react";
import { Link } from "react-router-dom";
import { Character } from "../context/characters/reducer";

interface CharactersListProps {
  characters: {
    info: { count: number; pages: number; next: string | null; prev: string | null };
    results?: Character[] | { info: any; results: Character[] };
  };
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  if (!characters || !characters.results) {
    return <div>Loading...</div>;
  }

  const characterArray = Array.isArray(characters.results)
    ? characters.results
    : characters.results.results || [];

  if (characterArray.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {characterArray.map((character) => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer transition transform hover:scale-105 duration-300">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <p className="text-lg font-semibold">{character.name}</p>
            <p>ID: {character.id}</p>
            <p>Gender: {character.gender}</p>
            <p>Location: {character.location?.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
