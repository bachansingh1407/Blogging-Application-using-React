import React from 'react';
import { Link } from 'react-router-dom';

const SettingsModal = ({ id, onClose, onDeleteAccount }) => {
  return (
    <div className="modal__overlay">
      <div className="modal">
        <div className="model__title">
          <h3>Settings</h3>
          <button onClick={onClose} className='close__model'>X</button>
        </div>
        <ul className='setting__model'>
          <li>
            <Link to={`/update-profile/${id}`}>Update Profile</Link>
          </li>
          <li>
            <Link to={`/update-password/${id}`}>Change Password</Link>
          </li>
          <li>
            <button onClick={onDeleteAccount} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
              Delete Account Permanently
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsModal;