package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class co2_annualdata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;
    private double co2;
    private String classId;


    public co2_annualdata() {
    }

    public co2_annualdata(int year, double co2, String classId) {
        this.year = year;
        this.co2 = co2;
        this.classId = classId;
    }

    public Long getId() {
        return this.id;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
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
