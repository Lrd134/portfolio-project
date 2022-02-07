import React from "react";
import { Link, Outlet } from "react-router-dom";

function ForumLayout() {
  return (
    <div className="forum-layout">
      <Link to="/forums">Home</Link>
      <Link to="/forums/login">Login</Link>
      <div className="options">
        <div className="options-style"></div>
        <div className="options-style"></div>
        <div className="options-style"></div>
      </div>
      <Outlet/>
    </div>
  )
}

export default ForumLayout;