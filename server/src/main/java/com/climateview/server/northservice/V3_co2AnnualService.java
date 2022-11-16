package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.V3_co2_annualdata;
import com.climateview.server.repository.V3_co2AnnualRepo;

@Service
public class V3_co2AnnualService {

    @Autowired
    V3_co2AnnualRepo pCo2;

    public List<V3_co2_annualdata> getV3Data(){
        return pCo2.getV3Data();
    } 

    public List<V3_co2_annualdata> getV5Data(){
        return pCo2.getV5Data();
    } 

    
}
