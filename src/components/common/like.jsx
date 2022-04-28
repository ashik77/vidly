import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart"; // this is the base
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
