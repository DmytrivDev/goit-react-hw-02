import css from './Feedback.module.scss'

function Feedback({feedbackArray, totalFeedback, averageFeedback}) {
  return (
    <div className={css.feedback}>
      <p>Good: {feedbackArray.good}</p>
      <p>Neutral: {feedbackArray.neutral}</p>
      <p>Bad: {feedbackArray.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {averageFeedback}%</p>
    </div>
  );
}

export default Feedback