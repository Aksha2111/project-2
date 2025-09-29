import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PostList from './pages/PostList'
import PostCreate from './pages/PostCreate'
import PostEdit from './pages/PostEdit'
import PostView from './pages/PostView'


export default function RoutesApp(){
return (
<Routes>
<Route path="/" element={<PostList />} />
<Route path="/posts/new" element={<PostCreate />} />
<Route path="/posts/:id" element={<PostView />} />
<Route path="/posts/:id/edit" element={<PostEdit />} />
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
)
}