import React from 'react'
import Comments from './components/Comments'

const title = 'Blog Post'
const body = 'This is my blog post'
const comments = [
  {id: 1, text: "Comment 1"},
  {id: 2, text: "Comment 2"},
  {id: 3, text: "Comment 3"}
]
const showComments = true

function App() {
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments ? <Comments comments={comments} />: <h3>No Comments</h3>}
    </div>
  )
}

export default App