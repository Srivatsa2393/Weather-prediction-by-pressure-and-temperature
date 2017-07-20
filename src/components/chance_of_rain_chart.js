import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChanceOfRainChart extends Component {
  render() {
    return(
      <div>
        <LineChart width={650} height={350} data={this.props.chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" label="Days"/>
          <YAxis label="%"/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line dataKey="upperBound" stroke="#8884d8" />
          <Line dataKey="mean" stroke="#82ca9d" />
          <Line dataKey="lowerBound" stroke="#751aff" />
        </LineChart>
      </div>
    );
  }
}

export default ChanceOfRainChart;
