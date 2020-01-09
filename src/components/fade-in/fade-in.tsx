import React, { FC, useState, ReactNode, SyntheticEvent } from "react"
import Transition from "react-transition-group/Transition"

type onLoadFunc = (event: SyntheticEvent) => void

type Props = {
  children: (onLoad: onLoadFunc) => ReactNode
}

const duration = 300

const defaultStyle = {
  transition: `all ${duration}ms ease`,
  transform: "scale(0.4)",
  opacity: 0,
  willChange: "transform"
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transform: "scale(1)" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
}

const FadeIn: FC<Props> = ({ children }) => {
  const [loaded, setLoaded] = useState(false)
  const onLoad = () => setLoaded(true)

  return (
    <Transition in={loaded} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {children(onLoad)}
        </div>
      )}
    </Transition>
  )
}

export default FadeIn
