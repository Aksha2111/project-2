import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import PostCard from '../components/PostCard'
import Pagination from '../components/Pagination'


const PAGE_SIZE = 6


export default function PostList(){
const [posts, setPosts] = useLocalStorage('posts', [])
const [q, setQ] = useState('')
const [authorFilter, setAuthorFilter] = useState('')
const [page, setPage] = useState(1)


function handleDelete(id){
if(!window.confirm('Delete this post?')) return
setPosts(posts.filter(p => p.id !== id))
}


const authors = useMemo(()=>{
const s = new Set(posts.map(p=>p.author))
return ['All', ...Array.from(s)]
}, [posts])


const filtered = useMemo(()=>{
let list = posts
if(q) list = list.filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
if(authorFilter && authorFilter !== 'All') list = list.filter(p => p.author === authorFilter)
return list.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
}, [posts, q, authorFilter])


const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
const paged = filtered.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)


return (
  <div>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="d-flex gap-2">
        <input
          className="form-control"
          placeholder="Search by title..."
          value={q}
          onChange={e => { setQ(e.target.value); setPage(1) }}
        />
        <select
          className="form-select"
          value={authorFilter}
          onChange={e => { setAuthorFilter(e.target.value); setPage(1) }}
        >
          {authors.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <Link to="/posts/new" className="btn btn-primary">New Post</Link>
    </div>

    {paged.length === 0 ? (
      <div className="text-center mt-6">
        <p className="lead">No posts yet. Create your first post.</p>
        <Link to="/posts/new" className="btn btn-outline-primary">Create Post</Link>
      </div>
    ) : (
      paged.map(p => (
        <PostCard key={p.id} post={p} onDelete={handleDelete} />
      ))
    )}

    <div className="mt-3 d-flex justify-content-center">
      <Pagination page={page} totalPages={totalPages} onPage={p => setPage(p)} />
    </div>
  </div>
)
};
