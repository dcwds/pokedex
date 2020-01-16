import React, { FC } from "react"
import { Link, LinkProps } from "rebass"

type Props = {
  href: string
} & LinkProps

const ExternalLink: FC<Props> = ({ children, css, ...rest }) => (
  <Link {...rest} rel="noopener noreferrer" target="_blank">
    {children}
  </Link>
)

export default ExternalLink
