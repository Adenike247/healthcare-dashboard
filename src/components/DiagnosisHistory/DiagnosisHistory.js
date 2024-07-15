import React from 'react'
import BodyCheckup from '../BodyCheckup'
import classes from './DiagnosisHistory.module.css'
import { checkupData } from '../Data'

const DiagnosisHistory = () => {
    return (
        <>
            <div>
                        <h3>Diagnosis History</h3>
            </div>
            <div className={classes.checkupContainer}>
                {checkupData.map((item) => (
                    <>

                        <div className={classes.checkupWrapper}>
                            <div className={classes.healthReportContainer}>
                                <BodyCheckup logo={item.logo} title={item.title} result={item.result} backgroundColor={item.background} status={item.status} />

                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
   
    )
}

export default DiagnosisHistory