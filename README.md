# Pokédex

View the details of your favorite first generation Pokémon with helpful features like search and filters.

_Note: The data used for this project is quite minimal and therefore this project should not (or be expected to) substitute existing Pokédex solutions intended for more practical use cases._

[View the live demo.](https://pokedexclassic.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f378aae5-469f-46e9-9db5-25d3c6f186f4/deploy-status)](https://app.netlify.com/sites/pokedexclassic/deploys)

## Technology

- Written with [TypeScript](https://www.typescriptlang.org/).
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- State management with [Redux](https://github.com/reduxjs/redux) and [Redux Toolkit](https://github.com/reduxjs/redux-toolkit).
- Client-side routing with [React Router](https://github.com/ReactTraining/react-router).
- CSS-in-JS styling with [Rebass](https://github.com/rebassjs/rebass) and [Emotion](https://github.com/emotion-js/emotion).

## Data

Initially, most of the Pokémon data was being fetched via [PokéAPI](https://pokeapi.co/). Given that the data is entirely static and needed some embellishments, I decided to store it as a JSON object and import it directly without having to fetch anything over the wire.

## Images

To reduce the number of requests on page load, I decided to use an image sprite for Pokémon within the `PokePicker` component. I used [Spritesmith](https://github.com/twolfson/spritesmith) to compose the image and produce position coordinates, however, I found it difficult to have this process entirely automated&ndash; it probably should be but given the (small) scope of this project, it's hard to justify.

## License

Pokémon are &copy; Nintendo/Creatures Inc./GAME FREAK Inc.

Pokémon type icons are governed by the [Creative Commons Attribution 3.0 United States](https://creativecommons.org/licenses/by/3.0/us) license.

Everything else is governed by the [MIT](https://opensource.org/licenses/MIT) license.

## Acknowledgements

- Pokémon type icons by [Ilaria Bernareggi](https://thenounproject.com/ilariabernareggi).
- Most Pokémon data was collected from [PokéAPI](https://pokeapi.co/).
