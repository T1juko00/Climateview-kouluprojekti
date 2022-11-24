package com.climateview.server.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class V10Data {
    
    
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;

    private int year;
    private String Event;
    private String class_id;

   

    public V10Data() {
    }
    
    public V10Data(int year, String Event, String class_id) {
        this.year = year;
        this.Event = Event;
        this.class_id = class_id;
    }
    
    public long getId() {
        return this.id;
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getEvent() {
        return this.Event;
    }

    public void setEvent(String Event) {
        this.Event = Event;
    }

    public String getClass_id() {
        return this.class_id;
    }

    public void setClass_id(String class_id) {
        this.class_id = class_id;
    }

}
