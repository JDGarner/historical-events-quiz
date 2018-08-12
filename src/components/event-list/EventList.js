import React, { Component } from "react";
import classNames from "classnames";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./EventList.scss";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = draggableStyle => {
  return draggableStyle;
};

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.events
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.setState({
      events: reorder(
        this.state.events,
        result.source.index,
        result.destination.index
      )
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} className="event-list">
              {this.state.events.map((event, index) => (
                <Draggable key={event.id} draggableId={event.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className={classNames("event", {
                        isDragging: snapshot.isDragging
                      })}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(provided.draggableProps.style)}
                    >
                      {event.description}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default EventList;