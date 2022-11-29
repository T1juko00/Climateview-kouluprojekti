package com.climateview.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.climateview.server.data.V10Data;

public interface V10DataRepo extends JpaRepository<V10Data, Long>{
    @Query(value = "SELECT * FROM V10Data WHERE class_id = 'V7'", nativeQuery = true)
    List<V10Data> getV10_7Data();

    @Query(value = "SELECT * FROM V10Data WHERE class_id = 'V4'", nativeQuery = true)
    List<V10Data> getV10_4Data();
    
}
