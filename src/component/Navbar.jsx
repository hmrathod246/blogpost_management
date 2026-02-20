import React from "react";
import {
  FaBlog,
  FaHome,
  FaMoon,
  FaPlusSquare,
  FaSignOutAlt,
  FaSun,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdAnalytics } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const data = JSON.parse(localStorage.getItem("blog_rdata"));

  const handleLogout = () => {
    localStorage.removeItem("blog_rdata");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaBlog className="logo-icon" />
          <span className="logo text">BlogPost</span>
        </div>

        <div className="navbar-links">
          <NavLink to="/dashboard" className="nav-item">
            <FaHome className="nav-icon" />
            Home
          </NavLink>

          <NavLink to="/create-post" className="nav-item">
            <FaPlusSquare className="nav-icon" />
            Create Post
          </NavLink>

          <NavLink to="/analytics" className="nav-item">
            <MdAnalytics className="nav-icon" />
            Analytics
          </NavLink>
           <NavLink to="/favorites" className="nav-item">
            <FaStar  className="nav-icon" />
            Favorites
          </NavLink>
        </div>

        <div className="navbar-actions">
          {data ? (
            <>
              <span className="user-name">HI {data.name}</span>

              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>

              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt />
                Logout
              </button>
            </>
          ) : (
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
