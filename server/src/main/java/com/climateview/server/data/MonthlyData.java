package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MonthlyData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double years_calendar;
    private double temp;
    private String classId;

    public MonthlyData() {
    }

    public MonthlyData(double years_calendar, double temp, String classId) {
        this.years_calendar = years_calendar;
        this.temp = temp;
        this.classId = classId;
    }

    public Long getId() {
        return this.id;
    }

    public double getYears_calendar() {
        return this.years_calendar;
    }

    public void setYears_calendar(double years_calendar) {
        this.years_calendar = years_calendar;
    }

    public double getTemp() {
        return this.temp;
    }

    public void setTemp(double temp) {
        this.temp = temp;
    }

    public String getClassId() {
        return this.classId;
    }

    public void setClassId(String classId) {
        this.classId = classId;
    }
    
}
