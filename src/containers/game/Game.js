import React from "react";
import { getAllEvents } from "../../api/events";
import EventList from "../../components/event-list/EventList";
import SubmitButton from "../../components/submit-button/SubmitButton";
import "./Game.scss";

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      allEvents: [],
      correctOrderEvents: [],
      playerOrderedEvents: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onEventsFetchSuccess = this.onEventsFetchSuccess.bind(this);
    this.onEventsFetchFailure = this.onEventsFetchFailure.bind(this);
  }

  componentDidMount() {
    getAllEvents(this.onEventsFetchSuccess, this.onEventsFetchFailure);
  }

  onEventsFetchSuccess(allEvents) {
    const events = this.getUniqueEvents(allEvents);

    this.setState({
      allEvents,
      correctOrderEvents: this.sortEventsByDate(events),
      playerOrderedEvents: events
    });
  }

  onEventsFetchFailure(err) {
    // TODO: handle error
    console.log("Error: ", err);
  }

  getUniqueEvents(allEvents, count = 4) {
    const events = [];
    while (events.length < count) {
      const event = allEvents[Math.floor(Math.random() * allEvents.length)];
      if (!events.find(e => e._id === event._id)) {
        events.push(event);
      }
    }

    return events;
  }

  sortEventsByDate(events) {
    // TODO: change date format then do this function

    return events;
  }

  onSubmit() {
    // check order of events against correct order of events
    // if correct -> show tick or something
    // if incorrect -> show correct order
    // increase/decrease score
  }

  render() {
    // TODO: make unique
    const id = this.state.playerOrderedEvents[0] ? this.state.playerOrderedEvents[0]._id : "0";

    return (
      <div className="game">
        <EventList
          key={id}
          initialEvents={this.state.playerOrderedEvents}
        />
        <SubmitButton onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Game;
