/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React, {Fragment} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {getFilteredEvents} from '../../dummyData';
import EventListComponent from '../../components/events/eventList.component';
import ResultsTitle from '../../components/events/resultsTitle/resultsTitle';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import Button from '../../components/ui/button/button.component';

const FiteredEventsPage = (props) => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData){
    return <p className='center'>loading...</p>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if ( isNaN(filteredYear) ||
      isNaN(filteredMonth) ||
      filteredYear > 2030 ||
      filteredYear < 2021 ||
      filteredMonth > 12 ||
      filteredMonth < 1 ){
    return <p className='center'>Invalid filter, please adjust your values...</p>
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth
  });

  if (!filteredEvents || filteredEvents.length === 0){
  //   return <p className='center'>no events found for chosen filter!</p>
  // }
  //
  // if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button href='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return <Fragment>
    <ResultsTitle date={date} />
    <EventListComponent items={filteredEvents}>Filtered event page</EventListComponent>
  </Fragment>;
};

export default FiteredEventsPage;
