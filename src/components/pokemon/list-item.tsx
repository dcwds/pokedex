import React, { FC, memo } from "react"
import { useDispatch } from "react-redux"
import { Pokemon, pokedexActions } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text } from "rebass"

const PokemonItem: FC<Pokemon> = ({ id, name, spritePos }) => {
  const { setCurrentPokemon } = pokedexActions
  const dispatch = useDispatch()
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
        onClick={() => dispatch(setCurrentPokemon(id))}
      >
        <Box
          variant={"styles.hasSprite"}
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
            lineHeight: "body",
            mt: ".25rem",
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
export default memo(PokemonItem)
