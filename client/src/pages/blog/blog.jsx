import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="blog-title">Green View Blog</h1>
        <p className="blog-intro">Stay up to date with seasonal tips, Calgary weather care, and landscaping news.</p>

        <div className="blog-post">
          <h2>🌧️ Spring Weather Lawn Tips</h2>
          <p>Learn how to protect your grass during unpredictable Calgary springs with proper drainage, mowing, and aeration tips.</p>
        </div>

        <div className="blog-post">
          <h2>🌞 Summer Heat Lawn Care</h2>
          <p>Keep your lawn green during hot days. Tips on watering schedules and preventing drought stress.</p>
        </div>

        <div className="blog-post">
          <h2>📢 News: New Sod Supplier Partnership</h2>
          <p>We’re excited to announce a new local partnership that brings better-quality sod to your yard.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;