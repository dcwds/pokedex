export const SITE_URL = process.env.REACT_APP_URL || ""
export const SITE_TITLE = "Pokédex"
export const SITE_TITLE_TEMPLATE = ` · ${SITE_TITLE}`
export const SITE_DESCRIPTION = "Learn about the first generation of Pokémon."

export const POKE_SPRITE_NORMAL_IMG_URL = "/images/poke-sprite-x1.png"
export const POKE_SPRITE_RETINA_IMG_URL = "/images/poke-sprite-x2.png"

// Shared between Emotion theme and `react-responsive` components.
export const BREAKPOINTS = {
  sm: "47.9375em", // ~767px
  md: "48em", // ~768px
  xmd: "61.9375em", // ~991px
  lg: "62em" // ~992px
}
