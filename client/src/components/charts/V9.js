import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import axios from 'axios';

export default function V9() {
    
  
    let energy = "http://localhost:8080/V9Data"
    let industrial = "http://localhost:8080/V9_1Data"
    let waste = "http://localhost:8080/V9_2Data"
    let agriculture = "http://localhost:8080/V9Data"

    const request1 = axios.get(energy);
    const request2 = axios.get(industrial);  
    const request3 = axios.get(waste);
    const request4 = axios.get(agriculture);

    axios.all([request1,request2,request3,request4]).then(axios.spread((...responses) => {
      const energy = responses[0].data
      const industrial = responses[1].data
      const waste = responses[2].data
      const agriculture = responses[3].data
    
  
  
  
  
  
  
  const data = {
        
        labels: [
         energy.map((thisElement, index) => {
          console.log(thisElement);
          console.log(index);
          return thisElement
         }),
         

        ],
        datasets: [{
          
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
    
    
    <Doughnut data={data} />
    
     
  )
}))
}
