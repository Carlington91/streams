import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStream } from '../../redux/streams/streamActions';

const StreamShow = ({ match }) => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);

  useEffect(() => {
    const { streamId } = match.params;
    dispatch(fetchStream(streamId));
    const player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();

    //clean up
    return () => player();
  }, [match, dispatch]);

  const streams = useSelector((state) => state.streams);

  const { title, description } = streams;

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default StreamShow;
