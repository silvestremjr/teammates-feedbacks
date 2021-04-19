import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFeedback } from "../../redux/actions/teammates";

const FeedbackForm = ({ id }) => {
  const initialFeedbackState = {
    message: "",
  };

  const [feedback, setFeedback] = useState(initialFeedbackState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const saveFeedback = () => {
    const { message } = feedback;
    dispatch(createFeedback(id, message))
      .then((data) => {
        setFeedback({
          collaboratorId: data.id,
          message: data.message,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newFeedback = () => {
    setFeedback(initialFeedbackState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div className="mb-3">
          <p>Feedback submitted successfully!</p>
          <button className="btn btn-success" onClick={newFeedback}>
            Add more feedbacks
          </button>
        </div>
      ) : (
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              required
              value={feedback.message}
              onChange={handleInputChange}
              name="message"
            />
          </div>

          <button onClick={saveFeedback} className="btn btn-success">
            Submit feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
