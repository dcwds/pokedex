import React, { FC, memo } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Pokemon, pokedexSelectors } from "../../store/pokedex"
import AspectRatio from "../aspect-ratio"
import { Box, Text } from "rebass"

const PokemonItem: FC<Pokemon> = ({ id, name, spritePos }) => {
  const { selectCurrentPokemonId } = pokedexSelectors
  const isSelected = useSelector(selectCurrentPokemonId) === id ? true : false
  const size = "40px"

  return (
    <Link to={`/pokemon/${id}`}>
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
    </Link>
  )
}
export default memo(PokemonItem)
