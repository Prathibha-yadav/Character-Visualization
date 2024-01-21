import React, { createContext, useContext, useReducer } from "react";
import {
  characterDetailsReducer,
  initialCharacterDetailsState,
  CharacterDetailsState,
  CharacterDetailsDispatch,
} from "./reducer";

const CharacterDetailsStateContext = createContext<CharacterDetailsState>(
  initialCharacterDetailsState
);
const CharacterDetailsDispatchContext = createContext<CharacterDetailsDispatch>(() => {});

export const CharacterDetailsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(characterDetailsReducer, initialCharacterDetailsState);

  return (
    <CharacterDetailsStateContext.Provider value={state}>
      <CharacterDetailsDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterDetailsDispatchContext.Provider>
    </CharacterDetailsStateContext.Provider>
  );
};

export const useCharacterDetailsState = () => useContext(CharacterDetailsStateContext);
export const useCharacterDetailsDispatch = () => useContext(CharacterDetailsDispatchContext);
