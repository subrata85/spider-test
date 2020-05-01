import React, { Component } from "react";
import { Provider } from "../../context/context";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <Provider value={this.state}>
        <div>hello</div>
      </Provider>
    );
  }
}

export default Home;
