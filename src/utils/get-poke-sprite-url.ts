import {
  POKE_SPRITE_NORMAL_IMG_URL,
  POKE_SPRITE_RETINA_IMG_URL
} from "../constants"
import isRetina from "is-retina"

const getPokeSpriteURL = () =>
  isRetina() ? POKE_SPRITE_RETINA_IMG_URL : POKE_SPRITE_NORMAL_IMG_URL

export default getPokeSpriteURL
