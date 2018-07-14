import React from "react";
import EventList from "../../components/event-list/EventList";
import "./Home.scss";

class Home extends React.Component {
  constructor() {
    const allEvents = [
      {
        id: "1",
        description: "Queen Victoria dies",
        year: 1901
      },
      {
        id: "2",
        description: "Archduke Francis Ferdinand assassinated",
        year: 1914
      },
      {
        id: "3",
        description: "Germany invades Belgium (WWI)",
        year: 1914
      },
      {
        id: "4",
        description: "Start of World War One",
        year: 1914
      },
      {
        id: "5",
        description: "End of World War One",
        year: 1918
      },
      {
        id: "6",
        description: "Treaty of Versailles signed",
        year: 1919
      },
      {
        id: "7",
        description: "Mussolini seizes power in Italy",
        year: 1922
      },
      {
        id: "8",
        description: "Vladimir Lenin dies",
        year: 1924
      },
      {
        id: "9",
        description: "Night of the Long Knives",
        year: 1934
      },
      {
        id: "10",
        description: "Kristallnacht in Germany",
        year: 1938
      },
      {
        id: "11",
        description: "Germany invades Poland (WWII)",
        year: 1939
      },
      {
        id: "12",
        description: "Start of World War Two",
        year: 1939
      },
      {
        id: "13",
        description: "End of World War Two",
        year: 1945
      },
      {
        id: "14",
        description: "NATO founded",
        year: 1949
      },
      {
        id: "15",
        description: "Neil Armstrong walks on the moon",
        year: 1969
      }
    ];

    super();
    this.state = {
      allEvents,
      displayedEvents: this.getUniqueEvents(allEvents)
    };
  }

  getUniqueEvents(allEvents, count = 4) {
    const events = [];
    while (events.length < count) {
      const event = allEvents[Math.floor(Math.random() * allEvents.length)];
      if (!events.find(e => e.id === event.id)) {
        events.push(event);
      }
    }

    return events;
  }

  render() {
    return (
      <div className="home">
        <EventList events={this.state.displayedEvents} />
      </div>
    );
  }
}

export default Home;
