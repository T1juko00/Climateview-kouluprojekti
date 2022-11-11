package com.climateview.server.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.climateview.server.data.AnnualData;
import com.climateview.server.data.MonthlyData;
import com.climateview.server.northservice.AnnualDataService;
import com.climateview.server.northservice.MonthlyDataService;

@RestController
public class climateController {
    @Autowired
    AnnualDataService pAnnualdata;
    @Autowired
    MonthlyDataService pMonthlydata;

    @GetMapping("allAnnual")
    public List<AnnualData> getAllAnnual(){
        return pAnnualdata.getAllAnnualDatas();
        
    }


    @GetMapping("allMonthly")
    public List<MonthlyData> getAllMonthly(){
        return pMonthlydata.getAllMonthlyData();
    }


    @GetMapping("V1_1DATA")
    public List<MonthlyData> getV1_1data(){
        return pMonthlydata.getV1_1Data();
    } 

    @GetMapping("V1_3DATA")
    public List<MonthlyData> getV1_3data(){
        return pMonthlydata.getV1_3Data();
    } 

    @GetMapping("V1_5DATA")
    public List<MonthlyData> getV1_5data(){
        return pMonthlydata.getV1_5Data();
    }

    @GetMapping("V2Data")
    public List<AnnualData> getV2Data(){
        return pAnnualdata.getV2Data();
        
    } 

    @GetMapping("V1Data")
    public List<AnnualData> getV1Data(){
        return pAnnualdata.getV1Data();
        
    }

    @GetMapping("V1_2Data")
    public List<AnnualData> getV1_2Data(){
        return pAnnualdata.getV1_2Data();
        
    }

    @GetMapping("V1_4Data")
    public List<AnnualData> getV1_4Data(){
        return pAnnualdata.getV1_4Data();
        
    }

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    /*  @GetMapping("AnnualById/{id}")
    public Optional<AnnualData> getAnnualById(@PathVariable long id){
        return pAnnualdata.getAnnualById(id);
    }

    @GetMapping("MonthlyById/{id}")
    public Optional<MonthlyData> getMonthlyById(@PathVariable long id){
        return pMonthlydata.getMonthlyById(id);
    }

    @GetMapping("annualbyid/{classId}")
    public List<AnnualData> getAnnualByClassId(@PathVariable String classId){

        return pAnnualdata.getAnnualByClassId(classId);
        
    }

    @GetMapping("monthlybyid/{classId}")
    public List<MonthlyData> getMonthlyByClassId(@PathVariable String classId){

        return pMonthlydata.getMonthlyByClassId(classId);
        
    }
    */

}
