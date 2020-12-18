import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams } from '../../redux/streams/streamActions';
import StreamDelete from './StreamDelete';

const StreamList = () => {
  const [show, setShow] = useState(false);
  const [stream, setStream] = useState({
    id: '',
    title: '',
  });

  const dispatch = useDispatch();

  const {
    streams: { streams, loading },
    user: { userId, isSignedIn },
  } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const onDelete = (id, title) => () => {
    setStream({ id, title });
    setShow(true);
  };

  const renderUserAction = (stream) => {
    const { user_id, id, title } = stream;

    return (
      user_id === userId && (
        <div className='action float-right'>
          <Link to={`/streams/edit/${id}`} className='btn btn-info btn-sm mr-2'>
            Edit Stream
          </Link>
          <button
            className='btn btn-danger btn-sm'
            onClick={onDelete(id, title)}
          >
            Delete
          </button>
        </div>
      )
    );
  };

  const renderCreateAction = isSignedIn && (
    <div>
      <Link to='/streams/new' className='btn btn-success float-right'>
        Create Stream
      </Link>
    </div>
  );

  const renderedStreams =
    streams &&
    streams.map((stream) => (
      <div className='card card-body mb-2' key={stream.id}>
        <div className='row'>
          <div className='content col-md-9'>
            <h5 className='card-title'>
              <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
            </h5>
            <p className='card-text'>{stream.description}</p>
          </div>
          <div className='content col-md-3'>{renderUserAction(stream)}</div>
        </div>
      </div>
    ));

  return (
    <div>
      {show && (
        <StreamDelete onDismiss={() => setShow(false)} stream={stream} />
      )}
      <div className='page-header d-flex justify-content-between align-items-center'>
        <h2 className='h2 mt-3 mb-5'>Stream List </h2>
        {renderCreateAction}
      </div>
      {loading ? 'Loading' : renderedStreams}
      {renderCreateAction}
    </div>
  );
};

export default StreamList;
