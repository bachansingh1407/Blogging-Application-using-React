import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext';
import './blogdetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const { user, token } = useContext(AuthContext); // Get current user
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = async () => {
    try {
      if (!token) {
        console.error("No token found. User is not authenticated.");
        return;
      }

      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      });
      navigate('/');
    } catch (error) {
      console.error("Error deleting blog:", error.response?.data?.error || error);
      alert(error.response?.data?.error || "Failed to delete blog."); // Show error message to the user
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog__detail">
      <h1>{blog.title}</h1>

      <div className="blog__title">
        <div className="user__side">
          <p className="category">{blog.category}</p>
          {/* Author Link */}
          <div className="username">
            Author <Link to={`/dashboard/${blog.author_id}`}>{blog.username}</Link>
          </div>
          <p className="posted__on">Posted {moment(blog.created_at).fromNow()}</p>
        </div>
        {/* Show Edit & Delete Buttons If Current User is the Author */}
        {user && user.username === blog.username && (
          <div className="edit">
            <Link to={`/update-blog/${blog.id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>

      {/* Display Image */}
      {blog.image && (
        <img
          src={`http://localhost:5000/${blog.image}`}
          alt={blog.title}
        />
      )}

      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
