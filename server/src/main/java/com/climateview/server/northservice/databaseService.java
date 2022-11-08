package com.climateview.server.northservice;
import static java.lang.Integer.parseInt;
import static java.lang.Double.parseDouble;
import java.io.BufferedReader;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;


public class databaseService {
    public static void main(String[] args) {

        String jdbcurl ="jdbc:mysql://localhost:3306/climate";
        String username="root";
        String password="";
        String filepath="server\\src\\main\\resources\\rawdata\\northhem.csv";
    
        int batchSize=20;
    
        Connection connection=null;

        String id = "V2";

        try {
            connection= DriverManager.getConnection(jdbcurl, username, password);
            connection.setAutoCommit(false);

            String sql="insert into climatedata(classId) values(?)";

            PreparedStatement statement=connection.prepareStatement(sql);

            BufferedReader linReader=new BufferedReader(new FileReader(filepath));

            String lineText=null;
            int count=0;

            linReader.readLine();
            while((lineText=linReader.readLine())!=null){
                String[] data= lineText.split(";");

                String year= data[0];
                String temp= data[1];

                statement.setInt(1, parseInt(year));
                statement.setDouble(2, parseDouble(temp));
                statement.setString(3, id);
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
