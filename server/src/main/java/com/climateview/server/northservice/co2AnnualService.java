package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.co2_annualdata;
import com.climateview.server.repository.co2AnnualRepo;

@Service
public class co2AnnualService {

    @Autowired
    co2AnnualRepo pCo2;

    public List<co2_annualdata> getV3Data(){
        return pCo2.getV3Data();
    } 

    public List<co2_annualdata> getV5Data(){
        return pCo2.getV5Data();
    } 

    public List<co2_annualdata> getV4Data(){
        return pCo2.getV4Data();
    } 

    public List<co2_annualdata> getV7_1Data(){
        return pCo2.getV7_1Data();
    } 

    public List<co2_annualdata> getV4_1Data(){
        return pCo2.getV4_1Data();
    } 

    public List<co2_annualdata> getV4_2Data(){
        return pCo2.getV4_2Data();
    } 

    public List<co2_annualdata> getV8Data(){
        return pCo2.getV8Data();
    } 

    
}
