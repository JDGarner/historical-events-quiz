import React from "react";
import "./Counter.scss";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <button
        className="counter-button"
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Counter: {this.state.count}
      </button>
    );
  }
}
export default Counter;
