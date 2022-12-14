package com.climateview.server.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


//Cryptaa salasanan

@Service
public class MyPasswordEncoder extends BCryptPasswordEncoder{  
}