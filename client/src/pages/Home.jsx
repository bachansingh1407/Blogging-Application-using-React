import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import './home.css'

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='all__blogs'>
      <h1>Blogs</h1>
      <div className="blog__card">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      </div>
    </div>
  );
};

export default Home;