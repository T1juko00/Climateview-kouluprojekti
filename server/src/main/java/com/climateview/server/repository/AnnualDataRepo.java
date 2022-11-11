package com.climateview.server.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.climateview.server.data.AnnualData;

public interface AnnualDataRepo extends JpaRepository<AnnualData,Long>{
}
