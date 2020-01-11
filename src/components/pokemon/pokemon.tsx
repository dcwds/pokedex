import React, { FC } from "react"
import { Pokemon } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text } from "rebass"
import isRetina from "is-retina"

const PokemonItem: FC<Pokemon> = ({ name, spritePos }) => {
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
          variant={
            isRetina ? "styles.hasRetinaSprite" : "styles.hasNormalSprite"
          }
          sx={{
            backgroundPositionX: `-${spritePos.x}px`,
            backgroundPositionY: `-${spritePos.y}px`,
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
