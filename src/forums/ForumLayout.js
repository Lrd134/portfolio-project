import React from "react";
import { Link, Outlet } from "react-router-dom";

function ForumLayout() {
  return (
    <div className="forum-layout">
      <Link to={location => `${location.pathname}/login`}>Login</Link>
      <Outlet/>
    </div>
  )
}

export default ForumLayout;