import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStream, editStream } from '../../redux/streams/streamActions';
import StreamForm from './StreamForm';

const StreamEdit = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStream(match.params.streamId));
  }, [match, dispatch]);

  const { streams } = useSelector((state) => ({ ...state }));
  const { title, description } = streams;

  const onSubmit = (formData) => {
    dispatch(editStream(match.params.streamId, formData));
  };

  return (
    <div>
      <h1>Edit Stream</h1>
      <StreamForm
        onSubmit={onSubmit}
        initialValues={{ title, description }}
        btnText='Update '
      />
    </div>
  );
};

export default StreamEdit;
