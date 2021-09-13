import cssClasses from './eventContent.module.css';

const EventContent = (props) => {
  return (
    <section className={cssClasses.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
