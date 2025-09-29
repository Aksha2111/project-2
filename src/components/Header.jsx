import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Header(){
const loc = useLocation()
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
<Link className="navbar-brand" to="/">PostManager</Link>
<div className="collapse navbar-collapse">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<Link className={`nav-link ${loc.pathname === '/' ? 'active' : ''}`} to="/">Posts</Link>
</li>
<li className="nav-item">
<Link className={`nav-link ${loc.pathname === '/posts/new' ? 'active' : ''}`} to="/posts/new">Create</Link>
</li>
</ul>
</div>
</div>
</nav>
)
}