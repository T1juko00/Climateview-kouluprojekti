package com.climateview.server.northservice;
import static java.lang.Double.parseDouble;
import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

//Global annual = 1.1, monthly = 1.2
//Northern annual = 1.3, monthly = 1.4
//Southern annual = 1.5, monthly 1.6
//Atmospheric CO2 concentrations from Mauna Loa measurements starting 1958: class_id: V3, table: co2_annualdata, class_id: V3.1, table: co2_monthlydata
//Vostok Ice Core CO2 measurements, 417160 - 2342 year, class_id: V5, table: co2_annualdata
//Ice core 800k year composite study CO2 measurements class_id: V6, table: co2_monthlydata

public class databaseService {
    public static void main(String[] args) {

        String jdbcurl ="jdbc:mysql://localhost:3306/climate1";
        String username="root";
        String password="";
        String filepath="server\\src\\main\\resources\\rawdata\\8.National_Carbon_Emissions_paivitetty.csv";
    
        int batchSize=20;
    
        Connection connection=null;

       

        try {
            connection= DriverManager.getConnection(jdbcurl, username, password);
            connection.setAutoCommit(false);

            String sql="insert co2_annualdata (class_id,year,co2 ) values(?,?,?)";

            PreparedStatement statement=connection.prepareStatement(sql);

            BufferedReader linReader=new BufferedReader(new FileReader(filepath));

            String lineText=null;
            int count=0;

            linReader.readLine();
            while((lineText=linReader.readLine())!=null){
                String[] data= lineText.split(";");

                String year= data[0];
                String temp= data[1];
                String co2 = data[2];

                statement.setString(1,(year));
                //statement.setInt(2, parseInt(temp));
                statement.setDouble(3, parseDouble(co2));
                
                statement.addBatch();
                if(count%batchSize==0){
                    statement.executeBatch();
                }
            }
            linReader.close();
            statement.executeBatch();
            connection.commit();
            connection.close();
            System.out.println("data has been inserted");
        
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}
