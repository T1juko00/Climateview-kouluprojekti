package com.climateview.server.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.climateview.server.data.MonthlyData;

//V1.1, V1.3, V1.5

public interface MonthlyDataRepo extends JpaRepository<MonthlyData,Long> {

    @Query(value = "SELECT * FROM monthly_data WHERE class_id = 'V1.1'", nativeQuery = true)
    List<MonthlyData> getV1_1Data();

    @Query(value = "SELECT * FROM monthly_data WHERE class_id = 'V1.3'", nativeQuery = true)
    List<MonthlyData> getV1_3Data(); 

    @Query(value = "SELECT * FROM monthly_data WHERE class_id = 'V1.5'", nativeQuery = true)
    List<MonthlyData> getV1_5Data();

}
