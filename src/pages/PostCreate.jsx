import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PostForm from '../components/PostForm'

export default function PostCreate() {
  const [posts, setPosts] = useLocalStorage('posts', [])
  const navigate = useNavigate()

  function handleSubmit(payload) {
    const now = new Date().toISOString()
    const newPost = {
      id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString(),
      ...payload,
      createdAt: now,
      updatedAt: now
    }
    setPosts([newPost, ...posts])
    navigate('/')
  }

  return (
    <div>
      <h3>Create Post</h3>
      <PostForm onSubmit={handleSubmit} submitLabel="Create" />
    </div>
  )
}
