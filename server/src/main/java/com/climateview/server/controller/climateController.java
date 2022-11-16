package com.climateview.server.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.climateview.server.data.AnnualData;
import com.climateview.server.data.MonthlyData;
import com.climateview.server.data.V3_co2_annualdata;
import com.climateview.server.data.V3_1_co2_monthlydata;
import com.climateview.server.northservice.AnnualDataService;
import com.climateview.server.northservice.MonthlyDataService;
import com.climateview.server.northservice.V3_co2AnnualService;
import com.climateview.server.northservice.V3_1_co2MonthlyService;

@RestController
public class climateController {
    @Autowired
    AnnualDataService pAnnualdata;
    @Autowired
    MonthlyDataService pMonthlydata;
    @Autowired
    V3_co2AnnualService pCo2;
    @Autowired
    V3_1_co2MonthlyService pco2;

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

    @GetMapping("V3Data")
    public List<V3_co2_annualdata> getV3Data(){
        return pCo2.getV3Data();
        
    }

    @GetMapping("V5Data")
    public List<V3_co2_annualdata> getV5Data(){
        return pCo2.getV5Data();
        
    }

    @GetMapping("V3_1Data")
    public List<V3_1_co2_monthlydata> getV3_1Data(){
        return pco2.getV3Data();
        
    }

    @GetMapping("V6Data")
    public List<V3_1_co2_monthlydata> getV6Data(){
        return pco2.getV6Data();
        
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
