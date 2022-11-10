package com.climateview.server.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.climateview.server.data.AnnualData;
import com.climateview.server.northservice.AnnualDataService;

@RestController
public class climateController {
    @Autowired
    AnnualDataService pAnnualdata;

    @GetMapping("allAnnual")
    public List<AnnualData> getAllAnnual(){
        return pAnnualdata.getAllAnnualDatas();
    }

}
