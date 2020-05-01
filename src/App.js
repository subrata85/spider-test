import React, { Component } from "react";

// import Component
import Login from "./views/user/login/login";
import Signup from "./views/user/signup/signup";

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default App;
