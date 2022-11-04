package com.climateview.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climateview.server.data.northerndata;

@Repository
public interface northrepository extends JpaRepository <northerndata, Long> {
}
