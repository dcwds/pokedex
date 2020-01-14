import React, { FC, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Pokemon, pokedexActions, pokedexSelectors } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text } from "rebass"

const PokemonItem: FC<Pokemon> = ({ id, name, spritePos }) => {
  const { setCurrentPokemon } = pokedexActions
  const { selectCurrentPokemonId } = pokedexSelectors

  const dispatch = useDispatch()
  const isSelected = useSelector(selectCurrentPokemonId) === id ? true : false
  const size = "40px"

  return (
    <AspectRatio ratio={1}>
      <Box
        variant={`buttons.${isSelected ? "selected" : "listPrimary"}`}
        role="button"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 1,
          py: 1
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
