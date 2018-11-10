import React, { Component } from "react";
import Child from "./Child";

class App extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    console.log("log app");

    return (
      <div className="App">
        <h1>Reactv16</h1>
        {/* Rendering all the time Not good ! */}
        <Child seconds={1} />
        {this.state.time.toString()}
      </div>
    );
  }
}

export default App;
