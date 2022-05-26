import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    window.location = "/"; //since cdm executes just once in entire app lifecycle so instead of history push as we are logging out full reload of app is preferred. cdm will execute again
    //our entire app will be reloaded
    // our app component will be mounted again
    //our navbar will be refreshed accordingly
  }

  render() {
    return null;
  }
}

export default Logout;
