import { useEffect } from "react";
import { useCharactersDispatch } from "../context/characters/context";
import { Outlet } from "react-router-dom";
import { fetchCharacters } from "../context/characters/actions";

const CharacterContainer = () => {
  const charactersDispatch = useCharactersDispatch();

  useEffect(() => {
    
    fetchCharacters(charactersDispatch);
  }, [charactersDispatch]);

  return <Outlet />;
};

export default CharacterContainer;
