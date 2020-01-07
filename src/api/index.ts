import { Pokemon } from "../store/pokedex"
import { formatName } from "../utils"
import { map, reverse } from "lodash/fp"

export const getAllPokemon = () => {
  const pokeIds = Array.from(Array(152).keys()).slice(1)
  const allPokemon = map(async (id: number) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await pokemon.json()

    return {
      id: data.id,
      name: formatName(data.name),
      types: map(({ type }) => formatName(type.name), reverse(data.types))
    } as Pokemon
  }, pokeIds)

  return Promise.all(allPokemon)
}
