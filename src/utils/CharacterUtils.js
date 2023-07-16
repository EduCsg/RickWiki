const formatCharacter = (data) => {
  return {
    id: data.id,
    name: data.name,
    species: data.species,
    origin: data.origin.name,
    status: data.status,
    imageURL: data.image,
    episodes: data.episode.length,
    location: data.location.name,
  };
};

export { formatCharacter };
