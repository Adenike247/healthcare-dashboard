import React from 'react'
import classes from './PatientProfile.module.css'
import { taylor2 } from '../../assets/image'
import { patientData } from '../Data'
const PatientProfile = () => {
  return (
      <div className={classes.pageRoot}>
          <div className={classes.imageContainer}>
              <img src={taylor2} alt="profile" />
          </div>
          <h1 className={classes.patientName}>Jessica Taylor</h1>
          {patientData.map((data,index) => (
              <>
                  <div key={data.upperText+index} className={classes.detailSection}>
                      <div>{data.icon}</div>
                   
                      <div>
                          <h3 className={classes.upperText}>{data.upperText}</h3>
                          <p className={classes.bottomText}>{data.bottomText}</p>
                      </div>
                  </div>
              </>
         )) }
          <button className={classes.showBtnWrapper}>
              <h3 className={classes.showBtn}>Show All Information</h3>
          </button>
    </div>
  )
}

export default PatientProfile
