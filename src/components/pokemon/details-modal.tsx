import React, { FC } from "react"
import { useHistory } from "react-router-dom"
import Transition from "react-transition-group/Transition"
import { PokeDetails } from "../pokemon"
import { Pokemon } from "../../store/pokedex"
import { Box, Button } from "rebass"

import { isEmpty } from "lodash/fp"

type Props = {
  animate: boolean
  pokemon: Pokemon
}

const duration = 200

const defaultStyle = {
  backgroundColor: "rgba(26,26,26, 0.9)",
  display: "flex",
  transition: `opacity ${duration}ms ease-in-out`,
  top: 0,
  left: 0,
  opacity: 0,
  position: "absolute" as "absolute",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  willChange: "opacity",
  zIndex: 1
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" }
}

const PokeDetailsModal: FC<Props> = ({ animate, pokemon }) => {
  const history = useHistory()

  const handleOnClick = () => {
    setTimeout(() => history.push("/"), duration)
  }

  return (
    <Transition in={animate} timeout={duration}>
      {state => {
        console.log(state)
        return (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Button
              sx={{ position: "absolute", top: 2, right: 2 }}
              onClick={handleOnClick}
            >
              Close
            </Button>
            <Box sx={{ bg: "muted" }}>
              {!isEmpty(pokemon) && <PokeDetails pokemon={pokemon} />}
            </Box>
          </div>
        )
      }}
    </Transition>
  )
}

export default PokeDetailsModal
