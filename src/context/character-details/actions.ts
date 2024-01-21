import { API_ENDPOINT } from '../../config/constants';
import { CharacterDetailsDispatch } from './reducer';

export const fetchCharacterDetails = async (
  dispatch: CharacterDetailsDispatch,
  characterId: number
): Promise<void> => {
  try {
    dispatch({ type: "FETCH_CHARACTER_DETAILS_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/character/${characterId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error("Failed to Fetch Character Details");
    }

    const data = await response.json();
    dispatch({ type: "FETCH_CHARACTER_DETAILS_SUCCESS", payload: data });
  } catch (error) {
    console.error('Error fetching character details:', error);
    dispatch({
      type: "FETCH_CHARACTER_DETAILS_FAILURE",
      payload: 'Unable to load character details',
    });
  }
};
