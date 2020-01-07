import imagemin from "imagemin"
import imageminWebp from "imagemin-webp"

const pokemonImagesPath = "./src/assets/images/unminifiedPokemon/*.png"
const dest = "./public/images/pokemon"
;(async () => {
  await imagemin([pokemonImagesPath], {
    destination: dest,
    plugins: [imageminWebp({ quality: 65, resize: { width: 200, height: 0 } })]
  })

  console.log("Images have been converted to WebP")
})()
