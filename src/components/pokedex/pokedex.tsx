import React, { FC, Fragment, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { pokedexSelectors, pokedexActions } from "../../store/pokedex"
import { useHistory, useParams } from "react-router-dom"
import { getPokeSpriteURL, preloadImages } from "../../utils"

import PokePicker from "../poke-picker"
import { LargeScreen, NotLargeScreen } from "../media-queries"
import { PokeDetails, PokeDetailsModal } from "../pokemon"
import { LoaderBlanket } from "../loader"
import { Flex } from "rebass"

import { includes, isEmpty } from "lodash/fp"

const Pokedex: FC = () => {
  const [loading, setLoading] = useState(true)
  const { selectCurrentPokemon, selectPokemonIds } = pokedexSelectors
  const allPokemonIds = useSelector(selectPokemonIds)
  const currentPokemon = useSelector(selectCurrentPokemon)
  const pokemonIsSelected = !isEmpty(currentPokemon)

  const { id } = useParams()
  const pokeId = !isNaN(Number(id)) ? Number(id) : null
  const pokeIdIsValid = includes(pokeId, allPokemonIds)

  const dispatch = useDispatch()
  const history = useHistory()
  const sprite = getPokeSpriteURL()

  console.log(`Pokemon is selected: ${pokemonIsSelected}`)

  useEffect(() => {
    preloadImages([sprite]).then(() => setLoading(false))
  }, [sprite])

  useEffect(() => {
    const id = pokeIdIsValid ? pokeId : null

    if (id) {
      dispatch(pokedexActions.setCurrentPokemon(id))
    } else {
      history.push("/")
      dispatch(pokedexActions.setCurrentPokemon(null))
    }
  }, [dispatch, history, pokeId, pokeIdIsValid])

  return (
    <Fragment>
      <LoaderBlanket animate={loading} />
      <Flex
        as="main"
        variant="styles.container"
        sx={{ p: [2, 5], flexDirection: "column", flex: "1" }}
      >
        <Flex sx={{ flex: "1" }}>
          <Flex sx={{ flexDirection: "column", flex: "1 1 auto" }}>
            <PokePicker />
          </Flex>
          <LargeScreen>
            {pokemonIsSelected && (
              <Flex
                sx={{
                  flexDirection: "column",
                  flex: "0 1 auto",
                  ml: 5,
                  maxWidth: "32rem"
                }}
              >
                <PokeDetails pokemon={currentPokemon} />
              </Flex>
            )}
          </LargeScreen>
          <NotLargeScreen>
            <PokeDetailsModal
              pokemon={currentPokemon}
              animate={pokemonIsSelected}
            />
          </NotLargeScreen>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default Pokedex
