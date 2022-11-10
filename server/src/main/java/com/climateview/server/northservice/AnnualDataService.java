package com.climateview.server.northservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.AnnualData;
import com.climateview.server.repository.AnnualDataRepo;

@Service
public class AnnualDataService {
    List<AnnualData> Annual = new ArrayList<>();

    @Autowired
    AnnualDataRepo pAnnual;

    public List<AnnualData> getAllAnnualDatas(){
        return pAnnual.findAll();
    }

    
    /*public List<AnnualData> getAnnualdatabyId(String classId){

        List<AnnualData> search = new ArrayList<>();

        for (AnnualData annualData : Annual) {
            if(annualData.getClassId() == (classId)){
                search.add(annualData);
            }
        }

        return search;

    }*/
}
