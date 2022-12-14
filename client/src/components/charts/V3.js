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
    let v4_1data = "http://localhost:8080/V4_1Data"
    let v4_2data = "http://localhost:8080/V4_2Data"
    let eventData = "http://localhost:8080/V10_4Data"
     
    const request1 = axios.get(globalAnnual);
    const request2 = axios.get(globalMonthy);
    const request3 = axios.get(v4data);
    const request4 = axios.get(eventData);
    const request5 = axios.get(v4_1data);
    const request6 = axios.get(v4_2data);
    

    const Chart = () => { 
      axios.all([request1, request2, request3, request4, request5, request6 ]).then(axios.spread((...responses) => {
        const globalYear = responses[0].data
        const globalMonth = responses[1].data
        const V4Data = responses[2].data
        const event = responses[3].data
        const DE08 = responses[4].data
        const DE08_2 = responses[5].data
    
          let muuttuja = {
           
            
            datasets: [
                {
                label: 'Annual mean',
                data: globalYear.map(d =>{
                  let newformat = {
                    co2: d.co2,
                    year: d.year.toString()
                  }
                  return newformat
                } ),
                backgroundColor: 'red',
                borderColour: 'red',
                parsing: {
                  xAxisKey: "year",
                  yAxisKey: "co2",
                }               
              },             
                {  
                  label: 'Monthly mean',
                  data: globalMonth.map(d =>{
                    let newformat = {
                      co2: d.co2,
                      year_monthly: d.year_monthly.toString().substring(0,4) + "-" + d.year_monthly.toString().substring(5,7).padEnd(2,"0") + "-01"
                    }
                    return newformat
                  } ),
                  backgroundColor: 'blue',
                  borderColour: 'blue',
                  parsing: {
                    xAxisKey: "year_monthly",
                    yAxisKey: "co2",
                  }   
                },
                {  
                  label: 'DSS',
                  data: V4Data.map(d =>{
                    let newformat = {
                      co2: d.co2,
                      year: d.year.toString()
                    }
                    return newformat
                  } ),
                  backgroundColor: 'violet',
                  borderColour: 'violet',
                  parsing: {
                    xAxisKey: "year",
                    yAxisKey: "co2",
                  }
                },
                {  
                  label: 'DE08',
                  data: DE08.map(d =>{
                    let newformat = {
                      co2: d.co2,
                      year: d.year.toString()
                    }
                    return newformat
                  } ),
                  backgroundColor: 'yellow',
                  borderColour: 'yellow',
                  parsing: {
                    xAxisKey: "year",
                    yAxisKey: "co2",
                  }
                },
                {  
                  label: 'DE08-2',
                  data: DE08_2.map(d =>{
                    let newformat = {
                      co2: d.co2,
                      year: d.year.toString()
                    }
                    return newformat
                  } ),
                  backgroundColor: 'green',
                  borderColour: 'green',
                  parsing: {
                    xAxisKey: "year",
                    yAxisKey: "co2",
                  }
                },
                {  
                  label: 'Notable events in human history',
                  data: event.map(d =>{
                    let newformat = {
                      
                      event: d.event,
                      value: 430,
                      year: d.year.toString().padStart(4,"0"),
                    }
                    console.log(newformat);          
                    return newformat
                    
                  } ), 
                  backgroundColor: 'purple',
                  borderColour: 'purple',
                  parsing: {
                    xAxisKey: "year",
                    yAxisKey: "value",
                     
                    
                  },
                },
              ],
        
        }
          setChartData(muuttuja); 
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
        tooltip: {
          callbacks: {
            label: ((tooltipItem) => {
              console.log(tooltipItem);
              if(tooltipItem.datasetIndex === 5){
                return tooltipItem.raw.event
              }
              else {
                return tooltipItem.dataset.label + " " + tooltipItem.formattedValue
              }
              
            })
          }
        }
      },
      scales: {
          yAxis: {
          title: {
            display: true,
            text: "Co2 ppm"
          }
        },
        xAxis : {
          type: "time",
          time: {
            unit: "month",
          },
          title: {
            display: true,
            text: "Time"
          }
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
          <div> 
        <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">Description</a><br />
        <a href="https://gml.noaa.gov/ccgg/trends/data.html">Dataset</a>
        <p>Line chart illustrating CO2 concentration measurements, measured in Mauna Loa, Hawaii.</p>
        <p>Datasets DSS, DE08 and DE08-2 are CO2 records derived from the three ice cores located at Law Dome, Antarctica. </p>
        </div>
        </div>
    );
  } } 
