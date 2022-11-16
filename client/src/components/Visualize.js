import React, { useState,useEffect } from "react";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";
import "chartjs-adapter-luxon";

const V2 = () => {
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
      
                    
          setChartData({
           
            labels: globalMonth.map(d => d.years_calendar),
            datasets: [
                {
              
                label: 'Global Annual',
                data: globalYear.map(d => d.temp),
                backgroundColor: 'red',
                borderColour: 'red'
                
              },
                
                {
                  
                  label: 'Global Monthly',
                  data: globalMonth.map(d => d.temp),
                  backgroundColor: 'blue',
                  borderColour: 'blue'
                
                },

                {
                  
                  label: 'Northern Annual',
                  data: northYear.map(d => d.temp),
                  backgroundColor: 'green',
                  borderColour: 'green'
                  
                },
                {
                  label: 'Northern Monthly',
                  data: northMonth.map(d => d.temp),
                  backgroundColor: 'yellow',
                  borderColour: 'yellow'
                  
                },
                {
                  label: 'Southern Annual',
                  data: southYear.map(d => d.temp),
                  backgroundColor: 'purple',
                  borderColour: 'purple'
                  
                },
                {
                  label: 'Southern Monthly',
                  data: southMonth.map(d => d.temp),
                  backgroundColor: 'pink',
                  borderColour: 'pink'
                  
                 
                },
                {
                  label: 'V2 Data',
                  data: v2Year.map(d => d.temp),
                  backgroundColor: 'violet',
                  borderColour: 'violet'
                 
                

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
          text: "V1-V2 data",
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
  }
  export default V2