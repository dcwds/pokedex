import React, { FC } from "react"
import Transition from "react-transition-group/Transition"
import { colors } from "../../styles/theme"
import Loader from "./loader"

type Props = {
  animate: boolean
}

const duration = 500

const defaultStyle = {
  backgroundColor: colors.muted,
  display: "flex",
  transition: `opacity ${duration}ms ease`,
  opacity: 1,
  position: "absolute" as "absolute",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  willChange: "opacity",
  zIndex: 2
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" }
}

const LoaderBlanket: FC<Props> = ({ animate }) => (
  <Transition in={animate} timeout={duration}>
    {state => (
      <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
        <Loader size={80} />
      </div>
    )}
  </Transition>
)

export default LoaderBlanket
