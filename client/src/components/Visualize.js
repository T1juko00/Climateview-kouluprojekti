import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {Bar, Line} from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto";

const URL = 'http://localhost:3306/v2' 

export default function Visualize(){
    
    const [year, setYear] = useState(0);
    const [temp, setTemp] = useState(0);
    
    axios.get(URL)
    .then((response) => {
        console.log(response.json);
    }
    )
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <div></div>
    )
}