import { SITE_TITLE_TEMPLATE } from "../../constants"
import React, { FC, Fragment } from "react"
import { useSelector } from "react-redux"
import { Pokemon, PokeStat, pokedexSelectors } from "../../store/pokedex"
import { pokeFormatters } from "../../utils"

import Helmet from "react-helmet"
import PokeTypeIcon from "../poke-type-icon"
import { Box, Card, Flex, Heading, Image, Text } from "rebass"
import { map } from "lodash/fp"

type Props = {
  pokemon: Pokemon
}

type MetaSectionProps = {
  heading: string
}

const borderBottomStyles = {
  borderBottomWidth: "4px",
  borderBottomColor: "background",
  borderBottomStyle: "solid"
}

const MetaSection: FC<MetaSectionProps> = ({ heading, children }) => (
  <Box
    sx={{
      color: "accent",
      maxWidth: "6rem",
      width: "100%",
      mr: 2,
      "&:last-of-type": { mr: 0 },
      "& > span": { fontSize: 1, fontWeight: "heading" }
    }}
  >
    <Text as="h3" variant="styles.label">
      {heading}
    </Text>
    {children}
  </Box>
)

const StatSection: FC<PokeStat> = ({ name, amount }) => (
  <Box sx={{ mb: 3, "&:last-of-type": { mb: 0 } }}>
    <Text variant="styles.label" sx={{ fontWeight: 700, mb: 1 }}>
      {name}
    </Text>
    <Box
      sx={{
        bg: "background",
        borderRadius: "6px",
        height: 6,
        width: "100%",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          bg: "highlight",
          borderRadius: "6px",
          height: "100%",
          width: `${amount / 1.75}%`
        }}
      ></Box>
    </Box>
  </Box>
)

const PokeDetails: FC<Props> = ({ pokemon }) => {
  const { id, name, description, height, weight, typeIds, stats } = pokemon
  const { decimetersToMeters, hectogramsToKilograms } = pokeFormatters
  const pokeTypeNames = useSelector(
    pokedexSelectors.selectTypeNamesOfCurrentPokemon
  )

  return (
    <Fragment>
      <Helmet>
        <title>{`${name}${SITE_TITLE_TEMPLATE}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Card
        sx={{
          p: 6
        }}
      >
        <Flex
          as="header"
          sx={{
            ...borderBottomStyles,
            alignItems: "center",
            p: 4
          }}
        >
          <Box sx={{ mr: 5 }}>
            <Box
              sx={{
                borderColor: "background",
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
          <Box sx={{ flex: 1 }}>
            <Heading as="h1" sx={{ color: "accent", fontSize: 4, mb: 2 }}>
              {name}
            </Heading>
            <Flex>
              <MetaSection heading="Height">
                <Text as="span">{`${decimetersToMeters(height)}m`}</Text>
              </MetaSection>
              <MetaSection heading="Weight">
                <Text as="span">{`${hectogramsToKilograms(weight)}kg`}</Text>
              </MetaSection>
              <MetaSection heading={typeIds.length > 1 ? "Types" : "Type"}>
                <Box sx={{ lineHeight: "0", mt: ".25rem" }}>
                  {map(
                    t => (
                      <PokeTypeIcon
                        key={t}
                        name={t}
                        size={24}
                        sx={{
                          display: "inline-block",
                          lineHeight: "inherit",
                          mr: 2,
                          "&:last-of-type": { mr: 0 }
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
        <Text
          as="p"
          sx={{
            ...borderBottomStyles,
            fontSize: 1,
            p: 4
          }}
        >
          {description}
        </Text>
        <Box sx={{ p: 4 }}>
          {map(
            s => (
              <StatSection key={s.name} {...s} />
            ),
            stats
          )}
        </Box>
      </Card>
    </Fragment>
  )
}

export default PokeDetails
