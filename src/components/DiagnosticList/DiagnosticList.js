import React from 'react'
import classes from './DiagnosticList.module.css'
import { tableData } from '../Data'
const DiagnosticList = () => {
  return (
      <div className={classes.pageRoot}>
          <h3 className={classes.header}>DiagnosticList</h3>
          <table className={classes.tableContainer}>
              <tr className={classes.tableHeader}>
                  <th>Problem/Diagnosis</th>
                  <th>Description</th>
                  <th>Status</th>
              </tr>
              {tableData.map((row,index) => (
                  <>
                      <tr>
                          <td>{row.problemDiagnosis}</td>
                          <td>{row.description}</td>
                          <td className={classes.status}>{row.status}</td>
                      </tr>
                  </>
            ))}
           
          </table>
    </div>
  )
}

export default DiagnosticList