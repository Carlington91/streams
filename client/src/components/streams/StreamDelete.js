import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';
import { deleteStream } from '../../redux/streams/streamActions';

const StreamDelete = ({ onDismiss, stream: { id, title } }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteStream(id));
    onDismiss();
  };

  const actions = (
    <Fragment>
      <button type='button' className='btn btn-danger' onClick={onClick}>
        Danger
      </button>
      <button
        type='button'
        className='btn btn-mute'
        data-dismiss='modal'
        onClick={onDismiss}
      >
        Cancel
      </button>
    </Fragment>
  );

  return (
    <Modal
      title='Delete Stream'
      content={`Are you sure you want to delete the stream with title: ${title}?`}
      btnLeftText='Delete Stream'
      btnRightText='Cancel'
      btnActions={actions}
      onDismiss={onDismiss}
    />
  );
};

export default StreamDelete;
