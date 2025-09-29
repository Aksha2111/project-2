import React from 'react'
import { Link } from 'react-router-dom'


export default function PostCard({ post, onDelete }){
const excerpt = post.content.length > 120 ? post.content.slice(0,120) + '...' : post.content
return (
<div className="card mb-5">
<div className="card-body">
<h5 className="card-title">{post.title}</h5>
<h6 className="card-subtitle mb-2 text-muted">{post.author} · {new Date(post.createdAt).toLocaleString()}</h6>
<p className="card-text">{excerpt}</p>
<div className="d-flex gap-2">
<Link to={`/posts/${post.id}`} className="btn btn-sm btn-outline-primary">View</Link>
<Link to={`/posts/${post.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
<button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(post.id)}>Delete</button>
</div>
</div>
</div>
)
}