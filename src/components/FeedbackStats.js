import PropTypes from 'prop-types'

function FeedbackStats({feedbacks}) {
  let length = feedbacks.length
  let ratingSum = feedbacks.reduce((acc,cur) => {
    return acc + cur.rating
  }, 0)
  let  average = ratingSum/length

  return (
    <div className='feedback-stats'>
        <h4>{length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
}

export default FeedbackStats