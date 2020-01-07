import { Pokemon, PokeType } from "../store/pokedex"
import { formatName } from "../utils"
import { concat, find, map, reverse, reduce } from "lodash/fp"

import { AppState } from "../store"

export const getAllPokemon = (state: AppState) => {
  const pokeIds = Array.from(Array(152).keys()).slice(1)
  const allPokemon = map(async (id: number) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await pokemon.json()

    const pokeName = formatName(data.name)
    const pokeTypes = map(
      ({ type }) => formatName(type.name),
      reverse(data.types)
    )
    const pokeKeywords = concat(pokeName, pokeTypes)

    return {
      id: data.id,
      name: pokeName,
      typeIds: reduce(
        (ids: number[], type: PokeType) => {
          if (find(name => name === type.name, pokeTypes)) {
            ids.push(type.id)
          }

          return ids
        },
        [],
        state.pokedex.types
      ),
      keywords: pokeKeywords
    } as Pokemon
  }, pokeIds)

  return Promise.all(allPokemon)
}
