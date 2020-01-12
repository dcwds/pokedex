import { compose, replace, startCase } from "lodash/fp"

export const formatName = compose(
  (word: string) => startCase(word),
  (word: string) => replace("-", " ", word)
)

export const hectogramsToKilograms = (n: number) => n / 10
export const decimetersToMeters = (n: number) => n / 10
