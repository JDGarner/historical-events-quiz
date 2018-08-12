import React from "react";
import "./Background.scss";

const Background = ({ numberOfParticles = 5 }) => {
  const particles = [];
  for (let i = 0; i < numberOfParticles; i++) {
    particles.push(<span key={i} className="particle" />);
  }

  return <div className="background">{particles}</div>;
};
export default Background;
