package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class northerndata {
    @Id
    private long year;
    private int temp;

    public northerndata() {
    }

    public northerndata(long year, int temp) {
        this.year = year;
        this.temp = temp;
    }

    public long getYear() {
        return this.year;
    }

    public void setYear(long year) {
        this.year = year;
    }

    public int getTemp() {
        return this.temp;
    }

    public void setTemp(int temp) {
        this.temp = temp;
    }
    
}
