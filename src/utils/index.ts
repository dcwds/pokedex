import { compose, replace, startCase } from "lodash/fp"

export const formatName = compose(
  (word: string) => startCase(word),
  (word: string) => replace("-", " ", word)
)
