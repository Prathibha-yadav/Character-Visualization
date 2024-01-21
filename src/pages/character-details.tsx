import React, { useEffect } from 'react';
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
        await fetchCharacterDetails(characterDetailsDispatch, parseInt(id, 10));
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    fetchData();
  }, [characterDetailsDispatch, id]);

  const formatDate = (dateString: string | number | Date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!characterDetails) {
    return <div>No character details available</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-4xl font-bold mb-4">{characterDetails.name}</h2>
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-1/2 h-auto rounded"
            src={characterDetails.image}
            alt={characterDetails.name}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mb-4">
            <p className="text-lg font-semibold">ID: {characterDetails.id}</p>
            <p className="text-lg">Status: {characterDetails.status}</p>
            <p className="text-lg">Species: {characterDetails.species}</p>
            <p className="text-lg">Gender: {characterDetails.gender}</p>
            <p className="text-lg">Location: {characterDetails.location.name}</p>
            <p className="text-lg">Origin: {characterDetails.origin.name}</p>
            <p className="text-lg">Type: {characterDetails.type}</p>
            <p className="text-lg">URL: {characterDetails.url}</p>
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold">Created: {formatDate(characterDetails.created)}</p>
            <p className="text-lg">
              Episode:
              {characterDetails.episode.map((episodeLink, index) => (
                <a
                  key={index}
                  href={episodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  Episode {index + 1}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
