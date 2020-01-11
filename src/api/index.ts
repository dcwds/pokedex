import { Pokemon, PokeType, PokeStat } from "../store/pokedex"
import pokeCoords from "../data/poke-sprite-coords.json"
import { formatName } from "../utils"
import { concat, find, map, reverse, reduce, lowerCase, prop } from "lodash/fp"

import { AppState } from "../store"

export const getAllPokemon = (state: AppState) => {
  const pokeIds = Array.from(Array(152).keys()).slice(1)
  const allPokemon = map(async (id: number) => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await pokemon.json()

    const pokeName = formatName(data.name)
    const pokeTypes = map(
      ({ type }) => lowerCase(type.name),
      reverse(data.types)
    )
    const pokeKeywords = concat(pokeName, pokeTypes)

    return {
      id: data.id,
      name: pokeName,
      height: data.height,
      weight: data.weight,
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
      stats: reduce(
        (stats: PokeStat[], stat) => {
          stats.push({
            name: formatName(stat.stat.name),
            amount: stat.base_stat
          })
          return stats
        },
        [],
        reverse(data.stats)
      ),
      keywords: pokeKeywords,
      spritePos: {
        x: prop("x", prop(data.id, pokeCoords)),
        y: prop("y", prop(data.id, pokeCoords))
      }
    } as Pokemon
  }, pokeIds)

  return Promise.all(allPokemon)
}
