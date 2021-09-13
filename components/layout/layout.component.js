/*
Created by: kathe
On: 12-Sep-21 : 12-Sep-21
Project: chapter-four
*/
import React, { Fragment } from 'react';
import MainHeader from './mainHeader.component';

const Layout = (props) => {
  return(
  <Fragment>
    <MainHeader />
    <main>{props.children}</main>
  </Fragment>
  );
};

export default Layout;
