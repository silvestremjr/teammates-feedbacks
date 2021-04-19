import { useState, useEffect } from "react";
import { DateTime } from "luxon";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFeedback, addFeedbackLike } from "../../redux/actions/teammates";

const Feedback = ({ feedback }) => {
  const [disabled, setDisabled] = useState(false);

  let { id } = useParams();
  const dispatch = useDispatch();

  const deleteFeedback = (feedbackId) => {
    dispatch(removeFeedback(id, feedbackId));
  };

  const likeFeedback = (feedbackId, likes) => {
    dispatch(addFeedbackLike(id, feedbackId, likes));
  }

  useEffect(() => {
    const feedbackDate = DateTime.fromISO(feedback.createdAt).setZone(
      "America/Sao_Paulo"
    );
    if (
      DateTime.now().setZone("America/Sao_Paulo") >
      feedbackDate.plus({ minutes: 5 })
    )
      setDisabled(true);
  }, [feedback]);

  const btsStyle = css`
    border: none;
    display: flex;
    align-items: center;
    padding: 3px 7px 2px;
  `;

  return (
    <tr>
      <td>
        <span
          css={css`
            word-break: break-all;
          `}
        >
          {feedback.message}
        </span>
      </td>
      <td>
        {DateTime.fromISO(feedback.createdAt)
          .setZone("America/Sao_Paulo")
          .toFormat("dd/MM/yyyy HH:mm")}
      </td>
      <td className="d-flex">
        <button type="button" className="btn btn-primary d-flex" css={btsStyle} onClick={() => likeFeedback(feedback.id, feedback.like + 1)}>
          <span
            className="material-icons"
            css={css`
              color: #fff;
              font-size: 22px;
              padding-right: 5px;
            `}
          >
            thumb_up_off_alt
          </span>
          <span className="badge badge-light">{feedback.like}</span>
        </button>
      </td>
      <td>
        <button
          type="button"
          css={css`
            ${btsStyle}
            padding-right: 0;
          `}
          disabled={disabled}
          onClick={() => deleteFeedback(feedback.id)}
        >
          <span
            className="material-icons"
            css={{
              color: disabled ? "#6c757d" : "#dc3545",
            }}
          >
            delete
          </span>
        </button>
      </td>
    </tr>
  );
};

export default Feedback;
