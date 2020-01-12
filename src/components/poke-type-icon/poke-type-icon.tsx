import React, { FC } from "react"
import { pokeColors } from "../../styles/poke-colors"
import { Box, BoxProps } from "rebass"
import { prop } from "lodash/fp"

type Props = {
  name: string
  size: number
} & BoxProps

const PokeTypeIcon: FC<Props> = ({ name, size, css, children, ...rest }) => {
  const color = prop(name, pokeColors)

  return (
    <Box {...rest}>
      <svg
        style={{ fill: color, width: size, height: size }}
        viewBox="0 0 12 12"
      >
        <title>{name}</title>
        <use href={`/images/poke-type-icons.svg#${name}`} />
      </svg>
    </Box>
  )
}

export default PokeTypeIcon
