import React, { FC, Fragment } from "react"
import { useSelector } from "react-redux"
import { Pokemon, pokedexSelectors } from "../../store/pokedex"
import { pokeFormatters } from "../../utils"
import { Box, Flex, Image, Text } from "rebass"

type Props = {
  pokemon: Pokemon
}

type MetaSectionProps = {
  heading: string
}
const MetaSection: FC<MetaSectionProps> = ({ heading, children }) => (
  <Box
    sx={{
      color: "rgba(255,255,255, 0.8)",
      minWidth: "6rem",
      mr: 2,
      "&:last-of-type": { mr: 0 },
      "& > span": { fontSize: 1, fontWeight: "heading" }
    }}
  >
    <Text as="h3" variant="styles.label" sx={{ mb: 2 }}>
      {heading}
    </Text>
    {children}
  </Box>
)

const PokeDetails: FC<Props> = ({ pokemon }) => {
  const { id, name, height, weight, typeIds, stats } = pokemon
  const { decimetersToMeters, hectogramsToKilograms } = pokeFormatters
  const pokeTypeNames = useSelector(
    pokedexSelectors.selectTypeNamesOfCurrentPokemon
  )

  return (
    <Fragment>
      <Flex as="header">
        <Box
          sx={{
            borderColor: "gray.3",
            borderWidth: 4,
            borderStyle: "solid",
            width: 120,
            borderRadius: "100%",
            overflow: "hidden",
            p: 3,
            mr: 4
          }}
        >
          <Image src={`/images/pokemon/${id}.webp`} alt={name} />
        </Box>
        <Box>
          <Text as="h2" sx={{ fontSize: 4, mb: 4 }}>
            {name}
          </Text>
          <Flex>
            <MetaSection heading="Height">
              <Text as="span">{`${decimetersToMeters(height)}m`}</Text>
            </MetaSection>
            <MetaSection heading="Weight">
              <Text as="span">{`${hectogramsToKilograms(weight)}kg`}</Text>
            </MetaSection>
            <MetaSection heading="Types"></MetaSection>
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  )
}

export default PokeDetails
