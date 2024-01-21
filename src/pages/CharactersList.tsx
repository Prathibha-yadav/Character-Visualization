// CharactersList.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Character {
  id: number;
  name: string;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

interface CharactersListProps {
  characters: { results: Character[] } | null;
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  if (!characters) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(characters.results)) {
    console.error("Characters is not an array:", characters.results);
    return null;
  }

  return (
    <div className="container mx-auto my-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {characters.results.map((character) => (
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
            <p>Location: {character.location.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharactersList;
