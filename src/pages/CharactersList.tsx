// CharactersList.tsx
import React from "react";

interface Character {
  id: number;
  name: string;
  // Add other character properties as needed
}

interface CharactersListProps {
  characters: { results: Character[] } | null;
}

const CharactersList: React.FC<CharactersListProps> = ({ characters }) => {
  if (!characters) {
    return <div>Loading...</div>; // Add a loading state if characters are not available yet
  }

  if (!Array.isArray(characters.results)) {
    console.error("Characters is not an array:", characters.results);
    return null; // or handle the error in a way that makes sense for your application
  }

  return (
    <div>
      <h2>Characters List</h2>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <p>ID: {character.id}</p>
            <p>Name: {character.name}</p>
            {/* Add other details if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
