import React from "react";
import "./SubmitButton.scss";

const SubmitButton = ({ onSubmit }) => {
  return <button onClick={onSubmit} className="submit-button" />;
};

export default SubmitButton;
