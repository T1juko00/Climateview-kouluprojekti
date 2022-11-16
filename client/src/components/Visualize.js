import React, { useState,useEffect } from "react";
import axios from "axios";
import {Bar, Line, Pie} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";

const V2 = () => {
    const [chartData, setChartData] = useState({})
    const [isloading, setisloading] = useState(true)
  
    const Chart = () => {
      let year = []
      let temp = []
      axios.get("http://localhost:8080/allAnnual")
        .then(response => {
          for (const dataObj of response.data) {
            year.push(dataObj.year)
            temp.push(dataObj.temp)
          }
          setChartData({
            labels: year,
            datasets: [
              {
                label: 'V1_4 Data',
                data: temp,
                backgroundColor:'red',
                borderColor:'black'
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
    const options = {
      responsive: true,
      plugins:{
        legend:{
          position: "top",
        },
        title: {
          display : true,
          text:"V1_4 Data",
        },
        },
        scales: {
          temp: {
            position:"right"
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
      return (
        <div id='chart' style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div><Line data={chartData} options={options} /></div>
          </div>
        </div>
    );
  }
  export default V2