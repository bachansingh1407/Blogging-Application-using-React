import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Get user data from context

  return (
    <nav>
      <div className="logo">
        <Link to="/">MyBlog</Link>
      </div>
      <div>
        {!user ? (
          <div className="links">
            <Link to="/login" className="login__link">Login</Link>
            <Link to="/newsletter" className="newsletter__btn">Subscribe</Link>
          </div>
        ) : (
          <div className="links">
            <Link to='/create-blog'> Write</Link>
            <Link to={`/dashboard/${user.id}`} className="user__name">{user.username}</Link>
            <button className="logout__btn" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
