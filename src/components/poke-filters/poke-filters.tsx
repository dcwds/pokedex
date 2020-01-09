import React, { FC } from "react"
import { useSelector } from "react-redux"
import { PokeType, pokedexSelectors } from "../../store/pokedex"
import { Button, Box } from "rebass"
import { pokeColors } from "../../styles/poke-colors"

import { map, prop } from "lodash/fp"

const PokeFilter: FC<PokeType> = ({ name }) => {
  const pokeTypeColor: string = prop(name, pokeColors)

  return (
    <Button
      variant="buttons.listPrimary"
      sx={{
        bg: "gray.0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        "&:hover": {
          bg: pokeTypeColor,
          "& > svg": {
            fill: "white"
          }
        },
        "& > svg": {
          fill: pokeTypeColor,
          height: "20px",
          width: "20px",
          transition: "fill 0.2s ease-in-out"
        }
      }}
    >
      <svg viewBox="0 0 12 12">
        <title>{name}</title>
        <use href={`/images/poke-type-icons.svg#${name}`} />
      </svg>
    </Button>
  )
}

const PokeFilters: FC = () => {
  const filters = useSelector(pokedexSelectors.selectPokeTypes)

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
        gridGap: ".25rem",
        mb: 2
      }}
    >
      {map(
        f => (
          <PokeFilter key={f.id} {...f} />
        ),
        filters
      )}
    </Box>
  )
}

export default PokeFilters
