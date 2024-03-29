import { API_ENDPOINT } from '../../config/constants';
import { CharactersDispatch } from './reducer';

export const fetchCharacters = async (dispatch: CharactersDispatch) => {
  try {
    dispatch({ type: "FETCH_CHARACTERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/character`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error("Failed to Fetch Characters");
    }

    const data = await response.json();
    const characters = data.results || null;
    console.log(characters)
    console.log(data)
    dispatch({ type: "FETCH_CHARACTERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_CHARACTERS_FAILURE", payload: 'Unable to load characters' });
  }
};

