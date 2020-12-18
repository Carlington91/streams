import React from 'react';
import { useDispatch } from 'react-redux';
import { createStream } from '../../redux/streams/streamActions';

import StreamForm from './StreamForm';

const StreamCreate = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(createStream(formData));
  };
  return (
    <div>
      <h2>Create a Stream</h2>
      <StreamForm onSubmit={onSubmit} btnText='Create ' />
    </div>
  );
};

export default StreamCreate;
