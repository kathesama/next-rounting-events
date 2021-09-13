/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React from 'react';
import Link from 'next/link';
import cssStyle from './mainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={cssStyle.header}>
      <div className={cssStyle.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={cssStyle.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
