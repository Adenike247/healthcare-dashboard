import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import classes from './Dashboard.module.css'
import Sidebar from '../../components/Sidebar';
import PatientProfile from '../../components/PatientProfile';
import LabResult from '../../components/LabResult/LabResult';
import MainContent from '../../components/MainContent/MainContent';

const Dashboard = () => {
  return (
    <div className={classes.pageRoot}>
      <Navbar />
      <div className={classes.mainRoot}>
        <Sidebar />
        <MainContent/>
        <div>
          <PatientProfile />
          <LabResult/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
