import React from "react";
import Background from "../../components/background/Background";
import Game from "../game/Game";
import "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Background />
        <Game />
      </div>
    );
  }
}

export default Home;
