package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.V9Data;
import com.climateview.server.repository.V9DataRepo;

@Service
public class V9Service {

    @Autowired
    V9DataRepo pGas;

    public List<V9Data> getV9Data(){
        return pGas.getV9Data();
    } 
    
}
