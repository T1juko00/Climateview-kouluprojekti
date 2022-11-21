import React, { useState,useEffect } from "react";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";

const V2 = () => {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    const Chart = () => {
      let year_monthly = []
      let co2 = []
      axios.get("http://localhost:8080/V6Data")
        .then(response => {
          for (const dataObj of response.data) {
            year_monthly.push(dataObj.year_monthly)
            co2.push(dataObj.co2)
          }
          setChartData({
            labels: year_monthly,
            datasets: [
              {
                label: 'V6 Data',
                data: co2,
                backgroundColor:'red',
                borderColor:'black'
              }
            ],
            
          }); 
          setisloading(false)
        })).catch(error => {
          alert(error)
          setisloading(true)
        }
        )
    }

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display : true,
          text:"V6 Data",
        },
      },
      scales: {
          
          yAxis: {
          type: "linear"
        },
        
      },
    };
    
    useEffect(() => {
      Chart()
    }, [])
  
    if(isloading === true){
      return(
        <p>Loading</p>
      )
    }
  
    else {
      
      return (
        <div id='chart' style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div><Line data={chartData} options={options}  />
              
             </div>
          </div>
          <p>Linkit ja description tänne</p>
        </div>
    );
  }}

  export default V2