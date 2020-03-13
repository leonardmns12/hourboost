import React from 'react';
import './Sidebar.scss';
import { handleJquery } from './jquery';

class Sidebar extends React.Component{

    componentDidMount(){
        handleJquery();
    }

    handleLogout = () => {
      localStorage.removeItem('userData');
    }


    render(){
        return(
<div className="page-wrapper chiller-theme toggled">
  <button id="show-sidebar" className="btn btn-sm btn-dark">
    <i className="fas fa-bars"></i>
  </button>
  <nav id="sidebar" className="sidebar-wrapper">
    <div className="sidebar-content">
      <div className="sidebar-brand">
        <a href="# " className="btn-panels">Control Panel</a>
        <div id="close-sidebar">
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="sidebar-header">
        <div className="user-pic">
          <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User"/>
        </div>
        <div className="user-info">
          <span className="user-name">{this.props.username}
          </span>
          <span className="user-role">Member</span>
          <span className="user-status">
            <i className="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
  
      <div className="sidebar-search">
        <div>
          <div className="input-group">
            <input type="text" className="form-control search-menu" placeholder="Search..."/>
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
   
      <div className="sidebar-menu">
        <ul>
          <li className="header-menu">
            <span>General</span>
          </li>
          <li className="sidebar-dropdown">
            <a href="# ">
              <i className="fa fa-tachometer-alt"></i>
              <span>Dashboard</span>
              <span className="badge badge-pill badge-warning">New</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="# ">Control Panel
                    <span className="badge badge-pill badge-success">Pro</span>
                  </a>
                </li>
                <li>
                  <a href="# ">Account</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="# ">
              <i className="fa fa-shopping-cart"></i>
              <span>Pricing</span>
              <span className="badge badge-pill badge-danger">3</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="# ">Products

                  </a>
                </li>
                <li>
                  <a href="# ">Orders</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="# ">
              <i className="far fa-comments"></i>
              <span>FAQ</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="# ">General</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="# ">
              <i className="fas fa-cogs"></i>
              <span>Settings</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="# ">Steam Account</a>
                </li>
                <li>
                  <a href="# ">Web Account</a>
                </li>
              </ul>
            </div>
          </li>
          
          <li className="header-menu">
            <span>Extra</span>
          </li>
          <li>
            <a href="# ">
              <i className="fa fa-book"></i>
              <span>Documentation</span>
              <span className="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a href="# ">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="http://localhost:3000/" onClick={this.handleLogout}>
              <i className="fas fa-power-off"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
   
    </div>

    <div className="sidebar-footer">
      <a href="# ">
        <i className="fa fa-bell"></i>
        <span className="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="# ">
        <i className="fa fa-envelope"></i>
        <span className="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="# ">
        <i className="fa fa-cog"></i>
        <span className="badge-sonar"></span>
      </a>
      <a href="# ">
        <i className="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
  <script src="jquery.js"></script>
</div>
          
        )
    }
}

export default Sidebar;