import React, { FC, Fragment, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { pokedexSelectors, pokedexActions } from "../../store/pokedex"
import { useHistory, useParams } from "react-router-dom"
import { getPokeSpriteURL, preloadImages } from "../../utils"

import PokePicker from "../poke-picker"
import { PokeDetails } from "../pokemon"
import { LoaderBlanket } from "../loader"
import { Flex } from "rebass"

import { includes } from "lodash/fp"

const Pokedex: FC = () => {
  const [loading, setLoading] = useState(true)
  const { selectCurrentPokemon, selectPokemonIds } = pokedexSelectors
  const allPokemonIds = useSelector(selectPokemonIds)
  const currentPokemon = useSelector(selectCurrentPokemon)

  const { id } = useParams()
  const pokeId = !isNaN(Number(id)) ? Number(id) : null
  const pokeIdIsValid = includes(pokeId, allPokemonIds)

  const dispatch = useDispatch()
  const history = useHistory()
  const sprite = getPokeSpriteURL()

  useEffect(() => {
    preloadImages([sprite]).then(() => setLoading(false))
  }, [sprite])

  useEffect(() => {
    const id = pokeIdIsValid ? pokeId : null

    if (id) {
      dispatch(pokedexActions.setCurrentPokemon(id))
    } else {
      history.push("/")
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
          <Flex
            sx={{
              flexDirection: "column",
              flex: "0 1 auto",
              ml: 5,
              maxWidth: "35rem"
            }}
          >
            <PokeDetails pokemon={currentPokemon} />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default Pokedex
