import React, { useEffect, useRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../redux/auth/authActions';

const GoogleAuth = () => {
  const auth = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const { isSignedIn } = user;

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const initialize = () => {
    const { gapi } = window;
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId:
            '900588017074-1a36mufcdnp3g066qtt75l6tuh8vvmtc.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          auth.current = gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  };

  const onAuthChange = (isSignedIn) => {
    isSignedIn
      ? dispatch(signIn(auth.current.currentUser.get().getId()))
      : dispatch(signOut());
  };

  return (
    <Fragment>
      {isSignedIn ? (
        <li className='nav-item'>
          <span className='nav-link' onClick={() => auth.current.signOut()}>
            Logout
          </span>
        </li>
      ) : (
        <li className='nav-item'>
          <span className='nav-link' onClick={() => auth.current.signIn()}>
            Login
          </span>
        </li>
      )}
    </Fragment>
  );
};

export default GoogleAuth;
