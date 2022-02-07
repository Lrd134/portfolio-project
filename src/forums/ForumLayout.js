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
      <div>
        <div className="navbar">
          <Link className="link-layout" to="/forums">Home</Link>
          <Link to="/forums/login" className="link-layout" >Login</Link>
          <div onClick={showOptions} className="options">
            <div className="options-style"></div>
            <div className="options-style"></div>
            <div className="options-style"></div>
          </div>
          {this.state.showOptions ? <Layout type="hover" /> : null }
        </div>
        <Outlet/>
      </div>
    )
  }
}

export default ForumLayout;