import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, CharactersState, CharactersDispatch } from "./reducer";

const CharactersStateContext = createContext<CharactersState>(initialState);
const CharactersDispatchContext = createContext<CharactersDispatch>(() => {});

export const CharactersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CharactersStateContext.Provider value={state}>
      <CharactersDispatchContext.Provider value={dispatch}>
        {children}
      </CharactersDispatchContext.Provider>
    </CharactersStateContext.Provider>
  );
};

export const useCharactersState = () => useContext(CharactersStateContext);
export const useCharactersDispatch = () => useContext(CharactersDispatchContext);
