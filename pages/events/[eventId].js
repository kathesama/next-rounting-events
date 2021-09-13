/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React, {Fragment} from 'react';
import { useRouter } from 'next/router'

import {getEventById} from '../../dummyData';
import EventSummary from '../../components/eventDetail/eventSummary';
import EventLogistics from '../../components/eventDetail/eventLogistics';
import EventContent from '../../components/eventDetail/eventContent';

const EventDetailPage = (props) => {
  const router = useRouter();
  const eventById= getEventById(router.query.eventId);

  if (!eventById){
    return  <p>No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={eventById.title} />
      <EventLogistics
        date={eventById.date}
        address={eventById.location}
        image={eventById.image}
        imageAlt={eventById.title}
      />
      <EventContent>
        <p>{eventById.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
