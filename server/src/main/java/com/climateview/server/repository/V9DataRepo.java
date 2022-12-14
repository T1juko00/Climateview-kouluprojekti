package com.climateview.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.V9Data;

public interface V9DataRepo extends JpaRepository<V9Data, Long>{
    
    @Query(value = "SELECT * FROM V9Data WHERE class_id = 'V9'", nativeQuery = true)
    List<V9Data> getV9Data();

    @Query(value = "SELECT * FROM V9Data WHERE class_id = 'V9_1'", nativeQuery = true)
    List<V9Data> getV9_1Data();

    @Query(value = "SELECT * FROM V9Data WHERE class_id = 'V9_2'", nativeQuery = true)
    List<V9Data> getV9_2Data(); 

    @Query(value = "SELECT * FROM V9Data WHERE class_id = 'V9_3'", nativeQuery = true)
    List<V9Data> getV9_3Data();

    @Query(value = "SELECT * FROM V9Data", nativeQuery = true)
    List<V9Data> getAllV9Data();
    
}
