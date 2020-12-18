import React from 'react';

const Modal = ({ onDismiss, title, btnActions, content }) => {
  return (
    <div
      className=''
      tabIndex='-1'
      role='dialog'
      style={modalStyle}
      onClick={onDismiss}
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
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.7)',
  height: '100vh',
  zIndex: 999,
};

export default Modal;
