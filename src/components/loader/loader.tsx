import React, { FC } from "react"
import { Box } from "rebass"
import { keyframes } from "@emotion/core"

type Props = {
  size?: number
  color?: string
}

const pulse = keyframes`
  0% { 
    transform: scale(0);
  } 100% {
    transform: scale(1.0);
    opacity: 0;
  }
`

const Loader: FC<Props> = ({ size, color }) => (
  <Box
    sx={{
      bg: color ? color : "rgba(255,255,255, 0.2)",
      height: size ? size : "40px",
      width: size ? size : "40px",
      mx: "auto",
      borderRadius: "100%",
      animation: `${pulse} 1.0s infinite ease-in-out`
    }}
  />
)

export default Loader
