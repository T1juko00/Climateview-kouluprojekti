package com.climateview.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.V3_1_co2_monthlydata;

public interface V3_1_co2MonthlyRepo extends JpaRepository<V3_1_co2_monthlydata,Long> {
    @Query(value = "SELECT * FROM co2_monthlydata WHERE class_id = 'V3.1'", nativeQuery = true)
    List<V3_1_co2_monthlydata> getV3_1Data();
    
    @Query(value = "SELECT * FROM co2_monthlydata WHERE class_id = 'V6'", nativeQuery = true)
    List<V3_1_co2_monthlydata> getV6Data();
}
