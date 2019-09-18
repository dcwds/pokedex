import React, { FC, useEffect } from "react"

import { POSTS_API_URL } from "../../constants"
import { useDispatch, useSelector } from "react-redux"
import { Post, postsActions, postsSelectors } from "../../store/posts"

import { map } from "lodash/fp"

const PostItem: FC<Post> = ({ title, body, author }: Post) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <h3>{author}</h3>
  </div>
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
    <article>
      {loading && <span>Loading...</span>}
      {posts && map(p => <PostItem key={p.id} {...p} />, posts)}
    </article>
  )
}

export default Posts
