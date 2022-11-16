package com.climateview.server.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.climateview.server.data.AnnualData;
import com.climateview.server.data.MonthlyData;
import com.climateview.server.data.User;
import com.climateview.server.northservice.AnnualDataService;
import com.climateview.server.northservice.MonthlyDataService;
import com.climateview.server.northservice.SecurityService;

import java.util.Base64;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class climateController {
    @Autowired
    AnnualDataService pAnnualdata;
    @Autowired
    MonthlyDataService pMonthlydata;
    @Autowired
    SecurityService secService;

    @GetMapping("allAnnual")
    public List<AnnualData> getAllAnnual(){
        return pAnnualdata.getAllAnnualDatas();
        
    }


    @GetMapping("allMonthly")
    public List<MonthlyData> getAllMonthly(){
        return pMonthlydata.getAllMonthlyData();
    }


    @GetMapping("V1_1DATA")
    public List<MonthlyData> getV1_1data(){
        return pMonthlydata.getV1_1Data();
    } 

    @GetMapping("V1_3DATA")
    public List<MonthlyData> getV1_3data(){
        return pMonthlydata.getV1_3Data();
    } 

    @GetMapping("V1_5DATA")
    public List<MonthlyData> getV1_5data(){
        return pMonthlydata.getV1_5Data();
    }

    @GetMapping("V2Data")
    public List<AnnualData> getV2Data(){
        return pAnnualdata.getV2Data();
        
    } 

    @GetMapping("V1Data")
    public List<AnnualData> getV1Data(){
        return pAnnualdata.getV1Data();
        
    }

    @GetMapping("V1_2Data")
    public List<AnnualData> getV1_2Data(){
        return pAnnualdata.getV1_2Data();
        
    }

    @GetMapping("V1_4Data")
    public List<AnnualData> getV1_4Data(){
        return pAnnualdata.getV1_4Data();
        
    }

    @PostMapping("register")
    public ResponseEntity<String> register(
        @RequestParam String uname,
        @RequestParam String pw,
        @RequestParam String email)
        {
            User u = secService.register(uname, pw, email);
            return new ResponseEntity<>(u.username, HttpStatus.OK);
        }

    @PostMapping("login")
    public ResponseEntity<String> login(
        @RequestParam String uname, 
        @RequestParam String pw)
        {
            String token = secService.login(uname, pw);

            if(token == null){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            return new ResponseEntity<>(token, HttpStatus.OK);
        }
 
    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer){

        if(bearer.startsWith("Bearer")){
            String token = bearer.split(" ")[1];
            String username = secService.validateJwt(token);
            if(username!=null){
                return new ResponseEntity<>("Private data for "+username, HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("loginbasic")
    public ResponseEntity<String> loginBasic(@RequestHeader("Authorization") String basicAuth)
        {

            String token = null;
            //"Basic uname:pw"
            if(basicAuth.startsWith("Basic")){
                String credentials = basicAuth.split(" ")[1];
                String[] user = new String( Base64.getDecoder().decode(credentials)).split(":");
                token = secService.login(user[0], user[1]);
            }

        
            if(token == null){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }

            return new ResponseEntity<>(token, HttpStatus.OK);
        }
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    /*  @GetMapping("AnnualById/{id}")
    public Optional<AnnualData> getAnnualById(@PathVariable long id){
        return pAnnualdata.getAnnualById(id);
    }

    @GetMapping("MonthlyById/{id}")
    public Optional<MonthlyData> getMonthlyById(@PathVariable long id){
        return pMonthlydata.getMonthlyById(id);
    }

    @GetMapping("annualbyid/{classId}")
    public List<AnnualData> getAnnualByClassId(@PathVariable String classId){

        return pAnnualdata.getAnnualByClassId(classId);
        
    }

    @GetMapping("monthlybyid/{classId}")
    public List<MonthlyData> getMonthlyByClassId(@PathVariable String classId){

        return pMonthlydata.getMonthlyByClassId(classId);
        
    }
    */

