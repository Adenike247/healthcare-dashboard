import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Dashboard.module.css'
import Sidebar from '../../components/Sidebar';
import PatientProfile from '../../components/PatientProfile';

const Dashboard = () => {
  return (
    <div className={classes.pageRoot}>
      <Navbar />
      <div className={classes.mainRoot}>
        <Sidebar />
        <div>
          <PatientProfile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
