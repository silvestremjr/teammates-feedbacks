import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PersonCard from "../components/PersonCard";
import FeedbacksTable from "../components/FeedbacksTable";
import FeedbackForm from "../components/FeedbackForm";
import Breadcrumb from "../components/Breadcrumb";

import {
  getTeammateByID,
  getAllTeammateFeedbacks,
} from "../../redux/actions/teammates";

const PersonDetails = () => {
  let { id } = useParams();
  const { person, feedbacks, paginated, loading } = useSelector(
    (state) => state.teammates
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeammateByID(id));
    dispatch(getAllTeammateFeedbacks(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <Breadcrumb name={person.name} />
          <PersonCard person={person} key={id} />

          <h3>Feedbacks ({feedbacks.length})</h3>
          <FeedbackForm id={id} />
          <FeedbacksTable list={feedbacks} feedbacks={paginated} />
        </>
      )}
    </>
  );
};

export default PersonDetails;
