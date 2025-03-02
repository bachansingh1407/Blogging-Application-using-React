import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import "./updateuserinfo.css";
import { BiShowAlt } from "react-icons/bi";
import { GrHide } from "react-icons/gr";

const UpdatePassword = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match!");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/api/user/update-password/${id}`,
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Password updated successfully!");
      setError("");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (err) {
      console.error("Update Password Error:", err.response?.data);
      setError("Failed to update password. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="update-user-password">
      <div className="container">
        <h2>Update Password</h2>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <div className="password-container">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Create new password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <GrHide /> : <BiShowAlt />}
              </button>
            </div>
          </div>

          {/* Confirm New Password */}
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Confirm new password"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <GrHide /> : <BiShowAlt />}
              </button>
            </div>
          </div>

          <button type="submit" className="update-button">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
