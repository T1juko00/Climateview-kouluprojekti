package com.climateview.server.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.climateview.server.data.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{

    @Query(value = "SELECT * FROM User", nativeQuery = true)
    List<User> getUsers();
}