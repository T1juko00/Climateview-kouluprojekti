package com.climateview.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.V3_co2_annualdata;

public interface V3_co2AnnualRepo extends JpaRepository<V3_co2_annualdata, Long>{
    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V3'", nativeQuery = true)
    List<V3_co2_annualdata> getV3Data();

    @Query(value = "SELECT * FROM co2_annualdata WHERE class_id = 'V5'", nativeQuery = true)
    List<V3_co2_annualdata> getV5Data();
    
    
}
