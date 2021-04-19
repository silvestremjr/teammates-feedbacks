import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTeammates } from "../../redux/actions/teammates";

import TeammatesTable from "../components/TeammatesTable";
import Pagination from "../components/Pagination";

const Teammates = () => {
  const { list, paginated, loading } = useSelector(
    (state) => state.teammates
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeammates());
  }, [dispatch]);

  return (
    <>
      <h1>Teammates</h1>
      {loading ? (
        <p>carregando..</p>
      ) : (
        <>
        <TeammatesTable teammates={paginated} />
        <Pagination list={list}  items={10} />
        </>
      )}
    </>
  );
};

export default Teammates;
