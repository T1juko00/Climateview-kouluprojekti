import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";


   export default function V7 () {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let temp = "http://localhost:8080/V7Data"
    let co2Year = "http://localhost:8080/V7_1Data"
    let eventData = "http://localhost:8080/V10_7Data"
    
    const request1 = axios.get(temp);
    const request2 = axios.get(co2Year);
    const request3 = axios.get(eventData);
    
    const Chart = () => { 
      axios.all([request1,request2,request3]).then(axios.spread((...responses) => {
        const tempAnnual = responses[0].data
        const co2Annual = responses[1].data
        const event = responses[2].data
        console.log(event);
        
    
          setChartData({

            labels: tempAnnual.map(d => d.year),
            datasets: [
                {
                label: 'Temperature',
                data: tempAnnual.map(d => d.temp),
                backgroundColor: 'red',
                borderColour: 'red',
                yAxisID: 'y',
              },
              {
                label: 'Co2',
                data: co2Annual.map(d => d.co2),
                backgroundColor: 'blue',
                borderColour: 'blue',
                yAxisID: 'y1',        
              },
              {
                label: 'Notable events in Human history',
                data: event.map(d =>{
                  let newformat = {
                    
                    event: d.event,
                    value: 290,
                    year: 2022 - d.year,
                  }
                  console.log(newformat);          
                  return newformat   
                } ),
                backgroundColor: 'purple',
                  borderColour: 'purple',
                  yAxisID: 'y1',
                  parsing: {
                    xAxisKey: "year",
                    yAxisKey: "value",
                  },    
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
          text: "Evolution of global temperature over the past two million years",
        },
        tooltip: {
          callbacks: {
            label: ((tooltipItem) => {
              console.log(tooltipItem);
              if(tooltipItem.datasetIndex === 2){
                return tooltipItem.raw.event
              }
              else {
                return tooltipItem.dataset.label + " " + tooltipItem.formattedValue
              }
              
            })
          }
        },
      },
      scales: {
       y: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Temperature change',
        },
        },
        y1: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'CO2 ppm',
          },
        },
        x: {
          type: "linear",
          reverse: "true",
          title: {
            display: true,
            text: 'Time (Years ago, 0 meaning 2022)',
          },
        }
          
        },
        
      }

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
            <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Description</a><br />
          <a href="http://carolynsnyder.com/publications.php">Dataset</a>
          <p>This chart combines the evolution of global temperatures of the available past 2 million years, with the evolution of global CO2 concentrations from the available past 800 000 years. </p>
          </div>
          </div>
      );
    }  
    };
    
   