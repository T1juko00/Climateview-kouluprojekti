import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";


   export default function V2 () {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let globalAnnual = "http://localhost:8080/V1Data"
    let globalMonthy = "http://localhost:8080/V1_1DATA"
    let northAnnual = "http://localhost:8080/V1_2Data"
    let northMonthly = "http://localhost:8080/V1_3DATA"
    let southAnnual = "http://localhost:8080/V1_4Data"
    let southMonthly = "http://localhost:8080/V1_5DATA"
    let v2Data = "http://localhost:8080/V2Data" 

    const request1 = axios.get(globalAnnual);
    const request2 = axios.get(globalMonthy);
    const request3 = axios.get(northAnnual)
    const request4 = axios.get(northMonthly);
    const request5 = axios.get(southAnnual);
    const request6 = axios.get(southMonthly);
    const request7 = axios.get(v2Data);

    const Chart = () => { 
       
      axios.all([request1, request2, request3, request4, request5, request6,request7]).then(axios.spread((...responses) => {
        const globalYear = responses[0].data
        const globalMonth = responses[1].data
        const northYear = responses[2].data
        const northMonth = responses[3].data
        const southYear = responses[4].data
        const southMonth = responses[5].data
        const v2Year = responses[6].data

        const testi = globalYear.map(d => d.year + 0.01)
        console.log(testi);
        console.log(globalMonth);
        
      let muuttuja = {
           
           
        datasets: [
            {
            label: 'Global Annual',
            data: globalYear.map(d =>{
              let newformat = {
                temp: d.temp,
                year: d.year.toString()
              }
              return newformat
            } ),
            backgroundColor: 'red',
            borderColour: 'red',
            parsing: {
              xAxisKey: "year",
              yAxisKey: "temp",
            }
        
          }, 
            {  
              label: 'Global Monthly',
              data: globalMonth.map(d =>{
                let newformat = {
                  temp: d.temp,
                  years_calendar: d.years_calendar.toString().substring(0,4) + "-" + d.years_calendar.toString().substring(5,7).padEnd(2,"0") + "-01"
                }
                return newformat
              } ),
              backgroundColor: 'blue',
              borderColour: 'blue',
              parsing: {
                xAxisKey: "years_calendar",
                yAxisKey: "temp",
              } 
            },
            { 
              label: 'Northern Annual',
              data: northYear.map(d => {
                let newFormat = {
                  temp: d.temp,
                  year: d.year.toString()
                }
                return newFormat
              }),
              backgroundColor: 'green',
              borderColour: 'green',
              parsing:{
                xAxisKey: "year",
                yAxisKey: "temp"
              }
            },
            {
              label: 'Northern Monthly',
              data: northMonth.map(d =>{
                let newformat = {
                  temp: d.temp,
                  years_calendar: d.years_calendar.toString().substring(0,4) + "-" + d.years_calendar.toString().substring(5,7).padEnd(2,"0") + "-01"
                }
                return newformat
              } ),
              backgroundColor: 'yellow',
              borderColour: 'yellow',
              parsing: {
                xAxisKey: "years_calendar",
                yAxisKey: "temp",
              } 
            },
            {
              label: 'Southern Annual',
              data: southYear.map(d => {
                let newFormat = {
                  temp: d.temp,
                  year: d.year.toString()
                }
                return newFormat
              }),
              backgroundColor: 'purple',
              borderColour: 'purple',
              parsing: {
                xAxisKey: "year",
                yAxisKey: "temp",
              } 
            },
            {
              label: 'Southern Monthly',
              data: southMonth.map(d =>{
                let newformat = {
                  temp: d.temp,
                  years_calendar: d.years_calendar.toString().substring(0,4) + "-" + d.years_calendar.toString().substring(5,7).padEnd(2,"0") + "-01"
                }
                return newformat
              } ),
              backgroundColor: 'pink',
              borderColour: 'pink',
              parsing: {
                xAxisKey: "years_calendar",
                yAxisKey: "temp",
              }

            },
            {
              label: 'V2 Data',
              data: v2Year.map(d => {
                let newFormat = {
                  temp: d.temp,
                  year: d.year.toString().padStart(4,"0")
                }
                return newFormat
              }),
              backgroundColor: 'violet',
              borderColour: 'violet',
              parsing: {
                xAxisKey: "year",
                yAxisKey: "temp",
              } 
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
          text: "Global historical surface temperature anomalies from January 1850 onwards",
        },
      },
      scales: {
          yAxis: {
          type: "linear",
          title: {
            display: true,
            text: "Temperature"
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
          <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">Description V2</a><br />
          <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">Hadcrut description and dataset</a><br />
          <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">Dataset V2</a>
          <p>Line chart illustrates global historical surface temperature anomalies from January 1850 onward.</p>
          <p>V2 dataset is a reconstruction of Northern Hemisphere temperature anomalies for the past 2000 years.</p>
          </div>
        </div>
    );
  } }

  



  