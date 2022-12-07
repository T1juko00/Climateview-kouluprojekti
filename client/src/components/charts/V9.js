import React,{useState,useEffect} from 'react'
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

export default function V9() {

  const [chartdata, setChartdata] = useState('')

  //let emission= "http://localhost:8080/V9AllData"

  setChartdata ({
        
    labels: [
      'Energy',
      'Indrustial processes',
      'Waste',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [73.2, 5.2, 3.2],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 3
    }]
  });


  return (
    <div  style={{ width: "700px" }}>
    <Pie data={chartdata} />
    </div>   
  )
}