import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PostForm from '../components/PostForm'

export default function PostEdit() {
  const { id } = useParams()
  const [posts, setPosts] = useLocalStorage('posts', [])
  const navigate = useNavigate()

  // Find the post to edit
  const post = posts.find(p => p.id === id)

  // If no post found, show message
  if (!post) return <div>Post not found</div>

  // Prepare initial values for PostForm
  const initialValues = {
    ...post,
    tags: (post.tags || []).join(', ') // convert tags array to comma-separated string
  }

  // Handle form submission
  function handleSubmit(payload) {
    const updatedPosts = posts.map(p =>
      p.id === id ? { ...p, ...payload, updatedAt: new Date().toISOString() } : p
    )
    setPosts(updatedPosts)
    navigate(`/posts/${id}`) // navigate to post view after update
  }

  return (
    <div>
      <h3>Edit Post</h3>
      <PostForm
        initial={initialValues}
        onSubmit={handleSubmit}
        submitLabel="Update"
      />
    </div>
  )
}
