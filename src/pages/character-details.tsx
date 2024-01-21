import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../context/character-details/actions';
import { useCharacterDetailsDispatch, useCharacterDetailsState } from '../context/character-details/context';

const CharacterDetails = () => {
  const { id } = useParams();
  const characterDetailsDispatch = useCharacterDetailsDispatch();
  const { characterDetails, isLoading, isError, errorMessage } = useCharacterDetailsState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const characterId = typeof id === 'string' ? parseInt(id, 10) : undefined;
  
        if (characterId !== undefined) {
          await fetchCharacterDetails(characterDetailsDispatch, characterId);
        } else {
          console.error('Invalid character ID:', id);
        }
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };
  
    fetchData();
  }, [characterDetailsDispatch, id]);
  

  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-8">Error: {errorMessage}</div>;
  }

  if (!characterDetails) {
    return <div className="text-center mt-8">No character details available</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 px-4">{characterDetails.name}</h2>
        <div className="px-4">
        <img className="rounded-lg mb-4  max-h-48 " src={characterDetails.image} alt={characterDetails.name} />
        </div>
        <div className="px-4 mb-4">
          <p>ID: {characterDetails.id}</p>
          <p>Status: {characterDetails.status}</p>
          <p>Species: {characterDetails.species}</p>
          <p>Gender: {characterDetails.gender}</p>
          <p>Location: {characterDetails.location.name}</p>
          <p>Origin: {characterDetails.origin.name}</p>
          <p>Type: {characterDetails.type}</p>
          <p>URL: {characterDetails.url}</p>
        </div>
        <div className="px-4">
          <p>Created: {formatDate(characterDetails.created)}</p>
          <p>
            Episode:{' '}
            {characterDetails.episode.map((episodeLink, index) => (
              <a
                key={index}
                href={episodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 underline"
              >
                Episode {index + 1}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
