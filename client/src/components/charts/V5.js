import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
//import "chartjs-adapter-luxon";


   export default function V5 () {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let globalAnnual = "http://localhost:8080/V5Data"
    
    const request1 = axios.get(globalAnnual);
    

    const Chart = () => { 
      axios.all([request1]).then(axios.spread((...responses) => {
        const globalYear = responses[0].data
        
    
          setChartData({
           
            labels: globalYear.map(d => d.year),
            datasets: [
                {
                label: 'CO2 concentration (ppmv)',
                data: globalYear.map(d => d.co2),
                backgroundColor: 'red',
                borderColour: 'black'               
              },             
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
          display: true,
          text: "Vostok Ice Core CO2 measurements, 417160 - 2342 years",
        },
      },
      scales: {
          yAxis: {
          type: "linear",
          title: {
            display: true,
            text: "Co2 concentration (ppmv)",
          },
        },
        xAxis: {
          title: {
           display: true,
           text: "Years BP (before present)",
          }
        }
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
          <div> 
          <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html">Description</a><br />
        <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2">Dataset</a>
        <p>This line chart contains CO2 records derived from the ice core of the Russian Vostok station in Antarctica. </p>
        </div>
        </div>
    );
  } } 
