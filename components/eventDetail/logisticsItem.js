import cssClasses from './logisticsItem.module.css';

const LogisticsItem = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={cssClasses.item}>
      <span className={cssClasses.icon}>
        <Icon />
      </span>
      <span className={cssClasses.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
