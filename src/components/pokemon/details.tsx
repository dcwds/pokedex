import React, { FC, Fragment } from "react"
import { useSelector } from "react-redux"
import { Pokemon, pokedexSelectors } from "../../store/pokedex"
import { pokeFormatters } from "../../utils"
import PokeTypeIcon from "../poke-type-icon"
import { Box, Flex, Image, Text } from "rebass"
import { map } from "lodash/fp"

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
    <Text as="h3" variant="styles.label" sx={{ mb: ".25rem" }}>
      {heading}
    </Text>
    {children}
  </Box>
)

const PokeDetails: FC<Props> = ({ pokemon }) => {
  const { id, name, description, height, weight, typeIds, stats } = pokemon
  const { decimetersToMeters, hectogramsToKilograms } = pokeFormatters
  const pokeTypeNames = useSelector(
    pokedexSelectors.selectTypeNamesOfCurrentPokemon
  )

  return (
    <Box variant="styles.container" sx={{ maxWidth: "40rem" }}>
      <Flex
        as="header"
        sx={{
          borderBottomWidth: "4px",
          borderBottomColor: "gray.1",
          borderBottomStyle: "solid",
          p: 4
        }}
      >
        <Box sx={{ mr: 4 }}>
          <Box
            sx={{
              borderColor: "gray.1",
              borderWidth: 4,
              borderStyle: "solid",
              width: 120,
              borderRadius: "100%",
              overflow: "hidden",
              p: 3
            }}
          >
            <Image src={`/images/pokemon/${id}.webp`} alt={name} />
          </Box>
        </Box>
        <Box>
          <Text as="h2" sx={{ fontSize: 4, mb: 2 }}>
            {name}
          </Text>
          <Flex>
            <MetaSection heading="Height">
              <Text as="span">{`${decimetersToMeters(height)}m`}</Text>
            </MetaSection>
            <MetaSection heading="Weight">
              <Text as="span">{`${hectogramsToKilograms(weight)}kg`}</Text>
            </MetaSection>
            <MetaSection heading={typeIds.length > 1 ? "Types" : "Type"}>
              <Box sx={{ lineHeight: "0", mt: ".5rem" }}>
                {map(
                  t => (
                    <PokeTypeIcon
                      key={t}
                      name={t}
                      size={24}
                      sx={{
                        display: "inline-block",
                        lineHeight: "inherit",
                        mr: 2
                      }}
                    />
                  ),
                  pokeTypeNames
                )}
              </Box>
            </MetaSection>
          </Flex>
        </Box>
      </Flex>
      <Text as="p" sx={{ color: "rgba(255,255,255, 0.5)", fontSize: 1, p: 4 }}>
        {description}
      </Text>
    </Box>
  )
}

export default PokeDetails
