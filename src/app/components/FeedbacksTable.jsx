import Feedback from "./Feedback";
import Pagination from "./Pagination";

const FeedbacksTable = ({ feedbacks, list }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50%">
              Message
            </th>
            <th scope="col" width="35%">
              Published in
            </th>
            <th scope="col" width="10%">
              Likes
            </th>
            <th scope="col" width="5%"></th>
          </tr>
        </thead>
        <tbody>
          {feedbacks?.map((feedback) => (
            <Feedback feedback={feedback} key={`feedback-${feedback.id}`} />
          ))}
        </tbody>
      </table>
      <Pagination list={list} items={20} />
    </>
  );
};

export default FeedbacksTable;
