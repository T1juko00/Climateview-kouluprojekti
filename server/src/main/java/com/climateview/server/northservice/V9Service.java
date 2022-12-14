package com.climateview.server.northservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.V9Data;
import com.climateview.server.repository.V9DataRepo;

@Service
public class V9Service {

    @Autowired
    V9DataRepo pemission;


    public List<V9Data> getV9Data(){
        return pemission.getV9Data();
    } 

    public List<V9Data> getV9_1Data(){
        return pemission.getV9_1Data();
    } 

    public List<V9Data> getV9_2Data(){
        return pemission.getV9_2Data();
    }

    public List<V9Data> getV9_3Data(){
        return pemission.getV9_3Data();
    }

    
    public List<V9Data> getV9AllData(){
        return pemission.getAllV9Data();
    }
    
    
    
}
