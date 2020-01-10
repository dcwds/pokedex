const fs = require("fs")
const path = require("path")
const spritesmith = require("spritesmith")

const destinationPath = `${path.join(__dirname, "../../public")}/images`
const imagesPath = `${path.join(
  __dirname,
  "../assets"
)}/images/minifiedPokemon-x1`
const pokeIds = Array.from(Array(152).keys()).slice(1)
const pokeFileNames = pokeIds.map(id => `${imagesPath}/${id}.png`)

spritesmith.run({ src: pokeFileNames }, (err: any, result: any) => {
  if (err) throw err

  fs.writeFileSync(`${destinationPath}/poke-sprite-x1.png`, result.image)
  console.log(result.coordinates)
})

export {}
