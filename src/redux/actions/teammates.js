import {
  GET_FEEDBACKS,
  GET_TEAMMATE_BY_ID,
  SET_PAGINATION,
  CHANGE_PAGINATION,
  CREATE_FEEDBACK,
  REMOVE_FEEDBACK,
  ADD_FEEDBACK_LIKE,
  SET_LOADING
} from "./types";

import TeammatesService from "../../services/TeammatesService";

export const getTeammates = () => async (dispatch) => {
  try {
    dispatch({type: SET_LOADING, payload: true});
    const res = await TeammatesService.getAllTeammates();
    dispatch({
      type: SET_PAGINATION,
      payload: {
        list: res.data,
        currentPage: 1,
        itemsPerPage: 10,
      },
    });
    dispatch({type: SET_LOADING, payload: false});
  } catch (error) {
    console.log(error);
  }
};

export const setPagination = (payload) => (dispatch) => {
  try {
    dispatch({
      type: CHANGE_PAGINATION,
      payload: {
        list: payload.list,
        currentPage: payload.currentPage,
        itemsPerPage: payload.itemsPerPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const changePagination = (payload) => (dispatch) => {
  try {
    dispatch({
      type: CHANGE_PAGINATION,
      payload: {
        list: payload.list,
        currentPage: payload.currentPage,
        itemsPerPage: payload.itemsPerPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTeammateByID = (id) => async (dispatch) => {
  try {
    dispatch({type: SET_LOADING, payload: true});
    const res = await TeammatesService.getTeammateByID(id);

    dispatch({
      type: GET_TEAMMATE_BY_ID,
      payload: res.data,
    });
    dispatch({type: SET_LOADING, payload: false});
  } catch (error) {
    console.log(error);
  }
};

export const getAllTeammateFeedbacks = (id) => async (dispatch) => {
  try {
    const res = await TeammatesService.getAllTeammateFeedbacks(id);

    dispatch({
      type: GET_FEEDBACKS,
      payload: res.data,
    });
    dispatch({
      type: SET_PAGINATION,
      payload: {
        list: res.data,
        currentPage: 1,
        itemsPerPage: 20,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const createFeedback = (id, message) => async (dispatch) => {
  try {
    const res = await TeammatesService.createFeedback(id, {
      collaboratorId: id,
      message: message,
    });

    dispatch({
      type: CREATE_FEEDBACK,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeFeedback = (id, feedbackId) => async (dispatch) => {
  try {
    const res = await TeammatesService.removeFeedback(id, feedbackId);

    dispatch({
      type: REMOVE_FEEDBACK,
      payload: feedbackId,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addFeedbackLike = (id, feedbackId, likes) => async (dispatch) => {
  try {
    const data = {
      like: likes,
    };
    const res = await TeammatesService.addFeedbackLike(id, feedbackId, data);

    dispatch({
      type: ADD_FEEDBACK_LIKE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
