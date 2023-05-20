import PropTypes from "prop-types"
import FeedBackItem from "./FeedBackItem"

function FeedbackList({ feedbacks, handleDelete }) {
  if(!feedbacks || feedbacks.length === 0){
    return <p>No feedback present</p>
  }
  return (
    <div className="feedback-list">
        {feedbacks.map(feedback => {
            return <FeedBackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete} />
        })}
    </div>
  )
}

FeedBackItem.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}
export default FeedbackList