import React from "react";
import "./Event.scss";

const Event = ({ event, onSelectEvent }) => {
  return (
    <div className="event" onClick={() => onSelectEvent(event.id)}>
      <div className="event-description">{event.description}</div>
    </div>
  );
};

export default Event;
