function Comments({comments}) {
  return (
  <div className="comments">
    <h3>Comments ({comments.length})</h3>
    <ul>
        {
        comments.length > 0 && comments.map(({id, text}) => {
            return <li key={id}>{text}</li>
        })
        }
    </ul>
  </div>
  )
}

export default Comments