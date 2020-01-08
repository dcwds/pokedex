import React, { FC } from "react"
import { useSelector } from "react-redux"
import { PokeType, pokedexSelectors } from "../../store/pokedex"
import { Flex, Box } from "rebass"
import { lowerCase, map } from "lodash/fp"

const PokeFilter: FC<PokeType> = ({ id, name }) => (
  <Box sx={{ height: 30, width: 30 }}>
    <svg style={{ fill: "white" }} viewBox="0 0 28 28">
      <title>{name}</title>
      <use href={`/images/poke-type-icons.svg#${lowerCase(name)}`} />
    </svg>
  </Box>
)

const PokeFilters: FC = () => {
  const filters = useSelector(pokedexSelectors.selectPokeTypes)

  return (
    <Flex>
      {map(
        f => (
          <PokeFilter key={f.id} {...f} />
        ),
        filters
      )}
    </Flex>
  )
}

export default PokeFilters
