import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import Feedbacks from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
function App() {
  const [feedbacks, setfeedbacks] = useState(Feedbacks)
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete the feeback?')){
      setfeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App