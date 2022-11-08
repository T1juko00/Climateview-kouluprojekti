package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity

   
    
public class climatedata {
    
    @Id
    private int year;
    private Double temp, co2, ice_depth, years_calendar;
    private String country, sector, event, clasId;


    public climatedata() {
    }
    
    public climatedata(int year, Double temp, Double co2, Double ice_depth, Double years_calendar, String country, String sector, String event, String clasId) {
        this.year = year;
        this.temp = temp;
        this.co2 = co2;
        this.ice_depth = ice_depth;
        this.years_calendar = years_calendar;
        this.country = country;
        this.sector = sector;
        this.event = event;
        this.clasId = clasId;

    } 


    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public Double getTemp() {
        return this.temp;
    }

    public void setTemp(Double temp) {
        this.temp = temp;
    }

    public Double getCo2() {
        return this.co2;
    }

    public void setCo2(Double co2) {
        this.co2 = co2;
    }

    public Double getIce_depth() {
        return this.ice_depth;
    }

    public void setIce_depth(Double ice_depth) {
        this.ice_depth = ice_depth;
    }

    public Double getYears_calendar() {
        return this.years_calendar;
    }

    public void setYears_calendar(Double years_calendar) {
        this.years_calendar = years_calendar;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getEvent() {
        return this.event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public String getClasId() {
        return this.clasId;
    }

    public void setClasId(String clasId) {
        this.clasId = clasId;
    }


}
