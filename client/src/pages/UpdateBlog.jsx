import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "./updateblog.css"; // Add styles if needed

const UpdateBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  // State for blog data
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(res.data.title);
        setContent(res.data.content);
        setCategory(res.data.category);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog data.");
      }
    };

    fetchBlog();
  }, [id, token]);

  // Handle form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await axios.put(
        `http://localhost:5000/api/blogs/update-blog/${id}`,
        { title, content, category },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage("Blog updated successfully!");
      setError("");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect after update
    } catch (err) {
      console.error("Update error:", err);
      setError("Failed to update blog. Try again.");
    }
  };

  return (
    <div className="update-blog-container">
      <div className="container">

        <h2>Update Blog</h2>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter new title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Update blog content..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter new category"
              required
            />
          </div>

          <button type="submit" className="update-button">Update Blog</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
