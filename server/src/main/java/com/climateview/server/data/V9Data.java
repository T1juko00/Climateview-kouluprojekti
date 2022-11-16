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

    private String company;
    private double gas;
    private String ClassId;

    public V9Data() {
    }

    public V9Data(String company, double gas, String ClassId) {
        this.company = company;
        this.gas = gas;
        this.ClassId = ClassId;
    }

    public long getId() {
        return this.id;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public double getGas() {
        return this.gas;
    }

    public void setGas(double gas) {
        this.gas = gas;
    }

    public String getClassId() {
        return this.ClassId;
    }

    public void setClassId(String ClassId) {
        this.ClassId = ClassId;
    }

 

   
   
  

    
}
