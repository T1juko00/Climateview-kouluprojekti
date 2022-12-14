import React, { useState,useEffect } from "react";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";

export default function V8() {

    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    let globalAnnual = "http://localhost:8080/V8Data"
    
    const request1 = axios.get(globalAnnual);
    
    const Chart = () => { 
      axios.all([request1]).then(axios.spread((...responses) => {
        const allData = responses[0].data
        //console.log(allData);
        
        
        //Get all unique countries
        const countries = allData.map(d => d.classId)
            .filter((value, index, self) => self.indexOf(value) === index)
            console.log(countries); 


        const classId = allData.map(d => d.classId)


        //Get all unique years
        const year = allData.map(d => d.year)
        .filter((value, index, self) => self.indexOf(value) === index)
        //console.log(year); 

        const years = allData.map(d => d.year)
        const co2 = allData.map(d => d.co2)

        const emissions = allData.map((country, index) => {
          let countryObj = {};
          countryObj.country = country;
          countryObj.values = {}; 
          countryObj.values.country = classId[index]
          countryObj.values.co2 = co2[index]
          countryObj.values.year = years[index]
          
          return countryObj;
        }) 

        
        console.log(emissions);
       
        /*function setValues(map, key, value) {
            if (!map.has(key)){
                map.set(key, new Set(value));
                return;
            }
            map.get(key).add(value);
        }
        
        var allValues = new Map();
        setValues(allValues,countries,years)
         console.log(allValues);

         for (let [key, value] of  allValues.entries()) {
            console.log(key + " = " + value)
        }*/

          
    
          setChartData({

            labels: year,
            datasets: [
                {
                label: "",
                data: emissions ,
                backgroundColor: 'red',
                borderColour: 'red',
                parsing: {
                    xAxisKey: "values.year",
                    yAxisKey: "values.co2",
                  }               
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
          text: "Co2 emissions by Country",
        },
        tooltip: {
          callbacks: {
            label: ((tooltipItem) => {
              console.log(tooltipItem);
              if(tooltipItem.datasetIndex === 0){
                return tooltipItem.raw.values.country + " " + tooltipItem.formattedValue
              }
              else {
                return tooltipItem.dataset.label + " " + tooltipItem.formattedValue
              }
              
            })
          }
        },
      },
      scales: {
          
          yAxis: {
          stacked: true,
          title: {
            display: true,
            text: "Co2 measurement ppm (parts per million)"
          }
        },
        xAxis: {
          title: {
            display: true,
            text: "Year"
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
          <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description</a><br />
          <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset</a>
        <p>This stacked line chart shows the co2 emissions of each country over time.</p> <br />
        </div>
        
        
        </div>
    );
  } } 

















