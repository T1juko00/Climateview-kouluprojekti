package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class V9Data {
    

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    private String sector;
    private double emission;
    private String ClassId;

    public V9Data() {
    }

    public V9Data(String sector, double emission, String ClassId) {
        this.sector = sector;
        this.emission = emission;
        this.ClassId = ClassId;
       
    }

    public long getId() {
        return this.id;
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public double getEmission() {
        return this.emission;
    }

    public void setEmission(double emission) {
        this.emission = emission;
    }

    public String getClassId() {
        return this.ClassId;
    }

    public void setClassId(String ClassId) {
        this.ClassId = ClassId;
    }

 

   
   
  

    
}
