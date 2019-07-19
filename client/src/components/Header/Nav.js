import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
  return {};
}

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Link</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(
  mapStateToProps,
)(Nav);