import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import SettingsModal from '../components/SettingsModel';
import DeleteConfirmationModal from '../components/DeleteConfirmationModel';
import NoBlogsMessage from '../components/NoBlogsMessage';
import './dashboard.css';
import ProfileImage from '../assets/profile.jpg'
import moment from 'moment';
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const { id } = useParams();
  const { user, logout, token } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [author, setAuthor] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/user/${id}`)
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          // Handle 404 error by setting blogs to an empty array
          setBlogs([]);
        } else {
          console.error('Error fetching blogs:', error);
        }
      });
    axios.get(`http://localhost:5000/api/blogs/user-details/${id}`)
      .then(resp => setAuthor(resp.data))
      .catch(error => console.error(error));

      
  }, [id]);

  // Open settings modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close settings modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Open delete confirmation dialog
  const handleDeleteAccount = () => {
    setIsDeleteConfirmationOpen(true);
  };

  // Confirm account deletion
  const confirmDeleteAccount = () => {
  
    axios.delete(`http://localhost:5000/api/user/delete-account/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request headers
      },
    })
      .then(() => {
        logout(); // Logout the user
        navigate('/'); // Redirect to home page
      })
      .catch(error => {
        console.error('Failed to delete account:', error);
      });
  };
  return (
    <div className="dashboard">
      <span className='dashboard__user-info'>{ author?.username + `'s`} {">"} Profile</span>
      <div className="dashboard__user-profile">
        <div className='profile'>
          <div className="profile__image">
            <img src={ProfileImage} alt="Profile Img" />
          </div>
          <div className="profile__details">
            <strong>{author?.username}</strong>
            <p>{author?.email}</p>
            <span>Joined {moment(author?.created_at).fromNow()}</span>
          </div>
        </div>
        {user?.id === author?.id && ( <button onClick={openModal}><IoSettingsOutline /> Settings</button>)}
      </div>

      {/* Settings Modal */}
      {isModalOpen && (
        <SettingsModal
          id={id}
          onClose={closeModal}
          onDeleteAccount={handleDeleteAccount}
        />
      )}

      {/* Delete Account Confirmation Modal */}
      {isDeleteConfirmationOpen && (
        <DeleteConfirmationModal
          onConfirm={confirmDeleteAccount}
          onCancel={() => setIsDeleteConfirmationOpen(false)}
        />
      )}

      <div className="dashboard__content">
        <strong>{author?.username + `'s`} Blogs{`(${blogs.length})`}</strong>
        <div className="dashboard__content-blogs">
          {blogs.length === 0 ? (
            <NoBlogsMessage />
          ) : (
            blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard