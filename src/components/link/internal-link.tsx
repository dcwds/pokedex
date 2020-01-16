import React, { FC } from "react"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom"
import { Link as RebassLink, LinkProps as RebassLinkProps } from "rebass"

type Props = RouterLinkProps & RebassLinkProps

const InternalLink: FC<Props> = ({ children, css, ...rest }) => (
  <RebassLink {...rest} as={RouterLink}>
    {children}
  </RebassLink>
)

export default InternalLink
