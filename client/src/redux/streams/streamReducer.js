import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
} from '../types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return {
        ...state,
        streams: action.payload,
        loading: false,
      };
    case FETCH_STREAM:
      return {
        ...action.payload,
        loading: false,
      };
    case CREATE_STREAM:
      return {
        ...state,
        stream: action.payload,
        loading: false,
      };
    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETE_STREAM:
      return {
        ...state,
        streams: state.streams.filter((stream) => stream.id !== action.payload),
      };
    default:
      return state;
  }
};

export default streamReducer;
