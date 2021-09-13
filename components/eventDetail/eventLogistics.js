import AddressIcon from '../icons/addressIcon';
import DateIcon from '../icons/dateIcon';
import LogisticsItem from './logisticsItem';
import cssClasses from './eventLogistics.module.css';

const EventLogistics = (props) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={cssClasses.logistics}>
      <div className={cssClasses.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={cssClasses.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
