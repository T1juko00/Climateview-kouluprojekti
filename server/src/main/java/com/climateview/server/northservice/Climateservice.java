package com.climateview.server.northservice;


import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.repository.northrepository;

@Service
public class Climateservice {
     

@Autowired
northrepository northrepo;


    @PostConstruct
    public void init (){
        
    }


}
