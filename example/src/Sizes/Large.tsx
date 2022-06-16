import React from 'react'
import BatteryGauge from '../../../dist'


export default function Large() {
    return (
        <div>
             <h2>Large (500px)</h2>
            <BatteryGauge value={80} size={500} customization={{
            batteryBody: {
              strokeColor: '#333',
              strokeWidth: 1,
              cornerRadius: 2,
            },
            batteryCap: {
              strokeColor: '#333',
              cornerRadius: 1,
              strokeWidth: 1,
              capToBodyRatio: 0.3,
            },
            batteryMeter: {
              outerGap: 1,
              noOfCells: 10,
            },
            readingText: {
              lowBatteryColor: 'red',
              fontSize: 16,
              style: { filter: 'url(#shadow)' },
            },
          }}/>
        </div>
    )
}
