import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const SkillsChart = () => {
    const data = [
        {
          data: {
            python: 0.7,
            react: .8,
            node: 0.9,
            cpp: 0.67,
            weight: 0.8
          },
          meta: { color: 'blue' }
        }
      ];
   
  const captions = {
        // columns
        battery: 'Battery Capacity',
        design: 'Design',
        useful: 'Usefulness',
        speed: 'Speed',
        weight: 'Weight'
      };
    return (
        <RadarChart
            captions={captions}
            data={data}
            size={450}
        />
    );
}

export default SkillsChart;
