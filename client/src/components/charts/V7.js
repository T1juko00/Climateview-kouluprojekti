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
    
    const request1 = axios.get(temp);
    const request2 = axios.get(co2Year);
    
    const Chart = () => { 
      axios.all([request1,request2]).then(axios.spread((...responses) => {
        const tempAnnual = responses[0].data
        const co2Annual = responses[1].data
        
    
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
      },
      scales: {
       y: {
        type: 'linear',
        position: 'right',
        },
        y1: {
          type: 'linear',
          position: 'left',
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
            <p> 
            <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">Description</a><br />
          <p>Description here</p> <br />
          <a href="http://carolynsnyder.com/publications.php">Dataset</a>
          </p>
          </div>
      );
    }  
    };
    
   