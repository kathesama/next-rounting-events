/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React, {Fragment} from 'react';
import {useRouter} from 'next/router';
import cssStyle from '../events.module.css';
import {getAllEvents} from '../../dummyData';
import EventListComponent from '../../components/events/eventList.component';
import EventsSearchComponent from '../../components/events/eventsSearch.component';

const AllEventsPage = (props) => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventHandler = (year, month, event) =>{
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <div>
        <EventsSearchComponent onSearch={findEventHandler}/>
        <EventListComponent items={events}>All events page</EventListComponent>
      </div>
    </Fragment>);
};

export default AllEventsPage;
