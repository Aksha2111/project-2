import React from 'react'


export default function Pagination({ page, totalPages, onPage }){
if(totalPages <= 1) return null
const pages = Array.from({length: totalPages}, (_,i)=>i+1)
return (
<nav>
<ul className="pagination">
<li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
<button className="page-link" onClick={()=>onPage(page-1)}>Prev</button>
</li>
{pages.map(p => (
<li key={p} className={`page-item ${p===page ? 'active' : ''}`}>
<button className="page-link" onClick={()=>onPage(p)}>{p}</button>
</li>
))}
<li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
<button className="page-link" onClick={()=>onPage(page+1)}>Next</button>
</li>
</ul>
</nav>
)
}