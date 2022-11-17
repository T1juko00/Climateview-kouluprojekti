package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AnnualData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;
    private double temp;
    private String classId;
    


    public AnnualData(){

    }
    public AnnualData(int year, double temp, String classId) {
        this.classId = classId;
        this.year = year;
        this.temp = temp;
       
    }

    public String getClassId(){
        return this.classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

 

  



    
   


    
}
