const imagemin = require("imagemin")
const imageminPng = require("imagemin-pngquant")
const imageminWebp = require("imagemin-webp")

const pokemonImagesPath = "./src/assets/images/unminifiedPokemon-x2/*.png"
const dest = "./src/assets/images/minifiedPokemon-x2"
;(async () => {
  await imagemin([pokemonImagesPath], {
    destination: dest,
    // plugins: [imageminWebp({ quality: 65, resize: { width: 200, height: 0 } })]
    plugins: [imageminPng()]
  })

  console.log("Images have been converted to WebP")
})()

export {}
