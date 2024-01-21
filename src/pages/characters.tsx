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
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending Characters
        </h2>
      </div>

      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <CharacterContainer />
        {/* Keep the characters prop structure as it is */}
        <CharactersList characters={characters.results} />
      </Suspense>
    </>
  );
};

export default Characters;
