import React from 'react'
import BodyCheckup from '../BodyCheckup'
import classes from './DiagnosisHistory.module.css'
import { checkupData } from '../Data'
import Statistics from '../Statistics/Statistics'

const DiagnosisHistory = () => {
    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis',
            },
            legend: {
                position: 'right',
            },

        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
    const labels = [
        'Oct, 2023',
        'Nov, 2023',
        'Dec, 2023',
        'Jan, 2024',
        'Feb, 2024',
        'Mar, 2024',
    ];
    const data = {
        labels,
        datasets: [
            {
                label: 'Systolic',
                data: [120, 110, 120, 180, 150, 158],
                borderColor: 'rgba(194, 110, 180)',
                backgroundColor: 'rgba(194, 110, 180)',
                yAxisID: 'y',
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
            },
            {
                label: 'Diastolic',
                data: [120, 62, 110, 90, 70, 78],
                borderColor: 'rgba(126, 108, 171)',
                backgroundColor: 'rgb(140, 111, 230)',
                yAxisID: 'y1',
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4,
            },
     
        ],
    };
    return (
        <>
            <div className={classes.diagnosisPage}>
           
                <h3>Diagnosis History</h3>
                <Statistics chartData={data} chartOptions={options} />
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