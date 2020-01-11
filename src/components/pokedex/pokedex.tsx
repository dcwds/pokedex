import React, { FC, Fragment, useEffect, useState } from "react"
import usePokeSpriteImg from "../../hooks/usePokeSpriteImg"
import preloadImages from "../../utils/preload-images"

import PokePicker from "../poke-picker"
import { LoaderBlanket } from "../loader"
import { Flex } from "rebass"

const Pokedex: FC = () => {
  const [loading, setLoading] = useState(true)
  const sprite = usePokeSpriteImg()

  useEffect(() => {
    preloadImages([sprite]).then(() => setLoading(false))
  }, [sprite])

  return (
    <Fragment>
      <LoaderBlanket animate={loading} />
      <Flex as="main" sx={{ p: [2, 4], flexDirection: "column", flex: "1" }}>
        <Flex sx={{ flexDirection: "column", flex: "1" }}>
          <Flex sx={{ flexDirection: "column", flex: "1" }} width={[1, 2 / 5]}>
            <PokePicker />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default Pokedex
