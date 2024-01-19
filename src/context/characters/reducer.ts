interface Character {
    id: number;
    name: string;
    // Add other character properties as needed
  }
  
  export interface CharactersState {
    characters: Character[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: CharactersState = {
    characters: [],
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
          characters: action.payload,
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
  export type CharactersDispatch = React.Dispatch<CharactersActions>