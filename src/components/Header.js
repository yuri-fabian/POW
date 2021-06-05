import React, { Component } from "react";
import "../styles/Header.css";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adam",
    };
  }
  render() {
    return (
      <div className="search-area">
        <input
          type="text"
          name="search"
          placeholder="Search"
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default Header;
