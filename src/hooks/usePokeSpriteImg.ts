import {
  POKE_SPRITE_NORMAL_IMG_URL,
  POKE_SPRITE_RETINA_IMG_URL
} from "../constants"
import { useEffect, useState } from "react"
import isRetina from "is-retina"

const usePokeSpriteImg = () => {
  const [image, setImage] = useState()
  const retina = isRetina()

  useEffect(
    () =>
      retina
        ? setImage(POKE_SPRITE_RETINA_IMG_URL)
        : setImage(POKE_SPRITE_NORMAL_IMG_URL),
    [retina]
  )

  return image
}

export default usePokeSpriteImg
