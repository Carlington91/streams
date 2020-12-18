import axios from 'axios';
import history from '../../history';

import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
} from '../types';

export const createStream = (formData) => async (dispatch, getState) => {
  const user_id = getState().user.userId;
  const res = await axios.post('/streams', { ...formData, user_id });
  dispatch({
    type: CREATE_STREAM,
    payload: res.data,
  });

  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const res = await axios.get('/streams');
  dispatch({
    type: FETCH_STREAMS,
    payload: res.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await axios.get(`/streams/${id}`);
  dispatch({
    type: FETCH_STREAM,
    payload: res.data,
  });
};

export const editStream = (id, formData) => async (dispatch) => {
  const res = await axios.patch(`/streams/${id}`, formData);
  dispatch({
    type: EDIT_STREAM,
    payload: res.data,
  });

  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await axios.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });

  history.push('/');
};
