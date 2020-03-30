/* eslint-disable no-plusplus */
import data from './data/pokemon/pokemon.js';

export const dinamicSearchPokemon = (wordIntroduced) => {
  const pokemon = [];
  let word;
  for (let i = 0; i < data.pokemon.length; i += 1) {
    word = data.pokemon[i].name.substring(0, wordIntroduced.length);
    if (wordIntroduced.length <= data.pokemon[i].name.length && wordIntroduced.length !== 0) {
      if (wordIntroduced.toLowerCase() === word.toLowerCase()) {
        pokemon.push(data.pokemon[i]);
      }
    }
  }
  return pokemon;
};

export const filterPokemon = (whichFilter, pokemonType) => {
  let result = [];
  switch (whichFilter) {
    case 'type':
      result = data.pokemon.filter(pk => pk.type.includes(pokemonType));
      break;
    case 'resistant':
      result = data.pokemon.filter(pokemon => pokemon.resistant.includes(pokemonType));
      break;
    case 'weaknesses':
      result = data.pokemon.filter(pokemon => pokemon.weaknesses.includes(pokemonType));
      break;
    default:
      // do nothing
  }
  console.log(result);
  return result;
};

export const orderBy = (dataPokemon, whichOrder) => {
  let pokemonOrdened = [];
  switch (whichOrder) {
    case 'max-cp':
      pokemonOrdened = dataPokemon.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
      break;
    case 'max-hp':
      pokemonOrdened = dataPokemon.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
      break;
    case 'a-z':
      pokemonOrdened = dataPokemon.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    default:
      // do nothing
  }
  return pokemonOrdened;
};

export const changeOrder = dataPokemon => dataPokemon.reverse();
