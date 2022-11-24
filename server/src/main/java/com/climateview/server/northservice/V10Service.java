package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.V10Data;
import com.climateview.server.repository.V10DataRepo;

@Service
public class V10Service {

    @Autowired
    V10DataRepo pEvent;

    public List<V10Data> getV10_7Data(){
        return pEvent.getV10_7Data();
    } 

    public List<V10Data> getV10_4Data(){
        return pEvent.getV10_4Data();
    } 
    
}
