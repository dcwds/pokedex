import { FC } from "react"
import { BREAKPOINTS } from "../../constants"
import { useMediaQuery } from "react-responsive"

const { base, md, xmd, lg } = BREAKPOINTS

const LargeScreen: FC = ({ children }) => {
  const isLargeScreen = useMediaQuery({ minWidth: lg })
  return isLargeScreen ? children : (null as any)
}

const NotLargeScreen: FC = ({ children }) => {
  const isNotLargeScreen = useMediaQuery({ minWidth: base, maxWidth: xmd })
  return isNotLargeScreen ? children : (null as any)
}

const MediumScreen: FC = ({ children }) => {
  const isMediumScreen = useMediaQuery({ minWidth: md, maxWidth: xmd })
  return isMediumScreen ? children : (null as any)
}

const SmallScreen: FC = ({ children }) => {
  const isSmallScreen = useMediaQuery({ minWidth: base })
  return isSmallScreen ? children : (null as any)
}

const NotSmallScreen: FC = ({ children }) => {
  const isNotSmallScreen = useMediaQuery({ minWidth: md })
  return isNotSmallScreen ? children : (null as any)
}

export {
  LargeScreen,
  NotLargeScreen,
  MediumScreen,
  SmallScreen,
  NotSmallScreen
}
