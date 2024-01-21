import React from 'react';


export interface Character {
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

export interface CharactersState {
  characters: {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
  };
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export const initialState: CharactersState = {
  characters: {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
  },
  isLoading: false,
  isError: false,
  errorMessage: '',
};

export type CharactersActions =
  | { type: 'FETCH_CHARACTERS_REQUEST' }
  | { type: 'FETCH_CHARACTERS_SUCCESS'; payload: Character[] }
  | { type: 'FETCH_CHARACTERS_FAILURE'; payload: string };

export const reducer = (
  state: CharactersState = initialState,
  action: CharactersActions
): CharactersState => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        characters: {
          ...state.characters,
          results: action.payload,
        },
      };
    case 'FETCH_CHARACTERS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export type CharactersDispatch = React.Dispatch<CharactersActions>;
