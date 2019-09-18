export type Post = {
  id: number
  body: string
  author: string
}

export type Posts = Post[]

export type PostsInitialState = {
  loading: boolean
  items: Posts
}
