import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
function Layout(props) {

  if (props.type === "main") {
    return (
      <div>
        <Outlet />
      </div>
    )
  } else if (props.type === "hover") {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

export default Layout;