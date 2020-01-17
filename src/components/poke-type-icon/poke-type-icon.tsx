import React, { FC } from "react"
import { pokeColors } from "../../styles/poke-colors"
import { Box, BoxProps } from "rebass"
import { merge, prop } from "lodash/fp"

type Props = {
  name: string
  size: number
} & BoxProps

const PokeTypeIcon: FC<Props> = ({
  name,
  size,
  css,
  children,
  sx,
  ...rest
}) => {
  const color: string = prop(name, pokeColors)
  const style = merge(
    {
      "& > svg": {
        fill: color,
        width: size,
        height: size,
        transition: "fill 0.2s ease-in-out"
      }
    },
    sx
  )

  return (
    <Box sx={style} {...rest}>
      <svg viewBox="0 0 12 12">
        <use href={`/images/poke-type-icons.svg#${name}`} />
      </svg>
    </Box>
  )
}

export default PokeTypeIcon
