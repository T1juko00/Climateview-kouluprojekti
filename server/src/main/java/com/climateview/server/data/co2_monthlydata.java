package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class co2_monthlydata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double year_monthly;
    private double co2;
    private String classId;

    public co2_monthlydata() {
    }

    public co2_monthlydata(double year_monthly, double co2, String classId) {
       
        this.year_monthly = year_monthly;
        this.co2 = co2;
        this.classId = classId;
    }

    public Long getId() {
        return this.id;
    }

    public double getYear_monthly() {
        return this.year_monthly;
    }

    public void setYear_monthly(double year_monthly) {
        this.year_monthly = year_monthly;
    }

    public double getCo2() {
        return this.co2;
    }

    public void setCo2(double co2) {
        this.co2 = co2;
    }

    public String getClassId() {
        return this.classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }

    
}
