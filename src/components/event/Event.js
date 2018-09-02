import React from "react";
import posed from "react-pose";
import "./Event.scss";

const EventPosed = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }

  render() {
    return (
      <div className="event-container">
        <EventPosed
          className="event"
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        >
          {this.props.description}
        </EventPosed>
      </div>
    );
  }
}

export default Event;
