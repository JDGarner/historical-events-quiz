import React from "react";
import posed from "react-pose";
import "./SubmitButton.scss";

const SubmitButtonPosed = posed.button({
  idle: { scale: 1 },
  hovered: { scale: 1.05 }
});

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: false
    };
  }

  render() {
    return (
      <div className="submit-button-container">
        <SubmitButtonPosed
          className="submit-button"
          onClick={this.props.onSubmit}
          pose={this.state.hovering ? "hovered" : "idle"}
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
        />
      </div>
    );
  }
}

export default SubmitButton;
