import React from 'react';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal__overlay">
      <div className="modal">
        {/* <div className="model__title delete"> */}
          <h3>Are you sure you want to delete your account?</h3>
          {/* <button onClick={onCancel} className='close__model'>X</button> */}
        {/* </div> */}
        <ul className='delete__model'>
          <li>This action cannot be undone. </li>
          <li>All your Data,</li>
          <li>Including blogs, account</li>
          <li>will be permanently deleted.</li>
        </ul>
        <div className="confirmation__actions">
          <button onClick={onConfirm} className='delete__btn'>
            Yes, Delete My Account
          </button>
          <button onClick={onCancel} className='close__btn'>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;