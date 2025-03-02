import React, { useState } from "react";
import axios from "axios";
import "./subscribenewsletter.css"; // Add your styles

const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/newsletter/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (err) {
      setError(err.response?.data?.error || "Subscription failed. Try again.");
    }
  };

  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter__content">
          <h2>Subscribe to the Latest Blogs and Articles!</h2>
          <p>Stay updated with our latest blog posts, news, and special content.</p>

          {message && <div className="success-message">{message}</div>}
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubscribe}>
            <div className="input__box">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
