package com.climateview.server.northservice;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.northerndata;
import com.climateview.server.repository.northrepository;

@Service
public class northernservice {

    @Autowired
    northrepository northrepo;


    @PostConstruct
    public void init (){
        northrepo.saveAll(List.of(
            new northerndata(1L, 50)
        ));
    }
    
}
