import React, { FC, useEffect } from "react"
import { Box, Heading, Text } from "rebass"

import { POSTS_API_URL } from "../../constants"
import { useDispatch, useSelector } from "react-redux"
import { Post, postsActions, postsSelectors } from "../../store/posts"

import { map } from "lodash/fp"

const PostItem: FC<Post> = ({ title, body, author }: Post) => (
  <Box sx={{ mb: 5 }}>
    <Heading as="h2" sx={{ fontSize: 3, mb: 3 }}>
      {title}
    </Heading>
    <Text as="p" sx={{ mb: 2 }}>
      {body}
    </Text>
    <Text as="p" sx={{ fontWeight: "semiBold" }}>
      {author}
    </Text>
  </Box>
)

const Posts: FC = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelectors.selectPosts)
  const loading = useSelector(postsSelectors.selectLoading)

  useEffect(() => {
    fetch(POSTS_API_URL)
      .then(res => res.json())
      .then(posts => dispatch(postsActions.setPosts(posts)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <Box as="article">
      {loading && <span>Loading...</span>}
      {posts && map(p => <PostItem key={p.id} {...p} />, posts)}
    </Box>
  )
}

export default Posts
