import React from 'react';
import { Link } from 'react-router-dom';
import './blogcard.css'
import moment from 'moment';

const BlogCard = ({ blog }) => {
  return (
    <div className='blog__content'>

      <div className="cover__photo">
        {blog.image && (
          <img
            src={`http://localhost:5000/${blog.image}`}
            alt={blog.title}
          />
        )}
      </div>

      <div className="text__content">

        <p className='category'>{blog.category}</p>

        {/* Blog Title with Link */}
        <Link to={`/blog/${blog.id}`} ><h2>{blog.title}</h2></Link>

        {/* Blog Content Preview */}
        <p className='details'>{blog.content.substring(0, 150)}...</p>
        <p className='posted__on'>Posted {moment(blog.created_at).fromNow()}</p>

        {/* Author Link */}
        <div className="profile__link">Author <Link to={`/dashboard/${blog.author_id}`}>
          {blog.username}
        </Link>
        </div>

      </div>

    </div>
  );
};

export default BlogCard;
