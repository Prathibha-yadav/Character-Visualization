import { useEffect, Suspense } from "react";
import CharacterContainer from "./charactersContainer";
import CharactersList from "./CharactersList";
import { useCharactersDispatch, useCharactersState } from "../context/characters/context";
import { fetchCharacters } from "../context/characters/actions";

const Characters = () => {
  const dispatch = useCharactersDispatch();
  const { characters } = useCharactersState();

  useEffect(() => {
    fetchCharacters(dispatch);
  }, [dispatch]);

  return (
    <>
       <div className="text-center my-8">
      <h1 className="text-2xl font-medium tracking-tight text-slate-800">
        Character Visualization
      </h1>
      <h5 className="text-xl font-medium tracking-tight text-slate-300">
        From The Rick and Morty API
      </h5>
    </div>

      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <CharacterContainer />
        {/* Keep the characters prop structure as it is */}
        <CharactersList characters={characters} />
      </Suspense>
    </>
  );
};

export default Characters;