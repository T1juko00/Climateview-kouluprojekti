package com.climateview.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.co2_annualdata;

public interface co2AnnualRepo extends JpaRepository<co2_annualdata, Long>{
    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V3'", nativeQuery = true)
    List<co2_annualdata> getV3Data();

    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V5'", nativeQuery = true)
    List<co2_annualdata> getV5Data();
    
    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V4'", nativeQuery = true)
    List<co2_annualdata> getV4Data();
    
    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V7.1'", nativeQuery = true)
    List<co2_annualdata> getV7_1Data();

    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V4.1'", nativeQuery = true)
    List<co2_annualdata> getV4_1Data();

    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V4.2'", nativeQuery = true)
    List<co2_annualdata> getV4_2Data();
    
    @Query(value = "SELECT * FROM co2_annualdata WHERE id > 44819", nativeQuery = true)
    List<co2_annualdata> getV8Data();
}
