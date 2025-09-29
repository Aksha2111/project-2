import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function PostView() {
  const { id } = useParams()
  const [posts, setPosts] = useLocalStorage('posts', [])
  const navigate = useNavigate()
  const post = posts.find(p => p.id === id)

  if (!post) return <div>Post not found</div>

  function handleDelete() {
    if (!window.confirm('Delete this post?')) return
    setPosts(posts.filter(p => p.id !== id))
    navigate('/')
  }

  return (
    <div>
      <div className="mb-3">
        <Link to="/" className="btn btn-sm btn-outline-secondary">Back to list</Link>
      </div>
      <h2>{post.title}</h2>
      <div className="text-muted mb-2">
        {post.author} · Created: {new Date(post.createdAt).toLocaleString()} · Updated: {new Date(post.updatedAt).toLocaleString()}
      </div>
      <div className="mb-3">
        {post.tags && post.tags.length > 0 && (
          <div className="mb-2">
            {post.tags.map(t => <span key={t} className="badge bg-secondary me-1">{t}</span>)}
          </div>
        )}
        <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
      </div>

      <div className="d-flex gap-3">
        <Link to={`/posts/${post.id}/edit`} className="btn btn-outline-secondary">Edit</Link>
        <button className="btn btn-outline-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
