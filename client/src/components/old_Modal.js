import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';

const Modal = ({ title, content, btnActions, onDismiss, show }) => {
  return ReactDom.createPortal(
    <div
      className=''
      tabIndex='-1'
      role='dialog'
      onClick={onDismiss}
      style={modalStyle}
    >
      <div
        className='modal-dialog'
        role='document'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              onClick={onDismiss}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>{content}</p>
          </div>
          <div className='modal-footer'>{btnActions}</div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.9)',
  height: '100vh',
  zIndex: 999,
};

export default Modal;
