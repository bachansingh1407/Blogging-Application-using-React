import React from 'react'
import { Link } from 'react-router-dom';

  // Component to display when no blogs are found
  const NoBlogsMessage = () => (
    <div className="no-blogs-message">
      <h1>You haven't written any blogs yet.</h1>
      <Link to="/create-blog" className="write-blog-link">Write your first blog</Link>
    </div>
  );


export default NoBlogsMessage