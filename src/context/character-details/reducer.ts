interface CharacterDetails {
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
  
  
  export interface CharacterDetailsState {
    characterDetails: CharacterDetails | null;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialCharacterDetailsState: CharacterDetailsState = {
    characterDetails: null,
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export type CharacterDetailsActions =
    | { type: 'FETCH_CHARACTER_DETAILS_REQUEST' }
    | { type: 'FETCH_CHARACTER_DETAILS_SUCCESS'; payload: CharacterDetails }
    | { type: 'FETCH_CHARACTER_DETAILS_FAILURE'; payload: string };
  
  export const characterDetailsReducer = (
    state: CharacterDetailsState = initialCharacterDetailsState,
    action: CharacterDetailsActions
  ): CharacterDetailsState => {
    switch (action.type) {
      case 'FETCH_CHARACTER_DETAILS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_CHARACTER_DETAILS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          characterDetails: action.payload,
        };
      case 'FETCH_CHARACTER_DETAILS_FAILURE':
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
  
  export type CharacterDetailsDispatch = React.Dispatch<CharacterDetailsActions>;
  