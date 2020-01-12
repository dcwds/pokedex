import React, { FC, Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { pokedexSelectors } from "../../store/pokedex"
import { getPokeSpriteURL } from "../../utils"
import preloadImages from "../../utils/preload-images"

import PokePicker from "../poke-picker"
import { PokeDetails } from "../pokemon"
import { LoaderBlanket } from "../loader"
import { Flex } from "rebass"

const Pokedex: FC = () => {
  const [loading, setLoading] = useState(true)
  const sprite = getPokeSpriteURL()
  const currentPokemon = useSelector(pokedexSelectors.selectCurrentPokemon)

  useEffect(() => {
    preloadImages([sprite]).then(() => setLoading(false))
  }, [sprite])

  return (
    <Fragment>
      <LoaderBlanket animate={loading} />
      <Flex as="main" sx={{ p: [2, 5], flexDirection: "column", flex: "1" }}>
        <Flex sx={{ flex: "1" }}>
          <Flex sx={{ flexDirection: "column", flex: "1" }} width={[1, 2 / 5]}>
            <PokePicker />
          </Flex>
          <Flex
            sx={{ flexDirection: "column", flex: "1", ml: 5 }}
            width={[1, 3 / 5]}
          >
            <PokeDetails pokemon={currentPokemon} />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default Pokedex
