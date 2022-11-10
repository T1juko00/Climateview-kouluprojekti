package com.climateview.server.northservice;
import static java.lang.Double.parseDouble;
import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

// Global annual = 1.1, monthly = 1.2
//Northern annual = 1.3, monthly = 1.4
//Southern annual = 1.5, monthly 1.6

public class databaseService {
    public static void main(String[] args) {

        String jdbcurl ="jdbc:mysql://localhost:3306/climate";
        String username="root";
        String password="";
        String filepath="server\\src\\main\\resources\\rawdata\\1.5.HadCRUT.analysis.summary_series.southern_hemisphere.monthly.csv";
    
        int batchSize=20;
    
        Connection connection=null;

       

        try {
            connection= DriverManager.getConnection(jdbcurl, username, password);
            connection.setAutoCommit(false);

            String sql="insert into climatedata(years_calendar, temp) values(?,?)";

            PreparedStatement statement=connection.prepareStatement(sql);

            BufferedReader linReader=new BufferedReader(new FileReader(filepath));

            String lineText=null;
            int count=0;

            linReader.readLine();
            while((lineText=linReader.readLine())!=null){
                String[] data= lineText.split(";");

                String year= data[0];
                String temp= data[1];

                statement.setDouble(1, parseDouble(year));
                statement.setDouble(2, parseDouble(temp));
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
