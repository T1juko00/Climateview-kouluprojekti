import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
//import "chartjs-adapter-luxon";


   export default function V6 () {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let globalAnnual = "http://localhost:8080/V6Data"
    
    const request1 = axios.get(globalAnnual);
    
    const Chart = () => { 
      axios.all([request1]).then(axios.spread((...responses) => {
        const globalYear = responses[0].data
        
    
          setChartData({

            labels: globalYear.map(d => d.year_monthly),
            datasets: [
                {
                label: 'CO2 (ppm)',
                data: globalYear.map(d => d.co2),
                backgroundColor: 'red',
                borderColour: 'red'               
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
          text: "Ice core 800k year composite study CO2 measurements",
        },
      },
      scales: {
          
          yAxis: {
          type: "linear",
          title: {
            display: true,
            text: "Co2 measurement ppm (parts per million)"
          }
        },
        xAxis: {
          title: {
            display: true,
            text: "Years calBP (calendar years before present)"
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
          <a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975">Description</a><br />
        <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt">Dataset</a>
        <p>CO2 Records from all the main ice cores from antarctica over the time period of ~800 000 years</p>
        </div>
        </div>
    );
  } } 