// import { useState } from "react"
import { FaTimes} from 'react-icons/fa'
import PropTypes from "prop-types"
import Card from './shared/Card'
function FeedBackItem({feedback, handleDelete}) {
    
  return (
    <Card>
        <div className="num-display">{feedback.rating}</div>
        <button onClick={() => handleDelete(feedback.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <div className="text-display"> {feedback.text}</div>
    </Card>
  )
}

FeedBackItem.propTypes = {
  feedback: PropTypes.object.isRequired
}
export default FeedBackItem