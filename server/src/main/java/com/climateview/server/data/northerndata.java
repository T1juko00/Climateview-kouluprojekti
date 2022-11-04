package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class northerndata {
    
    @Id
    private int year;
    private Double temp;

    public northerndata() {
    }

    public northerndata(int year, Double temp) {
        this.year = year;
        this.temp = temp;
    }

    public long getYear() {
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
    
}
