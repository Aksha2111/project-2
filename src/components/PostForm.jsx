import React, { useState } from 'react'
import { validatePost } from '../utils/validators'

export default function PostForm({ initial = {}, onSubmit, submitLabel = 'Save' }) {
  // Merge initial values once during first render
  const [form, setForm] = useState(() => ({
    title: initial.title || '',
    author: initial.author || '',
    content: initial.content || '',
     tags: Array.isArray(initial.tags) ? initial.tags.join(', ') : (initial.tags || '')
  }))

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      title: form.title,
      author: form.author,
      content: form.content,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean)
    }

    const validationErrors = validatePost(payload)
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }

    onSubmit(payload)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          className={`form-control ${errors.author ? 'is-invalid' : ''}`}
        />
        {errors.author && <div className="invalid-feedback">{errors.author}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Content</label>
        <textarea
          name="content"
          rows={6}
          value={form.content}
          onChange={handleChange}
          className={`form-control ${errors.content ? 'is-invalid' : ''}`}
        />
        {errors.content && <div className="invalid-feedback">{errors.content}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Tags (comma separated)</label>
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          className="form-control"
          placeholder="react, ui, tips"
        />
      </div>

      <button type="submit" className="btn btn-primary">{submitLabel}</button>
    </form>
  )
}

