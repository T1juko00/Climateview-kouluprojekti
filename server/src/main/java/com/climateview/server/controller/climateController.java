package com.climateview.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.climateview.server.data.climatedata;
import com.climateview.server.northservice.Climateservice;

@RestController
public class climateController {

    @Autowired
    Climateservice pClimateservice;

    @GetMapping("climate/{classId}")
    public List<climatedata> getClimatedata(@PathVariable String classId){
        return pClimateservice.getClimatedatabyId(classId);
    }

    @GetMapping("allclimates")
    public List<climatedata> getclimates(){
        return pClimateservice.getAllClimatess();
    }

}
