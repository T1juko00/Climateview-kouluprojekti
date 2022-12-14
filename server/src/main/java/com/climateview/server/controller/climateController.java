package com.climateview.server.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.climateview.server.data.AnnualData;
import com.climateview.server.data.MonthlyData;
import com.climateview.server.data.User;
import com.climateview.server.data.V10Data;
import com.climateview.server.data.co2_monthlydata;
import com.climateview.server.data.co2_annualdata;
import com.climateview.server.data.V9Data;
import com.climateview.server.northservice.AnnualDataService;
import com.climateview.server.northservice.MonthlyDataService;
import com.climateview.server.northservice.SecurityService;
import com.climateview.server.northservice.V10Service;
import com.climateview.server.northservice.co2MonthlyService;
import com.climateview.server.northservice.co2AnnualService;
import com.climateview.server.northservice.V9Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController


public class climateController {

    @Autowired
    AnnualDataService pAnnualdata;
    @Autowired
    MonthlyDataService pMonthlydata;
    @Autowired
    SecurityService secService;
    @Autowired
    co2MonthlyService pco2m;
    @Autowired
    co2AnnualService pco2a;

    @Autowired
    V9Service pemission;

    @Autowired
    V10Service pEvent;



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

    @GetMapping("V7Data")
    public List<AnnualData> getV7Data(){
        return pAnnualdata.getV7Data();
    }

    @GetMapping("V3_1Data")
    public List<co2_monthlydata> getV3_1Data(){
        return pco2m.getV3_1Data();
        
    }

    @GetMapping("V6Data")
    public List<co2_monthlydata> getV6Data(){
        return pco2m.getV6Data();
        
    }

    @GetMapping("V3Data")
    public List<co2_annualdata> getV3Data(){
        return pco2a.getV3Data();
    }

    @GetMapping("V7_1Data")
    public List<co2_annualdata> getV7_1Data(){
        return pco2a.getV7_1Data();
    }



    @GetMapping("V5Data")
    public List<co2_annualdata> getV5Data(){
        return pco2a.getV5Data();
        
    }

    @GetMapping("V8Data")
    public List<co2_annualdata> getV8Data(){
        return pco2a.getV8Data();
        
    }

    @GetMapping("V9Data")
    public List<V9Data> getV9Data(){
        return pemission.getV9Data();

    }

    @GetMapping("V9_1Data")
    public List<V9Data> getV9_1Data(){
        return pemission.getV9_1Data();

    }

    @GetMapping("V9_2Data")
    public List<V9Data> getV9_2Data(){
        return pemission.getV9_2Data();

    }

    @GetMapping("V9_3Data")
    public List<V9Data> getV9_3Data(){
        return pemission.getV9_3Data();

    }
    @GetMapping("V9AllData")
    public List<V9Data> getV9AllData(){
        return pemission.getV9AllData();

    }



    @GetMapping("V4Data")
    public List<co2_annualdata> getV4Data(){
        return pco2a.getV4Data();

    }

    @GetMapping("V4_1Data")
    public List<co2_annualdata> getV4_1Data(){
        return pco2a.getV4_1Data();

    }

    @GetMapping("V4_2Data")
    public List<co2_annualdata> getV4_2Data(){
        return pco2a.getV4_2Data();

    }

    @GetMapping("V10_7Data")
    public List<V10Data> getV10_7Data(){
        return pEvent.getV10_7Data();

    }

    @GetMapping("V10_4Data")
    public List<V10Data> getV10_4Data(){
        return pEvent.getV10_4Data();

    }


    @GetMapping("users")
    public List<User> getUsers() {
        return secService.getUsers();
    }


    @PostMapping("register")
    public ResponseEntity<String> register(
        @RequestParam String uname,String pw,String email)
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


    @DeleteMapping("delete/user/{username}")
    public ResponseEntity<String> deleteUsername(@PathVariable String username){
        secService.deleteUsername(username);
        return ResponseEntity.ok().build();
    }


}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   


