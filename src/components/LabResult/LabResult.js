import React from 'react'
import DownLoad from '../../assets/svg/DownLoad'
import classes from './LabResult.module.css'
import { labResult } from '../Data'
const LabResult = () => {
  return (
      <div className={classes.pageRoot}>
          <h3 className={classes.header}>LabResults</h3>
          {labResult.map((result,index) => (
              <>
                  <div key={result.testName+index} className={classes.testWrapper}>
                      <p className={classes.testName}>{result.testName}</p>
                      <DownLoad />
                  </div>
              </>
   ))     }
    </div>
  )
}

export default LabResult