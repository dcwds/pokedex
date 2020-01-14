import React, { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PokeType, pokedexSelectors } from "../../store/pokedex"
import { filtersActions, filtersSelectors } from "../../store/filters"
import PokeTypeIcon from "../poke-type-icon"
import { Button, Box } from "rebass"
import { pokeColors } from "../../styles/poke-colors"

import { includes, map, prop } from "lodash/fp"

type PokeFilterProps = {
  active: boolean
} & PokeType

const PokeFilter: FC<PokeFilterProps> = ({ id, name, active }) => {
  const dispatch = useDispatch()
  const pokeTypeColor: string = prop(name, pokeColors)

  return (
    <Button
      variant="buttons.listPrimary"
      sx={{
        bg: active ? pokeTypeColor : "gray.0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        ":hover": {
          bg: pokeTypeColor,
          "& svg": {
            fill: "white"
          }
        },
        "& svg": {
          fill: active ? "white" : pokeTypeColor
        }
      }}
      onClick={() => dispatch(filtersActions.setFilter(id))}
    >
      <PokeTypeIcon sx={{ lineHeight: 0 }} name={name} size={20} />
    </Button>
  )
}

const PokeFilters: FC = () => {
  const filters = useSelector(pokedexSelectors.selectPokeTypes)
  const activeFiltersById = useSelector(filtersSelectors.selectActiveFilterIds)

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
        gridGap: ".25rem",
        mb: 2
      }}
    >
      {map(f => {
        const active = includes(f.id, activeFiltersById)

        return <PokeFilter key={f.id} active={active} {...f} />
      }, filters)}
    </Box>
  )
}

export default PokeFilters
