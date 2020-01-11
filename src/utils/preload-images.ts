import { reduce } from "lodash/fp"

const preloadImages = (urls: string[]) => {
  const promises = reduce(
    (promises, url: string) => {
      const promise = new Promise(resolve => {
        const img = new Image()
        img.onload = () => resolve({ url, status: "ok" })
        img.onerror = () => resolve({ url, status: "error" })

        img.src = url
      })

      promises.push(promise)
      return promises
    },
    [] as any
  )

  return Promise.all(promises(urls))
}

export default preloadImages
