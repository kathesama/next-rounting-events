import cssClasses from './eventSummary.module.css';

const EventSummary = (props) => {
  const { title } = props;

  return (
    <section className={cssClasses.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;