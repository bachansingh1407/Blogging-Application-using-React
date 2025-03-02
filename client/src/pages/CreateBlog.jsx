import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./createblog.css";
import { IoMdAddCircle } from "react-icons/io";

const CreateBlog = () => {
  const { user, token } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null); // For file upload
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Unauthorized! Please log in.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post("http://localhost:5000/api/blogs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.error(
        "Error creating blog:",
        error.response?.data || error.message
      );
      alert(
        error.response?.data?.error ||
          "Failed to create blog. Please try again."
      );
    }
  };

  return (
    <div className="create__blog">
      <div className="blog__container">
        <div className="blog__header">
          <strong>Write a Blog</strong>
          <p>+ Drafts</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="blog__input">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="blog__input">
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="blog__input">
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="blog__input">
            <label htmlFor="inputfile" className="file"><IoMdAddCircle /> Add Image</label>
            <input type="file" id="inputfile" onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <button type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
