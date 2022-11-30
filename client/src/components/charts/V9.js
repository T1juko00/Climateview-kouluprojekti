import React from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

export default function V9() {
    const data = {
        
        labels: [
          'Energy',
          'Indrustial processes',
          'Waste',
          'Agriculture'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [73.2, 5.2, 3.2, 18.4],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(78, 25, 90)'
          ],
          hoverOffset: 4
        }]
      };

  return (
    <div  style={{ width: "700px" }}>
    
    <Pie data={data} />
    </div>
     
  )
}
