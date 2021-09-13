/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React from 'react';
import Link from 'next/Link';
import cssStyle from './button.module.css';

const Button = (props) => {
  if (props.href) {
    return <Link href={props.href}>
      <a className={cssStyle.btn}>{props.children}</a>
    </Link>;
  }

  return <button className={cssStyle.btn} onClick={props.onClick}>
    {props.children}
  </button>;
};

export default Button;
