import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";


   export default function V3 () {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let globalAnnual = "http://localhost:8080/V3Data"
    let globalMonthy = "http://localhost:8080/V3_1Data"
    let v4data = "http://localhost:8080/V4Data"
    let eventData = "http://localhost:8080/V10_4Data"
     
    const request1 = axios.get(globalAnnual);
    const request2 = axios.get(globalMonthy);
    const request3 = axios.get(v4data);
    const request4 = axios.get(eventData)
    
   

    const Chart = () => { 
      axios.all([request1, request2, request3,request4 ]).then(axios.spread((...responses) => {
        const globalYear = responses[0].data
        const globalMonth = responses[1].data
        const V4Data = responses[2].data
        const event = responses[3].data
    
          setChartData({
           
            labels: globalMonth.map(d => d.year_monthly),
            datasets: [
                {
                label: 'Annual mean',
                data: globalYear.map(d => d.co2),
                backgroundColor: 'red',
                borderColour: 'red'               
              },             
                {  
                  label: 'Monthly mean',
                  data: globalMonth.map(d => d.co2),
                  backgroundColor: 'blue',
                  borderColour: 'blue'
                },
                {  
                  label: 'V4',
                  data: V4Data.map(d => d.co2),
                  backgroundColor: 'violet',
                  borderColour: 'violet'
                },
                {  
                  label: 'Notable events in human history',
                  data: event.map(d => d.event),
                  backgroundColor: 'purple',
                  borderColour: 'purple'
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
          text: "Mauna Loa CO2 consentration",
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
          <p>
          <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">Description</a><br />
        <p>Description here</p> <br />
        <a href="https://gml.noaa.gov/ccgg/trends/data.html">Dataset</a>
        </p>
        </div>
    );
  } } 
