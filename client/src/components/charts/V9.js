import React, {useEffect, useState} from 'react'
import { Doughnut } from "react-chartjs-2";

    let energy = "http://localhost:8080/V9AllData"

     function V9() {

      const [total, setTotal] = useState({
        datasets: [{
          data: [10,20,30],
        },
    ],
      });


      const [data, setData] = useState({
        datasets: [{
          data: [10,20,30],
        },
    ],
      });

      const [data1, setData1] = useState({
        datasets: [{
          data: [10,20,30],
        },
    ],
      });

      const [data2, setData2] = useState({
        datasets: [{
          data: [10,20,30],
        },
    ],
      });

      const [data3, setData3] = useState({
        datasets: [{
          data: [10,20,30],
        },
    ],
      });

        
      useEffect(() => {
      const fetchData = () => {
        fetch (energy).then ((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("res",res)
        const label = [];
        const data = [];
        for ( var i of res){
          if ( i.id > 1 && i.id < 20){
          label.push (i.sector);
          data.push (i.emission)
          }
      }
        console.log(label,data)
        setData({
            labels:label,
            datasets: [{
              data: data,
              backgroundColor: [         
                'black',
                'blue',
                'red',
                'green',
                'yellow',
                'orange',
                'grey',
                'pink',
                'brown',
                'white',
                'maroon',
                'khaki',
                'silver',
                'cyan',
                'olive',
                'ivory',
                'coral',
                'lime',
                'aquamarine'
              ]
            },
          ]
        }
        )
        }).catch (e => {
          console.log("error",e)
        })
      }
      fetchData();
      }, [])




      useEffect(() => {
        const fetchData = () => {
          fetch (energy).then ((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("res",res)
          const label = [];
          const data = [];
          for ( var i of res){
            if ( i.id == 1 || i.id == 20 || i.id == 23 || i.id == 26){
            label.push (i.sector);
            data.push (i.emission)
            }
        }  
          console.log(label,data)
       
          setTotal({
              labels:label,
              datasets: [{
                data: data,
                backgroundColor: [         
                  'black',
                  'green',
                  'aqua',
                  'brown',
                ]
              },
            ]
          }
          )
          }).catch (e => {
            console.log("error",e)
          })
        }
        fetchData();
        }, [])



      useEffect(() => {
        const fetchData = () => {
          fetch (energy).then ((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          console.log("res",res)
          const label = [];
          const data = [];
          for ( var i of res){
            if ( i.id > 20 && i.id < 23){
            label.push (i.sector);
            data.push (i.emission)
            }
        }
          console.log(label,data)
          setData1({
              labels:label,
              datasets: [{
                data: data,
                backgroundColor: [         
                  'green',
                  'red',
                ]
              },
            ]
          }
          )
          }).catch (e => {
            console.log("error",e)
          })
        }
        fetchData();
        }, [])



        useEffect(() => {
          const fetchData = () => {
            fetch (energy).then ((data) => {
            const res = data.json();
            return res
          }).then((res) => {
            console.log("res",res)
            const label = [];
            const data = [];
            for ( var i of res){
              if ( i.id > 23 && i.id < 26){
              label.push (i.sector);
              data.push (i.emission)
              }
          }
            console.log(label,data)
            setData2({
                labels:label,
                datasets: [{
                  data: data,
                  backgroundColor: [         
                    'black',
                    'aqua',
                   
                  ]
                },
              ]
            }
            )
            }).catch (e => {
              console.log("error",e)
            })
          }
          fetchData();
          }, [])



          useEffect(() => {
            const fetchData = () => {
              fetch (energy).then ((data) => {
              const res = data.json();
              return res
            }).then((res) => {
              console.log("res",res)
              const label = [];
              const data = [];
              for ( var i of res){
                if ( i.id > 26 && i.id < 32){
                label.push (i.sector);
                data.push (i.emission)
                }
            }
              console.log(label,data)
              setData3({
                  labels:label,
                  datasets: [{
                    data: data,
                    backgroundColor: [         
                      'black',
                      'aqua',
                      'orange',
                      'brown',
                      'grey'
                     
                    ]
                  },
                ]
              }
              )
              }).catch (e => {
                console.log("error",e)
              })
            }
            fetchData();
            }, [])
            
  
  return (

    <>
    
      <div className="V9" style={{width:'45%', height:'45%'}}>
      <h2>CO2 emissions by sector (%)</h2>
      <Doughnut data={total} />
    
      <br></br>
      <br></br>
      <p>
    Emissions by sector<br></br>
    <a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector">Description</a><br></br>
    <a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">Dataset</a>
    </p>
      <br></br>
    </div>
      <h1> Emissions by each subsector</h1> <br />
      <div className="V9" style={{width:'45%', height:'45%'}}>
      <h2>Energy emission</h2>
      <Doughnut data={data} />
      <br></br>
      <br></br>
      <br></br>
    </div>
   
 
    <div className="V9_1" style={{width:'45%', height:'45%'}}>
    <h2>Industrial processes emission</h2>
    <Doughnut data={data1} />
    <br></br>
    <br></br>
    <br></br>
    </div>
   


    <div className="V9_2" style={{width:'45%', height:'45%'}}>
    <h2>Waste emission</h2>
    <Doughnut data={data2} />
    <br></br>
    </div>

    <div className="V9_3" style={{width:'45%', height:'45%'}}>
    <h2>Agriculture Forestry & Land Use (AFOLU) emission</h2>
    <Doughnut data={data3} />
    <br></br>
    </div>
    
    </>
    
  )
  }
  export default V9;
