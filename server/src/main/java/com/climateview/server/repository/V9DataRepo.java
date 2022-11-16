package com.climateview.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.climateview.server.data.V9Data;

public interface V9DataRepo extends JpaRepository<V9Data, Long>{
    
}
