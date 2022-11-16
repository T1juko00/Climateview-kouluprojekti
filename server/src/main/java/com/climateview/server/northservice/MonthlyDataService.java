package com.climateview.server.northservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.MonthlyData;
import com.climateview.server.repository.MonthlyDataRepo;

@Service
public class MonthlyDataService {
    public List<MonthlyData> Monthly = new ArrayList<>();

    @Autowired
    MonthlyDataRepo pMonthly;

    public List<MonthlyData> getAllMonthlyData(){
        return pMonthly.findAll();
    }

    public Optional<MonthlyData> getMonthlyById(Long id){
        return pMonthly.findById(id);
    }

    public List<MonthlyData> getMonthlyByClassId(String class_Id){
        List<MonthlyData> search = new ArrayList<>();
        
        for (MonthlyData monthlyData : Monthly) {
            if(monthlyData.getClassId() == (class_Id)){
                search.add(monthlyData);
            }
            
        }
        return search;
    }


    public List<MonthlyData> getV1_1Data(){
        return pMonthly.getV1_1Data();
    } 

    public List<MonthlyData> getV1_3Data(){
        return pMonthly.getV1_3Data();
    }
    
    public List<MonthlyData> getV1_5Data(){
        return pMonthly.getV1_5Data();
    }


    
    
}
