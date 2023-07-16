const BaseURL = "https://rickandmortyapi.com/api/character";
import axios from "axios";

const getAllCharacters = async () => {
  const data = await axios
    .get(BaseURL)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const character = {
    name: data.name,
    species: data.species,
    origin: data.origin.name,
    status: data.status,
    gender: data.gender,
    imageURL: data.image,
    episodes: data.episode.length,
    location: data.location.name,
  };

  return character;
};

const getCharacter = async (id) => {
  const data = await axios
    .get(`${BaseURL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const character = {
    name: data.name,
    species: data.species,
    origin: data.origin.name,
    status: data.status,
    gender: data.gender,
    imageURL: data.image,
    episodes: data.episode.length,
    location: data.location.name,
  };

  return character;
};

export { getAllCharacters, getCharacter };
