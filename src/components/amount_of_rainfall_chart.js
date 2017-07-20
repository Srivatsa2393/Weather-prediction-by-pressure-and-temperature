import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

//refactoring it to functional component as there is no state involved in the component

const AmountOfRainfallChart = (props) => {
  return(
    <div>
      <BarChart width={600} height={300} data={props.chartData}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="day" label="Days"/>
        <YAxis label="l/m2" />
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="amount" fill="#b30000" />
        </BarChart>
    </div>
  );
}

export default AmountOfRainfallChart;
