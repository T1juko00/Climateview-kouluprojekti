import React, { useState,useEffect } from "react";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";

const V2 = () => {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    const Chart = () => {
      let years_calendar = []
      let temp = []
      axios.get("http://localhost:8080/V1_1DATA")
        .then(response => {
          for (const dataObj of response.data) {
            years_calendar.push(dataObj.years_calendar)
            temp.push(dataObj.temp)
          }
          setChartData({
            labels: years_calendar,
            datasets: [
              {
                label: 'V1.1 Data',
                data: temp,
                backgroundColor: [
                  'black'
                ]
              }
            ],
          })
          setisloading(false)
        }).catch(error => {
          alert(error)
          setisloading(true)
        }
  
        )
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
      <>
        <div id='chart' style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div><Line data={chartData} options={{
              responsive: true,
            }} /></div>
          </div>
        </div>
      </>
    )
    }
  
  
  }
  
  export default V2