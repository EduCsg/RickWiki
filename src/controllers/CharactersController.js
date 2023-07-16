const BaseURL = "https://rickandmortyapi.com/api/character";
import axios from "axios";

import { formatCharacter } from "../utils/CharacterUtils";

const getAllCharacters = async () => {
  const data = await axios
    .get(BaseURL)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return formatCharacter(data);
};

const getCharacter = async (id) => {
  const data = await axios
    .get(`${BaseURL}/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return formatCharacter(data);
};

const getCharactersByPage = async (page) => {
  const data = await axios
    .get(`${BaseURL}/?page=${page}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const charactersList = data.results.map((data) => {
    return formatCharacter(data);
  });

  return charactersList;
};

export { getAllCharacters, getCharacter, getCharactersByPage };
