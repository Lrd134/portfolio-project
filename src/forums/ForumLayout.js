import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Layout from "../root/Layout";

class ForumLayout extends Component {
  state = {
    showOptions: false
  }

  render() {
    const showOptions = () => {
      this.setState({showOptions: !this.state.showOptions})
    }
    return (
      <div className="forum-layout">
        <Link to="/forums">Home</Link>
        <Link to="/forums/login">Login</Link>
        <div onClick={showOptions} className="options">
          <div className="options-style"></div>
          <div className="options-style"></div>
          <div className="options-style"></div>
        </div>
        {this.state.showOptions ? <Layout type="hover" /> : null }
        <Outlet/>
      </div>
    )
  }
}

export default ForumLayout;