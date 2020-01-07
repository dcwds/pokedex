import React, { FC, ReactNode } from "react"
import { Box } from "rebass"

type Props = {
  children: ReactNode
  ratio: number
}

const AspectRatio: FC<Props> = ({ children, ratio }) => (
  <Box
    sx={{
      width: "100%",
      height: 0,
      position: "relative",
      paddingTop: `${(1 / ratio) * 100 + "%"}`
    }}
  >
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,

        "& > *": {
          height: "inherit",
          width: "inherit"
        }
      }}
    >
      {children}
    </Box>
  </Box>
)

export default AspectRatio
