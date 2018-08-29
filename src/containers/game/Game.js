import React from "react";
import { getAllEvents } from "../../api/events";
import Score from "../../components/score/Score";
import EventList from "../../components/event-list/EventList";
import SubmitButton from "../../components/submit-button/SubmitButton";
import "./Game.scss";

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
      allEvents: [],
      correctlyOrderedEvents: [],
      initiallyOrderedEvents: [],
      playerOrderedEvents: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onRedorderEvents = this.onRedorderEvents.bind(this);
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
      correctlyOrderedEvents: this.sortEventsByDate(events),
      initiallyOrderedEvents: events,
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
    return events.slice().sort((a, b) => a.date >= b.date);
  }

  onRedorderEvents(events) {
    this.setState({ playerOrderedEvents: events });
  }

  checkAnswer(playerOrderedEvents, correctlyOrderedEvents) {
    return playerOrderedEvents.every(
      (event, i) => event._id === correctlyOrderedEvents[i]._id
    );
  }

  onSubmit() {
    // check order of events against correct order of events
    const isCorrect = this.checkAnswer(
      this.state.playerOrderedEvents,
      this.state.correctlyOrderedEvents
    );

    // if correct -> show tick or something
    // if incorrect -> show correct order
    // increase/decrease score

    const events = this.getUniqueEvents(this.state.allEvents);

    this.setState({
      score: (this.state.score += isCorrect ? 1 : -1),
      correctlyOrderedEvents: this.sortEventsByDate(events),
      initiallyOrderedEvents: events
    });
  }

  generateUniqueQuestionKey(events) {
    return events.length > 0
      ? events.reduce((acc, event) => acc + event._id, "")
      : "empty_question_key";
  }

  render() {
    return (
      <div className="game">
        <Score score={this.state.score} />
        <EventList
          key={this.generateUniqueQuestionKey(
            this.state.initiallyOrderedEvents
          )}
          initialEvents={this.state.initiallyOrderedEvents}
          onRedorderEvents={this.onRedorderEvents}
        />
        <SubmitButton onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Game;
