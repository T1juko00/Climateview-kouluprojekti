package com.climateview.server.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.climateview.server.data.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{

}