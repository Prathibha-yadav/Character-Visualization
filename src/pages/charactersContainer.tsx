import { useEffect } from "react";
import { useCharactersDispatch } from "../context/characters/context";
import { Outlet } from "react-router-dom";
import { fetchCharacters } from "../context/characters/actions";

const CharacterContainer = () => {
  const charactersDispatch = useCharactersDispatch();

  useEffect(() => {
    // Fetch characters from the initial data instead of a server call.
    fetchCharacters(charactersDispatch);
  }, [charactersDispatch]);

  return <Outlet />;
};

export default CharacterContainer;
