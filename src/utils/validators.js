export function validatePost({ title, author, content }){
const errors = {}
if(!title || title.trim().length === 0) errors.title = 'Title is required'
if(!author || author.trim().length === 0) errors.author = 'Author is required'
if(!content || content.trim().length < 10) errors.content = 'Content must be at least 10 characters'
return errors
}