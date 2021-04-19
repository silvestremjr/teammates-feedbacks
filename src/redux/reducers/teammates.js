import {
  GET_FEEDBACKS,
  GET_TEAMMATE_BY_ID,
  CHANGE_PAGINATION,
  SET_PAGINATION,
  REMOVE_FEEDBACK,
  CREATE_FEEDBACK,
  ADD_FEEDBACK_LIKE,
  SET_LOADING
} from "../actions/types";

const initialState = {
  list: [],
  paginated: [],
  currentPage: 1,
  totalPages: 1,
  totalItems: null,
  person: [],
  feedbacks: [],
  loading: false
};

const paginator = (items, current_page, per_page_items) => {
  let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
};

function teammatesReducer(teammates = initialState, actions) {
  const { type, payload } = actions;
  let pagination = [];
  switch (type) {
    case SET_LOADING:
      return {
        ...teammates,
        loading: payload
      }

    case SET_PAGINATION:
      pagination = paginator(
        payload.list,
        payload.currentPage,
        payload.itemsPerPage
      );
      return {
        ...teammates,
        list: payload.list,
        paginated: pagination.data,
        currentPage: pagination.page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
      };

    case CHANGE_PAGINATION:
      pagination = paginator(
        payload.list,
        payload.currentPage,
        payload.itemsPerPage
      );
      return {
        ...teammates,
        paginated: pagination.data,
        currentPage: pagination.page,
        totalPages: pagination.total_pages,
        totalItems: pagination.total,
      };

    case GET_TEAMMATE_BY_ID:
      return {
        ...teammates,
        person: payload,
      };

    case GET_FEEDBACKS:
      return {
        ...teammates,
        feedbacks: payload,
      };

    case CREATE_FEEDBACK:
      return {
        ...teammates,
        feedbacks: teammates.feedbacks.concat(payload),
      };

    case REMOVE_FEEDBACK:
      return {
        ...teammates,
        feedbacks: teammates.feedbacks.filter(({ id }) => id !== payload),
      };

    case ADD_FEEDBACK_LIKE:
      return {
        ...teammates,
        feedbacks: teammates.feedbacks.map(item => item.id === payload.id ? {...item, like: payload.like} : item)
      };

    default:
      return teammates;
  }
}

export default teammatesReducer;
