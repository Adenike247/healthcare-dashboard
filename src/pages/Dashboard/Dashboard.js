import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Dashboard.module.css'
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div className={classes.pageRoot}>
      <Navbar />
      <div className={classes.mainRoot}>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Dashboard
