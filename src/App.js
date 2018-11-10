import React, { Component } from "react";

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
    return (
      <div className="App">
        <h1>Reactv16</h1>
        {this.state.time.toString()}
      </div>
    );
  }
}

export default App;
