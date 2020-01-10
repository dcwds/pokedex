import React, { FC } from "react"
import isRetina from "is-retina"
import pokeSpriteCoords from "../../data/poke-sprite-coords.json"
import { Pokemon } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text } from "rebass"

import { prop } from "lodash/fp"

const PokemonItem: FC<Pokemon> = ({ id, name }) => {
  const sprite = `/images/poke-sprite-x${isRetina() ? "2" : "1"}.png`
  const coordX = prop("x", prop(id, pokeSpriteCoords))
  const coordY = prop("y", prop(id, pokeSpriteCoords))
  const size = "40px"

  return (
    <AspectRatio ratio={1}>
      <Box
        variant="buttons.listPrimary"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 1
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${sprite})`,
            backgroundPositionX: `-${coordX}px`,
            backgroundPositionY: `-${coordY}px`,
            backgroundSize: "520px",
            width: size,
            height: size
          }}
        />
        <Text
          as="span"
          variant="styles.ellipse"
          sx={{
            display: "block",
            fontSize: 0,
            fontWeight: "heading",
            mt: 1,
            textAlign: "center",
            width: "90%"
          }}
        >
          {name}
        </Text>
      </Box>
    </AspectRatio>
  )
}
export default PokemonItem
