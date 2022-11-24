package com.climateview.server.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.AnnualData;

//V2, V1.2, V1, V1.4

public interface AnnualDataRepo extends JpaRepository<AnnualData,Long>{
    
    @Query(value = "SELECT * FROM annual_data WHERE class_id = 'V2'", nativeQuery = true)
    List<AnnualData> getV2Data();

    @Query(value = "SELECT * FROM annual_data WHERE class_id = 'V1.2'", nativeQuery = true)
    List<AnnualData> getV1_2Data();

    @Query(value = "SELECT * FROM annual_data WHERE class_id = 'V1'", nativeQuery = true)
    List<AnnualData> getV1Data();

    @Query(value = "SELECT * FROM annual_data WHERE class_id = 'V1.4'", nativeQuery = true)
    List<AnnualData> getV1_4Data();

    @Query(value = "SELECT * FROM annual_data WHERE class_id = 'V7'", nativeQuery = true)
    List<AnnualData> getV7Data();
}
