import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCharacterDetails } from '../context/character-details/actions';
import { useCharacterDetailsDispatch, useCharacterDetailsState } from '../context/character-details/context';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const handleBackButtonClick = () => {
    navigate('/character'); 
  };

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <div className="bg-gray-200 rounded-lg shadow-xl overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 px-4">{characterDetails.name}</h2>
        <div className="px-4">
        <img className="rounded-lg mb-4  max-h-48 " src={characterDetails.image} alt={characterDetails.name} />
        </div>
        <div className="px-4 mb-6">
          <p className="text-lg font-semibold">Character Information:</p>
          <p className="mb-2">
            <span className="font-bold">ID:</span> {characterDetails.id}
          </p>
          <p className="mb-2">
            <span className="font-bold">Status:</span> {characterDetails.status}
          </p>
          <p className="mb-2">
            <span className="font-bold">Species:</span> {characterDetails.species}
          </p>
          <p className="mb-2">
            <span className="font-bold">Gender:</span> {characterDetails.gender}
          </p>
          <p className="mb-2">
            <span className="font-bold">Location:</span> {characterDetails.location.name}
          </p>
          <p className="mb-2">
            <span className="font-bold">Origin:</span> {characterDetails.origin.name}
          </p>
          <p className="mb-2">
            <span className="font-bold">Type:</span> {characterDetails.type || 'N/A'}
          </p>
          <p className="mb-2">
            <span className="font-bold">URL:</span> {characterDetails.url}
          </p>
        </div>

        <div className="px-4 mb-6">
          <p className="text-lg font-semibold">Additional Details:</p>
          <p className="mb-2">
            <span className="font-bold">Created:</span> {formatDate(characterDetails.created)}
          </p>
          <p className="mb-2">
            <span className="font-bold">Episodes:</span>{' '}
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

        <div className="px-4 mt-4"></div>
        <button
            className="bg-blue-500 text-white px-4 py-2 pd-2 ml-4 rounded"
            onClick={handleBackButtonClick}
          >
            Back to characters
          </button>
          <div className="mb-4"></div>
      </div>
    </div>
  );
};

export default CharacterDetails;
