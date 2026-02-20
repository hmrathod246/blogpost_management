import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { MdDeleteSweep, MdOpenInNew } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import "./Favorite.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Favorites = () => {
  const [tasks, setTasks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      if (Array.isArray(data)) {
        setTasks(data);
      }
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  const removeFavorite = (taskId) => {
    const newFavorites = favorites.filter((id) => id !== taskId);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    toast.info("Removed from collection");
  };

  const clearAllFavorites = () => {
    if (window.confirm("clear all your saved posts")) {
      localStorage.removeItem("favorites");
      setFavorites([]);
      toast.info("All favorites cleared");
    }
  };

  const favoritePosts = tasks.filter((task) => favorites.includes(task.id));

  return (
    <div className="favorites-page-container">
      <Navbar />
      <main className="favorites-main">
        <div className="favorites-header">
          <h2>
            Curated Collection
            <span className="count-badge">{favoritePosts.length}</span>
          </h2>

          <button className="clear-all-btn" onClick={clearAllFavorites}>
            <MdDeleteSweep size={20} />
            Clear List
          </button>
        </div>

        {favoritePosts.length === 0 ? (
          <div className="fav-empty-state">
            <FaRegStar className="empty-icon" />
            <h3>Your list is empty</h3>
            <p>Discover interstion posts</p>
            <button
              className="browser-btn"
              onClick={() => navigate("/dashboard")}
            >
              Explore Stories
            </button>
          </div>
        ) : (
          <div className="favorites-grid">
            {favoritePosts.map((task) => (
              <div className="fav-card" key={task.id}>
                <div className="fav-card-image">
                  <img src={task.imageurl} alt="post" />
                  <div className="fav-card-overlay">
                    <button
                      className="read-btn"
                      onClick={() => navigate(`/postDetail/${task.id}`)}
                    >
                      <MdOpenInNew />
                      Read Article
                    </button>
                  </div>
                </div>

                <div className="fav-card-body">
                  <h3 className="fav-title">{task.title}</h3>
                  <p className="fav-excerpt">{task.description}</p>

                  <button
                    className="remove-fav-btn"
                    onClick={() => removeFavorite(task.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;
