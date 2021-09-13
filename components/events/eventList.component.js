/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React from 'react';
import cssStyle from './eventList.module.css';
import EventItem from './eventItem.component';

const EventListComponent = (props) => {
  const { items } = props;
  console.log(items);

  return (
    <div className={cssStyle.list}>
      <ul>
        { items.map((event) => {
          return <EventItem key={event.id} id={event.id} title={event.title} location={event.location} image={event.image} date={event.date}></EventItem>
        })}
      </ul>
    </div>);
};

export default EventListComponent;
