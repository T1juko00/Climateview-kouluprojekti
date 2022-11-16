package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.V3_1_co2_monthlydata;
import com.climateview.server.repository.V3_1_co2MonthlyRepo;

@Service
public class V3_1_co2MonthlyService {

    @Autowired
    V3_1_co2MonthlyRepo pCo2;

    public List<V3_1_co2_monthlydata> getV3_1Data(){
        return pCo2.getV3_1Data();
    } 
    
    public List<V3_1_co2_monthlydata> getV6Data(){
        return pCo2.getV6Data();
    } 
    
}
