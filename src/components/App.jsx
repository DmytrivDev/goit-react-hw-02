import { useState, useEffect } from "react";

import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import "./App.scss";

function App() {
  const defaultFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackArray, setFeedbackArray] = useState(() => {
    const localStorageFeedback = window.localStorage.getItem('feedback');

    if(localStorageFeedback) {
      return JSON.parse(localStorageFeedback);
    }

    return defaultFeedback;
  });

  const { good, neutral, bad } = feedbackArray;
  const totalFeedback = good + neutral + bad;
  const averageFeedback = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    if(totalFeedback > 0) {
      window.localStorage.setItem('feedback', JSON.stringify(feedbackArray));
    } else {
      window.localStorage.removeItem('feedback');
    }
  }, [feedbackArray])

  const updateFeedback = (feedbackType) => {
    if (feedbackType) {
      setFeedbackArray({
        ...feedbackArray,
        [feedbackType]: feedbackArray[feedbackType] + 1,
      });
    } else {
      setFeedbackArray({
        ...defaultFeedback,
      });
    }
  };

  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackArray={feedbackArray}
          totalFeedback={totalFeedback}
          averageFeedback={averageFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
