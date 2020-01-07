import React, { FC, useEffect, useState, ImgHTMLAttributes } from "react"

type Props = {
  source: string
} & ImgHTMLAttributes<any>

const AsyncImage: FC<Props> = ({ source, alt, ...rest }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      await fetch(source)
      setLoading(false)
    })()
  }, [source])

  return <img src={source} alt={alt} {...rest} />
}

export default AsyncImage
