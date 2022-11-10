package com.climateview.server.northservice;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.climateview.server.data.climatedata;
import com.climateview.server.repository.northrepository;



@Service
public class Climateservice {

    List <climatedata> climate = new ArrayList<>();
     
    @Autowired
    northrepository pnorthRepo;

    public List<climatedata> getClimatedatabyId(String classId){

        List<climatedata> search = new ArrayList<>();

       for (climatedata climatedata : climate) {
         if (climatedata.getClassId() ==(classId)){
            search.add(climatedata);
         }
       }

       return search;
    }
    

    public List<climatedata> getAllClimatess(){
      return pnorthRepo.findAll();
    }

}
