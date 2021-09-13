/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React from 'react';
import cssStyle from './eventItem.module.css';
import Button from '../ui/button/button.component';
import DateIcon from '../icons/dateIcon';
import AddressIcon from '../icons/addressIcon';
import ArrowRightIcon from '../icons/arrowRight';

const EventItem = (props) => {
  const { id, title, location, image, date } = props;
  console.log(id, title, location, image, date);
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(',', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={cssStyle.item}>
      <img src={`/${image}`} alt={title}/>
      <div className={cssStyle.content}>
        <div className={cssStyle.summary}>
          <h2>{ title }</h2>
          <div  className={cssStyle.date}>
            <DateIcon />
            <time>{ humanReadableDate }</time>
          </div>
          <div className={cssStyle.address}>
            <AddressIcon />
            <address>{ formattedAddress }</address>
          </div>
        </div>
        <div className={cssStyle.actions}>
          <Button href={ exploreLink }>
            <span>Explore Event</span>
            <span className={cssStyle.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
