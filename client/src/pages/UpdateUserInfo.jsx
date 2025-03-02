import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './updateuserinfo.css'

const UpdateUserInfo = () => {
    const { id } = useParams();
    const { user, token } = useContext(AuthContext);

    // Ensure initial state is always a string (not undefined)
    const [username, setUsername] = useState(user?.username || '');
    const [email, setEmail] = useState(user?.email || '');

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Use useEffect to set form values when user data becomes available
    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setEmail(user.email || '');
        }
    }, [user]); // Run only when `user` changes

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                `http://localhost:5000/api/user/update-user/${id}`,
                { username, email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage('User information updated successfully!');
            setError('');
        } catch (err) {
            console.error("Update Error:", err.response?.data);
            setError('Failed to update user information. Please try again.');
            setMessage('');
        }
    };

    return (
        <div className="update-user-info">
          <div className="container">

            <h2>Update User Information</h2>
            {message && <div className="success-message">{message}</div>}
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Cool Joe'
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='cooljoe@gmail.com'
                        required
                    />
                </div>
                <button type="submit" className="update-button">Update</button>
            </form>
          </div>
        </div>
    );
};

export default UpdateUserInfo;
